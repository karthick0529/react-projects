import React,{createContext, useContext} from "react";

const SchoolContext = createContext();

const SchoolProvider = ({children}) => {
    const schName = "Happy Kids School";

    return(
        <SchoolContext.Provider value={schName}>
            {children}

        </SchoolContext.Provider>
    )
}

export const useSchool = () => {
    return useContext(SchoolContext)
}

export default SchoolProvider