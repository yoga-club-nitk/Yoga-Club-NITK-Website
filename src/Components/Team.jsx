import React from 'react'

import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import MailIcon from '../assets/mail.svg'

const MemberCard = ({ Member, position = '', Storage_URL }) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={Storage_URL + Member.image + "?alt=media"} className="card-img-top" alt="Member" style={{ height: "18rem" }} />
			<div className="card-body">
				<h5 className="card-title">{Member.name}</h5>
				{position !== '' && <p className="card-text">{position}</p>}

				<hr />

				<a href={Member.linkedin} className="m-2" target="_blank" rel="noreferrer">
					<img src={LinkedinIcon} alt="LinkedIn" style={{ height: "1.5rem" }} />
				</a>
				<a href={Member.github} className="m-2" target="_blank" rel="noreferrer">
					<img src={GithubIcon} alt="Github" style={{ height: "1.5rem" }} />
				</a>
				<a href={"mailto:" + Member.email} className="m-2">
					<img src={MailIcon} alt="Email" style={{ height: "1.5rem" }} />
				</a>
			</div>
		</div>
	)
}

const Team = ({ TeamData, Members, Storage_URL }) => {
	const AlumniCount = TeamData.alumni ? TeamData.alumni.length : 0

	return (
		<>
			{/* Headline */}
			<div className='text-light' style={{ backgroundImage: "linear-gradient(135deg, #8c1105, #8399a2)" }}>
				<div className='container pt-5 pb-5'>
					<h1 className='display-3'>{TeamData.name}</h1>
				</div>
			</div>

			{/* About Team */}
			<div className='bg-white'>
				<div className='container pt-5 pb-5'>
					<p className='lead'>{TeamData.description}</p>
				</div>
			</div>

			{/* Team Members */}
			<div className='bg-success-subtle'>
				<div className='container pt-5 pb-5'>
					<h2 className='display-4 text-center'>Our Team</h2>
					<hr />
					<div className="row justify-content-md-center">
						<div className="col col-md-auto">
							<MemberCard Member={Members[TeamData.lead]} position='Team Head' Storage_URL={Storage_URL} />
						</div>
					</div>
					<div className="row">
						{TeamData.members && TeamData.members.map((memberId, index) => {
							const Member = Members[memberId]
							return (
								<div className="col mb-3" key={index}>
									<MemberCard Member={Member} Storage_URL={Storage_URL} />
								</div>
							)
						})}
					</div>
				</div>
			</div>

			{/* Alumni */}
			<div className='bg-white'>
				{AlumniCount > 0 &&
					<div className='container pt-5 pb-5'>
						<h2 className='display-4 text-center'>Our Alumni</h2>
						<hr />
						<div className="row">
							{TeamData.alumni.map((alumniId, index) => {
								const Alumni = Members[alumniId]
								return (
									<div className="col mb-3" key={index}>
										<MemberCard Member={Alumni} Storage_URL={Storage_URL} />
									</div>
								)
							})}
						</div>
					</div>
				}
			</div>

		</>
	)
}

export default Team