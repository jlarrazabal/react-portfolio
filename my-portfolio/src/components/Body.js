import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";


function Body() {

  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch(page) {
      case "AboutMe":
        return <AboutMe />;
      case "ContactMe":
        return <ContactMe />;
      case "Projects":
        return <Projects />;
      default:
        return <Home />;
    }
  }

  const pageChange = (page) => setPage(page);

  return (
    <div className="content-container">
      <div className="content-wrap">
        <Header page={page} pageChange={pageChange} />
        <main>
          {renderPage()}
          </main>
      </div>
      <Footer page={page} pageChange={pageChange} />
    </div>
  );
}

export default Body;
