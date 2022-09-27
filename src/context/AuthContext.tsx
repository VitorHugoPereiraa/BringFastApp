import React from 'react';

export const AuthContext = React.createContext<any | null>(null);

interface Props{
    children: React.ReactNode;
}

export const AuthProvider : React.FC<Props> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

    return (

        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider