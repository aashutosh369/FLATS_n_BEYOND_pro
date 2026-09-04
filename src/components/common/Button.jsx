import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  icon: Icon,
  className = '',
  type = 'button',
  fullWidth = false
}) {
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  };

  const variantClasses = {
    primary: 'btn-primary',
    gold: 'btn-gold',
    outline: 'btn-outline'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variantClasses[variant] || 'btn-primary'} ${sizeClasses[size] || ''} ${fullWidth ? 'w-full' : ''} ${className}`}
      style={fullWidth ? { width: '100%' } : {}}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />}
      <span>{children}</span>
    </button>
  );
}
