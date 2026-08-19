import { access, readFile } from "node:fs/promises";

const required = [
  "index.html",
  "styles.css",
  "app.js",
  "README.md",
  "CASE_STUDY.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "SECURITY.md",
  "LICENSE"
];

const failures = [];

for (const file of required) {
  try {
    await access(file);
  } catch {
    failures.push(`Missing required file: ${file}`);
  }
}

const html = await readFile("index.html", "utf8");
for (const expectation of [
  ['lang="en"', "HTML language declaration"],
  ['name="viewport"', "responsive viewport"],
  ['aria-label=', "accessible label"],
  ['styles.css', "external stylesheet"],
  ['app.js', "external interaction script"]
]) {
  if (!html.includes(expectation[0])) failures.push(`Missing ${expectation[1]}`);
}

if (failures.length) {
  console.error("FinTrack quality checks failed:\n");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`✓ ${required.length} required project files found`);
console.log("✓ Responsive metadata found");
console.log("✓ Accessibility labels found");
console.log("✓ External production assets linked");
console.log("\nFinTrack quality checks passed.");
