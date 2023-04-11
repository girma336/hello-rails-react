import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Greeting from "./greetinge/Greeting";
import fetchData from "../redux/slices";


const App = () => {
    const dispatch = useDispatch()
    dispatch(fetchData())

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Greeting />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;