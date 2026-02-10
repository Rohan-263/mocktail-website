import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <nav>Hi, I'm Navbar</nav>
    </main>
  );
};

export default App;
