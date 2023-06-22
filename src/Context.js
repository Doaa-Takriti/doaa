// Context.js
import React, { useState } from "react";
 
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [category2, setCategory2] = useState("technology");
    const [search, setSearch] = useState('');
    const  [darkMode1, setdarkMode1]  =  useState(false);
    const [languagedheader,setLanguageheader] = useState("english")
    const [language,setLanguage] = useState("en")


    const toggleMode =  ()  =>  {
        setdarkMode1(!darkMode1);
    
    };
    const togglelanguagedheader =  ()  =>  {
        if (languagedheader === 'english') {
            setLanguageheader("arabic")
            setLanguage("ar")
        }
        else {
            setLanguageheader("english")
            setLanguage("en")

        }
    
    };
    return (
        <Context.Provider value={{language,setLanguage,togglelanguagedheader ,languagedheader,languagedheader,setLanguageheader,darkMode1,toggleMode, setdarkMode1, category2, setCategory2,search,setSearch }}>
            {children}
        </Context.Provider>
    );
};
 