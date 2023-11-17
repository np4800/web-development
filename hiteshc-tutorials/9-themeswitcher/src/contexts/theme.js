import {useContext, createContext} from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {console.log("dark")},
    lightTheme: ()=> {console.log("themeMode")},
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext)
}
