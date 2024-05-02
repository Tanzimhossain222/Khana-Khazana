import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/images/logo.png'
import SignInOut from '../auth/SignInOut'


const Header = () => {
  return (
    <nav>
    <div className="container flex justify-between py-6">
      <Link href="/">
        <Image src={logo}  alt="logo" width={120} height={100} className="object-cover " />
      </Link>

      <ul className="flex gap-4 text-sm text-gray-500">
        <li className="py-2 active">
          <Link href="/">Home</Link>
        </li>

        <li className="py-2">
          <Link href="/">Recipe</Link>
        </li>

        <li className="py-2">
          <Link href="/">About us</Link>
        </li>

        <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
          <SignInOut />
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Header