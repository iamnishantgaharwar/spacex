import React from 'react'
import fetchRockets from '../features/SpaceXApi'
import { useEffect, useState } from 'react'
import Card from './card'

function Explore() {
    const [rockets, setRockets] = useState([])
    useEffect(() => {
        const getRockets = async () => {
            try {
                const fetchedRockets = await fetchRockets();
                setRockets(fetchedRockets.slice(0, 10));
            } catch (e) {
                console.log(e.message);
            }
        }
        getRockets();
        
    }, [])
  return (
    <>
    <div className='text-white flex justify-center text-3xl font-customMont mt-12'>Explore Rockets</div>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {rockets.map((rocket) => (
        <Card
          key={rocket.id}
          rocketName={rocket.rocket_name}
          rocketType={rocket.rocket_type}
          launchDate={rocket.first_flight}
          country={rocket.country}
          description={rocket.description}
        />
      ))}
    </div>
    </>
  )
}

export default Explore