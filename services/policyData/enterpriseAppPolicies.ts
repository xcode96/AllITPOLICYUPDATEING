import { Policy } from '../../types';

export const enterpriseAppPolicies: Policy[] = [
    // Application Support Team - 681-690
    {
        id: 681,
        name: 'Production Access Control',
        categoryId: 'app-support',
        content: `1. Principle
*   Production access is restricted to "Read-Only" by default.
*   **Write Access**: Requires a specific Change Request (CR) or Incident Ticket ID to be activated temporarily.`
    },
    {
        id: 682,
        name: 'Ticket Triage & SLA Policy',
        categoryId: 'app-support',
        content: `1. Priorities
*   **P1 (System Down)**: 15 min Response / 2 Hour Resolution.
*   **P2 (Feature Broken)**: 1 Hour Response / 8 Hour Resolution.
*   **P3 (User Issue)**: 4 Hour Response / 3 Day Resolution.`
    },
    {
        id: 683,
        name: 'Root Cause Analysis (RCA) Requirement',
        categoryId: 'app-support',
        content: `1. Trigger
*   Every P1 Incident requires a formal RCA document within 5 business days.
*   **5 Whys**: Methodology used to find the underlying cause, not just the symptom.`
    },
    {
        id: 684,
        name: 'Application Monitoring Standards',
        categoryId: 'app-support',
        content: `1. Health Checks
*   All apps must expose a \`/health\` endpoint checking DB connectivity and dependencies.
*   **Synthetics**: Synthetic transactions run every 5 minutes to verify login flow.`
    },
    {
        id: 685,
        name: 'Shift Handover Procedure',
        categoryId: 'app-support',
        content: `1. Continuity
*   Support operates 24x7 (Follow the Sun).
*   **Handoff**: Critical open tickets must be verbally handed off to the next region (e.g., London -> New York).`
    },
    {
        id: 686,
        name: 'Known Error Database (KEDB)',
        categoryId: 'app-support',
        content: `1. Knowledge
*   Workarounds for recurring issues must be documented in KEDB.
*   **Goal**: Enable L1 Service Desk to resolve issues without escalating to App Support.`
    },
    {
        id: 687,
        name: 'Scheduled Maintenance Policy',
        categoryId: 'app-support',
        content: `1. Notification
*   Users must be notified 7 days in advance of planned downtime.
*   **Page**: A "Maintenance Mode" splash page must be active during the window.`
    },
    {
        id: 688,
        name: 'Data Correction Policy',
        categoryId: 'app-support',
        content: `1. Risk
*   Manually updating DB records (SQL Update) to fix data corruption is a high-risk activity.
*   **Approval**: Requires Data Owner and App Manager written approval.`
    },
    {
        id: 689,
        name: 'Log Analysis & Retention',
        categoryId: 'app-support',
        content: `1. Troubleshooting
*   Support teams must use aggregated logging tools (Splunk/ELK), not SSH into servers to grep logs.
*   **PII**: Logs cleaned of PII.`
    },
    {
        id: 690,
        name: 'Vendor Support Escalation',
        categoryId: 'app-support',
        content: `1. Third-Party
*   App Support owns the relationship with the Vendor (e.g., Salesforce Support).
*   **SLA**: Tickets logged with vendors must be tracked internally until closure.`
    },

    // ERP Team (SAP / Oracle / Dynamics) - 691-700
    {
        id: 691,
        name: 'SoD (Segregation of Duties) Matrix',
        categoryId: 'erp',
        content: `1. Control
*   No single user can have conflicting roles (e.g., "Create Vendor" AND "Pay Vendor").
*   **Audit**: SoD conflicts reviewed quarterly.`
    },
    {
        id: 692,
        name: 'ERP Change Transport Policy',
        categoryId: 'erp',
        content: `1. Path
*   Changes move Dev -> QA -> Staging -> Prod.
*   **Audit Trail**: Every Transport must be linked to a Change Request ID.`
    },
    {
        id: 693,
        name: 'Customization vs Configuration',
        categoryId: 'erp',
        content: `1. Strategy
*   Prioritize "Standard" (Out of the Box) functionality.
*   **Custom Code (ABAP)**: Allowed only if business value > cost of future upgrade maintenance.`
    },
    {
        id: 694,
        name: 'ERP User Licensing',
        categoryId: 'erp',
        content: `1. Efficiency
*   Inactive users (30 days) must have licenses revoked to save costs.
*   **Type**: Professional User vs Limited User roles assigned based on need.`
    },
    {
        id: 695,
        name: 'Month-End Close Support',
        categoryId: 'erp',
        content: `1. Criticality
*   During Financial Close (last 3 days of month), Code Freezes are in effect.
*   **Support**: Dedicated support staff on standby for Finance team.`
    },
    {
        id: 696,
        name: 'ERP Integration Security',
        categoryId: 'erp',
        content: `1. Interfaces
*   File transfers to banks (Payment Files) must be Encrypted (PGP) and Signed.
*   **RFC**: Remote Function Calls restricted to specific IP addresses.`
    },
    {
        id: 697,
        name: 'Data Refresh Policy',
        categoryId: 'erp',
        content: `1. Non-Prod
*   QA environments refreshed from Prod quarterly.
*   **Scrub**: Sensitive data (Salaries, SSNs) must be scrambled/masked during refresh.`
    },
    {
        id: 698,
        name: 'Emergency Access (Firefighter) ID',
        categoryId: 'erp',
        content: `1. Usage
*   "Firefighter" IDs used for emergency fixes in Prod.
*   **Log**: Every keystroke/transaction logged and reviewed by Compliance.`
    },
    {
        id: 699,
        name: 'ERP Performance Tuning',
        categoryId: 'erp',
        content: `1. Batch Jobs
*   Long-running reports moved to background processing.
*   **Archiving**: Data older than 2 years archived to keep table sizes manageable.`
    },
    {
        id: 700,
        name: 'Global Template Governance',
        categoryId: 'erp',
        content: `1. Rollouts
*   Regional subsidiaries must adopt the "Global Template" processes (80%).
*   **Local**: Localization (Tax/Legal) kept to minimum (20%).`
    },

    // CRM Team (Salesforce / Dynamics CRM) - 701-710
    {
        id: 701,
        name: 'CRM Data Quality Standards',
        categoryId: 'crm',
        content: `1. Hygiene
*   Mandatory fields: Email, Phone, Industry.
*   **Duplicates**: Sales agents must search before creating new Accounts.`
    },
    {
        id: 702,
        name: 'Opportunity Pipeline Ethics',
        categoryId: 'crm',
        content: `1. Accuracy
*   "Close Date" must be realistic. Moving dates repeatedly to hide stalled deals is prohibited.`
    },
    {
        id: 703,
        name: 'Marketing Automation Sync',
        categoryId: 'crm',
        content: `1. Rules
*   Leads sync to CRM only after reaching "MQL" (Marketing Qualified Lead) score threshold.`
    },
    {
        id: 704,
        name: 'Sensitive Data in CRM',
        categoryId: 'crm',
        content: `1. Restrictions
*   Credit Card numbers and Passwords must NEVER be stored in Case notes or Description fields.`
    },
    {
        id: 705,
        name: 'Territory Management',
        categoryId: 'crm',
        content: `1. Assignment
*   Accounts assigned automatically based on Zip Code / Vertical.
*   **Disputes**: Sales Ops Director decides ownership disputes.`
    },
    {
        id: 706,
        name: 'Sandbox Seeding',
        categoryId: 'crm',
        content: `1. Testing
*   Developers work in "Developer Pro" sandboxes.
*   **Full Sandbox**: Used only for UAT and Performance testing (Refreshed monthly).`
    },
    {
        id: 707,
        name: 'CRM Plugin/Trigger Limits',
        categoryId: 'crm',
        content: `1. Governance
*   Code loops must be bulkified to avoid hitting Governor Limits (e.g., SOQL query limits).`
    },
    {
        id: 708,
        name: 'Mobile App Security',
        categoryId: 'crm',
        content: `1. MDM
*   CRM Mobile App access controlled via Intune. Screenshot prevention enabled.`
    },
    {
        id: 709,
        name: 'User Inactivity Deactivation',
        categoryId: 'crm',
        content: `1. License
*   Users failing to log in for 45 days are deactivated to free up expensive licenses.`
    },
    {
        id: 710,
        name: 'Customer 360 View',
        categoryId: 'crm',
        content: `1. Goal
*   CRM connects to Support and Finance systems to show "Open Tickets" and "Unpaid Invoices" on the Account page.`
    },

    // HRMS Team - 711-720
    {
        id: 711,
        name: 'Employee Data Privacy (GDPR/HR)',
        categoryId: 'hrms',
        content: `1. Confidentiality
*   Only HR staff can view Compensation and Diversity data.
*   **Managers**: Can view data only for their direct/indirect reports.`
    },
    {
        id: 712,
        name: 'Payroll Data Integrity',
        categoryId: 'hrms',
        content: `1. Accuracy
*   Banking Interfaces used to transmit direct deposit files.
*   **Audit**: "dummy employee" checks run every pay run to prevent fraud.`
    },
    {
        id: 713,
        name: 'HR-IT Integration (Joiners)',
        categoryId: 'hrms',
        content: `1. Trigger
*   HRMS is the "Source of Truth".
*   New hire entry in HRMS triggers IT Account Creation automatically.`
    },
    {
        id: 714,
        name: 'Performance Review Security',
        categoryId: 'hrms',
        content: `1. Cycle
*   Ratings and Comments are locked after submission.
*   **Visibility**: Employee cannot see peer reviews unless 360 feedback is anonymized.`
    },
    {
        id: 715,
        name: 'Document Management for HR',
        categoryId: 'hrms',
        content: `1. Uploads
*   Passports/Visas scanned into HRMS must be encrypted at rest.`
    },
    {
        id: 716,
        name: 'Self-Service Usage',
        categoryId: 'hrms',
        content: `1. ESS
*   Employees expected to update their own Address / Emergency Contact details via Portal.`
    },
    {
        id: 717,
        name: 'Audit Trails for Salary Changes',
        categoryId: 'hrms',
        content: `1. Logging
*   Any change to "Basic Pay" field triggers an alert to Payroll Manager.`
    },
    {
        id: 718,
        name: 'Candidate Data Retention',
        categoryId: 'hrms',
        content: `1. Purge
*   Resume data for rejected candidates deleted after 12 months (standard retention) unless consent given.`
    },
    {
        id: 719,
        name: 'Org Chart Accuracy',
        categoryId: 'hrms',
        content: `1. Structure
*   Matrix reporting lines (dotted line) must be maintained to ensure correct workflow approvals.`
    },
    {
        id: 720,
        name: 'Offboarding Automation',
        categoryId: 'hrms',
        content: `1. Speed
*   Termination date entered in HRMS immediately replicates to AD to disable access.`
    },

    // Finance Systems Team - 721-730
    {
        id: 721,
        name: 'Financial Close Process (FCP)',
        categoryId: 'finance-sys',
        content: `1. Lock
*   Accounting Periods must be "Hard Closed" to prevent back-dated postings.`
    },
    {
        id: 722,
        name: 'Chart of Accounts Governance',
        categoryId: 'finance-sys',
        content: `1. Structure
*   Creating new GL Accounts requires Controller approval to ensure reporting consistency.`
    },
    {
        id: 723,
        name: 'Expense Reimbursement Policy',
        categoryId: 'finance-sys',
        content: `1. Receipts
*   Digital receipts required for all expenses >$25.
*   **Audit**: AI tool scans for duplicate receipts/out-of-policy spend.`
    },
    {
        id: 724,
        name: 'Bank Interface Security',
        categoryId: 'finance-sys',
        content: `1. Keys
*   H2H (Host-to-Host) keys rotated annually.
*   **Dual Approval**: Any outgoing payment batch requires 2 digital approvals.`
    },
    {
        id: 725,
        name: 'Tax Calculation Engine',
        categoryId: 'finance-sys',
        content: `1. Updates
*   Tax rates (VAT/GST/Sales Tax) updated monthly from external provider (Vertex/Avalara).`
    },
    {
        id: 726,
        name: 'SOX Compliance (ITGC)',
        categoryId: 'finance-sys',
        content: `1. Controls
*   IT General Controls (Change, Access, Backup) applied strictly to Finance Systems.`
    },
    {
        id: 727,
        name: 'Budgeting & Forecasting Security',
        categoryId: 'finance-sys',
        content: `1. Sensitivity
*   Forecast data is "Insider Information" (Stock impact). Access tightly restricted.`
    },
    {
        id: 728,
        name: 'Vendor Master Data',
        categoryId: 'finance-sys',
        content: `1. Fraud
*   Changing Vendor Bank Details implies a "Call Back" procedure to the vendor to verify.`
    },
    {
        id: 729,
        name: 'Reconciliation Automation',
        categoryId: 'finance-sys',
        content: `1. Match
*   System auto-matches 95% of transactions. Humans only handle exceptions.`
    },
    {
        id: 730,
        name: 'Audit Trail for Journals',
        categoryId: 'finance-sys',
        content: `1. History
*   Manual Journal Entries (MJE) cannot be deleted, only reversed.`
    },

    // Supply Chain / SCM Systems Team - 731-740
    {
        id: 731,
        name: 'Inventory Accuracy Policy',
        categoryId: 'scm',
        content: `1. Count
*   Cycle Counting performed daily to maintain >99% inventory accuracy.`
    },
    {
        id: 732,
        name: 'Supplier Portal Access',
        categoryId: 'scm',
        content: `1. External
*   Suppliers access portal via 2FA.
*   View restricted to *their* Purchase Orders only.`
    },
    {
        id: 733,
        name: 'EDI Transaction Standards',
        categoryId: 'scm',
        content: `1. Formats
*   Standard X12/EDIFACT formats used.
*   **SLA**: EDI Acknowledgment (997) required within 1 hour.`
    },
    {
        id: 734,
        name: 'Warehouse Management System (WMS)',
        categoryId: 'scm',
        content: `1. Uptime
*   WMS is Critical (Tier 1). Outage stops trucks. High Availability is mandatory.`
    },
    {
        id: 735,
        name: 'Transportation Management Visibility',
        categoryId: 'scm',
        content: `1. Tracking
*   Real-time integration with carriers (FedEx/DHL) for customer shipment tracking.`
    },
    {
        id: 736,
        name: 'Demand Planning & Security',
        categoryId: 'scm',
        content: `1. Prop Data
*   Future demand plans are proprietary. Not shared with suppliers without NDA.`
    },
    {
        id: 737,
        name: 'Barcode & RFID Standards',
        categoryId: 'scm',
        content: `1. Labeling
*   All pallets must have GS1-128 standard labels for scanning.`
    },
    {
        id: 738,
        name: 'Procure-to-Pay (P2P) Controls',
        categoryId: 'scm',
        content: `1. 3-Way Match
*   Invoice paid only if PO Quantity = Receipt Quantity = Invoice Quantity.`
    },
    {
        id: 739,
        name: 'Sub-Contractor Manufacturing',
        categoryId: 'scm',
        content: `1. Visibility
*   Contract Manufacturers must upload production data daily.`
    },
    {
        id: 740,
        name: 'Customs & Trade Compliance',
        categoryId: 'scm',
        content: `1. Screening
*   All shipments screened against Denied Party Lists (Sanctions) automatically.`
    },

    // Middleware & ESB Team - 741-750
    {
        id: 741,
        name: 'Message Queue Persistence',
        categoryId: 'middleware',
        content: `1. Reliability
*   Business Critical messages (Orders) must be durable (Written to disk).`
    },
    {
        id: 742,
        name: 'API Translation & Mediation',
        categoryId: 'middleware',
        content: `1. Standardization
*   ESB converts legacy SOAP/XML to modern REST/JSON for internal consumption.`
    },
    {
        id: 743,
        name: 'Canonical Data Model',
        categoryId: 'middleware',
        content: `1. Format
*   Integrations use a standard internal data format (Canonical) to decouple source/destination systems.`
    },
    {
        id: 744,
        name: 'Throttling & Backpressure',
        categoryId: 'middleware',
        content: `1. Protection
*   Middleware protects slow legacy systems (ERP) from traffic spikes by buffering requests.`
    },
    {
        id: 745,
        name: 'Retry Policies (Jitter)',
        categoryId: 'middleware',
        content: `1. Logic
*   Failed messages retried 3 times with exponential backoff and jitter.`
    },
    {
        id: 746,
        name: 'Dead Letter Queue (DLQ) Monitoring',
        categoryId: 'middleware',
        content: `1. Alert
*   DLQ depth > 0 generates ticket. "Message lost" is unacceptable.`
    },
    {
        id: 747,
        name: 'Secure File Transfer (MFT)',
        categoryId: 'middleware',
        content: `1. Encryption
*   All file transfers must utilize SFTP/FTPS. Plain FTP is blocked.`
    },
    {
        id: 748,
        name: 'Middleware Patching',
        categoryId: 'middleware',
        content: `1. Currency
*   MuleSoft/Tibco runtimes patched quarterly.
*   **Zero Downtime**: Use clustering to patch without stopping flow.`
    },
    {
        id: 749,
        name: 'Integration Catalog',
        categoryId: 'middleware',
        content: `1. Docs
*   All interfaces documented with Source, Target, Frequency, and Data Protocol.`
    },
    {
        id: 750,
        name: 'Pub/Sub Governance',
        categoryId: 'middleware',
        content: `1. Topics
*   Topic names must follow naming convention (domain.event.version).`
    }
];
