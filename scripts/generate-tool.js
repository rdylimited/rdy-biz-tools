#!/usr/bin/env node
/**
 * generate-tool.js — Scaffold a new RDY business tool schema.
 *
 * Usage:
 *   node scripts/generate-tool.js <module> <tool_name> [--description "..."]
 *
 * Examples:
 *   node scripts/generate-tool.js finance fin_ledger_report
 *   node scripts/generate-tool.js hr hr_training_manage --description "Manage employee training records"
 */

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const MODULES = [
  "finance",
  "hr",
  "tax",
  "procurement",
  "crm",
  "operations",
  "documents",
  "workflow",
  "email",
  "calendar",
  "slack",
  "notion",
  "wechat",
  "whatsapp",
];

function parseArgs(args) {
  const positional = [];
  let description = "";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--description" && i + 1 < args.length) {
      description = args[++i];
    } else {
      positional.push(args[i]);
    }
  }

  return { module: positional[0], toolName: positional[1], description };
}

function generateSchema(module, toolName, description) {
  return JSON.stringify(
    {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: `https://rdyai.co/schemas/${module}/${toolName}.json`,
      title: toolName,
      description: description || `TODO: Add description for ${toolName}`,
      type: "object",
      properties: {
        action: {
          type: "string",
          enum: ["create", "get", "list", "update", "delete"],
          description: "Operation to perform",
        },
        id: {
          type: "string",
          description: "Record UUID (required for get/update/delete)",
        },
        page: {
          type: "number",
          minimum: 1,
          default: 1,
          description: "Page number",
        },
        limit: {
          type: "number",
          minimum: 1,
          maximum: 100,
          default: 25,
          description: "Items per page",
        },
      },
      required: ["action"],
    },
    null,
    2,
  );
}

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Usage: generate-tool.js <module> <tool_name> [--description \"...\"]");
  console.error(`\nModules: ${MODULES.join(", ")}`);
  process.exit(1);
}

const { module, toolName, description } = parseArgs(args);

if (!MODULES.includes(module)) {
  console.error(`Unknown module: ${module}`);
  console.error(`Valid modules: ${MODULES.join(", ")}`);
  process.exit(1);
}

const dir = join(ROOT, "schemas", module);
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

const filePath = join(dir, `${toolName}.json`);

if (existsSync(filePath)) {
  console.error(`Schema already exists: ${filePath}`);
  process.exit(1);
}

const schema = generateSchema(module, toolName, description);
writeFileSync(filePath, schema + "\n", "utf-8");
console.log(`Created: schemas/${module}/${toolName}.json`);
