import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';

function Contact() {
    return (
        <div className='contact-us'>
            <h1>More than 100+ companies <span>Yellow Dot</span></h1>
            <div className="partners">
                <img src={require('../image/equity-bank-logo 1.png')} alt="img" />
                <img src={require('../image/standardchartered@2x 1.png')} alt="img" />
                <img src={require('../image/partner-ncba-bank-landscape-2020-june-25 1.png')} alt="img" />
                <img src={require('../image/Group 1416-2.png')} alt="img" />
                
            </div>
            <div className="contact-info">
                <div className='top'>
                    <h1>Request for Call back</h1>
                    <div>
                        <p>
                            Our team will contact you on a time
                            that's convinient for you.
                        </p>
                        <span>
                            <BsFillTelephoneFill className="fa" />
                            +254 721 721 721
                        </span>
                    </div>
                </div>
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Phone Number" />
                    <button>
                        Request
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Contact;