import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import FAQSection from "~/components/FAQSection";
import { GallerySlider } from "~/components/GallerySlider";

export default function HomeCleaning() {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const services = [
    { key: "general" },
    { key: "deep" },
    { key: "kitchen" },
    { key: "bathroom" }
  ];

  return (
    <main className="min-h-screen bg-[#FDFCFB]">

      {/* HERO */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/maid.jpg" className="w-full h-full object-cover scale-x-[-1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-(--primary-color)/10 mix-blend-multiply" />
        </div>

        <div className="container-x  w-full mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-white">

            <motion.div {...fadeInUp}>
              <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
                {t("home_clean.subtitle")}
              </span>

              <h1 className="text-4xl md:text-6xl leading-[1.05]">
                <span className="block">{t("home_clean.title_line_1")}</span>
                <span className="block italic font-light ml-6 text-white/70">
                  {t("home_clean.title_line_2")}
                </span>
              </h1>
            </motion.div>

            <motion.p {...fadeInUp} className="max-w-md text-sm text-white/70">
              {t("home_clean.description")}
            </motion.p>

            {/* Tags */}
            <div className="flex gap-2 text-xs text-white/60">
              {t("home_clean.tags", { returnObjects: true })?.map((tag, i) => (
                <span key={i}>
                  {tag} {i < 2 && "•"}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3 pt-2">
              <button className="px-6 py-2.5 bg-(--primary-color) rounded-full text-white text-sm">
                {t("home_clean.cta_primary")}
              </button>

              <NavLink
                to="/services"
                className="px-5 py-2.5 rounded-full border border-white/30 text-white/80 text-sm flex items-center gap-2"
              >
                {t("home_clean.cta_secondary")}
                <FaArrowRightLong className="text-xs" />
              </NavLink>
            </div>

            <p className="text-xs text-white/50">{t("home_clean.trust")}</p>
          </div>


        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="container-x mx-auto px-6">

          <div className="flex justify-between mb-20">
            <div>
              <span className="text-[10px] tracking-[0.4em] text-neutral-400">
                {t("home_clean.features_subtitle")}
              </span>
              <h2 className="text-5xl font-light">
                {t("home_clean.features_title")}
              </h2>
            </div>

            <p className="max-w-xs text-neutral-500 border-l pl-8">
              {t("home_clean.features_main_desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-zinc-200">
                <div className="bg-(--primary-color) w-10 h-10 rounded-full text-white flex items-center justify-center mb-6">
                  {idx + 1}
                </div>

                <h3 className="text-xl mb-3">
                  {t(`home_clean.features.${item.key}`)}
                </h3>

                <p className="text-sm text-neutral-500">
                  {t(`home_clean.features.${item.key}_desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
        <div className="container-x mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <img
            src="/kitchen_cleaing.jpg"
            className="rounded-3xl "
          />

          <div>
            <span className="text-xs tracking-[0.3em] text-neutral-400">
              {t("home_clean.process.label")}
            </span>

            <h2 className="text-5xl font-light mt-4">
              {t("home_clean.process.title")}
            </h2>

            <p className="mt-6 text-neutral-500">
              {t("home_clean.process.desc")}
            </p>

            <button className="flex items-center gap-3 mt-8">
              {t("home_clean.cta")}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* result */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container-x mx-auto px-6">

          {/* Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[10px] tracking-[0.4em] text-neutral-400">
                {t("home_clean.gallery_label")}
              </span>
              <h2 className="text-4xl font-light mt-3">
                {t("home_clean.gallery_title")}
              </h2>
            </div>
          </div>

          {/* Scroll Wrapper */}
          <GallerySlider />

        </div>
      </section>

      {/* BENEFITS - PREMIUM UI */}
      <section className="py-28 bg-[#F7F6F4]">
        <div className="container-x mx-auto px-6">

          {/* Header */}
          <div className="max-w-2xl mb-20">
            <span className="text-[10px] tracking-[0.4em] text-neutral-400">
              {t("home_clean.benefits_label")}
            </span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 leading-tight">
              {t("home_clean.benefits_title")}
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

            {["safe", "pro", "save_cost", "save_time", "flexible", "custom"].map((key, i) => (
              <div key={i} className="group">

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-(--primary-color)/10 text-(--primary-color) flex items-center justify-center mb-6 transition group-hover:scale-105">
                  <span className="text-sm font-medium">{i + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium mb-3 tracking-tight">
                  {t(`home_clean.benefits.${key}.title`)}
                </h3>

                {/* Divider */}
                <div className="w-8 h-[1px] bg-neutral-300 mb-4 group-hover:bg-(--primary-color) transition" />

                {/* Description */}
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {t(`home_clean.benefits.${key}.desc`)}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-(--primary-color) text-white">
        <div className="container-x mx-auto px-6 text-center">

          <h2 className="text-4xl font-light mb-6">
            {t("home_clean.final_cta_title")}
          </h2>

          <p className="text-white/80 max-w-xl mx-auto mb-8 text-sm">
            {t("home_clean.final_cta_desc")}
          </p>

          <button className="px-8 py-3 bg-white text-black rounded-full text-sm">
            {t("home_clean.cta_primary")}
          </button>

        </div>
      </section>

      {/* FAQ */}
      <FAQSection namespace="home_faq" />

    </main>
  );
}