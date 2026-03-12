# RDY Business Tools — Catalog

> Auto-generated from schema files. 96 tools across 17 modules.

## Calendar (Google/Outlook) (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`check_availability`](../schemas/calendar/check_availability.json) | Query free/busy information for one or more users over a time range. Returns ... | 6 (required: time_min, time_max, users) |
| [`create_event`](../schemas/calendar/create_event.json) | Create a calendar event with title, time, location, attendees, and recurrence... | 14 (required: title, start_time, end_time) |
| [`delete_event`](../schemas/calendar/delete_event.json) | Cancel or delete a calendar event. For recurring events, choose whether to de... | 5 (required: event_id) |
| [`list_events`](../schemas/calendar/list_events.json) | List calendar events within a date/time range. Supports filtering by calendar... | 9 (required: time_min, time_max) |
| [`update_event`](../schemas/calendar/update_event.json) | Modify an existing calendar event. Update title, time, location, attendees, o... | 11 (required: event_id) |

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

## Email (Gmail) (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`draft_email`](../schemas/email/draft_email.json) | Create, update, list, get, send, or delete email drafts. Drafts can be compos... | 11 (required: action) |
| [`manage_labels`](../schemas/email/manage_labels.json) | Create, list, update, delete email labels, and apply or remove labels from me... | 7 (required: action) |
| [`read_email`](../schemas/email/read_email.json) | Read emails from inbox or a specific message by ID. Returns subject, sender, ... | 7 (required: action) |
| [`search_email`](../schemas/email/search_email.json) | Search emails by query string, sender, labels, date range, or attachment pres... | 11 (required: query) |
| [`send_email`](../schemas/email/send_email.json) | Compose and send an email via Gmail or compatible SMTP provider. Supports TO,... | 9 (required: to, subject, body) |

## Fapiao (China E-Invoice) (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`batch_issue`](../schemas/fapiao/batch_issue.json) | Batch issue multiple fapiao in a single request. Supports up to 50 fapiao per... | 3 (required: action) |
| [`fapiao_statistics`](../schemas/fapiao/fapiao_statistics.json) | Generate fapiao statistics and reports. Summarize issued amounts by period, t... | 7 (required: action) |
| [`issue_fapiao`](../schemas/fapiao/issue_fapiao.json) | Issue a China electronic fapiao (e-fapiao / 电子发票). Supports general VAT fapia... | 8 (required: fapiao_type, buyer, items) |
| [`query_fapiao`](../schemas/fapiao/query_fapiao.json) | Query and retrieve issued fapiao records. Search by fapiao code/number, buyer... | 12 (required: action) |
| [`void_fapiao`](../schemas/fapiao/void_fapiao.json) | Void an issued fapiao or issue a red-letter (negative) fapiao for corrections... | 6 (required: action, fapiao_id, reason) |

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

## Notion (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`create_page`](../schemas/notion/create_page.json) | Create a new Notion page in a database or as a child of another page. Support... | 7 (required: parent_type, parent_id, title) |
| [`manage_blocks`](../schemas/notion/manage_blocks.json) | Retrieve, append, update, or delete content blocks within a Notion page. Bloc... | 6 (required: action, block_id) |
| [`query_database`](../schemas/notion/query_database.json) | Query a Notion database with filters, sorts, and pagination. Supports compoun... | 5 (required: database_id) |
| [`search`](../schemas/notion/search.json) | Search across all Notion pages and databases accessible to the integration. F... | 5 (required: query) |
| [`update_page`](../schemas/notion/update_page.json) | Update properties, icon, cover, or archived status of an existing Notion page... | 5 (required: page_id) |

## Operations (6 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`ops_asset_manage`](../schemas/operations/ops_asset_manage.json) | Fixed asset management including creation, lookup, disposal, and depreciation... | 14 (required: action) |
| [`ops_delivery_note`](../schemas/operations/ops_delivery_note.json) | Create and manage delivery notes linked to shipments. | 6 (required: action) |
| [`ops_reservation_availability`](../schemas/operations/ops_reservation_availability.json) | Query available reservation slots for a given resource type and date range. | 4 (required: resource_type, date_from, date_to) |
| [`ops_reservation_manage`](../schemas/operations/ops_reservation_manage.json) | Manage reservations including creation, updates, cancellation, completion, an... | 13 (required: action) |
| [`ops_shipment_track`](../schemas/operations/ops_shipment_track.json) | Shipment tracking with status updates, events, and item management. | 14 (required: action) |
| [`ops_warehouse_manage`](../schemas/operations/ops_warehouse_manage.json) | Warehouse CRUD operations and stock transfer between warehouses. | 13 (required: action) |

## Payments (Stripe/2C2P/Alipay) (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`create_payment`](../schemas/payments/create_payment.json) | Create a payment intent or charge via Stripe, 2C2P, or Alipay. Supports one-t... | 11 (required: provider, amount, currency) |
| [`create_subscription`](../schemas/payments/create_subscription.json) | Create, update, cancel, or list recurring subscriptions. Supports trial perio... | 14 (required: action, provider) |
| [`list_transactions`](../schemas/payments/list_transactions.json) | List and filter payment transactions across Stripe, 2C2P, or Alipay. Supports... | 11 (required: provider) |
| [`manage_customers`](../schemas/payments/manage_customers.json) | Create, update, retrieve, list, or delete payment customers. Manages stored p... | 13 (required: action, provider) |
| [`process_refund`](../schemas/payments/process_refund.json) | Process full or partial refunds for completed payments. Supports refund reaso... | 10 (required: action, provider) |

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

