import {createContext, useState} from "react";

export const QuotesProvider = createContext([]);

export function QuotesContextProvider({children}) {

    const [quotesData, quotesChange] = useState([])

    return <QuotesProvider.Provider value={{quotesData, quotesChange}}>
        {children}
    </QuotesProvider.Provider>
}
