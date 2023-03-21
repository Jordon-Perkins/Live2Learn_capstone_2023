import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Live2Learn } from './Live2Learn'

import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"


const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <Live2Learn />
    </BrowserRouter>
)
