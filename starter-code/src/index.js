import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const styleTextBlack = {
    color: "black",
    width: "200px",
    padding: "10px",
}

const element = (
    <div>
        <div style={{
            color: "white",
            backgroundColor: "rgb(20, 23, 41)",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "40px",
            paddingTop: "160px",
        }}>
            <div >
                <h1>Say hello to<br></br>
                    ReactJS</h1>
                You will learn a Frontend <br></br>
                framework from scratch, to<br></br>
                become an Ninka Developer
        </div>
            <div style={{
                color: "rgb(20, 23, 41)",
                backgroundColor: "white",
                width: "150px",
                height: "80px"
            }}>
                Awesome!
            </div>
        </div>

        <br></br>
        <br></br>
        <div class="image-section" >
            <div class="cards">
                <img src="/images/icon1.png" style={{ height: "100px" }} />
                <h3 style={styleTextBlack}>Declarative</h3>
                <p style={styleTextBlack}>React makes it painless to create interactive UIs.</p>
            </div>
            <div class="cards">
                <img src="/images/icon2.png" style={{ height: "100px" }} />
                <h3 style={styleTextBlack}>Components</h3>
                <p style={styleTextBlack}>Build encapsulated components that manage their state.</p>
            </div>
            <div class="cards">
                <img src="/images/icon3.png" style={{ height: "100px" }} />
                <h3 style={styleTextBlack}>Single-Way</h3>
                <p style={styleTextBlack}>A set of immutable values are passed to the component's.</p>
            </div>
            <div class="cards">
                <img src="/images/icon4.png" style={{ height: "100px" }} />
                <h3 style={styleTextBlack}>JSX</h3>
                <p style={styleTextBlack}>Statically-typed, designed to run on modern browsers.</p>
            </div>

        </div>
    </div>
)





ReactDOM.render(element, document.getElementById("root"));