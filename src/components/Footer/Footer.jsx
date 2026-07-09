import React from 'react'
import './Footer.css'
 
const productColumns = [
	{
		title: 'Appliances',
		links: ['Ovens', 'Ranges', 'Cooktops', 'Microwaves', 'Dishwashers', 'Refrigerator', 'Fireplaces', 'Smart Bathrooms'],
	},
	{
		title: 'Audiovisual',
		links: ['Televisions', 'Entertainment Systems', 'Navigation Systems', 'Audio', 'Accessories'],
	},
	{
		title: 'Cameras',
		links: ['Vehicle Observation', 'Accessories'],
	},
	{
		title: 'Energy',
		links: ['Net-Zero Solar', 'Inverters', 'Cables & Inlets', 'Accessories'],
	},
]
 
const lowerColumns = [
	{
		title: 'Services',
		links: ['Net-Zero', 'Design', 'Robotics'],
	},
	{
		title: 'Our Story',
		links: ['Our Story', 'Global Infrastructure', 'Work For Us'],
	},
	{
		title: 'Support',
		links: [
			{ label: 'Locate a Dealer' },
			{ label: 'Get Help', external: true },
			{ label: 'Register Product', external: true },
			{ label: 'Manuals & Downloads' },
			{ label: 'Contact Us' },
		],
	},
	{
		title: 'Media',
		links: [],
	},
]
 
function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<div className="footer-block products-block">
					<h3 className="footer-heading">Products</h3>
					<div className="products-grid">
						{productColumns.map((col) => (
							<div className="footer-column" key={col.title}>
								<h4 className="footer-subheading">{col.title}</h4>
								<ul>
									{col.links.map((link) => (
										<li key={link}>
											<a href="#">{link}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
 
				<div className="footer-divider" />
 
				<div className="lower-grid">
					{lowerColumns.map((col) => (
						<div className="footer-column" key={col.title}>
							<h3 className="footer-heading small">{col.title}</h3>
							<ul>
								{col.links.map((link) => {
									const label = typeof link === 'string' ? link : link.label
									const external = typeof link === 'object' && link.external
									return (
										<li key={label}>
											<a href="#">
												{label}
												{external && (
													<svg
														className="external-icon"
														viewBox="0 0 16 16"
														width="11"
														height="11"
														aria-hidden="true"
													>
														<path
															d="M4 4h5v1.4H6.4L11 10v-3.6h1.4V12H4V4z"
															fill="currentColor"
														/>
													</svg>
												)}
											</a>
										</li>
									)
								})}
							</ul>
						</div>
					))}
				</div>
			</div>
		</footer>
	)
}
 
export default Footer