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
    },

    // Desktop & Hardware Support Team - 121-130
    {
        id: 121,
        name: 'Hardware Asset Management Policy',
        categoryId: 'desktop-support',
        content: `1. Overview
This policy strictly governs the tracking, assignment, and auditing of all physical IT assets (Laptops, Desktops, Monitors, Docks) to ensure financial accountability and security.

2. Asset Tagging
*   **Tagging**: All assets costing >$100 must receive a tamper-evident specific barcode asset tag upon arrival.
*   **Registration**: Assets must be entered into the Asset Management System (Snipe-IT) within 24 hours of receipt.
*   **Status Codes**:
    *   *Ready to Deploy*: Imaged and on the shelf.
    *   *Deployed*: Assigned to a user.
    *   *Repair*: Out for warranty service.
    *   *Pending Disposal*: Wiped and awaiting e-waste.

3. Assignment
*   Assets are assigned to a specific individual who signs an "Asset Acceptance Form" (digital signature).
*   Transfers between users (e.g., intra-department) MUST be processed by IT. Users cannot simply "hand over" laptops.

4. Audits
*   **Annual Wall-to-Wall**: 100% physical inventory verification.
*   **Rolling Audits**: Random spot checks of 5% of stock monthly.`
    },
    {
        id: 122,
        name: 'Peripheral Device Standard Policy',
        categoryId: 'desktop-support',
        content: `1. Purpose
To standardize the peripherals provided to employees, reducing compatibility issues and supply chain complexity.

2. Standard Kit
Every desk/employee receives:
*   **Monitor**: 24" (Standard) or 27" (Design/Eng). Dual monitors require Manager approval.
*   **Start**: Wireless Keyboard & Mouse Combo (Logitech).
*   **Audio**: Wired USB Headset (Jabra/Poly).
*   **Dock**: USB-C Universal Dock (supplying 65W+ PD).

3. Non-Standard Requests
*   Ergonomic keyboards/mice require a dedicated Workstation Assessment report from HR/HSE.
*   Webcams (4K) are reserved for C-Level Execs and Conference Rooms.

4. Consumables
Batteries, cables, and adapters are provided as needed but tracked as consumables (not asset tagged).`
    },
    {
        id: 123,
        name: 'Desktop Preventive Maintenance Policy',
        categoryId: 'desktop-support',
        content: `1. Overview
Proactive maintenance extends the life of hardware and prevents thermal throttling or failure.

2. Physical Cleaning
*   **Frequency**: Every 6 months for desktop PCs (towers).
*   **Procedure**: Compressed air dusting of fans/heatsinks, wiping of external chassis.
*   **Keyboards**: Sanitization and debris removal.

3. Logical Maintenance
*   **Disk Cleanup**: Automated scripts run weekly to clear temp files (>14 days).
*   **Defrag/Trim**: Managed automatically by the OS.
*   **Driver Updates**: Critical firmware/BIOS updates deployed via DCU (Dell Command Update) or equivalent during maintenance windows.`
    },
    {
        id: 124,
        name: 'E-Waste & Equipment Disposal Policy',
        categoryId: 'desktop-support',
        content: `1. Purpose
To ensure environmentally responsible disposal of IT equipment and absolute data destruction.

2. End-of-Life Criteria
*   **Age**: Laptop >4 years, Desktop >5 years.
*   **Failure**: Repair cost exceeds 50% of the asset's current book value.
*   **Obsolete**: Incompatible with current OS (e.g., no TPM 2.0).

3. Data Sanitization (Security)
*   **Hard Drives**: Must be securely wiped (NIST 800-88 Purge) or physically shredded.
*   **Certificates**: The disposal vendor must provide a Certificate of Destruction (CoD) for every serial number.

4. Logistics
*   E-Waste is stored in a locked "Disposal Cage" until pickup.
*   Pickup is scheduled quarterly with the certified R2/e-Stewards partner.`
    },
    {
        id: 125,
        name: 'Loaner Device Policy',
        categoryId: 'desktop-support',
        content: `1. Overview
Provides temporary hardware to users whose primary device is out for repair or for short-term travel needs.

2. Eligibility
*   Active employees with a valid business justification.
*   Contractors (if stipulated in contract).

3. Loan Period
*   **Standard**: Up to 14 days.
*   **Extended**: Requires VP approval.
*   **Late Return**: Users keeping loaners >30 days will have the departmental budget charged for the replacement cost.

4. Security
*   Loaners are wiped and reimaged immediately upon return.
*   Users must NOT save local data on loaners; assume it is gone upon return.`
    },
    {
        id: 126,
        name: 'Hardware Warranty & Repair Policy',
        categoryId: 'desktop-support',
        content: `1. Purpose
To define how hardware failures are handled to minimize downtime.

2. Standard Warranty
*   **Laptops/Desktops**: Bought with 3-Year ProSupport (Next Business Day Onsite).
*   **Servers**: 5-Year Same Day (4 Hour) Mission Critical.

3. Repair Process
1.  **Diagnosis**: IT verifies hardware failure (e.g., PSA diagnostics).
2.  **Log**: IT logs case with Vendor (Dell/HP/Apple).
3.  **Repair**:
    *   *Field Replaceable Unit (FRU)*: IT replaces onsite (e.g., RAM, SSD).
    *   *Motherboard/Screen*: Vendor technician dispatched.

4. Out of Warranty
If a critical device fails out of warranty, it is replaced, not repaired.`
    },
    {
        id: 127,
        name: 'Conference Room Equipment Policy',
        categoryId: 'desktop-support',
        content: `1. Overview
Ensures meeting room technology (Zoom Rooms / Microsoft Teams Rooms) is always functional for business collaboration.

2. Daily Checks
*   **Automated**: Rooms report "Healthy" status to the dashboard daily.
*   **Physical**: Desktop Support performs a physical check every Monday morning (Cablling, Touch Controller, TV Remotes).

3. "Ghost" Meetings
*   Room panels will auto-release a booking if no check-in occurs within 10 minutes of the start time.

4. Cables & Dongles
*   Every room is equipped with HDMI, USB-C, and MiniDP adapters.
*   Removal of these cables is theft; cables are secured with cable locks where possible.`
    },
    {
        id: 128,
        name: 'Hardware Procurement Standard Policy',
        categoryId: 'desktop-support',
        content: `1. Purpose
To centralize purchasing and prevent "Shadow IT" hardware buying.

2. Authorization
*   All IT hardware purchases MUST go through the IT Purchasing Team.
*   Expensed hardware (bought on personal card) will **NOT** be reimbursed by Finance without prior CIO approval.

3. Standardization
*   We buy specific models to maintain driver stability and image compatibility.
*   "Custom" gamer PCs or high-end non-standard gear requires a Business Case justification.

4. Stocking Strategy
*   IT maintains a "Buffer Stock" of 5 laptops for immediate deployment.`
    },
    {
        id: 129,
        name: 'Lost or Stolen Asset Policy',
        categoryId: 'desktop-support',
        content: `1. Immediate Action
In the event a company device is lost or stolen:
1.  **Report**: User must notify IT Security and their Manager within 2 hours.
2.  **Police Report**: If stolen, a police report must be filed within 24 hours.

2. IT Response
*   **Remote Wipe**: Device is immediately sent a kill signal (Wipe).
*   **Account Lock**: User's AD account password is reset immediately.

3. Replacement & Liability
*   **First Incident**: Company covers replacement cost.
*   **Negligence**: If the device was left in an unlocked car or unattended in public, the user/department may be liable.
*   **Repeat Offense**: Disciplinary action for repeat losses within 12 months.`
    },
    {
        id: 130,
        name: 'Secure Hardware Storage Policy',
        categoryId: 'desktop-support',
        content: `1. Purpose
To prevent theft of inventory stored onsite.

2. Secure Rooms
*   All new and unassigned hardware must be stored in the **Secure IT Storage Room**.
*   Access is restricted via Badge Reader to IT Staff only.
*   Logs of entry/exit are reviewed monthly.

3. Desk Storage
*   Laptops/iPads must NOT be left on desks overnight.
*   They must be locked in a drawer or taken home.

4. Transit
*   When shipping hardware between offices, use trackable, insured courier services (FedEx/DHL). Never use regular mail.`
    },

    // Server Administration Team - 131-140
    {
        id: 131,
        name: 'Server OS Hardening Policy',
        categoryId: 'server-admin',
        content: `1. Purpose
To ensure all servers (Windows/Linux) are configured securely to minimize the attack surface.

2. Standards
*   **Baselines**: All servers must adhere to the CIS (Center for Internet Security) Benchmark Level 1 standards.
*   **Services**: Only required services/daemons should be running. Unused roles (e.g., Print Spooler on a Web Server) must be disabled.
*   **Protocols**: Legacy protocols (SMBv1, TLS 1.0/1.1, Telnet, FTP) must be disabled.

3. Configuration Management
*   Hardening settings are applied via Group Policy (Windows) or Ansible/Puppet (Linux).
*   Configuration drift must be monitored and remediated within 7 days.`
    },
    {
        id: 132,
        name: 'Server Patch Management Policy',
        categoryId: 'server-admin',
        content: `1. Overview
Defines the schedule and procedure for applying security updates to server infrastructure.

2. Patch Windows
*   **Production**: Patched monthly during the 3rd weekend (Saturday 2 AM - 6 AM).
*   **Dev/Test**: Patched monthly during the 1st week (Weekday nights).
*   **Emergency**: Critical 0-day vulnerabilities (CVSS > 9.0) are patched within 24 hours, regardless of window.

3. Testing
*   Patches must be deployed to the "Canary" group (Test) at least 7 days before Production deployment.
*   Snapshots/Backups must be taken before applying patches to Production.

4. Reboot Handling
*   Servers requiring a reboot will be restarted during the maintenance window. Application owners must be notified 24h in advance.`
    },
    {
        id: 133,
        name: 'Privileged Access (Root/Admin) Policy',
        categoryId: 'server-admin',
        content: `1. Purpose
To control and monitor high-level access to server operating systems.

2. No Direct Root/Administrator
*   **Logins**: Direct login as 'root' or 'Administrator' is prohibited.
*   **Escalation**: Administrators must log in with their named account and secure elevation (sudo / "Run as Admin").

3. Jump Hosts / Bastions
*   Management access (RDP/SSH) to Production servers is ONLY permitted from the secure Management Subnet (Jump Host).
*   Direct access from user workstations is blocked by firewalls.

4. MFA
*   Multi-Factor Authentication is enforced for all RDP/SSH sessions to Jump Hosts.`
    },
    {
        id: 134,
        name: 'Server Naming & Tagging Policy',
        categoryId: 'server-admin',
        content: `1. Protocol
Consistent naming is critical for automation and incident response.

2. Naming Convention
Format: \`[LOC][ENV][ROLE][###]\`
*   **LOC**: Location code (e.g., AWS, NYC, LON).
*   **ENV**: Environment (P=Prod, D=Dev, S=Staging).
*   **ROLE**: Function (WEB, DB, APP, DC).
*   **###**: Sequence (001, 002).
*   *Example*: \`NYCPWEB001\` (New York, Prod, Web Server, 01).

3. Cloud Tagging
All cloud instances must have the following tags:
*   \`Owner\` (Email)
*   \`CostCenter\` (Code)
*   \`Environment\` (Prod/Dev)
*   \`DataClassification\` (High/Med/Low)`
    },
    {
        id: 135,
        name: 'Service Account Security Policy',
        categoryId: 'server-admin',
        content: `1. Overview
Service accounts are non-human accounts used by applications to run services.

2. Restrictions
*   **Interactive Login**: Must be set to "Deny log on locally" and "Deny log on through RDP".
*   **Least Privilege**: Must NEVER be Domain Admins. Grant only specific permissions (e.g., Folder Modify, Service Start).

3. Password Management
*   Passwords must be 20+ characters random.
*   Rotation: Managed Service Accounts (gMSA) should be used where possible (auto-rotation).
*   If manual, passwords rotate annually.`
    },
    {
        id: 136,
        name: 'Remote Administration Policy',
        categoryId: 'server-admin',
        content: `1. Purpose
To secure remote management channels.

2. Windows (RDP)
*   Port 3389 must be closed to the internet.
*   NLA (Network Level Authentication) is required.
*   Session timeout: 15 minutes of inactivity.

3. Linux (SSH)
*   Port 22 restricted to management and VPN subnets.
*   **Root Login**: \`PermitRootLogin no\`.
*   **Auth**: Public Key Authentication ONLY. Password auth disabled (\`PasswordAuthentication no\`).`
    },
    {
        id: 137,
        name: 'Server Backup & Retention Policy',
        categoryId: 'server-admin',
        content: `1. RPO & RTO
*   **RPO (Recovery Point Objective)**: Max 24 hours data loss (Daily Backups).
*   **RTO (Recovery Time Objective)**: Assessment critical servers restored within 4 hours.

2. Schedules
*   **Daily**: Incremental backup (kept for 30 days).
*   **Weekly**: Full backup (kept for 3 months).
*   **Monthly**: Full backup (kept for 1 year).

3. Immutability
*   Backup repositories must be immutable (Write-Once-Read-Many) to prevent ransomware modification.`
    },
    {
        id: 138,
        name: 'Log Retention & Monitoring Policy',
        categoryId: 'server-admin',
        content: `1. Purpose
To ensure forensic evidence is preserved and security events are detected.

2. Forwarding
*   All servers must forward OS logs (Security, System, Auth) to the central Syslog/SIEM collector immediately.
*   Local logs must not be the only copy.

3. Event Types
*   **Must Log**: Failed logins, Successful logins, Sudo usage, Service crashes, Firewall blocks.

4. Retention
*   Online (Searchable): 90 days.
*   Archive (Cold): 1 year.`
    },
    {
        id: 139,
        name: 'Server Decommissioning Policy',
        categoryId: 'server-admin',
        content: `1. Overview
Ensures retired servers do not become security liabilities.

2. Process
1.  **Backup**: Final full backup taken.
2.  **DNS/AD**: Remove DNS records and Computer Object from AD.
3.  **Monitoring**: Remove from monitoring system to prevent false alerts.
4.  **Sanatization**:
    *   *Virtual*: Delete VM disk files.
    *   *Physical*: Warrant wiping of local disks (DBAN/NIST Purge).

3. Sign-off
Decommissioning ticket requires sign-off from the Application Owner confirming data is no longer needed.`
    },
    {
        id: 140,
        name: 'Application Server Security Policy',
        categoryId: 'server-admin',
        content: `1. Web Servers (IIS/Nginx/Apache)
*   Remove default pages and "Server" header banners.
*   Disable directory browsing.
*   Run application pools with low-privileged service accounts (AppPoolIdentity), not LocalSystem.

2. Database Servers (SQL/Oracle)
*   Listen only on internal IPs.
*   Encrypt data at rest (TDE).
*   Separate Data and Log drives for performance and recovery.

3. File Servers
*   Access Based Enumeration (ABE) enabled (users don't see folders they can't access).
*   Shadow Copies enabled (VSS) for user quick-restore (twice daily).`
    },

    // Virtualization Team - 141-150
    {
        id: 141,
        name: 'VM Provisioning & Approval Policy',
        categoryId: 'virtualization',
        content: `1. Purpose
To control resource usage and prevent "VM Sprawl" by ensuring all virtual machines are authorized and sized correctly.

2. Request Process
*   **Standard VM**: <4 vCPU, 16GB RAM. Approver: Team Lead.
*   **Large VM**: >8 vCPU, 32GB RAM. Approver: Infrastructure Manager + Cost Center Owner.
*   **Urgency**: Standard SLA for provisioning is 2 business days.

3. Sizing Guidelines
*   Start small (1 vCPU, 4GB RAM) and scale up based on monitoring data.
*   "Right-Sizing" reviews occur quarterly to reclaim unused resources.`
    },
    {
        id: 142,
        name: 'Hypervisor Security Hardening Policy',
        categoryId: 'virtualization',
        content: `1. Overview
Secure configuration of the virtualization layer (vSphere ESXi / Hyper-V) is critical as it hosts all other servers.

2. Management Interface
*   **Isolation**: Management traffic (vCenter/SSH) must be on a dedicated, non-routable VLAN.
*   **Lockdown Mode**: ESXi hosts must be in "Strict Lockdown Mode" to prevent direct shell access.
*   **Access**: Administrators must authenticate via AD (named accounts), not shared 'root' passwords.

3. Updates
*   Critical hypervisor security patches must be applied within 14 days of release.`
    },
    {
        id: 143,
        name: 'Virtual Machine Snapshot Policy',
        categoryId: 'virtualization',
        content: `1. Risks
Snapshots are NOT backups. Long-running snapshots degrade disk performance and can freeze the VM during consolidation.

2. Rules
*   **Duration**: Snapshots must not exist for more than 72 hours.
*   **Purpose**: Only for pre-change temporary rollback (e.g. before patching).
*   **Cleanup**: Automated scripts will alert on snapshots older than 3 days and auto-delete snapshots older than 7 days.`
    },
    {
        id: 144,
        name: 'Resource Allocation & Oversubscription Policy',
        categoryId: 'virtualization',
        content: `1. Purpose
To maximize hardware utilization without compromising performance reliability.

2. Contention Ratios
*   **vCPU**: Max 4:1 (Virtual CPUs to Physical Cores) for General Purpose. 1:1 for SQL/Latency Sensitive.
*   **RAM**: Do NOT overcommit RAM (0% ballooning target) for Production clusters.
*   **Storage**: Thin provisioning is permitted but datastores must trigger alerts at 80% capacity.`
    },
    {
        id: 145,
        name: 'Guest OS Isolation Policy',
        categoryId: 'virtualization',
        content: `1. Network Segmentation
*   VMs of different security zones (e.g., DMZ vs. Internal) must be on separate VLANs.
*   Virtual Switches (vSwitch) should not bridge secure and insecure networks.

2. Tools
*   All VMs must have **VMware Tools** (or Hyper-V Integration Services) installed and running to ensure proper driver performance and heartbeat monitoring.`
    },
    {
        id: 146,
        name: 'Virtual Machine Lifecycle Policy',
        categoryId: 'virtualization',
        content: `1. Overview
Managing the lifecycle from creation to decommissioning to free up compute resources.

2. Expiry dates
*   Dev/Test VMs must have an "Expiry Date" set upon creation (Max 90 days). Extension requires renewal.
*   **Zombie VMs**: VMs powered off for >30 days will be archived to cold storage and deleted after 60 days.`
    },
    {
        id: 147,
        name: 'High Availability (HA) & DRS Policy',
        categoryId: 'virtualization',
        content: `1. Redundancy
*   **Admission Control**: Clusters must reserve 25% CPU/RAM failover capacity (N+1 redundancy).
*   If a host fails, VMs must auto-restart on remaining hosts.

2. DRS (Distributed Resource Scheduler)
*   **Automation Level**: Fully Automated.
*   **Migration Threshold**: Level 3 (Balanced). Prevents unnecessary "ping-pong" of VMs between hosts.`
    },
    {
        id: 148,
        name: 'Golden Image & Template Policy',
        categoryId: 'virtualization',
        content: `1. Purpose
To ensure consistent, secure, and malware-free deployments.

2. Maintenance
*   Templates are updated monthly (Patch Tuesday).
*   **Scanning**: Offline templates must be scanned for malware before being powered on for updates.
*   **Content**: Must include standard agents (EDR, Monitoring, Splunk) but reset identifiers (SIDs/GUIDs).`
    },
    {
        id: 149,
        name: 'P2V (Physical to Virtual) Migration Policy',
        categoryId: 'virtualization',
        content: `1. Criteria
Not all physical servers are suitable for virtualization.

2. Assessment
*   **Prohibited**: Hardware dongles, high-io legacy fax cards, or ultra-high IOPS databases requiring bare metal.
*   **Cleanup**: Before P2V, remove all hardware-specific drivers (OEM agents, RAID tools).
*   **Testing**: Converted VMs must pass a performance baseline test before the physical box is decommissioned.`
    },
    {
        id: 150,
        name: 'Virtual Network Security Policy',
        categoryId: 'virtualization',
        content: `1. Promiscuous Mode
*   **Rejected**: Promiscuous mode, MAC Address Changes, and Forged Transmits must be set to **Reject** on all standard vSwitches to prevent packet sniffing.

2. Distributed Firewall
*   East-West traffic between VMs in the same subnet should be micro-segmented using NSX or OS firewalls where feasible.`
    },

    // Network Operations Team (NOC) - 151-160
    {
        id: 151,
        name: 'Network Monitoring & Alerting Policy',
        categoryId: 'noc',
        content: `1. Purpose
To ensure continuous visibility into network performance and availability.

2. Monitoring Scope
*   **Devices**: All routers, switches, firewalls, load balancers, and UPS units must be monitored via SNMPv3.
*   **Links**: All WAN circuits and critical uplinks must be monitored for utilization, latency, and packet loss.
*   **Thresholds**:
    *   *Warning*: 75% Utilization or 50ms Latency.
    *   *Critical*: 90% Utilization, 1% Packet Loss, or Device Down.

3. Alerting
*   **P1/Critical**: SMS/Call to On-Call Engineer (24x7).
*   **P2/Warning**: Email/Ticket to NOC Queue.`
    },
    {
        id: 152,
        name: 'Network Device Access (TACACS+) Policy',
        categoryId: 'noc',
        content: `1. Overview
Centralized Authentication, Authorization, and Accounting (AAA) for network gear.

2. Authentication
*   **Method**: All devices must auth against Cisco ISE / Aruba ClearPass (TACACS+).
*   **Fallback**: A local 'break-glass' account is permitted but the password must be stored in the physical safe and rotated after use.

3. Authorization
*   **NOC Level 1**: Read-Only access (show commands).
*   **NOC Level 2**: Interface configuration (shut/no shut, VLANs).
*   **Engineers**: Full Admin access.

4. Accounting
*   Every command entered into the CLI is logged to a remote syslog server for audit trails.`
    },
    {
        id: 153,
        name: 'Network Change Management Policy',
        categoryId: 'noc',
        content: `1. Purpose
To minimize outages caused by human error during configuration changes.

2. Change Windows
*   **Standard**: Tuesday/Thursday 02:00 - 05:00 Local Time.
*   **Freeze**: No changes allowed during 'End of Month' financial close or 'Black Friday' periods.

3. Approval
*   **Standard Change**: Pre-approved frequent tasks (e.g., Port Activation).
*   **Normal Change**: Requires Peer Review of the implementation plan + CAB approval.
*   **Emergency Change**: Requires VP Approval (post-incident).

4. Rollback
*   Every change plan MUST have a tested rollback script ready before execution begins.`
    },
    {
        id: 154,
        name: 'Configuration Backup & Compliance Policy',
        categoryId: 'noc',
        content: `1. Backup Schedule
*   **Frequency**: Automated daily backups of running-config from all network devices (e.g., via SolarWinds / Oxide).
*   **Triggered**: Immediate backup after any "write mem" or commit.

2. Compliance Checks
*   Automated checking against Golden Config (e.g., verifying 'no ip http server', 'service password-encryption').
*   Any unauthorized config change (Drift) triggers a Critical P1 alert.`
    },
    {
        id: 155,
        name: 'DDoS Mitigation Policy',
        categoryId: 'noc',
        content: `1. Overview
Procedures to detect and mitigate Volumetric and Application Layer Denial of Service attacks.

2. Detection
*   NetFlow/sFlow analysis detects traffic anomalies (spikes >200% baseline).

3. Mitigation Strategies
*   **Tier 1 (Automated)**: On-premise scrubbing (Null-routing specific target IPs).
*   **Tier 2 (Cloud)**: BGP Redirection to Cloud Scrubber (e.g., Akamai / Cloudflare) for attacks >10Gbps.
*   **Tier 3 (Block)**: Geo-blocking regions if attack is localized.`
    },
    {
        id: 156,
        name: 'Shift Handover & Operations Policy',
        categoryId: 'noc',
        content: `1. Purpose
To ensure continuity of operations between 24x7 shifts.

2. Handover Protocol
*   **Timing**: 15-minute overlap between shifts.
*   **Content**:
    *   Active P1/P2 Incidents.
    *   Scheduled Changes for the upcoming shift.
    *   Weather/External risks.
*   **Log**: Formal entry in the "Daily Operations Log" signed by outgoing and incoming leads.

3. Fatigue Management
*   NOC staff are restricted to maximum 12-hour shifts and must have 10 hours break between shifts.`
    },
    {
        id: 157,
        name: 'Network Documentation & Topology Policy',
        categoryId: 'noc',
        content: `1. Standard
An undocumented network is unmanageable.

2. Requirements
*   **L1 Physical Map**: Rack layouts, cabling matrix, patch panel ports.
*   **L2 Logical Map**: VLANs, Spanning Tree roots, Trunks.
*   **L3 logical Map**: IP Subnets, Routing Protocols (OSPF Areas / BGP Neighbors).

3. Updates
*   Diagrams (Visio/Lucidchart) must be marked "As-Built" and updated within 5 business days of any physical change.`
    },
    {
        id: 158,
        name: 'NTP & Time Synchronization Policy',
        categoryId: 'noc',
        content: `1. Importance
Accurate time is essential for log correlation and authentication (Kerberos).

2. Hierarchy
*   **Stratum 1**: Core Switches sync with Public GPS/Atomic clocks (check.pool.ntp.org).
*   **Stratum 2**: Distribution/Access switches sync with Core Switches.
*   **Timezone**: All logs must be in **UTC** to avoid confusion across global sites.`
    },
    {
        id: 159,
        name: 'Firmware & Lifecycle Management Policy',
        categoryId: 'noc',
        content: `1. Lifecycle
*   **EoE (End of Engineering)**: No new features? Plan refresh.
*   **EoL (End of Life)**: No support? Device must be replaced immediately.

2. Firmware Standards
*   **Standardization**: All devices of the same model must run the exact same "Golden" firmware version recommended by the vendor.
*   **Validation**: New firmware must run in the Lab for 2 weeks before Production rollout.`
    },
    {
        id: 160,
        name: 'Critical Spares Policy',
        categoryId: 'noc',
        content: `1. Purpose
To minimize downtime due to hardware failure when vendor SLA (4-hour) is insufficient for remote sites.

2. Inventory
*   NOC maintains a "Cold Spare" inventory of critical components:
    *   1x Core Router Supervisor Engine.
    *   2x SFP+ Transceivers (10G/40G).
    *   5x Power Supply Units (Cisco Common PSU).

3. Consumables
*   Patch cables (Fiber/Copper) and Console cables must be fully stocked at all times.`
    },

    // Network Engineering Team - 161-170
    {
        id: 161,
        name: 'Network Architecture Design Policy',
        categoryId: 'network-eng',
        content: `1. Purpose
To ensure scalable, resilient, and manageable network infrastructure.

2. Design Model
*   **Hierarchical Design**: Networks must follow the Core -> Distribution -> Access layer model.
*   **Redundancy**: No Single Point of Failure (SPOF). All critical nodes must have dual power supplies, dual supervisors (where applicable), and dual uplinks to separate upstream devices.

3. Capacity Planning
*   Links must be upgraded when peak daily utilization exceeds 70% for 5 consecutive days.
*   Hardware resources (TCAM, memory) must not exceed 80% usage.`
    },
    {
        id: 162,
        name: 'IP Addressing & Subnetting Policy',
        categoryId: 'network-eng',
        content: `1. Guidelines
Structured IP allocation prevents addressing conflicts and enables efficient routing.

2. Private Addressing
*   Use RFC1918 address space (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16).
*   **VLAN Alignment**: Subnets should align with VLAN IDs (e.g., VLAN 10 = 10.1.10.0/24) where possible for readability.

3. Allocation
*   **Loopbacks**: /32 (Host).
*   **Point-to-Point**: /30 or /31.
*   **User Subnets**: /24 (Standard) or /23 (High Density).
*   DHCP Pools must leave the first 10 and last 10 IPs static for gateway/infrastructure.`
    },
    {
        id: 163,
        name: 'Routing Protocol Standards',
        categoryId: 'network-eng',
        content: `1. Interior Gateway Protocol (IGP)
*   **Standard**: OSPFv3 is the standard IGP.
*   **Authentication**: MD5/SHA authentication must be enabled on all adjacencies.
*   **Passive Interfaces**: Enabled by default; only active on link-facing ports.

2. Exterior Gateway Protocol (EGP)
*   **Standard**: BGP-4.
*   **Filters**: Route maps must be used to filter inbound and outbound prefixes. Bogon filtering is mandatory on internet edges.
*   **Security**: eBGP Multihop limited to required hops.`
    },
    {
        id: 164,
        name: 'VLAN & Switching Standards',
        categoryId: 'network-eng',
        content: `1. Layer 2 Boundaries
*   Spanning Tree (RPVST+ or MST) must be enabled to prevent loops.
*   **BPDU Guard**: Must be enabled on all access ports to shut down unauthorized switches.

2. Segmentation
*   **User/Voice Separation**: Phones and PC data must occupy separate Voice and Data VLANs.
*   **Management**: A dedicated Management VLAN is required; never use VLAN 1 for management.
*   **Pruning**: VTP is disabled. Allowed VLANs must be explicitly defined on Trunks.`
    },
    {
        id: 165,
        name: 'Wireless (Wi-Fi) Network Policy',
        categoryId: 'network-eng',
        content: `1. SSIDs
*   **Corporate**: WPA3 Enterprise (802.1x Auth).
*   **Guest**: WPA3 Personal (PSK) with captive portal. Isolated from Internal LAN.
*   **IoT**: MPSK (Multi-Pre-Shared Key) or MAC-Auth for non-802.1x devices.

2. RF Design
*   **Coverage**: -65 dBm minimum signal strength in working areas.
*   **Roaming**: 20% cell overlap to ensure seamless handoff.
*   **Rogue Detection**: WIPS (Wireless Intrusion Prevention) active to suppress unauthorized APs.`
    },
    {
        id: 166,
        name: 'WAN & SD-WAN Policy',
        categoryId: 'network-eng',
        content: `1. Connectivity
*   **Encryption**: All traffic traversing public transport (Internet/MPLS) must be encrypted (IPsec / DTLS).
*   **Link Selection**: Application-Aware Routing prefers Low Latency links for Voice and High Bandwidth links for Bulk Data.

2. Failover
*   Sites must have diverse transport paths (e.g., Fiber Primary + 5G/LTE Secondary).
*   Failover testing occurs bi-annually.`
    },
    {
        id: 167,
        name: 'VPN & Remote Access Engineering',
        categoryId: 'network-eng',
        content: `1. Site-to-Site VPN
*   **Phase 1**: AES-256, SHA-256, DH Group 14+.
*   **Phase 2**: AES-256, SHA-256 (GCM preferred).
*   **PFS**: Perfect Forward Secrecy enabled.

2. Client VPN
*   **Protocol**: SSL/TLS (DTLS preferred for performance).
*   **Split Tunneling**: Only corporate subnets routed over VPN; Internet traffic breaks out locally (unless Full Tunnel required for security).`
    },
    {
        id: 168,
        name: 'Network Security Zones (Firewalling)',
        categoryId: 'network-eng',
        content: `1. Zoning Model
Traffic flows are governed by zones:
*   **Trusted**: Internal LAN, Data Center.
*   **Untrusted**: Internet, Guest Wi-Fi.
*   **DMZ**: Public-facing services.

2. Default Stance
*   **Default Deny**: Implicit 'Deny All' at the end of every ACL.
*   **Least Privilege**: Access granted only on specific Ports/IPs. "Any/Any" rules are strictly prohibited.

3. Rule Review
*   Shadowed or unused rules must be purged quarterly.`
    },
    {
        id: 169,
        name: 'Quality of Service (QoS) Policy',
        categoryId: 'network-eng',
        content: `1. Traffic Classification
*   **Voice (VoIP)**: EF (Expedited Forwarding) - Highest Priority.
*   **Video**: AF41 - High Priority.
*   **Signaling**: CS3 - Medium Priority.
*   **Best Effort**: Default (Web, Email).
*   **Scavenger**: Less than Best Effort (YouTube, Spotify).

2. Marking
*   Traffic should be marked at the edge (Access Layer) and trusted throughout the Core.
*   Voice traffic guaranteed 10-15% of bandwidth.`
    },
    {
        id: 170,
        name: 'Network Device Hardening Policy',
        categoryId: 'network-eng',
        content: `1. Control Plane Protection
*   **CoPP (Control Plane Policing)**: Active to prevent CPU exhaustion from DoS.
*   **Management ACL**: Restrict SSH/SNMP access to specific Admin Subnets only.

2. Interface Security
*   **Port Security**: Limit max MAC addresses per port to 2 (Phone + PC).
*   **Unused Ports**: Admin shut and assigned to a "Blackhole" VLAN.
*   **Dynamic ARP Inspection (DAI)**: Enabled to prevent ARP Poisoning.`
    },

    // Cloud Infrastructure Team - 171-180
    {
        id: 171,
        name: 'Cloud Resource Tagging Policy',
        categoryId: 'cloud-infra',
        content: `1. Purpose
To ensure accurate cost allocation, ownership tracking, and automation across cloud environments (AWS/Azure/GCP).

2. Mandatory Tags
Every resource (EC2, S3, RDS, VNet) must have the following tags:
*   **CostCenter**: Billing code (e.g., CC-102).
*   **Owner**: Email of the responsible individual/team.
*   **Environment**: \`Prod\`, \`Staging\`, \`Dev\`, or \`Sandbox\`.
*   **Application**: Name of the service/app supported.
*   **DataClass**: \`Public\`, \`Internal\`, \`Confidential\`, or \`Restricted\`.

3. Enforcement
*   **Auto-Remediation**: Resources created without these tags will be automatically terminated by the Cloud Governance Bot (Cloud Custodian) after 2 hours warning.`
    },
    {
        id: 172,
        name: 'Cloud IAM & Least Privilege Policy',
        categoryId: 'cloud-infra',
        content: `1. Identity Management
*   **No Root Access**: The 'Root' or 'Organization Owner' account details must be vaulted physically and never used for daily tasks.
*   **Role-Based Access (RBAC)**: Users assume temporary Roles (e.g., \`AdminRole\`, \`ViewRole\`) via Federation (SSO). Long-lived IAM Users with Access Keys are prohibited.

2. Access Keys
*   **Rotation**: Service Accounts requiring Access Keys must rotate them every 90 days.
*   **Storage**: Keys must NEVER be committed to code repositories (Git). Use Secrets Manager/Key Vault.`
    },
    {
        id: 173,
        name: 'Storage Bucket Security Policy',
        categoryId: 'cloud-infra',
        content: `1. Public Access
*   **Block Public Access**: S3 Buckets / Azure Blobs must have "Block All Public Access" enabled at the account level.
*   **Exceptions**: Static website hosting buckets hosting public assets, approved by Security.

2. Encryption
*   **At Rest**: All buckets must have Default Encryption enabled (SSE-S3 or KMS).
*   **In Transit**: Bucket Policies must enforce \`aws:SecureTransport\` (HTTPS only).

3. Lifecycle
*   Object Versioning should be enabled for critical data to protect against accidental deletion.`
    },
    {
        id: 174,
        name: 'Compute Instance Hardening Policy',
        categoryId: 'cloud-infra',
        content: `1. Golden Images (AMIs)
*   Instances must be launched from hardened, approved AMIs built by the Cloud Team.
*   Marketplace AMIs must be vetted before use.

2. Networking
*   **No SSH/RDP to 0.0.0.0/0**: Management ports must be restricted to the VPN/Bastion SG or managed via Session Manager (SSM).
*   **IMDSv2**: Instances must require Token-Based metadata access to prevent SSRF attacks.

3. Egress
*   Production instances should not have public IPs unless acting as a load balancer/gateway.`
    },
    {
        id: 175,
        name: 'Cloud Cost Management Policy',
        categoryId: 'cloud-infra',
        content: `1. Budgets
*   Every project/account must have a monthly budget defined.
*   **Alerts**: Alerts are sent to owners at 50%, 80%, and 100% of budget consumption.

2. Waste Reduction
*   **Dev/Test Hours**: Non-prod resources must be scheduled to stop outside business hours (e.g., 7 PM - 7 AM).
*   **Orphaned Resources**: Unattached EBS volumes and Elastic IPs must be deleted weekly.`
    },
    {
        id: 176,
        name: 'Infrastructure as Code (IaC) Policy',
        categoryId: 'cloud-infra',
        content: `1. Standard
Manual "ClickOps" creation of Production resources is prohibited.

2. Tooling
*   **Approved**: Terraform, AWS CloudFormation, Azure Bicep.
*   **State Management**: State files must be stored in a remote backend (S3/Blob) with Locking (DynamoDB) and Encryption.

3. Review
*   IaC code changes must go through a Pull Request process with automated linting (tflint/checkov) before apply.`
    },
    {
        id: 177,
        name: 'Network Security Groups (SG) Policy',
        categoryId: 'cloud-infra',
        content: `1. Principles
Security Groups / NSGs act as the instance-level firewall and are the primary line of defense.

2. Rules
*   **Specific Sources**: Inbound rules must reference specific subnets or other SGs, not broad IP ranges.
*   **Least Service**: Only open ports required operationaly (e.g., port 443, not 0-65535).
*   **Naming**: SGs must be named descriptively (e.g., \`sg-app-web-prod\`).`
    },
    {
        id: 178,
        name: 'Container & Kubernetes Security Policy',
        categoryId: 'cloud-infra',
        content: `1. Images
*   **Sources**: Only pull images from the private Trusted Registry (ECR/ACR). Docker Hub direct pulls are blocked in Prod.
*   **Scanning**: All images are scanned for vulnerabilities on push. High/Critical CVEs block deployment.

2. Runtime
*   **Privileged Mode**: Pods must NOT run as \`privileged\` or \`root\`.
*   **Secrets**: Secrets must be mounted as volumes or injected, never stored in environment variables.`
    },
    {
        id: 179,
        name: 'Cloud Logging & Monitoring Policy',
        categoryId: 'cloud-infra',
        content: `1. Audit Trails
*   **CloudTrail**: Must be enabled in all regions (including unused ones) and send logs to a centralized immutable S3 bucket.
*   **VPC Flow Logs**: Enabled for all Production VPCs for network traffic analysis.

2. Monitoring
*   **CloudWatch/Azure Monitor**: Detailed monitoring enabled for critical resources.
*   **Retention**: Logs must be retained for 1 year (Cold Storage) for compliance.`
    },
    {
        id: 180,
        name: 'Multi-Cloud Connectivity Policy',
        categoryId: 'cloud-infra',
        content: `1. Direct Connect / ExpressRoute
*   Private dedicated circuits are preferred for high-bandwidth hybrid connectivity.
*   Circuits must be redundant (Active/Active or Active/Passive) across different physical providers.

2. VPN
*   VPNs are used as backup or for smaller sites.
*   Must utilize dynamic routing (BGP) to handle failover automatically.`
    },

    // Data Center Operations Team - 181-190
    {
        id: 181,
        name: 'Data Center Physical Access Policy',
        categoryId: 'datacenter',
        content: `1. Purpose
To ensure strict physical security of the facility housing mission-critical infrastructure.

2. Access Control
*   **Multi-Factor**: Access requires Badge + Biometric (Hand/Eye) + PIN.
*   **Access List**: Only authorized DC Staff and approved Engineers are on the permanent access list.
*   **Review**: The access list is audited monthly by the Security Director.

3. Monitoring
*   **CCTV**: 100% video coverage of all aisles and entry points. Recordings retained for 90 days.
*   **Anti-Tailgating**: Mantraps are installed at all entrances.`
    },
    {
        id: 182,
        name: 'Visitor Management Policy',
        categoryId: 'datacenter',
        content: `1. Procedure
Visitors (Vendors, Auditors, Non-DC Staff) pose a risk and must be managed.

2. Entry Requirements
*   **Pre-Approval**: Request submitted 24h in advance via Ticket.
*   **Identification**: Government-issued Photo ID checked at reception.
*   **Badging**: Visitor badge usually visibly worn at all times.

3. Escort
*   **Strict Escort**: Visitors must be escorted by authorized DC staff **at all times**. They are never left alone in server rows.
*   **Logs**: Entry and Exit times must be manually signed in the Visitor Log.`
    },
    {
        id: 183,
        name: 'Rack & Cabling Standard',
        categoryId: 'datacenter',
        content: `1. Overview
Proper cabling limits downtime, improves airflow, and simplifies troubleshooting.

2. Racking
*   **Placement**: Heavy devices (UPS/Disk Arrays) at the bottom (U1-U10).
*   **Airflow**: All empty U-spaces must be filled with Blanking Panels to prevent hot air recirculation.

3. Cabling
*   **Color Code**:
    *   Blue: Data (Production).
    *   Red: Data (Management/OOB).
    *   Yellow: Cross-Connects.
*   **Labeling**: Both ends of every cable must be labeled with Source/Dest IDs.
*   **Routing**: Fiber in overhead trays, Copper in underfloor/separate trays.`
    },
    {
        id: 184,
        name: 'Power & UPS Management Policy',
        categoryId: 'datacenter',
        content: `1. Redundancy
*   **A/B Feeds**: Every rack must have two independent power strips (PDU A and PDU B) fed from separate UPS strings.
*   **Dual Cord**: All active equipment must have dual power supplies. (Single-cord devices require an ATS).

2. Capacity
*   **Load**: Total load per rack must not exceed 80% of the rated circuit breaker capacity.
*   **Testing**: Generator load tests are conducted monthly. UPS battery run-down tests annually.`
    },
    {
        id: 185,
        name: 'HVAC & Environmental Control Policy',
        categoryId: 'datacenter',
        content: `1. Standards
To maintain hardware longevity and warranty compliance (ASHRAE TC 9.9).

2. Parameters
*   **Temperature**: Cold Aisle maintained between 18°C - 27°C (64°F - 80°F).
*   **Humidity**: Relative Humidity (RH) maintained between 40% - 60%.
*   **Hot/Cold Iso**: Hot Aisle Containment (HAC) doors must be closed at all times.

3. Monitoring
*   Environmental sensors (Temp/Fluid) placed at top, middle, and bottom of every 4th rack.`
    },
    {
        id: 186,
        name: 'Shipping, Receiving & Storage Policy',
        categoryId: 'datacenter',
        content: `1. Inbound
*   **Quarantine**: All incoming packages are uncrated in the Loading Dock/Staging Area to prevent cardboard dust contamination in the white space.
*   **Inspection**: Visual check for damage before signing delivery receipt.

2. Storage
*   No combustibles (Cardboard, Wood) allowed in the server room.
*   Spares are stored in fire-proof cabinets in the designated Storage Room.`
    },
    {
        id: 187,
        name: 'Fire Suppression & Safety Policy',
        categoryId: 'datacenter',
        content: `1. Systems
*   **Detection**: VESDA (Very Early Smoke Detection Apparatus) samples air continuously.
*   **Suppression**: Clean Agent Gas (e.g., FM-200 / Novec 1230) system deployed to extinguish fire without damaging electronics. Water sprinklers are "Pre-Action" (Dry Pipe) as a last resort.

2. Safety
*   **EPO (Emergency Power Off)**: Covered and guarded to prevent accidental tripping. Use ONLY when human life is in danger.
*   **Evacuation**: Evacuate immediately upon alarm. Do not attempt to save hardware.`
    },
    {
        id: 188,
        name: 'Equipment Maintenance & Cleaning Policy',
        categoryId: 'datacenter',
        content: `1. Routine
*   **Cleaning**: Floor tiles vacuumed (HEPA) and damp-mopped (anti-static chemicals) quarterly by specialist vendors.
*   **Sub-floor**: Plenum space cleaned annually.

2. Physical Maintenance
*   **Filters**: CRAC unit filters replaced quarterly.
*   **Generators**: Fuel polished and oil changed annually.`
    },
    {
        id: 189,
        name: 'Asset Movement & Disposal Policy',
        categoryId: 'datacenter',
        content: `1. Tracking
*   **Move Ticket**: No equipment moves without a Change Ticket.
*   **RFID**: High-value assets are tracked via RFID tags for real-time location.

2. Secure Disposal
*   **Hard Drives**: Failed drives are placed immediately in the "To-Shred" locked bin. They never leave the DC intact.
*   **Media Destruction**: On-site shredding preferred. If off-site, requires chain-of-custody transfer from a cleared bonded courier.`
    },
    {
        id: 190,
        name: 'Emergency Operating Procedures (EOP)',
        categoryId: 'datacenter',
        content: `1. Purpose
 predefined steps for responding to catastrophic facility failures.

2. Scenarios
*   **Utility Failure**: Confirm Generator Start > Check ATS transfer > Monitor Fuel Levels.
*   **HVAC Failure**: Open aisle containment doors (if safe) > Shut down non-critical Dev environments to reduce heat load.
*   **Water Leak**: Identify source > Cover racks with plastic tarps > Deploy wet vacs.`
    },

    // Backup & Disaster Recovery Team - 191-200
    {
        id: 191,
        name: 'Enterprise Backup Retention Policy',
        categoryId: 'backup-dr',
        content: `1. Purpose
To define the retention periods for all company data to meet legal, regulatory, and business requirements.

2. Retention Schedule (GFS)
*   **Dailies**: Retained for 30 days.
*   **Weeklies**: Retained for 12 weeks.
*   **Monthlies**: Retained for 12 months.
*   **Yearlies**: Retained for 7 years (Financial/Legal data).

3. Strategy (3-2-1 Rule)
*   **3**: Three copies of data.
*   **2**: Two different media types (Disk/Cloud or Disk/Tape).
*   **1**: One copy offsite / air-gapped.`
    },
    {
        id: 192,
        name: 'Disaster Recovery RTO/RPO Standards',
        categoryId: 'backup-dr',
        content: `1. Classifications
Applications are tiered based on business criticality.

2. Tiers
*   **Tier 0 (Mission Critical)**: Active/Active. RPO = 0, RTO < 15 mins. (Core Network, Authentication).
*   **Tier 1 (Business Critical)**: RPO < 1 hour, RTO < 4 hours. (ERP, Email, Customer DB).
*   **Tier 2 (Important)**: RPO < 24 hours (Last Daily), RTO < 24 hours. (Files, HR Systems).
*   **Tier 3 (Non-Critical)**: RPO As available, RTO < 72 hours. (Dev/Test).`
    },
    {
        id: 193,
        name: 'Ransomware Resilience & Immutability Policy',
        categoryId: 'backup-dr',
        content: `1. Threat
Ransomware attackers target backups to prevent recovery.

2. Immutability
*   Primary Backups must be stored on immutable storage (Write-Once-Read-Many / Object Lock) for at least 14 days.
*   Deletion of immutable backups requires Multi-Person Authentication (MFA on root account).

3. Air Gap
*   A tertiary copy of critical data must be "Air Gapped" (physically or logically disconnected from the network) such as Tape or Cloud Archive.`
    },
    {
        id: 194,
        name: 'DR Plan Testing & Validation Policy',
        categoryId: 'backup-dr',
        content: `1. Frequency
*   **Tabletop Exercise**: Bi-annual discussion-based drill with leadership.
*   **Technical Failover Test**: Annual full-scale test of failing over Tier 1 apps to the DR Site/Cloud.

2. Scope
*   Testing must verify not just data availability, but Application functionality (Login, Processing, Reporting).

3. Reporting
*   A "Post-Test Report" detailing Success/Failure, actual RTO achieved, and lessons learned is mandatory.`
    },
    {
        id: 195,
        name: 'SaaS Data Protection Policy (M365/Salesforce)',
        categoryId: 'backup-dr',
        content: `1. Shared Responsibility
Cloud providers (Microsoft/Salesforce) ensure *platform* uptime but do NOT backup user data against accidental deletion or corruption.

2. Requirement
*   **Third-Party Backup**: All critical SaaS platforms must be backed up by an independent third-party solution (e.g., Veeam, Commvault).
*   **Frequency**: Minimum 4 snapshots per day.
*   **Retention**: Indefinite retention for Ex-Employees' data (Legal Hold).`
    },
    {
        id: 196,
        name: 'Backup Encryption & Key Management Policy',
        categoryId: 'backup-dr',
        content: `1. Encryption
*   **In-Flight**: All backup traffic must be encrypted (TLS 1.2+).
*   **At-Rest**: All stored backup data must be encrypted (AES-256).

2. Key Management
*   Encryption keys must be managed separately from the backup software.
*   **Loss of Keys**: Keys must be escrowed. Loss of keys = Permanent Data Loss.`
    },
    {
        id: 197,
        name: 'Offsite Media Rotation & Storage Policy',
        categoryId: 'backup-dr',
        content: `1. Scope
Applies if physical media (LTO Tape / HDD) is used for offsite storage.

2. Transport
*   Media must be transported in locked, ruggedized containers by a bonded courier.
*   Vehicles must not be left unattended.

3. Storage
*   Offsite facility must be at least 50 miles (80km) from the primary datacenter (Geographic Redundancy).
*   Facility must have climate control and inert gas fire suppression.`
    },
    {
        id: 198,
        name: 'Database Backup & Integrity Check Policy',
        categoryId: 'backup-dr',
        content: `1. Consistency
*   Backups must be "Application Aware" (VSS/RMAN) to ensure transactional consistency.

2. Verification
*   **Checksums**: Every backup block is verified during write.
*   **SureBackup**: Automated "Spin-Up" testing must run weekly to boot random DB backups and verify they can attach and query.`
    },
    {
        id: 199,
        name: 'Endpoint Backup Policy',
        categoryId: 'backup-dr',
        content: `1. Limitations
It is impractical to backup every laptop fully.

2. Strategy
*   **User Responsibility**: Users must save business data to synced locations (OneDrive/Google Drive). Local "C:\\" drive is NOT backed up.
*   ** VIP Exception**: C-Level Executives may have full-disk image backups (via Druva/Code42).

3. Alerting
*   Users failing to sync for >7 days receive an automated email reminder.`
    },
    {
        id: 200,
        name: 'Media Disposal & End-of-Life Policy',
        categoryId: 'backup-dr',
        content: `1. Decommissioning
When backup media (Tapes/Drives) reaches end of life or fails.

2. Destruction
*   **Degaussing**: Magnetic media (Tapes) must be degaussed to destroy the magnetic field.
*   **Shredding**: Media is physically shredded into <6mm particles.
*   **Prohibition**: Crypto-erasure alone is not sufficient for backup media; physical destruction is mandatory.`
    },

    // Storage & SAN Team - 201-210
    {
        id: 201,
        name: 'Data Storage Classification & Tiering Policy',
        categoryId: 'storage-san',
        content: `1. Purpose
To optimize cost and performance by aligning data value with storage media.

2. Tiers
*   **Tier 0 (Extreme)**: NVMe / All-Flash Arrays (AFA). Latency <1ms. (For OLTP Databases, Virtual Desktop Boot).
*   **Tier 1 (Performance)**: SSD / SAS. Latency <5ms. (For Email, App Servers).
*   **Tier 2 (General)**: NL-SAS / Hybrid. Latency <20ms. (For File Shares, Archives).
*   **Tier 3 (Cold)**: Object Storage (S3 Glacier) / Tape. (For Long-term Retention).

3. Automated Tiering
*   Storage systems must be configured to automatically move "cold" data blocks to lower tiers after 14 days of inactivity.`
    },
    {
        id: 202,
        name: 'SAN (Storage Area Network) Zoning Policy',
        categoryId: 'storage-san',
        content: `1. Protocol
*   **Fabric**: Fibre Channel or iSCSI.
*   **Single Initiator Zoning**: Every zone must contain only ONE Host Initiator (HBA) and ONE Storage Target Port. Multi-initiator zones are prohibited to prevent RSCN storms.

2. Alias Naming
*   All WWPNs (World Wide Port Names) must be aliased with the Hostname and Port number (e.g., \`H_Web01_P1\`) before zoning.`
    },
    {
        id: 203,
        name: 'NAS & File Share Access Policy',
        categoryId: 'storage-san',
        content: `1. Permissions Model
*   **AGDLP**: Accounts -> Global Groups -> Domain Local Groups -> Permissions.
*   **Direct Assignment**: Never assign permissions directly to a User Account. Always use Groups.

2. Shares
*   **Hidden Shares**: Administrative shares (\`C$\`) are restricted to Domain Admins.
*   **Root Folders**: Users should have Read-Only access to root folders; Modify access begins at the sub-folder level.
*   **Audit**: "Everyone" group permissions must be removed.`
    },
    {
        id: 204,
        name: 'Storage Capacity Planning & Management Policy',
        categoryId: 'storage-san',
        content: `1. Thresholds
*   **Warning**: 75% Used (Start procurement process).
*   **Critical**: 90% Used (Halt new deployments).

2. Thin Provisioning
*   Permitted for Efficiency, but the "Over-Provisioning Ratio" must not exceed 2:1.
*   **Reclaim**: Space Reclamation (UNMAP) must be scheduled weekly for deleted blocks.`
    },
    {
        id: 205,
        name: 'Storage Multipathing & High Availability Policy',
        categoryId: 'storage-san',
        content: `1. Redundancy
*   Every host must have at least 2 physical paths (HBAs/NICs) to the storage array across redundant fabrics (Fabric A / Fabric B).

2. Path Selection
*   **Policy**: "Round Robin" (Active/Active) is preferred for load balancing.
*   **Failover**: Path failover must occur within 30 seconds to prevent OS timeouts.`
    },
    {
        id: 206,
        name: 'Data Deduplication & Compression Policy',
        categoryId: 'storage-san',
        content: `1. Usage
Data reduction technologies are mandatory for specific workloads to save costs.

2. Guidelines
*   **VDI / Virtualization**: Inline Deduplication + Compression Enabled (Expected >4:1 ratio).
*   **Databases**: Compression Only (Dedupe often impacts performance).
*   **Encrypted Data**: Deduplication Disabled (Encrypted data does not dedupe).`
    },
    {
        id: 207,
        name: 'Storage Firmware & Lifecycle Management Policy',
        categoryId: 'storage-san',
        content: `1. Compatibility
*   Firmware updates (Array OS, Disk Firmware, Switch OS) must be cross-checked against the Vendor Hardware Compatibility List (HCL) for driver compatibility.

2. Schedule
*   **Routine**: Semi-annual updates (N-1 version strategy).
*   **Emergency**: Immediate patching for data-loss bugs.`
    },
    {
        id: 208,
        name: 'Storage Encryption At Rest Policy',
        categoryId: 'storage-san',
        content: `1. Requirement
All physical data stored on SAN/NAS arrays must be encrypted to protect against physical drive theft.

2. Implementation
*   **SED**: Self-Encrypting Drives (FIPS 140-2 Level 2).
*   **Controller-Based**: Array-level AES-256 encryption.
*   **Key Management**: Keys must be stored on an external KMIP server, not on the array itself.`
    },
    {
        id: 209,
        name: 'Object Storage & S3 Standard Policy',
        categoryId: 'storage-san',
        content: `1. Use Case
For unstructured data (Images, Logs, Backups) and cloud-native apps.

2. Security
*   **Access Keys**: Do not use permanent access keys; use IAM Roles.
*   **Versioning**: Must be enabled to protect against accidental overwrites.
*   **Immutability**: Object Lock (WORM) enabled for compliance archives.`
    },
    {
        id: 210,
        name: 'Storage Decommissioning & Sanitization Policy',
        categoryId: 'storage-san',
        content: `1. Process
When retiring storage arrays or drives.

2. Sanitization
*   **Magnetic HDD**: NIST 800-88 Purge (3-pass overwrite) or Degaussing.
*   **SSD / Flash**: Crypto-Erase (sanitize command to delete internal encryption key), rendering data unrecoverable instantly.
*   **Certificate**: A Certificate of Sanitization is required before assets leave the premises.`
    },

    // Patch Management Team - 211-220
    {
        id: 211,
        name: 'Enterprise Patch Management Policy',
        categoryId: 'patch-mgmt',
        content: `1. Purpose
To mitigate vulnerabilities by ensuring all software and operating systems are kept up-to-date.

2. Scope
Applies to all network-connected assets:
*   **Endpoints**: Laptops, Desktops, Mobiles.
*   **Servers**: Physical, Virtual, Cloud.
*   **Networking**: Routers, Switches, Firewalls.
*   **Applications**: Middleware, Databases, Third-Party Software.

3. Responsibility
*   **Patch Team**: Packaging and deployment.
*   **Asset Owners**: Ensuring reboot windows and validations are met.`
    },
    {
        id: 212,
        name: 'Risk-Based Patching SLA Policy',
        categoryId: 'patch-mgmt',
        content: `1. Severity Levels
Patches are prioritized based on CVSS scores and active exploitation.

2. Timeframes (SLA)
*   **Critical (CVSS 9.0-10.0 or Zero-Day)**: < 48 Hours.
*   **High (CVSS 7.0-8.9)**: < 7 Days.
*   **Medium (CVSS 4.0-6.9)**: < 14 Days.
*   **Low (CVSS < 4.0)**: < 30 Days / Next Maintenance Window.

3. Monitoring
*   The SLA clock starts when the patch is released by the vendor.`
    },
    {
        id: 213,
        name: 'Emergency Patching & Zero-Day Protocol',
        categoryId: 'patch-mgmt',
        content: `1. Triggers
*   Active "In the Wild" exploitation of a vulnerability.
*   Public release of Proof-of-Concept (PoC) exploit code for a critical CVE.

2. Process
1.  **CISO Directive**: CISO authorizes "Emergency Change" bypassing standard CAB.
2.  **Deployment**: Patches pushed immediately to all production assets.
3.  **Communication**: Users/Operations notification sent *during* or *after* deployment, not 24h before.`
    },
    {
        id: 214,
        name: 'Automated Patch Deployment Policy',
        categoryId: 'patch-mgmt',
        content: `1. Strategy
Manual patching is impossible at scale. Automation must be the default.

2. Tooling
*   **Workstations**: Microsoft Intune / Jamf.
*   **Windows Servers**: WSUS / SCCM (MECM).
*   **Linux Servers**: Ansible / Satellite / Ubuntu Landscape.

3. Automation Rules
*   Download and Install patches automatically.
*   Reboots are suppressed during core business hours (08:00 - 18:00).`
    },
    {
        id: 215,
        name: 'Third-Party Application Patching Policy',
        categoryId: 'patch-mgmt',
        content: `1. Scope
OS patching isn't enough; Apps are the primary attack vector (e.g., Chrome, Adobe, Zoom, Java).

2. Mandate
*   Common business apps must be updated within 5 days of a security release.
*   **Auto-Update**: Application auto-update features (e.g., Chrome Updater) should be Enabled where centrally managed updates are unavailable.

3. Testing
*   IT patches must not break core business plugins (e.g., Java version dependency for ERP).`
    },
    {
        id: 216,
        name: 'Patch Testing & Validation (Rings)',
        categoryId: 'patch-mgmt',
        content: `1. Ring Deployment Model
To prevent broken patches from crashing Production.

2. Rings
*   **Ring 0 (Alpha)**: Patch Team & IT Test Devices (Day 0).
*   **Ring 1 (Beta)**: IT Staff & "Friendly" Users (Day 1-2).
*   **Ring 2 (Pilot)**: 10% representative sample of all departments (Day 3-5).
*   **Ring 3 (Broad)**: 100% of Fleet (Day 7+).

3. Halt Criteria
*   If >2% of devices in a Ring report BOOT FAILURE or APP CRASH, the rollout is paused immediately.`
    },
    {
        id: 217,
        name: 'Server Reboot & Maintenance Windows',
        categoryId: 'patch-mgmt',
        content: `1. Requirement
Most patches require a reboot to be effective. A "Pending Reboot" state = Vulnerable.

2. Maintenance Windows
*   **Staging**: Tuesdays 20:00 - 00:00.
*   **Production**: Saturdays 02:00 - 06:00.
*   **Reboot Action**: Servers are configured to reboot automatically at the end of the window if patches were applied.

3. Uptime
*   "Uptime" is not a badge of honor; it is a security risk. No server should have >60 days uptime.`
    },
    {
        id: 218,
        name: 'Endpoint Patching Compliance Policy',
        categoryId: 'patch-mgmt',
        content: `1. Target
*   95% Compliance within 7 days of General Availability.

2. Remote Users
*   Devices off-network (VPN/Internet only) must receive patches via Cloud Management Gateway (CMG) or Intune.
*   Patches must not wait for VPN connection.

3. Non-Compliance
*   Devices missing >2 months of quality updates will be quarantined (Network Access Control) until updated.`
    },
    {
        id: 219,
        name: 'Failed Patch Remediation & Rollback',
        categoryId: 'patch-mgmt',
        content: `1. Monitoring
*   Patch dashboard is reviewed daily for "Failed" status.

2. Remediation
*   **Tier 1**: Automated retry (3 attempts).
*   **Tier 2**: Manual removal of corrupted SafetyNet/SoftwareDistribution folder + Retry.
*   **Tier 3**: Re-image device.

3. Rollback
*   If a Microsoft Knowledge Base (KB) update causes critical issues, a "Remove Update" command is pushed globally via SCCM.`
    },
    {
        id: 220,
        name: 'Patching Exemption & Risk Acceptance',
        categoryId: 'patch-mgmt',
        content: `1. Process
Sometimes legacy apps break with new patches.

2. Request
*   Application Owner must submit a **Security Exception Request**.
*   Must document: Reason (Technical constraints), End Date (When will it be fixed?), and Compensating Controls (e.g., Network Isolation).

3. Approval
*   Exceptions are valid for max 90 days.
*   Requires VP & CISO signature.`
    },

    // Capacity & Performance Management Team - 221-230
    {
        id: 221,
        name: 'Resource Utilization Threshold Policy',
        categoryId: 'capacity-mgmt',
        content: `1. Purpose
To define "Safe" vs "Unsafe" operating levels for infrastructure to prevent saturation.

2. Application Thresholds
*   **Green**: 0-60% Utilization.
*   **Yellow**: 61% - 80% Utilization (Investigation Triggered).
*   **Red**: > 80% Utilization (Immediate Upgrade / Scaling Action).

3. Exceptions
*   Batch processing servers are permitted to run at 100% CPU during off-hours windows.`
    },
    {
        id: 222,
        name: 'Capacity Planning & Forecasting Policy',
        categoryId: 'capacity-mgmt',
        content: `1. Cycle
*   **Monthly**: Operational review of top 10 consumers.
*   **Quarterly**: Strategic review of 12-month growth trends.
*   **Annually**: Budgeting for hardware refresh based on 3-year CAGR (Compound Annual Growth Rate).

2. Methodology
*   Forecasting models must account for "Peak Season" (e.g., Black Friday / Year End) traffic surges, not just averages.`
    },
    {
        id: 223,
        name: 'Application Performance Monitoring (APM) Policy',
        categoryId: 'capacity-mgmt',
        content: `1. Mandate
Tier 1 applications must have deep APM instrumentation (e.g., Dynatrace, New Relic, AppInsights).

2. Metrics
*   **Apdex Score**: Must maintain > 0.90 rating.
*   **Transactions**: "Slow Transactions" (>2s) must be logged with full stack traces.
*   **Errors**: Monitoring must alert on Error Rates exceeding 1% of total requests.`
    },
    {
        id: 224,
        name: 'Database Performance Tuning Policy',
        categoryId: 'capacity-mgmt',
        content: `1. Routine
*   **Index Maintenance**: Fragmentation analysis and rebuilds must run weekly.
*   **Query Analysis**: Top 10 High-CPU queries must be analyzed monthly for optimization.

2. Design
*   **No "Select *"**: Queries must request specific columns.
*   **Locking**: Databases must use Row-Level locking protocols to prevent table-lock blocking chains.`
    },
    {
        id: 225,
        name: 'Infrastructure Auto-Scaling Policy',
        categoryId: 'capacity-mgmt',
        content: `1. Cloud / Virtualization
Static allocation is inefficient.

2. Triggers
*   **Scale Out**: Add instances when Avg CPU > 70% for 5 minutes.
*   **Scale In**: Remove instances when Avg CPU < 30% for 15 minutes.
*   **Limits**: Every auto-scale group must have a defined "Max Capacity" to prevent runaway billing (Wallet DoS).`
    },
    {
        id: 226,
        name: 'Load Testing & Stress Testing Policy',
        categoryId: 'capacity-mgmt',
        content: `1. Requirement
No major release (Version X.0) goes to Prod without a Load Test.

2. Scenarios
*   **Load Test**: Simulate expected peak load (100%).
*   **Stress Test**: Simulate breaking point (150%+) to identify the weakest link.
*   **Soak Test**: Run at 80% load for 24 hours to find memory leaks.

3. Environment
*   Tests must run in a "Pre-Prod" environment identical to Prod in sizing.`
    },
    {
        id: 227,
        name: 'Network Bandwidth Capacity Policy',
        categoryId: 'capacity-mgmt',
        content: `1. Analysis
*   **Headroom**: WAN circuits should operate at <70% capacity during peak hours to allow for bursts.
*   **QoS**: Voice/Video queues are prioritized, but must be policed (limited) to prevent starvation of business data.

2. Internet
*   Commodity Internet circuits should be sized at 2x average peak utilization.`
    },
    {
        id: 228,
        name: 'Storage I/O Performance Agreement',
        categoryId: 'capacity-mgmt',
        content: `1. Latency Targets
*   **Flash (Tier 0)**: < 1ms Average.
*   **Standard (Tier 1)**: < 10ms Average.
*   **Archive (Tier 2)**: < 30ms Average.

2. Noisy Neighbors
*   Workloads causing IOPS storms (>10k IOPS for >10 mins) will be throttled (Storage QoS) to protect the shared array.`
    },
    {
        id: 229,
        name: 'Compute Right-Sizing Policy',
        categoryId: 'capacity-mgmt',
        content: `1. Review
*   **Over-Provisioned**: VMs with Avg CPU < 10% and Max CPU < 20% for 30 days must be downsized (e.g., 4 vCPU -> 2 vCPU).
*   **Under-Provisioned**: VMs hitting 100% CPU daily must be upsized or optimized.

2. Savings
*   Right-sizing reports are generated monthly and sent to Cost Center owners for approval.`
    },
    {
        id: 230,
        name: 'Performance Reporting & Dashboarding',
        categoryId: 'capacity-mgmt',
        content: `1. Visibility
Performance data must be transparent.

2. Dashboards
*   **Executive**: Red/Amber/Green status of Service Health.
*   **Technical**: Real-time graphs of CPU/RAM/Disk/Net.
*   **Retention**: Historical performance data (Granularity: 1 hour) is kept for 13 months for Year-over-Year comparison.`
    }
];
