import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { index: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);

export default router;
