import Image from 'next/image';
import HERO_IMAGE from 'public/images/hero-hs.webp';

const Hero = () => (
  <section>
    <Image alt="hero" layout="fill" src={HERO_IMAGE} />
  </section>
);

export default Hero;
