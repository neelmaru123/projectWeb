import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app">
            <h1>Title</h1>

            <i>Description : </i>
            <br />

            Short Description Here
            <a class="icon-link icon-link-hover" href="#">
                Icon link
                <svg class="bi" aria-hidden="true"><use  href="#arrow-right"></use></svg>
            </a>
        </div>
    );
}

export default App;
