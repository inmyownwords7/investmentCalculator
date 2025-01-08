// <reference path="./types.d.ts" />
import Header from "./components/Header.tsx";
import UserInput from "./components/UserInput.tsx";
import {useState} from "react";
import Results from "./components/Results.tsx";

function App() {
    const [userInput, setUserInput] = useState<UserInput>({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const isInputValid = userInput.duration >= 1;

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
            {!isInputValid && <p className="center">Please enter a number greater than 0</p>}
            {isInputValid && <Results input={userInput}/>}
        </div>
    )
}

export default App
