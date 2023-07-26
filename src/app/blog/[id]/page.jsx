import React from 'react'
import styles from './page.module.css'
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

async function getData(id) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { //get id from prop
      cache: "no-store",
    });
  
    if (!res.ok) {
      //throw new Error("Failed to fetch data");
      return notFound()
    }
  
    return res.json();
  }
  
const Blog = async ({params}) => {
  const data = await getData(params.id);
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>{data.title}</h1>
    </div>
  )
}
export default Blog;