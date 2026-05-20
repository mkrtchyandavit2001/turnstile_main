import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";
import ButtonParrentComponent from "../ButtonParrentComponent/ButtonParrentComponent";
import BannerList from "../BannerList/BannerList";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { FaFileAlt, FaImages, FaVideo } from 'react-icons/fa';

interface BannerItem {
  id: string;
  icon: ReactNode; // Use ReactNode for JSX elements
  title: string;
}

interface IContent {
  title: string;
  description: string;
  btn: string;
  btnWhite: boolean
}

interface BannerProps {
  bannerData?: BannerItem[];
  bg: string; // Assuming bg is a URL string
  content: IContent;
  page?: string;
}

const Banner: React.FC<BannerProps> = ({ bannerData, bg, content, page }) => {
  const t = useTranslations("TurnstileBanner");

  return (
    <div
      className={`w-full ${
        page === "turnstile"
          ? "min-h-[580px] max-sm:min-h-[650px]"
        : page === "catalog" ? "min-h-[400px] max-sm:min-h-[400px]"
          : "min-h-[480px] max-sm:min-h-[480px]"
      }`}
    >
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className={`w-full min-h-[400px] bg-cover bg-no-repeat bg-white bg-center max-md:p-2 relative ${
          page === "catalog" ? "flex items-center" : ""
        }`}
      >
        {/* {page === "catalog" && (
          <video autoPlay muted loop className="w-full h-full absolute top-0 left-0 object-cover z-[10]">
            <source src="/videos/turnstile_banner_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )} */}
        {page === "catalog" && (
          <div className="w-full absolute left-0 top-0 h-full bg-[#000000bf] z-0"></div>
        )}
        {page === "catalog" ? (
          <BannerList />
        ) : (
          <div className="container h-full relative z-10">
            <div className="max-w-[530px] flex flex-col gap-[30px] h-full pt-[20px] px-[50px] max-sm:px-2">
              <h1 className="text-white text-[40px] max-md:text-[30px] leading-[48px] font-normal Arm_Hmks_Bebas_Neue">
                {content.title}
              </h1>
              <p className="text-[16px] text-white font-normal leading-[23.04px] freeSans">
                {content.description}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                {/* <ButtonParrentComponent btnText={content.btn} /> */}
                  {content.btn && content.btn.trim() !== "" && (
                    <ButtonParrentComponent btnText={content.btn} />
                  )}

                {/* <ButtonComponent
                  name={t("dawnload_pdf_btn")}
                  bg="#ffff"
                  color="#00000"
                  size="16px"
                  py="7px"
                  px="15px"
                  order="0"
                /> */}
                  
                  {content.btnWhite && (
                    <ButtonComponent
                      name={t("dawnload_pdf_btn")}
                      bg="#ffff"
                      color="#00000"
                      size="16px"
                      py="7px"
                      px="15px"
                      order="0"
                    />
                  )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Additional Section */}
      {bannerData && (
        <div className="max-sm:w-full max-w-[800px] flex items-center max-sm:flex-wrap justify-center gap-[20px] absolute left-[50%] max-sm:bottom-[-450px] transform -translate-x-[50%] -translate-y-[50%] max-sm:-translate-x-0 max-sm:-translate-y-0 max-sm:static max-sm:left-0 pt-24 max-sm:py-6 px-6">
          {bannerData.map((item) => (
            <div
              key={item.id}
              className="max-md:w-[140px] w-[200px] h-[168px] bg-white flex flex-col items-center justify-start gap-[10px] p-[20px] shadow-xl"
            >
              <span>{item.icon}</span>
              <p className="freeSans leading-[24px] max-sm:text-[12px] max-md:text-[14px] text-[16px] font-normal text-center font_color">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner;
