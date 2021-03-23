//import meru-profile from '../assets/meru-profile.png';
import { useState } from 'react';
import meru from '../assets/meru-profile.png';

const MeruProfile = () => {
  const [merhawitProfile, setMerhawitProfile] = useState(
    {
      name: 'Merhawit Gubsa',
      role:'React-Apprentice',
      motto:'Shoot for the moon,Even if you miss it you will land among the stars',
      hobbies: ['music','movies','documentaries'],
      email: 'merhawitgubsa@gmail.com',
      linkedIn:'https://www.linkedin.com/in/merhawit-gubsa/',
      profileImage:'',
    }
  );
  


    return (

     <div className='card'  >
       <img src={meru} alt='Merhawit'  class='card-img-top' />
       <div class="card-body text-center">
         <div className='card-title'>{merhawitProfile.name}</div>
         <div className='card-title'>{merhawitProfile.role}</div>
         <div className='card-title'>{merhawitProfile.motto}</div>
       </div>
       <ul class="list-group list-group-flush">
         <div className='list-group-item'>
           <strong>Hobbies:</strong>
         </div>
         {merhawitProfile.hobbies.map((hobby,index) => {
           return (
             <li className='list-group-item' key={index}>
               {hobby}
             </li>
           )
         })}
       </ul>
       <div class="card-body">
         <a href={merhawitProfile.email} className='card-link' target='_blank'
          rel='noreferrer noopener'>Email</a>
         <a href={merhawitProfile.linkedIn} className='card-link'target='_blank'
          rel='noreferrer noopener'>LinkedIn</a>
       </div>
       
        
      </div>
    );
  };
  
  export default MeruProfile;