import SectionHeading from '@/components/SectionHeading/SectionHeading'
import Testimonials from '@/components/Testimonials/Testimonials'
import WordsBtnSVG from '@/SVGs/WordsBtnSVG'

import './Styles/HomePageTestimonials.css'

const HomePageTestimonials = () => {
  return (
    <div className='mt-30 pb-40'>
        <SectionHeading heading='WORDS' btnHeading='REVIEWS' btnIcon={<WordsBtnSVG />} />
        <p className='text-[#F3EDDE] font-apercu-regular lg:max-xl:text-[1rem] xl:max-1440p:text-[1.125rem] font-thin text-center'>Hear from visionaries and experts</p>
        <div className="relative flex mx-auto mt-8">
          <div className="bg-[#F3EDDE] max-w-[1280px] w-full mx-auto reviews-box relative">
            <Testimonials />
          </div>
        </div>
    </div>
  )
}

export default HomePageTestimonials