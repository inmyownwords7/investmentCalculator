// <reference path="./types.d.ts" />
import Header from "./components/Header.tsx";
import UserInput from "./components/UserInput.tsx";
import {useState} from "react";
import Results from "./components/Results.tsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleInputChange(inputIdentifier: string, newValue: string) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            }
        })
    }

    return (
        <div>
            <Header/>
            <UserInput onChange={handleInputChange} userInput={userInput}/>
            <Results input={userInput}/>
        </div>
    )
}

export default App
