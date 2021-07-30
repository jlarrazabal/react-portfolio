import React from "react";
import myPicture from "../../assets/images/my-picture.jpg";

function Home() {
  return (
    <section className="flexbox flex-column">
      <img src={myPicture} alt="My picture" className="my-picture"></img>
      <h3 className="greeting-text">Hello, I am Javier, an IT Project Manager, and Web Apps Developer!!</h3>
    </section>
  );
}

export default Home;
