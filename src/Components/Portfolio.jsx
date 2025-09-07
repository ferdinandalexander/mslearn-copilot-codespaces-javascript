/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "[Article] Enabling High Availability and Secure Access for a Social Research Organization on AWS",
    description:
      "The architecture was designed to meet the outlined solution requirements, focusing on security, high availability, scalability, and access control. Below is a breakdown of the design decisions made to fulfill these needs:",
    url: "https://www.linkedin.com/pulse/report-alx-capstone-project-example-social-research-alexander-syw7f/?trackingId=sGmin1yfT1%2BzEW2HgdbnCA%3D%3D",
  },
  {
    title: "A Non-Profit Organization Website",
    description:
      "A user-friendly, impactful website designed for The Restored Heart Foundation, highlighting its mission, programs, and stories while encouraging donations and community engagement.",
    url: "https://therhfoundation.org/",
  },
  {
    title: "A Real Estate Website",
    description:
      "A modern, responsive WordPress website built for Gerry Ikputu & Partners, showcasing real estate listings with seamless navigation and an elegant property search experience.",
    url: "https://gerryikputu.com",
  },
  {
    title: "UI/UX For A Project Management Website",
    description:
      "A clean, intuitive UI/UX design that simplifies project tracking, enhances team collaboration, and streamlines task management.",
    url: "https://www.figma.com/design/tUmN34h1bsMGoK3Its97tm/Zuri-Mini-Project---Styles-Guide?node-id=0-1&p=f",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
