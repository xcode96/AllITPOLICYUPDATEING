import React, { useState, useRef } from 'react';
import {
    Search,
    Menu,
    Bell,
    Settings,
    ChevronRight,
    ShieldCheck,
    FileText,
    BookOpen,
    Lock,
    Users,
    LogOut,
    X,
    Plus,
    Folder,
    Trash2,
    Download,
    Upload,
    FileCode
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { type Policy, type Category } from '../../types';

interface DashboardLayoutProps {
    children: React.ReactNode;
    policies: Policy[];
    categories: Category[];
    selectedPolicyId?: number;
    onSelectPolicy: (policy: Policy) => void;
    isAdmin: boolean;
    onLogout: () => void;
    onLoginClick: () => void;
    onSearch?: (query: string) => void;
    onAddCategory?: (name: string) => void;
    onAddPolicy?: (categoryId?: string) => void;
    onDeleteCategory?: (categoryId: string) => void;
    onDeletePolicyClick?: (policy: Policy) => void;
    onExportAll?: () => void;
    onImport?: (file: File) => void;
    onDownloadSource?: () => void; // Added onDownloadSource prop
}

const ICON_MAP: Record<string, React.ElementType> = {
    'BookOpen': BookOpen,
    'Lock': Lock,
    'ShieldCheck': ShieldCheck,
    'Users': Users,
    'FileText': FileText,
    'Folder': Folder,
    'FileCode': FileCode, // Added FileCode to ICON_MAP
    // Add mappings for new icons used in mockData if needed, or fallback to Folder
    'Headphones': Folder,
    'Monitor': Folder,
    'Cpu': Folder,
    'Server': Folder,
    'Layers': Folder,
    'Activity': Folder,
    'Wifi': Folder,
    'Cloud': Folder,
    'Database': Folder,
    'HardDrive': Folder,
    'Save': Folder,
    'RefreshCw': Folder,
    'BarChart2': Folder,
    'LayoutGrid': Folder,
    'Mail': Folder,
    'Smartphone': Folder,
    'MessageCircle': Folder,
    'Shield': ShieldCheck,
    'Crosshair': ShieldCheck,
    'Eye': Folder,
    'AlertTriangle': Folder,
    'Siren': Folder,
    'Key': Lock,
    'FileMinus': FileText,
    'CloudRain': Folder,
    'Code': FileText,
    'ClipboardCheck': FileText,
    'Truck': Folder,
    'UserCheck': Users,
    'Code2': FileText,
    'Layout': Folder,
    'Link': Folder,
    'Infinite': Folder,
    'Send': Folder,
    'CheckCircle': Folder,
    'MousePointer': Folder,
    'PlayCircle': Folder,
    'Zap': Folder,
    'ShieldAlert': ShieldCheck,
    'Codesandbox': Folder,
    'PieChart': Folder,
    'BarChart': Folder,
    'Beaker': Folder,
    'Bot': Folder,
    'LifeBuoy': Folder,
    'Box': Folder,
    'UserPlus': Users,
    'DollarSign': Folder,
    'ShoppingCart': Folder,
    'Share2': Folder,
    'Package': Folder,
    'Book': BookOpen,
    'GitMerge': Folder,
    'AlertCircle': Folder,
    'Briefcase': Folder,
    'CheckSquare': Folder,
    'FileSearch': Folder,
    'ExternalLink': Folder,
    'TrendingDown': Folder,
    'TrendingUp': Folder,
    'MessageSquare': Folder,
    'Megaphone': Folder,
    'Smile': Folder,
    'Handshake': Folder,
    'Map': Folder,
    'Lightbulb': Folder,
    'Calendar': Folder,
    'Compass': Folder, // Fallback for many to avoid import hell, can expand later
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
    policies,
    categories,
    selectedPolicyId,
    onSelectPolicy,
    isAdmin,
    onLogout,
    onLoginClick,
    onAddCategory,
    onAddPolicy,
    onDeleteCategory,
    onDeletePolicyClick,
    onExportAll,
    onImport,
    onDownloadSource // Destructured onDownloadSource
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState<string[]>(['general', 'security', 'compliance', 'hr', 'policy']);
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const toggleCategory = (id: string) => {
        setExpandedCategories(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    const getCategoryPolicies = (catId: string) => {
        return policies.filter(p => p.categoryId === catId);
    };

    const handleCreateCategory = (e: React.FormEvent) => {
        e.preventDefault();
        if (newCategoryName.trim() && onAddCategory) {
            onAddCategory(newCategoryName.trim());
            setNewCategoryName('');
            setIsAddingCategory(false);
        }
    };

    const handleImportClick = () => {
        setIsSettingsOpen(false);
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && onImport) {
            onImport(file);
        }
        // Reset input
        if (e.target) e.target.value = '';
    };

    const mainContentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollTop = 0;
        }
    }, [selectedPolicyId]);

    return (
        <div className="flex h-screen overflow-hidden text-slate-800 bg-white">
            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "fixed lg:static top-0 left-0 z-50 h-full w-72 transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col",
                "bg-slate-50 border-r border-slate-200",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Logo Area */}
                <div className="h-16 flex items-center px-6 border-b border-slate-200/50 flex-shrink-0 bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2.5 font-bold text-slate-900 text-lg tracking-tight">
                        <div className="p-1.5 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-lg shadow-sm text-white">
                            <ShieldCheck size={20} strokeWidth={2.5} />
                        </div>
                        PolicyPortal
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="ml-auto lg:hidden text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
                    {(() => {
                        // Group categories
                        const groupedCategories: Record<string, Category[]> = {};
                        categories.forEach(cat => {
                            const group = cat.group || 'Other';
                            if (!groupedCategories[group]) groupedCategories[group] = [];
                            groupedCategories[group].push(cat);
                        });

                        return Object.entries(groupedCategories).map(([groupName, groupCats]) => (
                            <div key={groupName} className="space-y-1">
                                <h3 className="px-3 text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2 opacity-80">{groupName}</h3>
                                {groupCats.map(category => {
                                    const categoryPolicies = getCategoryPolicies(category.id);
                                    const Icon = ICON_MAP[category.icon || 'Folder'] || Folder;
                                    const isExpanded = expandedCategories.includes(category.id);

                                    return (
                                        <div key={category.id} className="mb-2">
                                            <div className="flex items-center gap-1 mb-1 group">
                                                <button
                                                    onClick={() => toggleCategory(category.id)}
                                                    className="flex-1 flex items-center gap-2 text-left text-xs font-bold text-slate-600 uppercase tracking-wide px-3 py-2 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-all hover:shadow-sm border border-transparent hover:border-slate-100"
                                                >
                                                    <Icon size={14} className={cn("text-slate-400 group-hover:text-indigo-500 transition-colors", isExpanded && "text-indigo-500")} />
                                                    <span className="truncate">{category.name}</span>
                                                    <ChevronRight size={14} className={cn("ml-auto transition-transform text-slate-300 flex-shrink-0", isExpanded && "rotate-90 text-indigo-400")} />
                                                </button>

                                                {isAdmin && (
                                                    <>
                                                        {onAddPolicy && (
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    onAddPolicy(category.id);
                                                                    if (!isExpanded) toggleCategory(category.id);
                                                                }}
                                                                className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-all flex-shrink-0"
                                                                title={`Add policy to ${category.name}`}
                                                            >
                                                                <Plus size={14} />
                                                            </button>
                                                        )}
                                                        {onDeleteCategory && (
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    onDeleteCategory(category.id);
                                                                }}
                                                                className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-all flex-shrink-0"
                                                                title={`Delete ${category.name}`}
                                                            >
                                                                <Trash2 size={14} />
                                                            </button>
                                                        )}
                                                    </>
                                                )}
                                            </div>

                                            {isExpanded && (
                                                <ul className="space-y-1 ml-4 border-l border-slate-200 pl-3 transition-all relative">
                                                    {categoryPolicies.map(policy => (
                                                        <li key={policy.id} className="group flex items-center">
                                                            <button
                                                                onClick={() => {
                                                                    onSelectPolicy(policy);
                                                                    if (window.innerWidth < 1024) setIsSidebarOpen(false);
                                                                }}
                                                                className={cn(
                                                                    "flex-1 text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 truncate relative overflow-hidden",
                                                                    selectedPolicyId === policy.id
                                                                        ? "bg-white text-indigo-600 font-medium shadow-sm border border-slate-100"
                                                                        : "text-slate-600 hover:bg-white hover:text-slate-900 border border-transparent hover:shadow-sm"
                                                                )}
                                                            >
                                                                {selectedPolicyId === policy.id && (
                                                                    <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-500 rounded-r-full my-2"></div>
                                                                )}
                                                                {policy.name}
                                                            </button>
                                                            {isAdmin && onDeletePolicyClick && (
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        onDeletePolicyClick(policy);
                                                                    }}
                                                                    className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-all absolute right-2 bg-white shadow-sm border border-slate-100 z-10"
                                                                    title="Delete Policy"
                                                                >
                                                                    <Trash2 size={12} />
                                                                </button>
                                                            )}
                                                        </li>
                                                    ))}
                                                    {categoryPolicies.length === 0 && (
                                                        <li className="px-3 py-2 text-xs text-slate-400 italic">No policies in this folder</li>
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ));
                    })()}

                    {/* Add Actions Section */}
                    {isAdmin && (
                        <div className="pt-4 mt-4 border-t border-slate-200 space-y-3">
                            {!isAddingCategory ? (
                                <div className="grid grid-cols-2 gap-2 px-2">
                                    <button
                                        onClick={() => setIsAddingCategory(true)}
                                        className="flex items-center justify-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 py-2.5 rounded-lg transition-all shadow-sm"
                                    >
                                        <Folder size={14} />
                                        New Folder
                                    </button>
                                    {onAddPolicy && (
                                        <button
                                            onClick={() => onAddPolicy()}
                                            className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 py-2.5 rounded-lg transition-all shadow-sm"
                                        >
                                            <FileText size={14} />
                                            New Policy
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <form onSubmit={handleCreateCategory} className="px-2 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                                    <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase">New Folder</h4>
                                    <input
                                        autoFocus
                                        type="text"
                                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 mb-3 placeholder:text-slate-400"
                                        placeholder="Enter name..."
                                        value={newCategoryName}
                                        onChange={e => setNewCategoryName(e.target.value)}
                                        onBlur={() => !newCategoryName && setIsAddingCategory(false)}
                                    />
                                    <div className="flex gap-2">
                                        <button type="submit" className="flex-1 text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-2 py-1.5 rounded-md font-medium transition-colors shadow-sm">Create</button>
                                        <button type="button" onClick={() => setIsAddingCategory(false)} className="flex-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-2 py-1.5 rounded-md transition-colors">Cancel</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}

                    {/* Bottom spacer for scrolling */}
                    <div className="h-12"></div>
                </nav>
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col min-w-0 h-full relative">

                {/* Clean background - No orb for light mode or very subtle */}

                {/* Sticky Header */}
                <header className="sticky top-0 z-30 h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center px-4 lg:px-8 justify-between flex-shrink-0 transition-all">
                    <div className="flex items-center gap-4 flex-1">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                            <Menu size={20} />
                        </button>

                        {/* Search Bar */}
                        <div className="relative hidden sm:block group transition-all duration-300 ease-in-out w-64 focus-within:w-96 lg:focus-within:w-[32rem]">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors z-10" />
                            <input
                                type="text"
                                placeholder="Search policies, codes, or content..."
                                className="relative w-full pl-10 pr-12 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-sm text-slate-700 focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 transition-all placeholder:text-slate-400 shadow-sm"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 opacity-100 group-focus-within:opacity-0 transition-opacity duration-200 z-10">
                                <kbd className="hidden md:inline-flex items-center h-5 border border-slate-200 rounded px-1.5 font-sans text-[10px] font-medium text-slate-500 bg-white shadow-sm">Ctrl K</kbd>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 lg:gap-4">
                        <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2.5 h-1.5 w-1.5 bg-red-500 rounded-full ring-2 ring-white"></span>
                        </button>

                        {/* Settings Dropdown for Auth */}
                        <div className="relative">
                            <button
                                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                                className={cn(
                                    "p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors",
                                    isSettingsOpen && "bg-slate-100 text-slate-900"
                                )}
                            >
                                <Settings size={20} />
                            </button>

                            {isSettingsOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={() => setIsSettingsOpen(false)}
                                    ></div>
                                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-fade-in origin-top-right">
                                        <div className="px-4 py-2 border-b border-slate-50 mb-1">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Settings</p>
                                        </div>
                                        {isAdmin ? (
                                            <>
                                                <div className="px-4 py-2">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="h-7 w-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs ring-2 ring-white shadow-sm">AD</div>
                                                        <div>
                                                            <p className="text-sm font-semibold text-slate-700 leading-tight">Administrator</p>
                                                            <p className="text-[10px] text-slate-400 leading-tight">admin@portal.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-px bg-slate-100 my-1"></div>
                                                <button className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                                                    <Users size={16} className="text-slate-400" />
                                                    User Management
                                                </button>
                                                <button className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                                                    <BookOpen size={16} className="text-slate-400" />
                                                    Audit Logs
                                                </button>
                                                <div className="h-px bg-slate-100 my-1"></div>
                                                {onDownloadSource && (
                                                    <button
                                                        onClick={() => {
                                                            onDownloadSource();
                                                            setIsSettingsOpen(false);
                                                        }}
                                                        className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                                                    >
                                                        <FileCode size={16} className="text-slate-400" />
                                                        Download constants.ts
                                                    </button>
                                                )}
                                                {onExportAll && (
                                                    <button
                                                        onClick={() => {
                                                            onExportAll();
                                                            setIsSettingsOpen(false);
                                                        }}
                                                        className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                                                    >
                                                        <Download size={16} className="text-slate-400" />
                                                        Export Data
                                                    </button>
                                                )}
                                                {onImport && (
                                                    <button
                                                        onClick={handleImportClick}
                                                        className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                                                    >
                                                        <Upload size={16} className="text-slate-400" />
                                                        Import Data
                                                    </button>
                                                )}
                                                <div className="h-px bg-slate-100 my-1"></div>
                                                <button
                                                    onClick={() => {
                                                        onLogout();
                                                        setIsSettingsOpen(false);
                                                    }}
                                                    className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
                                                >
                                                    <LogOut size={16} />
                                                    Sign Out
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => {
                                                        onLoginClick();
                                                        setIsSettingsOpen(false);
                                                    }}
                                                    className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium"
                                                >
                                                    <Lock size={16} className="text-slate-400 group-hover:text-indigo-500" />
                                                    Admin Login
                                                </button>
                                                <div className="px-4 py-2 text-xs text-slate-400 text-center border-t border-slate-50 mt-1">
                                                    Version 2.1.0-release
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="h-8 w-px bg-slate-200 mx-1 hidden sm:block"></div>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors px-3 py-1.5 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-100">
                            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                                <span className="text-[10px] font-bold">?</span>
                            </div>
                            Help & Docs
                        </a>
                    </div>
                </header>

                {/* Scrollable Content Area */}
                <main ref={mainContentRef} className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar">
                    {children}
                </main>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".json"
                />

            </div>
        </div>
    );
};
