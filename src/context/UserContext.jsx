import React,{createContext} from 'react';
// Step-I creating a folder + file for the specific context


// Step II- importing and initilaizing the context via createContext() in react
export const UserContext = createContext();

// Step III- creating a provider of context

const UserContextProvider =({children})=>{

    // Step III-1 creating the state and the setter for the state
    const [user,setUser] = React.useState('')
    const [bio, setBio] = React.useState('')
    
    const requiredVal = {
        user,
        setUser,
        bio,
        setBio
    }
    
    // passing all the state values and state setters to the value prop of the provider
    return(
        <UserContext.Provider value={requiredVal}>
            {children}
        </UserContext.Provider>
    )
}

// Step IV- exporting the provider
export default UserContextProvider

// Step V- importing the provider in the App.js/ main.js/index.js file and wrapping the components with the provider

