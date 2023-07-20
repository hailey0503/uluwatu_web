import React from 'react'
import styles from "./page.module.css";
//import Uluwatu from ".public/uluwatu_morning.png"

export default function Home() {
  return (
    <div>
		<div className={styles.item}>
		<Image src={Uluwatu} alt="uluwatu" className={styles.img} />
		</div>
	</div>
  )
}
