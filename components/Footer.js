import React from 'react'

function Footer() {
  return (
   <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32
   py-14 bg-[#ffb37f] text-white'>
      <div className='space-y-4 text-xs text-[#74a7af]'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>This site was built</p>
            <p>to display skills</p>
            <p>with Next.js and </p>
            <p>Tailwind CSS</p>
          </div>
      <div className='space-y-4 text-xs text-[#74a7af]'>   
              <h5 className='font-bold'>COMMUNITY</h5>
              <p>Accessibility</p>
              <p>User Experience</p>
        </div>
      <div className='space-y-4 text-xs text-[#74a7af]'>
              <h5 className='font-bold'>HOST</h5>
              <p>I am a graduate</p>
              <p>from Turing School of Software & Design</p>
        </div>
      <div className='space-y-4 text-xs text-[#74a7af]'>
              <h5 className='font-bold'>SUPPORT</h5>
              <p>Please reach out to</p>
              <p>Patrick Becker if you</p>
              <p>like this site.</p>
        </div>
   </div>

  )
}

export default Footer