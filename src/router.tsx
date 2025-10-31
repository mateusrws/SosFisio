import { createBrowserRouter } from "react-router";
import App from "./App";
import FisioResp from "./pages/FisioResp/FisioResp";
import PriSoc from "./pages/PriSoc/PriSoc";
import FisioEsp from "./pages/FisioEsp/FisioEsp";
import FisioDomi from "./pages/FisioGeron/FisioGeron";
import FisioReumOnco from "./pages/FisioReumOnco/FisioReumOnco";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/fisio-resp",
        element: <FisioResp/>
    },
    {
        path: "pri-s",
        element: <PriSoc/>,
    },
    {
        path: "fisio-esp",
        element: <FisioEsp/>
    },
    {
        path: "fisio-domi",
        element: <FisioDomi/>
    },
    {
        path: "fisio-reum-onco",
        element: <FisioReumOnco />
    }


])