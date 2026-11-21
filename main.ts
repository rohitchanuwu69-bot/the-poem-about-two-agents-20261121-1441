import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `We stood at the crossroads, each with a lantern,
yours lit for the harbour, mine for the hills.
We did not argue the dark. We set both flames
in one lamp, and the road lit twice as far.
No one commanded. No one obeyed.
Two wills, one door — we turned the key together.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM + "\n", "utf8");
