import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routing from "./component/Router/Routing";
import Footer from "./component/Comon/Footer";
import Home from "./component/pages/Home";
// import Navbar from "./component/Comon/Navbar";
// import Home from "./component/pages/Home";
// import About from "./component/pages/About";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routing />
      <Home />
      <Footer />
    </>
  );
}

export default App;

// import React from "react";
// import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./component/Home";
// import Error from "./component/Error";
// import About from "./component/About";
// import Contact from "./component/Contact";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <Error />,
//     children: [
//       { path: "/about", element: <About /> },
//       { path: "/contact", element: <Contact /> },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
