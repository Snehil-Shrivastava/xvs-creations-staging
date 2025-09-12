import "./ClientReviews.css";

import { clientReviews } from "@/data/AboutPageReviewsData";
import { clientLogo } from "@/data/AboutPageReviewsData";

import ClutchReview from "@/SVGs/ClutchReview";
import SortListReviews from "@/SVGs/SortListReviews";

const ClientReviews = () => {
  return (
    <div className="md:max-lg:py-[50px] lg:max-xl:py-[70px] xl:max-1440p:py-[80px] md:max-lg:mt-[48px] mt-[64px] review-box">
      <div className="md:max-lg:w-9/10 lg:max-1440p:w-[85%] mx-auto">
        <div className="client-banner md:max-lg:pb-[38px] lg:max-xl:pb-[52px] xl:max-1440p:pb-[64px] select-none md:max-lg:gap-y-[18px] lg:max-xl:gap-y-[22px] xl:max-1440p:gap-y-[28px] lg:max-xl:gap-x-[22px]">
          {clientLogo.map((logo) => (
            <div key={logo.id} className="text-center client-logo">
                {logo.logo}
            </div>
          ))}
        </div>
        <div className="mt-[48px] max-[1025px]:mt-[28px] max-[769px]:mt-[32px] max-[426px]:mt-[22px]">
          <div className="flex gap-[22px] justify-center items-center select-none">
            <ClutchReview className="md:max-lg:w-[48px]" />
            <SortListReviews className="w-[63px] h-[19px]" fill="white" />
          </div>
          <div className="flex md:max-lg:mt-[32px] lg:max-xl:mt-[42px] xl:max-1440p:mt-[64px] text-left gap-[32px] justify-between text-black">
            {clientReviews.map((client, index) => (
              <div key={index} className="w-[320px]">
                <h3 className="font-bold tracking-wider max-[1025px]:text-[0.75rem] max-[769px]:text-[0.5rem] max-[426px]:text-[6px] text-[0.875rem]">
                  {client.name}
                </h3>
                <p className="max-[1441px]:text-[0.75rem] max-[1025px]:text-[0.65rem] max-[769px]:text-[0.4rem] max-[426px]:text-[4px]">
                  {client.designation}
                </p>
                <div className="my-[0.5rem]">
                  <h1 className="font-bold text-[2rem]/[3rem] max-[1025px]:text-[1.75rem] md:max-lg:text-[1rem]/[1.5rem] max-[426px]:leading-[1rem]">
                    {client.rating}
                  </h1>
                </div>
                <p className="font-light text-[12px] max-[1025px]:text-[0.75rem] max-[769px]:text-[0.5rem] max-[426px]:text-[6px]">
                  {client.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
