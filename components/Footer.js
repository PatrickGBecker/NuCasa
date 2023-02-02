import React from 'react'

function Footer() {
  return (
   <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32
   py-14 bg-[#ffb37f] text-white'>
      <div className='space-y-4 text-xs text-[#74a7af]'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How HomeAway works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>HomeAway Plus</p>
            <p>HomeAway Luxe</p>
          </div>
      <div className='space-y-4 text-xs text-[#74a7af]'>   
              <h5 className='font-bold'>COMMUNITY</h5>
              <p>Accessibility</p>
              <p>Combating Discrimination</p>
              <p>Disaster Relief Housing</p>
              <p>Visit our community forum</p>
        </div>
      <div className='space-y-4 text-xs text-[#74a7af]'>
              <h5 className='font-bold'>HOST</h5>
              <p>HomeAway your home</p>
              <p>HomeAway for Hosts</p>
              <p>Explore hosting resources</p>
              <p>How to host responsibly</p>
        </div>
      <div className='space-y-4 text-xs text-[#74a7af]'>
              <h5 className='font-bold'>SUPPORT</h5>
              <p>Help Center</p>
              <p>Supporting people with disabilities</p>
              <p>Cancellation options</p>
              <p>Our COVID-19 Response</p>
              <p>Report a neighborhood concern</p>
        </div>
   </div>

  )
}

export default Footer