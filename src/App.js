import SearchForm from './components/SearchForm';
import "./App.css"

const App = () => {
  
  return (
    <div className='bg-cont'>
      <h1>Are you travelling somewhere</h1>
      <div className='cont'>
        <SearchForm />
      </div>
    </div>
  );
};

export default App;
