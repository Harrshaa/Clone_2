import React from 'react'
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Login from './components/Login';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Register from './components/Register';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
    <Header />
    <Outlet />
    <Footer />
    </div>
    
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path:"/register",
        element: <Register/>,
      },
      {
        path:"/login",
        element: <Login />
      }
    ],
   
  },
]);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

export default App