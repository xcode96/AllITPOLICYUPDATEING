import { Policy } from '../../types';

export const engineeringPolicies: Policy[] = [
    // Software Engineering Team - 431-440
    {
        id: 431,
        name: 'Coding Standards & Style Guide',
        categoryId: 'swe',
        content: `1. Standard
*   Code must adhere to the official company Style Guide for each language (e.g., Google Java Style, Airbnb JavaScript Style).
*   **Linting**: Linters must run on save and commit.

2. Clarity
*   Acronyms and abbreviations in variable names are discouraged (e.g., use \`customerIndex\` not \`custId\`).`
    },
    {
        id: 432,
        name: 'Code Review Policy',
        categoryId: 'swe',
        content: `1. Requirement
*   No code merges to \`main\` without approval from at least 1 peer (2 for Critical components).
*   **Turnaround**: Reviews should be completed within 24 hours.

2. Focus
*   Reviews check for Logic, Security, and Style. "Rubber stamping" is prohibited.`
    },
    {
        id: 433,
        name: 'Technical Debt Management',
        categoryId: 'swe',
        content: `1. Quota
*   20% of engineering bandwidth per sprint is dedicated to paying down technical debt.

2. Tracking
*   Tech debt items must be ticketed (Jira) and tagged \`tech-debt\`. Hidden debt is not allowed.`
    },
    {
        id: 434,
        name: 'Source Control (Git) Strategy',
        categoryId: 'swe',
        content: `1. Model
*   **Trunk Based Development**: Short-lived feature branches (<2 days).
*   **Commits**: Atomic commits with meaningful messages (Conventional Commits format: \`feat: add login\`).

2. Protection
*   Force Pushing (\`git push --force\`) to shared branches is strictly blocked.`
    },
    {
        id: 435,
        name: 'Documentation Standards',
        categoryId: 'swe',
        content: `1. Types
*   **Code**: Public methods must have Javadoc/Docstring.
*   **Repo**: Every repo must have a \`README.md\` (Setup, Run, Test).
*   **Architecture**: Architecture Decision Records (ADR) stored in \`/docs\`.`
    },
    {
        id: 436,
        name: 'Unit Testing Policy',
        categoryId: 'swe',
        content: `1. Coverage
*   Minimum 80% code coverage for new business logic.
*   **Quality**: Tests must assert outcomes, not just run lines.

2. Mocking
*   External dependencies (Database, API) must be mocked in unit tests for speed.`
    },
    {
        id: 437,
        name: 'Open Source Contribution',
        categoryId: 'swe',
        content: `1. Outbound
*   Contributing to OSS is encouraged.
*   **Approval**: Contributions to major projects require Manager approval to ensure IP rights are protected.

2. Inbound
*   Use of OSS libraries requires checking license compatibility (No GPL allowed in proprietary products).`
    },
    {
        id: 438,
        name: 'Pair Programming Policy',
        categoryId: 'swe',
        content: `1. Usage
*   Mandatory for: Onboarding new hires, fixing Sev 1 incidents, and working on complex Core algorithms.
*   **Rotation**: Pairs should switch partners frequent to share knowledge.`
    },
    {
        id: 439,
        name: 'Code Refactoring Policy',
        categoryId: 'swe',
        content: `1. Boy Scout Rule
*   "Leave the code cleaner than you found it."
*   Refactoring is part of the daily workflow, not a separate project.

2. Risk
*   Major refactors require a Regression Test plan.`
    },
    {
        id: 440,
        name: 'Innovation & Learning Time',
        categoryId: 'swe',
        content: `1. Allowance
*   Engineers are allocated 4 hours per week (Friday PM) for self-directed learning or experimental projects.
*   **Sharing**: Learnings must be shared in "Show & Tell" sessions.`
    },

    // Frontend Development Team - 441-450
    {
        id: 441,
        name: 'Design System Usage',
        categoryId: 'frontend',
        content: `1. Mandate
*   UI must be built using the internal "Atlas" Design System components.
*   **Customization**: Custom CSS overriding Design System tokens is generally prohibited unless approved by UX.`
    },
    {
        id: 442,
        name: 'Web Accessibility (WCAG) Policy',
        categoryId: 'frontend',
        content: `1. Standard
*   All public-facing UIs must meet **WCAG 2.1 AA** standards.
*   **Testing**: Automated axe-core scans + Manual screen reader testing required.`
    },
    {
        id: 443,
        name: 'Browser Support Policy',
        categoryId: 'frontend',
        content: `1. Matrix
*   **Supported**: Chrome (Latest -2), Firefox (Latest -2), Safari (Latest -2), Edge.
*   **Unsupported**: IE11 is explicitly unsupported.

2. Features
*   Use feature detection (Modernizr) instead of User Agent sniffing.`
    },
    {
        id: 444,
        name: 'State Management Standards',
        categoryId: 'frontend',
        content: `1. Selection
*   **Local UI State**: Use Component State (useState).
*   **Server State**: Use React Query / Apollo Client.
*   **Global App State**: Use Redux Toolkit / Context API only when strictly necessary.`
    },
    {
        id: 445,
        name: 'Frontend Performance Budget',
        categoryId: 'frontend',
        content: `1. Metrics
*   **LCP (Largest Contentful Paint)**: < 2.5s.
*   **CLS (Cumulative Layout Shift)**: < 0.1.
*   **Bundle Size**: Initial JS bundle must be < 200KB gzipped.`
    },
    {
        id: 446,
        name: 'Asset Optimization Policy',
        categoryId: 'frontend',
        content: `1. Images
*   Must be Next-Gen formats (WebP/AVIF).
*   Lazy Loading enabled for below-the-fold images.

2. Fonts
*   Use WOFF2 format. Subset fonts to used characters only.`
    },
    {
        id: 447,
        name: 'Responsive Design Policy',
        categoryId: 'frontend',
        content: `1. Breakpoints
*   Design must work from Mobile (320px) to Ultra-Wide (2560px).
*   **Mobile First**: Styles should be written mobile-first (min-width media queries).`
    },
    {
        id: 448,
        name: 'Frontend Testing Strategy',
        categoryId: 'frontend',
        content: `1. Pyamid
*   **Unit**: Jest (Utils/Hooks).
*   **Integration**: React Testing Library (Components).
*   **E2E**: Cypress/Playwright (Critical User Flows only).`
    },
    {
        id: 449,
        name: 'Package Management (npm)',
        categoryId: 'frontend',
        content: `1. Lockfile
*   \`package-lock.json\` or \`yarn.lock\` must be committed to ensure deterministic builds.
*   **Audit**: \`npm audit\` runs in CI to block high-severity vulnerabilities.`
    },
    {
        id: 450,
        name: 'SEO & Meta Standards',
        categoryId: 'frontend',
        content: `1. Requirements
*   Every page must have unique Title, Meta Description, and Canonical URL.
*   **Semantic HTML**: Use \`<header>\`, \`<main>\`, \`<footer>\`, \`<article>\` appropriately.`
    },

    // Backend Development Team - 451-460
    {
        id: 451,
        name: 'API Design Standards',
        categoryId: 'backend',
        content: `1. Style
*   RESTful APIs must follow standard HTTP methods and status codes.
*   **Naming**: Resources must be nouns (\`/users\`), not verbs (\`/getUsers\`).

2. Pagination
*   All list endpoints must support pagination (Limit/Offset or Cursor).`
    },
    {
        id: 452,
        name: 'Database Schema Management',
        categoryId: 'backend',
        content: `1. Migration
*   All DB changes must be script-based (Liquibase/Flyway).
*   **Review**: DBA review required for changes to tables >10GB.

2. Constraints
*   Foreign Keys and Not Null constraints must be enforced at the DB level, not just App level.`
    },
    {
        id: 453,
        name: 'Error Handling & Logging',
        categoryId: 'backend',
        content: `1. Responses
*   APIs must return structured JSON errors (\`{ code, message, requestId }\`).
*   **Security**: Stack traces must NEVER be returned to the client in Production.

2. Logs
*   Log everything needed for debugging, but PII must be masked.`
    },
    {
        id: 454,
        name: 'Authentication & Authorization',
        categoryId: 'backend',
        content: `1. Auth
*   Stateless JWT (JSON Web Tokens) preferred for Microservices.
*   **Scopes**: Scopes (e.g., \`read:users\`) must be enforced at the endpoint level.

2. Libraries
*   Do not roll your own crypto. Use standard Identity Provider SDKs.`
    },
    {
        id: 455,
        name: 'Data Validation & Sanitization',
        categoryId: 'backend',
        content: `1. Input
*   Trust nothing. Validate type, length, and format of all inputs.
*   **Sanitization**: Strip HTML tags to prevent Storage XSS.`
    },
    {
        id: 456,
        name: 'Caching Strategy',
        categoryId: 'backend',
        content: `1. Layers
*   **L1**: In-Memory (short TTL).
*   **L2**: Distributed Cache (Redis).

2. Invalidations
*   Cache invalidation strategy (Write-Through / TTL) must be defined for each cached entity.`
    },
    {
        id: 457,
        name: 'Background Jobs & Queues',
        categoryId: 'backend',
        content: `1. Async
*   Operations taking >500ms should be offloaded to a Queue (Kafka/SQS) and processed asynchronously.
*   **Retry**: Consumers must handle idempotency to support retries.`
    },
    {
        id: 458,
        name: 'Service-to-Service Communication',
        categoryId: 'backend',
        content: `1. Resilience
*   Circuit Breakers must be implemented for all external calls.
*   **Timeouts**: Aggressive timeouts (e.g., 2s) set on internal RPCs.`
    },
    {
        id: 459,
        name: 'Backend Performance Tuning',
        categoryId: 'backend',
        content: `1. N+1 Problem
*   ORM queries must be optimized to avoid N+1 select issues.
*   **Profiling**: CPU/Memory profiling enabled in Staging.`
    },
    {
        id: 460,
        name: 'API Deprecation Policy',
        categoryId: 'backend',
        content: `1. Lifecycle
*   **Notice**: Consumers given 6 months notice before breaking changes.
*   **Headers**: Use \`X-API-Deprecation-Date\` header to warn clients.`
    },

    // Full-Stack Development Team - 461-470
    {
        id: 461,
        name: 'End-to-End Ownership',
        categoryId: 'fullstack',
        content: `1. Philosophy
*   "You build it, you run it."
*   Full-stack engineers are responsible for the feature from DB schema to CSS pixel, including monitoring.`
    },
    {
        id: 462,
        name: 'Technology Stack Selection',
        categoryId: 'fullstack',
        content: `1. Approved Stack
*   **M.E.R.N.**: MongoDB, Express, React, Node.js (or equivalent approved stack).
*   **Deviations**: Introducing a new language (e.g., Go/Rust) requires Architecture Board approval.`
    },
    {
        id: 463,
        name: 'Monorepo Management',
        categoryId: 'fullstack',
        content: `1. Structure
*   Shared types (TS Interfaces) shared between FE and BE packages.
*   **Build**: Incremental builds (Nx/Turbo) used to speed up CI.`
    },
    {
        id: 464,
        name: 'Context Switching & Focus',
        categoryId: 'fullstack',
        content: `1. Work Pattern
*   Engineers should focus on one "Slice" (vertical feature) at a time, rather than context switching between pure FE and pure BE tasks.`
    },
    {
        id: 465,
        name: 'Integration Testing',
        categoryId: 'fullstack',
        content: `1. Scope
*   Integration tests must verify the contract between FE and BE.
*   **Tools**: Supertest (API) and RTL (UI) integration.`
    },
    {
        id: 466,
        name: 'Rapid Prototyping',
        categoryId: 'fullstack',
        content: `1. PoC
*   Proof of Concepts (PoC) code allowed to bypass strict standards but MUST be discarded or refactored before Production.`
    },
    {
        id: 467,
        name: 'Database & API Alignment',
        categoryId: 'fullstack',
        content: `1. GraphQL
*   GraphQL schema should largely mirror the Domain Model, not necessarily the DB Schema.
*   Avoid over-fetching.`
    },
    {
        id: 468,
        name: 'Deployment Autonomy',
        categoryId: 'fullstack',
        content: `1. Delivery
*   Full Stack features deployed atomically where possible.
*   **Flags**: Feature Flags used to decouple deployment from release.`
    },
    {
        id: 469,
        name: 'Security Hygiene (Full Stack)',
        categoryId: 'fullstack',
        content: `1. Responsibility
*   Must understand XSS (Front) and SQLi (Back).
*   Review entire data flow for security gaps.`
    },
    {
        id: 470,
        name: 'Cross-Functional Collaboration',
        categoryId: 'fullstack',
        content: `1. Bridge
*   Full Stack devs act as translators between pure Backend and pure Frontend specialists.`
    },

    // Mobile Application Development Team - 471-480
    {
        id: 471,
        name: 'App Store Guidelines Compliance',
        categoryId: 'mobile',
        content: `1. Review
*   Apps must be pre-reviewed against Apple Human Interface Guidelines and Google Play Policies before submission.`
    },
    {
        id: 472,
        name: 'Offline-First Architecture',
        categoryId: 'mobile',
        content: `1. Experience
*   App must function (read-only) without internet.
*   **Sync**: Data queued locally (SQLite/Realm) and synced when connection restores.`
    },
    {
        id: 473,
        name: 'Binary Size Limits',
        categoryId: 'mobile',
        content: `1. Quota
*   **iOS**: < 100MB (Over-the-air download limit concern).
*   **Android**: < 50MB (APK).
*   **Assets**: Use Vector Drawables / PDF Vectors.`
    },
    {
        id: 474,
        name: 'Mobile Security Hardening',
        categoryId: 'mobile',
        content: `1. Protections
*   **Obfuscation**: ProGuard/R8 enabled for Android.
*   **Root/Jailbreak**: App detects root and refuses to run for Sensitive apps (Banking).
*   **Pinning**: Certificate Pinning enforced for API domains.`
    },
    {
        id: 475,
        name: 'Crash Reporting & Analytics',
        categoryId: 'mobile',
        content: `1. Coverage
*   Crashlytics/Sentry integrated. 99.9% Crash-Free Users target.
*   **Privacy**: No PII in crash logs.`
    },
    {
        id: 476,
        name: 'Battery & Data Usage',
        categoryId: 'mobile',
        content: `1. Efficiency
*   Background tasks scheduled intelligently (JobScheduler).
*   **Polling**: Frequent polling prohibited; use Push Notifications.`
    },
    {
        id: 477,
        name: 'Deep Linking Support',
        categoryId: 'mobile',
        content: `1. Navigation
*   Universal Links (iOS) and App Links (Android) supported to open app directly from web URLs.`
    },
    {
        id: 478,
        name: 'UI/UX Consistency',
        categoryId: 'mobile',
        content: `1. Adapting
*   Respect platform norms (e.g., Back button placement, Swipe gestures) while maintaining Brand Identity.`
    },
    {
        id: 479,
        name: 'Mobile Release Management',
        categoryId: 'mobile',
        content: `1. Staged Rollout
*   Release to 1% -> 5% -> 20% -> 100% over 7 days to catch issues early.`
    },
    {
        id: 480,
        name: 'Cross-Platform Framework Usage',
        categoryId: 'mobile',
        content: `1. Strategy
*   **React Native/Flutter**: Preferred for B2B/Internal apps.
*   **Native (Swift/Kotlin)**: Preferred for high-performance B2C apps.`
    },

    // API & Integration Team - 481-490
    {
        id: 481,
        name: 'API Gateway Usage',
        categoryId: 'api',
        content: `1. Centralization
*   All public APIs must be exposed via API Gateway (Kong/Apigee).
*   **Direct Access**: Direct access to microservices from internet blocked.`
    },
    {
        id: 482,
        name: 'Rate Limiting & Throttling',
        categoryId: 'api',
        content: `1. Limits
*   **Default**: 100 requests/minute per Consumer.
*   **Headers**: Return \`X-RateLimit-Remaining\` headers.`
    },
    {
        id: 483,
        name: 'Versioning Strategy',
        categoryId: 'api',
        content: `1. URL Versioning
*   Include version in URL (\`/v1/users\`).
*   ** Breaking Changes**: Require a new major version (\`/v2\`).`
    },
    {
        id: 484,
        name: 'API Documentation (OpenAPI)',
        categoryId: 'api',
        content: `1. Standard
*   Swagger/OpenAPI 3.0 specs required for all APIs.
*   **Sync**: Docs generated from code to ensure accuracy.`
    },
    {
        id: 485,
        name: 'Idempotency Policy',
        categoryId: 'api',
        content: `1. Safety
*   POST/PATCH requests should support \`Idempotency-Key\` header to allow safe retries without duplicate processing.`
    },
    {
        id: 486,
        name: 'Webhooks & Events',
        categoryId: 'api',
        content: `1. Outbound
*   Webhooks must include a Signature (HMAC) for verification.
*   **Retry**: Exponential backoff implemented for failed webhook deliveries.`
    },
    {
        id: 487,
        name: 'Protocol Standards',
        categoryId: 'api',
        content: `1. Choice
*   **REST**: Default for Public APIs.
*   **gRPC**: Default for Internal Microservice-to-Microservice (High Performance).`
    },
    {
        id: 488,
        name: 'Third-Party Integration',
        categoryId: 'api',
        content: `1. Security
*   Credentials for third parties stored in Vault, never in code.
*   **Log**: Log raw requests/responses (sanitized) to debug vendor issues.`
    },
    {
        id: 489,
        name: 'Contract Testing',
        categoryId: 'api',
        content: `1. Pact
*   Consumer-Driven Contract testing (Pact) required to prevent Provider breaking Consumer.`
    },
    {
        id: 490,
        name: 'Mocking & Virtualization',
        categoryId: 'api',
        content: `1. Sandbox
*   Team must provide a Mock Server / Sandbox environment for Consumers to test against.`
    },

    // DevOps Engineering Team - 491-500
    {
        id: 491,
        name: 'CI/CD Pipeline Standards',
        categoryId: 'devops',
        content: `1. Automation
*   Every commit triggers a build.
*   **Stages**: Build -> Unit Test -> SAST -> Deploy Dev -> Integ Test -> Deploy Staging.`
    },
    {
        id: 492,
        name: 'Infrastructure as Code (IaC)',
        categoryId: 'devops',
        content: `1. Terraform
*   All Infra provisioned via Terraform / CloudFormation.
*   **Manual**: Manual console changes (ClickOps) are prohibited and reverted.`
    },
    {
        id: 493,
        name: 'Containerization Strategy',
        categoryId: 'devops',
        content: `1. Docker
*   Applications packaged as Docker containers.
*   **Base Images**: Use minimal, hardened base images (Distroless/Alpine).`
    },
    {
        id: 494,
        name: 'Secret Management (Vault)',
        categoryId: 'devops',
        content: `1. Injection
*   Secrets injected at runtime (Env Vars / Volume Mounts) by Vault.
*   Secrets never stored in Docker images.`
    },
    {
        id: 495,
        name: 'Environment Parity',
        categoryId: 'devops',
        content: `1. Consistency
*   Dev, Test, and Prod environments must use the same IaC code (parameterized sizing).`
    },
    {
        id: 496,
        name: 'Artifact Management',
        categoryId: 'devops',
        content: `1. Repository
*   Binaries stored in Artifactory/Nexus.
*   **Immutable**: Released artifacts cannot be overwritten.`
    },
    {
        id: 497,
        name: 'Pipeline Security',
        categoryId: 'devops',
        content: `1. Scan
*   Pipelines must scan for secrets and vulnerabilities.
*   **Access**: Only DevOps Leads can modify pipeline definitions.`
    },
    {
        id: 498,
        name: 'Disaster Recovery for Pipelines',
        categoryId: 'devops',
        content: `1. Backup
*   Jenkins/GitLab configurations backed up daily.
*   Ability to restore build capacity within 4 hours.`
    },
    {
        id: 499,
        name: 'Self-Service Portal',
        categoryId: 'devops',
        content: `1. Autonomy
*   Developers should be able to provision standard resources (S3, RDS) via Self-Service (Backstage) without ticket.`
    },
    {
        id: 500,
        name: 'Configuration Drift Management',
        categoryId: 'devops',
        content: `1. Correction
*   Automated daily runs of Terraform Apply to correct any drift.`
    },

    // Site Reliability Engineering (SRE) Team - 501-510
    {
        id: 501,
        name: 'SLO / SLI Definition',
        categoryId: 'sre',
        content: `1. Metrics
*   **SLI**: Indicator (e.g., Latency).
*   **SLO**: Objective (e.g., 99.9% of requests < 200ms).
*   Every Tier 1 service must have defined SLOs.`
    },
    {
        id: 502,
        name: 'Error Budget Policy',
        categoryId: 'sre',
        content: `1. Consequences
*   If Error Budget is exhausted, Feature Freezes are enforced.
*   Engineering time shifts to Reliability checks.`
    },
    {
        id: 503,
        name: 'Blameless Post-Mortems',
        categoryId: 'sre',
        content: `1. Culture
*   Focus on Process failure, not Human failure.
*   **Artifact**: Root Cause Analysis (RCA) published for all Sev 1s.`
    },
    {
        id: 504,
        name: 'On-Call Rotation & Fatigue',
        categoryId: 'sre',
        content: `1. Balance
*   Max 1 week on-call per month.
*   **Alerts**: If >10 pages per shift, on-call is considered "Unhealthy" and requires immediate engineering fix.`
    },
    {
        id: 505,
        name: 'Chaos Engineering',
        categoryId: 'sre',
        content: `1. Testing
*   Randomly terminate instances in Staging (and eventually Prod) to verify resilience.
*   **GameDays**: Structured chaos exercises.`
    },
    {
        id: 506,
        name: 'Capacity Planning',
        categoryId: 'sre',
        content: `1. Headroom
*   Maintain 30% headroom for spikes.
*   **Load Test**: Verify capacity before major marketing events.`
    },
    {
        id: 507,
        name: 'Observability Standards',
        categoryId: 'sre',
        content: `1. Three Pillars
*   **Logs**: Structured (JSON).
*   **Metrics**: Prometheus format.
*   **Traces**: OpenTelemetry distributed tracing.`
    },
    {
        id: 508,
        name: 'Auto-Remediation',
        categoryId: 'sre',
        content: `1. Runbooks
*   Common alerts (Disk Full, Service Down) should trigger automated fix scripts (Restart, Clean) before paging humans.`
    },
    {
        id: 509,
        name: 'Production Readiness Review (PRR)',
        categoryId: 'sre',
        content: `1. Gate
*   SRE accepts ownership of a service only after it passes PRR checklist (Docs, Monitoring, HA).`
    },
    {
        id: 510,
        name: 'Toil Reduction',
        categoryId: 'sre',
        content: `1. Cap
*   SREs spend max 50% time on Ops (Toil). Remaining 50% on coding automation.`
    },

    // Platform Engineering Team - 511-520
    {
        id: 511,
        name: 'Internal Developer Platform (IDP)',
        categoryId: 'platform-eng',
        content: `1. Product
*   Treat the Platform as a Product. Internal developers are the Customers.
*   **UX**: Focus on Developer Experience (DX).`
    },
    {
        id: 512,
        name: 'Golden Paths (Templates)',
        categoryId: 'platform-eng',
        content: `1. Standardization
*   Provide "Golden Path" templates for Java/Node/Python apps.
*   **Supported**: Apps on Golden Path get automatic upgrades and support.`
    },
    {
        id: 513,
        name: 'Service Catalog Management',
        categoryId: 'platform-eng',
        content: `1. Registry
*   Comprehensive catalog (Backstage) of all microservices, owners, and docs.`
    },
    {
        id: 514,
        name: 'Kubernetes Multi-Tenancy',
        categoryId: 'platform-eng',
        content: `1. Isolation
*   Namespaces used for logical separation.
*   **Quotas**: Resource Quotas enforced per namespace.`
    },
    {
        id: 515,
        name: 'Cloud Cost FinOps',
        categoryId: 'platform-eng',
        content: `1. Tagging
*   All resources must be tagged with \`CostCenter\` and \`Owner\`.
*   **Untagged**: Untagged resources are auto-terminated after 24h warning.`
    },
    {
        id: 516,
        name: 'Policy as Code (OPA)',
        categoryId: 'platform-eng',
        content: `1. Guardrails
*   Open Policy Agent (OPA) prevents non-compliant deployments (e.g., Public Load Balancer) at the API level.`
    },
    {
        id: 517,
        name: 'Service Mesh Strategy',
        categoryId: 'platform-eng',
        content: `1. mTLS
*   Service Mesh (Istio/Linkerd) handles mTLS encryption between services transparently.`
    },
    {
        id: 518,
        name: 'Platform Tenancy Models',
        categoryId: 'platform-eng',
        content: `1. Shared vs Dedicated
*   Default to Shared Clusters. Dedicated Clusters only for PCI-DSS scope or immense scale.`
    },
    {
        id: 519,
        name: 'Support Model',
        categoryId: 'platform-eng',
        content: `1. Community
*   Platform Team provides docs and "Office Hours".
*   Community Support (Slack) encouraged for "How-to" questions.`
    },
    {
        id: 520,
        name: 'Abstraction Leaks',
        categoryId: 'platform-eng',
        content: `1. Balance
*   Hide complexity, but allow "Break Glass" access to underlying primatives when needed.`
    },

    // Release Management Team - 521-530
    {
        id: 521,
        name: 'Release Calendar & Freeze Windows',
        categoryId: 'release-mgmt',
        content: `1. Schedule
*   Major releases scheduled bi-weekly.
*   **Freeze**: Code Freeze during critical business periods (Black Friday, Year End).`
    },
    {
        id: 522,
        name: 'Change Approval Board (CAB)',
        categoryId: 'release-mgmt',
        content: `1. Scope
*   Standard Changes (Pre-approved) do not go to CAB.
*   Normal/Major Changes require CAB approval.`
    },
    {
        id: 523,
        name: 'Release Notes Automation',
        categoryId: 'release-mgmt',
        content: `1. Generation
*   Release notes auto-generated from Jira/Git commit messages.
*   **Distribution**: Sent to stakeholders upon deployment.`
    },
    {
        id: 524,
        name: 'Deployment Strategies',
        categoryId: 'release-mgmt',
        content: `1. Zero Downtime
*   **Blue/Green**: Instant switch.
*   **Canary**: Gradual rollout (10% -> 100%).
*   Maintenance Pages are a last resort.`
    },
    {
        id: 525,
        name: 'Rollback Procedures',
        categoryId: 'release-mgmt',
        content: `1. Requirement
*   Every Change Request must have a tested Back-out Plan.
*   **Trigger**: High Error rate auto-triggers rollback.`
    },
    {
        id: 526,
        name: 'Pre-Release Validation (UAT)',
        categoryId: 'release-mgmt',
        content: `1. Sign-off
*   Release cannot proceed to Prod without formal UAT Sign-off from Product Owner.`
    },
    {
        id: 527,
        name: 'Feature Flag Management',
        categoryId: 'release-mgmt',
        content: `1. Cleanup
*   Stale flags removed after feature is 100% rolled out.
*   **Governance**: Flags affecting "money" require dual control.`
    },
    {
        id: 528,
        name: 'Versioning Standards (SemVer)',
        categoryId: 'release-mgmt',
        content: `1. Format
*   Major.Minor.Patch (1.0.0).
*   **Build**: 1.0.0-build.123.`
    },
    {
        id: 529,
        name: 'Hotfix Process',
        categoryId: 'release-mgmt',
        content: `1. Emergency
*   Hotfixes branch from \`main\` (or release tag), fix bug, deploy, and merge back to \`develop\`.
*   Expedited CAB approval.`
    },
    {
        id: 530,
        name: 'Release Metrics (DORA)',
        categoryId: 'release-mgmt',
        content: `1. Tracking
*   Measure: Deployment Frequency, Lead Time for Changes, CRF, MTTR.
*   **Goal**: Improve to "Elite" performer status.`
    },

    // Configuration Management Team - 531-540
    {
        id: 531,
        name: 'CMDB Accuracy',
        categoryId: 'config-mgmt',
        content: `1. Discovery
*   Automated discovery tools update CMDB daily.
*   **Audit**: Monthly reconciliation between Cloud Bill and CMDB.`
    },
    {
        id: 532,
        name: 'Configuration Backup Policy',
        categoryId: 'config-mgmt',
        content: `1. Scope
*   Network gear, Storage arrays, and Appliance configs backed up daily.
*   **Versioning**: Keep last 30 versions.`
    },
    {
        id: 533,
        name: 'Environment Variable Management',
        categoryId: 'config-mgmt',
        content: `1. Store
*   Env vars managed in central store (AWS Parameter Store), not local .env files on servers.`
    },
    {
        id: 534,
        name: 'Hard-Coded Config Ban',
        categoryId: 'config-mgmt',
        content: `1. Prohibition
*   IP addresses, server names, and timeouts must not be hardcoded in application binary.`
    },
    {
        id: 535,
        name: 'Configuration Audit',
        categoryId: 'config-mgmt',
        content: `1. Comparison
*   Compare Configs between Nodes in a cluster to ensure identical setup.`
    },
    {
        id: 536,
        name: 'Server Configuration Mgmt',
        categoryId: 'config-mgmt',
        content: `1. Tools
*   Ansible/Chef used for OS-level config.
*   **Golden Image**: Packer used to build immutable images preset with config.`
    },
    {
        id: 537,
        name: 'Immutable Infrastructure',
        categoryId: 'config-mgmt',
        content: `1. Principle
*   Do not patch running servers. Replace them with new images.`
    },
    {
        id: 538,
        name: 'Parameter Store Usage',
        categoryId: 'config-mgmt',
        content: `1. Hierarchy
*   Namespaced keys: \`/app/environment/setting\`.`
    },
    {
        id: 539,
        name: 'Drift Detection',
        categoryId: 'config-mgmt',
        content: `1. Alert
*   Alert if running config differs from stored intent.`
    },
    {
        id: 540,
        name: 'Dependency Configuration',
        categoryId: 'config-mgmt',
        content: `1. BOM
*   Maintain Bill of Materials for all installed libraries and versions on endpoints.`
    }
];
