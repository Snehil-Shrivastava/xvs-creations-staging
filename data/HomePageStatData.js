import PeopleStatSVG from "@/SVGs/PeopleStatSVG";
import ProjectStatSVG from "@/public/images/layer.svg";
import RatingStatSVG from "@/SVGs/RatingStatSVG";
import YearsStatSVG from "@/SVGs/YearsStatSVG";

export const CardsData = [
    {
        id: 1,
        cardTitle: 'Projects',
        cardStat: '500+',
        cardText1: 'meaningful impact on businesses',
        cardText2: 'with our design projects',
        descriptor: '',
        SVGIcon: ProjectStatSVG
    },
    {
        id: 2,
        cardTitle: 'Years',
        cardStat: '10',
        cardText1: 'years of working with our customers',
        cardText2: 'to improve their design footprint',
        descriptor: '',
        SVGIcon: <YearsStatSVG className="absolute top-[15%] right-[10%] scale-110" />
    },
    {
        id: 3,
        cardTitle: 'People',
        cardStat: '12',
        cardText1: 'talented professionals using their',
        cardText2: 'skills to bring designs to life',
        descriptor: '',
        SVGIcon: <PeopleStatSVG className="absolute top-0 right-[5%] scale-95" />
    },
    {
        id: 4,
        cardTitle: 'Rating',
        cardStat: '4.9',
        cardText1: 'average ORR* awarded by our customers',
        cardText2: '',
        descriptor: 'ORR = Overall Review Rating',
        SVGIcon: <RatingStatSVG className="absolute top-[15%] right-[10%] scale-110" />
    },
]