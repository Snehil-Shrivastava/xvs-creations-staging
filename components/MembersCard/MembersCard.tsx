import Image from "next/image";

import placeholder from '@/public/images/members-placeholder.png'

import './MembersCard.css'

const MembersCard = () => {
  return (
    <div className="inline-flex flex-col md:max-xl:gap-3 xl:max-1440p:gap-4">
        <div className="inline-block"><Image className="member-img" src={placeholder} alt='' /></div>
        <div className="text-center">
            <h3 className="font-calSans md:max-lg:text-[0.875rem]/[1rem] lg:max-xl:text-[1rem] xl:max-1440p:text-[20px]">Vinay Sharma</h3>
            <span className="md:max-lg:text-[10px] lg:max-xl:text-[12px] xl:max-1440p:text-[14px] font-light">Graphic Designer</span>
        </div>
    </div>
  )
}

export default MembersCard