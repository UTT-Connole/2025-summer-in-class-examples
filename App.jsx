import { useEffect, useRef, useState } from "react";

import Header from "./Header";
import IngredientList from "./IngredientList";
import JumpToRecipeButton from "./JumpToRecipeButton";

const App = () => {
  const [subtitleOpen, setSubtitleOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  const ingredients = [
    "Cream Cheese",
    "Goat Cheese",
    "Heavy Cream",
    "Other stuff",
  ];

  const handleToggleSubtitle = () => {
    setSubtitleOpen(true);
    setSubtitleOpen(false);
    setSubtitleOpen(17);
    setSubtitleOpen("hello");

    setCounter((prevCounter) => prevCounter + 1);
  };

  let subtitle;
  if (subtitleOpen) {
    subtitle = <h4> Subtitle</h4>;
  } else {
    subtitle = <></>;
  }

  useEffect(() => {
    fetch(
      "https://sd-6310-2025-summer-express-app.onrender.com/api/fortune-cookie"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Fortune cookie:", data);
      })
      .catch((err) => {
        console.error("Error fetching fortune cookie:", err);
      });
  }, []);

  const recipeRef = useRef(null);

  const title = "Hello";
  return (
    <>
      <h1>{title}</h1>
      <Header title="New York Cheesecake" color="red" />
      <IngredientList ingredients={ingredients} />

      {subtitle}

      {subtitleOpen && <h4>Subtitle</h4>}
      {subtitleOpen ? <h4>Subtitle</h4> : <></>}

      <button onClick={handleToggleSubtitle}>Toggle Subtitle </button>

      <JumpToRecipeButton
        handleClickFunction={() => {
          recipeRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
          });
        }}
      />
      <Header title="Basque" />
      <IngredientList />
      <Header title="Peaches" ingredients={["peaches"]} />
      <IngredientList />
      <Header title="Pie" />
      <IngredientList />
      <IngredientList ingredients={ingredients} />
      <IngredientList ingredients={ingredients} />
      <IngredientList ingredients={ingredients} />
      <IngredientList ingredients={ingredients} />
      <IngredientList ingredients={ingredients} />
      <IngredientList ingredients={ingredients} />
      <div ref={recipeRef}>RECIPE HERE!</div>
      <IngredientList ingredients={ingredients} />
      <IngredientList ingredients={ingredients} />
      <IngredientList ingredients={ingredients} />
      <IngredientList ingredients={ingredients} />
      <IngredientList ingredients={ingredients} />
      <IngredientList ingredients={ingredients} />
      <IngredientList ingredients={ingredients} />
    </>
  );
};

export default App;
