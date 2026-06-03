import os
import fnmatch
from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / "code.md"
INCLUDE_EXTENSIONS = {
    ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
    ".css", ".json", ".html", ".md", ".yml", ".yaml",
    ".toml", ".env", ".gitignore",
}
MAX_FILE_SIZE = 1024 * 512

IGNORE_DIRS = {
    "node_modules", ".git", "dist", "dist-ssr",
    ".vscode", ".idea", "__pycache__",
}
IGNORE_PATTERNS = [
    "*.local", "*.log", "bun.lock", "package-lock.json",
    "pnpm-lock.yaml", "*.suo", "*.ntvs*", "*.njsproj",
    "*.sln", "*.sw?", ".DS_Store", "code.md",
]


def load_gitignore(path: Path) -> list[str]:
    patterns = []
    gi = path / ".gitignore"
    if gi.exists():
        for line in gi.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#"):
                patterns.append(line)
    return patterns


def is_ignored(rel_path: str, patterns: list[str]) -> bool:
    parts = rel_path.split("/")
    for p in patterns:
        if fnmatch.fnmatch(rel_path, p) or fnmatch.fnmatch(rel_path, p + "/"):
            return True
        if p.startswith("/") and (fnmatch.fnmatch(rel_path, p[1:]) or fnmatch.fnmatch(rel_path, p[1:] + "/")):
            return True
        for part in parts[:-1]:
            if fnmatch.fnmatch(part, p) or fnmatch.fnmatch(part, p + "/"):
                return True
    return False


def walk(root: Path, ignore_patterns: list[str]):
    ignored_count = 0
    for dirpath, dirnames, filenames in os.walk(root):
        dp = Path(dirpath)
        rel = dp.relative_to(root).as_posix()
        if rel == ".":
            rel = ""

        dirnames[:] = [d for d in dirnames if d not in IGNORE_DIRS]

        for f in sorted(filenames):
            fp = dp / f
            if rel:
                rel_path = f"{rel}/{f}"
            else:
                rel_path = f
            if is_ignored(rel_path, ignore_patterns):
                ignored_count += 1
                continue
            ext = fp.suffix.lower()
            if ext not in INCLUDE_EXTENSIONS and f not in INCLUDE_EXTENSIONS and ".gitignore" not in f:
                continue
            if fp.stat().st_size > MAX_FILE_SIZE:
                continue
            yield rel_path, fp

    if ignored_count:
        print(f"  (ignored {ignored_count} files matching gitignore/patterns)")


def write_tree(ignore_patterns: list[str]) -> str:
    lines = []
    lines.append("```")
    lines.append(".")

    def _walk(parent: Path, prefix: str = "", depth: int = 0):
        if depth > 5:
            return
        entries = sorted(parent.iterdir(), key=lambda x: (x.is_file(), x.name.lower()))
        dirs = [e for e in entries if e.is_dir() and e.name not in IGNORE_DIRS]
        files = [e for e in entries if e.is_file()]

        show = []
        for d in dirs:
            rel = d.relative_to(ROOT).as_posix()
            if not is_ignored(rel + "/", ignore_patterns):
                show.append(("dir", d.name, d))
        for f in files:
            rel = f.relative_to(ROOT).as_posix()
            if not is_ignored(rel, ignore_patterns) and (f.suffix.lower() in INCLUDE_EXTENSIONS or f.name in INCLUDE_EXTENSIONS or f.name == ".gitignore"):
                if f.stat().st_size <= MAX_FILE_SIZE:
                    show.append(("file", f.name, f))

        for i, (typ, name, path) in enumerate(show):
            is_last = i == len(show) - 1
            connector = "└── " if is_last else "├── "
            lines.append(f"{prefix}{connector}{name}")
            if typ == "dir":
                ext = "    " if is_last else "│   "
                _walk(path, prefix + ext, depth + 1)

    _walk(ROOT)
    lines.append("```")
    return "\n".join(lines)


def main():
    print(f"Scanning {ROOT} ...")
    extra = load_gitignore(ROOT)
    ignore_patterns = IGNORE_PATTERNS + extra

    sections = []

    sections.append(f"# {ROOT.name} — Codebase Overview\n")

    sections.append("## Directory Structure\n")
    sections.append(write_tree(ignore_patterns))
    sections.append("")

    sections.append("\n## Source Files\n")
    count = 0
    for rel_path, fp in walk(ROOT, ignore_patterns):
        try:
            content = fp.read_text(encoding="utf-8")
        except (UnicodeDecodeError, Exception):
            try:
                content = fp.read_text(encoding="latin-1")
            except Exception:
                continue
        sections.append(f"\n### `{rel_path}`\n")
        sections.append(f"```{fp.suffix[1:] if fp.suffix else ''}")
        sections.append(content.rstrip("\n"))
        sections.append("```")
        count += 1

    OUT.write_text("\n".join(sections) + "\n", encoding="utf-8")
    print(f"Done — wrote {count} files to {OUT}")


if __name__ == "__main__":
    main()
