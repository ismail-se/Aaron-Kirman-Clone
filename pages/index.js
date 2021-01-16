import Head from 'next/head'
import About from '../components/About/About'
import Button from '../components/Button/Button'
import Gallery from '../components/Gallery/Gallery'
import GalleryImg from '../components/GalleryImg/GalleryImg'
import Header from '../components/Header/Header'
import LetsStart from '../components/LetsStart/LetsStart'
import Slider from '../components/Slider/Slider'
import TextBorder from '../components/TextBorder/TextBorder'
import Kirman from '../components/Kirman/Kirman'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured/Featured'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aaron Kirman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      
      <Slider/>
      <div className={styles.centerMargin}>
      <TextBorder title="Featured Listings" />
      </div>
      
      <Gallery>
        <GalleryImg name="14000 Calle Real" amount="$110,000,000" desc="15 Beds | 26 Baths" img="https://s3.amazonaws.com/clientphotos.idxbroker.com/listings/client_37077/0dcc318fbd768cae13bf53f189577c3e1594068802" />
        <GalleryImg name="14000 Calle Real" amount="$110,000,000" desc="15 Beds | 26 Baths" img="https://s3.amazonaws.com/clientphotos.idxbroker.com/listings/client_37077/f2079306e103b848f2d888e68a114d0c1590010523" />
        <GalleryImg name="14000 Calle Real" amount="$110,000,000" desc="15 Beds | 26 Baths" img="https://media.crmls.org/mediaz/1268FA12-9CFF-43CB-9E3F-4E14727E526E.jpg" />
        <GalleryImg name="14000 Calle Real" amount="$110,000,000" desc="15 Beds | 26 Baths" img="https://media.crmls.org/mediaz/35F65301-D253-4266-B6F1-8B7EAE85CF07.jpg" />
        <GalleryImg name="14000 Calle Real" amount="$110,000,000" desc="15 Beds | 26 Baths" img="https://media.crmls.org/mediaz/0B806189-E0D4-4C63-952A-2BB7B8D6922D.jpg" />
        <GalleryImg name="14000 Calle Real" amount="$110,000,000" desc="15 Beds | 26 Baths" img="https://media.crmls.org/mediaz/75946C91-03EE-4B36-A812-7BA073034446.jpg" />
      </Gallery>

      <div className={styles.centerMargin}>
        <Button text="View All Properties" />
      </div>

      <About />

      <LetsStart />

      <Kirman />

      <Featured />
    </div>
  )
}
