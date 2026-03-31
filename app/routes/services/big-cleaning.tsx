import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FAQSection from "~/components/FAQSection";
import { NavLink } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BigCleaning() {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const areas = ["entire", "hidden", "kitchen", "bathroom"];

  return (
    <main className="min-h-screen bg-[#FDFCFB]">

      {/* HERO */}
      <section className="relative min-h-[520px] flex items-center">
        <div className="absolute inset-0">
          <img src="/kitchen.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-(--primary-color)/10 mix-blend-multiply" />
        </div>

        <div className="container-x mx-auto px-6 w-full relative z-10 text-white max-w-2xl">
          <motion.div {...fadeInUp}>
            <span className="text-xs tracking-[0.3em] text-white/70">
              {t("big_clean.subtitle")}
            </span>

            <h1 className="text-4xl md:text-6xl mt-4 leading-tight">
              {t("big_clean.title")}
            </h1>

            <p className="mt-6 text-white/70 text-sm">
              {t("big_clean.description")}
            </p>

            <div className="flex gap-3 pt-2">
              <NavLink to="/booking" className="px-6 py-2.5 bg-(--primary-color) rounded-full text-white text-sm">
                {t("big_clean.cta")}
              </NavLink>

              <NavLink
                to="/services"
                className="px-5 py-2.5 rounded-full border border-white/30 text-white/80 text-sm flex items-center gap-2"
              >
                {t("home_clean.cta_secondary")}
                <FaArrowRightLong className="text-xs" />
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE CLEAN */}
      <section className="py-24">
        <div className="container-x mx-auto px-6">

          <h2 className="text-4xl font-light mb-12">
            {t("big_clean.areas_title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((key, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-200">
                <div className="bg-(--primary-color) w-10 h-10 rounded-full text-white flex items-center justify-center mb-6">
                  {i + 1}
                </div>
                <h3 className="mb-2 font-medium">
                  {t(`big_clean.areas.${key}.title`)}
                </h3>
                <p className="text-sm text-neutral-500">
                  {t(`big_clean.areas.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
        <div className="container-x mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <img src="/condo_cleaning2.jpg" className="rounded-3xl" />

          <div>
            <h2 className="text-4xl font-light">
              {t("big_clean.process_title")}
            </h2>

            <p className="mt-6 text-neutral-500">
              {t("big_clean.process_desc")}
            </p>

            <NavLink to="/booking" className="flex items-center gap-2 mt-6 text-sm">
              {t("big_clean.cta")}
              <ArrowRight size={16} />
            </NavLink>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-[#F7F6F4]">
        <div className="container-x mx-auto px-6">

          <h2 className="text-4xl font-light mb-12">
            {t("big_clean.benefits_title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["deep", "move", "time"].map((key, i) => (
              <div key={i}>
                <h3 className="mb-2 font-medium">
                  {t(`big_clean.benefits.${key}.title`)}
                </h3>
                <p className="text-sm text-neutral-500">
                  {t(`big_clean.benefits.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <FAQSection namespace="big_clean_faq" />

      {/* CTA */}
      <section className="py-24 bg-(--primary-color) text-white text-center">
        <h2 className="text-4xl mb-4">
          {t("big_clean.final_cta_title")}
        </h2>
        <p className="text-white/80 mb-6">
          {t("big_clean.final_cta_desc")}
        </p>
        <NavLink to="/booking" className="px-6 py-3 bg-white text-black rounded-full">
          {t("big_clean.cta")}
        </NavLink>
      </section>

    </main>
  );
}