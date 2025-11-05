const BurgerStack = ({ ingredients, removeFromBurger }) => {
  return (
    <div style={{ width: '45%' }}>
      <h2>Your Burger</h2>
      <ul>
        {ingredients.length === 0 ? (
          <p>No ingredients added yet!</p>
        ) : (
          ingredients.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button onClick={() => removeFromBurger(index)}>X</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BurgerStack;
