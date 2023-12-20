import './App.css';
import Content from './components/Contents/Content';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menus/Menu';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Content/>
      <Menu/>
    </div>
  );
}

export default App;
