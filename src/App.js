
import './App.css';

function AppImage(props) {
  return ( 
    <img style={{marginLeft: '10px'}} src={props.url} alt="Placeholder" />
   );
}

export {AppImage};

function App() {
  return (
    <div className="App">
    <h1>Website  developer</h1>
    <AppImage url={"https://placehold.co/400"}/>
    <AppImage url={"https://placehold.co/600x400"} />

  </div>
  );
}

export default App;
