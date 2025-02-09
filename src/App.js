
import './App.css';
import AppImage, { TitleImage } from './components/AppImage';



function App() {
  return (
    <div className="App">
    <h1>Website  developer</h1>
    <AppImage url={"https://placehold.co/400"}/>
    <TitleImage title={"Image1"}/>
    <AppImage url={"https://placehold.co/600x400"} />
    <TitleImage title={"Image2"}/>

  </div>
  );
}

export default App;
