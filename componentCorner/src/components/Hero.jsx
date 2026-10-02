import './Hero.css';

function Hero({ title, subtitle, callToAction }) {
	return (
		<section className="hero-section" id="top">
			<div className="hero-copy">
				<p className="eyebrow">Small upgrades, lasting delight</p>
				<h1>{title}</h1>
				<p className="hero-subtitle">{subtitle}</p>
				<a className="hero-cta" href="#collection">
					<span>{callToAction}</span>
					<span aria-hidden="true">↓</span>
				</a>
			</div>
			<div className="hero-art">
				<img
					className="hero-image"
					src="https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg"
					alt="A creative workspace with a laptop and desk accessories"
				/>
				<p className="hero-art-label">Objects for better days</p>
			</div>
		</section>
	);
}

export default Hero;
