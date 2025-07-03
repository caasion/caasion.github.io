import React from 'react'
import DropDownMenu from './DropDownMenu'

const NavBar = () => {
  return (
    <header className='bg-gray-700'>
      <div className='flex items-center justify-between mx-6'>
          <div className='m-4'><h1 className='text-4xl'>Isaac Ng</h1></div>
        <nav className='flex'>
          <div><h2 className='nav-header'><a href="/">About Me</a></h2></div>
          <DropDownMenu
            buttonLabel="Projects"
            items={[
              {title: "Learner's Lodge", url: "/llx"}
            ]}
          />
          <div><h2 className='nav-header'><a href="/passions">Passions</a></h2></div>
          <div><h2 className='nav-header'><a href="/blog">Blog</a></h2></div>
        </nav>
        <div className=''><h2>Contact Me!</h2></div>
      </div>
    </header>
  )
}

export default NavBar