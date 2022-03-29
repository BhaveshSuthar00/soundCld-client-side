import React from 'react'
import { Nav } from './Nav'

import { BsFillPeaceFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
const Navbar = () => {
  return (
    <Nav>
      <div>
        <div>
          <div>
          <BsFillPeaceFill />
          </div>
          <div>
            Home
          </div>
        </div>
        <div>
          Stream
        </div>
        <div>
          Library
        </div>
      </div>
      <div>
        <div>
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div>
        <div>
          Upload
        </div>
        <div>
          <ul>
            Sign in
          </ul>
        </div>
        <div>
          <FiMoreHorizontal />
        </div>
      </div>
    </Nav>
  )
}

export default Navbar