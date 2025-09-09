import AboutPage from '@/Pages/AboutPage'
import GridSVG from '@/SVGs/GridSVG'

const Page = () => {
  return (
    <>
        <GridSVG />
        <div className='relative top-40 w-4/5 mx-auto '>
            <AboutPage />
        </div>
    </>
  )
}

export default Page