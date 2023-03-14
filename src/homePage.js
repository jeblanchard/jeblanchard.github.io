import { createRoot } from "react-dom/client";
import React from 'react';
import baseStyling from './styles/base.css';
import homePagesStyling from './styles/homePage.css';
import HomePage from "./components/HomePage";

const domNode = document.getElementById("react-root");
const root = createRoot(domNode);
root.render(<HomePage/>);
