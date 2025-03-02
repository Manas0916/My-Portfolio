import "animate.css";
import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { MortarboardFill, PersonWorkspace } from "react-bootstrap-icons";
import { FaHackerrank } from "react-icons/fa";
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import colorSharp2 from "../assets/img/color-sharp2.png";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/img7.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  // Experiences and Education
  const experiences = [
    {
      year: "July 2024 - Present",
      title: "SDE - 1 @GeeksForGeeks",
      description: (
        <>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <small>Feature Design and Development for GFG WRITE Portal</small>
            <li>
              Enhanced code block functionality in GFG article editor by
              streamlining language selection, implementing drag-and-drop
              ordering, integrating GPT for multi-language code generation, and
              designing a backend regex solution to selectively hide driver
              code, improving user experience and workflow efficiency.
            </li>
            <li>
              Upgraded the WRITE portal’s React version from 16 to 18 to enable
              new feature integrations and enhance performance.
            </li>
            <li>
              Designed and developed the page creation feature by migrating from
              the Origin server to the WRITE portal, resulting in a 30% cost
              reduction and saving Rs. 1.5 million per month.
            </li>
            <li>
              Optimised the tags addition for articles from a two step procedure
              to a single one which resulted in enhanced user experience.
            </li>
            <li>
              Automated the file upload functionality of the code editor by
              implementing Custom File Upload Plugins which resulted in 20%
              increase in the file addition process.
            </li>
            <li>
              Designed and implemented database lock within the quiz database to
              ensure data integrity and maintain atomicity, enabling efficient
              management of data and concurrency control.
            </li>
          </ul>
        </>
      ),
      icon: <PersonWorkspace />,
    },
    {
      year: "February 2024 - June 2024 (5 months)",
      title: "SDE - Intern @GeeksForGeeks",
      description: (
        <>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <small>Human Resource Management System Features</small>
            <li>
              Modularized the search capabilities of a data visibility platform
              by 30% by developing Employee Search View API in Django with an
              out-of-the box filter method. Categorized Filters based on custom
              fields for efficient search-by-value functionality and improved
              user experience and data organization.
            </li>
            <li>
              Streamlined the employee management schedules flow by integrating
              Work Shift Management APIs into the frontend, authoring RTK
              Queries for seamless CRUD operations.
            </li>
            <li>
              Optimized testing environment by ingesting fake production like
              data through out-of-the box python library scripts which helped
              the developers by 40% in efficient testing.
            </li>
            <li>
              Enhanced the observability and retrieval of the users attendance
              logs by 30% based on custom user-defined criterias by modifying
              the entire model for custom filter functionality in Django Rest
              Framework.
            </li>
          </ul>
        </>
      ),
      icon: <PersonWorkspace />,
    },
    {
      year: "August 2023 - December 2023 (5 months)",
      title: "SDE Intern @Essentia.dev",
      description: (
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>
            Spearheaded the installation and tailored the configuration of
            open-source ERPNext software modules and layouts on Amazon EC2 in
            production environment.
          </li>
          <li>
            Implemented Docker and Nginx to enhance the efficiency and accuracy
            of the company's business processes, optimizing resource allocation
            by 35%
          </li>
          <li>
            The successful integration streamlined operations, contributing to
            improved overall performance.
          </li>
        </ul>
      ),
      icon: <PersonWorkspace />,
    },
    {
      year: "2020 - 2024",
      title: "Dr. A.P.J. Abdul Kalam Technical University",
      description: "Bachelor Of Technology - Computer Science and Engineering",
      icon: <MortarboardFill />,
    },
    // Add more experiences here
  ];

  // Projects

  const projects = [
    {
      title: "Cosmic Coders",
      description:
        "A thriving community dedicated to empowering students and enthusiasts in the ever-evolving realm of computing. Our mission is to ignite a passion for information technology beyond the confines of traditional coursework.",
      imgUrl: img7,
      url: "https://cosmiccoders-official.web.app/",
    },
    {
      title: "Code Campus",
      description:
        "Online learning website dedicated to help students learn coding and providing curated resources in a single place",
      imgUrl: img1,
      url: "https://codecampus363.web.app",
    },
    {
      title: "Invoicer",
      description:
        "App that allows shopkeepers to generate invoice within seconds by following a simple set of instructions.",
      imgUrl: img2,
      url: "https://invoice-app16.firebaseapp.com",
    },
    {
      title: "Contact Manager",
      description:
        "Web contact manager app which can store contacts and user can perform CRUD operations on the contacts.",
      imgUrl: img3,
      url: "https://github.com/Manas0916/Contact-Manager",
    },
    {
      title: "iNotebook",
      description:
        "iNotebook is an online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbance.",
      imgUrl: img4,
      url: "https://github.com/Manas0916/iNoteBook",
    },
    {
      title: "TextUtils",
      description:
        "TextUtils is a utility website which can be used to manipulate your text in the way you want",
      imgUrl: img5,
      url: "https://manas0916.github.io/TextUtils/",
    },
    {
      title: "NewMonkey",
      description:
        "NewsMonkey is a news app which can be used to grab quick daily news bites. If you are interested in news, weather, politics and sports news, newsmonkey is for you!",
      imgUrl: img6,
      url: "https://github.com/Manas0916/NewsMoneky",
    },
  ];

  // Coding Profiles

  const codingProfiles = [
    {
      platform: "LeetCode",
      icon: <SiLeetcode fontSize={"4.5rem"} />,
      username: "Manas_16",
      Link: "https://leetcode.com/Manas_16/",
    },
    {
      platform: "HackerRank",
      icon: <FaHackerrank fontSize={"4.5rem"} />,
      username: "@manas_16",
      Link: "https://www.hackerrank.com/manas_16?hr_r=1",
    },
    {
      platform: "GeeksforGeeks",
      icon: <SiGeeksforgeeks fontSize={"4.5rem"} />,
      username: "manas_16",
      Link: "https://auth.geeksforgeeks.org/user/manas_16",
    },
    {
      platform: "CodeChef",
      icon: <SiCodechef fontSize={"4.5rem"} />,
      username: "manas_16",
      Link: "https://www.codechef.com/users/manas_16",
    },
    // Add more coding profiles here
  ];

  return (
    // Projects
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About Me</h2>
                  <p>
                    Through my journey in the field of Computer Science and
                    Engineering, I have acquired a diverse skill set and a
                    problem-solving mindset. My projects reflect my ability to
                    implement creative solutions and deliver tangible results.
                  </p>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="first"
                    justify={true}
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 mt-5 justify-content-center align-items-center "
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Profiles</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      {/* Experience and Education */}
                      <Tab.Pane eventKey="second">
                        <Container className="d-flex justify-content-center align-items-center">
                          <VerticalTimeline>
                            {experiences.map((experience, index) => (
                              <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element"
                                contentStyle={{
                                  background: "white",
                                  color: "#fff",
                                }}
                                contentArrowStyle={{
                                  borderRight: "25px solid  #f4f4f4",
                                }}
                                date={experience.year}
                                iconStyle={{
                                  background: "#383838",
                                  color: "#fff",
                                }}
                                icon={experience.icon}
                              >
                                <h3 className="vertical-timeline-element-title d-flex justify-content-center text-muted">
                                  {experience.title}
                                </h3>
                                <span className="d-flex h5 justify-content-around m-4 text-muted">
                                  {experience.description}
                                </span>
                              </VerticalTimelineElement>
                            ))}
                          </VerticalTimeline>
                        </Container>

                        {/* Coding Profile */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Container className="justify-content-between">
                          <Row>
                            {codingProfiles.map((profile, index) => (
                              <Col key={index} xs={6} sm={3}>
                                <div className="profile d-flex justify-content-center align-items-center flex-column m-4">
                                  <Link
                                    to={profile.Link}
                                    target="_blank"
                                    className="text-decoration-none text-light"
                                  >
                                    <div className="icon m-2">
                                      {profile.icon}
                                    </div>
                                    <div className="platform m-2">
                                      {profile.platform}
                                    </div>
                                    <div className="username m-2">
                                      {profile.username}
                                    </div>
                                  </Link>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Container>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="No img"
      ></img>
    </section>
  );
};

export default Projects;
