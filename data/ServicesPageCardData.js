import GraphicDesignImg from "@/public/images/graphic-design-img.png";
import BrandingImg from '@/public/images/Lemon sliced 1.png'
import Image from "next/image";

export const cardsData = [
    {
        id: 1,
        title: 'Graphic Design',
        subtitle: 'PRINT AND DIGITAL',
        description: (
            <>
                Our expert <span className="text-[#F79839] font-semibold"> graphic designers </span> and brand strategists craft powerful visual narratives. Through meticulously designed marketing collateral and print materials, we enhance your brand presence and create meaningful connections with your audience at every touchpoint.
            </>
        ),
        image: (
            <Image
                className="aspect-auto xl:max-1440p:h-[480px] xl:max-1440p:w-[420px]"
                src={GraphicDesignImg}
                alt="image"
            />
        ),
    },
    {
        id: 2,
        title: 'Branding',
        subtitle: 'IDENTITY AND PLACEMENT',
        description: (
            <>
                Our expert <span className="text-[#F79839] font-semibold"> graphic designers </span> and brand strategists craft powerful visual narratives. Through meticulously designed marketing collateral and print materials, we enhance your brand presence and create meaningful connections with your audience at every touchpoint.
            </>
        ),
        image: (
            <Image
                className="aspect-auto xl:max-1440p:h-[480px] xl:max-1440p:w-[470px]"
                src={BrandingImg}
                alt="image"
            />
        )
    },
]