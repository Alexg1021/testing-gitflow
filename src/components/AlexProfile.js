import { useState } from 'react';
import alex_profile from '../assets/profile_pic.jpg';

const AlexProfileComponent = () => {
  const [alexProfile, setAlexProfile] = useState({
    name: 'Alex Gutierrez',
    role: 'Alkali Apprenticeship Lead',
    motto: 'Live Free, Die Hard',
    hobbies: ['soccer', 'programming', 'eating'],
    email: 'agutierrez@bitwiseindustries.com',
    linkedIn: 'https://www.linkedin.com/in/alex-gutierrez-mpa-6ba8bb34/',
    profileImg: alex_profile,
  });
  return (
    <div className='card'>
      <img
        src={alexProfile.profileImg}
        // style={{ height: '150px' }}
        alt='Alex Gutierrez Profile'
        className='card-img-top'
      />
      <div className='card-body text-center'>
        <h3 className='card-title'>{alexProfile.name}</h3>
        <h5 className='card-title text-secondary'>{alexProfile.role}</h5>
        <p className='card-text'>"{alexProfile.motto}"</p>
      </div>
      <ul className='list-group list-group-flush'>
        <div className='list-group-item'>
          <strong>HOBBIES:</strong>
        </div>
        {alexProfile.hobbies.map((hobby, index) => {
          return (
            <li className='list-group-item' key={index}>
              {hobby}
            </li>
          );
        })}
      </ul>
      <div className='card-body'>
        <a href={alexProfile.email} className='card-link'>
          Email
        </a>
        <a
          href={alexProfile.linkedIn}
          className='card-link'
          target='_blank'
          rel='noreferrer noopener'>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default AlexProfileComponent;
