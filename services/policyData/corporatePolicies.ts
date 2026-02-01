import { Policy } from '../../types';

export const corporatePolicies: Policy[] = [
    // Human Resources (HR) Team - 871-880
    {
        id: 871,
        name: 'Employee Data Privacy Policy',
        categoryId: 'hr',
        content: `1. Confidentiality
*   HR staff must ensure that employee PII (Social Security, Bank Info) is never shared via unencrypted email.
*   **Access**: Restricted to active HR personnel only.`
    },
    {
        id: 872,
        name: 'Workplace Harassment Policy',
        categoryId: 'hr',
        content: `1. Zero Tolerance
*   Any form of digital harassment (Teams/Email) triggers immediate investigation.
*   **Reporting**: Employees can report anonymously via the Ethics Portal.`
    },
    {
        id: 873,
        name: 'Remote Work Eligibility',
        categoryId: 'hr',
        content: `1. Criteria
*   New hires become eligible for Hybrid work (3 days remote) after probation.
*   **Equipment**: Corporate laptop must be used; personal PCs prohibited for work.`
    },
    {
        id: 874,
        name: 'Background Check Policy',
        categoryId: 'hr',
        content: `1. Screening
*   All offers are contingent on passing Criminal and Reference checks.
*   **Refresh**: Critical roles (IT Admin, Finance) re-screened every 3 years.`
    },
    {
        id: 875,
        name: 'Termination & Offboarding',
        categoryId: 'hr',
        content: `1. Speed
*   IT must be notified of termination *before* the exit interview.
*   **Access**: User accounts disabled within 15 minutes of departure.`
    },
    {
        id: 876,
        name: 'Social Media Guidelines',
        categoryId: 'hr',
        content: `1. Representation
*   Personal posts must not imply they represent the company's view.
*   **Disparagement**: Publicly bashing the company or colleagues is grounds for disciplinary action.`
    },
    {
        id: 877,
        name: 'Leave Management Policy',
        categoryId: 'hr',
        content: `1. Request
*   Leaves must be applied for in the HR Portal.
*   **Approval**: Manager approval required 2 weeks in advance for vacations >5 days.`
    },
    {
        id: 878,
        name: 'Performance Improvement Plan (PIP)',
        categoryId: 'hr',
        content: `1. Process
*   Process for managing underperformance documented digitally.
*   **Confidentiality**: PIP documents accessible only to Manager, HR, and Employee.`
    },
    {
        id: 879,
        name: 'Payroll Discrepancy Protocol',
        categoryId: 'hr',
        content: `1. SLA
*   Payroll errors reported by employees must be investigated and resolved within 3 business days.`
    },
    {
        id: 880,
        name: 'Diversity & Inclusion Data',
        categoryId: 'hr',
        content: `1. Anonymity
*   Diversity data collected during hiring must be anonymized and aggregated for reporting. It cannot be used for individual decision making.`
    },

    // Talent Acquisition / Recruitment Team - 881-890
    {
        id: 881,
        name: 'Applicant Tracking System (ATS) Usage',
        categoryId: 'talent',
        content: `1. Source of Truth
*   All candidates must be entered into the ATS (Greenhouse/Lever).
*   **Email**: Resumes received via email must be uploaded to ATS and deleted from inbox.`
    },
    {
        id: 882,
        name: 'Candidate Data Retention (GDPR)',
        categoryId: 'talent',
        content: `1. Purge
*   Candidate data (Resumes) deleted after 12 months unless candidate opts-in to "Talent Pool".`
    },
    {
        id: 883,
        name: 'Social Engineering Awareness for Recruiters',
        categoryId: 'talent',
        content: `1. Risk
*   Recruiters forbidden from opening attachments from unknown candidates (use ATS preview).
*   **Phishing**: High target for "Fake CV" malware attacks.`
    },
    {
        id: 884,
        name: 'Interview Recording Policy',
        categoryId: 'talent',
        content: `1. Consent
*   Virtual interviews (Zoom) can only be recorded with explicit candidate consent.
*   **Storage**: Recordings deleted after hiring decision is made.`
    },
    {
        id: 885,
        name: 'Referral Bonus Protocol',
        categoryId: 'talent',
        content: `1. Eligibility
*   Referrers paid 50% after hire and 50% after 6 months tenure.
*   **Conflict**: Hiring managers cannot refer for their own open roles.`
    },
    {
        id: 886,
        name: 'Job Description Sanity',
        categoryId: 'talent',
        content: `1. Language
*   JDs must be scanned for biased language (e.g., "Ninja", "Rockstar") to ensure inclusivity.`
    },
    {
        id: 887,
        name: 'Agency Vendor Management',
        categoryId: 'talent',
        content: `1. Contracts
*   External headhunters must have signed MSA and Data Processing Agreements before receiving candidate names.`
    },
    {
        id: 888,
        name: 'Offer Letter Security',
        categoryId: 'talent',
        content: `1. Transmission
*   Offer letters sent via secure e-signature platform (DocuSign). PDF attachments via email discouraged.`
    },
    {
        id: 889,
        name: 'Internal Transfer Policy',
        categoryId: 'talent',
        content: `1. Eligibility
*   Employees must be in current role for 12 months before applying internally.
*   **Notification**: Current manager notified only when interview reaches final stage.`
    },
    {
        id: 890,
        name: 'Hiring Freeze Override',
        categoryId: 'talent',
        content: `1. Authorization
*   During freeze, only "Business Critical" roles approved by CFO can be opened.`
    },

    // Learning & Development (L&D) Team - 891-900
    {
        id: 891,
        name: 'Mandatory Compliance Training',
        categoryId: 'l-and-d',
        content: `1. Deadline
*   Anti-Harassment, Security Awareness, and Code of Conduct training must be completed within 30 days of assignment.
*   **Consequence**: Network account locked if overdue >14 days.`
    },
    {
        id: 892,
        name: 'External Training Budget',
        categoryId: 'l-and-d',
        content: `1. Allowance
*   $2,000 per employee/year for conferences or certifications.
*   **Clawback**: If employee leaves within 6 months, they must repay.`
    },
    {
        id: 893,
        name: 'LMS Content Standards',
        categoryId: 'l-and-d',
        content: `1. Accessibility
*   All e-learning modules must have captions/transcripts (WCAG AA).`
    },
    {
        id: 894,
        name: 'Certification Verification',
        categoryId: 'l-and-d',
        content: `1. Proof
*   Employees claiming certification (e.g., PMP, CISSP) must upload valid badge/certificate to HRMS.`
    },
    {
        id: 895,
        name: 'Manager Training Track',
        categoryId: 'l-and-d',
        content: `1. Requirement
*   First-time people managers must complete "New Manager Academy" within 90 days of promotion.`
    },
    {
        id: 896,
        name: 'Recorded Training Retention',
        categoryId: 'l-and-d',
        content: `1. Refresh
*   Technical training videos older than 2 years are archived to prevent teaching obsolete skills.`
    },
    {
        id: 897,
        name: 'Phishing Simulation Training',
        categoryId: 'l-and-d',
        content: `1. Remedial
*   Users clicking mock phishing links are auto-enrolled in a 5-minute refresher micro-course.`
    },
    {
        id: 898,
        name: 'Training Vendor Security',
        categoryId: 'l-and-d',
        content: `1. Integration
*   External learning providers (LinkedIn Learning / Pluralsight) must integrate via SSO (SAML), not separate passwords.`
    },
    {
        id: 899,
        name: 'Mentorship Program',
        categoryId: 'l-and-d',
        content: `1. Structure
*   Formal mentorship engagements last 6 months.
*   **Matching**: Mentors matched across departments to break silos.`
    },
    {
        id: 900,
        name: 'Study Leave Policy',
        categoryId: 'l-and-d',
        content: `1. Time Off
*   Employees allowed 3 days "Study Leave" per year to prepare for approved certification exams.`
    },

    // Finance & Accounting Team - 901-910
    {
        id: 901,
        name: 'Wire Transfer Security',
        categoryId: 'finance',
        content: `1. Verification
*   Requests to change wire instructions via email must be verified by phone (Voice confirm).
*   **Dual Control**: Two authorized signers required for wires >$10k.`
    },
    {
        id: 902,
        name: 'Corporate Credit Card Usage',
        categoryId: 'finance',
        content: `1. Limits
*   Card is for business expenses only. Personal use prohibited.
*   **Receipts**: Users must upload receipts to Expense tool within 7 days.`
    },
    {
        id: 903,
        name: 'Invoice Processing Automation',
        categoryId: 'finance',
        content: `1. OCR
*   Invoices emailed to \`ap@company.com\` are processed by OCR robot.
*   **Approval**: PO-backed invoices auto-approved if matched.`
    },
    {
        id: 904,
        name: 'Financial Data Access',
        categoryId: 'finance',
        content: `1. Segregation
*   FP&A team has read access to GL. Accounting team has write access.
*   IT Admins have NO access to financial data tables.`
    },
    {
        id: 905,
        name: 'Petty Cash Management',
        categoryId: 'finance',
        content: `1. Physical
*   Cash box kept in safe. Audited weekly.
*   **Limit**: Max $500 cash on hand.`
    },
    {
        id: 906,
        name: 'Tax Filing Security',
        categoryId: 'finance',
        content: `1. Transmission
*   Tax returns filed electronically using secure state/federal portals.
*   **Storage**: Returns stored in encrypted folder with restricted access.`
    },
    {
        id: 907,
        name: 'Revenue Recognition Policy (ASC 606)',
        categoryId: 'finance',
        content: `1. Logic
*   System configuration must prevent recognizing revenue before service delivery is confirmed.`
    },
    {
        id: 908,
        name: 'Audit Trail for Adjustments',
        categoryId: 'finance',
        content: `1. Journals
*   Manual journal entries require attachment of supporting calculation (Excel/PDF).`
    },
    {
        id: 909,
        name: 'Payroll Cycle security',
        categoryId: 'finance',
        content: `1. Freeze
*   Payroll master data locked 2 days before pay run.
*   **Approval**: Final payroll register approved by CFO before release.`
    },
    {
        id: 910,
        name: 'Fixed Asset Tracking',
        categoryId: 'finance',
        content: `1. Tagging
*   Laptops/Furniture capitalized if value >$1000.
*   **Depreciation**: Automated monthly depreciation run.`
    },

    // Procurement & Vendor Management Team - 911-920
    {
        id: 911,
        name: 'Purchase Order (PO) Mandate',
        categoryId: 'procurement',
        content: `1. No PO No Pay
*   Vendors must not start work without a valid PO number. Invoices without PO are rejected.`
    },
    {
        id: 912,
        name: 'Competitive Bidding Policy',
        categoryId: 'procurement',
        content: `1. Threshold
*   Purchases >$50k require minimum 3 competitive bids (RFP process).
*   **Sole Source**: Justification required if only one vendor exists.`
    },
    {
        id: 913,
        name: 'Vendor Code of Conduct',
        categoryId: 'procurement',
        content: `1. Ethics
*   Vendors must sign Code of Conduct (No slave labor, environmental compliance) before onboarding.`
    },
    {
        id: 914,
        name: 'Contract Signature Authority',
        categoryId: 'procurement',
        content: `1. Delegation
*   Manager: <$5k. Director: <$50k. VP: <$250k. CEO: >$250k.`
    },
    {
        id: 915,
        name: 'New Vendor Onboarding',
        categoryId: 'procurement',
        content: `1. Vetting
*   Vendor setup involves Finance (Bank Details), Legal (MSA), and Security (Risk Assess) checks.`
    },
    {
        id: 916,
        name: 'Renewals Management',
        categoryId: 'procurement',
        content: `1. Alert
*   Software renewals flagged 90 days in advance to allow time for negotiation or cancellation.`
    },
    {
        id: 917,
        name: 'Emergency Procurement',
        categoryId: 'procurement',
        content: `1. Speed
*   Expedited process for outage-related purchases. Approvals collected retroactively.`
    },
    {
        id: 918,
        name: 'Diversity Supplier Program',
        categoryId: 'procurement',
        content: `1. Goal
*   Aim to source 10% of spend from Minority/Women-owned Business Enterprises (MWBE).`
    },
    {
        id: 919,
        name: 'Hardware Standardization',
        categoryId: 'procurement',
        content: `1. Catalog
*   Users must choose from standard laptop models (Dell/Mac). Custom specs require CTO approval.`
    },
    {
        id: 920,
        name: 'Vendor Performance Scorecard',
        categoryId: 'procurement',
        content: `1. QBR
*   Strategic vendors reviewed Quarterly. Poor scores trigger Performance Improvement Plan.`
    },

    // Sales & Business Development Team - 921-930
    {
        id: 921,
        name: 'CRM Data Entry Standards',
        categoryId: 'sales',
        content: `1. Hygiene
*   Sales Reps must log all calls/emails in CRM.
*   **Pipeline**: Deals with no activity for 30 days are auto-closed "Lost".`
    },
    {
        id: 922,
        name: 'Sales Device Security',
        categoryId: 'sales',
        content: `1. Mobile
*   Sales iPads/Phones must have MDM installed.
*   **Public Wifi**: VPN mandatory when using hotel/airport Wifi.`
    },
    {
        id: 923,
        name: 'Proposal / Quote Approval',
        categoryId: 'sales',
        content: `1. Discounting
*   Discounts >20% require Director approval. >40% require CFO approval.`
    },
    {
        id: 924,
        name: 'Competitor Intelligence',
        categoryId: 'sales',
        content: `1. Legal
*   Gathering intelligence is encouraged, but obtaining competitor trade secrets illegally is strictly prohibited.`
    },
    {
        id: 925,
        name: 'Customer Data Handling on Travel',
        categoryId: 'sales',
        content: `1. Privacy
*   Physical customer lists/contracts must not be left in cars or hotel rooms.
*   **Screen**: Use privacy filter on laptop screen on planes.`
    },
    {
        id: 926,
        name: 'Commission Clawback',
        categoryId: 'sales',
        content: `1. Policy
*   Commissions paid on deals that churn within 3 months are clawed back.`
    },
    {
        id: 927,
        name: 'Demo Environment Usage',
        categoryId: 'sales',
        content: `1. Sanitation
*   Demo environments must use dummy data. NEVER use real customer data for demos to other prospects.`
    },
    {
        id: 928,
        name: 'Gift & Entertainment Log',
        categoryId: 'sales',
        content: `1. Tracking
*   Taking clients to dinner >$100/head requires log for anti-bribery compliance.`
    },
    {
        id: 929,
        name: 'Contract Storage',
        categoryId: 'sales',
        content: `1. CLM
*   Signed contracts must be uploaded to Contract Lifecycle Mgmt tool immediately. No storing on desktop.`
    },
    {
        id: 930,
        name: 'Shadow IT in Sales',
        categoryId: 'sales',
        content: `1. Tools
*   Sales teams cannot buy their own lead generation tools with credit card. Must go through IT check.`
    },

    // Pre-Sales / Solution Consulting Team - 931-940
    {
        id: 931,
        name: 'Proof of Concept (PoC) Policy',
        categoryId: 'presales',
        content: `1. Terms
*   PoCs require a signed agreement defining success criteria and end date.
*   **Cleanup**: PoC tenant deleted 14 days after completion.`
    },
    {
        id: 932,
        name: 'RFP/RFI Security Answers',
        categoryId: 'presales',
        content: `1. Knowledge Base
*   Use the "Approved Security Answer Bank" for responding to RFPs.
*   **Custom**: Custom security questions must be vetted by Infosec.`
    },
    {
        id: 933,
        name: 'Architecture Diagram Standards',
        categoryId: 'presales',
        content: `1. Clarity
*   Diagrams shared with prospects must use official icons and clearly label "Customer Responsibility" vs "Our Responsibility".`
    },
    {
        id: 934,
        name: 'Custom Demo Development',
        categoryId: 'presales',
        content: `1. Code
*   Custom scripts written for demos must not modify the Core Product.
*   **Repository**: Store demo code in internal Git, not personal Github.`
    },
    {
        id: 935,
        name: 'Technical Feasibility Sign-off',
        categoryId: 'presales',
        content: `1. Promise
*   Solution Consultant must approve technical feasibility of any "Custom Feature" promised in a contract.`
    },
    {
        id: 936,
        name: 'Access to Prospect Data',
        categoryId: 'presales',
        content: `1. Handling
*   If prospect shares sample data for PoC, it must be deleted immediately after the presentation.`
    },
    {
        id: 937,
        name: 'Pre-Sales Knowledge Sharing',
        categoryId: 'presales',
        content: `1. Asset
*   Successful PoC configurations should be documented in the Wiki for reuse.`
    },
    {
        id: 938,
        name: 'Product Gap Reporting',
        categoryId: 'presales',
        content: `1. Feedback
*   Feature gaps losing deals must be logged in "Product Feedback" jira project.`
    },
    {
        id: 939,
        name: 'Sandbox Security',
        categoryId: 'presales',
        content: `1. Password
*   Shared demo account passwords must be rotated monthly.`
    },
    {
        id: 940,
        name: 'Transition to Delivery',
        categoryId: 'presales',
        content: `1. Handoff
*   Solution Consultant must brief the Implementation team on promises made during pre-sales.`
    },

    // Marketing & Digital Marketing Team - 941-950
    {
        id: 941,
        name: 'Website Privacy Policy',
        categoryId: 'marketing',
        content: `1. Compliance
*   Privacy Policy link must be visible on footer of all owned domains.
*   **Cookie**: Cookie consent manager must block non-essential scripts until opt-in.`
    },
    {
        id: 942,
        name: 'Social Media Account Security',
        categoryId: 'marketing',
        content: `1. MFA
*   Corporate Twitter/LinkedIn accounts must have MFA enabled.
*   **Access**: Use a password manager (Enterprise) to share credentials, never email.`
    },
    {
        id: 943,
        name: 'Email Marketing Compliance (CAN-SPAM)',
        categoryId: 'marketing',
        content: `1. Unsubscribe
*   All marketing emails must have a 1-click Unsubscribe link.
*   **Honor**: Unsubscribes processed within 24 hours.`
    },
    {
        id: 944,
        name: 'Brand Asset Usage',
        categoryId: 'marketing',
        content: `1. Consistency
*   Only official logos and fonts from the "Brand Kit" can be used. No modifying colors.`
    },
    {
        id: 945,
        name: 'Lead Data Protection',
        categoryId: 'marketing',
        content: `1. Export
*   Exporting lead lists to Excel is restricted to Managers.
*   **Upload**: Lists uploaded to ad platforms (Facebook Custom Audience) must be hashed.`
    },
    {
        id: 946,
        name: 'Web Content Management (CMS)',
        categoryId: 'marketing',
        content: `1. Publishing
*   Publishing to Production website requires 2-person review (Content + SEO).
*   **Plugins**: Installing WP plugins requires IT Security review.`
    },
    {
        id: 947,
        name: 'Event Data Handling',
        categoryId: 'marketing',
        content: `1. Physical
*   Business cards collected at conferences must be digitized and shredded within 1 week.`
    },
    {
        id: 948,
        name: 'Digital Ad Spend Governance',
        categoryId: 'marketing',
        content: `1. Budget
*   Daily spend caps must be set on Google/LinkedIn Ads to prevent runaway billing.`
    },
    {
        id: 949,
        name: 'Press Release Approval',
        categoryId: 'marketing',
        content: `1. Sign-off
*   PRs mentioning financial results or partnerships require Legal and CEO approval.`
    },
    {
        id: 950,
        name: 'SEO White Hat Policy',
        categoryId: 'marketing',
        content: `1. Ethics
*   Use of "Black Hat" SEO tactics (link farms, keyword stuffing) is prohibited to protect domain reputation.`
    },

    // Customer Success Team - 951-960
    {
        id: 951,
        name: 'Customer Health Score Monitoring',
        categoryId: 'customer-success',
        content: `1. Metric
*   Health Score (Green/Yellow/Red) updated weekly based on Usage, Tickets, and Relationship.`
    },
    {
        id: 952,
        name: 'Quarterly Business Review (QBR)',
        categoryId: 'customer-success',
        content: `1. Cadence
*   QBRs mandatory for all Enterprise clients.
*   **Goal**: Demonstrate ROI and plan next quarter goals.`
    },
    {
        id: 953,
        name: 'Customer Access to Staging',
        categoryId: 'customer-success',
        content: `1. Policy
*   Customers granted access to Staging environment for UAT 2 weeks before upgrades.`
    },
    {
        id: 954,
        name: 'Churn Risk Escalation',
        categoryId: 'customer-success',
        content: `1. Alert
*   Red health accounts must be escalated to "Save Team" immediately.`
    },
    {
        id: 955,
        name: 'Impersonation Access',
        categoryId: 'customer-success',
        content: `1. Login As
*   CSMs logging in as customer (Impersonation) must have written consent (ticket) for that specific session.`
    },
    {
        id: 956,
        name: 'Reference Customer Program',
        categoryId: 'customer-success',
        content: `1. Reward
*   Customers agreeing to be references get benefits (e.g., extra storage).
*   **Approval**: Legal must accept the reference terms.`
    },
    {
        id: 957,
        name: 'Training & Onboarding SLA',
        categoryId: 'customer-success',
        content: `1. Timeline
*   New customers must complete onboarding within 30 days of contract start.`
    },
    {
        id: 958,
        name: 'Customer Feedback Loop',
        categoryId: 'customer-success',
        content: `1. Product
*   Feature requests from top customers logged in "Voice of Customer" portal.`
    },
    {
        id: 959,
        name: 'Secure File Sharing with Clients',
        categoryId: 'customer-success',
        content: `1. Tool
*   Use corporate ShareFile/Box links with expiration. Do not email large attachments.`
    },
    {
        id: 960,
        name: 'Service Level Credit Claims',
        categoryId: 'customer-success',
        content: `1. Process
*   CSM validates SLA breach claim before issuing credits.`
    },

    // Client Relationship Management Team - 961-970
    {
        id: 961,
        name: 'Executive Sponsorship Program',
        categoryId: 'crm-client',
        content: `1. Align
*   Top 20 clients assigned an Executive Sponsor (C-Level) who calls them twice a year.`
    },
    {
        id: 962,
        name: 'Client Entertainment Policy',
        categoryId: 'crm-client',
        content: `1. Limits
*   Gifts/Dinners limited to $150/person. No cash gifts.`
    },
    {
        id: 963,
        name: 'Incident Communication to Clients',
        categoryId: 'crm-client',
        content: `1. Comms
*   Relationship Manager sends "Personalized" apology note after Sev 1 outages, separate from generic status update.`
    },
    {
        id: 964,
        name: 'Upsell / Cross-sell Ethics',
        categoryId: 'crm-client',
        content: `1. Trust
*   Do not sell products the customer does not need. Long-term trust > Short-term revenue.`
    },
    {
        id: 965,
        name: 'Contract Renewal Negotiation',
        categoryId: 'crm-client',
        content: `1. Start
*   Renewal discussions begin 90 days before expiry.`
    },
    {
        id: 966,
        name: 'Client Complaint Handling',
        categoryId: 'crm-client',
        content: `1. Official
*   Formal complaints logged in Complaint Register.
*   **Resolution**: Written response required within 5 days.`
    },
    {
        id: 967,
        name: 'NPS (Net Promoter Score) Action',
        categoryId: 'crm-client',
        content: `1. Detractors
*   All Detractor (0-6) scores must be called within 24 hours to understand the issue.`
    },
    {
        id: 968,
        name: 'Strategic Account Planning',
        categoryId: 'crm-client',
        content: `1. Annual
*   Account Plan (Org chart, goals, whitespace) updated annually for Key Accounts.`
    },
    {
        id: 969,
        name: 'Client Advisory Board (CAB) Participation',
        categoryId: 'crm-client',
        content: `1. Invite
*   Select clients invited to CAB to influence Product Roadmap.`
    },
    {
        id: 970,
        name: 'Conflict of Interest (Client Side)',
        categoryId: 'crm-client',
        content: `1. Disclosure
*   Employees with family working at Client organizations must disclose it.`
    }
];
