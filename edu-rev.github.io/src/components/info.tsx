import React from "react";
import "./info.css";
import vanGoh from "../images/sky.png";

const Info: React.FC = () => {
   // const handleScroll = () => {
   //    const scrollPosition = window.pageYOffset;
   //    const backgroundImages = [vanGoh, sd];
   //    const numImages = backgroundImages.length;
   //    const imageIndex = Math.floor((scrollPosition / window.innerHeight) % numImages);
   //    const backgroundImage = backgroundImages[imageIndex];
   //    document.body.style.backgroundImage = `url(${backgroundImage})`;
   // };
  
   // React.useEffect(() => {
   //    window.addEventListener("scroll", handleScroll);
   //    return () => window.removeEventListener("scroll", handleScroll);
   // }, []);

   return (
      <div
         className="background-image"
         style={{ backgroundImage: `url(${vanGoh})` }}
      >
         <div className="overlay" />
            <div className="company-info">
               <h1 className="title">Free and Personalized Education</h1>
               <a
               href="https://docs.google.com/forms/d/e/1FAIpQLScjrA9sDVhZ6Dw4bTzccFJwtNIPEdMx1qnBTm08-VDIPdx4TQ/viewform?usp=sf_link"
               className="apply-button"
               >
               Join Us
               </a>
            </div>
      </div>
   );
};
 
export default Info;
