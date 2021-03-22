import {useState} from 'react';
import nakia_profile from '.../assets/nakia.jpg';

const NikName = () => {
    const [nakiaProfile, setNakiaProfile] = useState({
        name: 'Nakia Callaway',
        role: 'React Apprentice', 
        motto: 'Safety Third.',
        hobbies: ['Woodworking', 'Cooking', 'Gaming'],
        email: 'nik.callaway@outlook.com', 
        linkedIn: 'https://www.linkedin.com/in/nakia-callaway-31201b6/',
        profileImg: nakia_profile,
    });
    return (
      <div className='card'>
        <img 
          className="card-img-top" 

          src={nakiaProfile.profileImg} 
          alt="handsome man with beard wearing purple shirt and vest" 
        />
  <div className="card-body text-center">
      <h3 className="card-title">{nakiaProfile.name}</h3>
      <h5 className="card-title text-secondary">{nakiaProfile.role}</h5>
      <p className='card-body'>"{nakiaProfile.motto}"</p>
    </div>
  <ul className="list-group list-group-flush">
      <div className="list-group-item">
          <strong>HOBBIES:</strong>
      </div>
      {nakiaProfile.hobbies.map((hobby, index) => {
          return (
                <li className="list-group-item" key={index}>
                    {hobby}
                </li>
          );
      })};
  </ul>
  <div class="card-body">
  <a href={nakiaProfile.email} class="card-link">Email</a>
    <a href={nakiaProfile.linkedIn} className="card-link" target="_blank" rel="noreferrer noopener">Linkedin</a>
  </div>
</div>
    );
  };
  
export default NikName;   