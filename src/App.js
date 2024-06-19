import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./pages/Layout"
import Error from './pages/Error';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import Login from './pages/Login';
import LoggingLayout from "./pages/LogingLayout"
import References from './pages/References';
import MostSearchedWords from './pages/MostSearchedWords';

import ResultPage from "./pages/ResultPage.jsx"
import UserFavs from './pages/UserFavs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },


      {
        path: "favs",
        element: <UserFavs />
      },
      {
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "refrences",
        element: <References />
      },
      {
        path: "result",
        element: <ResultPage />
      },
      {
        path: "fqa",
        element: <MostSearchedWords />
      },
      {
        path: "sign",
        element: <LoggingLayout />,
        children: [
          {
            index: true,
            element: <Login />
          },
          {
            path: "register",
            element: <Register />
          },

        ]
      },
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
