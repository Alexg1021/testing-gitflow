import HarrisonProfileComponent from './Harrison';
import './App.css';
import AlexProfileComponent from './AlexProfile';
import LizProfile from './LizProfile';
import MeruProfile from './MeruProfile';
import BrittneyComponent from './BrittneyCProfile';
import NikName from './nakiacallaway';
import LudwinProfileComponent from './LudwinGranadosProfile';
import PardeepProfile from './PardeepProfile';
import Pravalika from './Pravalika';

const App = () => {
  return (
    <div className='App'>
      <h1>This is my App Component</h1>
      <h3>From my ag-1 feature branch!</h3>
      <AlexProfileComponent />
      <LizProfile />
      <MeruProfile />
      <BrittneyComponent />
      <HarrisonProfileComponent />
      <NikName />
      <LudwinProfileComponent />
      <PardeepProfile />
      <Pravalika />
    </div>
  );
};

export default App;
