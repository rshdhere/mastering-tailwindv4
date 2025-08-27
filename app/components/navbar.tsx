"use client"
import Link from "next/link";
import FintaLogo from "@/icons/logo";
export const Navbar = () => {

    const links = [{
        title: 'Founders',
        href: '/'
    }, {
        title: 'Guide',
        href: '/'
    }, {
        title: 'Pricing',
        href: '/'
    }, {
        title: 'Log In',
        href: '/'
    }];

  return (
    <div className="flex items-center justify-between">
        <Link href='/'><FintaLogo/></Link>
        <div className="flex items-center gap-8">
            {links.map((link, index) => <Link className="text-neutral-800 font-small hover:text-neutral-500 transition duration-200" href={link.href} key={index}>{link.title}</Link>)}
            <button className="bg-[#2679F3] text-white px-4 py-2 rounded-md cursor-pointer shadow-lg text-shadow-md">Get Started</button>
        </div>
    </div>
  )
}
