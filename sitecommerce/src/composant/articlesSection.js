import React from 'react';
import './ArticlesSection.css';
import veste from '../veste.jpg' ; 
import tshirt from '../tshirt.jpg' ;
import pull from '../pull.jpg' ;
import pantalon from '../pantalon.jpg' ;
import robe from '../robe.jpg' ;
import chaussures from '../chaussures.jpg' ;

function ArticlesSection(){
    return (
        <section className="articles-section">
        <h2>Mes articles</h2>
        <p>Je vends les plus belles pièces de mon placard ! </p>
        <div style={{ display: 'flex', gap: '20px' }}>
            <div className="img1">
            <img src={veste} alt="veste"/>
            <p>prix : 20 euros</p>
            </div>
            <div className="img2">
            <img src={tshirt} alt="tshirt"/>
            <p> prix : 5 euros</p>
            </div>
            <div className="img3">
            <img src={pull} alt="pull" />
            <p> prix : 15 euros</p>
            </div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
            <div className="img4">
            <img src={pantalon} alt="pantalon" />
            <p> prix : 15 euros</p>
            </div>
            <div className="img5">
            <img src={robe} alt="robe" />
            <p> prix : 10 euros</p>
            </div>
            <div className="img6">
            <img src={chaussures} alt="chaussures" />
            <p> prix : 25 euros</p>
            </div>
        </div>
        </section>
    )
}

export default ArticlesSection ; 