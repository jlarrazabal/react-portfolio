import React from "react";
import appointmentManager from "../../assets/images/appointment-manager.png";
import codeQuiz from "../../assets/images/code-quiz.png";
import cinemaPlaylist from "../../assets/images/personal-cinema-playlist.png";
import techBlog from "../../assets/images/tech-blog.png";
import weatherDashboard from "../../assets/images/weather-dashboard.png";

function Projects(props) {
  const projectsData = [
    {
    projectName: "Appointment Manager",
    imageSrc: appointmentManager,
    imageAlt: "Appointment Manager home-page image",
    description: "A web application that allows users to sign-up/login, search times available for any given date to book an appointment, create an appointment with the ability to pay for the service at the end of the process.",
    githubRepo: "https://github.com/jlarrazabal/appointment-manager",
    appUrl: "https://fathomless-eyrie-79379.herokuapp.com/"
    },
    {
    projectName: "Tech Blog",
    imageSrc: techBlog,
    imageAlt: "Tech Blog home-page image",
    description: "A web application that allows users to sign-login in, create posts, see all the posts created by themselves, and add comments to other users' posts.",
    githubRepo: "https://github.com/jlarrazabal/tech-blog",
    appUrl: "https://still-garden-50373.herokuapp.com/"
    },
    {
    projectName: "Personal Cinema Playlist",
    imageSrc: cinemaPlaylist,
    imageAlt: "Personal Cinema Playlist home-page image",
    description: "A web application lets users search for movies, add them to their queue, provide reviews and ratings, and share their reviews on Facebook.",
    githubRepo: "https://github.com/jlarrazabal/movies-watchlist",
    appUrl: "https://jlarrazabal.github.io/movies-watchlist/"
    },
    {
    projectName: "Weather Dashboard",
    imageSrc: weatherDashboard,
    imageAlt: "Weather Dashboard home-page image",
    description: "A web application that returns the current weather and next 5 days forecast from the Open Weather Map API for a city searched by the user.",
    githubRepo: "https://github.com/jlarrazabal/weather-dashboard",
    appUrl: "https://jlarrazabal.github.io/weather-dashboard/"
    },
    {
    projectName: "Code Quiz",
    imageSrc: codeQuiz,
    imageAlt: "Code Quiz home-page image",
    description: "A web application presents a predefined set of questions that the user must answer against time. The results can be saved and stored for future reference.",
    githubRepo: "https://github.com/jlarrazabal/code-quiz",
    appUrl: "https://jlarrazabal.github.io/code-quiz/"
    }
  ];

  const projects = projectsData.map(project => {
    return(
      <div className="flexbox">
        <article className="card">
          <h4 className="width-85"><a href={project.githubRepo} target="_blank" rel="noreferrer">{project.projectName}</a></h4>
          <a href={project.appUrl} target="_blank" rel="noreferrer"><img className="width-85" src={project.imageSrc} alt={project.imageAlt}></img></a>
          <p className="width-85"><span>Summary: </span>{project.description}</p>
          </article>
      </div>
    );
  });

  return (
    <section>
      <h2 id="my-projects" className="title">My Projects</h2>
      {projects}
    </section>
  );
}

export default Projects;
