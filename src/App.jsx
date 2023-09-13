import FooterComponent from './component/footer';
import HeaderComponent from './component/header';
import MainComponent from './component/main';
import bgImg from './assets/bg.png';

function App() {
  return (
    <>
      <img src={bgImg} alt="bg img" className="bg" />
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </>
  );
}

export default App;
