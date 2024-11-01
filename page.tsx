import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>House of Coders</h1>
        <ul>
            <li><Link href="Home/About">About</Link></li>
            <li><Link href= "Home/Services">Services</Link></li>
            <li><Link href= "Home/Careers">Careers</Link></li>
            <li><Link href= "Home/Contact">Contact</Link></li>
        </ul>
    </div>
  )
}
export default page