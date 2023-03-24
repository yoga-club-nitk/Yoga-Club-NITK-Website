import React, { useState, useEffect } from 'react'

import DateTimeIcon from '../assets/datetime.svg'
import LocationIcon from '../assets/location.svg'

const Events = ({ Events, Storage_URL }) => {
    const [modalEvent, setEvent] = useState({
        name: "Event Name",
        datetime: "Date | Time",
        venue: "Venue",
        image: "images/events/#.jpg",
        link: {
            title: "Event Link",
            url: ""
        },
        about: "Description of the event"
    })

    useEffect(() => {
        const eventInfoModal = document.getElementById('eventInfo')
        eventInfoModal.addEventListener('show.bs.modal', e => {
            const button = e.relatedTarget
            const index = button.getAttribute('data-bs-index')
            if (Events[index] === undefined) return console.log("Event not found")
            const event = Events[index]
            setEvent(event)
            const eventAbout = document.getElementById('eventAbout')
            eventAbout.innerHTML = event.about
        })
    }, [Events])

    return (
        <>
            {/* Headline */}
            <div className='text-light' style={{ backgroundImage: "linear-gradient(135deg, #b429f9, #26c5f3)" }}>
                <div className='container pt-5 pb-5'>
                    <h1 className='display-3'>Events</h1>
                </div>
            </div>

            {/* Event Grid */}
            <div className='bg-body-secondary'>
                <div className='container pt-5 pb-5'>
                    <div className='row'>
                        {Events.map((event, index) => {
                            return (
                                <div className="col mb-3" key={index}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={Storage_URL + event.image + "?alt=media"} className="card-img-top" alt="eventImage" style={{ height: "18rem" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{event.name}</h5>
                                            <hr />
                                            <div className="row">
                                                <div className="col">
                                                    <img src={DateTimeIcon} alt="Date and Time" style={{ height: "1rem" }} />
                                                    <p className="card-text">{event.datetime}</p>
                                                </div>
                                                <div className="col">
                                                    <img src={LocationIcon} alt="Location" style={{ height: "1rem" }} />
                                                    <p className="card-text">{event.venue}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#eventInfo" data-bs-index={index}>More Info</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Event Info Modal */}
            <div className="modal fade" id="eventInfo" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby='eventInfoModal' aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{modalEvent.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <img src={Storage_URL + modalEvent.image + "?alt=media"} className="card-img-top" alt="eventImage" style={{ height: "18rem" }} />
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <img src={DateTimeIcon} alt="Date and Time" style={{ height: "1rem" }} />
                                    <p className="card-text">{modalEvent.datetime}</p>
                                </div>
                                <div className="col">
                                    <img src={LocationIcon} alt="Location" style={{ height: "1rem" }} />
                                    <p className="card-text">{modalEvent.venue}</p>
                                </div>
                            </div>
                            <hr />
                            <p className="card-text text-start" id="eventAbout"></p>
                        </div>
                        <div className="modal-footer">
                            {modalEvent.link.url === "" ? null : <a href={modalEvent.link.url} className="btn btn-success" target="_blank" rel="noreferrer">{modalEvent.link.title}</a>}
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events