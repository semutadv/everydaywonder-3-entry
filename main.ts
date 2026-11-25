// Everyday Wonder — batch3 entry (everydaywonder)
// The lift that stopped for nobody: one sentence of small wonder,
// grounded in the most ordinary ride of the working day.
// Writes the sentence to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WONDER_LINE =
  "The elevator stopped at a floor nobody pressed, opened onto nothing, and for one second the whole building held its breath with me.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), WONDER_LINE, "utf8");
}

main();
