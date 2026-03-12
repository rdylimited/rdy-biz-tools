# RDY Business Tools — Catalog

> Auto-generated from schema files. 51 tools across 8 modules.

## CRM (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`crm_company_manage`](../schemas/crm/crm_company_manage.json) | Create, read, update, list, and deactivate companies (customers, vendors, or ... | 12 (required: action) |
| [`crm_contact_export`](../schemas/crm/crm_contact_export.json) | Export contacts in CSV or JSON format. | 2 (required: none) |
| [`crm_contact_manage`](../schemas/crm/crm_contact_manage.json) | Create, read, update, list, and deactivate contacts. | 10 (required: action) |
| [`crm_contact_merge`](../schemas/crm/crm_contact_merge.json) | Merge duplicate contacts by absorbing a secondary contact into a primary cont... | 2 (required: primary_id, secondary_id) |
| [`crm_contact_search`](../schemas/crm/crm_contact_search.json) | Full-text search across contacts. | 3 (required: query) |

## Documents (6 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`doc_generate`](../schemas/documents/doc_generate.json) | Render a document from a template with variable substitution. | 3 (required: template_id) |
| [`doc_ocr_scan`](../schemas/documents/doc_ocr_scan.json) | Extract text from images using OCR. | 4 (required: none) |
| [`doc_receipt_process`](../schemas/documents/doc_receipt_process.json) | Parse and extract structured data from a receipt via OCR text or image. | 3 (required: none) |
| [`doc_search`](../schemas/documents/doc_search.json) | Search documents by name, type, and date range. | 6 (required: none) |
| [`doc_template_manage`](../schemas/documents/doc_template_manage.json) | Create, read, update, list, and deactivate document templates. | 7 (required: action) |
| [`doc_version_history`](../schemas/documents/doc_version_history.json) | Retrieve the version history of a document. | 1 (required: document_id) |

## Finance (10 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`fin_balance_sheet`](../schemas/finance/fin_balance_sheet.json) | Generate a balance sheet report as of a given date, grouping accounts by type... | 3 (required: as_of_date) |
| [`fin_bank_reconcile`](../schemas/finance/fin_bank_reconcile.json) | Import bank transactions, list unreconciled items, match to journal entries, ... | 9 (required: action) |
| [`fin_bill_manage`](../schemas/finance/fin_bill_manage.json) | Create, retrieve, update, list, receive, or void supplier bills. Mirrors invo... | 16 (required: action) |
| [`fin_budget_manage`](../schemas/finance/fin_budget_manage.json) | Create budgets, add account lines, list budgets, and compare budgeted vs actu... | 11 (required: action) |
| [`fin_chart_of_accounts`](../schemas/finance/fin_chart_of_accounts.json) | Create, retrieve, update, list, or deactivate general ledger accounts. Suppor... | 9 (required: action) |
| [`fin_credit_note`](../schemas/finance/fin_credit_note.json) | Create, retrieve, or list credit and debit notes against invoices or bills. | 16 (required: action) |
| [`fin_invoice_manage`](../schemas/finance/fin_invoice_manage.json) | Create, retrieve, update, list, send, or void customer invoices. Auto-generat... | 14 (required: action) |
| [`fin_journal_entry`](../schemas/finance/fin_journal_entry.json) | Create, retrieve, list, post, or reverse double-entry journal entries. Valida... | 11 (required: action) |
| [`fin_payment_record`](../schemas/finance/fin_payment_record.json) | Record received or made payments with optional allocation to invoices or bills. | 16 (required: action) |
| [`fin_quotation_manage`](../schemas/finance/fin_quotation_manage.json) | Create, retrieve, update, list, send, accept, reject, or convert quotations t... | 14 (required: action) |

## Human Resources (7 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`hr_attendance_log`](../schemas/hr/hr_attendance_log.json) | Clock employees in/out, retrieve attendance records, and generate monthly sum... | 8 (required: action) |
| [`hr_contract_manage`](../schemas/hr/hr_contract_manage.json) | Create, retrieve, list, or terminate employee contracts including salary and ... | 13 (required: action) |
| [`hr_employee_manage`](../schemas/hr/hr_employee_manage.json) | Create, retrieve, update, list, or terminate employees with department and co... | 11 (required: action) |
| [`hr_expense_claim`](../schemas/hr/hr_expense_claim.json) | Create, retrieve, update, list, submit, approve, reject, or reimburse employe... | 9 (required: action) |
| [`hr_leave_manage`](../schemas/hr/hr_leave_manage.json) | Request, approve, reject, or cancel leave requests, and query leave balances ... | 14 (required: action) |
| [`hr_payroll_run`](../schemas/hr/hr_payroll_run.json) | Create, calculate, approve, pay, get, or list payroll runs. Calculate compute... | 6 (required: action) |
| [`hr_payslip_generate`](../schemas/hr/hr_payslip_generate.json) | Generate text-based payslip summaries for a payroll run. Provide employee_id ... | 2 (required: payroll_run_id) |

