import SectionHeading from '@/components/SectionHeading/SectionHeading'
import Testimonials from '@/components/Testimonials/Testimonials'
import WordsBtnSVG from '@/SVGs/WordsBtnSVG'

import './Styles/HomePageTestimonials.css'

const HomePageTestimonials = () => {
  return (
    <div className='mt-30 pb-40'>
        <SectionHeading heading='WORDS' btnHeading='REVIEWS' btnIcon={<WordsBtnSVG />} />
        <p className='text-[#F3EDDE] font-apercu-regular text-[1.125rem] font-thin text-center'>Hear from visionaries and experts</p>
        <div className="relative p-[2px] flex mx-auto max-[769px]:w-19/20 mt-8">
          <div className="bg-[#F3EDDE] max-w-[1280px] 2xl:w-full xl:w-full lg:w-full max-[769px]:w-full mx-auto reviews-box relative">
            <Testimonials />
          </div>
        </div>
    </div>
  )
}

export default HomePageTestimonials