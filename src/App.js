import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>ART MOVIE</h1>
        <div className='Movie-Container'>
          <div className='Movie-wrapper'>
            <div className='Movie-title'></div>
            <img className='Movie-image'/>
            <div className='Releasedate'></div>
            <div className='Rating'></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;