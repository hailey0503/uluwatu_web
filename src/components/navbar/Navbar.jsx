"use client";
import React from 'react';
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkMode from "../darkMode/darkMode";
//import { signOut, useSession } from "next-auth/react";


const links = [
	{
	  id: 1,
	  title: "Home",
	  url: "/",
	},
	{
	  id: 2,
	  title: "Service",
	  url: "/portfolio",
	},
	{
	  id: 3,
	  title: "Blog",
	  url: "/blog",
	},
	{
	  id: 4,
	  title: "About Us",
	  url: "/about",
	},
	{
	  id: 5,
	  title: "Contact",
	  url: "/contact",
	},
	
  ];
  

const Navbar = () => {
  return (
	<div className={styles.container}>
	<Link href="/" className={styles.logo}>
	  uluwatu
	</Link>
	<div className={styles.links}>
	<DarkMode />
	  {links.map((link) => (
		<Link key={link.id} href={link.url} className={styles.link}>
		  {link.title}
		</Link>
	  ))}
	 
		<button className={styles.logout} onClick={()=> {
			console.log("logged out")
		}}>
		  Logout
		</button>
	  
	</div>
  </div>

  )
}
export default Navbar