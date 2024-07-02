import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { PREVIEW } from '../../data';
import styles from './Preview.module.css';

export default function Preview() {
	const [preview, setPreview] = useState({
		image: {},
		title: '',
		description: '',
		statuses: [],
	});

	useEffect(() => {
		const timer = setTimeout(() => {
			setPreview(PREVIEW);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<article className={styles.preview}>
			<div className={styles.image}>
				<div className={styles.inner}>
					{Object.keys(preview.image).length > 0 ? (
						<img src={preview.image.src} alt={preview.image.alt} />
					) : (
						<Skeleton />
					)}
				</div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>
					{preview.title || <Skeleton />}
				</h2>
				<p className={styles.desc}>
					{preview.description || <Skeleton />}
				</p>
				<ul className={styles.statuses}>
					{preview.statuses.length === 0 &&
						[1, 2, 3].map((item) => (
							<li key={item}>
								<span>
									<Skeleton />
								</span>
								<span>
									<Skeleton />
								</span>
							</li>
						))}
					{preview.statuses.length > 0 &&
						preview.statuses.map((status) => (
							<li key={status.label}>
								<span className={styles.num}>
									{status.amount}
								</span>
								<span className={styles.label}>
									{status.label}
								</span>
							</li>
						))}
				</ul>
			</div>
		</article>
	);
}
