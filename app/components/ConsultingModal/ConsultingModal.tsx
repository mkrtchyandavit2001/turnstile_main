'use client'
import React  from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { XIcon } from '@/app/icons/XIcon';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectIsOpenConsultingModal, selectOrderCode, toggleConsultingModal } from '@/app/store/slices/consultingModalSlice/consultingModalSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import { useTranslations, useLocale } from 'next-intl';
// import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
interface InitialValues {
  fullName: string;
  phone: string;
  email: string;
  time: string;
  product: string;
  description: string;
}
const ConsultingModal = () => {
  const isOpenModal = useAppSelector(selectIsOpenConsultingModal)
  const orderCode = useSelector(selectOrderCode)
  const dispatch = useAppDispatch()
  const t = useTranslations('ContactSection');
  const [captchaToken, setCaptchaToken] = useState<string>("");

  const initialValues = {
    fullName: '',
    phone: '',
    email: '',
    time: '',
    product: '',
    description: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string(),
    phone: Yup.string(),
    email: Yup.string().email(),
    time: Yup.string(),
    product: Yup.string(),
    description: Yup.string(),
  });

  const localeMap: Record<string, string> = {
    am: "hy",
    ru: "ru",
    en: "en",
  };

  const locale = useLocale();

  const mapBackendFieldToFormik = (field: string): string => {
    const map: Record<string, string> = {
      full_name: 'fullName',
      phone_number: 'phone',
      email: 'email',
      product_code: 'product',
    };

    return map[field] ?? field;
  };

  const handleSubmit = async (
    values: InitialValues,
    { resetForm, setErrors }: FormikHelpers<InitialValues>
  ) => {
    try {

      if (!captchaToken) {
        toast.error(t('captcha.required'));
        return;
      }

      const payload = {
        full_name: values.fullName,
        phone_number: values.phone,
        email: values.email,
        product_code: orderCode || '', // обязательно передаем хотя бы пустую строку
        message: values.description,
        preferred_time: values.time,
        captcha: captchaToken,
      };

      const apiLocale = localeMap[locale] ?? 'hy';

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/order-email`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          'Content-Type': 'application/json',
          'Accept-Language': apiLocale,
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
        cache: 'no-store',
      });

      const data = await res.json();

      if (res.status === 422 && data?.errors) {
        const formikErrors: Record<string, string> = {};
        Object.entries(data.errors).forEach(([field, messages]) => {
          const formikField = mapBackendFieldToFormik(field);
          formikErrors[formikField] = (messages as string[])[0];
        });
        setErrors(formikErrors);
        return;
      }

      if (!res.ok) {
        throw new Error('API request failed');
      }

      resetForm();
      toast.success(t('message.success'));
      dispatch(toggleConsultingModal({ isview: false, orderCode: '' }));

    } catch (error) {
      console.error('Submit error:', error);
      toast.error(t('message.error'));
    }
  };

  return (
    <div style={{display: isOpenModal ? 'flex' : 'none'}} className='consulting_modal fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-55 flex justify-center items-center z-[99999999] max-sm:items-start'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="max-w-[860px] flex flex-col gap-[20px] justify-center max-sm:justify-start items-center bg-white my_shadow p-[40px] max-sm:px-[10px] rounded-xl z-10 relative max-sm:h-[600px] max-sm:gap-[2vh] overflow-y-auto overflow-x-hidden max-sm:mt-[30px] max-sm:custom_scrollbar">

              {/* WhatsApp */}
              <a
                href="https://wa.me/37496400073"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-[640px] max-md:w-[500px] max-sm:w-[300px] items-center justify-center gap-[10px] rounded border px-[15px] py-[8px] text-[#25D366] transition-colors border-[#25D366] max-sm:mt-[20px]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z"/>
                </svg>
                <span className="freeSans text-[16px] leading-[24px]">
                  WhatsApp · +374 96 400073
                </span>
              </a>

              <div className="flex flex-col justify-center items-center md:items-start gap-[20px] md:flex-row ">
                <div className="flex flex-col gap-[10px]">
                  <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                     {t('placeholders.0')}
                  </label>
                  <Field
                    name="fullName"
                    type="text"
                    className="border border-[#0E0449] h-[48px] w-[310px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px] max-sm:h-[6vh]"
                  />

                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                  {t('placeholders.1')}
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    className="border border-[#0E0449] h-[48px] w-[310px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px] max-sm:h-[6vh]"
                  />

                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center gap-[20px] md:flex-row items-center md:items-start">
                <div className="flex flex-col gap-[10px]">
                  <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                  {t('placeholders.2')}
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="border border-[#0E0449] h-[48px] w-[310px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px] max-sm:h-[6vh]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                  {t('placeholders.6')}
                  </label>
                  <Field
                    name="time"
                    type="text"
                    className="border border-[#0E0449] h-[48px] w-[310px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px] max-sm:h-[6vh]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                {t('placeholders.7')}
                </label>
                <Field
                    value={orderCode || ''}
                    name="product"
                    type="text"
                    className="w-[640px] max-md:w-[500px] max-sm:w-[300px] h-[48px] border border-[#0E0449] rounded outline-none pl-[15px] max-sm:h-[6vh]"
                  />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                {t('placeholders.8')}
                </label>
                <Field
                  name="description"
                  as="textarea"
                  className="w-[640px] max-md:w-[500px] max-sm:w-[300px] h-[140px] border border-[#0E0449] rounded outline-none pl-[15px] max-sm:h-[14vh]"
                />
              </div>

              {/* <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} // твой публичный ключ
                onChange={(token) => setCaptchaToken(token)}
              /> */}

              <button
                type="submit"
                className="text-white bg-[#5939F5] py-[7px] px-[15px] rounded"
              >
                {t('placeholders.9')}
              </button>
              <span className='absolute right-3 top-3 cursor-pointer' onClick={() => dispatch(toggleConsultingModal({isview:false, orderCode: ''}))}><XIcon width={16} height={16} color="#3A3A3A"/></span>
            </Form>
          )}
        </Formik>

    </div>
  )
}

export default ConsultingModal