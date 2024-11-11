import React, { useState } from 'react';

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-section">
            <button className="accordion" onClick={toggleAccordion}>
                {title}
            </button>
            {isOpen && <div className="panel">{children}</div>}
        </div>
    );
}

export default Accordion;
