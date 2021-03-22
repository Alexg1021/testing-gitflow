import { useState } from 'react';
import jeffrey_profile from './profile-pic.jpg';

const JeffreyProfile = () => {
  const [jeffreyProfile, setJeffreyProfile] = useState ({
    name: 'Jeffrey Rios',
    role: 'Apprentice',
    motto: '',
    hobbie: [''],
    email: 'jeffriosjr@gmail.com',
    linkedIn: '',
    profileImg: jeffrey_profile,


  }); 
  
  return (
      <div className="card">
        <img
        src={jeffrey_profile}
        alt='Jeffrey Rios Profile'
        className='card-img-top'
        />
        <div className='card-body'></div>
        <div className='list-group list-group-flush'></div>
        <div className='card-body'></div>
        
       
        
      </div>
    );
  };
  
  export default JeffreyProfile;