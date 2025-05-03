import React from 'react';

function SectionLink({ targetId, children }) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}

export default SectionLink;