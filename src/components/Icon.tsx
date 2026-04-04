import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: string;
  fill?: boolean;
  weight?: number;
}

const Icon: React.FC<IconProps> = ({ name, className = "", size = "24px", fill = false, weight = 400 }) => {
  return (
    <span 
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
        display: 'inline-block',
        verticalAlign: 'middle',
        userSelect: 'none'
      }}
    >
      {name}
    </span>
  );
};

export default Icon;
