import React, { useState, useEffect } from 'react'
import { Routes, Route, useParams } from "react-router-dom";

import Home from './Home'
import Events from './Events'
import Blogs from './Blogs'
import Docs from './Docs'
import Team from './Team'

import { Storage_URL } from '../config';

const AppRoutes = ({ Data }) => {
    const [DataEvents, setEvents] = useState([])
    const [DataBlogs, setBlogs] = useState([])
    const [DataReports, setReports] = useState([])
    const [DataMagazines, setMagazines] = useState([])

    useEffect(() => {
        if (Data.Events) setEvents(Data.Events)
        if (Data.Blogs) setBlogs(Data.Blogs)
        if (Data.Reports) setReports(Data.Reports)
        if (Data.Magazines) setMagazines(Data.Magazines)
    }, [Data])

    return (
        <>
            <Routes>
                <Route path='/' element={<Home Data={Data} Storage_URL={Storage_URL} />} />
                <Route path='/events' element={<Events Events={DataEvents} Storage_URL={Storage_URL} />} />
                <Route path='/blogs' element={<Blogs Blogs={DataBlogs} Storage_URL={Storage_URL} />} />
                <Route path='/documents' element={<Docs Reports={DataReports} Magazines={DataMagazines} Storage_URL={Storage_URL} />} />
                <Route path='/teams/:TeamId/*' element={<TeamRoutes Data={Data} Storage_URL={Storage_URL} />} />
            </Routes>
        </>
    )
}

const TeamRoutes = ({ Data, Storage_URL }) => {
    const { TeamId } = useParams()
    const TeamData = Data.Teams[TeamId]
    const Members = Data.Members
    return (
        <Routes>
            <Route path='/' element={<Team TeamData={TeamData} Members={Members} Storage_URL={Storage_URL} />} />
        </Routes>
    )
}

export default AppRoutes