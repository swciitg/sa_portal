import React, { useState } from 'react'
import GymkhanaCard from './BoardCard3/BoardCard3.js'
import Content from './BoardCard3/content.js'

const Index = () => {
  const [data, setData] = useState([
      {
        name : "Dr. Deepak Sharma",
        role : "Chairperson Sports Board",
        board : "Hostel Affairs Board",
        url : "https://swc.iitg.ac.in/saPortal/uploads/Board_profile_Image_9da81ef4e6.png",
        aboutBoard : "The Hostel Affairs Board is the central coordinating body for all hostel-related matters. One of its key roles is to ensure proper working of Hostel Management Committees, as per the directions laid by the Hostel Constitution and the HAB Procedures And Resolutions (HABPR). Hostel Affairs Board, under the purview of the Students' Affairs Section, is the decision and policy-making body for all Hostels"
      },
      {
        name : "Dr. Deepak Sharma",
        role : "Chairperson Sports Board",
        board : "Hostel Affairs Board",
        url : "https://swc.iitg.ac.in/saPortal/uploads/Board_profile_Image_9da81ef4e6.png",
        aboutBoard : "The Hostel Affairs Board is the central coordinating body for all hostel-related matters. One of its key roles is to ensure proper working of Hostel Management Committees, as per the directions laid by the Hostel Constitution and the HAB Procedures And Resolutions (HABPR). Hostel Affairs Board, under the purview of the Students' Affairs Section, is the decision and policy-making body for all Hostels"
      }
      ]
    );

  return (
    <div>
        <Content/>
        <div className='pl-[10%] pr-[15%] py-12'>

          {
            data.map((entry,key) => {
              return <GymkhanaCard key={key} url={entry.url} name={entry.name} role={entry.role} board={entry.board} aboutBoard={entry.aboutBoard}/>
            })
          }
            
        </div>
    </div>
  )
}

export default Index;