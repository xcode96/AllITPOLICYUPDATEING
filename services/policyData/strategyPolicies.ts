import { Policy } from '../../types';

export const strategyPolicies: Policy[] = [
    // Enterprise Architecture Team - 971-980
    {
        id: 971,
        name: 'Technical Debt Policy',
        categoryId: 'ea',
        content: `1. Definition
*   Tech Debt is not just "bad code". It includes legacy platforms, unsupported OS, and manual processes.
*   **Cap**: Tech Debt items must not exceed 20% of the backlog.`
    },
    {
        id: 972,
        name: 'Cloud-First Strategy',
        categoryId: 'ea',
        content: `1. Principles
*   Buy (SaaS) > Build (PaaS) > Host (IaaS).
*   **Justification**: On-premise deployments require CIO approval (Exception basis only).`
    },
    {
        id: 973,
        name: 'Architecture Review Board (ARB)',
        categoryId: 'ea',
        content: `1. Mandate
*   All new projects >$50k budget must present High Level Design (HLD) to ARB.
*   **Veto**: ARB can veto designs that violate security or scalability standards.`
    },
    {
        id: 974,
        name: 'Standard Technology Radar',
        categoryId: 'ea',
        content: `1. Rings
*   **Adopt**: Standard technologies (e.g., React, PostgreSQL). Usage encouraged.
*   **Hold**: Deprecated technologies (e.g., SOAP, Flash). New usage prohibited.`
    },
    {
        id: 975,
        name: 'Data Sovereignty Architecture',
        categoryId: 'ea',
        content: `1. Design
*   Systems must be architected to keep EU data in EU and US data in US.
*   **Sharding**: Tenant sharding ensures physical data separation.`
    },
    {
        id: 976,
        name: 'Integration Logic Placement',
        categoryId: 'ea',
        content: `1. Rules
*   Business logic belongs in the Application Layer / Microservices, NOT in the Middleware/ESB (Smart Endpoints, Dumb Pipes).`
    },
    {
        id: 977,
        name: 'Microservices Granularity',
        categoryId: 'ea',
        content: `1. Sizing
*   "Shared Database" anti-pattern is prohibited. Each service owns its data schema.
*   **Communication**: Services talk via API only.`
    },
    {
        id: 978,
        name: 'High Availability Designs',
        categoryId: 'ea',
        content: `1. Tier 1
*   Tier 1 (Critical) Apps must be Active-Active across 2 Availability Zones.
*   **RTO/RPO**: <15 mins.`
    },
    {
        id: 979,
        name: 'Solution Blueprint Standards',
        categoryId: 'ea',
        content: `1. Artifacts
*   Blueprints must include: Context Diagram, Data Flow Diagram, Security View, and Infrastructure View.`
    },
    {
        id: 980,
        name: 'Vendor Neutrality',
        categoryId: 'ea',
        content: `1. Lock-in
*   Avoid proprietary features that prevent porting (e.g., Oracle PL/SQL logic).
*   **Containers**: Use Docker to ensure portability.`
    },

    // Digital Transformation Team - 981-990
    {
        id: 981,
        name: 'Paperless Office Initiative',
        categoryId: 'digital-transform',
        content: `1. Goal
*   Digitize all physical workflows.
*   **E-Sign**: DocuSign/Adobe Sign is the legal standard. Physical signatures deprecated.`
    },
    {
        id: 982,
        name: 'Citizen Developer Policy',
        categoryId: 'digital-transform',
        content: `1. Governance
*   Business users building PowerApps/Automations must use the "Default Environment" with DLP policies applied.
*   **Shadow IT**: Unauthorized apps deleted after 30 days.`
    },
    {
        id: 983,
        name: 'Legacy Modernization Roadmap',
        categoryId: 'digital-transform',
        content: `1. Sunset
*   Mainframe offloading is a strategic priority.
*   **Strangler Pattern**: Migrate functionality slice-by-slice, not Big Bang.`
    },
    {
        id: 984,
        name: 'Mobile-First Employee Experience',
        categoryId: 'digital-transform',
        content: `1. UX
*   Internal tools (Expenses, Time Off) must work seamlessly on mobile devices. No VPN required (use ZTNA).`
    },
    {
        id: 985,
        name: 'Automation Center of Excellence (CoE)',
        categoryId: 'digital-transform',
        content: `1. RPA
*   Robotic Process Automation (UiPath) used for high-volume, repetitive tasks.
*   **Credentials**: Bots have their own AD accounts, not running as user.`
    },
    {
        id: 986,
        name: 'Digital Twin Strategy',
        categoryId: 'digital-transform',
        content: `1. IoT
*   Manufacturing plants must have a Digital Twin for real-time monitoring and predictive maintenance.`
    },
    {
        id: 987,
        name: 'Agile Transformation Metrics',
        categoryId: 'digital-transform',
        content: `1. Kpis
*   Measure: Flow Velocity, Lead Time, and Happiness Metric.
*   **Anti-pattern**: Using Velocity to compare teams is prohibited.`
    },
    {
        id: 988,
        name: 'Open API Economy',
        categoryId: 'digital-transform',
        content: `1. Monetization
*   Core data assets exposed as Public APIs to partners for new revenue streams.
*   **Developer Portal**: Self-service key generation.`
    },
    {
        id: 989,
        name: 'Digital Literacy Uplift',
        categoryId: 'digital-transform',
        content: `1. Training
*   "Digital Quotient" training mandatory for non-technical staff (Data Literacy, AI Basics).`
    },
    {
        id: 990,
        name: 'Cloud Migration Factory',
        categoryId: 'digital-transform',
        content: `1. Process
*   Standardized "Rehost, Replatform, Refactor" decisions made for every app.
*   **Lift & Shift**: Temporary only. Must optimize within 12 months.`
    },

    // Innovation & R&D Team - 991-1000
    {
        id: 991,
        name: 'Hackathon IP Rights',
        categoryId: 'innovation',
        content: `1. Ownership
*   Ideas generated during Corporate Hackathons belong to the company.
*   **Rewards**: Winners receive cash bonuses and project funding.`
    },
    {
        id: 992,
        name: 'Fail Fast Policy',
        categoryId: 'innovation',
        content: `1. Culture
*   Innovation projects failing to meet milestones after 3 months are killed.
*   **Lesson**: "Failure Reports" celebrated as learning.`
    },
    {
        id: 993,
        name: 'Use of Emerging Tech',
        categoryId: 'innovation',
        content: `1. Sandbox
*   Blockchain/Quantum/Metaverse experiments restricted to isolated Innovation Labs.
*   **Prod**: No connection to production data.`
    },
    {
        id: 994,
        name: 'Open Innovation (Startups)',
        categoryId: 'innovation',
        content: `1. Partnership
*   Collaborate with startups for niche tech.
*   **POC**: Fast-track procurement process available for startups.`
    },
    {
        id: 995,
        name: 'Patent Incentive Program',
        categoryId: 'innovation',
        content: `1. Bonus
*   $1,500 bonus for Patent File. $3,000 for Patent Grant.
*   **Review**: Patent committee reviews disclosures monthly.`
    },
    {
        id: 996,
        name: 'R&D Tax Credit Compliance',
        categoryId: 'innovation',
        content: `1. Logs
*   Engineers must tag time in Jira as "R&D" to qualify for government tax credits.`
    },
    {
        id: 997,
        name: 'Academic Collaboration',
        categoryId: 'innovation',
        content: `1. Universities
*   Sponsored research with Universities requires IP agreement beforehand.
*   **Interns**: PhD interns hired for specific research.`
    },
    {
        id: 998,
        name: 'Idea Management',
        categoryId: 'innovation',
        content: `1. Portal
*   "IdeaBox" portal open to all employees.
*   **Voting**: Top voted ideas get pitched to Shark Tank (Exec panel).`
    },
    {
        id: 999,
        name: 'Technology Scouting',
        categoryId: 'innovation',
        content: `1. Radar
*   Scouts attending conferences (CES/Web Summit) must issue trip report on trends.`
    },
    {
        id: 1000,
        name: 'Bimodal IT Structure',
        categoryId: 'innovation',
        content: `1. Mode 2
*   Innovation team operates as "Mode 2" (Agile/Experimental) separate from "Mode 1" (Stable Ops).`
    },

    // Program Management Office (PMO) - 1001-1010
    {
        id: 1001,
        name: 'Project Governance Framework',
        categoryId: 'pmo',
        content: `1. methodology
*   **Waterfall**: For Infrastructure/Construction.
*   **Agile**: For Software Dev.
*   **Gates**: Initiation -> Planning -> Execution -> Closure.`
    },
    {
        id: 1002,
        name: 'Status Reporting Standards',
        categoryId: 'pmo',
        content: `1. RAG
*   Red/Amber/Green status defined objectively (e.g., Red = Budget > 10% over).
*   **Frequency**: Weekly for active projects.`
    },
    {
        id: 1003,
        name: 'Resource Allocation Policy',
        categoryId: 'pmo',
        content: `1. Conflict
*   Resources cannot be allocated >100% capacity.
*   **Priority**: Strategic projects trump Sustainment work.`
    },
    {
        id: 1004,
        name: 'Project Budget Management',
        categoryId: 'pmo',
        content: `1. Variance
*   Project Managers must forecast Estimate at Completion (EAC).
*   **Variance**: >10% variance requires Change Request.`
    },
    {
        id: 1005,
        name: 'Risk & Issue Log',
        categoryId: 'pmo',
        content: `1. RAID
*   Risks, Assumptions, Issues, Dependencies (RAID) log mandatory.
*   **Escalation**: Risks with High Impact escalated to Steering Committee.`
    },
    {
        id: 1006,
        name: 'Project Closure & Handover',
        categoryId: 'pmo',
        content: `1. Acceptance
*   Ops Team must sign off "Operational Readiness" before project closes.
*   **Lessons**: Retro conducted.`
    },
    {
        id: 1007,
        name: 'Portfolio Management',
        categoryId: 'pmo',
        content: `1. Balance
*   Portfolio balanced between "Run the Business" (60%) and "Grow the Business" (40%).`
    },
    {
        id: 1008,
        name: 'Dependency Management',
        categoryId: 'pmo',
        content: `1. Cross-Team
*   Dependencies logged in Jira Links.
*   **SoS**: Scrum of Scrums used to align dependency delivery dates.`
    },
    {
        id: 1009,
        name: 'Benefit Realization',
        categoryId: 'pmo',
        content: `1. Tracking
*   Project success measured not just by "On Time/Budget" but by business value delivered (e.g., Revenue Increase) 6 months post-live.`
    },
    {
        id: 1010,
        name: 'Steering Committee Charter',
        categoryId: 'pmo',
        content: `1. Role
*   SteerCo meets monthly to unblock issues and approve Scope Changes.`
    },

    // Product Management Team - 1011-1020
    {
        id: 1011,
        name: 'Product Roadmap Transparency',
        categoryId: 'product-mgmt',
        content: `1. Visibility
*   Roadmap (Next / Now / Later) shared with company.
*   **External**: No dates promised externally to avoid liability.`
    },
    {
        id: 1012,
        name: 'Feature Prioritization (RICE)',
        categoryId: 'product-mgmt',
        content: `1. Scoring
*   Features scored by RICE (Reach, Impact, Confidence, Effort).
*   **HiPPO**: Data beats Highest Paid Person's Opinion.`
    },
    {
        id: 1013,
        name: 'Minimum Viable Product (MVP)',
        categoryId: 'product-mgmt',
        content: `1. Scope
*   MVP must solve the core problem. "Nice to haves" descoped to V2.
*   **Quality**: MVP != Buggy. It means minimal scope, high quality.`
    },
    {
        id: 1014,
        name: 'User Research Participation',
        categoryId: 'product-mgmt',
        content: `1. Empathy
*   PMs must interview at least 5 customers per month.
*   **Beta**: Beta testers must sign NDA.`
    },
    {
        id: 1015,
        name: 'Product Requirements Document (PRD)',
        categoryId: 'product-mgmt',
        content: `1. Format
*   PRD must include: Problem Statement, User Personas, Functional Req, Non-Functional Req (Performance), and KPIs.`
    },
    {
        id: 1016,
        name: 'Release Note Communication',
        categoryId: 'product-mgmt',
        content: `1. Clarity
*   Release notes written in plain English (Benefit focused), not technical jargon.
*   **Channel**: In-app toast + Email.`
    },
    {
        id: 1017,
        name: 'Product Analytics (Telemetry)',
        categoryId: 'product-mgmt',
        content: `1. Data
*   Every feature must have tracking events (Mixpanel/Amplitude).
*   **Metric**: "If you can't measure it, don't ship it."`
    },
    {
        id: 1018,
        name: 'End of Life (EOL) Policy',
        categoryId: 'product-mgmt',
        content: `1. Sunset
*   Provide 12 months notice before sunsetting a product.
*   **Migration**: Offer tools to migrate data.`
    },
    {
        id: 1019,
        name: 'Competitor Analysis',
        categoryId: 'product-mgmt',
        content: `1. Benchmarking
*   Quarterly teardown of competitor features.
*   **Differentiate**: Focus on our USP, not feature parity.`
    },
    {
        id: 1020,
        name: 'Pricing Strategy Governance',
        categoryId: 'product-mgmt',
        content: `1. Approval
*   Pricing changes require Pricing Committee (Sales/Finance/Product) approval.`
    },

    // Business Analysis Team - 1021-1030
    {
        id: 1021,
        name: 'Requirement Traceability',
        categoryId: 'ba',
        content: `1. Matrix
*   Traceability Matrix connects: Business Goal -> Requirement -> Test Case -> Code.
*   Ensures nothing is built that wasn't asked for.`
    },
    {
        id: 1022,
        name: 'Process Mapping Standards (BPMN)',
        categoryId: 'ba',
        content: `1. Notation
*   Use BPMN 2.0 standard for "As-Is" and "To-Be" process maps.
*   **Tool**: Visio or Lucidchart.`
    },
    {
        id: 1023,
        name: 'User Story Writing (INVEST)',
        categoryId: 'ba',
        content: `1. Criteria
*   Stories must be INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable).
*   **Acceptance Criteria**: Gherkin format (Given/When/Then).`
    },
    {
        id: 1024,
        name: 'Stakeholder Management',
        categoryId: 'ba',
        content: `1. Sign-off
*   Reqs must be signed off by Business Product Owner verbally or via email before Dev starts.`
    },
    {
        id: 1025,
        name: 'Gap Analysis',
        categoryId: 'ba',
        content: `1. Fit
*   For COTS software, define Gap Analysis between Standard features and Business needs.
*   **Solution**: Workaround > Customization.`
    },
    {
        id: 1026,
        name: 'Non-Functional Requirements (NFR)',
        categoryId: 'ba',
        content: `1. Definition
*   BAs must capture: Scalability, Security, Performance, and Recoverability reqs, not just functional.`
    },
    {
        id: 1027,
        name: 'Workshop Facilitation',
        categoryId: 'ba',
        content: `1. Minutes
*   Meeting minutes distributed within 24 hours of Requirements Workshop.
*   **Consensus**: Document agreed decisions clearly.`
    },
    {
        id: 1028,
        name: 'UAT Support',
        categoryId: 'ba',
        content: `1. Role
*   BAs support Business Users during UAT (Triage bugs: "Is it a bug or a requirement gap?").`
    },
    {
        id: 1029,
        name: 'Change Request Impact Analysis',
        categoryId: 'ba',
        content: `1. Assessment
*   For Scope Creep, BAs assess impact on Timeline and Budget before accepting.`
    },
    {
        id: 1030,
        name: 'Data Dictionary Maintenance',
        categoryId: 'ba',
        content: `1. Terms
*   Define business fields (e.g., "what is a 'Booking'?") to alignment IT and Business understanding.`
    },

    // Strategy & Planning Team - 1031-1040
    {
        id: 1031,
        name: 'Strategic Planning Cycle',
        categoryId: 'strategy',
        content: `1. Annual
*   3-Year Strategy refreshed annually in Q3.
*   **Alignment**: IT Strategy must support Business Strategy (e.g., "Growth via M&A").`
    },
    {
        id: 1032,
        name: 'KPI Definition & Balanced Scorecard',
        categoryId: 'strategy',
        content: `1. Metrics
*   Corporate Scorecard tracks: Financial, Customer, Internal Process, and Learning/Growth metrcis.`
    },
    {
        id: 1033,
        name: 'Market Intelligence',
        categoryId: 'strategy',
        content: `1. Report
*   Quarterly briefing on Macro trends (AI, Economy) and their impact on our business.`
    },
    {
        id: 1034,
        name: 'SWOT Analysis',
        categoryId: 'strategy',
        content: `1. Review
*   SWOT (Strengths, Weaknesses, Opportunities, Threats) updated semi-annually.`
    },
    {
        id: 1035,
        name: 'Build vs Buy Framework',
        categoryId: 'strategy',
        content: `1. Decision
*   Differentiation: Build core IP.
*   Commodity: Buy standard functions (HR, Payroll).`
    },
    {
        id: 1036,
        name: 'Organizational Change Management (OCM)',
        categoryId: 'strategy',
        content: `1. Adoption
*   Large projects must budget for OCM (Communication, Training) to ensure adoption.
*   **ADKAR**: Use ADKAR model.`
    },
    {
        id: 1037,
        name: 'Investment Prioritization',
        categoryId: 'strategy',
        content: `1. ROI
*   Capital Projects ranked by NPV (Net Present Value) and Strategic Alignment.`
    },
    {
        id: 1038,
        name: 'Scenario Planning',
        categoryId: 'strategy',
        content: `1. War Game
*   "What If" analysis (e.g., "What if competitor drops price 20%?") used to stress test strategy.`
    },
    {
        id: 1039,
        name: 'Strategic Partnership Governance',
        categoryId: 'strategy',
        content: `1. Alliance
*   Alliances (e.g., with Microsoft/AWS) managed centrally to maximize benefits.`
    },
    {
        id: 1040,
        name: 'Sustainability Strategy (ESG)',
        categoryId: 'strategy',
        content: `1. Green IT
*   Commitment to Net Zero.
*   **Cloud**: Prefer Carbon Neutral regions.`
    }
];
