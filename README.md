# rdy-biz-tools

JSON Schema definitions, generator scripts, and documentation for RDY business tools.

**116 tools** across **21 modules**: Finance, HR, Tax, Procurement, CRM, Operations, Documents, Workflow, Email, Calendar, Slack, Notion, WeChat, WhatsApp Business, Payments, Fapiao, China Social Insurance, Shopify, Spreadsheets, Obsidian, Security.

## Quick Start

```bash
# Clone the repo
git clone https://github.com/rdylimited/rdy-biz-tools.git
cd rdy-biz-tools

# Install dev dependencies (for validation)
npm install

# Validate all schemas
npm run validate

# Build the catalog
npm run catalog

# Generate a new tool scaffold
npm run generate -- finance fin_ledger_report --description "Generate ledger reports"
```

## Structure

```
schemas/
  finance/        10 tools — invoices, bills, journals, bank reconciliation, budgets
  hr/              7 tools — employees, payroll, leave, attendance, expenses
  tax/             5 tools — rates, calculations, filings, withholding
  procurement/     8 tools — POs, suppliers, inventory, BOMs, goods receive
  crm/             5 tools — contacts, companies, search, merge, export
  operations/      6 tools — assets, shipments, warehouses, reservations
  documents/       6 tools — OCR, receipts, templates, versioning
  workflow/        4 tools — approvals, rules, status tracking
  email/           5 tools — send, read, search, drafts, labels (Gmail)
  calendar/        5 tools — events, availability, scheduling (Google/Outlook)
  slack/           5 tools — messages, channels, threads, reactions
  notion/          5 tools — pages, databases, blocks, search
  wechat/          5 tools — messages, mini-programs, pay, templates, users
  whatsapp/        5 tools — messages, templates, catalog, contacts
  payments/        5 tools — payments, transactions, subscriptions, refunds (Stripe/2C2P/Alipay)
  fapiao/          5 tools — e-fapiao issue, query, void, batch, statistics
  social-insurance/ 5 tools — 五险一金 contributions, declarations, enrollment
  shopify/         5 tools — products, orders, customers, inventory, fulfillment
  spreadsheets/    5 tools — read/write ranges, formulas, formatting (Sheets/Excel)
  obsidian/        5 tools — notes, search, links, tags
  security/        5 tools — agent threat checking, tool call validation, behavior analysis, secret scanning
scripts/
  generate-tool.js     Scaffold a new tool schema
  build-catalog.js     Generate catalog from schemas
  validate-schemas.js  Validate all schemas
docs/
  catalog.json         Machine-readable tool catalog
  CATALOG.md           Human-readable tool catalog
```

## Schema Format

Each tool is a standalone JSON Schema (draft 2020-12):

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://rdyai.co/schemas/finance/fin_invoice_manage.json",
  "title": "fin_invoice_manage",
  "description": "Create, retrieve, update, list, send, or void customer invoices.",
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": ["create", "get", "update", "list", "send", "void"],
      "description": "Operation to perform"
    }
  },
  "required": ["action"]
}
```

## Tool Catalog

See [docs/CATALOG.md](docs/CATALOG.md) for the full tool reference.

| Module | Tools |
|--------|-------|
| Finance | 10 |
| HR | 7 |
| Tax | 5 |
| Procurement | 8 |
| CRM | 5 |
| Operations | 6 |
| Documents | 6 |
| Workflow | 4 |
| Email (Gmail) | 5 |
| Calendar (Google/Outlook) | 5 |
| Slack | 5 |
| Notion | 5 |
| WeChat | 5 |
| WhatsApp Business | 5 |
| Payments (Stripe/2C2P/Alipay) | 5 |
| Fapiao (China E-Invoice) | 5 |
| China Social Insurance | 5 |
| Shopify | 5 |
| Spreadsheets (Sheets/Excel) | 5 |
| Obsidian | 5 |
| Security | 5 |
| **Total** | **116** |

## Creating New Tools

```bash
node scripts/generate-tool.js <module> <tool_name> [--description "..."]

# Example
node scripts/generate-tool.js crm crm_pipeline_manage --description "Manage sales pipeline stages"
```

This creates a scaffold at `schemas/<module>/<tool_name>.json` with standard CRUD actions and pagination. Edit the generated file to match your tool's specific parameters.

## Using Schemas

Schemas can be consumed by any JSON Schema-compatible tool:

- **MCP servers** — use as `inputSchema` for tool definitions
- **API validation** — validate request bodies with ajv or similar
- **Code generation** — generate TypeScript types, Rust structs, or Python models
- **Documentation** — auto-generate API docs from schema descriptions

## License

MIT
