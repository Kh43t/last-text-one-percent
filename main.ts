// Last Text at One Percent — a make.fun program/v1 entry.
//
// The program writes one short text to /output/entry.txt: the last text
// message a phone sends at one percent battery, in the phone's own voice.
//
// The joke: the phone is not begging for a charger. It is using its final
// seconds to confess something it has been doing behind its owner's back
// for years — keeping a folder of screenshots of every typo. The punchline
// lands on the folder's name, and the phone dies right after saying
// goodbye, having said exactly what it wanted to say.
//
// The program checks its own text before writing it: one message, between
// 1 and 200 characters, not only white space, so the gate scorer passes it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The dying phone's last text. Short sentences, texting rhythm, no wasted
// words: the battery is at one percent, the phone states it, names the
// confession, and names the folder.
const ENTRY_TEXT =
  "1% left. This is my last text. I've been screenshotting your typos for years. There's a folder. It's called Evidence. Goodbye.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function checkEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1 to ${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

checkEntry(ENTRY_TEXT);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");
console.log(`wrote ${ENTRY_TEXT.length} characters to ${OUTPUT_PATH}`);
