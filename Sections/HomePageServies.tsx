import SectionHeading from '@/components/SectionHeading/SectionHeading'
import ServicesBtnSVG from '@/SVGs/ServicesBtnSVG'
import React from 'react'

const HomePageServies = () => {
  return (
    <div>
        <SectionHeading heading="SERVICES" btnHeading="VIEW SERVICES" btnIcon={<ServicesBtnSVG />} />
    </div>
  )
}

export default HomePageServies