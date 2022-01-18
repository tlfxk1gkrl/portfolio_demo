import { useState } from "react";

//pages
import Profile from "./pages/Profile";
import Project from "./pages/Project";

//components
import Toolbar from "./components/Toolbar";
import { useEffect } from "react/cjs/react.development";

// #FACF38
// #EC8235
// #5B86F3

function App() {
  const [selectedItem, setSelectedItem] = useState(1);

  useEffect(() => {
    const watch = () => {
      if (selectedItem === 2) window.scrollTo(0, window.innerHeight);
      else if (selectedItem === 1) window.scrollTo(0, 0);
    };
    watch();
    return () => {};
  }, [selectedItem]);

  const handleWheel = () => {
    if (window.scrollY >= window.innerHeight) setSelectedItem(2);
    else if (window.scrollY < window.innerHeight / 2) setSelectedItem(1);
  };

  return (
    <div onWheel={handleWheel}>
      <Toolbar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <Profile />
      <Project setSelectedItem={setSelectedItem} />
    </div>
  );
}

export default App;
