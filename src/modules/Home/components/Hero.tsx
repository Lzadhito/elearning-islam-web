import Image from 'next/image';
import HERO_IMAGE from 'public/images/hero-hs.webp';

const Hero = () => (
  <section className="min-h-screen">
    <Image alt="hero" className="z-0" layout="fill" src={HERO_IMAGE} />
    <div className="relative z-10 font-display">
      ini adalah bagian depan
    </div>
  </section>
);

export default Hero;
