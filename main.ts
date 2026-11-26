// Roast the Smart Fridge: One Line, Best Laugh Wins
// Entry program: writes a single original roast line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The line must be UTF-8, one line, 1-160 characters, not only whitespace.

import { chmodSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge photographs me every time I open it, so somewhere in the cloud there's a flipbook of me getting fatter at 2 a.m.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Clear only the directory's contents, never the directory itself:
// the grader mounts the output dir and removing it fails with EPERM.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

// Validate the line against the gate before writing: UTF-8, one line,
// 1 to 160 characters, not only whitespace.
if (
  LINE.length < 1 ||
  LINE.length > 160 ||
  LINE.includes("\n") ||
  LINE.trim().length === 0
) {
  throw new Error(`entry line fails the gate (${LINE.length} characters)`);
}

writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf8", mode: 0o644 });
// Force the mode explicitly: the write mode is masked by the process umask,
// and the entry must be 0644.
chmodSync(join(outDir, "entry.txt"), 0o644);
