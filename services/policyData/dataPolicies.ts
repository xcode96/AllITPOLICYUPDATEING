import { Policy } from '../../types';

export const dataPolicies: Policy[] = [
    // Database Administration (DBA) Team - 601-610
    {
        id: 601,
        name: 'Database Backup & Recovery Policy',
        categoryId: 'dba',
        content: `1. Schedule
*   **Full Backup**: Weekly (Weekend).
*   **Differential**: Daily (Nightly).
*   **Transaction Logs**: Every 15 minutes (Point-in-Time Recovery).

2. Retention
*   Backups retained for 30 days locally, 7 years in cold storage (immutable).`
    },
    {
        id: 602,
        name: 'Database Security & Access Control',
        categoryId: 'dba',
        content: `1. Auth
*   SQL Authentication (Username/Password) is disabled where possible. Use AD/Windows Authentication.
*   **Encryption**: TDE (Transparent Data Encryption) enabled for all DBs at rest.`
    },
    {
        id: 603,
        name: 'High Availability (HA) Standards',
        categoryId: 'dba',
        content: `1. Architecture
*   **Prod**: Must use Clustering (AlwaysOn / RAC) with automatic failover.
*   **DR**: Asynchronous replication to a secondary region (RPO < 1 hour).`
    },
    {
        id: 604,
        name: 'Database Patching & Maintenance',
        categoryId: 'dba',
        content: `1. Window
*   Patching performed monthly during maintenance window.
*   **N-1**: Database engine version must be within N-1 of latest vendor release.`
    },
    {
        id: 605,
        name: 'Query Performance Tuning',
        categoryId: 'dba',
        content: `1. Optimization
*   Queries running >5 seconds must be logged and tuned.
*   **Index**: Unused indexes (>90 days) removed to improve write performance.`
    },
    {
        id: 606,
        name: 'Database Change Management',
        categoryId: 'dba',
        content: `1. Schema Changes
*   Direct DDL on Prod is prohibited.
*   Changes must be scripted and applied via CI/CD pipeline after DBA review.`
    },
    {
        id: 607,
        name: 'Data Purging & Archiving',
        categoryId: 'dba',
        content: `1. Lifecycle
*   Operational tables (e.g., Logs) must have a partition strategy to move old data to "Archive" tables after 90 days.`
    },
    {
        id: 608,
        name: 'Database Monitoring Policy',
        categoryId: 'dba',
        content: `1. Alerts
*   Trigger P2 alert if:
    *   Free Space < 10%.
    *   CPU > 90% for 10 mins.
    *   Deadlocks > 5 per minute.`
    },
    {
        id: 609,
        name: 'NoSQL Database Standards',
        categoryId: 'dba',
        content: `1. Usage
*   **MongoDB/Cassandra**: Authentication must be verified (No anonymous access).
*   **Consistency**: "Eventual Consistency" allowed only for non-financial data.`
    },
    {
        id: 610,
        name: 'Sensitive Data Discovery',
        categoryId: 'dba',
        content: `1. Scanning
*   Automated scan running weekly to tag columns containing PII (Credit Cards, SSN) as "Confidential".`
    },

    // Data Engineering Team - 611-620
    {
        id: 611,
        name: 'ETL / ELT Pipeline Standards',
        categoryId: 'data-eng',
        content: `1. Idempotency
*   Pipelines must be re-runnable without duplicating data.
*   **Error Handling**: Failed records moved to "Dead Letter Queue" for manual review.`
    },
    {
        id: 612,
        name: 'Data Lake Organization',
        categoryId: 'data-eng',
        content: `1. Zones
*   **Bronze**: Raw ingestion (Immutable).
*   **Silver**: Cleaned, Enriched.
*   **Gold**: Aggregated, Business-ready.`
    },
    {
        id: 613,
        name: 'Streaming Data Policy',
        categoryId: 'data-eng',
        content: `1. Real-Time
*   Kafka topics must have defined retention (e.g., 7 days) and partition strategies.
*   **Schema Registry**: Avro/Protobuf schemas required for compatibility.`
    },
    {
        id: 614,
        name: 'Data Quality Checks',
        categoryId: 'data-eng',
        content: `1. Validation
*   Great Expectations / DBT tests run on every batch.
*   **Gate**: If Null % > Threshold, pipeline halts and alerts Engineer.`
    },
    {
        id: 615,
        name: 'Pipeline Orchestration (Airflow)',
        categoryId: 'data-eng',
        content: `1. Scheduling
*   DAGs must have retries and timeouts configured.
*   **Backfill**: Pipelines designed to handle historical backfills efficiently.`
    },
    {
        id: 616,
        name: 'Data Lineage Tracking',
        categoryId: 'data-eng',
        content: `1. Metadata
*   Every dataset must track its source transformation logic.
*   **Tool**: Lineage visible in Data Catalog (e.g., Amundsen/Collibra).`
    },
    {
        id: 617,
        name: 'Cost Optimization (Big Data)',
        categoryId: 'data-eng',
        content: `1. Compute
*   Spark jobs must use Spot Instances for non-critical workloads.
*   **Files**: Use Parquet/ORC (Columnar) output for storage efficiency.`
    },
    {
        id: 618,
        name: 'Data Ingestion Security',
        categoryId: 'data-eng',
        content: `1. Transfer
*   SFTP/API sources must use encrypted connections.
*   **Credentials**: Secrets stored in Secrets Manager, not hardcoded in Python scripts.`
    },
    {
        id: 619,
        name: 'Python/Scala Coding Standards',
        categoryId: 'data-eng',
        content: `1. Performance
*   Avoid \`collect()\` on large drivers. Use vectorized operations (Pandas/Spark) over loops.`
    },
    {
        id: 620,
        name: 'Legacy Data Decommissioning',
        categoryId: 'data-eng',
        content: `1. Retirement
*   Pipelines feeding unused dashboards (0 views in 6 months) are deprecated and turned off.`
    },

    // Data Analytics Team - 621-630
    {
        id: 621,
        name: 'Self-Service Analytics Policy',
        categoryId: 'data-analytics',
        content: `1. Access
*   Analysts granted "Read" access to Silver/Gold layers.
*   **Export**: Exporting >10,000 rows to CSV requires justification.`
    },
    {
        id: 622,
        name: 'Report Certification Process',
        categoryId: 'data-analytics',
        content: `1. Trust
*   **Certified**: Official reports (Green Badge) vetted for accuracy.
*   **Ad-Hoc**: User-created reports (Grey Badge) use at own risk.`
    },
    {
        id: 623,
        name: 'Data Visualization Standards',
        categoryId: 'data-analytics',
        content: `1. Design
*   Color Palette must match Corporate Brand.
*   **Access**: Dashboards must include "Data Definition" tooltips.`
    },
    {
        id: 624,
        name: 'Sensitive Data Masking in Reports',
        categoryId: 'data-analytics',
        content: `1. View
*   PII (Email, Phone) masked by default (e.g., xxxx-5678) in Tableau/PowerBI unless specific clearance granted.`
    },
    {
        id: 625,
        name: 'SQL Query Optimization for Analysts',
        categoryId: 'data-analytics',
        content: `1. Impact
*   Analysts blocked from running queries reading >1TB of data without partitioning filters.`
    },
    {
        id: 626,
        name: 'Metric Standardization',
        categoryId: 'data-analytics',
        content: `1. Definitions
*   "ARR" and "Churn" calculated using the official logic in the Metrics Store (Headless BI), not custom SQL.`
    },
    {
        id: 627,
        name: 'Embedded Analytics Policy',
        categoryId: 'data-analytics',
        content: `1. Sharing
*   Embedding dashboards in external portals requires Row Level Security (RLS) enforcement.`
    },
    {
        id: 628,
        name: 'Spreadsheet Risk Management',
        categoryId: 'data-analytics',
        content: `1. EUC
*   Critical business decisions should not rely on local Excel macros. Migrate logic to BI Tool.`
    },
    {
        id: 629,
        name: 'Analytics Data Freshness SLA',
        categoryId: 'data-analytics',
        content: `1. Timeliness
*   Executive Dashboards updated by 08:00 AM daily.
*   **Alert**: Delay notification sent to stakeholders if ETL fails.`
    },
    {
        id: 630,
        name: 'Data Storytelling',
        categoryId: 'data-analytics',
        content: `1. Context
*   Reports must answer "So What?". Simply displaying a table of numbers is discouraged.`
    },

    // Business Intelligence (BI) Team - 631-640
    {
        id: 631,
        name: 'BI Tool Governance (PowerBI/Tableau)',
        categoryId: 'bi',
        content: `1. Cleanup
*   Workspaces with no activity for 6 months are archived.
*   **Pro License**: Assigned only to content creators, not viewers.`
    },
    {
        id: 632,
        name: 'Semantic Model Management',
        categoryId: 'bi',
        content: `1. Reuse
*   Create shared "Golden Datasets" used by multiple reports to ensure single version of truth.`
    },
    {
        id: 633,
        name: 'Row-Level Security (RLS) Policy',
        categoryId: 'bi',
        content: `1. Enforcement
*    HR reports must restrict visibility based on Manager Hierarchy (User only sees their direct reports).`
    },
    {
        id: 634,
        name: 'BI Performance Optimization',
        categoryId: 'bi',
        content: `1. Speed
*   Visuals should render in <3 seconds.
*   **Import vs DirectQuery**: Import mode preferred for speed unless real-time required.`
    },
    {
        id: 635,
        name: 'Mobile BI Strategy',
        categoryId: 'bi',
        content: `1. Layout
*   Key KPIs must have a "Mobile Layout" view optimized for phone screens.`
    },
    {
        id: 636,
        name: 'External Distribution of BI',
        categoryId: 'bi',
        content: `1. Controls
*   "Publish to Web" (Public Link) feature is Globally Disabled.
*   External sharing requires B2B Guest account.`
    },
    {
        id: 637,
        name: 'Custom Visuals Policy',
        categoryId: 'bi',
        content: `1. Security
*   Only "Certified" visuals from the Marketplace are allowed. Unverified 3rd party code blocked.`
    },
    {
        id: 638,
        name: 'Gateway Management',
        categoryId: 'bi',
        content: `1. Connectivity
*   On-Premises Data Gateways must run on clustered servers for HA.`
    },
    {
        id: 639,
        name: 'BI Report Documentation',
        categoryId: 'bi',
        content: `1. Metadata
*   Reports must contain a "MetaData" page listing: Owner, Last Refresh, Data Source, and Support Contact.`
    },
    {
        id: 640,
        name: 'Cross-Workspace Publishing',
        categoryId: 'bi',
        content: `1. Lifecycle
*   Dev -> Test -> Prod deployment pipelines used for BI content.`
    },

    // Data Science Team - 641-650
    {
        id: 641,
        name: 'Model Development Lifecycle',
        categoryId: 'data-science',
        content: `1. Stages
*   Exploration (Notebooks) -> Training -> Validation -> Deployment -> Monitoring.`
    },
    {
        id: 642,
        name: 'Reproducability Standards',
        categoryId: 'data-science',
        content: `1. Versioning
*   Code, Data, and Parameters must be versioned (DVC / MLflow).
*   **Seed**: Random seeds must be fixed to ensure reproducible results.`
    },
    {
        id: 643,
        name: 'Model Fairness & Bias',
        categoryId: 'data-science',
        content: `1. Ethics
*   Models affecting humans (Hiring/Lending) must be tested for Bias against protected groups.
*   **Explainability**: SHAP/LIME values generated to explain predictions.`
    },
    {
        id: 644,
        name: 'Notebook Security Policy',
        categoryId: 'data-science',
        content: `1. Hygiene
*   Jupyter Notebooks must not contain hardcoded Secrets or PII outputs.
*   **Clean**: Clear outputs before committing to Git.`
    },
    {
        id: 645,
        name: 'Feature Store Usage',
        categoryId: 'data-science',
        content: `1. Consistency
*   Online and Offline models must use the same Feature Store to prevent Training-Serving Skew.`
    },
    {
        id: 646,
        name: 'Model Validation & Backtesting',
        categoryId: 'data-science',
        content: `1. Criteria
*   Model must beat the "Baseline" (Heuristic) by a significant margin.
*   **Validation**: Tested on out-of-time holdout set.`
    },
    {
        id: 647,
        name: 'Python Environment Management',
        categoryId: 'data-science',
        content: `1. Isolation
*   Use Conda/Virtualenv. \`requirements.txt\` specific to project.
*   **Docker**: Final training code containerized.`
    },
    {
        id: 648,
        name: 'Experiment Tracking',
        categoryId: 'data-science',
        content: `1. Logging
*   All experiments (Failures included) logged in MLflow to preventing repeating dead-ends.`
    },
    {
        id: 649,
        name: 'Data Access for Scientists',
        categoryId: 'data-science',
        content: `1. Least Privilege
*   Read-only access to Anonymized production replications. No Write access to Prod DBs.`
    },
    {
        id: 650,
        name: 'Model Governance',
        categoryId: 'data-science',
        content: `1. Inventory
*   Central model registry tracks all models running in production and their owners.`
    },

    // AI / Machine Learning Team - 651-660
    {
        id: 651,
        name: 'MLOps Automation Policy',
        categoryId: 'ai-ml',
        content: `1. Pipeline
*   Retraining pipelines (CT) triggered automatically when Data Drift is detected.`
    },
    {
        id: 652,
        name: 'Model Monitoring & Observability',
        categoryId: 'ai-ml',
        content: `1. Production
*   Monitor: Data Drift, Concept Drift, Latency, and Error Rate.
*   **Alert**: If accuracy drops below threshold, fallback to heuristic rules.`
    },
    {
        id: 653,
        name: 'Generative AI (LLM) Usage Policy',
        categoryId: 'ai-ml',
        content: `1. Internal
*   Private instances of LLMs (e.g., Azure OpenAI) used.
*   **Public**: Sending proprietary code/data to public ChatGPT is Prohibited.`
    },
    {
        id: 654,
        name: 'A/B Testing for AI',
        categoryId: 'ai-ml',
        content: `1. Rollout
*   Models deployed as "Shadow Mode" (Predictions logged but not used) first, then A/B tested against control.`
    },
    {
        id: 655,
        name: 'Inference Performance',
        categoryId: 'ai-ml',
        content: `1. Latency
*   Real-time inference endpoints must respond < 100ms.
*   **Batch**: Bulk inference preferred for non-urgent tasks.`
    },
    {
        id: 656,
        name: 'Model Retraining Strategy',
        categoryId: 'ai-ml',
        content: `1. Frequency
*   Defined per model (e.g., Weekly for Fraud, Quarterly for Churn).
*   **Freshness**: Retrain on latest window of data.`
    },
    {
        id: 657,
        name: 'AI Risk Management',
        categoryId: 'ai-ml',
        content: `1. Adversarial
*   Models hardened against evasion attacks (Input perturbation).`
    },
    {
        id: 658,
        name: 'Hardware Acceleration',
        categoryId: 'ai-ml',
        content: `1. GPU
*   GPU instances authorized only for Deep Learning training jobs. Auto-terminate when idle.`
    },
    {
        id: 659,
        name: 'Model Serving Security',
        categoryId: 'ai-ml',
        content: `1. API
*   Inference APIs secured with Mutual TLS and Auth Tokens.`
    },
    {
        id: 660,
        name: 'AI Ethics Committee',
        categoryId: 'ai-ml',
        content: `1. Review
*   High-impact AI use cases vetted by Ethics board for social implications.`
    },

    // Master Data Management (MDM) Team - 661-670
    {
        id: 661,
        name: 'Golden Record Definition',
        categoryId: 'mdm',
        content: `1. Single View
*   MDM system is the Authoritative Source for "Customer", "Product", and "Employee" entities.`
    },
    {
        id: 662,
        name: 'Data Stewardship Policy',
        categoryId: 'mdm',
        content: `1. Roles
*   **Data Owner**: Accountable VP.
*   **Data Steward**: Operational lead responsible for data quality and remediation.`
    },
    {
        id: 663,
        name: 'Data Conflict Resolution',
        categoryId: 'mdm',
        content: `1. Trust Scores
*   If CRM says "John" and ERP says "Jon", System of Record (ERP) wins based on Trust Score.`
    },
    {
        id: 664,
        name: 'Reference Data Management',
        categoryId: 'mdm',
        content: `1. Standards
*   Country Codes (ISO 3166), Currency (ISO 4217) standardized across all apps.`
    },
    {
        id: 665,
        name: 'Duplicate Management',
        categoryId: 'mdm',
        content: `1. Merge
*   Suspected duplicates blocked from entry.
*   **Cleanup**: Stewards review "Potential Match" queue weekly.`
    },
    {
        id: 666,
        name: 'MDM Integration Standards',
        categoryId: 'mdm',
        content: `1. Pub/Sub
*   Downstream systems subscribe to MDM updates (Publish-Subscribe pattern) rather than polling.`
    },
    {
        id: 667,
        name: 'Data Remediation SLA',
        categoryId: 'mdm',
        content: `1. Fixing
*   Data Quality errors reported by users must be fixed by Stewards within 48 hours.`
    },
    {
        id: 668,
        name: 'Validation Rules',
        categoryId: 'mdm',
        content: `1. Entry
*   Email must be \`Format\`, Phone must be \`E.164\`. Invalid data rejected at ingress.`
    },
    {
        id: 669,
        name: 'Hierarchies Management',
        categoryId: 'mdm',
        content: `1. Structures
*   Manage complex hierarchies (Legal Entity, Sales Territory) centrally in MDM.`
    },
    {
        id: 670,
        name: 'MDM Performance',
        categoryId: 'mdm',
        content: `1. Lookup
*   API lookups against MDM must return < 50ms to support real-time transaction processing.`
    },

    // Data Governance Team - 671-680
    {
        id: 671,
        name: 'Data Cataloging Policy',
        categoryId: 'data-gov',
        content: `1. Requirement
*   All data assets (Tables, Files, APIs) must be registered in the Enterprise Data Catalog with descriptions.`
    },
    {
        id: 672,
        name: 'Data Quality Framework',
        categoryId: 'data-gov',
        content: `1. Dimensions
*   Quality measured on: Accuracy, Completeness, Consistency, Timeliness, Validity, Uniqueness.`
    },
    {
        id: 673,
        name: 'Data Access Governance',
        categoryId: 'data-gov',
        content: `1. Approvals
*   Access to "Sensitive" data requires owner approval via Access Management System.
*   **Audit**: Access logs reviewed quarterly.`
    },
    {
        id: 674,
        name: 'Metadata Management',
        categoryId: 'data-gov',
        content: `1. Definitions
*   Business Glossary defines terms (e.g., "What is Net Sales?") to prevent ambiguity.`
    },
    {
        id: 675,
        name: 'Data Retention Policy',
        categoryId: 'data-gov',
        content: `1. Lifecycle
*   Data retained only as long as legal/business need exists.
*   **Purge**: Automated deletion scripts run monthy.`
    },
    {
        id: 676,
        name: 'Sovereignty & Residency',
        categoryId: 'data-gov',
        content: `1. Geolocation
*   German customer data must stay in EU-Central region.
*   Cross-border flows mapped and approved.`
    },
    {
        id: 677,
        name: 'Data Classification Enforcement',
        categoryId: 'data-gov',
        content: `1. Tagging
*   Automated tools tag data as PII/PCI/Confidential.
*   Policy engines enforce encryption based on tag.`
    },
    {
        id: 678,
        name: 'Shadow Data Governance',
        categoryId: 'data-gov',
        content: `1. Discovery
*   Scan shared drives and SharePoint for "Excel DBs" containing critical data and migrate to governed platforms.`
    },
    {
        id: 679,
        name: 'Critical Data Elements (CDEs)',
        categoryId: 'data-gov',
        content: `1. Focus
*   Strictest controls applied to CDEs (top 50 fields driving financial reporting).`
    },
    {
        id: 680,
        name: 'Governance Council',
        categoryId: 'data-gov',
        content: `1. Edict
*   Monthly council meeting to resolve cross-functional data definition disputes.`
    }
];
