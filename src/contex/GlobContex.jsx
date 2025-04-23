import { createContext, useEffect, useState } from "react";

export const GlobalContex = createContext();

export const GlobalContexProvider = ({ children }) => {
    const [postList, setPostList] = useState([]);

    function CalPost() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setPostList(json));
    }

    useEffect(() => {
        CalPost();
    }, []);

    return (
        <GlobalContex.Provider value={{ postList }}>
            {children}
        </GlobalContex.Provider>
    );
};