import React from 'react';
import styles from './SearchSection.module.css';
import { IoMdContact } from 'react-icons/io';

const SearchSection = () => {
	return (
		<section className={styles.container}>
			<div className={styles.flexContainer}>
				{/* Header */}
				<div className={styles.header}>
					<div className={styles.headerLeft}>
						<span className={styles.icon}>
							<IoMdContact />
						</span>
						<span className={styles.title}>INDIVIDUAL</span>
					</div>
				</div>
				{/* Marquee for Desktop */}
				<div className={styles.marquee}>
					<p>
						By clicking the <span className={styles.span}>SEARCH </span>button
						or otherwise using VERIFYABROKER, I agree to <span className={styles.span}>VERIFYABROKER Terms of Use </span>
					</p>
				</div>
			</div>

			{/* Search Box */}
			<div className={styles.box}>
				{/* Search Bar */}
				<div className={styles.searchBar}>
					<input
						type="text"
						placeholder="Individual Broker ID"
						className={styles.input}
					/>
					<button className={styles.searchButton}>SEARCH</button>
				</div>

        {/* Info Box */}
        {/* Marquee for Mobile/Tablets */}
			<div className={styles.marqueeMobile}>
				<p>
					By clicking the <span className={styles.span}>SEARCH </span>button or
					otherwise using VERIFYABROKER, I agree to
					<span className={styles.span}>VERIFYABROKER Terms of Use </span>
				</p>
        </div>
        
				<div className={styles.infoBox}>
					<span className={styles.infoIcon}>ℹ</span>
					<p>
						With VERIFYABROKER, it is now easy to check if an individual is
						affiliated with a particular cryptocurrency or an investment
						organization that renders financial services. It is crucial to
						verify the authenticity of the individuals or organizations you are
						investing with, and if you have any concerns, reach out to
						VERIFYABROKER for assistance. To learn more about safeguarding
						yourself, <a href="mailto:verifyabroker.email.com">email us</a> regarding imposters.
					</p>
				</div>
			</div>

			

			{/* Footer Text */}
			<p className={styles.footerText}>
				Simply input the broker ID of the individual on the search bar above and
				check its authenticity.
			</p>
		</section>
	);
};

export default SearchSection;
