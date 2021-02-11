import React from 'react';
import "./app.css"
import Random from "./components/Random_v1"
import Tag from "./components/Tag_v2"

function App(props) {
    return (
        <div>
            <h1>Random GIF application</h1>
            <div className="main-container">
                <Random />
                <Tag />
            </div>
        </div>
    );
}

export default App;