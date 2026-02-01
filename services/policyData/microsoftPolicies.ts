import { Policy } from '../../types';

export const microsoftPolicies: Policy[] = [
    // Microsoft 365 Administration Team - 231-240
    {
        id: 231,
        name: 'M365 Tenant Security & Secure Score',
        categoryId: 'm365-admin',
        content: `1. Objective
To maintain a Microsoft Secure Score of >80% by enabling baseline security features.

2. Requirements
*   **MFA**: Multi-Factor Authentication must be strictly enforced for All Users (Conditional Access).
*   **Legacy Auth**: Block Legacy Authentication (POP3/IMAP/SMTP) to prevent brute force attacks.
*   **Admin Access**: Global Admins must use dedicated cloud-only accounts (admin.name@domain.onmicrosoft.com) protected by FIDO2 keys.`
    },
    {
        id: 232,
        name: 'License Management & Reclamation',
        categoryId: 'm365-admin',
        content: `1. Allocation
*   **Principle**: Licenses (E3/E5) are assigned based on role requirements, not default assignment.
*   **Request**: Users needing Visio/Project must submit a business justification approved by their manager.

2. Reclamation
*   **Leavers**: Licenses are removed 30 days after employee termination.
*   **Inactive**: Accounts inactive for >90 days will have licenses stripped automatically.`
    },
    {
        id: 233,
        name: 'External Sharing (Tenant Level)',
        categoryId: 'm365-admin',
        content: `1. Default Settings
*   **SharePoint/OneDrive**: "New and Existing Guests" allowed, but "Anyone" (Anonymous) links are BLOCKED globally.
*   **Expiration**: Guest access links expire after 30 days.

2. Guest Review
*   Inactive guests (no login for 90 days) are automatically removed from the tenant by Access Reviews.`
    },
    {
        id: 234,
        name: 'Self-Service Password Reset (SSPR)',
        categoryId: 'm365-admin',
        content: `1. Configuration
*   **Enabled**: All users are enabled for SSPR to reduce Service Desk calls.
*   **Methods**: Users must register at least 2 methods (Mobile App, Phone, Alternate Email).

2. Writeback
*   Password Writeback to On-Premises AD is enabled to ensure synchronization.`
    },
    {
        id: 235,
        name: 'Message Center & Service Health Monitoring',
        categoryId: 'm365-admin',
        content: `1. Responsibility
*   The M365 Admin team must review the Microsoft 365 Message Center **weekly** for "Plan for Change" items.

2. Communication
*   Major service degradations reported in Service Health Dashboard (SHD) must be communicated to the IT Service Desk immediately.`
    },
    {
        id: 236,
        name: 'M365 Group & Team Creation Policy',
        categoryId: 'm365-admin',
        content: `1. Creation
*   **Restricted**: Users cannot create M365 Groups/Teams directly. They must use the provisioning form to ensure proper naming and ownership.

2. Naming Convention
*   **Format**: \`[Dept]-[Name]-[Access]\` (e.g., \`HR-PolicyReview-Public\`).
*   **Blocked Words**: "CEO", "Salary", "Legal" are reserved words.`
    },
    {
        id: 237,
        name: 'User Onboarding & Offboarding (Cloud)',
        categoryId: 'm365-admin',
        content: `1. SLA
*   **New Hire**: Account created 24 hours before start date.
*   **Termination**: Account blocked and sessions revoked within 15 minutes of HR notification.

2. Data Handover
*   Manager access to Leaver's OneDrive/Mailbox is granted for 30 days upon request, then data is archived.`
    },
    {
        id: 238,
        name: 'Audit Log & Retention Settings',
        categoryId: 'm365-admin',
        content: `1. Logging
*   **Unified Audit Log**: Must be enabled.
*   **Retention**: Audit logs are retained for 1 year (Standard) or 10 years (Legal Hold) depending on regulation.

2. Alerting
*   Alerts configured for: "High Volume File Deletion", "eDiscovery Search Created", and "Privileged Role Assigned".`
    },
    {
        id: 239,
        name: 'Break-Glass Account Policy',
        categoryId: 'm365-admin',
        content: `1. Purpose
Emergency access if MFA fails or Federation breaks.

2. Accounts
*   Two cloud-only Global Admin accounts (\`bg1@...\` and \`bg2@...\`).
*   Excluded from Conditional Access policies.
*   Passwords stored in physical safe (split knowledge).
*   **Audit**: Any login by these accounts triggers an immediate P1 Security Incident.`
    },
    {
        id: 240,
        name: 'Power Platform & App Governance',
        categoryId: 'm365-admin',
        content: `1. DLP Policies
*   **Connectors**: "Business" data group (SharePoint, SQL, Outlook) cannot share data with "Non-Business" group (Twitter, Facebook, Personal Gmail).

2. Environment
*   Users build in the "Default" environment. Critical apps must be promoted to a "Production" managed environment.`
    },

    // Microsoft Exchange / Outlook Team - 241-250
    {
        id: 241,
        name: 'Mailbox Size & Storage Quotas',
        categoryId: 'exchange',
        content: `1. Quotas
*   **User Mailbox**: 50 GB (E3 Standard) or 100 GB (E5).
*   **Prohibit Send**: At 99% capacity.
*   **Prohibit Send/Receive**: At 100% capacity.

2. Archives
*   "Auto-Expanding Archives" enabled for users reaching 90% of primary quota.`
    },
    {
        id: 242,
        name: 'Email Retention & Archiving Policy',
        categoryId: 'exchange',
        content: `1. Default Policy (MRM)
*   **Inbox/Folders**: 2 Years (Move to Archive).
*   **Deleted Items**: 30 Days (Permanently Delete).
*   **Recoverable Items**: 14 Days (User recoverability).

2. Legal Hold
*   Mailboxes under investigation are placed on "Litigation Hold" (Duration: Indefinite) preventing permanent deletion.`
    },
    {
        id: 243,
        name: 'Anti-Malware & Anti-Spam (EOP/Defender)',
        categoryId: 'exchange',
        content: `1. Protection
*   **Safe Attachments**: "Block" mode (User cannot open file until scanned).
*   **Safe Links**: URL scanning enabled for email and Teams.
*   **Spam**: "High Confidence Spam" -> Quarantine. "Spam" -> Junk Folder.

2. Quarantine
*   Users can release "Spam". Only Admins can release "Phish" or "Malware".`
    },
    {
        id: 244,
        name: 'Email Authentication Standards (DMARC)',
        categoryId: 'exchange',
        content: `1. SPF (Sender Policy Framework)
*   Hard Fail (\`-all\`) enforced. Only approved IPs/Services included.

2. DKIM (DomainKeys)
*   Rotation: Keys rotated annually.

3. DMARC
*   **Policy**: \`p=reject\` (Reject unauthorized mail).
*   **Reporting**: RUA reports sent to Postmaster for analysis.`
    },
    {
        id: 245,
        name: 'Transport Rules & Data Loss Prevention (DLP)',
        categoryId: 'exchange',
        content: `1. Sensitive Data
*   Emails containing Credit Card #s or Tax IDs are encrypted automatically.
*   Bulk data (>10 IDs) blocked from leaving the organization.

2. Ethics Walls
*   Investment Banking team cannot email Research Analysts (Conflict of Interest prevention).`
    },
    {
        id: 246,
        name: 'Shared Mailbox & Delegation Policy',
        categoryId: 'exchange',
        content: `1. Login
*   **Disabled**: Shared Mailbox user accounts must be disabled.
*   **Access**: Access granted via Delegation (Full Access / Send As). Do NOT share passwords.

2. Ownership
*   Every shared mailbox must have two designated "Owners" responsible for membership reviews.`
    },
    {
        id: 247,
        name: 'Distribution Group Management',
        categoryId: 'exchange',
        content: `1. Limitation
*   Use M365 Groups where possible (modern collaboration).
*   **External Senders**: Blocked from emailing internal DGs by default (requires unblock request).

2. Moderation
*   "All Company" distribution lists must be moderated by HR/Comms.`
    },
    {
        id: 248,
        name: 'ActiveSync & Mobile Device Access',
        categoryId: 'exchange',
        content: `1. Security
*   **Requirement**: PIN/Biometric required on device.
*   **Encryption**: Device storage must be encrypted.
*   **Quarantine**: New devices are quarantined until approved (or auto-approved via Intune Compliance).

2. Wipe
*   Remote Wipe command removes ONLY corporate email data (Selective Wipe), not personal photos.`
    },
    {
        id: 249,
        name: 'Phishing Reporting & Simulation',
        categoryId: 'exchange',
        content: `1. Report Button
*   The "Report Phishing" add-in must be deployed to Outlook Ribbon and Mobile App.

2. Testing
*   **Simulations**: Monthly phishing simulation campaigns.
*   **Training**: Users who click fail must complete remedial training within 24 hours.`
    },
    {
        id: 250,
        name: 'SMTP Relay & Legacy Protocol Security',
        categoryId: 'exchange',
        content: `1. SMTP Auth
*   **Disabled**: Globally disabled.
*   **Exceptions**: Enabled only for specific Service Accounts (Printers/Scanners) restricted to internal IPs.

2. Connectors
*   Inbound connectors from On-Premises must be secured via TLS 1.2 and IP validation.`
    },

    // Active Directory & IAM Team - 251-260
    {
        id: 251,
        name: 'Password Complexity & Rotation Policy',
        categoryId: 'iam',
        content: `1. Standards
*   **Length**: Minimum 12 characters.
*   **Complexity**: No complexity requirements if length >14 (Passphrase).
*   **Rotation**: User passwords do NOT expire (NIST guideline) unless compromised. Admin passwords rotate every 90 days.

2. Protection
*   Azure AD Password Protection enabled to ban common passwords ("Password123", "Company2024").`
    },
    {
        id: 252,
        name: 'Privileged Account Management (Tiering)',
        categoryId: 'iam',
        content: `1. Tier Model
*   **Tier 0**: Domain Admins / Enterprise Admins (Managing Identity).
*   **Tier 1**: Server Admins (Managing Apps).
*   **Tier 2**: Workstation Admins (Managing Endpoints).

2. Separation
*   Tier 0 accounts can NEVER logon to Tier 1/2 assets (Prevents hash theft).`
    },
    {
        id: 253,
        name: 'Service Account Security (gMSA)',
        categoryId: 'iam',
        content: `1. Type
*   **Preferred**: Group Managed Service Accounts (gMSA) - Auto password rotation.
*   **Standard**: Use complex 25+ char passwords, rotated annually.

2. Privileges
*   Service accounts must NOT be Domain Admins. Use "Logon as a Service" and specific directory permissions.`
    },
    {
        id: 254,
        name: 'Conditional Access Policy (Identity)',
        categoryId: 'iam',
        content: `1. Signals
Access granted based on User, Device, Location, and Risk.

2. Rules
*   **Admins**: Require MFA always.
*   **Users**: Require MFA when off-network.
*   **Risky Sign-in**: Block "High Risk" sign-ins; Require MFA + Password Change for "Medium Risk".`
    },
    {
        id: 255,
        name: 'Guest Account Lifecycle Policy',
        categoryId: 'iam',
        content: `1. Invitation
*   Guests invited only to specific resources, not directory browse.

2. Review
*   **Access Reviews**: Quarterly automated emails to sponsors asking "Does this guest still need access?".
*   **Deny**: If sponsor says "No" or doesn't respond, guest account is disabled.`
    },
    {
        id: 256,
        name: 'OU Structure & Delegation Model',
        categoryId: 'iam',
        content: `1. Design
*   Structure based on Geography > Object Type (Users/Computers) > Dept.

2. Delegation
*   Help Desk granted "Reset Password" on User OUs only (Not Admin OUs).
*   Do not use "Domain Admins" for daily tasks.`
    },
    {
        id: 257,
        name: 'Group Policy Object (GPO) Management',
        categoryId: 'iam',
        content: `1. Application
*   **Enforcement**: Use GPO for baseline security (Audit, Firewall, User Rights).
*   **Testing**: Changes must be applied to "Test OU" first.

2. Cleanup
*   Empty or Disabled GPOs must be deleted semiannually.
*   No "Block Inheritance" allowed on Security OUs.`
    },
    {
        id: 258,
        name: 'AD Backup & Disaster Recovery',
        categoryId: 'iam',
        content: `1. Recycle Bin
*   **AD Recycle Bin**: Must be Enabled for object recovery (180 days).

2. Disaster Recovery
*   System State backups of DCs daily.
*   **Forest Recovery**: Tested annually in an isolated network.`
    },
    {
        id: 259,
        name: 'Azure AD Connect Sync Policy',
        categoryId: 'iam',
        content: `1. Scope
*   Sync only required OUs (User/Device). Do not sync Admin accounts/Service accounts not needed in cloud.

2. Hard Match
*   Source of Authority is On-Premises AD for synced users. Attributes must be edited On-Prem.`
    },
    {
        id: 260,
        name: 'Domain Controller Security',
        categoryId: 'iam',
        content: `1. Physical
*   DCs run on dedicated hardware/VMs. No other apps (Print/File) installed.

2. Network
*   DCs accessible only from Management Subnets and necessary Client ports (Kerberos/LDAP).
*   Internet Access is BLOCKED for Domain Controllers.`
    },

    // SharePoint & OneDrive Team - 261-270
    {
        id: 261,
        name: 'SharePoint Site Lifecycle & Storage',
        categoryId: 'sharepoint',
        content: `1. Quota
*   Default Site Storage: 25 GB. Increase requires ticket.
*   **Warning**: Alert at 90% usage.

2. Lifecycle
*   Sites with no activity for 6 months are set to "Read Only" and deleted after 9 months (with notification).`
    },
    {
        id: 262,
        name: 'OneDrive Sync Restrictions',
        categoryId: 'sharepoint',
        content: `1. Devices
*   **Allowed**: Sync allowed ONLY on Domain Joined / Intune Compliant devices.
*   **Blocked**: Personal laptops/Macs cannot sync files (Web Access Only).

2. Network
*   Block sync of specific file types (.exe, .mp4) to save bandwidth.`
    },
    {
        id: 263,
        name: 'Data Classification (Sensitivity Labels)',
        categoryId: 'sharepoint',
        content: `1. Labels
*   **Public**: No restrictions.
*   **Internal**: Default.
*   **Confidential**: Watermarked + Encrypted.
*   **Strictly Confidential**: No Print/Copy/Forward.

2. Default
*   All new SharePoint sites default to "Internal" classification.`
    },
    {
        id: 264,
        name: 'External Sharing (Site Level)',
        categoryId: 'sharepoint',
        content: `1. Permission
*   Site Owners determine external sharing level (up to Tenant cap).
*   **Financial/HR Sites**: Sharing set to "Only People in Organization" (External Disabled).

2. Verification
*   Sharing links defaulted to "View Only" (not Edit).`
    },
    {
        id: 265,
        name: 'SharePoint Search Configuration',
        categoryId: 'sharepoint',
        content: `1. Visibility
*   Search respects permissions (Security Trimming). Users only see files they have access to.

2. Exclusions
*   Draft folders and "Archived" libraries should be excluded from enterprise search results.`
    },
    {
        id: 266,
        name: 'Version History & Retention',
        categoryId: 'sharepoint',
        content: `1. Versions
*   **Limit**: Keep last 500 major versions.
*   **Drafts**: Keep drafts for 90 days.

2. Deletion
*   Files in Recycle Bin retained for 93 days before permanent deletion.`
    },
    {
        id: 267,
        name: 'Permissions & Inheritance Policy',
        categoryId: 'sharepoint',
        content: `1. Principles
*   **Inheritance**: Breaking inheritance (Unique Permissions) is discouraged at file level. Set permissions at Library/Folder level.
*   **Groups**: Assign permissions to SharePoint Groups (Owners/Members/Visitors), not individuals.`
    },
    {
        id: 268,
        name: 'Third-Party App Integrations',
        categoryId: 'sharepoint',
        content: `1. Store
*   SharePoint Store is blocked.
*   **Approval**: Apps must be vetted by Security and deployed by SharePoint Admins.

2. API Access
*   Access to Graph API granted only with "Least Privilege".`
    },
    {
        id: 269,
        name: 'Custom Script & Designer Policy',
        categoryId: 'sharepoint',
        content: `1. Restrictions
*   Custom Scripts blocked on Self-Service sites to prevent XSS.
*   SharePoint Designer access disabled for non-admins.`
    },
    {
        id: 270,
        name: 'Hub Site Structure',
        categoryId: 'sharepoint',
        content: `1. Organization
*   Sites organized into Hubs (e.g., HR Hub, IT Hub) for shared navigation and branding.
*   **Association**: Site owners can request hub association via ticket.`
    },

    // SCCM / Intune Endpoint Management Team - 271-280
    {
        id: 271,
        name: 'Device Enrollment (Autopilot)',
        categoryId: 'sccm-intune',
        content: `1. Windows
*   All new PCs enrolled via Autopilot (OOBE). User enters email/pass, device configures itself.
*   **Admin Rights**: Users are "Standard Users" (Not Local Admin) by default.

2. Mobile
*   Corporate mobiles enrolled via Apple DEP / Android Enterprise (Zero Touch).`
    },
    {
        id: 272,
        name: 'Compliance Policy (Health Attestation)',
        categoryId: 'sccm-intune',
        content: `1. Requirements
Device marked "Compliant" only if:
*   BitLocker Enabled.
*   Secure Boot Enabled.
*   Anti-Virus Active.
*   OS at minimum supported version.

2. Effect
*   Non-Compliant devices blocked from M365 resources (Teams/Outlook) after 24 hour grace period.`
    },
    {
        id: 273,
        name: 'BitLocker & Encryption Management',
        categoryId: 'sccm-intune',
        content: `1. Settings
*   **Algorithm**: XTS-AES 256-bit.
*   **Keys**: Recovery keys backed up to Azure AD.
*   **Removable Drives**: "Write" access denied unless encrypted (BitLocker To Go).

2. Recovery
*   Self-Service Key Recovery portal enabled for users.`
    },
    {
        id: 274,
        name: 'Application Deployment Standards',
        categoryId: 'sccm-intune',
        content: `1. Packaging
*   Apps deployed via Company Portal (Self-Service).
*   **Format**: Win32 App (Intune.win) or MSI. Using MSIX preferred where possible.

2. Updates
*   Apps must be updated within 14 days of vendor release. Supersedence rules configured to uninstall old versions.`
    },
    {
        id: 275,
        name: 'Windows Update for Business (WUfB)',
        categoryId: 'sccm-intune',
        content: `1. Rings
*   **Feature Updates**: Deferral 0 days (Pilot), 30 days (Broad).
*   **Quality Updates**: Deferral 2 days (Pilot), 7 days (Broad).
*   **Deadline**: Forced restart 3 days after download.`
    },
    {
        id: 276,
        name: 'Remote Wipe & Lock Policy',
        categoryId: 'sccm-intune',
        content: `1. Lost Device
*   **Lock**: Immediate remote lock if reported lost.
*   **Wipe**: Full Wipe for lost corporate devices. Selective Wipe (App Data) for BYOD.
*   **Stolen**: If stolen, device is marked "Stolen" in Intune (prevents re-enrollment).`
    },
    {
        id: 277,
        name: 'Configuration Profiles (Kiosk/WiFi)',
        categoryId: 'sccm-intune',
        content: `1. Connectivity
*   **WiFi**: WPA3 Enterprise profile pushed with Certs. Auto-connect enabled.
*   **VPN**: Always-On VPN profile deployed to laptops.

2. Kiosk
*   Reception/Lobby PCs locked to "Single App Kiosk Mode" (Browser) with Edge policies.`
    },
    {
        id: 278,
        name: 'Mobile Application Management (MAM)',
        categoryId: 'sccm-intune',
        content: `1. BYOD
*   Personal devices do not need enrollment (MDM). Use MAM (App Protection).
*   **Controls**: "Save As" to local storage blocked. "Copy/Paste" restricted to managed apps only.
*   **PIN**: App-level PIN required (4 digits).`
    },
    {
        id: 279,
        name: 'Endpoint Analytics & Remediation',
        categoryId: 'sccm-intune',
        content: `1. Proactive Remediation
*   Scripts run daily to fix common issues (e.g., "Stale Group Policy", "Outlook Indexing Broken").

2. Scoring
*   Target "User Experience Score" > 70. Low scoring devices targeted for hardware refresh.`
    },
    {
        id: 280,
        name: 'SCCM Client Health',
        categoryId: 'sccm-intune',
        content: `1. Health
*   Client status > 95% Active.
*   **Resolution**: Auto-reinstall script runs via GPO if SCCM agent is unresponsive for 7 days.

2. Co-Management
*   Workloads moved to Intune: Compliance, Windows Update, Endpoint Protection.`
    },

    // Unified Communications Team - 281-290
    {
        id: 281,
        name: 'Teams Meeting & Recording Policy',
        categoryId: 'unified-comms',
        content: `1. Recordings
*   **Auto-Expiry**: Recordings expire after 60 days.
*   **Storage**: Saved to OneDrive (Private) or SharePoint (Channel).
*   **Disclaimer**: Visual and Audio notification when recording starts.

2. Roles
*   External guests presented as "Attendees" (cannot present/mute others) by default.`
    },
    {
        id: 282,
        name: 'External Federation (Chat)',
        categoryId: 'unified-comms',
        content: `1. Scope
*   **Open**: Federation allowed with all external domains EXCEPT blocked list.
*   **Strict**: Only "External Access" (Chat) allowed, not "Guest Access" (File sharing), for federation.

2. Monitoring
*   Chat logs with external participants monitored for keyword DLP triggers.`
    },
    {
        id: 283,
        name: 'Voice & Calling Plans (E911)',
        categoryId: 'unified-comms',
        content: `1. E911
*   **Location**: Dynamic Emergency Calling enabled. Teams client sends location (Subnet/Switch Port) to PSAP.
*   **Notification**: Security Desk notified immediately via SMS/Email when 911 is dialed.

2. Voicemail
*   Transcriptions enabled. Stored in User Mailbox (Exchange).`
    },
    {
        id: 284,
        name: 'Live Events & Town Halls',
        categoryId: 'unified-comms',
        content: `1. Permissions
*   Only "Communications" and "Leadership" groups can schedule Live Events (Broadcasts).
*   **Production**: Third-party encoders allowed for high-fidelity studio streams.

2. Q&A
*   Moderated Q&A enabled for all Town Halls.`
    },
    {
        id: 285,
        name: 'Team Creation & Expiry Policy',
        categoryId: 'unified-comms',
        content: `1. Naming
*(See M365 Admin Policy)*.

2. Expiry
*   **Idle**: Teams with no activity (Chat/Files) for 365 days are soft-deleted.
*   **Renewal**: Owners emailed 30 days before expiration to renew.`
    },
    {
        id: 286,
        name: 'Teams App Permission Policy',
        categoryId: 'unified-comms',
        content: `1. Allowed Apps
*   **Microsoft**: All allowed.
*   **Third-Party**: Blocked by default. Whitelist required.
*   **Custom**: Uploading custom apps blocked except for Developers.

2. Review
*   Requested apps reviewed for permissions (e.g., "Read All Files" is rejected).`
    },
    {
        id: 287,
        name: 'Guest Access in Teams',
        categoryId: 'unified-comms',
        content: `1. Capabilities
*   Guests CAN: Chat, Participate in Channel, view files.
*   Guests CANNOT: Create Channels, Add Apps, Delete messages.
*   **Video**: IP Video allowed for guests.`
    },
    {
        id: 288,
        name: 'Meeting Room (MTR) Devices',
        categoryId: 'unified-comms',
        content: `1. Accounts
*   Resource Accounts (Room Mailboxes) used for MTRs.
*   **Auto-Accept**: Rooms auto-accept invites if free.

2. Maintenance
*   Devices reboot nightly at 03:00.
*   Updates applied via Intune (Android/Windows) automatically.`
    },
    {
        id: 289,
        name: 'Call Quality & Reliability (CQD)',
        categoryId: 'unified-comms',
        content: `1. Thresholds
*   **Poor Call**: Jitter > 30ms, Packet Loss > 1%.
*   **Target**: 98% "Good" calls monthly.

2. Investigation
*   Subnets with >5% poor calls flagged for Network Engineering review.`
    },
    {
        id: 290,
        name: 'Chat & Channel Message Retention',
        categoryId: 'unified-comms',
        content: `1. Retention
*   **1:1 Chats**: Retained for 1 Year (Rolling).
*   **Channel Messages**: Retained for 3 Years (Knowledge persistence).
*   **Deletion**: Users can delete their own messages, but a copy is kept in compliance substrate if Legal Hold is active.`
    }
];
