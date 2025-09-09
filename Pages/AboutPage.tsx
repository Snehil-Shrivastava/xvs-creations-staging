import AboutPageClient from '@/Sections/AboutPageClient'
import AboutPageHeading from '@/Sections/AboutPageHeading'
import AboutPageProcess from '@/Sections/AboutPageProcess'
import AboutPageRichText from '@/Sections/AboutPageRichText'

const AboutPage = () => {
  return (
    <main>
        <AboutPageHeading />
        <AboutPageRichText />
        <AboutPageProcess />
        <AboutPageClient />
    </main>
  )
}

export default AboutPage