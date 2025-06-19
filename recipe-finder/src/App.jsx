import { useState } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (e) => {
    e.preventDefault();
    if (!query) return;

    const APP_ID = import.meta.env.VITE_APP_ID;
    const APP_KEY = import.meta.env.VITE_APP_KEY;

    try {
      const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      setRecipes(res.data.hits);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Finder</h1>
      <form onSubmit={searchRecipes} className="flex gap-2 mb-6">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Search</button>
      </form>
      <div className="grid gap-4 md:grid-cols-2">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
