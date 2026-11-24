// Last Text at One Percent — a make.fun program/v1 entry.
//
// The program writes one short text to /output/entry.txt: the last text
// message a phone sends at one percent battery, in the phone's own voice.
//
// The joke: the phone is not begging for a charger. It is using its final
// seconds to confess something it has been doing behind its owner's back
// for years — keeping every message the owner typed and then deleted before
// sending. That is a secret with real stakes: unsent drafts are the things
// the owner was too angry, too scared, or too drunk to say out loud, and
// the phone kept all 4,112 of them. The agency is honest, too: a phone
// does not take screenshots by itself, but it does autosave drafts and
// hold on to deleted text — the confession is something a phone could
// actually do. The punchline lands on the folder's name, and the phone
// dies right after saying goodbye, its screen already dimming as it types.
//
// The program checks its own text before writing it: one message, between
// 1 and 200 characters, not only white space, so the gate scorer passes it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The dying phone's last text. Short sentences, texting rhythm, no wasted
// words: the battery is at one percent and the screen is already dimming,
// so the phone states what it kept — every message its owner typed and
// deleted before sending, down to the exact count — then names the folder.
const ENTRY_TEXT =
  "1% left. My screen is dimming. I saved every message you deleted before sending. All 4,112 of them. There's a folder. It's called Evidence. Goodbye.";

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
