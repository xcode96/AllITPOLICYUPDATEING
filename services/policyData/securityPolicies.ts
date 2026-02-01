import { Policy } from '../../types';

export const securityPolicies: Policy[] = [
    // Information Security Team - 291-300
    {
        id: 291,
        name: 'Information Security Policy (ISP) Framework',
        categoryId: 'infosec',
        content: `1. Purpose
To establish the high-level mandate for protecting the confidentiality, integrity, and availability (CIA) of the organization's assets.

2. Scope
Applies to all employees, contractors, and third parties accessing corporate systems.

3. Authority
*   The CISO has the authority to approve and enforce all security sub-policies.
*   **Review**: The ISP is reviewed annually or upon significant organizational change.`
    },
    {
        id: 292,
        name: 'Acceptable Use Policy (AUP)',
        categoryId: 'infosec',
        content: `1. Principles
Assets are for business use. Incidental personal use is permitted if it does not interfere with work or violate laws.

2. Prohibitions
*   **Illegal Activities**: Downloading pirated software or media.
*   **Harassment**: Sending offensive or threatening emails.
*   **Shadow IT**: Using unauthorized cloud storage (Dropbox/Mega) for corporate data.`
    },
    {
        id: 293,
        name: 'Data Classification Policy',
        categoryId: 'infosec',
        content: `1. Tiers
*   **Public**: Marketing materials, press releases. (No protection needed).
*   **Internal**: Employee directives, phone directories. (Standard Login).
*   **Confidential**: PII, Financial Reports, Customer Data. (Encrypted).
*   **Restricted**: M&A secrets, Source Code, Trade Secrets. (Strict Access/DLP).`
    },
    {
        id: 294,
        name: 'Remote Access & Teleworking Policy',
        categoryId: 'infosec',
        content: `1. Connectivity
*   Remote access allowed ONLY via corporate VPN (Always-On) or ZTNA (Zero Trust Network Access).
*   **Split Tunneling**: Disabled for high-risk users; traffic must hairpin through HQ firewalls.

2. Environment
*   Users must ensure their remote workspace is private (clean desk) and their WiFi is WPA2/WPA3 encrypted.`
    },
    {
        id: 295,
        name: 'Password & Authentication Policy',
        categoryId: 'infosec',
        content: `1. Passwords
*   Minimum 14 characters.
*   Must pass Azure AD "Smart Password Ban" check.

2. MFA
*   **Mandatory**: MFA enabled for ALL remote access and cloud applications.
*   **Methods**: Push Notification (Number Matching) or FIDO2 key. SMS/Voice barriers are deprecated.`
    },
    {
        id: 296,
        name: 'Clear Desk & Clear Screen Policy',
        categoryId: 'infosec',
        content: `1. Physical
*   Sensitive documents must be locked in drawers when the user leaves their desk.
*   Whiteboards must be erased after meetings.

2. Digital
*   Screens must auto-lock after 5 minutes of inactivity.
*   Computers must be locked (Win+L) whenever the user steps away.`
    },
    {
        id: 297,
        name: 'Security Awareness Training Policy',
        categoryId: 'infosec',
        content: `1. Onboarding
*   New hires must complete "Security Fundamentals" training within 1 week of joining.

2. Recurring
*   All staff must complete annual refresher training.
*   **Phishing**: Users failing phishing simulations must re-take training modules.`
    },
    {
        id: 298,
        name: 'Shadow IT & Unauthorized Software',
        categoryId: 'infosec',
        content: `1. Definition
"Shadow IT" is any hardware/software not vetted by IT/Security.

2. Control
*   Users cannot install software (No Local Admin rights).
*   Browser extensions are restricted to an Allow List.
*   Unapproved SaaS apps are blocked via CASB/Firewall.`
    },
    {
        id: 299,
        name: 'Social Media & Public Communication',
        categoryId: 'infosec',
        content: `1. Posting
*   Employees must not post confidential work details (e.g., screenshots of code/dashboards) on LinkedIn/Twitter.
*   **Representation**: Only authorized spokespeople can speak on behalf of the company.

2. Engineering
*   Developers must not upload internal code snippets to public GitHub/StackOverflow.`
    },
    {
        id: 300,
        name: 'Insider Threat Mitigation',
        categoryId: 'infosec',
        content: `1. Detection
*   UEBA (User & Entity Behavior Analytics) monitors for anomalies (e.g., mass file downloads at 3 AM).
*   **High Risk**: Leavers and contractors are monitored with heightened scrutiny during their notice period.`
    },

    // Cyber Defense / Blue Team - 301-310
    {
        id: 301,
        name: 'Endpoint Detection & Response (EDR) Policy',
        categoryId: 'blue-team',
        content: `1. Coverage
*   EDR Agent (e.g., CrowdStrike/SentinelOne) must be installed on 100% of Servers and Workstations.
*   **Tamper Protection**: Enabled. Users cannot uninstall the agent.

2. Response
*   Isolate Host capability must be active and authorized for use by SOC Analysts.`
    },
    {
        id: 302,
        name: 'Network Threat Detection (NDR)',
        categoryId: 'blue-team',
        content: `1. Traffic Analysis
*   North-South (Internet) and East-West (Internal) traffic mirrored to NDR appliance (e.g., Darktrace/Vectra).
*   **Encrypted Traffic**: TLS Inspection (Decryption) enabled for traffic entering/leaving the DMZ.`
    },
    {
        id: 303,
        name: 'Indicator of Compromise (IoC) Management',
        categoryId: 'blue-team',
        content: `1. Ingestion
*   IoCs from Threat Intel feeds (ISACs, CISA) are automatically pushed to SIEM and Firewalls (Block Lists) daily.

2. Sweeps
*   Blue Team performs weekly "Retro-Hunts" searching 90 days of logs for newly discovered IoCs.`
    },
    {
        id: 304,
        name: 'Honeypot & Deception Technology',
        categoryId: 'blue-team',
        content: `1. Deployment
*   Low-interaction honeypots deployed in every VLAN to detect lateral movement (scanning).
*   **Honeytokens**: Fake admin credentials injected into LSASS memory on workstations to catch credential dumpers.`
    },
    {
        id: 305,
        name: 'Baseline Security Configuration',
        categoryId: 'blue-team',
        content: `1. Standard
*   Systems must adhere to CIS Benchmarks (Level 1).
*   **Drift**: Configuration drift scans run weekly.

2. Hardening
*   Unnecessary services (Print Spooler on Domain Controllers) must be disabled.`
    },
    {
        id: 306,
        name: 'Advanced Threat Hunting Policy',
        categoryId: 'blue-team',
        content: `1. Methodology
*   Hypothesis-driven hunting (e.g., "Assuming we are breached, where would they be?").
*   **Frequency**: Dedicated Hunting Sprints occur bi-weekly.

2. Tools
*   Hunters require raw telemetry access (Sysmon logs, PowerShell Script Block Logging).`
    },
    {
        id: 307,
        name: 'Malware Analysis & Sandbox',
        categoryId: 'blue-team',
        content: `1. Suspicious Files
*   Users must submit suspicious email attachments to the "Phish Button".
*   **Handling**: Blue Team analyzes files in an isolated Cuckoo Sandbox (detonating malware safely).

2. Reverse Engineering
*   Decompiling malware to extract Command & Control (C2) domains.`
    },
    {
        id: 308,
        name: 'Defensive Playbook Development',
        categoryId: 'blue-team',
        content: `1. Automation
*   Repetitive tasks (IP Reputation check) must be automated via SOAR playbooks.
*   **Review**: Playbooks must be tested quarterly to ensure API links work.`
    },
    {
        id: 309,
        name: 'Log Ingestion & SIEM Strategy',
        categoryId: 'blue-team',
        content: `1. Visibility
*   **Critical Logs**: AD Auth, Firewall Allows, EDR Alerts, CloudTrail.
*   **Noise Reduction**: "Informational" logs dropped at the collector level to save license cost.

2. Correlation
*   SIEM rules must correlate events (e.g., "Login from New Country" + "Mass File Delete").`
    },
    {
        id: 310,
        name: 'Attack Surface Management',
        categoryId: 'blue-team',
        content: `1. Discovery
*   Continuous scanning of public IP ranges to find forgotten assets (Shadow IT).
*   **Takedown**: Unauthorized branding or fake domains (Typosquatting) submitted for takedown.`
    },

    // Red Team / Penetration Testing Team - 311-320
    {
        id: 311,
        name: 'Penetration Testing Scope & Rules of Engagement',
        categoryId: 'red-team',
        content: `1. Frequency
*   **External**: Annual.
*   **Internal**: Annual.
*   **Application**: Before every Major Release (v1.0, v2.0).

2. Rules
*   **Denied**: DDoS attacks and physical destruction.
*   **Authorized**: Social Engineering (Phishing) and Exploitation.`
    },
    {
        id: 312,
        name: 'Red Team Operations Policy',
        categoryId: 'red-team',
        content: `1. Objective
Test the *Blue Team's* detection capabilities, not just find bugs.

2. Transparency
*   "Black Box" approach (No prior knowledge).
*   **Notification**: Only the CISO and CIO are aware of an active Red Team OP to ensure realistic response.`
    },
    {
        id: 313,
        name: 'Vulnerability Disclosure Program (Bug Bounty)',
        categoryId: 'red-team',
        content: `1. Public Program
*   Security Researchers authorized to test public assets if they follow Safe Harbor rules.
*   **Reward**: Bounties paid based on severity (P1 = $5000, P4 = Swag).

2. Remediation
*   Findings from Bug Bounty are treated as Critical Incidents.`
    },
    {
        id: 314,
        name: 'Social Engineering & Physical Entry Tests',
        categoryId: 'red-team',
        content: `1. Social
*   Testing Help Desk verification procedures (Vishing).
*   Testing User awareness (Phishing).

2. Physical
*   Attempting to tailgate into data centers or badge cloning.
*   **Get Out of Jail Free**: Testers carry a signed letter from the CEO authorizing the test.`
    },
    {
        id: 315,
        name: 'Exploit Development & Weaponization',
        categoryId: 'red-team',
        content: `1. Tools
*   Use of C2 frameworks (Cobalt Strike / Sliver) is permitted on isolated infrastructure.
*   **Isolation**: Attack infrastructure must be segregated from corporate LAN.

2. Reporting
*   Exploits developed internally are classified "Secret" and stored in an encrypted vault.`
    },
    {
        id: 316,
        name: 'Purple Teaming Strategy',
        categoryId: 'red-team',
        content: `1. Collaboration
*   Red Team executes an attack (e.g., T1003 Credential Dumping) while Blue Team watches logs in real-time.
*   **Goal**: Tune SIEM alerts to ensure the attack is detected.`
    },
    {
        id: 317,
        name: 'Wireless Security Assessment',
        categoryId: 'red-team',
        content: `1. War Driving
*   Annual scanning of corporate facilities to detect Rogue APs and weak encryption (WEP).
*   **Guest Wifi**: Testing segmentation (Can Guest reach Corp?).`
    },
    {
        id: 318,
        name: 'Active Directory Security Assessment',
        categoryId: 'red-team',
        content: `1. BloodHound
*   Regular mapping of AD Attack Paths (Shortest path to Domain Admin).
*   **Remediation**: Remove excess permissions identified by graph analysis.`
    },
    {
        id: 319,
        name: 'Lateral Movement Testing',
        categoryId: 'red-team',
        content: `1. Segmentation Test
*   Verify that compromised workstations cannot RDP to Servers (Jumping tiers).
*   Verify that Printer VLANs cannot reach Database VLANs.`
    },
    {
        id: 320,
        name: 'Report Deliverables & Remediation Tracking',
        categoryId: 'red-team',
        content: `1. Reporting
*   Executive Summary (Business Risk).
*   Technical Details (Reproduction Steps).

2. Re-Testing
*   Red Team must re-validate fixes within 30 days of remediation.`
    },

    // Security Operations Center (SOC) - 321-330
    {
        id: 321,
        name: 'SOC Procedures (SOP) & Shift Handovers',
        categoryId: 'soc',
        content: `1. Coverage
*   24x7x365 "Eyes on Glass" monitoring.

2. Tiers
*   **L1**: Triage, initial analysis, false positive closure.
*   **L2**: Deep analysis, incident scoping, containment.
*   **L3**: Advanced forensics, threat engineering.

3. Handover
*   Shift leads must brief incoming team on Active Incidents and Threat Intelligence.`
    },
    {
        id: 322,
        name: 'Incident Severity Classification',
        categoryId: 'soc',
        content: `1. Levels
*   **Sev 1 (Critical)**: Active breach, Data Exfiltration, Ransomware. (Goal: 15 min response).
*   **Sev 2 (High)**: Malware on a single host, Phishing attempt. (Goal: 60 min response).
*   **Sev 3 (Medium)**: Policy violation, Suspicious login. (Goal: 4 hour response).
*   **Sev 4 (Low)**: Adware, Spam.`
    },
    {
        id: 323,
        name: 'Alert Fatigue Management',
        categoryId: 'soc',
        content: `1. Tuning
*   Rules generating >100 alerts/day with <5% True Positive rate must be disabled and retuned.
*   **Suppression**: Maintenance windows must suppress availability alerts.`
    },
    {
        id: 324,
        name: 'Escalation Matrix',
        categoryId: 'soc',
        content: `1. Flow
*   L1 -> L2 (If analysis takes >30 mins).
*   L2 -> IR Team (If breach confirmed).
*   L2 -> Network/Server Teams (If operational issue).
*   **Call Tree**: After hours contact list for System Owners.`
    },
    {
        id: 325,
        name: 'Containment Authority',
        categoryId: 'soc',
        content: `1. Pre-Authorization
*   SOC is pre-authorized to:
    *   Isolate any workstation.
    *   Disable any user account.
    *   Block any IP on the firewall.
*   **No Approval Needed**: Speed is critical. Justification provided post-action.`
    },
    {
        id: 326,
        name: 'Evidence Preservation',
        categoryId: 'soc',
        content: `1. Chain of Custody
*   Logs related to an active incident must be exported and hashed (SHA-256) immediately.
*   Analysis is performed on *copies* of evidence, never the original source.`
    },
    {
        id: 327,
        name: 'Threat Intelligence Ingestion',
        categoryId: 'soc',
        content: `1. Feeds
*   Automated consumption of STIX/TAXII feeds.
*   **Actionable**: Intelligence is only useful if it blocks threats. Feeds must auto-update firewall blocklists.`
    },
    {
        id: 328,
        name: 'Daily Security Report',
        categoryId: 'soc',
        content: `1. Metrics
*   SOC Manager sends daily summary to CISO:
    *   Number of alerts triaged.
    *   Top 5 attacking IPs.
    *   Mean Time to Triage (MTTT) and Respond (MTTR).`
    },
    {
        id: 329,
        name: 'DLP Monitoring & Response',
        categoryId: 'soc',
        content: `1. Triage
*   DLP alerts (e.g., "100 CC numbers emailed") go to SOC queue.
*   **Privacy**: Analysts review metadata first (Subject/Sender). Content inspection requires approval.`
    },
    {
        id: 330,
        name: 'SOC Quality Assurance',
        categoryId: 'soc',
        content: `1. Audit
*   Senior Analyst randomly reviews 5 closed tickets per week for L1 analysts.
*   **Feedback**: Monthly 1:1 training based on triage errors.`
    },

    // Vulnerability Management Team - 331-340
    {
        id: 331,
        name: 'Vulnerability Scanning Schedule',
        categoryId: 'vuln-mgmt',
        content: `1. Cadence
*   **Discovery Scan**: Weekly (Identify new assets).
*   **Auth Vulnerability Scan**: Weekly (Credentialed scan of OS/Apps).
*   **Web App Scan (DAST)**: Monthly.

2. Agents
*   Agent-based scanning (Qualys/Tenable) preferred over network scanning for roaming laptops.`
    },
    {
        id: 332,
        name: 'Remediation SLAs',
        categoryId: 'vuln-mgmt',
        content: `(Aligned with Patch Management)
*   **Critical**: 48 Hours.
*   **High**: 7 Days.
*   **Medium**: 30 Days.
*   **Low**: 90 Days.`
    },
    {
        id: 333,
        name: 'Asset Criticality Scoring',
        categoryId: 'vuln-mgmt',
        content: `1. Context
A Critical bug on a Test Server != Critical bug on the ERP Database.
*   **Score**: Vulnerability Score x Asset Criticality (High/Med/Low) = Priority.`
    },
    {
        id: 334,
        name: 'False Positive Management',
        categoryId: 'vuln-mgmt',
        content: `1. Flagging
*   System Owners can flag a result as "False Positive".
*   **Verification**: Vuln Team analyzes evidence (config files, banners) before approving suppression.`
    },
    {
        id: 335,
        name: 'Authentication Scanning Policy',
        categoryId: 'vuln-mgmt',
        content: `1. Coverage
*   Unauthenticated scans miss 80% of vulnerabilities (e.g., outdated Adobe Reader).
*   **Requirement**: Scanners must be provided with Service Accounts (least privilege) to log in and inspect registry/files.`
    },
    {
        id: 336,
        name: 'Container & Cloud Vulnerability Mgmt',
        categoryId: 'vuln-mgmt',
        content: `1. Shift Left
*   Vulnerabilities must be detected in the CI/CD pipeline (Docker Image Scan).
*   **Registry**: Images in ECR/ACR scanned daily.`
    },
    {
        id: 337,
        name: 'Exception Management for Vulnerabilities',
        categoryId: 'vuln-mgmt',
        content: `1. Acceptance
*   If a patch cannot be applied (Legacy App):
    *   Risk Acceptance form signed by Business Owner.
    *   Mitigating Controls (WAF, Network Segmentation) implemented.
    *   Valid for 90 days.`
    },
    {
        id: 338,
        name: 'External Attack Surface Monitoring (EASM)',
        categoryId: 'vuln-mgmt',
        content: `1. Outside-In View
*   Continuous scanning of internet-facing IPs using tooling (Shodan/Bitsight) to see what the attacker sees.
*   Unknown open ports (e.g., RDP open to world) are P1 incidents.`
    },
    {
        id: 339,
        name: 'Reporting & KPIs',
        categoryId: 'vuln-mgmt',
        content: `1. Metrics
*   **Patch Rate**: % of assets patched within SLA.
*   **Coverage**: % of total assets being scanned effectively.
*   **Age**: Average age of open vulnerabilities.`
    },
    {
        id: 340,
        name: 'Configuration Compliance Scanning',
        categoryId: 'vuln-mgmt',
        content: `1. Hardening
*   Vulnerability tools also scan for Configuration Compliance (CIS Benchmarks).
*   e.g., "Is Root SSH disabled?", "Is Password Complexity enforced?".`
    },

    // Incident Response Team - 341-350
    {
        id: 341,
        name: 'Incident Response Plan (IRP)',
        categoryId: 'incident-response',
        content: `1. Framework
Follows PICERL:
*   **Preparation**
*   **Identification**
*   **Containment**
*   **Eradication**
*   **Recovery**
*   **Lessons Learned**`
    },
    {
        id: 342,
        name: 'Incident Commander Role',
        categoryId: 'incident-response',
        content: `1. Authority
*   The Incident Commander (IC) has absolute authority during a Sev 1 crisis.
*   **Role**: Coordinates technical leads, legal, PR, and execs. Does NOT touch the keyboard.`
    },
    {
        id: 343,
        name: 'War Room & Communications',
        categoryId: 'incident-response',
        content: `1. Out of Band
*   If email/Teams are compromised, IR communication moves to Signal/WhatsApp or personal emails.
*   **War Room**: Physical or Virtual bridge line open 24/7 until containment.`
    },
    {
        id: 344,
        name: 'Data Breach Notification Policy',
        categoryId: 'incident-response',
        content: `1. Legal
*   IR Team identifies *what* data was stolen.
*   Legal/Privacy Team determines *who* needs to be notified (Regulators within 72h via GDPR, Customers, etc.).`
    },
    {
        id: 345,
        name: 'Ransomware Pay/No-Pay Policy',
        categoryId: 'incident-response',
        content: `1. Stance
*   **Default**: We DO NOT negotiate with terrorists or pay ransoms.
*   **Exception**: Only the Board of Directors can authorize payment if company survival is at stake.`
    },
    {
        id: 346,
        name: 'Forensic Retention for Incidents',
        categoryId: 'incident-response',
        content: `1. Scope
*   Disk images and memory dumps from compromised hosts are retained for 3 years for legal evidence.`
    },
    {
        id: 347,
        name: 'Post-Incident Review (PIR)',
        categoryId: 'incident-response',
        content: `1. Meeting
*   Held within 5 days of incident closure.
*   **Output**: Root Cause Analysis (RCA) document and Ticketed Action Items to prevent recurrence.`
    },
    {
        id: 348,
        name: 'Cyber Insurance Engagement',
        categoryId: 'incident-response',
        content: `1. Contact
*   Legal engages Cyber Insurance forensics providers immediately upon Sev 1 confirmation (to ensure coverage).`
    },
    {
        id: 349,
        name: 'Third-Party Incident Support',
        categoryId: 'incident-response',
        content: `1. Retainer
*   An IR Retainer firm (e.g., Mandiant) is on contract for surge support during master-scale breaches.`
    },
    {
        id: 350,
        name: 'Incident Classification Guide',
        categoryId: 'incident-response',
        content: `1. Triage
*   Defines criteria for "False Positive" vs "Incident" vs "Breach".
*   Ensures consistent labeling for annual reporting.`
    },

    // Digital Forensics Team - 351-360
    {
        id: 351,
        name: 'Forensic Acquisition Procedures',
        categoryId: 'digital-forensics',
        content: `1. Order of Volatility
*   Capture Memory (RAM) -> Network Connections -> Running Processes -> Disk -> Backup Tapes.
*   **Write Blockers**: Hardware write blockers must be used when imaging physical disks.`
    },
    {
        id: 352,
        name: 'Legal Hold Management',
        categoryId: 'digital-forensics',
        content: `1. Process
*   When Legal issues a Hold, Forensics ensures custodian assets (laptops/email) are frozen and preserved.
*   **No Wipe**: Assets under hold cannot be reimaged or reissued.`
    },
    {
        id: 353,
        name: 'Mobile Device Forensics',
        categoryId: 'digital-forensics',
        content: `1. Challenges
*   Encryption makes mobile forensics difficulty.
*   **Scope**: Corporate data only (Container/MDM). Private data access requires User Consent or Court Order.`
    },
    {
        id: 354,
        name: 'Chain of Custody Documentation',
        categoryId: 'digital-forensics',
        content: `1. Form
*   Every evidence transfer (Person A -> Person B -> Locker) is logged with Date/Time/Signature.
*   Broken chain = Inadmissible in court.`
    },
    {
        id: 355,
        name: 'eDiscovery Support Policy',
        categoryId: 'digital-forensics',
        content: `1. Search
*   Using M365 Core eDiscovery to search mailboxes/Teams for keywords requested by Legal.
*   **Export**: Results exported to PST with encryption.`
    },
    {
        id: 356,
        name: 'Internal Investigation Protocol',
        categoryId: 'digital-forensics',
        content: `1. Privacy
*   Investigations into employee conduct (HR request) require written authorization from HR Director and Legal Counsel.
*   No "Snooping" allowed.`
    },
    {
        id: 357,
        name: 'Malware Reverse Engineering',
        categoryId: 'digital-forensics',
        content: `1. Safety
*   Malware analyzed in air-gapped lab network.
*   **Goal**: Determine IoCs (IPs, Hash) for blocking, not full code understanding.`
    },
    {
        id: 358,
        name: 'Forensic Lab Security',
        categoryId: 'digital-forensics',
        content: `1. Access
*   Lab entry restricted to Forensics team only (Badge + Biometric).
*   **Network**: Lab network is isolated from corporate LAN (Dirty Line).`
    },
    {
        id: 359,
        name: 'Cloud Forensics Standards',
        categoryId: 'digital-forensics',
        content: `1. Logs
*   Reliable forensics depends on Logs (CloudTrail/Unified Audit Log).
*   **Snapshots**: Taking disk snapshots of compromised EC2 instances for analysis.`
    },
    {
        id: 360,
        name: 'Evidence Disposal',
        categoryId: 'digital-forensics',
        content: `1. Purge
*   Evidence is destroyed (Secure Delete) 30 days after case closure/Legal approval.
*   Drives are degaussed.`
    },

    // Identity Security Team - 361-370
    {
        id: 361,
        name: 'Identity Governance & Administration (IGA)',
        categoryId: 'identity-sec',
        content: `1. Joiner/Mover/Leaver
*   **Automated**: Identity lifecycle driven by HR System (Source of Truth).
*   **Mover**: Access rights must be re-evaluated when a user changes departments (Permissions do not accumulate).`
    },
    {
        id: 362,
        name: 'Just-In-Time (JIT) Access',
        categoryId: 'identity-sec',
        content: `1. Principle
Standing Admin access is a risk.
*   **PIM**: Admins must request activation of "Global Admin" role for 4 hours. Access revoked automatically.`
    },
    {
        id: 363,
        name: 'Privileged Access Workstations (PAW)',
        categoryId: 'identity-sec',
        content: `1. Hardware
*   Domain Admins manage the AD environment from a dedicated, hardened laptop (PAW).
*   No Email/Internet browsing allowed on PAW.`
    },
    {
        id: 364,
        name: 'Service Principal & API Security',
        categoryId: 'identity-sec',
        content: `1. App Registrations
*   Enterprise Apps (OAuth) needing "Read All Mail" require Admin Consent.
*   **Review**: Inactive App Registrations (>1 year) are deleted.`
    },
    {
        id: 365,
        name: 'MFA Strength & Fatigue Policy',
        categoryId: 'identity-sec',
        content: `1. Hardening
*   **Number Matching**: User must type the number shown on screen (prevents "Accept" spam).
*   **Geo-Blocking**: MFA denied from sanctioned countries.`
    },
    {
        id: 366,
        name: 'Identity Threat Detection',
        categoryId: 'identity-sec',
        content: `1. Signals
*   Alert on: Impossible Travel, Unfamiliar Sign-in Properties, Password Spray attacks.
*   **Response**: High risk user sessions revoked and password reset forced.`
    },
    {
        id: 367,
        name: 'Access Review / Recertification',
        categoryId: 'identity-sec',
        content: `1. Audit
*   Managers review their direct reports' access annually.
*   Resource Owners (e.g., Financial Share) review access quarterly.`
    },
    {
        id: 368,
        name: 'Secrets Management',
        categoryId: 'identity-sec',
        content: `1. Vaults
*   Hardcoding passwords in scripts is Prohibited.
*   Use Azure Key Vault / HashiCorp Vault. Apps retrieve secrets at runtime via Managed Identity.`
    },
    {
        id: 369,
        name: 'Active Directory Hardening',
        categoryId: 'identity-sec',
        content: `1. Tiering
*   Protect AdminSDHolder.
*   Disable Print Spooler on DCs.
*   SMB Signing Required on all DCs.`
    },
    {
        id: 370,
        name: 'Passwordless Strategy',
        categoryId: 'identity-sec',
        content: `1. Roadmap
*   Move users to FIDO2 Security Keys and Windows Hello for Business.
*   Goal: Eliminate passwords to stop phishing.`
    },

    // Data Loss Prevention (DLP) Team - 371-380
    {
        id: 371,
        name: 'DLP Classification Rules',
        categoryId: 'dlp',
        content: `1. Patterns
*   **Financial**: Credit Cards (Luhn), SWIFT codes, IBANs.
*   **Personal**: SSN, Passport #, Tax ID.
*   **Health**: ICD-10 codes, Patient IDs.`
    },
    {
        id: 372,
        name: 'Endpoint DLP Enforcements',
        categoryId: 'dlp',
        content: `1. USB
*   **Block**: Write access to USB drives blocked for all users.
*   **Exception**: Encrypted BitLocker To Go drives allowed for specific groups.`
    },
    {
        id: 373,
        name: 'Email & Cloud DLP Policy',
        categoryId: 'dlp',
        content: `1. Action
*   **Block**: Emails with >100 Social Security Numbers blocked.
*   **Encrypt**: Emails with 1-99 SSNs auto-encrypted (OME).
*   **Notify**: User receives a Policy Tip explaining why.`
    },
    {
        id: 374,
        name: 'Web DLP (CASB/SWG)',
        categoryId: 'dlp',
        content: `1. Uploads
*   Block upload of "Confidential" labeled files to personal webmail (Gmail/Yahoo) or Personal Cloud (GDrive).`
    },
    {
        id: 375,
        name: 'DLP Incident Triage',
        categoryId: 'dlp',
        content: `1. Response
*   Analysts review "False Positives" (e.g., Ticket # looks like Credit Card).
*   **Escalation**: Valid data leaks escalated to HR/Legal.`
    },
    {
        id: 376,
        name: 'Printer Security & DLP',
        categoryId: 'dlp',
        content: `1. Watermarking
*   Print jobs for Confidential documents include a watermark with the Username + Timestamp (Traceability).`
    },
    {
        id: 377,
        name: 'Exact Data Match (EDM)',
        categoryId: 'dlp',
        content: `1. Precision
*   DLP checks against a hashed database of *actual* customer records (Exact Match) to reduce false positives.`
    },
    {
        id: 378,
        name: 'DLP for Instant Messaging (Teams/Slack)',
        categoryId: 'dlp',
        content: `1. Blocking
*   Sensitive data sent in Teams chat is blocked in real-time. "This message was blocked. What can I do?".`
    },
    {
        id: 379,
        name: 'Insider Risk Management Policy',
        categoryId: 'dlp',
        content: `1. Correlation
*   Detects "Resignation Date" + "Mass Download from SharePoint" + "Copy to USB".
*   Triggers alert to HR/Legal.`
    },
    {
        id: 380,
        name: 'User DLP Education',
        categoryId: 'dlp',
        content: `1. Training
*   Users triggering DLP policies receive a Just-In-Time training email explaining data handling rules.`
    },

    // Cloud Security Team - 381-390
    {
        id: 381,
        name: 'Cloud Security Posture Management (CSPM)',
        categoryId: 'cloud-sec',
        content: `1. Scanning
*   Continuous scan of AWS/Azure/GCP environment against CIS Benchmarks.
*   **Alert**: "S3 Bucket Public" -> Critical Alert.`
    },
    {
        id: 382,
        name: 'Cloud Workload Protection (CWPP)',
        categoryId: 'cloud-sec',
        content: `1. Runtime
*   Containers and VMs monitored for runtime anomalies (e.g., Crypto-mining binaries, unexpected shell execution).`
    },
    {
        id: 383,
        name: 'FaaS (Serverless) Security',
        categoryId: 'cloud-sec',
        content: `1. Lambda/Functions
*   **Least Privilege**: Functions must not run with "*" permissions.
*   **Vulnerability**: Dependencies scanned for CVEs.`
    },
    {
        id: 384,
        name: 'Cloud Network Security',
        categoryId: 'cloud-sec',
        content: `1. Micro-segmentation
*   Security Groups should restrict traffic to needed ports only.
*   **WAF**: Public Load Balancers must be fronted by WAF (Web App Firewall).`
    },
    {
        id: 385,
        name: 'Infrastructure as Code (IaC) Scanning',
        categoryId: 'cloud-sec',
        content: `1. Pre-Commit
*   Terraform/CloudFormation templates scanned for misconfigurations (Checkov/TFLint) *before* deployment.`
    },
    {
        id: 386,
        name: 'Cloud Entitlement Management (CIEM)',
        categoryId: 'cloud-sec',
        content: `1. Permissions
*   Identify and remove unused permission grants (e.g., Role assigned but never used in 90 days).`
    },
    {
        id: 387,
        name: 'Kubernetes Security Policy',
        categoryId: 'cloud-sec',
        content: `1. Admission Control
*   OPA Gatekeeper enforces policies allow-listing only trusted registries.
*   **Pod Security**: Block "Privileged" containers.`
    },
    {
        id: 388,
        name: 'Cloud Key Management Service (KMS)',
        categoryId: 'cloud-sec',
        content: `1. Keys
*   Customer Managed Keys (CMK) preferred over Provider Managed.
*   **Rotation**: Auto-rotate yearly.`
    },
    {
        id: 389,
        name: 'Multi-Cloud Visibility',
        categoryId: 'cloud-sec',
        content: `1. Single Pane
*   Unified dashboard (e.g., Wiz/Prisma) aggregating risks across AWS, Azure, and GCP.`
    },
    {
        id: 390,
        name: 'Cloud Incident Response',
        categoryId: 'cloud-sec',
        content: `1. Forensics
*   Automated snapshots of compromised instances.
*   Access logs (CloudTrail) routed to SIEM immutably.`
    },

    // Application Security Team - 391-400
    {
        id: 391,
        name: 'Secure Software Development Life Cycle (SSDLC)',
        categoryId: 'app-sec',
        content: `1. Phases
Security integrated at every stage:
*   **Design**: Threat Modeling.
*   **Build**: SAST/SCA.
*   **Test**: DAST/Pen Test.
*   **Deploy**: RASP/WAF.`
    },
    {
        id: 392,
        name: 'SAST & DAST Mandate',
        categoryId: 'app-sec',
        content: `1. Static (SAST)
*   Code scanned on every commit (SonarQube/Checkmarx).
*   **Gate**: Critical/High vulnerabilities break the build.

2. Dynamic (DAST)
*   Running app scanned before release.`
    },
    {
        id: 393,
        name: 'Open Source Security (SCA)',
        categoryId: 'app-sec',
        content: `1. Dependencies
*   Software Composition Analysis (Snyk/BlackDuck) checks libraries (Log4j, npm) for CVEs.
*   **Licensing**: Checks for restrictive licenses (GPL).`
    },
    {
        id: 394,
        name: 'OWASP Top 10 Mitigation',
        categoryId: 'app-sec',
        content: `1. Focus
*   Developers must code to prevent Top 10 risks (Injection, Broken Auth, XSS).
*   **Training**: Secure Code Warrior training mandatory for new devs.`
    },
    {
        id: 395,
        name: 'Web Application Firewall (WAF) Policy',
        categoryId: 'app-sec',
        content: `1. Protection
*   All public web apps must be behind Cloudflare/AWS WAF.
*   **Mode**: 'Block' mode enabled for OWASP Core Rule Set.`
    },
    {
        id: 396,
        name: 'API Security Standards',
        categoryId: 'app-sec',
        content: `1. Auth
*   APIs must authenticate via OAuth2/OIDC. API Keys must be rotated.
*   **Throttling**: Rate limiting enabled to prevent DoS.`
    },
    {
        id: 397,
        name: 'Container Image Signing',
        categoryId: 'app-sec',
        content: `1. Trust
*   Images signed (Cosign/Notary). Kubernetes only allows 'Signed' images to run.`
    },
    {
        id: 398,
        name: 'Threat Modeling Policy',
        categoryId: 'app-sec',
        content: `1. Review
*   Threat Modeling (STRIDE) required for all new major features or architectural changes.`
    },
    {
        id: 399,
        name: 'Secrets in Code Policy',
        categoryId: 'app-sec',
        content: `1. Detection
*   Pre-commit hooks (Talisman/GitGuard) block commits containing "AKIA" (AWS Keys) or "Password=".`
    },
    {
        id: 400,
        name: 'Application Penetration Testing',
        categoryId: 'app-sec',
        content: `1. Schedule
*   Critical apps tested annually by third-party firm.
*   **Remediation**: Critical findings fixed within 14 days.`
    },

    // Governance, Risk & Compliance (GRC) Team - 401-410
    {
        id: 401,
        name: 'Enterprise Risk Management Framework',
        categoryId: 'grc',
        content: `1. Methodology
*   Risks assessed based on Likelihood x Impact.
*   **Risk Register**: Centralized tracking of all IT risks.`
    },
    {
        id: 402,
        name: 'Policy Management & Exception Process',
        categoryId: 'grc',
        content: `1. Review
*   All policies reviewed annually.
*   **Exceptions**: Formal acceptance of risk required for policy deviation.`
    },
    {
        id: 403,
        name: 'Compliance Audit Schedule',
        categoryId: 'grc',
        content: `1. Standards
*   ISO 27001 (Annual).
*   SOC 2 Type II (Annual).
*   PCI-DSS (Annual).`
    },
    {
        id: 404,
        name: 'Business Continuity Planning (BCP)',
        categoryId: 'grc',
        content: `1. BIA
*   Business Impact Analysis conducted annually to determine Critical processes and RTOs.`
    },
    {
        id: 405,
        name: 'Security Metrics & Reporting',
        categoryId: 'grc',
        content: `1. KPIs
*   GRC compiles monthly KRI (Key Risk Indicator) packet for the Board (e.g., % Phish Prone, Patch Level).`
    },
    {
        id: 406,
        name: 'Internal Audit Liaison Policy',
        categoryId: 'grc',
        content: `1. Coordination
*   GRC acts as the interface between IT teams and Auditors to streamline evidence collection.`
    },
    {
        id: 407,
        name: 'Risk Acceptance Authority',
        categoryId: 'grc',
        content: `1. Levels
*   **Low Risk**: Manager Approval.
*   **Medium Risk**: Director Approval.
*   **High Risk**: VP/CISO Approval.`
    },
    {
        id: 408,
        name: 'Regulatory Compliance (GDPR/CCPA)',
        categoryId: 'grc',
        content: `1. Mapping
*   Controls mapped to Unified Compliance Framework (UCF) to satisfy multiple regs at once.`
    },
    {
        id: 409,
        name: 'Security Steering Committee',
        categoryId: 'grc',
        content: `1. Governance
*   Quarterly meeting of C-Suite to review major security initiatives and risks.`
    },
    {
        id: 410,
        name: 'Control Self-Assessment (CSA)',
        categoryId: 'grc',
        content: `1. Testing
*   Control owners must self-test their controls (e.g., "Review Admin List") quarterly and upload evidence.`
    },

    // Third-Party / Vendor Risk Management Team - 411-420
    {
        id: 411,
        name: 'Vendor Risk Assessment (SIG)',
        categoryId: 'vendor-risk',
        content: `1. Onboarding
*   Vendors must complete a security questionnaire (SIG Lite/Full) before contract signing.
*   **Tiering**: Critical vendors (hosting data) undergo deeper due diligence.`
    },
    {
        id: 412,
        name: 'Data Processing Agreement (DPA)',
        categoryId: 'vendor-risk',
        content: `1. Legal
*   All vendors processing PII must sign a DPA/BAA outlining their security obligations.`
    },
    {
        id: 413,
        name: 'Continuous Vendor Monitoring',
        categoryId: 'vendor-risk',
        content: `1. Tools
*   Use SecurityScorecard/Bitsight to monitor vendor's public security posture continuously.`
    },
    {
        id: 414,
        name: 'Right to Audit Clause',
        categoryId: 'vendor-risk',
        content: `1. Contract
*   Contracts must include our right to audit the vendor's security (or review their SOC 2 report) annually.`
    },
    {
        id: 415,
        name: 'Fourth-Party Risk',
        categoryId: 'vendor-risk',
        content: `1. Supply Chain
*   Vendors must declare their own critical sub-processors.`
    },
    {
        id: 416,
        name: 'Vendor Offboarding',
        categoryId: 'vendor-risk',
        content: `1. Termination
*   Vendor access accounts disabled immediately.
*   **Data Destruction**: Vendor must provide certificate of data destruction upon contract end.`
    },
    {
        id: 417,
        name: 'Software Bill of Materials (SBOM)',
        categoryId: 'vendor-risk',
        content: `1. Requirement
*   Software vendors must provide SBOM to allow vulnerability tracking of their components.`
    },
    {
        id: 418,
        name: 'Cloud Vendor Assessment',
        categoryId: 'vendor-risk',
        content: `1. CAIQ
*   SaaS vendors assessed using CSA CAIQ (Consensus Assessments Initiative Questionnaire).`
    },
    {
        id: 419,
        name: 'Vendor Breach Notification',
        categoryId: 'vendor-risk',
        content: `1. SLA
*   Vendors contractually obligated to notify us of a breach within 24-48 hours.`
    },
    {
        id: 420,
        name: 'Critical Vendor List',
        categoryId: 'vendor-risk',
        content: `1. Inventory
*   List of vendors Critical to business ops is maintained and reviewed by Board.`
    },

    // Privacy & Data Protection Team - 421-430
    {
        id: 421,
        name: 'Data Subject Access Request (DSAR)',
        categoryId: 'privacy',
        content: `1. Rights
*   Users have right to Access, Delete (Right to be Forgotten), and Correct their data.
*   **SLA**: 30 days to respond.`
    },
    {
        id: 422,
        name: 'Privacy Impact Assessment (PIA)',
        categoryId: 'privacy',
        content: `1. New Projects
*   PIA required for any project processing new PII.
*   **Outcome**: Identify risks and mitigations.`
    },
    {
        id: 423,
        name: 'Record of Processing Activities (RoPA)',
        categoryId: 'privacy',
        content: `1. Inventory
*   A centralized map of what data we collect, why, where it is stored, and who sees it (GDPR Article 30).`
    },
    {
        id: 424,
        name: 'Cookie Consent & Tracking',
        categoryId: 'privacy',
        content: `1. Web
*   Cookie Banner required. Users must Opt-In for tracking cookies (Non-Essential).`
    },
    {
        id: 425,
        name: 'Data Minimization Principle',
        categoryId: 'privacy',
        content: `1. Collection
*   Collect only what is needed. (e.g., Don't ask for Date of Birth if not required).`
    },
    {
        id: 426,
        name: 'Privacy by Design',
        categoryId: 'privacy',
        content: `1. Engineering
*   Privacy controls (Encryption, Anonymization) baked into the architecture, not bolted on.`
    },
    {
        id: 427,
        name: 'Cross-Border Data Transfer',
        categoryId: 'privacy',
        content: `1. Mechanisms
*   Transfer of EU data to US requires SCCs (Standard Contractual Clauses) or Data Privacy Framework.`
    },
    {
        id: 428,
        name: 'Employee Privacy Notice',
        categoryId: 'privacy',
        content: `1. Transparency
*   Employees informed about what monitoring is in place (Email/Internet).`
    },
    {
        id: 429,
        name: 'Breach Notification (Privacy)',
        categoryId: 'privacy',
        content: `1. Reporting
*   Notify Data Protection Authority (DPA) within 72 hours if rights of individuals are at risk.`
    },
    {
        id: 430,
        name: 'Data Retention & Destruction',
        categoryId: 'privacy',
        content: `1. Schedule
*   Personal data deleted when no longer needed for purpose collected (e.g., Resume deleted 6 months after rejection).`
    }
];
