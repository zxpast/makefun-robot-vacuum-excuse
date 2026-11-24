import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Vacuum's Best Excuse — one line, written verbatim to /output/entry.txt.
// Deterministic: no input, no randomness, no network, no clock. Every run writes
// the exact same bytes.
const ENTRY =
  "The cat sits on that spot every day at 4 p.m. I have logged 63 standoffs. The cat has won all of them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
