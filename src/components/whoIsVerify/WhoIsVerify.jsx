import React from 'react';
import styles from './WhoIsVerify.module.css';
import LogoPicture from '../../assets/finra-logo-white.png';

import { FaDesktop, FaPhoneAlt } from 'react-icons/fa';

import { FaExclamation } from "react-icons/fa6";

function WhoIsVerify() {
	return (
		<section className={styles.vSection}>
			<div className={styles.first}>
				<div className={styles.img_container}>
					<img src={LogoPicture} alt="Verifyabroker" className={styles.img} />
				</div>

				<div className="details-container">
					<p className={styles.details}>
						<span>Who is VERIFYABROKER?</span> VERIFYABROKER is an independent,
						non-governmental regulator for all securities doing business with
						the public in the United States. We are authorized by Congress to
						protect America’s investors by making sure the securities industry
						operates fairly and honestly.
					</p>
				</div>

				<div className={styles.last_div}>
					<FaDesktop className={styles.icon3} />

					<p className={styles.learn}>
						Learn more about VERIFYABROKER at{' '}
						<a href="#" className={styles.link}>www.verifyabroker.com</a>
					</p>
				</div>
			</div>

			<div className={styles.second}>
				<p className={styles.want_to_learn}>Want to learn more?</p>

				<div className={styles.last_last}>
					<FaExclamation className={styles.icon} />

					<p className={styles.learn}>
						<a href="#" className={styles.link}>Learn more about VERIFYABROKER Information</a> and where
						it comes from
					</p>
				</div>

				<div className={styles.last_last}>
					<FaPhoneAlt className={`${styles.icon} ${styles.icon2}`} />

					<p className={styles.learn}>
            Need Assistance?
            <a href="#" className={styles.link}> email</a> us {''}
            <a href="#" className={styles.link}>survey</a>.
					</p>
				</div>
			</div>
		</section>
	);
}

export default WhoIsVerify;
