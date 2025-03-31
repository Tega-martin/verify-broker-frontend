import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div>
					<p className={styles.copyright}>
						©2023 VERIFYABROKER, All Rights Reserved
					</p>
					<p className={styles.trademark}>
						VERIFYABROKER is a registered trademark of the Financial Industry
						Regulatory Authority, Inc.
					</p>
				</div>
				|
			</div>
		</footer>
	);
};

export default Footer;
