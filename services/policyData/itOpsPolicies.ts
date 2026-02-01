import { Policy } from '../../types';

export const itOpsPolicies: Policy[] = [
    // IT Operations Team - 751-760
    {
        id: 751,
        name: 'Daily Operations Checklist',
        categoryId: 'itops',
        content: `1. Morning Checks
*   Ops Engineers must verify Dashboard Green status (Network, Storage, Backups) by 08:00 AM.
*   **Log**: Checklist completion logged in Ops Portal.`
    },
    {
        id: 752,
        name: 'Shift Scheduling Policy',
        categoryId: 'itops',
        content: `1. Coverage
*   Minimum 2 Operations Engineers active per shift.
*   **Rotation**: Shifts rotate every 2 weeks to prevent fatigue.`
    },
    {
        id: 753,
        name: 'Data Center Access Control',
        categoryId: 'itops',
        content: `1. Physical Security
*   Biometric + Access Card required for DC entry.
*   **Visitors**: Must be escorted and sign the logbook. No bags allowed inside server room.`
    },
    {
        id: 754,
        name: 'Power & Cooling Management',
        categoryId: 'itops',
        content: `1. Thresholds
*   **Temp**: Cold Aisle maintained at 22°C ± 2°C.
*   **Alert**: UPS load > 80% triggers critical alert.`
    },
    {
        id: 755,
        name: 'Hardware Spare Parts Management',
        categoryId: 'itops',
        content: `1. Inventory
*   Critical spares (Hard Drives, PSUs) kept on-site.
*   **Restock**: Auto-order triggered when stock drops below 2 units.`
    },
    {
        id: 756,
        name: 'Rack Hygiene Policy',
        categoryId: 'itops',
        content: `1. Cabling
*   Cables must be Velcro-tied (No Zip ties) and color-coded.
*   **Airflow**: Blanking panels must be installed in empty slots to prevent hot air recirculation.`
    },
    {
        id: 757,
        name: 'Operations Runbook Standards',
        categoryId: 'itops',
        content: `1. Documentation
*   Every alert must have a corresponding Runbook URL in the alert message.
*   **Update**: Runbooks reviewed quarterly for relevance.`
    },
    {
        id: 758,
        name: 'Backup Tape Handling',
        categoryId: 'itops',
        content: `1. Offsite
*   Tapes moved offsite weekly via secure courier (Iron Mountain).
*   **Chain of Custody**: Signed receipts required for every transfer.`
    },
    {
        id: 759,
        name: 'Emergency Shutdown Procedure',
        categoryId: 'itops',
        content: `1. Safety
*   Procedure for "EPO" (Emergency Power Off) documented.
*   Authorized only in case of Fire or Life Safety threat.`
    },
    {
        id: 760,
        name: 'Facilities Maintenance Coordination',
        categoryId: 'itops',
        content: `1. Generators
*   Diesel Generators tested monthly (Load Bank Test).
*   Ops Team observes test and signs off.`
    },

    // Service Delivery Management Team - 761-770
    {
        id: 761,
        name: 'SLA / OLA Management',
        categoryId: 'service-delivery',
        content: `1. Definitions
*   **SLA**: Commitment to Customer (e.g., 99.9% Uptime).
*   **OLA**: Internal agreement between teams (e.g., Network team fixes router in 4 hours).`
    },
    {
        id: 762,
        name: 'Service Catalog Maintenance',
        categoryId: 'service-delivery',
        content: `1. Portfolio
*   All IT services (e.g., "Request Laptop", "Reset Password") listed in ServiceNow Catalog.
*   **Pricing**: Costs (Chargeback) visible to requester.`
    },
    {
        id: 763,
        name: 'Customer Satisfaction (CSAT) Policy',
        categoryId: 'service-delivery',
        content: `1. Feedback
*   CSAT survey sent upon ticket closure.
*   **Target**: Minimum 4.5/5.0 score maintained. Negative feedback triggers Manager Call Back.`
    },
    {
        id: 764,
        name: 'Service Review Meetings',
        categoryId: 'service-delivery',
        content: `1. Monthly
*   SDM meets with Business stakeholders to review performance against SLA.
*   **SIP**: Service Improvement Plan launched for missed SLAs.`
    },
    {
        id: 765,
        name: 'Vendor Performance Management',
        categoryId: 'service-delivery',
        content: `1. Scorecard
*   Strategic vendors (ISP, Cloud) scored quarterly on: Technical Performance, Innovation, and Support Quality.`
    },
    {
        id: 766,
        name: 'IT Service Continuity Management',
        categoryId: 'service-delivery',
        content: `1. DR Testing
*   IT Services must be recoverable within RTO.
*   **Drill**: Annual simulation of Data Center loss.`
    },
    {
        id: 767,
        name: 'Capacity Management Policy',
        categoryId: 'service-delivery',
        content: `1. Forecasting
*   SDM tracks License consumption (O365) and Storage growth to budget for next year.`
    },
    {
        id: 768,
        name: 'Service Level Credits',
        categoryId: 'service-delivery',
        content: `1. Penalty
*   Vendors missing SLA must provide service credits. SDM is responsible for claiming these.`
    },
    {
        id: 769,
        name: 'VIP Support Policy',
        categoryId: 'service-delivery',
        content: `1. Classification
*   C-Suite tickets flagged as "VIP".
*   **Response**: Immediate routе to L2/L3, bypassing L1 queue.`
    },
    {
        id: 770,
        name: 'Service Decommissioning',
        categoryId: 'service-delivery',
        content: `1. Sunset
*   Formal process to retire a service: Notify users 3 months ahead, archive data, shut down infra.`
    },

    // ITIL / Process Management Team - 771-780
    {
        id: 771,
        name: 'ITIL Framework Adoption',
        categoryId: 'itil',
        content: `1. Standard
*   ITSM processes follow ITIL v4 best practices.
*   **Value Stream**: Focus on co-creating value, not just following process.`
    },
    {
        id: 772,
        name: 'Process Maturity Assessment',
        categoryId: 'itil',
        content: `1. Audit
*   Annual assessment (CMMI Level) of Incident, Change, and Problem processes.
*   Goal: Reach Maturity Level 3 (Defined).`
    },
    {
        id: 773,
        name: 'Knowledge Management (KCS)',
        categoryId: 'itil',
        content: `1. Strategy
*   Knowledge-Centered Service (KCS): Solvers write articles *while* fixing tickets.
*   **Quality**: Articles reviewed by Subject Matter Experts.`
    },
    {
        id: 774,
        name: 'Standard Operating Procedures (SOPs)',
        categoryId: 'itil',
        content: `1. Format
*   All SOPs stored in central Wiki.
*   **Version Control**: SOPs must be versioned and approved by Process Owner.`
    },
    {
        id: 775,
        name: 'Continual Service Improvement (CSI)',
        categoryId: 'itil',
        content: `1. Register
*   CSI Register tracks all improvement ideas.
*   **Prioritization**: Ideas scored by ROI and Effort.`
    },
    {
        id: 776,
        name: 'Process Deviation Policy',
        categoryId: 'itil',
        content: `1. Exception
*   Deviating from standard process (e.g., Skipping CAB) requires VP approval and Retrospective justification.`
    },
    {
        id: 777,
        name: 'Role-Based Process Training',
        categoryId: 'itil',
        content: `1. Certification
*   New IT staff must pass "ITIL Fundamentals" internal quiz within 30 days.`
    },
    {
        id: 778,
        name: 'Service Design Package (SDP)',
        categoryId: 'itil',
        content: `1. Requirement
*   New services require an SDP: Requirements, Architecture, Process, and Metrics defined before build.`
    },
    {
        id: 779,
        name: 'Process Owner Roles',
        categoryId: 'itil',
        content: `1. Accountability
*   Single accountable person defined for each process (e.g., "Change Manager" owns the Change Process).`
    },
    {
        id: 780,
        name: 'Metric Definition Standards',
        categoryId: 'itil',
        content: `1. Consistency
*   "Resolution Time" = Clock stops when Status is 'Resolved'. Clock pauses on 'On Hold'`
    },

    // Change Management Team - 781-790
    {
        id: 781,
        name: 'Change Advisory Board (CAB) Policy',
        categoryId: 'change-mgmt',
        content: `1. Meetings
*   Weekly CAB meeting to approve Normal Changes.
*   **Quorum**: Reps from Network, Server, Security, and Apps must be present.`
    },
    {
        id: 782,
        name: 'Emergency Change Procedure',
        categoryId: 'change-mgmt',
        content: `1. ECAB
*   Emergency CAB (ECAB) convened for urgent fixes (Sev 1).
*   **Approval**: Verbal approval allowed, documented retroactively within 24 hours.`
    },
    {
        id: 783,
        name: 'Change Freeze Windows',
        categoryId: 'change-mgmt',
        content: `1. Blackouts
*   No changes allowed during: Year End Close, Black Friday, Board Meetings.
*   **Exception**: CEO approval required.`
    },
    {
        id: 784,
        name: 'Standard Change Pre-Approval',
        categoryId: 'change-mgmt',
        content: `1. Low Risk
*   Routine tasks (e.g., Patching Dev Server) classified as Standard.
*   **Pre-Approved**: Do not require CAB vote.`
    },
    {
        id: 785,
        name: 'Change Failure Policy',
        categoryId: 'change-mgmt',
        content: `1. Rollback
*   Failed changes must be rolled back immediately.
*   **Post-Mortem**: Failed changes trigger a review before the team can submit new changes.`
    },
    {
        id: 786,
        name: 'Lead Time for Changes',
        categoryId: 'change-mgmt',
        content: `1. Notice
*   **Normal**: Submit 3 days before CAB.
*   **Major**: Submit 10 days before CAB.`
    },
    {
        id: 787,
        name: 'Change Risk Assessment',
        categoryId: 'change-mgmt',
        content: `1. Calculator
*   Risk Score calculated based on: Number of Consumers, Complexity, Redundancy, Back-out plan.`
    },
    {
        id: 788,
        name: 'Unauthorized Change Detection',
        categoryId: 'change-mgmt',
        content: `1. Compliance
*   Reconciliation between Monitoring Events and Change Tickets.
*   Changes without tickets are investigated as Security Incidents.`
    },
    {
        id: 789,
        name: 'Post Implementation Review (PIR)',
        categoryId: 'change-mgmt',
        content: `1. Validation
*   Change owner must update ticket with "Successful", "Failed", or "Partially Successful" status.`
    },
    {
        id: 790,
        name: 'Release vs Change',
        categoryId: 'change-mgmt',
        content: `1. Definition
*   **Change**: The authorization.
*   **Release**: The technical deployment. A Release may contain multiple Changes.`
    },

    // Incident & Problem Management Team - 791-800
    {
        id: 791,
        name: 'Major Incident Management (MIM)',
        categoryId: 'incident-mgmt',
        content: `1. Protocol
*   Sev 1 triggers MIM process.
*   MIM Manager opens a Bridge Call and sends generic comms to business every 30 mins.`
    },
    {
        id: 792,
        name: 'Problem Record Initiation',
        categoryId: 'incident-mgmt',
        content: `1. Trigger
*   Problem Record MUST be created for:
    *   Any Major Incident.
    *   3 recurring Incidents of same type in 1 month.`
    },
    {
        id: 793,
        name: 'Ticket Categorization',
        categoryId: 'incident-mgmt',
        content: `1. Taxonomy
*   Tickets must be categorized correctly (e.g., Hardware > Server > Disk) for analytics.`
    },
    {
        id: 794,
        name: 'Incident Escalation Policy',
        categoryId: 'incident-mgmt',
        content: `1. Functional
*   L1 escalates to L2 after 15 mins if no KB exists.
*   **Hierarchical**: Escalate to Manager if SLA breach is imminent.`
    },
    {
        id: 795,
        name: 'Five Whys Analysis',
        categoryId: 'incident-mgmt',
        content: `1. RCA
*   Problem Analysts use "5 Whys" or "Fishbone" to identify Root Cause.
*   "User Error" or "Glitch" are not acceptable Root Causes.`
    },
    {
        id: 796,
        name: 'Known Error Publishing',
        categoryId: 'incident-mgmt',
        content: `1. Workaround
*   If Root Cause is found but fix is delayed (e.g., Pending Vendor Patch), a Known Error article is published.`
    },
    {
        id: 797,
        name: 'Incident Communication',
        categoryId: 'incident-mgmt',
        content: `1. Templates
*   Use standard templates for "Initial Notification", "Update", and "Resolution". Avoid technical jargon.`
    },
    {
        id: 798,
        name: 'First Contact Resolution (FCR)',
        categoryId: 'incident-mgmt',
        content: `1. Goal
*   Service Desk aims for 70% FCR.
*   Tools: Remote Control and Password Reset tools provided to L1.`
    },
    {
        id: 799,
        name: 'Problem Closure Criteria',
        categoryId: 'incident-mgmt',
        content: `1. Permanent Fix
*   Problem closed only when the Permanent Fix is deployed (Change Request completed).`
    },
    {
        id: 800,
        name: 'On-Call Compensation',
        categoryId: 'incident-mgmt',
        content: `1. Policy
*   Staff compensated for standby time and Overtime for active call-outs during nights/weekends.`
    },

    // CMDB Team - 801-810
    {
        id: 801,
        name: 'CI Naming Convention',
        categoryId: 'cmdb',
        content: `1. Standard
*   Server Name: [Country][Role][Env][Number] (e.g., USWEBPRD01).
*   Unique names mandatory.`
    },
    {
        id: 802,
        name: 'CMDB Completeness',
        categoryId: 'cmdb',
        content: `1. Fields
*   Required for all CIs: Owner, Environment, Status, IP Address, Serial Number.`
    },
    {
        id: 803,
        name: 'Relational Mapping',
        categoryId: 'cmdb',
        content: `1. Dependencies
*   Must map Upstream (Business Service) and Downstream (Infrastructure) relationships.
*   Enables Impact Analysis.`
    },
    {
        id: 804,
        name: 'Automated Discovery',
        categoryId: 'cmdb',
        content: `1. Source
*   ServiceNow Discovery / BMC ADDM runs daily to populate CIs.
*   **Manual**: Manual creation blocked unless discovery fails.`
    },
    {
        id: 805,
        name: 'CMDB Audit Policy',
        categoryId: 'cmdb',
        content: `1. Verification
*   Annual physical audit (sampling 10% of assets) to verify CMDB accuracy vs Reality.`
    },
    {
        id: 806,
        name: 'CI Lifecycle Status',
        categoryId: 'cmdb',
        content: `1. States
*   Ordered -> In Stock -> Installed -> Operational -> Maintenance -> Retired -> Stolen/Lost.`
    },
    {
        id: 807,
        name: 'Application Portfolio Management (APM)',
        categoryId: 'cmdb',
        content: `1. Strategy
*   CMDB maps applications to Business Capabilities.
*   **TIME**: Tolerate, Invest, Migrate, Eliminate strategy applied to every app.`
    },
    {
        id: 808,
        name: 'Staleness Thresholds',
        categoryId: 'cmdb',
        content: `1. Cleanup
*   CIs not seen by Discovery for 30 days are flagged "Most Likely Dead".
*   Retired after 60 days.`
    },
    {
        id: 809,
        name: 'Configuration Manager Role',
        categoryId: 'cmdb',
        content: `1. Gatekeeper
*   Configuration Manager approves creation of new CI Classes or Attributes.`
    },
    {
        id: 810,
        name: 'CMDB Health Dashboard',
        categoryId: 'cmdb',
        content: `1. Metrics
*   Dashboard tracks: Duplicate CIs, Orphan CIs (No relationship), and Empty Required Fields.`
    },

    // IT Asset Management Team - 811-820
    {
        id: 811,
        name: 'Hardware Lifecycle Policy',
        categoryId: 'itam',
        content: `1. Refresh
*   Laptops: 3 Years.
*   Servers: 5 Years.
*   Monitors: 5 Years (or until failure).`
    },
    {
        id: 812,
        name: 'Software License Compliance',
        categoryId: 'itam',
        content: `1. Audit
*   Software Asset Management (SAM) tool scans network.
*   **True-Up**: Installed > Purchased triggers immediate purchase or uninstall.`
    },
    {
        id: 813,
        name: 'Asset Tagging',
        categoryId: 'itam',
        content: `1. Label
*   ITAM Barcode/QR Tag affixed to all physical assets >$500 value upon receipt.`
    },
    {
        id: 814,
        name: 'Disposal & Destruction',
        categoryId: 'itam',
        content: `1. E-Waste
*   Assets disposed via certified E-Waste recycler (R2 standard).
*   **Certificate**: Certificate of Destruction (COD) required for hard drives.`
    },
    {
        id: 815,
        name: 'Lost or Stolen Assets',
        categoryId: 'itam',
        content: `1. Report
*   User must file Police Report and IT Security Incident ticket immediately.
*   **Remote Wipe**: Sent by default.`
    },
    {
        id: 816,
        name: 'Stockroom Security',
        categoryId: 'itam',
        content: `1. Access
*   Stockrooms typically locked. Keys restricted to ITAM team and Local IT Manager.`
    },
    {
        id: 817,
        name: 'Loaner Equipment Policy',
        categoryId: 'itam',
        content: `1. Temporary
*   Loaner laptops issued for max 2 weeks while repair involves.
*   **Return**: Failure to return results in charge to Department Cost Center.`
    },
    {
        id: 818,
        name: 'Software Harvesting',
        categoryId: 'itam',
        content: `1. Reclaim
*   Expensive software (Visio, Project) unused for 90 days is automatically uninstalled.`
    },
    {
        id: 819,
        name: 'Procurement Standards',
        categoryId: 'itam',
        content: `1. Vendor
*   All hardware purchased from approved VAR (Value Added Reseller).
*   Amazon/Retail purchases reimbursed only in emergencies.`
    },
    {
        id: 820,
        name: 'Bring Your Own Device (BYOD)',
        categoryId: 'itam',
        content: `1. Mobile
*   Allowed for Phones/Tablets (with MDM).
*   **Laptops**: BYOD Laptops prohibited for employees (Contractors exception with VDI).`
    }
];
