import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaHouseChimney,
  FaVirusSlash,
  FaCouch,
  FaArrowRight,
  FaCircleCheck,
  FaWandSparkles
} from "react-icons/fa6";

const serviceData = [
  {
    id: "homeCleaning",
    href: "/home-cleaning",
    icon: <FaHouseChimney />,
    color: "bg-(--primary-color)/10"
  },
  {
    id: "bigCleaning",
    href: "/big-cleaning",
    icon: <FaWandSparkles />,
    color: "bg-(--primary-color)/10"
  },
  {
    id: "disinfection",
    href: "/disinfection-cleaning",
    icon: <FaVirusSlash />,
    color: "bg-(--primary-color)/10"
  },
  {
    id: "upholstery",
    href: "/upholstery-cleaning",
    icon: <FaCouch />,
    color: "bg-(--primary-color)/10"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#FCFBFA] pt-32 pb-24">
      <div className="container-x mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-[1px] bg-(--primary-color)" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-(--primary-color) font-bold">
              {t("common.title")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight"
          >
            {t("services.mainTitle")}<br />
            <span className="font-medium">{t("services.mainTitle2")}</span>
          </motion.h1>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {serviceData.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              variants={cardVariants}
              className="group bg-white border border-zinc-100 rounded-[2.5rem] p-10 flex flex-col justify-between hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500 overflow-hidden relative"
            >
              <div>
                <div className={`w-14 h-14 ${item.color} text-(--primary-color) rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">
                  {t(`common.menu.${item.id}`)}
                </h3>
                <p className="text-neutral-500 font-light leading-relaxed mb-8 max-w-sm">
                  {t(`services.desc.${item.id}`)}
                </p>

                {/* Feature List (Mockup) */}
                <ul className="space-y-3 mb-12">
                  {[1, 2].map((i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-600 font-light">
                      <FaCircleCheck className="text-(--primary-color)/40" />
                      {t(`services.features.${item.id}_${i}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-neutral-900 group-hover:text-(--primary-color) transition-colors">
                {t("common.actions.viewDetail")}
                <FaArrowRight className="text-xs group-hover:translate-x-2 transition-transform" />
              </div>

              {/* Decorative Blur Background Element */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${item.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 bg-neutral-900 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden"
        >
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl font-light mb-2">
              {t("services.cta_section.title")}
            </h2>
            <p className="text-neutral-400 font-light">
              {t("services.cta_section.description")}
            </p>
          </div>
          <button className="relative z-10 px-10 py-4 bg-white text-neutral-900 rounded-full text-sm font-bold hover:bg-(--primary-color) hover:text-white transition-all active:scale-95 shadow-xl">
            {t("common.actions.bookNow")}
          </button>
          <div className="absolute top-0 right-0 w-64 h-64 bg-(--primary-color)/10 rounded-full blur-[80px]" />
        </motion.div>

      </div>
    </main>
  );
}