// teacherDemo.tsx
import React, { useState, useEffect } from 'react';
import teacherDemoImage from '../images/sky.png';
import './teacherDemo.css';

function TeacherDemo() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="teacher-demo-container" style={{ backgroundImage: `url(${teacherDemoImage})` }}>
      <div className="teacher-demo-content" style={{ transform: `translateY(${(offset - 1500) * 0.2}px)` }}>
        <h2>Teacher Demo</h2>
        <p>This is the demo for teachers.</p>
      </div>
    </div>
  );
}

export default TeacherDemo;
