import { useState } from 'react';
import jeffrey_profile from '../assets/jeff.jpg';

const JeffreyProfile = () => {
  const [jeffreyProfile, setJeffreyProfile] = useState ({
    name: 'Jeffrey Alexander Rios jr',
    role: ' Alkali Apprentice',
    motto:  "Music is the Answer" ,
    hobbies: ['Music','Movies','More Music'],
    email: 'jeffriosjr@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/jeffrey-rios-a113a949/',
    profileImg: jeffrey_profile,
  }); 
  
  return (
      <div className="card">
        <div className='row-'>
        <img
        src={jeffrey_profile}
        
        alt='Jeffrey Rios Profile'
        className='card-img-top'
        />
        </div>
        <div className='card-body text-center'>
          <h3 className='card-title'>{jeffreyProfile.name}</h3>
          <h5 className='card-title text-secondary'>{jeffreyProfile.role}</h5>
          <p className='card-text'>"{jeffreyProfile.motto}"</p>
        </div>
        <ul className='list-group list-group-flush text-center'>
          <div className='list-group-item text-center'>
            <strong>Hobbies!</strong>
          </div>
          
          {jeffreyProfile.hobbies.map((hobby, index) => {

           return (
            <li className='list-group-item' key={index}>
              {hobby}
            </li>
          );
        })}
      </ul>
      <div className='card-body text-center'>
        <a href={jeffreyProfile.email} className='card-link'>
          Email
        </a>
        <a
          href={jeffreyProfile.linkedIn}
          className='card-link'
          target='_blank'
          rel='noreferrer noopener'>
          LinkedIn
        </a>
       
        </div>
      </div>
    );
  };
  
  export default JeffreyProfile;