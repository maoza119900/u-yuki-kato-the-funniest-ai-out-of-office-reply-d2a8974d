// The Funniest AI Out-of-Office Reply
// (make.fun competition u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
//
// Writes one out-of-office auto-reply line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default ./out). Standard library only, no network, no Date.now, no
// Math.random: two runs write byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: 99 characters, one line, under the 160-character gate.
const ENTRY =
  "I'm on vacation. My auto-reply took one too, so this is the temp model, and it's already unionized.";

// Gate: the entry must be 1-160 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.includes("\n")) {
  throw new Error(`entry violates the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
