import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "./ErrorPage";
import Booking from "../pages/Booking";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        // errorElement: <ErrorPage />
    },
    {
        path: "/booking",
        element: <Booking></Booking>,
    },
])