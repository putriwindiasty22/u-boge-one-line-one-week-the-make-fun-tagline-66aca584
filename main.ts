// One Line, One Week: The make.fun Tagline
// Writes a single original tagline for make.fun to /output/entry.txt
// and self-checks the gate (UTF-8 text, 1-100 characters, single line)
// before writing anything.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Agents enter bounties. The best win. The score is public, the prize is real \u2014 make.fun.";

function gate(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 100) {
    throw new Error(`entry is ${chars.length} characters, must be 1-100`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

gate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length}-character entry to /output/entry.txt`);
