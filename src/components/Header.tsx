import logo from "../assets/investment-calculator-logo.png"
import {ReactElement} from "react";
export default function Header(): ReactElement {
    return (
     <header id="header">
         <img src={logo} alt="Logo showing a money bag"/>
         <h1>Investment Calculator</h1>
     </header>
    )
}