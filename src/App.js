import './App.css';
import Navbar from './components/Navigation/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/page/Home';
import Alert from './components/Alerts/Alert';
import Avatar from './components/Avatar/Avatar';
import Badges from './components/Badges/Badges';
import Buttons from './components/Buttons/Buttons';
import Cards from './components/Cards/Cards';
import Grid from './components/Grid/Grid';
import Input from './components/Input/Input';
import List from './components/List/List';
import Navbars from './components/Navbars/Navbars';
import Snackbar from './components/Snackbar/Snackbar';
import Text_Utils from './components/Text_Utils/Text_Utils';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/input" element={<Input />} />
          <Route path="/list" element={<List />} />
          <Route path="/navbars" element={<Navbars />} />
          <Route path="/snackbar" element={<Snackbar />} />
          <Route path="/textUtils" element={<Text_Utils />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
