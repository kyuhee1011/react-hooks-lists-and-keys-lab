import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const projectData = links.map ((linkObj) => {
    return <a href= {`#${linkObj}`} key={linkObj}> {linkObj}</a>
})
  return (
    <nav>
      {projectData}
    </nav>
  );
}

export default NavBar;
