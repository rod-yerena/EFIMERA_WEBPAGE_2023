import { createBrowserRouter } from "react-router-dom"

import Home from "../paginas/Home";
import Nosotros from "../paginas/Nosotros";
import NotFound from "../paginas/NotFound";
import Contacto from "../paginas/Contacto";
import Proyectos from "../paginas/Proyectos";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <NotFound/>
    },
    {
        path: "/about",
        element: <Nosotros/>,
        errorElement: <NotFound/>
    },
    {
        path: "/contact",
        element: <Contacto/>,
        errorElement: <NotFound/>
    },
    {
        path: "/projects",
        element: <Proyectos/>,
        errorElement: <NotFound/>
    }
]);