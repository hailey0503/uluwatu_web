"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const Dashboard = () => {
	const [data, err, isLoading] = useSWR('')
	
	
/*
	useEffect(()=>{  use SWR instead of useEffect!!! b/c it cache your data and revalidate
		const getData = async () => {
			setIsLoading(true)
			const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
     			//cache: "no-store",
      			cach: 'force-cache' //default
      			//next: {revalidate: 10}
   			});
  
    		if (!res.ok) {
      			setError(true)
    		}
			const data = await res.json()
			setData(false)
			setIsLoading(data)
    		//return data;
  		};
		getData()
		
	}, [])
	console.log(data)
	
*/
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	

	return <div className={styles.container}>Dashboard</div>
  }
  export default Dashboard;
  