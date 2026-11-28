// import { redirect } from "react-router";
// import { Children } from "react";
import { Navigate } from "react-router";
// import Home from "./components/Home";
import Chat from "./components/Chat";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Navigate to="/chats" replace />,
    errorElement: <ErrorPage />,
  },
  {
    path: "chats",
    element: <Chats />,
    errorElement: <ErrorPage />
  },
  {
    path: "chats/:chatId",
    element: <Chat />,
    errorElement: <ErrorPage />
  },
  {
    path: "profile/:username",
    element: <Profile />,
    errorElement: <ErrorPage />
  },
  {
    path: "sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />
  },
  {
    path: "log-in",
    element: <LogIn />,
    errorElement: <ErrorPage />
  }
];

export default routes;