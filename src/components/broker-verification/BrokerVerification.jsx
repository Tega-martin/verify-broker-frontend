import React, { useState, useEffect } from 'react';
import styles from './BrokerVerification.module.css';
import Avatar from '../../assets/kelsey.jpeg';
import Meta4 from '../../assets/meta_2.png';
import Fxtm from '../../assets/fxtm.png';
import Coinbase from '../../assets/coinbase_2.png';
import Defi from '../../assets/defi.jpeg';
import Etoro from '../../assets/etoro.jpeg';

const BrokerVerification = () => {
	const [broker, setBroker] = useState([
		{
			name: 'Kelsey',
			picture: Avatar,
			id: 'QUTYWAQ754SEG',
			brokerName: 'Meta 4',
		},
	]);

	const image = [
		{ img: Meta4, name: 'Meta 4' },
		{ img: Fxtm, name: 'FXTM' },
		{ img: Coinbase, name: 'Coinbase' },
		{ img: Defi, name: 'Defi Crypto Investment' },
		{ img: Etoro, name: 'Etoro' },
	];
	const [searchQuery, setSearchQuery] = useState('');

	const fetchBrokerData = async (query) => {
		try {
			const response = await fetch(
				`https://api.example.com/brokers?search=${query}`
			);
			const data = await response.json();
			setBroker(data);
		} catch (error) {
			console.error('Error fetching broker data:', error);
		}
	};

	const handleSearch = () => {
		if (searchQuery) {
			fetchBrokerData(searchQuery);
		}
	};

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.header}>
					<p>
						"The broker ID you searched is VERIFIED. Explore the world of exotic
						individual brokers/traders and their affiliated companies!"
					</p>
				</div>
				<div className={styles.searchBar}>
					<input
						type="text"
						placeholder="Full Name / Broker ID"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<button onClick={handleSearch}>Search</button>
				</div>
				{/* {broker && (
				<div className={styles.brokerInfo}>
					<img
						src={broker.image || 'default-image.jpg'}
						alt="Broker"
						className={styles.brokerImage}
					/>
					<div className={styles.brokerDetails}>
						<p>
							<strong>Full Name:</strong> {broker.fullName}
						</p>
						<p>
							<strong>Broker ID:</strong> {broker.brokerId}
						</p>
						<p>
							<strong>Broker Name:</strong> {broker.brokerName}
						</p>
					</div>
				</div>
			)} */}

				<div className={styles.tableContainer}>
					<table className={styles.brokerTable}>
						<thead>
							<tr>
								<th>Full Name</th>
								<th>Broker Picture</th>
								<th>Broker ID</th>
								<th>Broker Name</th>
							</tr>
						</thead>
						<tbody>
							{broker.map((item, index) => (
								<tr key={index}>
									<td>{item.name}</td>
									<td>
										<img
											src={item.picture}
											alt={item.name}
											className={styles.brokerImage}
										/>
									</td>
									<td>{item.id}</td>
									<td>{item.brokerName}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className={styles.affiliates}>
					<h3>Affiliates</h3>
					<table className={styles.affiliateList}>
						{image.map((affiliate, index) => (
							
								<td className={styles.imgContainer}>
									<img
										src={affiliate.img}
										alt={affiliate.name}
										className={styles.img}
									/>

									<p>{affiliate.name}</p>
								</td>
							
						))}
					</table>
				</div>
			</div>
		</section>
	);
};

export default BrokerVerification;
