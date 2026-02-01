import { Policy } from '../../types';

export const legalPolicies: Policy[] = [
    // Legal & Corporate Affairs Team - 821-830
    {
        id: 821,
        name: 'Intellectual Property (IP) Policy',
        categoryId: 'legal',
        content: `1. Ownership
*   All code, designs, and documents created by employees during work hours are the exclusive property of the company.
*   **Patents**: Employees must disclose patentable inventions to Legal immediately.`
    },
    {
        id: 822,
        name: 'Open Source License Compliance',
        categoryId: 'legal',
        content: `1. Integration
*   Use of Copyleft (GPL/AGPL) code in proprietary products is strictly prohibited to prevent force-open-sourcing.
*   **Audit**: All OS libraries must be scanned and approved.`
    },
    {
        id: 823,
        name: 'Contract Lifecycle Management',
        categoryId: 'legal',
        content: `1. Review
*   No IT contract (SaaS, Hardware, Service) can be signed without Legal review if value > $5k.
*   **Signatory**: Only C-Level execs or VPs with delegated authority can sign.`
    },
    {
        id: 824,
        name: 'M&A Due Diligence (Technological)',
        categoryId: 'legal',
        content: `1. Assessment
*   Target companies must undergo a "Technical Depth" audit (Code quality, Security, Debt) before acquisition.`
    },
    {
        id: 825,
        name: 'Electronic Restrictions (DRM) Policy',
        categoryId: 'legal',
        content: `1. Media
*   Corporate multimedia assets must be protected by DRM where applicable.
*   **Circumvention**: Employees must not use tools to bypass DRM on external software.`
    },
    {
        id: 826,
        name: 'Employee Handbook Acknowledgement',
        categoryId: 'legal',
        content: `1. Compliance
*   All staff must digitally sign the IT Acceptable Use Policy annually.
*   **Conflict of Interest**: Side hustles competing with the company must be declared.`
    },
    {
        id: 827,
        name: 'Litigation Hold Policy',
        categoryId: 'legal',
        content: `1. Preservation
*   Upon "Litigation Hold" notice, automatic deletion policies (Email/Chat) are suspended for named custodians.
*   **Non-compliance**: Destruction of evidence is a criminal offense.`
    },
    {
        id: 828,
        name: 'Export Compliance (EAR/ITAR)',
        categoryId: 'legal',
        content: `1. Encryption
*   Source code containing cryptographic primitives must not be exported to embargoed nations (e.g., North Korea, Iran).`
    },
    {
        id: 829,
        name: 'Social Media Endorsement Policy',
        categoryId: 'legal',
        content: `1. FTC Rules
*   Employees posting about company products must disclose their relationship (e.g., "#Employee").`
    },
    {
        id: 830,
        name: 'Whistleblower Protection',
        categoryId: 'legal',
        content: `1. Reporting
*   IT staff reporting illegal activities (e.g., Data Falsification) are protected from retaliation.
*   **Channel**: Anonymous hotline provided.`
    },

    // Regulatory Compliance Team - 831-840
    {
        id: 831,
        name: 'Governance Framework (COBIT)',
        categoryId: 'compliance',
        content: `1. Alignment
*   IT goals must align with Business goals using the COBIT framework.
*   **Metrics**: Maturity levels tracked for all IT processes.`
    },
    {
        id: 832,
        name: 'PCI-DSS Compliance Policy',
        categoryId: 'compliance',
        content: `1. Scope
*   Cardholder Data Environment (CDE) must be segmented from the rest of the network.
*   **Storage**: CVV codes must NEVER be stored.`
    },
    {
        id: 833,
        name: 'HIPAA Security Rule (Health Data)',
        categoryId: 'compliance',
        content: `1. PHI
*   Protected Health Information (PHI) must be encrypted at rest and in transit.
*   **Access**: "Minimum Necessary" access rule applies.`
    },
    {
        id: 834,
        name: 'SOX IT General Controls (ITGC)',
        categoryId: 'compliance',
        content: `1. Financials
*   Changes to systems affecting Financial Reporting must have strict Change Management and Audit Logs.`
    },
    {
        id: 835,
        name: 'GDPR / CCPA Readiness',
        categoryId: 'compliance',
        content: `1. Rights
*   Systems must support "Right to Access" and "Right to Erasure".
*   **DPO**: Data Protection Officer must be consulted on new PII projects.`
    },
    {
        id: 836,
        name: 'Policy Management Lifecycle',
        categoryId: 'compliance',
        content: `1. Review
*   All IT policies must be reviewed annually.
*   **Version**: Old versions archived for legal defense.`
    },
    {
        id: 837,
        name: 'Know Your Customer (KYC) Technology',
        categoryId: 'compliance',
        content: `1. Verification
*   Identity verification services must be integrated into onboarding flows for FinTech products.`
    },
    {
        id: 838,
        name: 'Accessibility Compliance (ADA)',
        categoryId: 'compliance',
        content: `1. Web
*   Public websites must be WCAG 2.1 AA compliant to avoid ADA lawsuits.`
    },
    {
        id: 839,
        name: 'Records Management Policy',
        categoryId: 'compliance',
        content: `1. Retention
*   Financial records: 7 Years.
*   Contracts: Lifetime + 5 Years.
*   **Destruction**: Secure shredding for physical documents.`
    },
    {
        id: 840,
        name: 'Ethics & Code of Conduct',
        categoryId: 'compliance',
        content: `1. Bribery
*   IT staff cannot accept gifts >$50 from vendors (Anti-Bribery).`
    },

    // Internal Audit Team - 841-850
    {
        id: 841,
        name: 'Annual Audit Plan',
        categoryId: 'internal-audit',
        content: `1. Scope
*   Audit plan approved by Audit Committee.
*   Includes: Cyber Security, Resilience, and Vendor Management audits.`
    },
    {
        id: 842,
        name: 'Audit Evidence Collection',
        categoryId: 'internal-audit',
        content: `1. Access
*   Auditors have "Read Only" access to all systems.
*   **Cooperation**: IT teams must provide requested evidence within 48 hours.`
    },
    {
        id: 843,
        name: 'Exception Handling (Audit Findings)',
        categoryId: 'internal-audit',
        content: `1. Remediation
*   Findings classified as "Critical", "High", "Medium".
*   **SLA**: Critical findings must be remediated within 30 days.`
    },
    {
        id: 844,
        name: 'Continuous Auditing',
        categoryId: 'internal-audit',
        content: `1. Automation
*   Scripts run daily to check for control failures (e.g., Check for users with Password Never Expires).`
    },
    {
        id: 845,
        name: 'Privileged Access Audit',
        categoryId: 'internal-audit',
        content: `1. Review
*   Quarterly review of Domain Admin group membership.
*   **Finding**: Unauthorized admins are an automatic "High" finding.`
    },
    {
        id: 846,
        name: 'Physical Security Audit',
        categoryId: 'internal-audit',
        content: `1. Walkthrough
*   Auditors physically test doors, cameras, and badge readers annually.`
    },
    {
        id: 847,
        name: 'Disaster Recovery Audit',
        categoryId: 'internal-audit',
        content: `1. Observation
*   Auditors observe the annual DR Drill and verify that RTO/RPO targets were met.`
    },
    {
        id: 848,
        name: 'Shadow IT Audit',
        categoryId: 'internal-audit',
        content: `1. Discovery
*   Review of expense reports to find software purchases bypassing IT procurement.`
    },
    {
        id: 849,
        name: 'Code Quality Audit',
        categoryId: 'internal-audit',
        content: `1. Review
*   Sample based review of Code Commits to ensure "Code Review" policy is being followed.`
    },
    {
        id: 850,
        name: 'Audit Report Distribution',
        categoryId: 'internal-audit',
        content: `1. Confidentiality
*   Audit reports are "Confidential" and shared only with Mgmt and Board. Not shared with external auditors without approval.`
    },

    // External Audit Coordination Team - 851-860
    {
        id: 851,
        name: 'Single Point of Contact (SPOC)',
        categoryId: 'external-audit',
        content: `1. Coordination
*   All requests from External Auditors (PriceWaterhouseCoopers, etc.) must go through the Coordination Team. Direct contact with engineers is minimized.`
    },
    {
        id: 852,
        name: 'SOC 2 Type II Certification',
        categoryId: 'external-audit',
        content: `1. Period
*   Observation period: Jan 1 - Dec 31.
*   **Evidence**: Screenshots must include system clock to prove date.`
    },
    {
        id: 853,
        name: 'ISO 27001 Surveillance',
        categoryId: 'external-audit',
        content: `1. ISMS
*   Maintain the Information Security Management System (ISMS) documentation for the ISO registrar.`
    },
    {
        id: 854,
        name: 'Audit Fee Management',
        categoryId: 'external-audit',
        content: `1. Budget
*   Coordinate scope to minimize billable hours by external firms.`
    },
    {
        id: 855,
        name: 'PBC (Provided by Client) List Management',
        categoryId: 'external-audit',
        content: `1. Tracker
*   Central tracker used to manage the 500+ evidence items requested by auditors.`
    },
    {
        id: 856,
        name: 'Management Response Strategy',
        categoryId: 'external-audit',
        content: `1. Negotiation
*   Coordinate Management Responses to findings.
*   **Dispute**: Fact-check findings before accepting them.`
    },
    {
        id: 857,
        name: 'Bridge Letters',
        categoryId: 'external-audit',
        content: `1. Gap
*   Issue Bridge Letters to customers covering the gap between the audit period end and the current date.`
    },
    {
        id: 858,
        name: 'Customer Audit Right',
        categoryId: 'external-audit',
        content: `1. Limit
*   Customers can audit us once per year, at their expense, with 30 days notice.
*   **Scope**: Restricted to shared infrastructure.`
    },
    {
        id: 859,
        name: 'Regulatory Examination Prep',
        categoryId: 'external-audit',
        content: `1. Regulators
*   Prepare execs for interviews with Fed/SEC examiners. "Mock Exams" conducted.`
    },
    {
        id: 860,
        name: 'Previous Year Finding Closure',
        categoryId: 'external-audit',
        content: `1. Priority
*   Prioritize evidence showing that last year's findings are closed. Recurring findings are red flags.`
    },

    // Corporate Risk Management Team - 861-870
    {
        id: 861,
        name: 'Risk Appetite Statement',
        categoryId: 'risk-mgmt',
        content: `1. Tolerance
*   Board defines risk levels.
*   **Cyber**: Low tolerance for data breach.
*   **Innovation**: High tolerance for experimental project failure.`
    },
    {
        id: 862,
        name: 'Enterprise Risk Register (ERR)',
        categoryId: 'risk-mgmt',
        content: `1. Tracking
*   Central database of all Strategic, Operational, Financial, and Compliance risks.`
    },
    {
        id: 863,
        name: 'Risk Assessment Methodology',
        categoryId: 'risk-mgmt',
        content: `1. Formula
*   Risk = Impact x Likelihood.
*   **Heatmap**: Risks plotted on 5x5 heatmap.`
    },
    {
        id: 864,
        name: 'Key Risk Indicators (KRIs)',
        categoryId: 'risk-mgmt',
        content: `1. Early Warning
*   Monitor leading indicators (e.g., "Number of Unpatched Servers") to predict risk events.`
    },
    {
        id: 865,
        name: 'Cyber Insurance Policy',
        categoryId: 'risk-mgmt',
        content: `1. Coverage
*   Maintain $10M policy for Ransomware and Liability.
*   **Requirement**: MFA must be enforced to keep policy valid.`
    },
    {
        id: 866,
        name: 'Risk Acceptance (Waivers)',
        categoryId: 'risk-mgmt',
        content: `1. Expiry
*   Risk Acceptances expire after 6 months and must be re-evaluated.
*   **Owner**: VP must sign off on High Risks.`
    },
    {
        id: 867,
        name: 'Supply Chain Risk Management',
        categoryId: 'risk-mgmt',
        content: `1. Concentration
*   Identify Single Points of Failure (e.g., reliance on one factory) and diversification plans.`
    },
    {
        id: 868,
        name: 'Board Risk Reporting',
        categoryId: 'risk-mgmt',
        content: `1. Quarterly
*   CRO (Chief Risk Officer) presents Top 10 risks to the Audit Committee.`
    },
    {
        id: 869,
        name: 'Geopolitical Risk Strategy',
        categoryId: 'risk-mgmt',
        content: `1. Resilience
*   Assess impact of sanctions/tariffs on IT hardware procurement.`
    },
    {
        id: 870,
        name: 'Crisis Management Plan',
        categoryId: 'risk-mgmt',
        content: `1. Team
*   Crisis command team (CEO, Legal, PR) activated for existential threats (e.g., Massive Breach, CEO incapacity).`
    },

    // Special Policy - Cyber Law
    {
        id: 9000,
        name: 'Must-Know Cyber Law in India',
        categoryId: 'legal',
        content: `1. Policy Scope
This policy applies to all employees, contractors, and third-party vendors accessing corporate resources. Please review annually.

### IT ACT SECTIONS – LIVE EXAMPLES

**1. Sec 65 – Tampering with Computer Source Code**
*   **Simple**: Changing computer system files or logs.
*   **Ref**: An employee deletes server logs to hide he stole data.
*   **Punishment**: 3 years jail + ₹3 lakh.

**2. Sec 66 – Hacking / Data Alteration**
*   **Simple**: Accessing a computer without permission.
*   **Ref**: A boy hacks college system and changes marks.
*   **Punishment**: 3 years jail + ₹5 lakh.

**3. Sec 66A – Offensive Messages (Removed by SC)**
*   **Ref**: Not applicable.

**4. Sec 66B – Receiving Stolen Computer Device**
*   **Simple**: Buying/using stolen laptop knowingly.
*   **Ref**: You buy a stolen laptop from OLX for cheap.
*   **Punishment**: 3 years jail + ₹1 lakh.

**5. Sec 66C – Identity Theft**
*   **Simple**: Stealing someone’s personal identity info.
*   **Ref**: Someone steals your Aadhaar and uses it for SIM registration.
*   **Punishment**: 3 years jail + ₹1 lakh.

**6. Sec 66D – Online Fraud / Impersonation**
*   **Simple**: Pretending to be someone to cheat.
*   **Ref**: Caller pretends to be bank employee and asks OTP.
*   **Punishment**: 3 years jail + ₹1 lakh.

**7. Sec 66E – Privacy Violation**
*   **Simple**: Taking someone's private photos/videos.
*   **Ref**: A person records a woman in a trial room secretly.
*   **Punishment**: 3 years jail + ₹2 lakh.

**8. Sec 66F – Cyber Terrorism**
*   **Simple**: Attacking national security systems.
*   **Ref**: A hacker disables an airport radar system.
*   **Punishment**: Life imprisonment.

**9. Sec 67 – Obscene Content**
*   **Simple**: Sharing nude/porn images.
*   **Ref**: Someone uploads nude photos of an ex-partner online.
*   **Punishment**: 3–5 years jail.

**10. Sec 67A – Sexually Explicit Videos**
*   **Simple**: Sharing sexual act videos.
*   **Ref**: Couple's private bedroom video leaked on WhatsApp.
*   **Punishment**: 5–7 years jail.

**11. Sec 67B – Child Pornography**
*   **Simple**: Any sexual content with minors.
*   **Ref**: Sharing a video of a minor being abused.
*   **Punishment**: 5–7 years jail + ₹10 lakh.

**12. Sec 67C – Data Retention Failure**
*   **Simple**: Websites must keep user logs.
*   **Ref**: A telecom company deletes logs early to hide fraud.
*   **Punishment**: 3 years jail.

**13. Sec 69 – Govt Interception**
*   **Simple**: Govt can read data for security.
*   **Ref**: Govt decrypts a terror suspect’s WhatsApp messages.
*   **Punishment** (if refusing): 7 years.

**14. Sec 69A – Website Blocking**
*   **Simple**: Govt blocks harmful websites.
*   **Ref**: Porn websites blocked across India.
*   **Punishment**: 7 years (for non-following orders).

**15. Sec 69B – Traffic Data Monitoring**
*   **Simple**: Govt tracks data for security.
*   **Ref**: Monitoring foreign cyber-attack traffic.
*   **Punishment**: 3 years.

**16. Sec 70 – Unauthorized Access to Protected Systems**
*   **Simple**: Govt networks are protected.
*   **Ref**: Hacking NIC, ISRO, DRDO system.
*   **Punishment**: 10 years jail.

**17. Sec 71 – Misrepresentation**
*   **Simple**: Giving false info for digital certificate.
*   **Ref**: Using fake PAN to get digital signature.
*   **Punishment**: 2 years jail.

**18. Sec 72 – Breach of Confidentiality**
*   **Simple**: Sharing private data.
*   **Ref**: IT admin leaks customer bank details.
*   **Punishment**: 2 years jail.

**19. Sec 73 – False Digital Signature Certificate**
*   **Simple**: Fake DSC creation.
*   **Ref**: Creating fake DSC to sign tender documents.
*   **Punishment**: 2 years jail.

**20. Sec 74 – Fraud Using Electronic Records**
*   **Simple**: Online document fraud.
*   **Ref**: Creating fake university certificate PDF.
*   **Punishment**: 2 years jail.

**21. Sec 75 – Offences Outside India**
*   **Simple**: Foreign actions affecting India.
*   **Ref**: Pakistan hacker attacks Indian bank server.
*   **Punishment**: Same as Indian law.

**22. Sec 77 – Civil + Criminal Both Apply**
*   **Simple**: Fine + jail together for cyber crimes.

**23. Sec 77A – Compounding of Cases**
*   **Simple**: Some IT Act cases can be settled.

**24. Sec 77B – Cognizable Offences**
*   **Simple**: Police can arrest without warrant.

**25. Sec 78 – Inspector Power**
*   **Simple**: Police inspector can investigate IT Act case.

**26. Sec 79 – Intermediary Safe Harbour**
*   **Simple**: Social media not guilty if they follow rules.
*   **Ref**: Facebook not punished for user’s abuse post if they remove it on complaint.

**27. Sec 85 – Offence by Company**
*   **Simple**: Directors also responsible.
*   **Ref**: Company stores user data illegally; CEO also punished.

### IPC & OTHER ACTS – LIVE EXAMPLES

**28. Sec 503 IPC – Threat Messages**
*   **Ref**: “You will die soon” email.
*   **Punishment**: 2 years jail.

**29. Sec 509 IPC – Insulting Woman’s Modesty**
*   **Ref**: Sending sexual messages to a woman.
*   **Punishment**: 3 years jail.

**30. Sec 499 IPC – Defamation**
*   **Ref**: Posting false rumor that someone stole money.
*   **Punishment**: 2 years.

**31. Sec 420 IPC – Cyber Fraud**
*   **Ref**: Online job scam: “Pay ₹5000 for job”.
*   **Punishment**: 7 years.

**32. Sec 463 IPC – Email Spoofing**
*   **Ref**: Fake email: “From: CEO@company.com”.
*   **Punishment**: 2 years.

**33. Sec 464 IPC – Making Fake Document**
*   **Ref**: Fake Aadhaar PDF.
*   **Punishment**: 2 years.

**34. Sec 468 IPC – Forgery to Cheating**
*   **Ref**: Fake ID card for loan.
*   **Punishment**: 7 years.

**35. Sec 469 IPC – Forgery to Harm Reputation**
*   **Ref**: Photoshopping girl’s photo to defame.
*   **Punishment**: 3 years.

**36. Sec 383 IPC – Web-Jacking**
*   **Ref**: Hacker locks website and demands money.
*   **Punishment**: 3 years jail.

**37. Sec 500 IPC – Email Abuse**
*   **Ref**: Sending abusive messages that damage reputation.
*   **Punishment**: 2 years.

**38. Sec 506 IPC – Criminal Intimidation**
*   **Ref**: “I will kidnap you” message.
*   **Punishment**: 2–7 years.

**39. Sec 507 IPC – Anonymous Threat**
*   **Ref**: Threat email from fake Gmail.
*   **Punishment**: 2 years.

**40. Sec 51 Copyright – Infringement**
*   **Ref**: Uploading movies on Telegram.
*   **Punishment**: 6 months–3 years + fine.

**41. Sec 63 – Copyright Crime**
*   **Ref**: Running a piracy website.
*   **Punishment**: 3 years.

**42. Sec 63A – Repeat Copyright Offence**
*   **Ref**: Caught again for piracy.
*   **Punishment**: Higher jail.

**43. Sec 63B – Using Pirated Software**
*   **Ref**: Using cracked Windows or Photoshop.
*   **Punishment**: 3 years.

**44. Sec 292 IPC – Obscenity**
*   **Ref**: Sharing vulgar pictures on WhatsApp.
*   **Punishment**: 2 years.

**45. Sec 292A IPC – Indecent Material for Blackmail**
*   **Ref**: Printing/editing sexual photos for blackmail.
*   **Punishment**: 3 years.

**46. Sec 293 IPC – Obscene Material to Minors**
*   **Ref**: Sending porn videos to a 16-year-old.
*   **Punishment**: 5 years.

**47. Sec 294 IPC – Obscene Act/Song**
*   **Ref**: Live streaming sexual dance online.
*   **Punishment**: 3 months.

**48. Sec 378 IPC – Theft (Hardware)**
*   **Ref**: Stealing office laptop.
*   **Punishment**: 3 years.

**49. Sec 379 IPC – Punishment for Theft**
*   **Ref**: Stealing computer parts.
*   **Punishment**: 3 years.

**50. NDPS Act – Online Drug Sale**
*   **Ref**: Selling drugs through Instagram DM.
*   **Punishment**: 10–20 years + huge fine.

**51. Arms Act – Online Sale of Weapons**
*   **Ref**: Buying pistol from dark web seller.
*   **Punishment**: 3–7 years.
`
    }
];
