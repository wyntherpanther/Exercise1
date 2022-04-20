import './App.css';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import Search from "./pages/home";


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Search />
        </Provider>
      </header>
    </div>


  );
}

export default App;
