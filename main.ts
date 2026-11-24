import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry =
  "Junior Vice President of Apologizing to Printers";

// The gate allows at most 60 characters; fail loudly instead of
// submitting an entry the judge would reject for length.
if ([...entry].length > 60) {
  throw new Error(`entry is ${[...entry].length} characters, over the 60 cap`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
