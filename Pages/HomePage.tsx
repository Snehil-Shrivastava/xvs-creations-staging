'use client'

import { useModal } from '@/context/ModalContext'
import HomePageHeading from '@/Sections/HomePageHeading'
import HomePageReel from '@/Sections/HomePageReel'
import HomePageServies from '@/Sections/HomePageServies'
import HomePageStats from '@/Sections/HomePageStats'
import React from 'react'

const HomePage = () => {
  const { isModalOpen } = useModal()

  return (
    <main className={`${isModalOpen ? 'invisible': ''}`}>
        <HomePageHeading />
        <HomePageReel />
        <HomePageStats />
        <HomePageServies />
    </main>
  )
}

export default HomePage