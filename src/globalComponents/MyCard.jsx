import React from 'react';

function MyCard({
  bgColor = 'bg-surface',
  borderColor = 'border-gray-100',
  rounded = 'none' | 'full' | 'md' | 'lg' | 'xl' | '2xl' | '3xl',
  shadow = 'none' | 'md' | 'lg' | 'xl' | '2xl',
  children
}) {
  return (
    <div
      className={` shadow-${shadow} rounded-${rounded} ${bgColor} ${borderColor}`}
    >
      {children}
    </div>
  );
}

export default MyCard;
