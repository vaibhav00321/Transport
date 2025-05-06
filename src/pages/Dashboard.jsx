import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiTruck, FiPackage, FiMap, FiCreditCard, FiSettings, 
  FiHome, FiBell, FiUser, FiCalendar, FiBarChart2, 
  FiPlus, FiSearch, FiDownload, FiFilter, FiRefreshCw
} from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for shipments
  const [shipments, setShipments] = useState([
    { 
      id: "SP-1001", 
      date: "2023-06-15", 
      destination: "New York, NY", 
      status: "delivered", 
      tracking: "DHL123456789", 
      weight: "2.5kg",
      eta: "2 days",
      value: "$150"
    },
    { 
      id: "SP-1002", 
      date: "2023-06-16", 
      destination: "Los Angeles, CA", 
      status: "in_transit", 
      tracking: "UPS987654321", 
      weight: "5.1kg",
      eta: "1 day",
      value: "$230"
    },
    { 
      id: "SP-1003", 
      date: "2023-06-17", 
      destination: "Chicago, IL", 
      status: "processing", 
      tracking: "FEDEX456123789", 
      weight: "1.8kg",
      eta: "3 days",
      value: "$89"
    },
    { 
      id: "SP-1004", 
      date: "2023-06-18", 
      destination: "Houston, TX", 
      status: "processing", 
      tracking: "USPS789456123", 
      weight: "3.2kg",
      eta: "4 days",
      value: "$175"
    },
    { 
      id: "SP-1005", 
      date: "2023-06-19", 
      destination: "Miami, FL", 
      status: "in_transit", 
      tracking: "DHL321654987", 
      weight: "4.5kg",
      eta: "1 day",
      value: "$210"
    }
  ]);

  // Stats data
  const stats = [
    { title: "Total Shipments", value: "24", change: "+12%", trend: "up" },
    { title: "In Transit", value: "8", change: "+3%", trend: "up" },
    { title: "Delivered", value: "16", change: "+8%", trend: "up" },
    { title: "Avg. Delivery Time", value: "2.4 days", change: "-0.5", trend: "down" }
  ];

  // Fetch notifications (mock)
  useEffect(() => {
    setNotifications([
      { id: 1, text: "Your shipment SP-1002 has been picked up", time: "2 hours ago", read: false },
      { id: 2, text: "New feature: Real-time tracking updates", time: "1 day ago", read: true },
      { id: 3, text: "Payment received for invoice #INV-2023-06-001", time: "2 days ago", read: true }
    ]);
  }, []);

  // Filter shipments based on search
  const filteredShipments = shipments.filter(shipment =>
    shipment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shipment.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shipment.tracking.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const refreshData = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-gray-800 border-r border-gray-700">
        <div className="p-6 flex items-center">
          <FiTruck className="text-blue-400 text-2xl mr-2" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            QTR
          </span>
        </div>
        
        <nav className="flex-1 overflow-y-auto">
          <div className="px-4 py-2">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'dashboard' 
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-400/30' 
                  : 'text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <FiHome className="mr-3" />
              Dashboard
            </button>
            
            <button 
              onClick={() => setActiveTab('shipments')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors mt-1 ${
                activeTab === 'shipments' 
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-400/30' 
                  : 'text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <FiPackage className="mr-3" />
              Shipments
            </button>
            
            <button 
              onClick={() => setActiveTab('tracking')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors mt-1 ${
                activeTab === 'tracking' 
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-400/30' 
                  : 'text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <FiMap className="mr-3" />
              Tracking
            </button>
            
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors mt-1 ${
                activeTab === 'analytics' 
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-400/30' 
                  : 'text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <FiBarChart2 className="mr-3" />
              Analytics
            </button>
            
            <button 
              onClick={() => setActiveTab('billing')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors mt-1 ${
                activeTab === 'billing' 
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-400/30' 
                  : 'text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <FiCreditCard className="mr-3" />
              Billing
            </button>
          </div>
          
          <div className="border-t border-gray-700 mt-4 pt-4 px-4">
            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'settings' 
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-400/30' 
                  : 'text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <FiSettings className="mr-3" />
              Settings
            </button>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center p-3 bg-gray-700/50 rounded-lg">
            <div className="relative">
              <img 
                src="https://randomuser.me/api/portraits/men/1.jpg" 
                alt="User" 
                className="w-10 h-10 rounded-full"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800"></div>
            </div>
            <div className="ml-3">
              <div className="font-medium">APS</div>
              <div className="text-xs text-gray-400">Premium Member</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold capitalize">{activeTab.replace('_', ' ')}</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-gray-700 relative">
                <FiBell />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full"></span>
                )}
              </button>
              
              {/* Notifications dropdown */}
              <div className="hidden absolute right-0 mt-2 w-72 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-10">
                <div className="p-3 border-b border-gray-700 font-medium">Notifications</div>
                <div className="divide-y divide-gray-700">
                  {notifications.map(notification => (
                    <div key={notification.id} className={`p-3 ${!notification.read ? 'bg-blue-900/10' : ''}`}>
                      <div className="text-sm">{notification.text}</div>
                      <div className="text-xs text-gray-400 mt-1">{notification.time}</div>
                    </div>
                  ))}
                </div>
                <div className="p-2 text-center text-sm text-blue-400 border-t border-gray-700">
                  <button>View All</button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <img 
                src="https://randomuser.me/api/portraits/men/1.jpg" 
                alt="User" 
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 hidden md:inline">APS</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-900/50">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-400/30 transition-all"
              >
                <h3 className="text-gray-400 text-sm font-medium mb-1">{stat.title}</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-100 mr-2">{stat.value}</span>
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                    {stat.trend === 'up' ? (
                      <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recent Shipments */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden mb-8"
          >
            <div className="p-4 border-b border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-lg font-semibold mb-2 sm:mb-0">Recent Shipments</h2>
              <div className="flex space-x-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search shipments..."
                    className="block w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button 
                  className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg border border-gray-600 flex items-center"
                  onClick={refreshData}
                  disabled={isLoading}
                >
                  <FiRefreshCw className={`mr-1 ${isLoading ? 'animate-spin' : ''}`} />
                  <span className="hidden sm:inline">Refresh</span>
                </button>
                <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center">
                  <FiPlus className="mr-1" />
                  <span className="hidden sm:inline">New Shipment</span>
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Shipment ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Destination
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Tracking #
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800/50 divide-y divide-gray-700">
                  {filteredShipments.map((shipment) => (
                    <tr key={shipment.id} className="hover:bg-gray-700/30">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-blue-400">{shipment.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FiCalendar className="text-gray-400 mr-2" />
                          <span>{shipment.date}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>{shipment.destination}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          shipment.status === 'delivered' 
                            ? 'bg-green-900/50 text-green-400'
                            : shipment.status === 'in_transit'
                              ? 'bg-blue-900/50 text-blue-400'
                              : 'bg-yellow-900/50 text-yellow-400'
                        }`}>
                          {shipment.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-400 font-mono">{shipment.tracking}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-400 hover:text-blue-300 mr-3">Track</button>
                        <button className="text-gray-400 hover:text-gray-300">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-700 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> shipments
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600">
                  Previous
                </button>
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  Next
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats and Calendar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Delivery Performance */}
{/* Delivery Performance */}
<div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 lg:col-span-2">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-semibold">Delivery Performance</h3>
    <div className="flex space-x-2">
      <button className="px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded-lg border border-gray-600">
        Weekly
      </button>
      <button className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded-lg">
        Monthly
      </button>
    </div>
  </div>
  
  <div className="h-64">
    <Line
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'On-Time Delivery Rate',
            data: [82, 75, 89, 93, 78, 85],
            backgroundColor: 'rgba(139, 92, 246, 0.2)',
            borderColor: 'rgba(167, 139, 250, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(167, 139, 250, 1)',
            pointBorderColor: 'rgba(30, 41, 59, 1)',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointHoverBackgroundColor: 'rgba(196, 181, 253, 1)',
            pointHoverBorderColor: 'rgba(30, 41, 59, 1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Avg. Delivery Time (days)',
            data: [2.1, 2.4, 1.9, 1.7, 2.3, 2.0],
            backgroundColor: 'rgba(74, 222, 128, 0.1)',
            borderColor: 'rgba(74, 222, 128, 1)',
            borderWidth: 2,
            borderDash: [5, 5],
            pointBackgroundColor: 'rgba(74, 222, 128, 1)',
            pointBorderColor: 'rgba(30, 41, 59, 1)',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointHoverBackgroundColor: 'rgba(134, 239, 172, 1)',
            pointHoverBorderColor: 'rgba(30, 41, 59, 1)',
            tension: 0.4,
            yAxisID: 'y1'
          }
        ]
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'rgba(209, 213, 219, 1)',
              font: {
                size: 12
              },
              padding: 20,
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          tooltip: {
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            titleColor: 'rgba(209, 213, 219, 1)',
            bodyColor: 'rgba(209, 213, 219, 1)',
            borderColor: 'rgba(71, 85, 105, 1)',
            borderWidth: 1,
            padding: 12,
            usePointStyle: true,
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += context.datasetIndex === 0 ? 
                    `${context.parsed.y}%` : 
                    `${context.parsed.y} days`;
                }
                return label;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(71, 85, 105, 0.3)',
              drawBorder: false
            },
            ticks: {
              color: 'rgba(156, 163, 175, 1)'
            }
          },
          y: {
            min: 50,
            max: 100,
            grid: {
              color: 'rgba(71, 85, 105, 0.3)',
              drawBorder: false
            },
            ticks: {
              color: 'rgba(156, 163, 175, 1)',
              callback: function(value) {
                return value + '%';
              }
            }
          },
          y1: {
            position: 'right',
            min: 1,
            max: 3,
            grid: {
              drawOnChartArea: false,
              drawBorder: false
            },
            ticks: {
              color: 'rgba(156, 163, 175, 1)',
              callback: function(value) {
                return value + ' days';
              }
            }
          }
        },
        elements: {
          line: {
            borderWidth: 2
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        }
      }}
    />
  </div>
</div>
            {/* Upcoming Deliveries */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Upcoming Deliveries</h3>
              <div className="space-y-4">
                {shipments.filter(s => s.status === 'in_transit').slice(0, 3).map(shipment => (
                  <div key={shipment.id} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600">
                    <div className="flex justify-between">
                      <span className="font-medium">{shipment.id}</span>
                      <span className="text-blue-400 text-sm">{shipment.eta}</span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{shipment.destination}</div>
                    <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: shipment.status === 'delivered' ? '100%' : '60%' }}
                      ></div>
                    </div>
                  </div>
                ))}
                <button className="w-full mt-2 text-center text-blue-400 hover:text-blue-300 text-sm">
                  View All Upcoming
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-700">
              {[
                { id: 1, action: "Created new shipment SP-1006", time: "2 hours ago", user: "You" },
                { id: 2, action: "Shipment SP-1002 picked up by carrier", time: "5 hours ago", user: "System" },
                { id: 3, action: "Payment received for invoice #INV-2023-06-002", time: "1 day ago", user: "System" },
                { id: 4, action: "Updated profile information", time: "2 days ago", user: "You" }
              ].map(activity => (
                <div key={activity.id} className="p-4 hover:bg-gray-700/30">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <FiUser className="text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-700 text-center">
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                View All Activity
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;