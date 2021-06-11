import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
const currentHour = d.getHours();
console.log(currentHour);
let greeting;
const customColor = {
  color: ""
};

if (currentHour <= 11) {
  greeting = "Good Morning!";
  customColor.color = "red";
} else if (currentHour < 18) {
  greeting = "Good Afternoon!";
  customColor.color = "green";
} else {
  greeting = "Good Evening!";
  customColor.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customColor}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
