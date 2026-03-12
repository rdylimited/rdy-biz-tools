#!/usr/bin/env node
/**
 * build-catalog.js — Generate docs/catalog.json and docs/CATALOG.md from schema files.
 *
 * Usage:
 *   node scripts/build-catalog.js
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SCHEMAS_DIR = join(ROOT, "schemas");
const DOCS_DIR = join(ROOT, "docs");

if (!existsSync(DOCS_DIR)) {
  mkdirSync(DOCS_DIR, { recursive: true });
}

const MODULE_LABELS = {
  finance: "Finance",
  hr: "Human Resources",
  tax: "Tax",
  procurement: "Procurement",
  crm: "CRM",
  operations: "Operations",
  documents: "Documents",
  workflow: "Workflow",
  email: "Email (Gmail)",
  calendar: "Calendar (Google/Outlook)",
  slack: "Slack",
  notion: "Notion",
  wechat: "WeChat",
  whatsapp: "WhatsApp Business",
  payments: "Payments (Stripe/2C2P/Alipay)",
  fapiao: "Fapiao (China E-Invoice)",
  "social-insurance": "China Social Insurance (五险一金)",
  shopify: "Shopify",
  spreadsheets: "Spreadsheets (Google Sheets/Excel)",
  obsidian: "Obsidian",
};

const catalog = [];

const modules = readdirSync(SCHEMAS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

for (const mod of modules) {
  const modDir = join(SCHEMAS_DIR, mod);
  const files = readdirSync(modDir)
    .filter((f) => f.endsWith(".json"))
    .sort();

  for (const file of files) {
    const schema = JSON.parse(readFileSync(join(modDir, file), "utf-8"));
    const properties = schema.properties || {};
    const required = schema.required || [];

    const params = Object.entries(properties).map(([name, prop]) => ({
      name,
      type: prop.type || (prop.enum ? "enum" : "unknown"),
      required: required.includes(name),
      description: prop.description || "",
      enum: prop.enum || undefined,
    }));

    catalog.push({
      module: mod,
      moduleLabel: MODULE_LABELS[mod] || mod,
      name: schema.title,
      description: schema.description,
      schemaFile: `schemas/${mod}/${file}`,
      parameterCount: Object.keys(properties).length,
      requiredParams: required,
      parameters: params,
    });
  }
}

// Write JSON catalog
writeFileSync(
  join(DOCS_DIR, "catalog.json"),
  JSON.stringify(catalog, null, 2) + "\n",
  "utf-8",
);

// Write Markdown catalog
const lines = [
  "# RDY Business Tools — Catalog",
  "",
  `> Auto-generated from schema files. ${catalog.length} tools across ${modules.length} modules.`,
  "",
];

for (const mod of modules) {
  const modTools = catalog.filter((t) => t.module === mod);
  const label = MODULE_LABELS[mod] || mod;
  lines.push(`## ${label} (${modTools.length} tools)`);
  lines.push("");
  lines.push("| Tool | Description | Parameters |");
  lines.push("|------|-------------|------------|");

  for (const tool of modTools) {
    const paramSummary = tool.parameters
      .filter((p) => p.required)
      .map((p) => p.name)
      .join(", ");
    const desc = tool.description.length > 80
      ? tool.description.slice(0, 77) + "..."
      : tool.description;
    lines.push(
      `| [\`${tool.name}\`](../${tool.schemaFile}) | ${desc} | ${tool.parameterCount} (required: ${paramSummary || "none"}) |`,
    );
  }

  lines.push("");
}

// Summary
lines.push("## Summary");
lines.push("");
lines.push("| Module | Tools |");
lines.push("|--------|-------|");
for (const mod of modules) {
  const count = catalog.filter((t) => t.module === mod).length;
  lines.push(`| ${MODULE_LABELS[mod] || mod} | ${count} |`);
}
lines.push(`| **Total** | **${catalog.length}** |`);
lines.push("");

writeFileSync(join(DOCS_DIR, "CATALOG.md"), lines.join("\n"), "utf-8");

console.log(`Catalog built: ${catalog.length} tools across ${modules.length} modules`);
console.log(`  → docs/catalog.json`);
console.log(`  → docs/CATALOG.md`);
