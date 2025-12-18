import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";
// Use image from public folder via absolute path
//<Image width = {500} height = {500} src="https://images.pexels.com/photos/14374229/pexels-photo-14374229.jpeg?auto=compress&cs=tinysrgb&w=800" alt="uluwatu" className={styles.img} />

export default function Home() {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.item}>
					
						<h1 className={styles.title}>Bringing Virtual Worlds to Life: Your AI-Powered Reality</h1>
						<p className={styles.description}>&quot;Sculpting Digital Imagination into Tangible Experiences&quot;</p>
						<button  url="/portfolio" className={styles.button}>See works</button>
					
				</div>
				<div className={styles.item}>
					<Image src="/uluwatu_morning.png" alt="uluwatu" width={800} height={600} className={styles.img} />
				</div>
			</div>
		</div>
	)
}
