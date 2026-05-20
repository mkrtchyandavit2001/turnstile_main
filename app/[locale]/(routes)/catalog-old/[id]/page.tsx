
import React from "react";
import Image from "next/image";
import ButtonComponent from "@/app/components/ButtonComponent/ButtonComponent";
import VideoComponent from "@/app/components/VideoComonent/VideoComonent";
import SimilarProductsSwiper from "@/app/components/SimilarProductsSwiper/SimilarProductsSwiper";
import SingleProductSwiper from "@/app/components/SingleProductSwiper/SingleProductSwiper";
import { our_products_data } from "@/utils/catalog";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import { Metadata } from "next";

const productCodeToTitleIndex: Record<string, number> = {
  "PZ-sanitaric-64": 0,
  "PZ-hygiene-66": 1,
  "PZ-26": 2,
  "TM-22": 3,
  "TV-1": 4,
  "PZ-3": 5,
  "TM-11": 6,
  "PZ-21": 7,
  "PZ-20": 8,
  "PZ-4": 9,
  "PZ-6": 10,
  "BD-001": 11,
  "DA-001": 12,
  "SP-009": 13,
  "SPK-022": 14
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const productCodes = [
    "PZ-3", "PZ-4", "PZ-21", "PZ-6", "PZ-20", "TV-1", "PZ-26", "TM-11", "TM-22", "PZ-sanitaric-64", "PZ-hygiene-66", "BD-001", "DA-001", "SP-009", "SPK-022"
  ];
  const product = id ? our_products_data.find((p) => p.code === id) : undefined;
  const t = await getTranslations("productMetaDataInfo");
  const titleIndex = productCodeToTitleIndex[id];
  let title = "";
  let description = "";
  if (productCodes.includes(id) && titleIndex !== undefined) {
    title = t(`${titleIndex}.title`);
    description = t(`${titleIndex}.description`);
  }


  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://turniket.am/catalog/${product?.code}`,
      siteName: "turniket.am",
      type: "website",
      images: product?.img?.[0] ? [{ url: product.img[0].src, width: 700, height: 650, alt: title, }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: product?.img?.[0] ? [product.img[0].src] : [],
    },
  };
}

const OneProduct = async ({ params }: { params: Promise<{ locale: string; id: string }> }) => {
  const { id } = await params;
  const cookieLang = (await cookies()).get("lang")?.value ?? "am";
  const t = await getTranslations({ locale: cookieLang });
  const product = id ? our_products_data.find((item) => item.code === id) : undefined;

  if (!product) {
    return (
      <div className="one_product_page">
        <div className="container py-6 px-[20px]">
          <h2 className="text-center text-red-500">Product not found</h2>
        </div>
      </div>
    );
  }

  const productCodes = [
    "PZ-3", "PZ-4", "PZ-21", "PZ-6", "PZ-20", "TV-1", "PZ-26", "TM-11", "TM-22", "PZ-sanitaric-64", "PZ-hygiene-66", "BD-001", "DA-001", "SP-009", "SPK-022",
  ];
  const titleIndex = productCodeToTitleIndex[product.code];
  const title = productCodes.includes(product.code) && titleIndex !== undefined ? t(`titleInfoProducts.${titleIndex}.itemTitle`) : "";


const productItems = [];
let i = 0;
while (true) {
  const key = `catalog.${product.code.toLowerCase()}.${i}`;
  const item = t(key, { defaultValue: key });
  if (item === key) break; // key չկա
  productItems.push(item);
  i++;
}

  


  return (
    <div className="one_product_page">
      <div className="container py-6 flex flex-col gap-7 px-[20px]">
        <div className="flex max-md:flex-col justify-center items-start gap-[80px]">
          <div className="w-[45%] max-md:w-full" title={title}>
            <SingleProductSwiper />
          </div>
          <div className="w-[45%] h-[full] flex flex-col gap-[20px] max-md:w-full justify-center">
            <h1 className="arm_Hmks_Bebas_Neue font-semibold text-[30px] leading-[37.6px] font_color uppercase">{product.code}</h1>
            <div className="flex flex-col gap-[20px]">
              <h2 className="arm_Hmks_Bebas_Neue font-semibold text-[20px] leading-[28.8px] font_color uppercase">
                {product.code === "TM-11"
                  ? t("SecurityInfoSection.smartShelvesTitle")
                  : product.code === "PZ-hygiene-66"
                    ? t("catalogNewProductPageTitles.title")
                    : product.code === "PZ-sanitaric-64"
                      ? t("catalogNewProductPageTitles.title")
                      : productCodes.includes(product.code)
                        ? t("singleProductPageTitles.0")
                        : ""}</h2>
              {product.code === "TM-11" ? (
                <p className="arm_Hmks_Bebas_Neue font-medium text-[16px] font_color">{t("SecurityInfoSection.smartShelvesParagraph")}</p>
              ) : product.code === "TM-22" ? (
                <ul className="freeSans font_color leading-[28px] font-normal text-[16px] flex flex-col gap-[10px]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <li key={i}>{t(`SecurityInfoSection.tm22Info.${i}`)}</li>
                  ))}
                </ul>
              ) : productCodes.includes(product.code) ? (
                <ul className="flex flex-col gap-[10px]">
                  {productItems.map((el, i) => (
                    <li key={i} className="arm_Hmks_Bebas_Neue font-medium text-[16px] font_color">
                      {el}
                    </li>
                  ))}



                </ul>
              ) : null}
            </div>
            <ButtonComponent
              name={t("OurProductsSection.order_btn")}
              bg="transparent"
              color="#5939F5"
              size="14px"
              border="1px solid #5939F5"
              width="300px"
              py="9px"
              px="0"
              order={product.code}
            />
          </div>
        </div>
        {product.videos && product.videos.length > 0 && (
          <div className="w-full flex flex-wrap justify-center gap-[20px]">
            {product.videos.map((video, index) => (
              <div key={index} className="w-full md:w-[18%] h-[400px]">
                <VideoComponent path={video ?? ""} thumb={""} />
              </div>
            ))}
          </div>
        )}
        {product.code === "TV-1" && product.img && (
          <div className="w-full flex flex-wrap justify-start gap-[20px]">
            {product.img.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${product.code}-${index}`}
                className="w-[300px] h-[300px] rounded object-cover"
              />
            ))}
          </div>
        )}
        <div className="w-full px-4">
          <h2 className="text-2xl font-bold mb-[50px] text-blue-900">{t("singleProductPageTitles.1")}</h2>
          <SimilarProductsSwiper />
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
