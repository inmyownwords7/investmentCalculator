// forgot to add export {} requirements for it is export {} and declare global {}
export {}
declare global {

    interface UserInput {
        initialInvestment: number;
        annualInvestment: number;
        expectedReturn: number;
        duration: number;
    }

    interface ResultsProps {
        input: InvestmentInput;
    }

    interface UserInputProps {
        onChange: (field: string, value: string) => void;
        userInput: {
            initialInvestment: number;
            annualInvestment: number;
            expectedReturn: number;
            duration: number;
        }
    }
}