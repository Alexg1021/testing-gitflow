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
    <div className='container'>
      <div className='row text-center'>
        <div className='col'>
          <h1>This is Team Alkali</h1>
          <h3 className='text-secondary'>We are the Super Reactants!</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-3'>
          <AlexProfileComponent />
        </div>
        <div className='col-sm-12 col-md-3'>
          <LizProfile />
        </div>
        <div className='col-sm-12 col-md-3'>
          <MeruProfile />
        </div>
        <div className='col-sm-12 col-md-3'>
          <BrittneyComponent />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-3'>
          <HarrisonProfileComponent />
        </div>
        <div className='col-sm-12 col-md-3'>
          <NikName />
        </div>
        <div className='col-sm-12 col-md-3'>
          <LudwinProfileComponent />
        </div>
        <div className='col-sm-12 col-md-3'>
          <PardeepProfile />
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-12 col-md-3'>
          <Pravalika />
        </div>
      </div>
    </div>
  );
};

export default App;
