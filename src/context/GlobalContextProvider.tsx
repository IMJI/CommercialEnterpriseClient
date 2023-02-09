import React, { Dispatch, SetStateAction, useState } from "react";
import GlobalStateInterface from "./GlobalStateInterface";

const GlobalStateContext = React.createContext({
    state: {} as Partial<GlobalStateInterface>,
    setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

type Props = {
    children: React.ReactNode;
    value?: Partial<GlobalStateInterface>;
}

function GlobalStateProvider({ children, value = {} }: Props) {
    const [state, setState] = useState(value);
    return (
        <GlobalStateContext.Provider value={{ state, setState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export { GlobalStateContext, GlobalStateProvider };