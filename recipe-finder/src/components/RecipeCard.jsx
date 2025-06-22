function RecipeCard({ recipe }) {
  return (
    <div className="card h-100">
      <img src={recipe.strMealThumb} className="card-img-top" alt={recipe.strMeal} />
      <div className="card-body">
        <h5 className="card-title">{recipe.strMeal}</h5>
        <p className="card-text">
          <strong>Category:</strong> {recipe.strCategory}<br />
          <strong>Area:</strong> {recipe.strArea}
        </p>
        <a href={recipe.strSource || recipe.strYoutube} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
