import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./../pages/Login.jsx";
import Home from "./../pages/Home.jsx";
import Feed from "./Feed.jsx";
import SelectedFeed from "./SelectedFeed.jsx";
import Profile from "./Profile.jsx";
import PostContainer from "./PostContainer.jsx";
import FollowerFeed from "./FollowerFeed.jsx";
import Register from "../pages/Register.jsx";
import PrivateRoute from "./PrivateRoute.jsx"; // Import the PrivateRoute component

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute element={<Home />} />
      ),
      children: [
        { path: "/", element: <PrivateRoute element={<Feed />} />, children: [
            { path: "/", element: <PostContainer /> },
            { path: "/favorite", element: <FollowerFeed /> },
            { path: "/selected", element: <SelectedFeed /> }
          ] 
        },
        { path: "/profile", element: <PrivateRoute element={<Profile />} /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
