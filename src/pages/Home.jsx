import React from 'react';
import Link from '../components/Link';
import Image from '../components/Image';

const faces = ['/fitcheck/editorial-woman.png','/fitcheck/editorial-man.png','/fitcheck/standing-couple-brown.png'];
const thumbs = ['/fitcheck/editorial-man.png','/fitcheck/editorial-woman.png','/fitcheck/standing-couple-brown.png','/fitcheck/hero-brown-wide.png'];

export default function Home(){
  return <><main id="main"><div className="home"><section className="home-hero">
    <div className="hero-copy"><div className="eyebrow">Style starts with you</div><h1>Better Fits.<br/>A Bolder You.</h1><p>A fresh perspective on what you wear. Discover your aesthetic, find inspiration, and make every look your own.</p>
      <div className="actions"><Link href="/upload" variant="primary">↑ &nbsp;Upload Outfit</Link><Link href="/inspiration" variant="secondary">Explore Looks</Link></div>
      <div className="hero-proof"><div className="faces">{faces.map((src,i)=><Image key={src} src={src} alt="" variant="avatar" className={`face-${i}`}/>)}</div><span>Different styles. Same confidence.</span></div>
      <div className="hero-notes"><div><b>Your fits</b><span>One personal style space</span></div><div><b>Your taste</b><span>Room to experiment</span></div><div><b>Your pace</b><span>Small steps, better outfits</span></div></div>
    </div>
    <div className="hero-art"><div className="art-back"/><Image src="/fitcheck/editorial-woman.png" alt="Woman wearing a chocolate blazer and ivory trousers" className="hero-photo" loading="eager"/><div className="tagline home-art-note">Good outfits.<br/>Brighter days.</div>
      <aside className="floating-score"><h3>Fit Score</h3><span className="small muted">Sample style analysis</span><div className="score-ring"><div><strong>92</strong><small>/ 100</small></div></div><ul className="checks"><li>✓ Great color harmony</li><li>✓ Modern &amp; balanced</li><li>✓ Confident look</li></ul></aside>
      <div className="similar-strip"><div className="thumbs">{thumbs.map(src=><Image key={src} src={src} alt=""/>)}</div><Link href="/inspiration" variant="default">Find your next favorite look</Link></div>
    </div>
  </section><div className="home-bottom"><span>01 &nbsp; Upload a look</span><span>02 &nbsp; Explore your style</span><span>03 &nbsp; Make it yours</span><span className="tagline">A little inspiration goes a long way.</span></div></div></main><Footer/></>;
}
function Footer(){return <footer className="footer"><span>FitCheck · Your style. Your confidence.</span><div><Link href="/about">About Us</Link> &nbsp; / &nbsp; <Link href="/contact">Contact</Link></div></footer>}
