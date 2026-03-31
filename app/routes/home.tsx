import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";
import { APP_MENU, serviceImages, serviceKeys, steps, whyIcons } from "~/const/app";
import ArticlesCarousel from "~/components/BlogScroll";
import { memo } from "react";

// Move variants outside to prevent re-renders
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

// Memoize static list items to reduce overhead
const StepItem = memo(({ step, index, t }: any) => {
  const isFirst = index === 0;
  const isLast = index === steps.length - 1;
  return (
    <div className={`pt-12 pb-16 border-b lg:border-b-0 border-neutral-100 group hover:bg-white transition-all duration-700
      ${isFirst ? "lg:pr-10" : ""}
      ${!isFirst && !isLast ? "lg:px-10 border-r border-neutral-100" : ""}
      ${isLast ? "lg:pl-10" : ""}`}
    >
      <span className="font-mono bg-(--primary-color) text-white text-[10px] w-8 h-8 flex items-center justify-center rounded-full mb-10 tracking-widest uppercase">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h4 className="text-2xl font-light mb-6">{t(`process.${step.key}_title`)}</h4>
      <p className="text-sm leading-relaxed text-neutral-500 font-light pr-4">{t(`process.${step.key}_desc`)}</p>
    </div>
  );
});

StepItem.displayName = "StepItem";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#FDFCFB] overflow-x-hidden selection:bg-gold-200">
      <section id="hero" className="relative min-h-[90vh] pt-20 md:pt-0 flex items-center">
        {/* IMPROVEMENT: Removed lazy loading on LCP image, added fetchpriority */}
        <div className="absolute inset-0 z-0">
          <img
            src="/living.jpg"
            fetchPriority="high"
            className="w-full h-full object-cover opacity-40 mix-blend-multiply"
            alt=""
            width="1920" 
            height="1080"
          />
        </div>

        <div className="container-x mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div {...fadeInUp}>
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                {t("home.subtitle") || "Premium Service"}
              </span>
              <h1 className="text-6xl md:text-8xl leading-[1.1] text-neutral-900 tracking-tight">
                <span className="block">{t("home.welcome_line_1") || "Yindee"}</span>
                <span className="block italic font-light ml-12 text-neutral-700">
                  {t("home.welcome_line_2") || "Cleaning"}
                </span>
              </h1>
            </motion.div>

            <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="max-w-md text-lg text-neutral-600 leading-relaxed font-light">
              {t("home.description") || "Experience the art of pristine living."}
            </motion.p>

            <div className="flex gap-2">
              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <NavLink to="/booking" className="group relative px-8 py-4 bg-(--primary-color) rounded-full text-white flex items-center transition-all duration-300 hover:pr-12">
                  <span className="relative z-10 uppercase tracking-widest text-sm font-medium">{t("home.cta") || "Book Consultation"}</span>
                  <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                </NavLink>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <NavLink to="/services" className="group relative px-8 py-4 text-zinc-800 flex items-center transition-all duration-300 pr-10 hover:pr-12">
                  <span className="relative z-10 uppercase tracking-widest text-sm font-medium">{t("home.cta2") || "Services"}</span>
                  <span className="absolute right-4"><FaArrowRightLong /></span>
                </NavLink>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }} 
            className="lg:col-span-5 relative"
          >
            <div className="relative w-[360px] md:w-[640px] z-10 overflow-hidden lg:bottom-[-60px] lg:left-[-180px]">
              {/* IMPROVEMENT: Added explicit width/height to prevent Layout Shift */}
              <img
                src="maid.webp"
                fetchPriority="high"
                width="640"
                height="800"
                className="w-full h-auto object-cover"
                alt="Professional maid service"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="container-x mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div {...fadeInUp} viewport={{ once: true }}>
                <span className="inline-block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">{t("why_us.subtitle")}</span>
                <h2 className="text-5xl md:text-6xl leading-[1.1] text-neutral-900 tracking-tight mb-8">
                  <span className="block">{t("why_us.title_line_1")}</span>
                  <span className="block italic font-light text-neutral-600 ml-8">{t("why_us.title_line_2")}</span>
                </h2>
                <p className="max-w-sm text-lg text-neutral-500 font-light">{t("why_us.description")}</p>
              </motion.div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[1, 2, 3, 4].map((i, index) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: 0.1 }} viewport={{ once: true }} className="group space-y-4 rounded-xl bg-white shadow-xl p-6">
                  <img loading="lazy" width="48" height="48" className="size-12 hue-rotate-[345deg]" src={whyIcons[index]} alt="icon" />
                  <h4 className="text-xl font-medium text-neutral-900 pt-2">{t(`why_us.points.point${i}_title`)}</h4>
                  <p className="text-sm text-neutral-500 font-light">{t(`why_us.points.point${i}_desc`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <div className="container-x mt-10">
        <motion.div {...fadeInUp} viewport={{ once: true }} className="mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">{t("process.protocol_label")}</span>
          <h2 className="text-4xl md:text-5xl text-neutral-900 tracking-tight">
            <span className="block">{t("process.title_line_1")}</span>
            <span className="block italic font-light text-neutral-600">{t("process.title_line_2")}</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-neutral-200">
          {steps.map((step, index) => <StepItem key={step.key} step={step} index={index} t={t} />)}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container-x mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl text-zinc-900 tracking-tight mb-4">{t('service.title')}</h2>
              <p className="text-zinc-500 font-light text-lg">{t('service.description')}</p>
            </div>
            <div className="hidden md:block h-px flex-grow bg-zinc-100 mx-10 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceKeys.map((key, index) => (
              <NavLink to={APP_MENU[0]?.subMenu?.[index]?.href || "/services"} key={key} className="group relative h-[500px] w-full overflow-hidden rounded-2xl bg-zinc-100">
                <img
                  loading="lazy"
                  width="400"
                  height="500"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                  src={serviceImages[index]}
                  alt={t(`service.categories.${key}`)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity group-hover:opacity-90"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.2em] px-3 py-1 rounded-full mb-4">
                      {t(`service.categories.${key}`)}
                    </span>
                    <p className="text-white/90 text-sm font-light line-clamp-2">{t(`service.details.${key}`)}</p>
                    <div className="mt-4 w-0 group-hover:w-12 h-[1px] bg-(--primary-color) transition-all duration-500"></div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <ArticlesCarousel />
    </main>
  );
}