import React from 'react'

const Docs = ({ Reports, Magazines, Storage_URL }) => {
    const ReportCount = Reports.length
    const MagazineCount = Magazines.length

    return (
        <>
            {/* Headline */}
            <div className='text-light' style={{ backgroundImage: "linear-gradient(135deg, #ad5389, #3c1053)" }}>
                <div className='container pt-5 pb-5'>
                    <h1 className='display-3'>Reports & Magazines</h1>
                </div>
            </div>

            <div className='bg-white'>
                {ReportCount > 0 &&
                    <div className='container pt-5 pb-5'>
                        <ul className='text-start'>
                            {Reports.map((Report, index) => {
                                return (
                                    <li key={index}>
                                        <a href={Storage_URL + Report['file'] + "?alt=media"} target='_blank' rel='noreferrer'>{Report['title']}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>
            <div className='bg-secondary-subtle'>
                {MagazineCount > 0 &&
                    <div className='container pt-5 pb-5'>
                        <ul className='text-start'>
                            {Magazines.map((Magazine, index) => {
                                return (
                                    <li key={index}>
                                        <a href={Storage_URL + Magazine['file'] + "?alt=media"} target='_blank' rel='noreferrer'>{Magazine['title']}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default Docs