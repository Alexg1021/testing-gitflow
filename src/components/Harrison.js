import {useState} from 'react';
import Harrison_profile from '../assets/WIN_20200627_02_34_21_Pro (2).jpg'
const HarrisonProfileComponent = () =>{
    const [harrisonProfile, setHarrisonProfile] = useState({
        name:'Harrison Stamps',
        role: "Apprenticeship",
        motto: 'Win at being you!',
        email: 'hstamps4@gmail.com',
        hobbies: ["Sports"," coding ", "traveling"]
    
    })
    return (
        <div className="card">
            <img  src ={Harrison_profile}  
            className="card-img-top "
            
            />
            <div className="card-body">
                <h3 className="card-title">{harrisonProfile.name}</h3>
                <h5 className="card-title text-secondary">{harrisonProfile.role}</h5>
                <p className="card-text">{harrisonProfile.motto}</p>
            </div>
            <div className="list-group list-group-flush">
                {harrisonProfile.hobbies.map((hobby,index) =>{
                    return (
                        <li className="list-group-item" key={index}>
                            {hobby}
                        </li>
                    )
                })}
            </div>
            <div className="card-body">
                <a href ={harrisonProfile.email} className="card-link">Email</a>
            </div>

        </div>
    )
};

export default HarrisonProfileComponent;