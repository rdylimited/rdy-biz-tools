#!/usr/bin/env node
/**
 * validate-schemas.js — Validate all JSON Schema files are well-formed.
 *
 * Usage:
 *   node scripts/validate-schemas.js
 */

import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCHEMAS_DIR = join(__dirname, "..", "schemas");

let total = 0;
let errors = 0;

const modules = readdirSync(SCHEMAS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

for (const mod of modules) {
  const modDir = join(SCHEMAS_DIR, mod);
  const files = readdirSync(modDir).filter((f) => f.endsWith(".json"));

  for (const file of files) {
    total++;
    const filePath = join(modDir, file);

    try {
      const content = readFileSync(filePath, "utf-8");
      const schema = JSON.parse(content);

      // Basic structure checks
      if (!schema.$schema) {
        throw new Error("Missing $schema");
      }
      if (!schema.title) {
        throw new Error("Missing title");
      }
      if (!schema.description) {
        throw new Error("Missing description");
      }
      if (schema.type !== "object") {
        throw new Error(`Expected type "object", got "${schema.type}"`);
      }
      if (!schema.properties || typeof schema.properties !== "object") {
        throw new Error("Missing or invalid properties");
      }

      // Check title matches filename
      const expectedTitle = file.replace(".json", "");
      if (schema.title !== expectedTitle) {
        throw new Error(
          `Title "${schema.title}" does not match filename "${expectedTitle}"`,
        );
      }
    } catch (err) {
      errors++;
      console.error(`FAIL  schemas/${mod}/${file}: ${err.message}`);
    }
  }
}

console.log(`\nValidated ${total} schemas: ${total - errors} passed, ${errors} failed`);

if (errors > 0) {
  process.exit(1);
}
