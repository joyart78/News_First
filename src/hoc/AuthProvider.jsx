import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const userData = localStorage.getItem('user');
    let parsedUser = null;

    try {
        parsedUser = JSON.parse(userData);
    } catch (error) {
        console.error('Ошибка при парсинге данных из localStorage:', error);
        localStorage.removeItem('user');
    }

    const [user, setUser] = useState(parsedUser);

    const signin = (User, cb) => {
        setUser(User);
        localStorage.setItem('user', JSON.stringify(User));
        cb();
    };

    const value = { user, signin };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
