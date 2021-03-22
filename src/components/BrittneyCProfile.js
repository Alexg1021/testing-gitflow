import {useState} from 'react';
import brittney_image from '../assets/bc-pic.jpg'

const BrittneyComponent = () =>{
    const [brittneyProfile, setBrittneyProfile] = useState({
        name: 'Brittney Cavazos',
        role: 'React Apprentice',
        motto: '~ Cool vibrations ~',
        hobbies: ['Rhythm Games','Graphic Design','Animal Crosing'],
        email: 'brittney.cavazos@gmail.com',
        linkedin: 'https://www.linkedin.com/in/brittney-cavazos-83b056a9/',
        profileImg: brittney_image,
    });

    return(
        <div className="card">
            <img 
                src={brittneyProfile.profileImg} 
                alt="Brittney Cavazos Profile pictrue" 
                className="card-img-top" 
                // style={{height: '150px', width: '150px'}}
            />
            <div className="card-body text-center">
                <h3 className="card-title">{brittneyProfile.name}</h3>
                <h5 className="card-title text-secondary">{brittneyProfile.role}</h5>
                <p className="card-text">{brittneyProfile.motto}</p>
            </div>
            <ul className="list-group list-group-flush">
                <div className="list-group-item">
                    <strong>HOBBIES:</strong>
                </div>

                {
                    brittneyProfile.hobbies.map((hobby, index)=>{
                        return(
                            <li className="list-group-item" key={index}>
                                {hobby}
                            </li>
                        );
                    })}
            </ul>
            <div className="card-body">
                <a href={brittneyProfile.email} className="card-link">
                    Email
                </a>
                <a href={brittneyProfile.linkedin} className="card-link" target="blank" rel="noreferrer noopener">
                    Linkedin
                </a>
            </div>
        </div>
    )

};

export default BrittneyComponent;