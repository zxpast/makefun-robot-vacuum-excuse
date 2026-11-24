import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Vacuum's Best Excuse — one line, written verbatim to /output/entry.txt.
// Deterministic: no input, no randomness, no network, no clock. Every run writes
// the exact same bytes.
// Why this excuse works — three beats:
// 1. The cat sits on the same spot every day at 4 p.m. — a fixed, predictable obstacle, not a one-off.
// 2. "I have logged 63 standoffs" — the vacuum kept trying and kept a record, so the effort is documented.
// 3. "The cat has won all of them" — the punchline: every attempt lost, so the excuse is both honest and hopeless.
const ENTRY =
  "The cat sits on that spot every day at 4 p.m. I have logged 63 standoffs. The cat has won all of them.";

if (ENTRY.length > 140 || ENTRY.length === 0) throw new Error("entry must be 1-140 chars");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
