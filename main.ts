import { mkdirSync, writeFileSync } from "node:fs";

// One short text written to relax the reader: a quiet evening indoors,
// the small sounds of a house at rest, and the night holding the room.
const sentences = [
  "The kettle ticks as it cools, and the rain finds the roof one drop at a time.",
  "The blanket is still warm from your body.",
  "Nothing out there asks anything of you.",
  "The house keeps its small sounds to itself, and the night, so much larger than this room, lets you stay exactly here.",
];
const entry = sentences.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
