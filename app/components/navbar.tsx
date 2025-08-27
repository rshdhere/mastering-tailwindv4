"use client"
import Link from "next/link";
import FintaLogo from "@/icons/logo";
import Button from "./button";
export const Navbar = () => {

    const links = [{
        title: 'Founders',
        href: '/founders'
    }, {
        title: 'Guide',
        href: '/guide'
    }, {
        title: 'Pricing',
        href: '/pricing'
    }, {
        title: 'Log In',
        href: '/login'
    }];

  return (
    <div className="flex items-center justify-between">
        <Link href='/'><FintaLogo/></Link>
        <div className="flex items-center gap-8">
            {links.map((link, index) => <Link className="text-neutral-800 font-small hover:text-neutral-500 transition duration-200" href={link.href} key={index}>{link.title}</Link>)}
            <Button/>
        </div>
    </div>
  )
}
