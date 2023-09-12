import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <header className="footer-title">Services</header>
        <Link href={'/'} className="link link-hover">Home</Link>
        <Link href={'/about'} className="link link-hover">About</Link>
        <Link href={'/blogs'} className="link link-hover">Blogs</Link>
        <Link href={'/profile'} className="link link-hover">Profile</Link>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <Link href={'/login'} className="link link-hover">Login</Link>
        <Link href={'/signup'} className="link link-hover">Sign Up</Link>
        <Link href={'/dashboard'} className="link link-hover">Dashboard</Link>
        <Link href={'/'} className="link link-hover">Home</Link>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <Link href={'/'} className="link link-hover">Home</Link>
        <Link href={'/'} className="link link-hover">Home</Link>
        Copywright © {new Date().getFullYear()} All Right resurve
      </nav>
    </footer>
  );
};

export default Footer;