## Operations (6 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`ops_asset_manage`](../schemas/operations/ops_asset_manage.json) | Fixed asset management including creation, lookup, disposal, and depreciation... | 14 (required: action) |
| [`ops_delivery_note`](../schemas/operations/ops_delivery_note.json) | Create and manage delivery notes linked to shipments. | 6 (required: action) |
| [`ops_reservation_availability`](../schemas/operations/ops_reservation_availability.json) | Query available reservation slots for a given resource type and date range. | 4 (required: resource_type, date_from, date_to) |
| [`ops_reservation_manage`](../schemas/operations/ops_reservation_manage.json) | Manage reservations including creation, updates, cancellation, completion, an... | 13 (required: action) |
| [`ops_shipment_track`](../schemas/operations/ops_shipment_track.json) | Shipment tracking with status updates, events, and item management. | 14 (required: action) |
| [`ops_warehouse_manage`](../schemas/operations/ops_warehouse_manage.json) | Warehouse CRUD operations and stock transfer between warehouses. | 13 (required: action) |

## Procurement (8 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`proc_bom_cost_calc`](../schemas/procurement/proc_bom_cost_calc.json) | Calculate total BOM cost recursively | 2 (required: bom_id) |
| [`proc_bom_manage`](../schemas/procurement/proc_bom_manage.json) | Bill of Materials management with multi-level support | 17 (required: action) |
| [`proc_goods_receive`](../schemas/procurement/proc_goods_receive.json) | Create or retrieve goods received notes | 9 (required: action) |
| [`proc_inventory_check`](../schemas/procurement/proc_inventory_check.json) | Check stock levels, warehouse contents, low stock report | 3 (required: action) |
| [`proc_purchase_order`](../schemas/procurement/proc_purchase_order.json) | CRUD + send/receive/close/cancel purchase orders | 15 (required: action) |
| [`proc_reorder_manage`](../schemas/procurement/proc_reorder_manage.json) | Manage reorder rules, trigger stock check | 10 (required: action) |
| [`proc_supplier_manage`](../schemas/procurement/proc_supplier_manage.json) | Create, retrieve, update, list, or deactivate suppliers | 10 (required: action) |
| [`proc_supplier_quote`](../schemas/procurement/proc_supplier_quote.json) | Create, retrieve, list, or compare supplier quotations | 12 (required: action) |

## Tax (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`tax_calculate`](../schemas/tax/tax_calculate.json) | Calculate tax for a period by querying financial data | 7 (required: action) |
| [`tax_filing_prepare`](../schemas/tax/tax_filing_prepare.json) | Manage tax periods, prepare filing summaries, record submissions | 11 (required: action) |
| [`tax_rate_manage`](../schemas/tax/tax_rate_manage.json) | Create, retrieve, update, list, or deactivate tax rates with jurisdiction sup... | 11 (required: action) |
| [`tax_report`](../schemas/tax/tax_report.json) | Generate tax summaries, deductions reports, obligations overview | 5 (required: action) |
| [`tax_withholding_track`](../schemas/tax/tax_withholding_track.json) | Track WHT records, generate certificates | 11 (required: action) |

## Workflow (4 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`wf_approval_action`](../schemas/workflow/wf_approval_action.json) | Take an action (approve, reject, or request changes) on a pending approval. | 4 (required: approval_id, action, actor_id) |
| [`wf_approval_status`](../schemas/workflow/wf_approval_status.json) | Query approval records by ID, actor, document type, or status. | 7 (required: action) |
| [`wf_approval_submit`](../schemas/workflow/wf_approval_submit.json) | Submit a document for approval routing. | 4 (required: document_type, document_id, submitted_by) |
| [`wf_rule_manage`](../schemas/workflow/wf_rule_manage.json) | Manage approval routing rules including thresholds, approver chains, and auto... | 9 (required: action) |

## Summary

| Module | Tools |
|--------|-------|
| CRM | 5 |
| Documents | 6 |
| Finance | 10 |
| Human Resources | 7 |
| Operations | 6 |
| Procurement | 8 |
| Tax | 5 |
| Workflow | 4 |
| **Total** | **51** |
