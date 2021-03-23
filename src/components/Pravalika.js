import PravalikaPic from '../assets/pa-pic.jpg';
import {useState} from 'react';
const Pravalika=()=>{
  const[pravalikaProfile ,setPravalikaProfile]=useState({
    name:'Pravalika Ammineni',
    role:'React Apprentice',
    hobbies:['Gardening','Craft','Cooking'],
    email:'pravallikaammineni@gmail.com',
    motto:'Excellence happens not by accident. It is a process.',
    linkedIn:'https://www.linkedin.com/',
    profileImg:'PravalikaPic'

  })
  return(
   <div className='card'>
     <img 
     src={PravalikaPic}
     alt='Pravalika-Ammineni Profile'
     className='card-img-top'/>
     <div className='card-body text-center'>
       <h3 className='card-title'>{pravalikaProfile.name}</h3>
       <h5 className='card-title text-secondary'>{pravalikaProfile.role}</h5>
       <p className='card-text'> {pravalikaProfile.motto}</p>
     </div>
     <ul className='list-group list-group-flush'>
       {
         pravalikaProfile.hobbies.map((hobby,index)=>{
           return(
             <li className='list-group-item'key={index}>{hobby}</li>
           )
         })
       }
     </ul>
     <div className='card-body'>
       <a 
       href={pravalikaProfile.email}
       className='card-link'
       target='_blank'
       rel='noreferrer noopener'
       > Email</a>
      <a 
       href={pravalikaProfile.linkedIn}
       className='card-link'
       target='_blank'
       rel='noreferrer noopener'
       > Linkedin</a>
     </div>
   </div>
  )
}

export default Pravalika;
