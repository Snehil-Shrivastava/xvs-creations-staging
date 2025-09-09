import "./ClientReviews.css";

import { clientReviews } from "@/data/AboutPageReviewsData";
import { clientLogo } from "@/data/AboutPageReviewsData";

import ClutchReview from "@/SVGs/ClutchReview";

const ClientReviews = () => {
  return (
    <div className="py-[98px] mt-[64px] review-box max-[1025px]:py-[64px] max-[769px]:py-[48px] max-[426px]:py-[22px] min-[1906px]:w-7/10 min-[1906px]:mx-auto max-[769px]:w-19/20 max-[769px]:mx-auto">
      <div className="w-[80%] mx-auto max-[426px]:w-[85%]">
        <div className="client-banner pb-[88px] select-none max-[1906px]:gap-15 max-[1441px]:gap-[56px] max-[1025px]:gap-[32px] max-[1025px]:pb-[40px] max-[769px]:pb-[48px] max-[769px]:gap-[32px] max-[426px]:pb-[32px]">
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
          <div className="flex mt-[88px] text-left gap-[32px] justify-between max-[1025px]:mt-[44px] max-[769px]:mt-[32px] max-[426px]:gap-[12px] text-black">
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
