import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <div className="col">
        <div className="card">
          <img className="card-img-top" src={image} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <ol className="card-text">
              {ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ol>
            <p>
              <b>Calories:</b> {calories} kcal
            </p>
          </div>
        </div>
      </div>
      {/* <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <hr />
      <p>
        <b>Calories:</b> {calories} kcal
      </p>
      <img src={image} /> */}
    </div>
  );
};
export default Recipe;
