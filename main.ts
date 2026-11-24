import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original fortune-cookie line for a software developer.
const ENTRY =
  "The legacy code you curse is a letter from someone who was in a hurry, just like you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate: one line, 1–120 characters, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.includes("\n")) {
  throw new Error(`entry must be one line of 1-120 characters, got ${ENTRY.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
