const Input = ({ 
    id, 
    name, 
    type = 'text', 
    placeholder = '', 
    value, 
    onChange, 
    className = '', 
    required = false,
    autoComplete = '',
    ...props 
  }) => {
    return (
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        {...props}
      />
    );
  };
  
  export default Input;