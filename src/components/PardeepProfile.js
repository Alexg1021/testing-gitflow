import { useState } from 'react';
import Pardeep_Profile from '../assets/pardeep.jpg';

const PardeepProfileComponent = () => {
  
  const [pardeepprofile, setpardeepprofile] = useState({
    name: 'Pardeep Sanghera',
    role: 'Apprenticeship',
    motto: "Never give up!",
    hobbies: ['Basketball', 'Gaming','Movies'],
    email: 'pradeepsanghera@gmail.com',
    Github: '',
    profileImg: ''
  });
    return (
      <div className='Card'>
        <img src={Pardeep_Profile} alt="pardeep profile" className='card-img-top'/>
        <div className='card-body text-center'>
          <h3 className='card-title'>{pardeepprofile.name}</h3>
          <h5 className='card-title'>{pardeepprofile.role}</h5>
          <p className='card-title'>{pardeepprofile.motto}</p>
        </div>
        <ul className='list-group list-group-flush'>
        <div className='list-group-item'>
          <strong>HOBBIES:</strong>
        </div>
        {pardeepprofile.hobbies.map((hobby, index) => {
          return (
            <li className='list-group-item' key={index}>
              {hobby}
            </li>
          );
        })}
      </ul>
        <div className='card-body'>
        <a href={pardeepprofile.email} className='card-link'>
          Email
        </a>
        </div>
      </div>
    );
  };
  
  export default PardeepProfileComponent;
  