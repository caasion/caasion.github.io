import React, { useState } from 'react'

interface SingleLevelDropdownMenuProps {
  buttonLabel: string;
  items: {
    title: string;
    url?: string;
    action?: () => void;
  }[];
}

const DropDownMenu = ({ buttonLabel, items}: SingleLevelDropdownMenuProps) => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
      <h2 className='nav-header'>{buttonLabel}</h2>
      {open && (
        <div className='fixed'>
          {items.map((item, index) => (
            <p key={index}><a href={item.url}>{item.title}</a></p>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropDownMenu