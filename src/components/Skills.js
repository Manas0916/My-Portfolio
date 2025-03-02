// /* eslint-disable jsx-a11y/img-redundant-alt */
// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import colorSharp from "../assets/img/color-sharp.png"
// import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
// import ChangingProgressProvider from "./ChangingProgressProvider"
// import 'react-circular-progressbar/dist/styles.css';


// function Skills() {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };
//   return (
//     <section className="skill mt-5" id="skills">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="skill-bx wow zoomIn">
//               <h2>Skills</h2>
//               <p className='justify-content'>Driven by a desire to gain technical and industrial knowledge, I am always open to learning and contributing to the community through innovation and hard work. 
//                 My proficiency lies in the Java programming language, and I possess a deep understanding of Data Structures and Algorithms. Additionally, 
//                 I have developed several projects using the MERN stack.</p>
//               <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

//                 {/* Java */}
//                 <div className="item">
//                   <ChangingProgressProvider values={[0, 60]}>
//                   {percentage => (
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}%`}
//                       background
//                       backgroundPadding={20}
//                       styles={buildStyles({
//                         backgroundColor: "#151515",
//                         textColor: "#fff",
//                         textSize: '0.8rem',
//                         pathColor: "#863494",
//                         trailColor: "transparent",
//                         pathTransitionDuration: 1
//                       })} />)}
//                   </ChangingProgressProvider>
//                   <h5>Java</h5>
//                 </div>

//                 {/* ReactJs */}
//                 <div className="item">
//                   <ChangingProgressProvider values={[0, 60]}>
//                   {percentage => (
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}%`}
//                       background
//                       backgroundPadding={20}
//                       styles={buildStyles({
//                         backgroundColor: "#151515",
//                         textColor: "#fff",
//                         textSize: '0.8rem',
//                         pathColor: "#863494",
//                         trailColor: "transparent",
//                         pathTransitionDuration: 1
//                       })} />)}
//                   </ChangingProgressProvider>
//                   <h5>ReactJs</h5>
//                 </div>

//                 {/* NextJS */}
//                 <div className="item">
//                   <ChangingProgressProvider values={[0, 60]}>
//                   {percentage => (
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}%`}
//                       background
//                       backgroundPadding={20}
//                       styles={buildStyles({
//                         backgroundColor: "#151515",
//                         textColor: "#fff",
//                         textSize: '0.8rem',
//                         pathColor: "#863494",
//                         trailColor: "transparent",
//                         pathTransitionDuration: 1
//                       })} />)}
//                   </ChangingProgressProvider>
//                   <h5>NextJs</h5>
//                 </div>

//                 {/* Spring Boot */}
//                 <div className="item">
//                   <ChangingProgressProvider values={[0, 50]}>
//                   {percentage => (
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}%`}
//                       background
//                       backgroundPadding={20}
//                       styles={buildStyles({
//                         backgroundColor: "#151515",
//                         textColor: "#fff",
//                         textSize: '0.8rem',
//                         pathColor: "#863494",
//                         trailColor: "transparent",
//                         pathTransitionDuration: 1
//                       })} />)}
//                   </ChangingProgressProvider>
//                   <h5>Spring Boot</h5>
//                 </div>

//                 {/* HTML */}
//                 <div className="item">
//                   <ChangingProgressProvider values={[0, 60]}>
//                   {percentage => (
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}%`}
//                       background
//                       backgroundPadding={20}
//                       styles={buildStyles({
//                         backgroundColor: "#151515",
//                         textColor: "#fff",
//                         textSize: '0.8rem',
//                         pathColor: "#863494",
//                         trailColor: "transparent",
//                         pathTransitionDuration: 1
//                       })} />)}
//                   </ChangingProgressProvider>
//                   <h5>Html</h5>
//                 </div>

//                 {/* Css */}
//                 <div className="item">
//                   <ChangingProgressProvider values={[0, 50]}>
//                   {percentage => (
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}%`}
//                       background
//                       backgroundPadding={20}
//                       styles={buildStyles({
//                         backgroundColor: "#151515",
//                         textColor: "#fff",
//                         textSize: '0.8rem',
//                         pathColor: "#863494",
//                         trailColor: "transparent",
//                         pathTransitionDuration: 1
//                       })} />)}
//                   </ChangingProgressProvider>
//                   <h5>Css</h5>
//                 </div>
                
//                 {/* Javascript */}
//                 <div className="item">
//                   <ChangingProgressProvider values={[0, 50]}>
//                   {percentage => (
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}%`}
//                       background
//                       backgroundPadding={20}
//                       styles={buildStyles({
//                         backgroundColor: "#151515",
//                         textColor: "#fff",
//                         textSize: '0.8rem',
//                         pathColor: "#863494",
//                         trailColor: "transparent",
//                         pathTransitionDuration: 1
//                       })} />)}
//                   </ChangingProgressProvider>
//                   <h5>Javascript</h5>
//                 </div>

//                 {/* Node */}
//                 <div className="item">
//                   <ChangingProgressProvider values={[0, 50]}>
//                   {percentage => (
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}%`}
//                       background
//                       backgroundPadding={20}
//                       styles={buildStyles({
//                         backgroundColor: "#151515",
//                         textColor: "#fff",
//                         textSize: '0.8rem',
//                         pathColor: "#863494",
//                         trailColor: "transparent",
//                         pathTransitionDuration: 1
//                       })} />)}
//                   </ChangingProgressProvider>
//                   <h5>Node</h5>
//                 </div>

//                 {/* ExpressJs */}
//                 <div className="item">
//                   <ChangingProgressProvider values={[0, 50]}>
//                   {percentage => (
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}%`}
//                       background
//                       backgroundPadding={20}
//                       styles={buildStyles({
//                         backgroundColor: "#151515",
//                         textColor: "#fff",
//                         textSize: '0.8rem',
//                         pathColor: "#863494",
//                         trailColor: "transparent",
//                         pathTransitionDuration: 1
//                       })} />)}
//                   </ChangingProgressProvider>
//                   <h5>ExpressJs</h5>
//                 </div>

//                 {/* MongoDB */}
//                 <div className="item">
//                   <ChangingProgressProvider values={[0, 40]}>
//                   {percentage => (
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}%`}
//                       background
//                       backgroundPadding={20}
//                       styles={buildStyles({
//                         backgroundColor: "#151515",
//                         textColor: "#fff",
//                         textSize: '0.8rem',
//                         pathColor: "#863494",
//                         trailColor: "transparent",
//                         pathTransitionDuration: 1
//                       })} />)}
//                   </ChangingProgressProvider>
//                   <h5>MongoDb</h5>
//                 </div>
                    
//                 {/* Git and Github */}
//                 <div className="item">
//                   <ChangingProgressProvider values={[0, 70]}>
//                   {percentage => (
//                     <CircularProgressbar
//                       value={percentage}
//                       text={`${percentage}%`}
//                       background
//                       backgroundPadding={20}
//                       styles={buildStyles({
//                         backgroundColor: "#151515",
//                         textColor: "#fff",
//                         textSize: '0.8rem',
//                         pathColor: "#863494",
//                         trailColor: "transparent",
//                         pathTransitionDuration: 1
//                       })} />)}
//                   </ChangingProgressProvider>
//                   <h5>Git and Github</h5>
//                 </div>

//               </Carousel>
//             </div> 
//           </div>
//         </div>
//       </div>
//       <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   );
// }

// export default Skills;


const skills = {
  Languages: ["Java", "C", "Python", "JavaScript", "SQL", "CSS"],
  "Technologies/Frameworks": [
    "React.js",
    "Redux",
    "Next.js",
    "Spring Boot",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "REST API",
    "Git",
    "GitHub",
    "Django",
    "Docker",
    "MySQL",
    "PostgreSQL",
    "REST API",
    "Django REST Framework",
    "Swagger",
    "JSON",
  ],
  Coursework: [
    "Data Structures",
    "Algorithms",
    "Database Management System",
    "Networking",
    "Operating Systems",
    "Object-Oriented Programming",
    "Error Handling",
    "SOLID Principles",
  ],
};

const Skills = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="mb-4 mt-4 fs-1">My Skills</h2>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h5 className="skill-category text-2xl font-semibold mb-2 text-blue-500">
                {category}
              </h5>
              <div className="flex flex-wrap justify-center mb-4 gap-3">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className="skill-name px-4 py-2 bg-gray-800 rounded-lg max-w-auto text-sm font-medium shadow-md hover:scale-105 transition-transform"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
