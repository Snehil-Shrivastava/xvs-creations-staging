import "./ClientReviews.css";

import { clientReviews } from "@/data/AboutPageReviewsData";
import { clientLogo } from "@/data/AboutPageReviewsData";

import ClutchReview from "@/SVGs/ClutchReview";

const ClientReviews = () => {
  return (
    <div className="xl:max-1440p:py-[80px] mt-[64px] review-box min-[1906px]:mx-auto max-[769px]:w-19/20 max-[769px]:mx-auto">
      <div className="xl:max-1440p:w-[85%] mx-auto">
        <div className="client-banner xl:max-1440p:pb-[64px] select-none xl:max-1440p:gap-x-[42px] xl:max-1440p:gap-y-[28px]">
          {clientLogo.map((logo) => (
            <div key={logo.id}>
                {logo.logo}
            </div>
          ))}
        </div>
        <div className="mt-[48px] max-[1025px]:mt-[28px] max-[769px]:mt-[32px] max-[426px]:mt-[22px]">
          <div className="flex gap-[22px] justify-center select-none">
            <ClutchReview />
            <ClutchReview />
          </div>
          <div className="flex xl:max-1440p:mt-[64px] text-left gap-[32px] justify-between text-black">
            {clientReviews.map((client, index) => (
              <div key={index} className="w-[320px]">
                <h3 className="font-bold tracking-wider max-[1025px]:text-[0.75rem] max-[769px]:text-[0.5rem] max-[426px]:text-[6px] text-[0.875rem]">
                  {client.name}
                </h3>
                <p className="max-[1441px]:text-[0.75rem] max-[1025px]:text-[0.65rem] max-[769px]:text-[0.4rem] max-[426px]:text-[4px]">
                  {client.designation}
                </p>
                <div className="my-[0.5rem]">
                  <h1 className="font-bold text-[2rem]/[3rem] max-[1025px]:text-[1.75rem] max-[769px]:text-[1rem] max-[426px]:leading-[1rem]">
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
