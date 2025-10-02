interface DashboardHeaderProps {
  userName?: string;
}

export function DashboardHeader({ userName = 'Mahfuzul Nabil' }: DashboardHeaderProps) {
  return (
    <header className="bg-white px-8 py-6 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="flex items-center gap-4">
        {/* Search */}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="9" r="6" />
            <path d="M14 14l4 4" strokeLinecap="round" />
          </svg>
        </button>

        {/* Notifications */}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 2a6 6 0 0 1 6 6v3.586a1 1 0 0 0 .293.707l1.414 1.414A1 1 0 0 1 17 15H3a1 1 0 0 1-.707-1.707l1.414-1.414A1 1 0 0 0 4 11.586V8a6 6 0 0 1 6-6z" />
            <path d="M8 17a2 2 0 1 0 4 0" strokeLinecap="round" />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {userName.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-900">{userName}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
