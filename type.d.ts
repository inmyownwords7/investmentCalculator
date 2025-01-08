// forgot to add export {} requirements for it is export {} and declare global {}
export {}
declare global {

    interface userInput {
        initialInvestment: number;
        annualInvestment: number;
        expectedReturn: number;
        duration: number;
    }

    interface ResultsProps {
        input: InvestmentInput;
    }
}