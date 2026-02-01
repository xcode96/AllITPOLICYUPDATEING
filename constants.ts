import { Category, Policy } from './types';

export const DATA_CATEGORIES: Category[] = [
    // 🔧 IT Infrastructure & Core Technology
    { id: 'it-service-desk', name: 'IT Service Desk (L1 / L2 / L3)', group: 'IT Infrastructure & Core Technology', icon: 'Headphones' },
    { id: 'euc-team', name: 'End-User Computing (EUC) Team', group: 'IT Infrastructure & Core Technology', icon: 'Monitor' },
    { id: 'desktop-support', name: 'Desktop & Hardware Support Team', group: 'IT Infrastructure & Core Technology', icon: 'Cpu' },
    { id: 'server-admin', name: 'Server Administration Team (Windows / Linux)', group: 'IT Infrastructure & Core Technology', icon: 'Server' },
    { id: 'virtualization', name: 'Virtualization Team (VMware / Hyper-V)', group: 'IT Infrastructure & Core Technology', icon: 'Layers' },
    { id: 'noc', name: 'Network Operations Team (NOC)', group: 'IT Infrastructure & Core Technology', icon: 'Activity' },
    { id: 'network-eng', name: 'Network Engineering Team', group: 'IT Infrastructure & Core Technology', icon: 'Wifi' },
    { id: 'cloud-infra', name: 'Cloud Infrastructure Team (AWS / Azure / GCP)', group: 'IT Infrastructure & Core Technology', icon: 'Cloud' },
    { id: 'datacenter', name: 'Data Center Operations Team', group: 'IT Infrastructure & Core Technology', icon: 'Database' },
    { id: 'backup-dr', name: 'Backup & Disaster Recovery Team', group: 'IT Infrastructure & Core Technology', icon: 'HardDrive' },
    { id: 'storage-san', name: 'Storage & SAN Team', group: 'IT Infrastructure & Core Technology', icon: 'Save' },
    { id: 'patch-mgmt', name: 'Patch Management Team', group: 'IT Infrastructure & Core Technology', icon: 'RefreshCw' },
    { id: 'capacity-mgmt', name: 'Capacity & Performance Management Team', group: 'IT Infrastructure & Core Technology', icon: 'BarChart2' },

    // 🧑💻 Microsoft & Enterprise Platforms
    { id: 'm365-admin', name: 'Microsoft 365 Administration Team', group: 'Microsoft & Enterprise Platforms', icon: 'LayoutGrid' },
    { id: 'exchange', name: 'Microsoft Exchange / Outlook Team', group: 'Microsoft & Enterprise Platforms', icon: 'Mail' },
    { id: 'iam', name: 'Active Directory & IAM Team', group: 'Microsoft & Enterprise Platforms', icon: 'Users' },
    { id: 'sharepoint', name: 'SharePoint & OneDrive Team', group: 'Microsoft & Enterprise Platforms', icon: 'FileText' },
    { id: 'sccm-intune', name: 'SCCM / Intune Endpoint Management Team', group: 'Microsoft & Enterprise Platforms', icon: 'Smartphone' },
    { id: 'unified-comms', name: 'Unified Communications Team', group: 'Microsoft & Enterprise Platforms', icon: 'MessageCircle' },

    // 🛡️ Cybersecurity & Risk
    { id: 'infosec', name: 'Information Security Team', group: 'Cybersecurity & Risk', icon: 'Shield' },
    { id: 'blue-team', name: 'Cyber Defense / Blue Team', group: 'Cybersecurity & Risk', icon: 'ShieldCheck' },
    { id: 'red-team', name: 'Red Team / Penetration Testing Team', group: 'Cybersecurity & Risk', icon: 'Crosshair' },
    { id: 'soc', name: 'Security Operations Center (SOC)', group: 'Cybersecurity & Risk', icon: 'Eye' },
    { id: 'vuln-mgmt', name: 'Vulnerability Management Team', group: 'Cybersecurity & Risk', icon: 'AlertTriangle' },
    { id: 'incident-response', name: 'Incident Response Team', group: 'Cybersecurity & Risk', icon: 'Siren' },
    { id: 'digital-forensics', name: 'Digital Forensics Team', group: 'Cybersecurity & Risk', icon: 'Search' },
    { id: 'identity-sec', name: 'Identity Security Team', group: 'Cybersecurity & Risk', icon: 'Key' },
    { id: 'dlp', name: 'Data Loss Prevention (DLP) Team', group: 'Cybersecurity & Risk', icon: 'FileMinus' },
    { id: 'cloud-sec', name: 'Cloud Security Team', group: 'Cybersecurity & Risk', icon: 'CloudRain' },
    { id: 'app-sec', name: 'Application Security Team', group: 'Cybersecurity & Risk', icon: 'Code' },
    { id: 'grc', name: 'Governance, Risk & Compliance (GRC) Team', group: 'Cybersecurity & Risk', icon: 'ClipboardCheck' },
    { id: 'vendor-risk', name: 'Third-Party / Vendor Risk Management Team', group: 'Cybersecurity & Risk', icon: 'Truck' },
    { id: 'privacy', name: 'Privacy & Data Protection Team (GDPR, DPDP)', group: 'Cybersecurity & Risk', icon: 'UserCheck' },

    // 💻 Software Engineering & DevOps
    { id: 'swe', name: 'Software Engineering Team', group: 'Software Engineering & DevOps', icon: 'Code2' },
    { id: 'frontend', name: 'Frontend Development Team', group: 'Software Engineering & DevOps', icon: 'Layout' },
    { id: 'backend', name: 'Backend Development Team', group: 'Software Engineering & DevOps', icon: 'Database' },
    { id: 'fullstack', name: 'Full-Stack Development Team', group: 'Software Engineering & DevOps', icon: 'Layers' },
    { id: 'mobile', name: 'Mobile Application Development Team', group: 'Software Engineering & DevOps', icon: 'Smartphone' },
    { id: 'api', name: 'API & Integration Team', group: 'Software Engineering & DevOps', icon: 'Link' },
    { id: 'devops', name: 'DevOps Engineering Team', group: 'Software Engineering & DevOps', icon: 'Infinite' },
    { id: 'sre', name: 'Site Reliability Engineering (SRE) Team', group: 'Software Engineering & DevOps', icon: 'Activity' },
    { id: 'platform-eng', name: 'Platform Engineering Team', group: 'Software Engineering & DevOps', icon: 'Cpu' },
    { id: 'release-mgmt', name: 'Release Management Team', group: 'Software Engineering & DevOps', icon: 'Send' },
    { id: 'config-mgmt', name: 'Configuration Management Team', group: 'Software Engineering & DevOps', icon: 'Settings' },

    // 🧪 Quality Assurance & Testing
    { id: 'qa', name: 'Quality Assurance (QA) Team', group: 'Quality Assurance & Testing', icon: 'CheckCircle' },
    { id: 'manual-testing', name: 'Manual Testing Team', group: 'Quality Assurance & Testing', icon: 'MousePointer' },
    { id: 'auto-testing', name: 'Automation Testing Team', group: 'Quality Assurance & Testing', icon: 'PlayCircle' },
    { id: 'perf-testing', name: 'Performance & Load Testing Team', group: 'Quality Assurance & Testing', icon: 'Zap' },
    { id: 'sec-testing', name: 'Security Testing Team', group: 'Quality Assurance & Testing', icon: 'ShieldAlert' },
    { id: 'uat', name: 'User Acceptance Testing (UAT) Team', group: 'Quality Assurance & Testing', icon: 'UserCheck' },

    // 📊 Data, AI & Analytics
    { id: 'dba', name: 'Database Administration (DBA) Team', group: 'Data, AI & Analytics', icon: 'Database' },
    { id: 'data-eng', name: 'Data Engineering Team', group: 'Data, AI & Analytics', icon: 'Codesandbox' },
    { id: 'data-analytics', name: 'Data Analytics Team', group: 'Data, AI & Analytics', icon: 'PieChart' },
    { id: 'bi', name: 'Business Intelligence (BI) Team', group: 'Data, AI & Analytics', icon: 'BarChart' },
    { id: 'data-science', name: 'Data Science Team', group: 'Data, AI & Analytics', icon: 'Beaker' },
    { id: 'ai-ml', name: 'AI / Machine Learning Team', group: 'Data, AI & Analytics', icon: 'Bot' },
    { id: 'mdm', name: 'Master Data Management (MDM) Team', group: 'Data, AI & Analytics', icon: 'FileText' },
    { id: 'data-gov', name: 'Data Governance Team', group: 'Data, AI & Analytics', icon: 'Lock' },

    // 📦 Enterprise Applications
    { id: 'app-support', name: 'Application Support Team', group: 'Enterprise Applications', icon: 'LifeBuoy' },
    { id: 'erp', name: 'ERP Team (SAP / Oracle / Dynamics)', group: 'Enterprise Applications', icon: 'Box' },
    { id: 'crm', name: 'CRM Team (Salesforce / Dynamics CRM)', group: 'Enterprise Applications', icon: 'Users' },
    { id: 'hrms', name: 'HRMS Team', group: 'Enterprise Applications', icon: 'UserPlus' },
    { id: 'finance-sys', name: 'Finance Systems Team', group: 'Enterprise Applications', icon: 'DollarSign' },
    { id: 'scm', name: 'Supply Chain / SCM Systems Team', group: 'Enterprise Applications', icon: 'Truck' },
    { id: 'middleware', name: 'Middleware & ESB Team', group: 'Enterprise Applications', icon: 'Share2' },

    // ⚙️ IT Operations & Service Management
    { id: 'itops', name: 'IT Operations Team', group: 'IT Operations & Service Management', icon: 'Settings' },
    { id: 'service-delivery', name: 'Service Delivery Management Team', group: 'IT Operations & Service Management', icon: 'Package' },
    { id: 'itil', name: 'ITIL / Process Management Team', group: 'IT Operations & Service Management', icon: 'Book' },
    { id: 'change-mgmt', name: 'Change Management Team', group: 'IT Operations & Service Management', icon: 'GitMerge' },
    { id: 'incident-mgmt', name: 'Incident & Problem Management Team', group: 'IT Operations & Service Management', icon: 'AlertCircle' },
    { id: 'cmdb', name: 'Configuration Management Database (CMDB) Team', group: 'IT Operations & Service Management', icon: 'Database' },
    { id: 'itam', name: 'IT Asset Management Team', group: 'IT Operations & Service Management', icon: 'Monitor' },

    // 📁 Governance, Legal & Compliance
    { id: 'legal', name: 'Legal & Corporate Affairs Team', group: 'Governance, Legal & Compliance', icon: 'Briefcase' },
    { id: 'compliance', name: 'Regulatory Compliance Team', group: 'Governance, Legal & Compliance', icon: 'CheckSquare' },
    { id: 'internal-audit', name: 'Internal Audit Team', group: 'Governance, Legal & Compliance', icon: 'FileSearch' },
    { id: 'external-audit', name: 'External Audit Coordination Team', group: 'Governance, Legal & Compliance', icon: 'ExternalLink' },
    { id: 'risk-mgmt', name: 'Corporate Risk Management Team', group: 'Governance, Legal & Compliance', icon: 'TrendingDown' },

    // 🧑💼 Corporate & Business Functions
    { id: 'hr', name: 'Human Resources (HR) Team', group: 'Corporate & Business Functions', icon: 'Users' },
    { id: 'talent', name: 'Talent Acquisition / Recruitment Team', group: 'Corporate & Business Functions', icon: 'UserPlus' },
    { id: 'l-and-d', name: 'Learning & Development (L&D) Team', group: 'Corporate & Business Functions', icon: 'BookOpen' },
    { id: 'finance', name: 'Finance & Accounting Team', group: 'Corporate & Business Functions', icon: 'DollarSign' },
    { id: 'procurement', name: 'Procurement & Vendor Management Team', group: 'Corporate & Business Functions', icon: 'ShoppingCart' },
    { id: 'sales', name: 'Sales & Business Development Team', group: 'Corporate & Business Functions', icon: 'TrendingUp' },
    { id: 'presales', name: 'Pre-Sales / Solution Consulting Team', group: 'Corporate & Business Functions', icon: 'MessageSquare' },
    { id: 'marketing', name: 'Marketing & Digital Marketing Team', group: 'Corporate & Business Functions', icon: 'Megaphone' },
    { id: 'customer-success', name: 'Customer Success Team', group: 'Corporate & Business Functions', icon: 'Smile' },
    { id: 'crm-client', name: 'Client Relationship Management Team', group: 'Corporate & Business Functions', icon: 'Handshake' },

    // 📈 Strategy & Leadership
    { id: 'ea', name: 'Enterprise Architecture Team', group: 'Strategy & Leadership', icon: 'Map' },
    { id: 'digital-transform', name: 'Digital Transformation Team', group: 'Strategy & Leadership', icon: 'Zap' },
    { id: 'innovation', name: 'Innovation & R&D Team', group: 'Strategy & Leadership', icon: 'Lightbulb' },
    { id: 'pmo', name: 'Program Management Office (PMO)', group: 'Strategy & Leadership', icon: 'Calendar' },
    { id: 'product-mgmt', name: 'Product Management Team', group: 'Strategy & Leadership', icon: 'Box' },
    { id: 'ba', name: 'Business Analysis Team', group: 'Strategy & Leadership', icon: 'Search' },
    { id: 'strategy', name: 'Strategy & Planning Team', group: 'Strategy & Leadership', icon: 'Compass' },
];
