import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

import Info from './components/info';
import StudentDemo from './components/studentDemo';
import TeacherDemo from './components/teacherDemo';

function App() {
  useEffect(() => {
    const parallax = document.querySelectorAll('.parallax-image');

    window.addEventListener('scroll', () => {
      let scrollPosition = window.pageYOffset;

      parallax.forEach((element) => {
        (element as HTMLElement).style.transform = `translate3d(0, ${scrollPosition * 0.5}px, 0)`;
      });
    });
  }, []);

  const infoRef = useRef<HTMLDivElement>(null);
  const studentDemoRef = useRef<HTMLDivElement>(null);
  const teacherDemoRef = useRef<HTMLDivElement>(null);
  const shouldScrollToStudentDemo = Math.random() >= 0.5; // Generate random boolean value

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 3);
    let elementRef;

    switch (randomNumber) {
      case 0:
        elementRef = infoRef;
        break;
      case 1:
        elementRef = studentDemoRef;
        break;
      case 2:
        elementRef = teacherDemoRef;
        break;
      default:
        elementRef = infoRef;
        break;
    }

    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <div ref={infoRef}>
        <Info />
      </div>
      <div ref={studentDemoRef}>
        <StudentDemo />
      </div>
      <div ref={teacherDemoRef}>
        <TeacherDemo />
      </div>
    </div>
  );
}

export default App;
