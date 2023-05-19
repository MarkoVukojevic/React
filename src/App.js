import logo from './logo.svg';
import './App.css';
import RecipeList from './components/RecipeList';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeByIngredient from './components/RecipeByIngredient';

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'ground beef', 'tomatoes', 'onion', 'garlic', 'olive oil'],
      instructions: 'Cook spaghetti according to package instructions. In a separate pan, cook ground beef, onion, and garlic until browned. Add tomato sauce and simmer for 15 minutes. Serve the sauce over cooked spaghetti.',
      imageUrl: 'https://example.com/spaghetti-bolognese.jpg'
    },
    {
      id: 2,
      name: 'Chicken Stir-Fry',
      ingredients: ['chicken breast', 'vegetables (e.g., bell peppers, broccoli, carrots)', 'soy sauce', 'ginger', 'garlic', 'oil'],
      instructions: 'Heat oil in a pan, add chicken and cook until no longer pink. Add vegetables and stir-fry until tender. Mix in soy sauce, ginger, and garlic. Cook for a few more minutes. Serve hot.',
      imageUrl: 'https://example.com/chicken-stir-fry.jpg'
    },
    {
      id: 3,
      name: 'Chocolate Chip Cookies',
      ingredients: ['flour', 'butter', 'sugar', 'chocolate chips', 'vanilla extract', 'baking soda'],
      instructions: 'Preheat oven to 350°F. In a bowl, cream together butter, sugar, and vanilla extract. In a separate bowl, whisk together flour and baking soda. Gradually add dry ingredients to the butter mixture. Stir in chocolate chips. Drop spoonfuls of dough onto a baking sheet and bake for 10-12 minutes. Allow cookies to cool before serving.',
      imageUrl: 'https://example.com/chocolate-chip-cookies.jpg'
    },
    {
      id: 4,
      name: 'Caprese Salad',
      ingredients: ['tomatoes', 'fresh mozzarella cheese', 'fresh basil leaves', 'balsamic vinegar', 'oil', 'salt', 'pepper'],
      instructions: 'Slice tomatoes and mozzarella cheese. Layer the tomatoes, cheese, and basil leaves on a serving platter. Drizzle with balsamic vinegar and olive oil. Season with salt and pepper to taste. Serve immediately.',
      imageUrl: 'https://example.com/caprese-salad.jpg'
    },
  ]);

  const [recipes, setRecipes] = useState(data);



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="body">
          
          <Routes>
            <Route path='/' element={<RecipeList recipes={recipes} />}/>
            <Route path='/ingredient/:ingredient' element={<RecipeByIngredient recipes={data} />}/>
          </Routes>
        </div>
      </div></BrowserRouter>
  );
}

export default App;
