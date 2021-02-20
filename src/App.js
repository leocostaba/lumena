import Phrase from "./components/Phrase";
import GithubCorner from 'react-github-corner';

import lumenaFace from "./images/lumena.jpg";
import "./css/Reset.css";
import "./css/App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={lumenaFace} className='App-logo' alt='logo' />
        <h1>
          Eu sou um robô praticando frases que aprendi com a Lumena Aleluia
        </h1>
      </header>
      <Phrase />
      <GithubCorner
        href='https://github.com/leocostaba/lumena'
        bannerColor="#151513"
        octoColor='#fff'
        size={80}
        direction='right'
      />
    </div>
  );
}

export default App;
