import { useState } from 'react';


const LudwinProfileComponent = () => {
    const [ludwinProfile, setLudwinProfile] = useState({
        name: 'Ludwin Granados',
        role: 'Alkali member',
        motto: 'It is what it is!',
        hobbies: ['Fishing' , 'Aquaterrarium', 'Building things', 'Reading'], // map will not work without using []
        email: 'ludwingranados@gmail.com',
        linkedIn: 'linkedin.com/in/ludwin-granados-358535195',
        profileImg: 'https://i.ibb.co/vQM2k7C/Hero-image.jpg',
    });

    return (
        <div className='card'>
          <img
            src={ludwinProfile.profileImg}
            alt='Ludwin Granados Profile'
            className='card-img-top'
          />
          <div className='card-body text-center'>
            <h3 className='card-title'>{ludwinProfile.name}</h3>
            <h5 className='card-title text-secondary'>{ludwinProfile.role}</h5>
            <p className='card-text'>"{ludwinProfile.motto}"</p>
          </div>
          <ul className='list-group list-group-flush'>
            <div className='list-group-item'>
              <strong>HOBBIES:</strong>
            </div>
             {ludwinProfile.hobbies.map((hobby, index) => {         // hobbies: must have [] to function 
              return (
                <li className='list-group-item' key={index}>
                  {hobby}
                </li>
               )
            })}
          </ul>
          <div className='card-body'>
            <a href={ludwinProfile.email} className='card-link'>
              Email
            </a>
            <a
              href={ludwinProfile.linkedIn}
              className='card-link'
              target='_blank'
              rel='noreferrer noopener'>
              LinkedIn
            </a>
          </div>
        </div>
      );
    };


export default LudwinProfileComponent;