import { LineIcon } from "@/app/icons/LineIcon"
import { QuestionIcon } from "@/app/icons/QuestionIcon"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { useTranslations } from "next-intl"
  
   function FrequentlyAsked() {
    const t = useTranslations("FrequentlyAsked")

    return (
      <div className="contact_section relative p-[50px]">
      <div className="container flex flex-col items-center gap-[50px] ">

                <div className="flex items-center justify-center gap-3">
                    <LineIcon width={27} height={2} color="#5939F5" />
                    <h2 className="text-[24px] font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px] uppercase text-center">
                        {t("title")}
                    </h2>
                    <LineIcon width={27} height={2} color="#5939F5" />
                </div>

        <Accordion type="single" collapsible className="w-[70%] flex flex-col gap-[20px] justify-center  bg-white py-[40px] max-sm:px-[10px] rounded-xl z-10 max-lg:w-[100%]">
        <AccordionItem value="item-1" className="px-5 py-3 relative z-20">
          <AccordionTrigger>{t("questions.0.question")}</AccordionTrigger>
          <AccordionContent className="w-[80%] text-justify">
              {t("questions.0.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="px-5 py-3 relative z-20">
          <AccordionTrigger>{t("questions.1.question")}</AccordionTrigger>
          <AccordionContent className="w-[80%] text-justify">
              {t("questions.1.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="px-5 py-3 relative z-20">
          <AccordionTrigger>{t("questions.2.question")}</AccordionTrigger>
          <AccordionContent className="w-[80%] text-justify">
              {t("questions.2.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="px-5 py-3 relative z-20">
          <AccordionTrigger>{t("questions.3.question")}</AccordionTrigger>
          <AccordionContent className="w-[80%] text-justify">
              {t("questions.3.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="px-5 py-3 relative z-20">
          <AccordionTrigger>{t("questions.4.question")}</AccordionTrigger>
          <AccordionContent className="w-[80%] text-justify">
              {t("questions.4.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="px-5 py-3 relative z-20">
          <AccordionTrigger>{t("questions.5.question")}</AccordionTrigger>
          <AccordionContent className="w-[80%] text-justify">
              {t("questions.5.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="px-5 py-3 relative z-20">
          <AccordionTrigger>{t("questions.6.question")}</AccordionTrigger>
          <AccordionContent className="w-[80%] text-justify">
              {t("questions.6.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" className="px-5 py-3 relative z-20">
          <AccordionTrigger>{t("questions.7.question")}</AccordionTrigger>
          <AccordionContent className="w-[80%] text-justify">
              {t("questions.7.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9" className="px-5 py-3 relative z-20">
          <AccordionTrigger>{t("questions.8.question")}</AccordionTrigger>
          <AccordionContent className="w-[80%] text-justify">
              {t("questions.8.answer")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10" className="px-5 py-3 relative z-20">
          <AccordionTrigger>{t("questions.9.question")}</AccordionTrigger>
          <AccordionContent className="w-[80%] text-justify">
              {t("questions.9.answer")}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
      <div className="absolute -left-[1.5%] top-[40%] z-10 max-md:hidden"><QuestionIcon width={130} height={200} rotate={-80}/></div>
      <div className="absolute right-[1.5%] top-[0%]  z-10 max-lg:top-[20%] max-md:hidden"><QuestionIcon width={130} height={200} rotate={0}/></div>
      <div className="absolute right-[3%] bottom-[0%] z-10 max-md:hidden"><QuestionIcon width={130} height={200} rotate={-50}/></div>
    </div>

    )
  }

  
  export default FrequentlyAsked