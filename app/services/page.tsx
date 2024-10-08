import React from 'react'
import Link from 'next/link'
const ServicePage = () => {
  return (
        <div>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/services/Project">Project</Link>
          </li>
        </ul>
      </nav>
      <h1>This is my Services Page</h1>
    </div>

    
  )
}

export default ServicePage