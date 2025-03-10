import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  return (
    <div className="App">
      <Header title="Gallery"></Header>
      <Search></Search>
    </div>
  );
}

export default App;
