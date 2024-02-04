import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Play from "./Play";
import GPTSearch from "./GPTSearch";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children:[]
    },
    {
      path: "/browse",
      element: <Browse />,
      
    },
    {
      path: "/browse/:id",
      element: <Play />,
    },
    
  ]);

  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
