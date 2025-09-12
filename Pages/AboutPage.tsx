'use client' 
import { useModal } from '@/context/ModalContext'
import AboutPageClient from '@/Sections/AboutPageClient'
import AboutPageHeading from '@/Sections/AboutPageHeading'
import AboutPageMembers from '@/Sections/AboutPageMembers'
import AboutPageProcess from '@/Sections/AboutPageProcess'
import AboutPageRichText from '@/Sections/AboutPageRichText'

const AboutPage = () => {
  const { isModalOpen } = useModal()

  return (
    <main className={`${isModalOpen ? 'invisible': ''}`}>
        <AboutPageHeading />
        <AboutPageRichText />
        <AboutPageProcess />
        <AboutPageClient />
        <AboutPageMembers />
    </main>
  )
}

export default AboutPage