import React, { useState, useEffect } from 'react'

import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import MailIcon from '../assets/mail.svg'
import ProfileIcon from '../assets/profile.svg'

const Home = ({ Data, Storage_URL }) => {
    const [MemberCount, setMemberCount] = useState(0)
    const [EventCount, setEventCount] = useState(0)
    const [FacultyIndex, setFacultyIndex] = useState(0)

    useEffect(() => {
        let members = new Set()
        Object.keys(Data.Teams).forEach(key => {
            members.add(Data.Teams[key].lead)
            if (Data.Teams[key].members) Data.Teams[key].members.forEach(member => members.add(member))
        });
        setMemberCount(members.size)
        setEventCount(Data.Events.length)
        setFacultyIndex(Data.CorePositions.length - 1)
    }, [Data])

    const display = (index, showIfFaculty) => {
        if (index === FacultyIndex) return showIfFaculty ? "" : "none"
        return showIfFaculty ? "none" : ""
    }

    return (
        <>
            {/* Landing Carousel */}
            <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause={false}>
                <div className="carousel-inner">
                    {Data.CarouselImages.map((image, index) => {
                        const className = index === 0 ? "carousel-item active" : "carousel-item";
                        return (
                            <div className={className} key={index}>
                                <img src={Storage_URL + image + "?alt=media"} style={{ maxHeight: "90vh", width: "100%" }} alt="eventCarouselImage" />
                            </div>
                        )
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* About Us */}
            <div id="about" className='bg-white'>
                <div className='container pt-5 pb-5'>
                    <h1 className='display-3 mb-3'>About Yoga Club NITK</h1>
                    <p className='lead'>{Data.ClubInfo.about}</p>
                </div>
            </div>

            {/* Core Team */}
            <div className='bg-success-subtle'>
                <div className='container pt-5 pb-5'>
                    <h1 className='display-3 mb-3'>Core Team</h1>
                    <div className="row">
                        {Data.CorePositions.map((Position, index) => {
                            const position = Position['title']
                            const member = Data.Members[Position['id']]
                            return (
                                <div className="col mb-3" key={index}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={Storage_URL + member.image + "?alt=media"} className="card-img-top" alt="Member" style={{ height: "18rem" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{member.name}</h5>
                                            <p className="card-text">{position}</p>

                                            <hr />

                                            <a href={member.linkedin} className="m-2" target="_blank" rel="noreferrer" style={{ display: display(index, false) }}>
                                                <img src={LinkedinIcon} alt="LinkedIn" style={{ height: "1.5rem" }} />
                                            </a>
                                            <a href={member.github} className="m-2" target="_blank" rel="noreferrer" style={{ display: display(index, false) }}>
                                                <img src={GithubIcon} alt="Github" style={{ height: "1.5rem" }} />
                                            </a>
                                            <a href={member.profile} className="m-2" target="_blank" rel="noreferrer" style={{ display: display(index, true) }}>
                                                <img src={ProfileIcon} alt="Profile" style={{ height: "1.5rem" }} />
                                            </a>
                                            <a href={"mailto:" + member.email} className="m-2">
                                                <img src={MailIcon} alt="Email" style={{ height: "1.5rem" }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Posts and Count */}
            <div className='bg-white'>
                <div className='container pt-5 pb-5 row'>
                    <div className='col' style={{ width: "18rem", height: "300px" }}>
                        <iframe src={Data.ClubInfo.instagram + "embed"} title="clubig" style={{ height: "100%", border: "none", overflow: "hidden" }} allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    <div className='col'>
                        <h1 className='display-5 mb-3'>Club Stats</h1>
                        <div className="row">
                            <div className="col mb-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Members</h5>
                                        <p className="card-text">{MemberCount}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Events</h5>
                                        <p className="card-text">{EventCount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home