import IntroductionComponent from './IntroductionComponent';
import CredentialComponent from './CredentialComponent';
import HowComponent from './HowComponent';

const MainComponent = () => {
  return (
    <main className="main">
      <IntroductionComponent />
      <CredentialComponent />
      <HowComponent />
    </main>
  );
};
export default MainComponent;
