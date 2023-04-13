import { createRoot } from "react-dom/client";
import React from 'react';
import baseStyling from './styles/base.css';
import homePagesStyling from './styles/homePage.css';
import HomePage from "./components/HomePage";

const domNode = document.getElementById("react-root");
const root = createRoot(domNode);
root.render(<HomePage/>);

const saveSiteVisitRequest = new Request("https://analytics.jeblanchard.dev");
fetch(saveSiteVisitRequest).then((response) => {
    if (!response.ok) {
        console.debug("Successfully saved site visit.")
    } else {
        console.debug("Could not save site visit.")
    }
})
