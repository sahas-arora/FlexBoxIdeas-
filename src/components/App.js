import React, { Component } from "react";
import "../css/index.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="contents">
          <div className="row nav">
            <div className="nav-left">MyLogo</div>
            <div className="nav-right">
              <div className="nav-links">Home</div>
              <div className="nav-links">About</div>
              <div className="nav-links">Contacts</div>
            </div>
          </div>

          <div className="row story">
            <div className="story-item">
              <div className="image">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
              </div>
              <div className="name">Story </div>
            </div>

            <div className="story-item">
              <div className="image">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
              </div>
              <div className="name">Story </div>
            </div>

            <div className="story-item">
              <div className="image">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
              </div>
              <div className="name">Story </div>
            </div>

            <div className="story-item">
              <div className="image">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
              </div>
              <div className="name">Story </div>
            </div>
          </div>

          <div className="row anal">
            <div className="story-details1 common">
              <div className="card">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
                <div className="text">
                  Hello there, we are there and everyone is there and no one is
                  here.{" "}
                </div>
              </div>
              <div className="card">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
                <div className="text">
                  Hello there, we are there and everyone is there and no one is
                  here.{" "}
                </div>
              </div>
              <div className="card">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
                <div className="text">
                  Hello there, we are there and everyone is there and no one is
                  here.{" "}
                </div>
              </div>
            </div>
            <div className="story-details2 common">
              <div className="card">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
                <div className="text">
                  Hello there, we are there and everyone is there and no one is
                  here.{" "}
                </div>
              </div>
              <div className="card">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
                <div className="text">
                  Hello there, we are there and everyone is there and no one is
                  here.{" "}
                </div>
              </div>
              <div className="card">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
                <div className="text">
                  Hello there, we are there and everyone is there and no one is
                  here.{" "}
                </div>
              </div>
            </div>
            <div className="story-details3 common">
              <div className="card">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
                <div className="text">
                  Hello there, we are there and everyone is there and no one is
                  here.{" "}
                </div>
              </div>
              <div className="card">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
                <div className="text">
                  Hello there, we are there and everyone is there and no one is
                  here.{" "}
                </div>
              </div>
              <div className="card">
                <img
                  className="stories"
                  src={require("../img.png")}
                  alt="image"
                />
                <div className="text">
                  Hello there, we are there and everyone is there and no one is
                  here.{" "}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row">Hellooo</div> */}
        </div>
      </div>
    );
  }
}

export default App;
