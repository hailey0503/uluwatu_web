import React from 'react'
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
	<div className={styles.container}>
      <div>©2023 uluwatu. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="uluwatu Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="uluwatu Instagram" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="uluwatu Twitter" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="uluwatu YouTube" />
      </div>
    </div>
  )
}
export default Footer