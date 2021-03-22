import HarrisonProfileComponent from './components/Harrison';
import AlexProfileComponent from './components/AlexProfile';
import LizProfile from './components/LizProfile';
import MeruProfile from './components/MeruProfile';
import BrittneyComponent from './components/BrittneyCProfile';
import NikName from './components/nakiacallaway';
import LudwinProfileComponent from './components/LudwinGranadosProfile';
import PardeepProfile from './components/PardeepProfile';
import Pravalika from './components/Pravalika';
import './App.css';

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
