import { createBrowserRouter } from "react-router-dom"

import Home from "../paginas/Home";
import Nosotros from "../paginas/Nosotros";
import NotFound from "../paginas/NotFound";
import Contacto from "../paginas/Contacto";
import Proyectos from "../paginas/Proyectos";
import Blog from "../paginas/Blog";

//PROYECTOS:
import Torre_Uno from "../paginas/Torre_Uno";

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
    },
    {
        path: "/blog",
        element: <Blog/>,
        errorElement: <NotFound/>
    },
    {
        path: "/torre_uno",
        element: <Torre_Uno/>,
        errorElement: <NotFound/>
    }
]);