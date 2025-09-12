import SectionHeading from "@/components/SectionHeading/SectionHeading";
import WordsBtnSVG from "@/SVGs/WordsBtnSVG";
import Form from 'next/form'

import './Styles/ContactPageForm.css'
import Image from "next/image";

import sendIcon from '@/public/images/send-icon.png'

const ContactPageForm = () => {
  return (
    <div className="max-[769px]:w-[90%] max-[1281px]:w-[85%] w-[85%] 2xl:w-1/2 mx-auto relative top-37.5 z-[65] pb-60">
      <div
        className="w-full h-full relative bg-neutral-50/20 backdrop-blur-xs"
        style={{
          clipPath:
            "polygon(0 28px, 1px 100%, calc(100% - 1px) 100%, 100% 28px, calc(100% - 28px) 0%, 28px 0%)",
        }}
      >
        <div
          className="w-full h-full relative bg-neutral-950/70 backdrop-blur-sm"
          style={{
            clipPath:
              "polygon(calc(100% - 99.8%) 28px, 0 100%, 100% 100%, 99.8% 28px, calc(100% - 28px) calc(100% - 99.8%), 28px calc(100% - 99.8%))",
          }}
        >
          <div className="relative">
            <SectionHeading 
                heading="CONNECT"
                btnHeading="TOUCH"
                btnIcon={<WordsBtnSVG />}
                className="py-15"
                style='md:max-lg:text-[5.5rem]/[6.5rem] lg:max-xl:text-[6.5rem]/[7.5rem] xl:max-1440p:text-[8rem]/[9rem]'
            />
            <div className="md:max-xl:w-4/5 xl:max-1440p:w-3/4 mx-auto pb-15">
              <div>
                <Form action="">
                  <div className="text-sm flex flex-col gap-12 text-[#ffffffad] max-[769px]:text-[0.6875rem]">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-neutral-50">
                        Name*
                      </label>
                      <input
                        id="name"
                        className="outline-none border-b border-[#525151] py-[8px] px-[6px]"
                        type="text"
                        placeholder="John Doe"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="flex gap-12">
                      <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="email" className="text-neutral-50">
                          Email*
                        </label>
                        <input
                          id="email"
                          className="outline-none border-b border-[#525151] py-[8px] px-[6px]"
                          type="email"
                          placeholder="johndoe@xyz.com"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="phone" className="text-neutral-50">
                          Contact*
                        </label>
                        <input
                          id="phone"
                          className="outline-none border-b border-[#525151] py-[8px] px-[6px]"
                          type="text"
                          placeholder="+91-88788-78878"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="message" className="text-neutral-50">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        className="outline-none resize-none field-sizing-content border-b border-[#525151] py-[8px] px-[6px]"
                        placeholder="Drop your message"
                        required
                      />
                    </div>
                  </div>

                  <div className="text-3xl text-[#F39638] my-16 relative send-btn-cnt">
                    <button
                      className={`relative z-5 w-full p-3 flex justify-end align-center cursor-pointer send-btn font-calSans`}
                      type="submit"
                    >
                      <span className="">Send</span>
                                              <Image
                          src={sendIcon}
                          alt="Send"
                          className="inline mx-4"
                        />
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageForm;
