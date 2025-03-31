import React from 'react';
import styles from './ContactSection.module.css';
import ContactImage from '../../assets/contact-image.jpg'; // Update with your actual image path

const ContactSection = () => {
	return (
		<section className={styles.contactSection}>
      <div className={styles.mainContainer}>
				<p className={styles.termsText}>
					Use of the VERIFYABROKER site is subject to{' '}
					<span className={styles.termsLink}>VERIFYABROKER Terms of Use</span>
				</p>

				<div className={styles.contactContainer}>
					{/* Contact Form */}
					<div className={styles.formContainer}>
						<h3 className={styles.contactHeading}>Contact Us</h3>
						<form className={styles.contactForm}>
							<input
								type="text"
								placeholder="Name"
								className={styles.inputField}
							/>
							<input
								type="email"
								placeholder="Email"
								className={styles.inputField}
							/>
							<textarea
								placeholder="Message"
								className={styles.textarea}
							></textarea>
							<button type="submit" className={styles.submitButton}>
								Send Message
							</button>
						</form>
					</div>

					{/* Image */}
					<div className={styles.imageContainer}>
						<img
							src={ContactImage}
							alt="Contact Us"
							className={styles.contactImage}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