## Slack (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`add_reaction`](../schemas/slack/add_reaction.json) | Add or remove an emoji reaction on a Slack message. | 4 (required: channel, timestamp, emoji) |
| [`create_thread`](../schemas/slack/create_thread.json) | Reply to a message in a thread. Creates a threaded conversation under the spe... | 5 (required: channel, thread_ts, text) |
| [`list_channels`](../schemas/slack/list_channels.json) | List accessible Slack channels. Filter by type (public, private, DM, group DM... | 6 (required: none) |
| [`search_messages`](../schemas/slack/search_messages.json) | Search Slack message history by query. Supports filtering by channel, user, d... | 9 (required: query) |
| [`send_message`](../schemas/slack/send_message.json) | Post a message to a Slack channel or direct message. Supports plain text, mar... | 8 (required: channel, text) |

## China Social Insurance (五险一金) (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`calculate_contributions`](../schemas/social-insurance/calculate_contributions.json) | Calculate China five insurances and housing fund (五险一金) contributions for emp... | 7 (required: city, salary_base) |
| [`employee_enrollment`](../schemas/social-insurance/employee_enrollment.json) | Manage employee enrollment and termination in social insurance and housing fu... | 15 (required: action) |
| [`generate_report`](../schemas/social-insurance/generate_report.json) | Generate social insurance and housing fund reports. Includes cost summaries, ... | 9 (required: report_type) |
| [`query_records`](../schemas/social-insurance/query_records.json) | Query social insurance and housing fund contribution records for individual e... | 9 (required: action) |
| [`submit_declaration`](../schemas/social-insurance/submit_declaration.json) | Submit monthly social insurance and housing fund declarations to the local bu... | 9 (required: action) |

## Tax (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`tax_calculate`](../schemas/tax/tax_calculate.json) | Calculate tax for a period by querying financial data | 7 (required: action) |
| [`tax_filing_prepare`](../schemas/tax/tax_filing_prepare.json) | Manage tax periods, prepare filing summaries, record submissions | 11 (required: action) |
| [`tax_rate_manage`](../schemas/tax/tax_rate_manage.json) | Create, retrieve, update, list, or deactivate tax rates with jurisdiction sup... | 11 (required: action) |
| [`tax_report`](../schemas/tax/tax_report.json) | Generate tax summaries, deductions reports, obligations overview | 5 (required: action) |
| [`tax_withholding_track`](../schemas/tax/tax_withholding_track.json) | Track WHT records, generate certificates | 11 (required: action) |

## WeChat (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`mini_program`](../schemas/wechat/mini_program.json) | Interact with WeChat Mini Program APIs: generate QR codes, send subscription ... | 11 (required: action) |
| [`send_message`](../schemas/wechat/send_message.json) | Send a message to a WeChat user or group via the Official Account or Work (En... | 11 (required: to_user, msg_type) |
| [`template_message`](../schemas/wechat/template_message.json) | Send or manage WeChat Official Account template messages. Supports setting te... | 7 (required: action) |
| [`user_info`](../schemas/wechat/user_info.json) | Query WeChat user information: get user profile, list followers, batch get us... | 7 (required: action) |
| [`wechat_pay`](../schemas/wechat/wechat_pay.json) | WeChat Pay operations: create unified orders, query payment status, issue ref... | 14 (required: action) |

## WhatsApp Business (5 tools)

| Tool | Description | Parameters |
|------|-------------|------------|
| [`manage_catalog`](../schemas/whatsapp/manage_catalog.json) | Manage WhatsApp Business product catalog. Create, update, delete, and list pr... | 13 (required: action) |
| [`manage_contacts`](../schemas/whatsapp/manage_contacts.json) | Manage WhatsApp Business contacts. Check if phone numbers are on WhatsApp, ma... | 8 (required: action) |
| [`read_messages`](../schemas/whatsapp/read_messages.json) | Read and manage incoming WhatsApp messages. Mark messages as read, retrieve m... | 8 (required: action) |
| [`send_message`](../schemas/whatsapp/send_message.json) | Send a message via WhatsApp Business API. Supports text, image, document, aud... | 8 (required: to, type) |
| [`send_template`](../schemas/whatsapp/send_template.json) | Send a pre-approved WhatsApp message template. Templates are required for ini... | 4 (required: to, template_name, language_code) |

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
| Calendar (Google/Outlook) | 5 |
| CRM | 5 |
| Documents | 6 |
| Email (Gmail) | 5 |
| Fapiao (China E-Invoice) | 5 |
| Finance | 10 |
| Human Resources | 7 |
| Notion | 5 |
| Operations | 6 |
| Payments (Stripe/2C2P/Alipay) | 5 |
| Procurement | 8 |
| Slack | 5 |
| China Social Insurance (五险一金) | 5 |
| Tax | 5 |
| WeChat | 5 |
| WhatsApp Business | 5 |
| Workflow | 4 |
| **Total** | **96** |
