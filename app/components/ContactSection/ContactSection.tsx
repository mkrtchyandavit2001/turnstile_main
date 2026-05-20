'use client'

import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { useTranslations, useLocale } from 'next-intl'
import { toast } from 'sonner'
import Image from 'next/image'
import ReCAPTCHA from 'react-google-recaptcha'

interface IContactForm {
  fullName: string
  phone: string
  email: string
  time: string
  product: string
  description: string
}

const ContactSection = () => {
  const t = useTranslations('ContactSection')
  const locale = useLocale()

  const mapBackendFieldToFormik = (field: string): string => {
    const map: Record<string, string> = {
      full_name: 'fullName',
      phone_number: 'phone',
      email: 'email',
      product_code: 'product',
    };

    return map[field] ?? field;
  };

  const [captchaToken, setCaptchaToken] = useState<string>('')

  const initialValues: IContactForm = {
    fullName: '',
    phone: '',
    email: '',
    time: '',
    product: '',
    description: '',
  }

   const validationSchema = Yup.object({
      fullName: Yup.string(),
      phone: Yup.string(),
      email: Yup.string().email(),
      time: Yup.string(),
      product: Yup.string(),
      description: Yup.string(),
    });

  const localeMap: Record<string, string> = {
    am: 'hy',
    ru: 'ru',
    en: 'en',
  }

  const handleSubmit = async (
    values: IContactForm,
    { resetForm, setErrors }: FormikHelpers<IContactForm>
  ) => {
    if (!captchaToken) {
      toast.error(t('captcha.required'))
      return
    }

    try {
      const payload = {
        full_name: values.fullName,
        phone_number: values.phone,
        email: values.email,
        preferred_time: values.time,
        product_code: values.product,
        message: values.description,
        captcha: captchaToken,
      }

      const apiLocale = localeMap[locale] ?? 'hy'

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
      })

      const data = await res.json()

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

    } catch (error) {
      console.error('Submit error:', error);
      toast.error(t('message.error'));
    }
  }

  return (
    <section className="py-[20px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
          {/* ================= FORM ================= */}
          <div className="border border-[#E5E7EB] bg-white p-[40px] rounded-xl shadow-lg">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="flex flex-col gap-[20px]">
                <div className="grid gap-[20px]">
                  <div className="flex flex-col gap-[10px]">
                    <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                      {t('placeholders.0')}
                    </label>
                    <Field
                      name="fullName"
                      type="text"
                      className="border border-[#0E0449] w-[100%] h-[48px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px] max-sm:h-[6vh]"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                      {t('placeholders.2')}
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="border border-[#0E0449] w-[100%] h-[48px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px] max-sm:h-[6vh]"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                      {t('placeholders.1')}
                    </label>
                    <Field
                      name="phone"
                      type="text"
                      className="border border-[#0E0449] w-[100%] h-[48px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px] max-sm:h-[6vh]"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label className="freeSans font-normal text-[16px] leading-[24px] font_color">
                      {t('placeholders.7')}
                    </label>
                    <Field
                      name="product"
                      type="text"
                      className="border border-[#0E0449] w-[100%] h-[48px] max-md:w-[500px] max-sm:w-[300px] outline-none rounded pl-[15px] max-sm:h-[6vh]"
                    />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <label className="flex freeSans font-normal text-[16px] leading-[24px] font_color">
                      {t('placeholders.8')}
                    </label>
                    <Field
                      name="description"
                      as="textarea"
                      className="w-[100%] max-md:w-[500px] max-sm:w-[300px] h-[140px] border border-[#0E0449] rounded outline-none pl-[15px] max-sm:h-[14vh]"
                    />
                  </div>

                  {/* ===== ReCAPTCHA ===== */}
                  <div>
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      onChange={(token) => setCaptchaToken(token)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#5939F5] text-white py-2 rounded"
                  >
                    {t('placeholders.9')}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div className="flex flex-col gap-[20px]">
            {/* Contact Information */}
            <div className="bg-white p-[24px] rounded-xl shadow border border-[#E5E7EB]">
              <h3 className="font-semibold text-[18px] mb-[20px]">
                {t('contactInfo.title')}
              </h3>

              <div className="flex flex-col gap-[14px]">
                {/* Address */}
                <div className="flex items-start gap-[12px] bg-[#F7F8FC] p-[12px] rounded-lg">
                  <div className="w-[36px] h-[36px] rounded-md bg-[#EEF2FF] flex items-center justify-center">
                    <Image
                      src="/icons/location.png"
                      alt="address"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium">{t('contactInfo.address_label')}</p>
                    <p className="text-[14px] text-gray-600">{t('contactInfo.address')}</p>
                  </div>
                </div>

                {/* Phone 1 */}
                <div>
                  <a
                    className="flex items-start gap-[12px] bg-[#F7F8FC] p-[12px] rounded-lg"
                    href={`tel:+37496101017`}
                  >
                    <div className="w-[36px] h-[36px] rounded-md bg-[#EEF2FF] flex items-center justify-center">
                      <Image src="/icons/phone.png" alt="phone" width={18} height={18} />
                    </div>
                    <div>
                      <p className="text-[14px] font-medium">{t('contactInfo.phone_label')}</p>
                      <p className="text-[14px] text-gray-600">+374 96-10-10-17</p>
                    </div>
                  </a>
                </div>

                {/* Phone 2 */}
                <div>
                  <a
                    className="flex items-start gap-[12px] bg-[#F7F8FC] p-[12px] rounded-lg"
                    href={`tel:+37496400073`}
                  >
                    <div className="w-[36px] h-[36px] rounded-md bg-[#EEF2FF] flex items-center justify-center">
                      <Image src="/icons/phone.png" alt="phone" width={18} height={18} />
                    </div>
                    <div>
                      <p className="text-[14px] font-medium">{t('contactInfo.phone_label')}</p>
                      <p className="text-[14px] text-gray-600">+374 96-40-00-73</p>
                    </div>
                  </a>
                </div>

                {/* Email */}
                <div>
                  <a
                    className="flex items-start gap-[12px] bg-[#F7F8FC] p-[12px] rounded-lg"
                    href="mailto:info@webex.am"
                  >
                    <div className="w-[36px] h-[36px] rounded-md bg-[#EEF2FF] flex items-center justify-center">
                      <Image src="/icons/mail.png" alt="email" width={18} height={18} />
                    </div>
                    <div>
                      <p className="text-[14px] font-medium">{t('contactInfo.email_label')}</p>
                      <p className="text-[14px] text-gray-600">info@webex.am</p>
                    </div>
                  </a>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-[12px] bg-[#F7F8FC] p-[12px] rounded-lg">
                  <div className="w-[36px] h-[36px] rounded-md bg-[#EEF2FF] flex items-center justify-center">
                    <Image src="/icons/clock.png" alt="hours" width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium">{t('contactInfo.working_hours_label')}</p>
                    <p className="text-[14px] text-gray-600">{t('contactInfo.working_hours')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow border border-[#E5E7EB] h-[260px] flex items-center justify-center text-gray-400">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.5985696312355!2d44.4945502!3d40.195746299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd7adb56dc45%3A0x2dba28308da8ae68!2sIT%20Park!5e0!3m2!1sru!2sam!4v1771404191922!5m2!1sru!2sam"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
