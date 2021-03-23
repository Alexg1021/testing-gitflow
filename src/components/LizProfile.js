import { useState } from 'react'
import liz_profile from '../assets/liz-pfp.jpg';

const LizProfile = () => {

  const [lizProfile, setLizProfile] = useState({
    name: 'Elizabeth Gaw',
    role: 'React Developer Apprentice and Evil Mastermind of Alkali',
    motto: 'HADOUKEN!',
    hobbies: ['Listen to rock and metal', 'Play video games', 'Kickbox'],
    profileImg: liz_profile
  })

  return (
    <div>
      <div className="card">
        <img src={lizProfile.profileImg} class="card-img-top" alt="Liz Profile"></img>
        <div className="card-body">
          <h5 className="card-title">{lizProfile.name}</h5>
          <p className="card-text">{lizProfile.role}</p>
        </div>
        <div className="card-body">
          <p className="font-weight-bold">Hobbies</p>
          {
            lizProfile.hobbies.map((hobby, index) => {
              return (
                <p className="card-text" key={index}>{hobby}</p>
              )
            })
          }
        </div>
        <div className="card-body">
          <p className="font-weight-bold">Motto</p>
          <p className="card-text">{lizProfile.motto}</p>
        </div>

      </div>
    </div>
  );
};

export default LizProfile;
