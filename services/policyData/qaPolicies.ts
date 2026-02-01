import { Policy } from '../../types';

export const qaPolicies: Policy[] = [
    // Quality Assurance (QA) Team - 541-550
    {
        id: 541,
        name: 'Quality Gate Policy',
        categoryId: 'qa',
        content: `1. Definition
*   Quality Gates are mandatory checkpoints between SDLC stages.
*   **Gate 1 (Dev -> QA)**: Unit tests passed, Code Review complete.
*   **Gate 2 (QA -> Staging)**: Functional tests passed (100%), No Critical/High bugs open.
*   **Gate 3 (Staging -> Prod)**: UAT Sign-off, Regression passed, Performance baseline met.`
    },
    {
        id: 542,
        name: 'Defect Severity Standard',
        categoryId: 'qa',
        content: `1. Classifications
*   **S1 (Blocker)**: System down or Core feature broken. No workaround. (Must fix before release).
*   **S2 (Critical)**: Major feature broken. Workaround difficult. (Must fix before release).
*   **S3 (Major)**: Feature broken but workaround exists. (Can defer with Product Owner approval).
*   **S4 (Minor)**: Cosmetic issue.`
    },
    {
        id: 543,
        name: 'Test Plan Requirement',
        categoryId: 'qa',
        content: `1. Documentation
*   Every Epic requires a Master Test Plan (MTP).
*   **Content**: Scope, Strategy, Tools, Schedule, and Exit Criteria.`
    },
    {
        id: 544,
        name: 'QA Environment Integrity',
        categoryId: 'qa',
        content: `1. Stability
*   The QA environment must be stable. Deployment of broken builds that block testing counts against the "Build Stability" metric.
*   **Data**: Test data must be refreshed monthly from anonymized Production data.`
    },
    {
        id: 545,
        name: 'Test Evidence Retention',
        categoryId: 'qa',
        content: `1. Audit
*   Screenshots/Logs of passed test cases must be attached to the Test Execution Record (Jira/Xray).
*   **Retention**: Kept for 1 year for auditability.`
    },
    {
        id: 546,
        name: 'Root Cause Analysis (RCA) for Escapes',
        categoryId: 'qa',
        content: `1. Procedure
*   Bugs found in Production (Defect Escapes) trigger an RCA.
*   **Action**: QA must update the Regression Suite to catch this scenario in the future.`
    },
    {
        id: 547,
        name: 'Shift-Left Testing Policy',
        categoryId: 'qa',
        content: `1. Early Involvement
*   QA engineers must participate in Requirement Refinement sessions to define "Acceptance Criteria" before coding begins.`
    },
    {
        id: 548,
        name: 'Code Freeze Policy',
        categoryId: 'qa',
        content: `1. Hard Freeze
*   No changes allowed to the Release Branch during the "Final Regression" phase except S1 bug fixes.`
    },
    {
        id: 549,
        name: 'Smoke Testing Policy',
        categoryId: 'qa',
        content: `1. Sanity
*   A "Smoke Test" (Sanity Check) must run automatically upon every deployment.
*   **Failure**: If Smoke fails, the deployment is automatically rolled back.`
    },
    {
        id: 550,
        name: 'Bug Triage Process',
        categoryId: 'qa',
        content: `1. Meeting
*   Daily Triage meeting during active sprints.
*   **Attendees**: QA Lead, Dev Lead, Product Owner.
*   **Outcome**: Bugs Assigned, Deferred, or Rejected (Working as Designed).`
    },

    // Manual Testing Team - 551-560
    {
        id: 551,
        name: 'Exploratory Testing Charter',
        categoryId: 'manual-testing',
        content: `1. Timeboxing
*   Exploratory testing sessions should be timeboxed (e.g., 90 minutes).
*   **Focus**: Go beyond the script. Try to break the system ("Happy Path" vs "Destructive Path").`
    },
    {
        id: 552,
        name: 'Usability & Accessibility Testing',
        categoryId: 'manual-testing',
        content: `1. Human Element
*   Manual testers verify "Look and Feel", Tab order, and Screen Reader compatibility (NVDA/VoiceOver) which automation misses.`
    },
    {
        id: 553,
        name: 'Test Case Design Standards',
        categoryId: 'manual-testing',
        content: `1. format
*   **Steps**: Clear, reproducible steps (1. Click Login. 2. Enter User...).
*   **Expected Result**: Specific outcome (e.g., "User sees Dashboard", not just "It works").`
    },
    {
        id: 554,
        name: 'Device Coverage Matrix',
        categoryId: 'manual-testing',
        content: `1. Physical Hardware
*   Manual testing must cover the top 5 mobile devices used by customers (based on Analytics).
*   **Rotation**: Devices rotated weekly among testers.`
    },
    {
        id: 555,
        name: 'Edge Case Validation',
        categoryId: 'manual-testing',
        content: `1. Scenarios
*   Testers must validate: Low Battery, Flight Mode, Intermittent Network, Large Fonts, Dark Mode.`
    },
    {
        id: 556,
        name: 'Visual Regression Testing',
        categoryId: 'manual-testing',
        content: `1. Inspection
*   Compare UI against Figma mockups pixel-perfectly.
*   Report padding/margin issues as "UI Defects".`
    },
    {
        id: 557,
        name: 'Localization (L10n) Testing',
        categoryId: 'manual-testing',
        content: `1. Global
*   Verify UI layout for Long Strings (German) and Right-to-Left languages (Arabic).
*   Check Date/Currency formats.`
    },
    {
        id: 558,
        name: 'Test Data Management',
        categoryId: 'manual-testing',
        content: `1. Privacy
*   Manual testers must NEVER use real customer PII.
*   Use "Jane Doe" synthetic data generated by the Test Data Tool.`
    },
    {
        id: 559,
        name: 'Regression Suite Maintenance',
        categoryId: 'manual-testing',
        content: `1. Pruning
*   Test cases that have passed for 6 months straight and are low risk should be deprecated or automated.`
    },
    {
        id: 560,
        name: 'Bug Reporting Standards',
        categoryId: 'manual-testing',
        content: `1. Quality
*   Every bug report must include:
    *   Summary.
    *   Steps to Reproduce.
    *   Environment (OS/Browser).
    *   Screenshot/Video recording.`
    },

    // Automation Testing Team - 561-570
    {
        id: 561,
        name: 'Automation Framework Architecture',
        categoryId: 'auto-testing',
        content: `1. Tooling
*   **Web**: Selenium / Playwright.
*   **Mobile**: Appium.
*   **Pattern**: Page Object Model (POM) mandatory to reduce maintenance.`
    },
    {
        id: 562,
        name: 'Automation First Policy',
        categoryId: 'auto-testing',
        content: `1. Strategy
*   Any test case executed >3 times must be automated.
*   **Goal**: 80% Automation of Regression Suite.`
    },
    {
        id: 563,
        name: 'Test Idempotency',
        categoryId: 'auto-testing',
        content: `1. Self-Sufficiency
*   Tests must create their own data (Setup) and clean it up (Teardown).
*   No dependency on pre-existing records.`
    },
    {
        id: 564,
        name: 'Parallel Execution',
        categoryId: 'auto-testing',
        content: `1. Speed
*   Tests must be designed to run in parallel (Grid/Selenium Box).
*   **Thread Safety**: Avoid shared static variables.`
    },
    {
        id: 565,
        name: 'Flaky Test Management',
        categoryId: 'auto-testing',
        content: `1. Zero Tolerance
*   Tests failing intermittently (>5% limit) are quarantined immediately.
*   "Retries" allowed max 1 time.`
    },
    {
        id: 566,
        name: 'In-Sprint Automation',
        categoryId: 'auto-testing',
        content: `1. Definition of Done
*   Story is not "Done" until the Automated Test is written and passed in CI.`
    },
    {
        id: 567,
        name: 'Headless Execution',
        categoryId: 'auto-testing',
        content: `1. CI/CD
*   Tests in pipeline run Headless (No GUI) for performance.
*   **Debugging**: Screenshots captured on failure.`
    },
    {
        id: 568,
        name: 'API vs UI Automation Ratio',
        categoryId: 'auto-testing',
        content: `1. Pyramid
*   Adhere to Testing Pyramid:
    *   70% Unit (Dev).
    *   20% API (Integration).
    *   10% UI (E2E).`
    },
    {
        id: 569,
        name: 'Keyword Driven Testing',
        categoryId: 'auto-testing',
        content: `1. Abstraction
*   Use keywords (e.g., "LoginAsAdmin") to make tests readable by Business Analysts (Cucumber/Gherkin).`
    },
    {
        id: 570,
        name: 'Visual Comparison Automation',
        categoryId: 'auto-testing',
        content: `1. Percy/Applitools
*   Automated screenshot comparison used to catch CSS regressions that logic tests miss.`
    },

    // Performance & Load Testing Team - 571-580
    {
        id: 571,
        name: 'Performance Baseline Definitions',
        categoryId: 'perf-testing',
        content: `1. Benchmarks
*   Baselines (Response Time / Throughput) established for every release.
*   **Degradation**: Deviation >5% from baseline blocks release.`
    },
    {
        id: 572,
        name: 'Peak Load Scenarios',
        categoryId: 'perf-testing',
        content: `1. Stress
*   Test at 200% of expected peak load to find breaking points.
*   **Metric**: "Knee of the Curve" (Point where throughput plateaus and latency spikes).`
    },
    {
        id: 573,
        name: 'Endurance (Soak) Testing',
        categoryId: 'perf-testing',
        content: `1. Duration
*   Run 24-hour load test at 80% capacity to detect Memory Leaks and Connection Pool exhaustion.`
    },
    {
        id: 574,
        name: 'Scalability Testing',
        categoryId: 'perf-testing',
        content: `1. Auto-Scale
*   Verify that new instances spin up within 3 minutes when load increases.
*   Verify scale-down happens when load drops.`
    },
    {
        id: 575,
        name: 'Network Virtualization',
        categoryId: 'perf-testing',
        content: `1. Conditions
*   Simulate 3G/4G/High Latency networks to test Mobile App performance.`
    },
    {
        id: 576,
        name: 'Database Performance Profiling',
        categoryId: 'perf-testing',
        content: `1. Slow Queries
*   Load tests must monitor DB CPU and Slow Query Log.
*   Any query taking >1s under load is flagged.`
    },
    {
        id: 577,
        name: 'Performance Environment Sizing',
        categoryId: 'perf-testing',
        content: `1. Parity
*   Performance Test environment must be a Scaled Replica of Prob (e.g., 50% size).
*   Results extrapolated carefully.`
    },
    {
        id: 578,
        name: 'Failover Testing',
        categoryId: 'perf-testing',
        content: `1. Resilience
*   Kill primary database/server during load test.
*   **SLA**: System must recover within defined RTO.`
    },
    {
        id: 579,
        name: 'Load Generation Geography',
        categoryId: 'perf-testing',
        content: `1. Distributed
*   Load generators must run from different AWS regions to simulate global traffic distribution.`
    },
    {
        id: 580,
        name: 'Client-Side Performance',
        categoryId: 'perf-testing',
        content: `1. Lighthouse
*   Tests include browser-side metrics (Time to Interactive, First Paint) using Lighthouse CI.`
    },

    // Security Testing Team - 581-590
    {
        id: 581,
        name: 'DAST Scanning Mandate',
        categoryId: 'sec-testing',
        content: `1. Frequency
*   Dynamic Application Security Testing (DAST) must run weekly on Staging.`
    },
    {
        id: 582,
        name: 'Penetration Testing Coordination',
        categoryId: 'sec-testing',
        content: `1. Vendor
*   Manage external Pentest vendor engagements.
*   Ensure Test Environment access (Whitelisting) is ready beforehand.`
    },
    {
        id: 583,
        name: 'Security Regression Testing',
        categoryId: 'sec-testing',
        content: `1. Verification
*   Re-test previously closed vulnerabilities to ensure "Zombie Patterns" don't return.`
    },
    {
        id: 584,
        name: 'Authorization Matrix Testing',
        categoryId: 'sec-testing',
        content: `1. IDOR
*   Automated tests must verify Horizontal Privilege Escalation (User A accessing User B data) and Vertical (User accessing Admin).`
    },
    {
        id: 585,
        name: 'Dependency Vulnerability Check',
        categoryId: 'sec-testing',
        content: `1. OWASP Dependency Check
*   Automated check for CVEs in third-party libraries (SCA).`
    },
    {
        id: 586,
        name: 'Fuzz Testing',
        categoryId: 'sec-testing',
        content: `1. Input
*   Send malformed/random data to API endpoints to crash the parser.`
    },
    {
        id: 587,
        name: 'Secret Leak Detection',
        categoryId: 'sec-testing',
        content: `1. Git
*   Scan code commits for AWS Keys / Tokens using TruffleHog.`
    },
    {
        id: 588,
        name: 'Compliance Testing',
        categoryId: 'sec-testing',
        content: `1. Headers
*   Verify Security Headers (HSTS, CSP, X-Frame-Options) are present on all responses.`
    },
    {
        id: 589,
        name: 'Social Engineering Simulation',
        categoryId: 'sec-testing',
        content: `(Collaborates with Red Team on Phishing Campaigns)`
    },
    {
        id: 590,
        name: 'Threat Modeling Verification',
        categoryId: 'sec-testing',
        content: `1. Design
*   Verify that mitigations proposed in Threat Model are actually implemented in code.`
    },

    // User Acceptance Testing (UAT) Team - 591-600
    {
        id: 591,
        name: 'UAT Entrance Criteria',
        categoryId: 'uat',
        content: `1. Prerequisites
*   UAT only begins after QA Sign-off.
*   No Sev 1/2 bugs open.`
    },
    {
        id: 592,
        name: 'Business User Engagement',
        categoryId: 'uat',
        content: `1. Testers
*   Actual business users (Operations, Finance, Sales) perform UAT, not IT staff.`
    },
    {
        id: 593,
        name: 'UAT Script Sign-off',
        categoryId: 'uat',
        content: `1. Agreement
*   Business Owners must approve the UAT Test Cases *before* execution to ensure coverage.`
    },
    {
        id: 594,
        name: 'Beta Testing Policy',
        categoryId: 'uat',
        content: `1. Pilot
*   Releases deployed to a "Pilot Group" (5% of users) in Production before general availability.`
    },
    {
        id: 595,
        name: 'UAT Environment Data',
        categoryId: 'uat',
        content: `1. Realism
*   UAT Env must contain "Gold Copy" data resembling Prod (anonymized) to reflect real business scenarios.`
    },
    {
        id: 596,
        name: 'Defect SLA during UAT',
        categoryId: 'uat',
        content: `1. Priority
*   Dev team must prioritize UAT bugs over new features to ensure the release date is met.`
    },
    {
        id: 597,
        name: 'Go/No-Go Decision',
        categoryId: 'uat',
        content: `1. Vote
*   UAT Lead casts the deciding vote on "Go Live" during the Change Board meeting.`
    },
    {
        id: 598,
        name: 'Production Verification Testing (PVT)',
        categoryId: 'uat',
        content: `1. Post-Go-Live
*   UAT users perform a swift "Sanity Check" in Production immediately after maintenance window closes.`
    },
    {
        id: 599,
        name: 'Feature Flag Testing',
        categoryId: 'uat',
        content: `1. Selective
*   UAT validates that features can be toggled ON and OFF correctly via flags.`
    },
    {
        id: 600,
        name: 'UAT Metrics',
        categoryId: 'uat',
        content: `1. Report
*   Track: % Test Cases Passed, Number of showstoppers found, User feedback score.`
    }
];
