import React, { createContext, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import About from "./components/about";
import Error from "./components/error";
import Contact from "./components/contactus";
import Menu from "./components/RestroMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const root = ReactDom.createRoot(document.getElementById("foodapp"))
const usecontext =createContext();
const AppLayout = () => {
    return (
        <div className=" overflow-hidden">
            <usecontext.Provider>
            <Header />
            <Outlet />
            </usecontext.Provider>
        </div>
    )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "ResMenu/:resId",
                element: <Menu />
            },
        ],
        errorElement: <Error />
    },

])
root.render(<RouterProvider router={approuter} />)
