import { Policy } from '../../types';

export const infrastructurePolicies: Policy[] = [
    // IT Service Desk (L1 / L2 / L3) - 101-110
    {
        id: 101,
        name: 'Ticket Handling & SLA Policy',
        categoryId: 'it-service-desk',
        content: `1. Overview
This policy outlines the standard procedures for handling IT support tickets and the Service Level Agreements (SLAs) that the IT Service Desk commits to. It ensures that all incidents and service requests are prioritized, assigned, and resolved in a timely manner to minimize business disruption.

2. Scope
This policy applies to all IT support staff, including Level 1 (L1), Level 2 (L2), and Level 3 (L3) support teams, as well as all employees requesting IT support.

3. Priority Levels & SLA Matrix
Tickets are categorized based on **Urgency** (how quickly business is impacted) and **Impact** (how many users or systems are affected).

| Priority | Description | Response Time | Resolution Time |
| :--- | :--- | :--- | :--- |
| **P1 - Critical** | Company-wide outage, critical system down, or significant financial/security risk. | 15 Mins | 4 Hours |
| **P2 - High** | Department-wide issue, critical application unavailable for a group, or executive user blocked. | 30 Mins | 8 Hours |
| **P3 - Medium** | Single user unable to work, or non-critical system degradation. | 2 Hours | 2 Business Days |
| **P4 - Low** | Service Requests (e.g., software install), inquiries, or minor glitches with workaround. | 4 Hours | 5 Business Days |

4. Ticket Lifecycle
1.  **Creation**: User submits ticket via Portal, Email, or Slack.
2.  **Triage**: L1 Desk reviews, categorizes, and assigns priority.
3.  **Assignment**: Ticket assigned to appropriate technician or queue.
4.  **In Progress**: Technician works on the issue, updating user every 24h (P3) or 4h (P2/P1).
5.  **Resolution**: Technician verifies fix and marks as 'Resolved'.
6.  **Closure**: Ticket automatically closes after 3 days if no user response.

5. Escalation Process
*   **Functional Escalation**: If L1 cannot resolve within 1 hour, escalate to L2. If L2 cannot resolve within 4 hours, escalate to L3/Vendor.
*   **Hierarchical Escalation**: If SLA is breached, duty manager is notified automatically.

6. Non-Compliance
Failure to adhere to SLAs without valid justification may result in performance reviews and disciplinary action.`
    },
    {
        id: 102,
        name: 'User Account Creation & Termination Policy',
        categoryId: 'it-service-desk',
        content: `1. Overview
This policy governs the lifecycle of user accounts within <Company Name>, ensuring that access is granted only to authorized personnel and revoked promptly upon termination to maintain security.

2. Account Creation (Onboarding)
*   **Request**: HR or Hiring Manager must submit a "New User Request" form at least 5 business days before the start date.
*   **Approval**: Requests require approval from the Department Head and IT Manager.
*   **Provisioning**: IT will create accounts (AD, Email, Slack, etc.) based on the user's role and department.
*   **Credential Handoff**: Initial credentials will be shared securely with the Hiring Manager, not via clear-text email.

3. Account Maintenance
*   **Role Changes**: Managers must submit a "Change Request" if an employment role changes, triggering an access review.
*   **Inactivity**: Accounts inactive for 45 days will be disabled. Accounts inactive for 90 days will be deleted.

4. Account Termination (Offboarding)
*   **Notification**: HR must notify IT immediately upon employee resignation or termination (ideally 24h in advance).
*   **Immediate Action**: For involuntary terminations, access is revoked **immediately** during the termination meeting.
*   **Standard Action**: For voluntary resignations, access is disabled at 5:00 PM on the last working day.
*   **Data Retention**: User email and OneDrive data will be retained for 90 days before permanent deletion, unless a legal hold is requested.

5. Access Reviews
Quarterly audits will be conducted to verify that all active accounts belong to current employees and have appropriate access levels.`
    },
    {
        id: 103,
        name: 'Password Reset & Unlock Policy',
        categoryId: 'it-service-desk',
        content: `1. Purpose
To establish secure procedures for resetting forgotten passwords and unlocking accounts, preventing social engineering attacks and unauthorized access.

2. Self-Service Password Reset (SSPR)
All users are required to register for SSPR using Microsoft 365 / Okta. This is the **primary** method for resets.
*   Users can reset their own password using MFA (SMS/Authenticator App).
*   No help desk ticket is required for SSPR.

3. Manual Reset Procedures (Service Desk)
If SSPR is unavailable, users may contact the Service Desk.
*   **Verification Required**: The technician **MUST** verify the user's identity before any action.
    *   **Method A**: Call user on internal extension or registered mobile number.
    *   **Method B**: Verify via Manager (Manager must confirm request).
    *   **Method C**: Video call verification (visual ID check).
*   **Prohibited**: Never reset a password based solely on an email or chat request from an unverified source.

4. Temporary Passwords
*   Must be sufficiently complex (12+ chars).
*   Must be set to "User must change password at next logon".
*   Must be communicated securely (e.g., via SMS or One-Time Note), **never** via email to the user's personal address.

5. Lockouts
*   Accounts lock after 5 failed attempts.
*   Auto-unlock occurs after 30 minutes.
*   Service Desk can force unlock after identity verification.`
    },
    {
        id: 104,
        name: 'Remote Desktop Support Policy',
        categoryId: 'it-service-desk',
        content: `1. Overview
Remote support tools allow IT staff to troubleshoot issues efficiently. However, unrestricted remote access poses privacy and security risks. This policy defines the rules for engaging in remote support sessions.

2. Authorized Tools
*   Only approved tools (e.g., TeamViewer, BeyondTrust, Microsoft Quick Assist) may be used.
*   Using unauthorized or personal remote access tools (e.g., AnyDesk personal, Chrome Remote Desktop) is strictly prohibited.

3. User Consent
*   **Attended Access**: Technicians must obtain explicit verbal or chat-based consent before connecting to a user's active session.
*   **Visual Notification**: The user must be able to see that a remote session is active (e.g., via a notification banner or icon).
*   **User Control**: The user must retain the ability to terminate the session at any time.

4. Unattended Access
*   Permitted only for server maintenance or scheduled workstation patching defined in a change request.
*   Should not be used to monitor user productivity or activity.

5. Data Privacy
*   Technicians must not open or view files marked "Confidential" or "Personal" unless directly relevant to the technical issue.
*   If sensitive data is inadvertently displayed, the technician must look away or ask the user to close the window.
*   Session recording is enabled for audit purposes.`
    },
    {
        id: 105,
        name: 'Workstation Setup & Configuration Policy',
        categoryId: 'it-service-desk',
        content: `1. Purpose
To ensure all company-issued computers (laptops/desktops) meet security and performance standards before being deployed to users.

2. Standard Hardware
*   **Windows**: Dell Latitude / HP EliteBook (i7, 16GB RAM, 512GB SSD).
*   **Mac**: MacBook Pro 14" (M-Series Pro chip, 16GB RAM, 512GB SSD).
*   **Peripherals**: 24" Monitor, Docking Station, Wireless Keyboard/Mouse.

3. Standard Configuration
*   **OS**: Windows 11 Enterprise (latest 2 builds) or macOS Sonoma+.
*   **Domain Join**: All devices must be joined to Azure AD (Entra ID) and managed via Intune/Jamf.
*   **Disk Encryption**: BitLocker (Windows) or FileVault (Mac) must be enabled with keys escrowed to the cloud.
*   **Local Admin**: Users are **NOT** granted local administrator rights by default. Developer exceptions require VP approval.

4. Pre-Installed Software (Gold Image)
*   Microsoft 365 Apps for Enterprise
*   Google Chrome / Microsoft Edge
*   Endpoint Protection (EDR Agent)
*   VPN Client
*   Remote Management Agent

5. Asset Tagging
Every device must have a physical asset tag and be registered in the Asset Management System (Snipe-IT / ServiceNow) assigned to the specific user.`
    },
    {
        id: 106,
        name: 'Software Installation & Licensing Policy',
        categoryId: 'it-service-desk',
        content: `1. Overview
Unlicensed software poses legal risks, and unvetted software poses security risks. This policy dictates how software is selected, purchased, and installed.

2. Approved Software List (ASL)
*   Only software listed in the **Approved Software Catalog** may be installed.
*   Users can request new software via the Service Desk portal for review by the Security & Procurement teams.

3. Installation Rights
*   Users do not have rights to install applications.
*   Software is deployed via the Company Portal (Intune / Jamf Self Service).
*   For non-packaged apps, IT Support will perform the installation remotely.

4. Licensing Compliance
*   **Purchase**: All paid software must be purchased through valid corporate channels (Procurement). Personal credit cards should not be used for enterprise software.
*   **Audit**: IT performs monthly license reconciliation.
*   **True-Up**: If usage exceeds licenses, Procurement will purchase additional seats immediately.

5. Prohibited Software
*   BitTorrent / P2P clients.
*   Crypto miners.
*   Cracked / Keygen software.
*   Remote Access Trojans (RATs) or hacking tools (unless authorized for Red Team).

6. Non-Compliance
Standard users found bypassing installation restrictions or using pirated software will face disciplinary action.`
    },
    {
        id: 107,
        name: 'Antivirus & Endpoint Security Policy',
        categoryId: 'it-service-desk',
        content: `1. Purpose
To protect company devices and data from malware, ransomware, and other malicious threats using advanced endpoint detection and response (EDR) agents.

2. Mandate
*   Every company-owned device (Server, Laptop, Desktop) must have the approved corporate EDR agent (e.g., CrowdStrike, SentinelOne, Defender for Endpoint) installed and active at all times.
*   Tampering with or disabling the EDR agent is strictly prohibited and filters back to the SOC as a high-severity alert.

3. Definitions
*   **Malware**: Malicious software including viruses, worms, and spyware.
*   **Ransomware**: Malware that encrypts data and demands payment for release.

4. User Responsibilities
*   Do not ignore security pop-ups or alerts. Report them to the Service Desk immediately.
*   Do not attempt to whitelist files or bypass security blocks yourself.
*   Connect to the internet periodically to ensure signatures/sensors are updated.

5. Infection Protocols
If a device is suspected to be infected:
1.  **Disconnect**: Immediately disconnect from Wi-Fi and unplug network cables.
2.  **Report**: Call the Service Desk from a different device (phone).
3.  **Do Not Reboot**: Leave the device powered on (if possible) to preserve evidence for forensics, unless instructed otherwise.

6. USB / Removable Media
*   USB Mass Storage is blocked by default.
*   Requests to unblock USB for business cases require Manager & Security approval.`
    },
    {
        id: 108,
        name: 'BYOD (Bring Your Own Device) Policy',
        categoryId: 'it-service-desk',
        content: `1. Overview
<Company Name> permits employees to use personal devices (smartphones, tablets) for limited business activities (Email, Teams, MFA) under specific conditions.

2. Permitted Access
*   **Email & Calendar**: Outlook Mobile App.
*   **Communication**: Microsoft Teams / Slack.
*   **Authentication**: Authenticator Apps.
*   **Prohibited**: Direct access to internal file shares, critical databases, or source code from personal devices is not allowed.

3. Enrollment & MDM
To access company data, personal devices must enroll in the Mobile Application Management (MAM) policy (e.g., Intune App Protection).
*   **Containerization**: Company data is encrypted within the app.
*   **Privacy**: The company **CANNOT** see your personal photos, texts, or browsing history. We only manage the corporate apps.

4. Security Requirements
*   **PIN/Biometrics**: Device must be secured with a minimum 6-digit PIN or FaceID/TouchID.
*   **OS Version**: Device must run a supported OS (latest iOS or Android - 2 versions).
*   **Jailbreak/Root**: Jailbroken or rooted devices are blocked.

5. Lost or Stolen Devices
*   Users must report lost BYOD devices to IT immediately.
*   **Remote Wipe**: IT reserves the right to issue a "Selective Wipe," removing *only* company data (Email/Teams) from the device. We will not factory reset your personal device unless requested.`
    },
    {
        id: 109,
        name: 'Acceptable Use Policy (AUP)',
        categoryId: 'it-service-desk',
        content: `1. Overview
Infosec’s intention in publishing this Acceptable Use Policy is not to impose restrictions contrary to <Company Name>’s culture of openness, trust, and integrity. Instead, it aims to protect <Company Name>’s employees, partners, and the company itself from illegal or damaging actions—whether intentional or accidental.

All Internet/Intranet/Extranet-related systems—including computer equipment, software, operating systems, storage media, email, web browsing, and FTP—are the property of <Company Name> and must be used primarily for business purposes in service of the company, its clients, and customers.

Refer to Human Resources policies for additional guidance.

Effective security is a shared responsibility. Every employee and affiliate who handles information or uses information systems must understand and follow these guidelines.

2. Purpose
This policy defines the acceptable use of computing resources at <Company Name>. It exists to protect both employees and the organization from risks such as:

Virus and malware infections
Network or system compromise
Legal liability and regulatory violations

3. Scope
This policy applies to:

All information, electronic devices, and network resources used to conduct <Company Name> business
Devices owned, leased, or personally owned (when used for company purposes)
It covers all employees, contractors, consultants, temporary staff, and third-party personnel affiliated with <Company Name> or its subsidiaries.

All users must exercise sound judgment in accordance with company policies, standards, and applicable laws.

Exceptions require prior approval (see Section 5.2).

4. Policy
4.1 General Use and Ownership
4.1.1 Proprietary information stored on any device—whether company-owned, personal, or third-party—remains the sole property of <Company Name>. You must protect it per the Data Protection Standard.

4.1.2 Report loss, theft, or unauthorized disclosure of company data immediately.

4.1.3 Access or share company data only when authorized and necessary for your job duties.

4.1.4 Personal use of company systems must be reasonable and infrequent. Departments may issue specific guidelines; otherwise, consult your manager if uncertain.

4.1.5 Authorized personnel may monitor systems and network traffic at any time for security and maintenance (per the Audit Policy).

4.1.6 <Company Name> reserves the right to audit systems periodically to ensure compliance.

4.2 Security and Proprietary Information
4.2.1 All devices connecting to the internal network must comply with the Minimum Access Policy.

4.2.2 Passwords must follow the Password Policy. Sharing accounts or passwords is prohibited.

4.2.3 All devices must use a password-protected screensaver that activates within 10 minutes or less. Lock or log off when unattended.

4.2.4 Posts from a <Company Name> email address to newsgroups must include:

“Opinions expressed are my own and not necessarily those of <Company Name>.”
(Unless posted as part of official duties.)

4.2.5 Exercise extreme caution with email attachments from unknown senders—they may contain malware.

🔍 Crimeware: A type of malware used by cybercriminals to monetize infected systems (e.g., keyloggers, botnets for DDoS).
(Source: SANS Glossary)

4.3 Unacceptable Use
The following activities are prohibited, except when required for legitimate job functions (e.g., system administration).

No employee may use company resources for any activity illegal under local, state, federal, or international law.

4.3.1 System and Network Activities (Strictly Prohibited)
Copyright/trade secret violations (e.g., using unlicensed or “pirated” software).
Unauthorized copying/distribution of copyrighted material (music, images, books, software).
Accessing data, servers, or accounts outside business purposes, even with valid access.
Export control violations (e.g., exporting encryption tech without authorization).
Introducing malicious programs (viruses, worms, Trojan horses, email bombs).
Sharing your password or allowing others (including family) to use your account.
Transmitting content that violates sexual harassment or hostile workplace laws.
Making fraudulent offers from a company account.
Issuing unauthorized warranty statements.
Causing security breaches or disruptions, such as:
Accessing data not intended for you
Logging into unauthorized systems
Network sniffing, ping floods, packet spoofing, denial of service (DoS), forged routing
Performing port scanning or security scanning without prior notice to Infosec.
Intercepting network data not intended for your host (unless part of your job).
Circumventing authentication or security controls.
Deploying honeypots or honeynets on the company network.
Denying service to other users (e.g., DoS attacks).
Disabling or interfering with another user’s terminal session.
Disclosing employee information to external parties.
🔍 Definitions: 

Honeypot: A decoy system designed to attract and trap attackers.
Honeynet: A network of honeypots used for monitoring attacker behavior.
(Source: SANS Glossary)

4.3.2 Email and Communication Activities
When representing the company online, always clarify:

“Views are my own.”

Prohibited:
Sending unsolicited bulk email (spam).
Harassment via email, phone, or messaging (by language, frequency, or volume).
Forging email headers.
Soliciting replies to a third-party address to harass or collect responses.
Forwarding chain letters, Ponzi schemes, or pyramid schemes.
Using company systems to send spam on behalf of external services.
Newsgroup spam (posting identical non-business messages to many groups).
🔍 Spam: Unsolicited bulk electronic messages, typically sent for advertising or phishing.
(Source: SANS Glossary)

4.3.3 Blogging and Social Media
Limited, occasional blogging on company systems is allowed if:

Professional and responsible
Compliant with all policies
Not detrimental to <Company Name>
Does not interfere with work
⚠️ Subject to monitoring.

Never disclose confidential, proprietary, or trade secret information.

🔍 Proprietary Information: Information owned by an organization that is not publicly known and provides a competitive advantage.
(Source: SANS Glossary)

Do not post content that harms <Company Name>’s reputation or violates anti-harassment policies.

Do not attribute personal opinions to <Company Name>. Clearly state you are speaking as an individual.

Do not use company trademarks, logos, or intellectual property in personal blogs.

🔍 Blogging: Publishing regular entries of commentary, events, or other content on a website.
(Source: SANS Glossary)

5. Policy Compliance
5.1 Compliance Measurement
Verified via:

Business tool reports
Internal/external audits
Feedback mechanisms

5.2 Exceptions
Require advance written approval from the Infosec team.

5.3 Non-Compliance
May result in disciplinary action, up to and including termination.

6. Related Policies
Data Classification Policy
Data Protection Standard
Social Media Policy
Minimum Access Policy
Password Policy

7. Key Definitions (from SANS Glossary)
Term	Definition
Blogging	Publishing regular entries of commentary, descriptions of events, or other content on a website.
Honeypot	A decoy system designed to attract and trap attackers.
Honeynet	A network of honeypots used for monitoring attacker behavior.
Proprietary Information	Information owned by an organization that is not publicly known and provides a competitive advantage.
Spam	Unsolicited bulk electronic messages.
Crimeware	Malware used by cybercriminals to monetize infected systems (e.g., keyloggers, botnets).
Full glossary: SANS Security Glossary of Terms

8. Revision History
Date	Responsible	Change
June 2014	SANS Policy Team	Updated and converted to new format`
    },
    {
        id: 110,
        name: 'Incident Escalation Policy',
        categoryId: 'it-service-desk',
        content: `1. Purpose
This policy ensures that critical incidents are escalated to the appropriate level of management and technical expertise within specific timeframes to ensure prompt resolution.

2. Escalation Triggers
An incident must be escalated if:
*   **Time Breach**: The incident is approaching or has breached its SLA response/resolution time.
*   **Capability**: The L1/L2 technician lacks the access or skill to resolve the specific issue.
*   **Scope Increase**: The issue is discovered to affect more users than initially reported (e.g., localized issue becomes company-wide).
*   **VIP User**: The issue affects a C-Level executive or Director.

3. Escalation Tiers
*   **Tier 1 (Service Desk)**: Initial triage, basic troubleshooting, user account issues.
*   **Tier 2 (Desktop/Infra Support)**: Advanced hardware, software, server, and network issues.
*   **Tier 3 (Lead Engineers / Architects)**: Complex root cause analysis, major outages, code-level bugs.
*   **Vendor Support**: Product-specific bugs requiring manufacturer intervention (Microsoft, Cisco, etc.).

4. Major Incident Management (MIM)
For P1 (Critical) incidents, the **Major Incident Manager** must be notified immediately (call 24x7).
*   A "War Room" (Teams Bridge/Conference Call) will be established.
*   All relevant technical leads must join.
*   Communications to the business will be sent every 30 minutes until resolution.

5. Communication
*   Technicians MUST update the ticket before escalating.
*   "Blind Escalation" (assigning without notes) is strictly prohibited.
*   The escalating technician retains ownership of the user communication unless explicitly handed over.`
    },

    // End-User Computing (EUC) Team - 111-120
    {
        id: 111,
        name: 'Virtual Desktop Infrastructure (VDI) Policy',
        categoryId: 'euc-team',
        content: `1. Overview
Virtual Desktop Infrastructure (VDI) provides secure remote access to corporate desktops. This policy governs the use, performance standards, and security controls for VDI environments (Citrix / Azure Virtual Desktop).

2. Access & Authentication
*   Access to VDI requires Multi-Factor Authentication (MFA).
*   Users must connect only from authorized devices or secure web portals.
*   Non-corporate devices may be used but file transfer (copy/paste, drive mapping) from VDI to local PC is blocked.

3. Performance & Resources
*   **Session Timeout**: Idle sessions disconnect after 30 minutes; disconnected sessions log off after 2 hours.
*   **Profile Management**: User profiles (FSLogix) are limited to 30GB. Users should store data in OneDrive, not the Desktop.

4. Data Security
*   Screen capture protection is enabled to prevent screenshots of sensitive data.
*   Watermarking is active for external vendors sessions.
*   All VDI traffic is encrypted via TLS 1.2+.`
    },
    {
        id: 112,
        name: 'Workstation Patch Management Policy',
        categoryId: 'euc-team',
        content: `1. Purpose
To ensure all endpoints remain secure by applying operating system and third-party application updates in a timely manner.

2. Patching Schedule
*   **Critical Security Updates**: Deployed within 48 hours of release/validation.
*   **General OS Updates**: Deployed monthly (Patch Tuesday cycle).
*   **Third-Party Apps** (Chrome, Adobe, Zoom): Updated continuously via auto-update policies.

3. User Experience
*   Patches are downloaded in the background.
*   Users will receive a prompt if a reboot is required.
*   **Forced Reboot**: If the user ignores reboot prompts for 3 days, a reboot will be forced outside business hours (11 PM - 5 AM).

4. Compliance Target
95% of active fleet must be compliant with the latest security baseline within 14 days of release.`
    },
    {
        id: 113,
        name: 'Endpoint Hardware Lifecycle Policy',
        categoryId: 'euc-team',
        content: `1. Overview
Defines the standard lifecycle for end-user hardware to ensure productivity and minimize support costs.

2. Refresh Cycles
*   **Laptops (Windows/Mac)**: Replaced every 4 years.
*   **Desktops**: Replaced every 5 years.
*   **Monitors/Peripherals**: Replaced only upon failure.

3. Disposal (E-Waste)
*   Old devices must have their storage drives wiped (NIST 800-88 Purge) before disposal.
*   Disposal is handled by a certified e-waste recycling partner ensuring environmental compliance.

4. Buyback
Employees may request to purchase their depreciated device at fair market value upon refresh, provided it is fully wiped of company data.`
    },
    {
        id: 114,
        name: 'Standard Operating Environment (SOE) Policy',
        categoryId: 'euc-team',
        content: `1. Purpose
To maintain a consistent, secure, and supportable computing environment across the organization.

2. Golden Image / Autopilot
*   All devices are provisioned using Windows Autopilot or Apple Business Manager (ABM).
*   Manual logical imaging is deprecated.
*   **Base Configuration**: Clean OS + Management Agent + EDR + Office 365.

3. Customization
*   Users may change desktop wallpapers (must be work-appropriate).
*   Users cannot change core OS settings (DNS, Firewall, Registry) locked by Group Policy.

4. Browser Standards
*   **Default Browser**: Microsoft Edge (Chromium).
*   **Suppported**: Google Chrome.
*   **Legacy**: Internet Explorer is disabled.`
    },
    {
        id: 115,
        name: 'Mobile Device Management (MDM) Policy',
        categoryId: 'euc-team',
        content: `1. Overview
Governs the management of mobile devices accessing corporate data, balancing security with user privacy.

2. Corporate-Owned Devices
*   Fully managed by MDM (Intune/Jamf).
*   Installation of unapproved apps is blocked.
*   Location tracking is **disabled** unless the device is reported lost/stolen.

3. Personal Devices (BYOD)
*   Managed via MAM (Mobile Application Management).
*   Only corporate apps (Outlook, Teams) are managed.
*   **Policies Enforced**:
    *   PIN required to open app.
    *   Jailbreak detection.
    *   Block screen capture (Android).
    *   Block copy/paste to unmanaged apps.

4. Compliance
Devices non-compliant with security policies (e.g., outdated OS) will be blocked from accessing email/Teams.`
    },
    {
        id: 116,
        name: 'Admin Rights & Privilege Management Policy',
        categoryId: 'euc-team',
        content: `1. Principle of Least Privilege
Standard users operate as "Standard Users" without local administrator rights. This prevents 90% of malware from executing and accidental system breakage.

2. Exceptions (Just-In-Time)
*   Developers/Engineers needing temporary admin rights must use the **Privilege on Demand** tool.
*   Request reason must be logged.
*   Access is granted for 1 hour then automatically revoked.

3. Permanent Admin Rights
*   Extremely restricted. Requires CTO/CISO approval.
*   Devices with permanent admin rights are placed in a stricter monitoring group (High Risk).
*   User signs a "Privileged User Acceptable Use" agreement.`
    },
    {
        id: 117,
        name: 'Application Packaging & Deployment Policy',
        categoryId: 'euc-team',
        content: `1. Overview
Ensures software is delivered securely and reliably to endpoints without user intervention.

2. Packaging Standards
*   All applications must be packaged (MSI, Win32, PKG) for silent installation.
*   Installers must not reboot the machine without warning.
*   Shortcuts should be placed in the Start Menu, not the Desktop.

3. Deployment Rings
*   **Ring 0 (Test)**: IT EUC Team (Immediate).
*   **Ring 1 (Pilot)**: 5% of users (Day 1-2).
*   **Ring 2 (Broad)**: Company-wide (Day 3+).

4. Self-Service
Optional applications (Visio, Project, Notepad++) are made available in the Company Portal for users to install on demand.`
    },
    {
        id: 118,
        name: 'Printing & Imaging Policy',
        categoryId: 'euc-team',
        content: `1. Purpose
To reduce waste, secure sensitive documents, and manage printing costs.

2. Secure Print (Follow-Me)
*   Jobs are held in a virtual queue.
*   User must authenticate at the printer (Badge Tap / PIN) to release the job.
*   Unreleased jobs are deleted after 24 hours.

3. Defaults
*   **Duplex (Double-sided)**: On.
*   **Color**: Off (B&W default).
*   **Paper**: Recycled letter/A4.

4. Personal Printers
*   USB/Personal printers at desks are prohibited (except for approved confidentiality reasons).
*   Support is not provided for home printers.`
    },
    {
        id: 119,
        name: 'Removable Media & USB Control Policy',
        categoryId: 'euc-team',
        content: `1. Overview
Removable media is a common vector for data exfiltration and malware. This policy applies strictly to the EUC environment.

2. Default Stance
*   **Write Access**: Blocked for all USB Mass Storage devices.
*   **Read Access**: Allowed for read-only viewing (with real-time AV scanning).
*   **Execution**: Blocked (cannot run .exe from USB).

3. Exceptions
*   Encrypted USB drives provided by IT are allowed for specific roles.
*   Temporary write access can be requested via Service Desk for business data transfer (24h window).

4. CD/DVD
Optical drives are disabled or removed from hardware specifications.`
    },
    {
        id: 120,
        name: 'Endpoint Data Backup Policy',
        categoryId: 'euc-team',
        content: `1. Purpose
To ensure user data is backed up and recoverable in case of device failure, theft, or ransomware.

2. OneDrive Known Folder Move (KFM)
*   **Desktop**, **Documents**, and **Pictures** folders are automatically redirected to OneDrive for Business.
*   Files saved here are synced to the cloud in real-time.

3. Local Restrictions
*   Users are advised NOT to save critical data to C:\\ root or non-synced folders.
*   Data saved outside of KFM folders is **NOT** backed up.

4. Recovery
*   **Self-Service**: Users can restore previous versions of files (up to 30 days) via OneDrive recycle bin/version history.
*   **Ransomware**: IT can restore the entire OneDrive to a point-in-time snapshot.`
    }
];
