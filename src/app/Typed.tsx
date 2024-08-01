'use client'
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingComponent = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    
    const typed = new Typed(typingRef.current, {
      strings: ['smart-contract developer', 'student', 'programmer', 'full-stack developer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className="typing" ref={typingRef}></span>
    </div>
  );
};

export default TypingComponent;
