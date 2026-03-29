import { Phone, Mail, MapPin, MessageCircle, } from 'lucide-react';
import { Checkbox } from '@base-ui/react/checkbox';
import { useTranslation } from "react-i18next";
import { BiPaperPlane } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useTranslation();

  // ใช้ Animation ตัวเดียวกับหน้า Home เพื่อความต่อเนื่อง (Consistency)
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const contactMethods = [
    { icon: <Phone size={20} />, label: "Phone", value: "061-515-2916", href: "tel:0615152916" },
    { icon: <MessageCircle size={20} />, label: "Line", value: "@yindeeclean", href: "https://line.me/ti/p/@yindeeclean" },
    { icon: <Mail size={20} />, label: "Email", value: "yindeeclean@gmail.com", href: "mailto:yindeeclean@gmail.com" },
    { icon: <FaFacebook size={20} />, label: "Facebook", value: "yindeeclean", href: "https://facebook.com/yindeeclean" },
  ];

  return (
    <main className="min-h-screen bg-[#FDFCFB] selection:bg-gold-200">
      <section id="hero" className="relative md:h-[450px] mb-10 flex items-center overflow-hidden">
        {/* Aesthetic Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/living2.jpg"
            className="w-full h-full object-cover opacity-40 mix-blend-multiply"
            alt=""
          />
        </div>

        <div className="container-x mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8 md:pt-0 pt-14">
            <motion.div {...fadeInUp}>
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                {t("contact.hero_subtitle") || "We're here to help"}
              </span>
              <h1 className="text-6xl md:text-8xl leading-[1.1] text-neutral-900 tracking-tight">
                {/* Using "Yindee" as the anchor and the hero_title as the characterful italic line */}
                <span className="block">{t("common.menu.contact") || "Yindee"}</span>
               
              </h1>
            </motion.div>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="max-w-md text-lg text-neutral-600 leading-relaxed font-light"
            >
              {t("home.description") || "Making your home a place to truly unwind."}
            </motion.p>
          </div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-[440px] z-10 overflow-hidden bottom-[-60px] md:left-[-80px]">
              <img
                src="maid-2.png"
                className="w-full h-auto object-cover"
                alt="Professional maid service"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Side: Information Grid */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className=" grid gap-5">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 border border-neutral-200 
                  hover:border-neutral-900 transition-all duration-500 rounded-2xl bg-white overflow-clip"
                >
                  <div className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-4">
                    {method.icon}
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">{method.label}</p>
                  <p className="text-lg font-light  text-neutral-800">{method.value}</p>
                </a>
              ))}
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="pt-12 border-t border-neutral-200">
              <div className="flex gap-6">
                <MapPin className="text-neutral-900 shrink-0" size={24} />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Office Location</h4>
                  <p className="text-lg font-light leading-relaxed text-neutral-800">
                    บริษัท อีซี่ โฮม. 1969 จำกัด (สำนักงานใหญ่)<br />
                    177/40 ถนนกัลปพฤกษ์ แขวงบางแค<br />
                    เขตบางแค กรุงเทพมหานคร 10160
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form Section */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 bg-white h-fit p-8 md:p-12 border rounded-4xl border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]"
          >
            {/* Header Text */}
            <div className="mb-10">
              <h3 className="text-2xl font-light text-neutral-900 mb-2">
                {t("contact.form_title") || "ส่งข้อความถึงเรา"}
              </h3>
              <p className="text-neutral-500 font-light text-sm">
                {t("contact.form_subtitle") || "กรอกข้อมูลด้านล่างเพื่อให้ทีมงานของเราติดต่อกลับโดยเร็วที่สุด"}
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t("contact.placeholder_name") || "Name"}
                    className="w-full bg-transparent border-b border-neutral-200 py-4 focus:border-neutral-900 outline-none transition-colors font-light"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder={t("contact.placeholder_phone") || "Phone"}
                    className="w-full bg-transparent border-b border-neutral-200 py-4 focus:border-neutral-900 outline-none transition-colors font-light"
                  />
                </div>
              </div>

              <div className="relative">
                <select className="w-full bg-transparent border-b border-neutral-200 py-4 focus:border-neutral-900 outline-none transition-colors font-light text-neutral-500 appearance-none">
                  <option value="">{t("contact.select_service") || "Select Service"}</option>
                  <option value="home">{t("menu.homeCleaning")}</option>
                  <option value="big">{t("menu.bigCleaning")}</option>
                  <option value="disinfection">{t("menu.disinfection")}</option>
                  <option value="upholstery">{t("menu.upholstery")}</option>
                  <option value="quote">{t("common.requestQuote")}</option>
                </select>
              </div>

              <div className="relative">
                <textarea
                  rows={4}
                  placeholder={t("contact.placeholder_message") || "Message"}
                  className="w-full bg-transparent border-b border-neutral-200 py-4 focus:border-neutral-900 outline-none transition-colors font-light resize-none"
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="relative flex items-center h-5">
                  <input
                    id="consent"
                    type="checkbox"
                    className="w-4 h-4 border-neutral-300 rounded accent-neutral-900 cursor-pointer"
                    required
                  />
                </div>
                <label htmlFor="consent" className="text-sm text-neutral-500 font-light leading-normal cursor-pointer">
                  {t("contact.consent_text") || "ฉันยินยอมให้เก็บรวบรวมและใช้ข้อมูลส่วนบุคคลตามนโยบายความเป็นส่วนตัว"}
                </label>
              </div>

              <button type="submit" className="group flex items-center justify-center gap-4 pt-4 btn-primary w-full text-center py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300">
                <BiPaperPlane className='text-3xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
                <span className="uppercase tracking-[0.3em] text-sm font-medium">
                  {t("contact.send_button") || "Send message"}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Google Maps - Full Width Aesthetic */}
      <section className="h-[500px] w-full bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-1000 border-t border-neutral-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.312345678!2d100.412345!3d13.691234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e296123456789%3A0x123456789abcdef!2zMTc3LzQwIOCถนันกัลปพฤกษ์!5e0!3m2!1sth!2sth!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}