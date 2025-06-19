const RecipeCard = ({ recipe }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <img src={recipe.image} alt={recipe.label} className="w-full h-48 object-cover rounded mb-2" />
      <h2 className="text-xl font-semibold">{recipe.label}</h2>
      <p>Calories: {Math.round(recipe.calories)}</p>
      <a href={recipe.url} target="_blank" className="text-blue-500 underline mt-2 inline-block">View Recipe</a>
    </div>
  );
};

export default RecipeCard;
