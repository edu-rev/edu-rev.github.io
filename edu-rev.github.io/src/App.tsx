import React, { useEffect } from 'react';
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

  return (
    <div>
      <Info />
      {/* <StudentDemo />
      <TeacherDemo /> */}
    </div>
  );
}

export default App;
