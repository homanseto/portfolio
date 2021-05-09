import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import WaterPoloClub from './components/WaterPoloClub/WaterPoloClub';
import RecipeEngine from './components/RecipeEngine/RecipeEngine';

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            default
            component={(props) => <HomePage {...props} />}
          />
          <Route
            path="/waterpoloclub"
            component={(props) => <WaterPoloClub {...props} />}
          />
          <Route
            path="/recipeengine"
            component={(props) => <RecipeEngine {...props} />}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
