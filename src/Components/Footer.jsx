import React from 'react'

import LinkedinIcon from '../assets/linkedin.svg'
import InstagramIcon from '../assets/instagram.svg'
import FacebookIcon from '../assets/facebook.svg'
import TwitterIcon from '../assets/twitter.svg'
import LocationIcon from '../assets/location_white.svg'
import MailIcon from '../assets/mail_white.svg'

const SocialMediaProfile = ({ link, icon }) => {
    if (link === "") return null
    return (
        <a className="btn btn-light btn-floating m-1" href={link} target="_blank" rel='noreferrer' role="button">
            <img src={icon} alt="LinkedIn" style={{ height: "1.5rem" }} />
        </a>
    )
}

const Footer = ({ Info }) => {
    return (
        <div className="bg-dark text-center text-white">
            <div className="container p-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                    <div className="col-md-6">
                        <h3 className='display-6 pb-2'>Connect</h3>
                        <section className="mb-4">
                            <SocialMediaProfile link={Info.linkedin} icon={LinkedinIcon} />
                            <SocialMediaProfile link={Info.instagram} icon={InstagramIcon} />
                            <SocialMediaProfile link={Info.facebook} icon={FacebookIcon} />
                            <SocialMediaProfile link={Info.twitter} icon={TwitterIcon} />
                        </section>
                    </div>
                    <div className="col-md-6">
                        <h3 className="display-6 pb-2">Contact Us</h3>
                        <div className="row text-start">
                            <div className="col-12 col-md-2">
                                <img src={LocationIcon} alt="LinkedIn" style={{ height: "1.5rem" }} />
                            </div>
                            <div className="col-md-10 mb-2">{Info.location}</div>
                            <div className="col-12 col-md-2">
                                <img src={MailIcon} alt="LinkedIn" style={{ height: "1.5rem" }} />
                            </div>
                            <div className="col-md-10">{Info.email}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                Made with ❤ by Yoga Club, NITK | © 2023 Yoga Club NITK
            </div>
        </div >
    )
}

export default Footer