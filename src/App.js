import React, { useState, useEffect } from "react";

import AppRoutes from "./Components/AppRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./App.css";
import { Realtime_Database_URL } from "./config.js";
import data from "./data.json";

function App() {
	const [Data, setData] = useState(data);
	const [TeamNames, setTeams] = useState({});

	useEffect(() => {
		fetch(Realtime_Database_URL)
			.then((response) => response.json())
			.then((data) => {
				setData(data)
				let teamNames = {};
				Object.keys(data.Teams).forEach(key => teamNames[key] = data.Teams[key].name);
				setTeams(teamNames);
			});
	}, []);

	return (
		<div className='App'>
			<Navbar TeamNames={TeamNames} />
			<div className='body text-center'>
				<AppRoutes Data={Data} />
			</div>
			<Footer Info={Data.ClubInfo} />
		</div>
	);
}

export default App;
