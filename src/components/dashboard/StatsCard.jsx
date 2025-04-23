const StatsCard = ({ title, value, change, trend }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-gray-900 mr-2">{value}</span>
          <span className={`text-sm font-medium ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {change}
            {trend === 'up' ? (
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
      </div>
    );
  };
  
  export default StatsCard;