import React from "react";

function Heading() {
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

  return (
    <h1 className="heading" style={customColor}>
      {greeting}
    </h1>
  );
}

export default Heading;
