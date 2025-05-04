import photo from '../photo.png' ;
import React from 'react' ;
import './SectionPhoto.css';


function SectionPhoto(){
    return (
        <section className="section-photo">
            <img src={photo} alt="photo de profil" className="image"/>
        </section>
    )
}

export default SectionPhoto;