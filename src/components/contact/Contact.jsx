import React from 'react';
import './Contact.css'


const  Contact=() =>{
    return(
        <div>
            <div id="card-wrapper">
                <div id="card-front" className="cards">
                    <div id="cube">
                        <div className="face cube-top"></div>
                        <div className="face cube-left"></div>
                        <div className="face cube-right"></div>
                    </div>
                </div>
                <div id="card-back" className="cards">
                    <div className="details">
                        <h3>Litus Maksim</h3>
                        <p>FRONT END DEVELOPMENT & COOL GUY</p>
                        <span>+38 (066) 99 64 336</span>
                    </div>
                </div>
            </div>
            <div id="tip">
                <div className="arrow"></div>
                <div className="section">
                    <p>HOVER ME!</p>
                </div>
            </div>


        </div>
    )
};
export default Contact;
