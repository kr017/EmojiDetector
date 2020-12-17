import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [fruitName, setfruitName] = useState(undefined);
  const emojiDictionary = {
    // "⚠️ ": "warning",
    // "🚸": "Children Crossing",
    // "⛔": "No Entry",
    // "🚫": "Prohibited",
    // "🚳": " No Bicycles",
    // "🚭": "No Smoking",
    // "🚯": "No Littering",
    // "🚱": "Non-Potable Water",
    // "🚷": "No Pedestrians",
    // "📵": "No Mobile Phones",
    // "🔞": "No One Under Eighteen",
    // "🚦": "Traffic Light",
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    "🍋": "Lemon",
    "🍌": "Banana",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry",
    "🥝": "Kiwi Fruit",
    "🍅": "Tomato",
    "🥥": "Coconut",
    "🥑": "Avocado",
    "🍆": "Eggplant",
    "🥔": "Potato",
    "🥕": "Carrot",
    "🌽": "Corn",
    "🌶️": "Hot Pepper",
    "🥒": "Cucumber",
    "🥬": "Leafy Green",
    "🥦": "Broccoli",
    "🍄": "Mushroom",
    "🥜": "Peanuts",
    "🌰": "Chestnut"
  };

  const listFruits = Object.keys(emojiDictionary);

  function inputChangeHandler(event) {
    console.log(listFruits);

    console.log(event.target.value);
    let val = event.target.value;
    let output = emojiDictionary[val];

    setfruitName(output);
  }

  function handleFruitClick(item) {
    let val = emojiDictionary[item];
    setfruitName(val);
  }
  return (
    <div className="App">
      <div className="header">
        <span style={{ fontWeight: "bold", fontSize: "30px" }}>Fruit</span>
        <span
          style={{
            fontSize: "30px"
          }}
        >
          {" "}
          Farm
        </span>
      </div>
      <input
        onChange={inputChangeHandler}
        style={{ padding: ".5rem" }}
        placeholder={"Enter fruit emoji here"}
        className="input-text"
        // value={fruitName}
      />
      <div style={{ fontSize: "24px", color: "white" }}>OR</div>
      <div className="output-header">
        {fruitName !== undefined ? (
          <>
            <h2>So you want {fruitName}</h2>
          </>
        ) : (
          <>
            <h2>
              Click on any of the below fruits or enter into the box above
            </h2>
          </>
        )}
      </div>
      <div className="fruitDB">
        {listFruits.map(function (fruit) {
          return (
            <span
              onClick={() => handleFruitClick(fruit)}
              style={{ fontSize: "2rem", margin: "0.5rem", cursor: "pointer" }}
              key={fruit}
              className="fruitClick"
            >
              {fruit}
            </span>
          );
        })}
      </div>{" "}
    </div>
  );
}
