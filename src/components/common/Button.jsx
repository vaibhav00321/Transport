const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-200';
    
    const variants = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
      outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    };
  
    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;