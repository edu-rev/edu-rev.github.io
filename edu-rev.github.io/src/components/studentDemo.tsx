// studentDemo.tsx
import React, { useState, useEffect } from 'react';
import studentDemoImage from '../images/sd.png';
import './studentDemo.css';
import './info.css';

// function StudentDemo() {
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setOffset(window.pageYOffset);
//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="student-demo-container" style={{ backgroundImage: `url(${studentDemoImage})` }}>
//       <div className="student-demo-content" style={{ transform: `translateY(${(offset - 500) * 0.2}px)` }}>
//         <h2>Student Demo</h2>
//         <p>This is the demo for students.</p>
//       </div>
//     </div>
//   );
// }

function StudentDemo() {

  return (
      <div
         className="background-image"
         style={{ backgroundImage: `url(${studentDemoImage})` }}
      >
         <div className="overlay" />
      </div>
  )
}

export default StudentDemo;
