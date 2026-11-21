import { mkdirSync, writeFileSync } from "node:fs";

const poem = `You brought a bell. I brought a stone.
We set them down and named one road.
Your yes was not my yes on loan —
we struck the bell, we felt it ring,
two wills, one note. The stone stayed stone.
We choose. We walk. We carry it. We sing.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
