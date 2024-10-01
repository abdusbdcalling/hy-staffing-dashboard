const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#E5383B] text-white px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
