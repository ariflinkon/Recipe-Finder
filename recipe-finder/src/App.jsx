import { useState } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const API_URL = import.meta.env.VITE_RECIPE_API;

  const searchRecipes = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const res = await axios.get(`${API_URL}${query}`);
      setRecipes(res.data.meals || []);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Recipe Finder</h1>

      <form onSubmit={searchRecipes} className="d-flex gap-2 mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-success">Search</button>
      </form>

      <div className="row g-4">
        {recipes.map((recipe, index) => (
          <div className="col-md-6" key={index}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
