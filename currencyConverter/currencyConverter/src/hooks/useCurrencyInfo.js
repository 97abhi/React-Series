import { useEffect } from "react";

function useCurrencyInfo() {
    useEffect(() => {
        fetch("https://api.exchangerate-api.com/v4/latest/USD")
    }, []);
}