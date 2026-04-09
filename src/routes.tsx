import { createBrowserRouter } from "react-router";
import { Default } from "./layout/Default";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ContactPage } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
        path: '/contact',
        element: <ContactPage/>
      }
    ]
  }
])