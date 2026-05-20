import { LineIcon } from "@/app/icons/LineIcon";
import { useTranslations } from "next-intl";
import React from "react";

const BannerList: React.FC = () => {
  const t = useTranslations("BannerList");
  return (
    <div className="container max-w-[650px] text-justify flex items-center gap-7 justify-center h-[100%] text-white relative z-20 flex-col p-3">
      <div className="flex items-center justify-center gap-3">
        <LineIcon width={27} height={2} color="#5939F5" />
        <h2 className="text-[24px] font-normal arm_Hmks_Bebas_Neue leading-[28.8px] uppercase text-center">
          {t("title")}
        </h2>
        <LineIcon width={27} height={2} color="#5939F5" />
      </div>
      <h3>{t("text")}</h3>
      <ul className="flex flex-col gap-4 list-disc marker:text-[#5939F5] marker:text-2xl">
        <li className="ml-3">{t("list.0")}</li>
        <li className="ml-3">{t("list.1")}</li>
        <li className="ml-3">{t("list.2")}</li>
        <li className="ml-3">{t("list.3")}</li>
        <li className="ml-3">{t("list.4")}</li>
      </ul>
    </div>
  );
};

export default BannerList;
