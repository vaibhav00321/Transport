import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', icon: 'grid', path: '/dashboard' },
    { name: 'Shipments', icon: 'truck', path: '/dashboard/shipments' },
    { name: 'Tracking', icon: 'map', path: '/dashboard/tracking' },
    { name: 'Billing', icon: 'credit-card', path: '/dashboard/billing' },
    { name: 'Settings', icon: 'settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-6">
        <h1 className="text-xl font-bold text-blue-600">QTR</h1>
      </div>
      
      <nav className="mt-6">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="px-6 py-2">
              <Link
                to={item.path}
                className={`flex items-center py-2 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(item.name.toLowerCase())}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon === 'grid' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  )}
                  {item.icon === 'truck' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM12 16a4 4 0 00-4-4H5a1 1 0 00-1 1v6a1 1 0 001 1h3a4 4 0 004-4z" />
                  )}
                  {item.icon === 'map' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  )}
                  {item.icon === 'credit-card' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  )}
                  {item.icon === 'settings' && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  )}
                </svg>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 w-full p-6">
        <div className="flex items-center">
          <img 
            src="https://randomuser.me/api/portraits/men/1.jpg" 
            alt="User" 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-gray-500">john@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;