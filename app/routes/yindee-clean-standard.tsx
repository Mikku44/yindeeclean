import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaCheck, FaSprayCan, FaHandSparkles, FaClipboardList } from "react-icons/fa6";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function YindeeStandard() {
  const { t } = useTranslation();

  const CHECKLIST_ZONES = [
    {
      title: t("standard.zones.kitchen.title", "Kitchen"),
      items: [
        t("standard.zones.kitchen.1", "Degreasing stovetops & backsplashes"),
        t("standard.zones.kitchen.2", "Sanitizing sinks & countertops"),
        t("standard.zones.kitchen.3", "Wiping exterior of all appliances"),
        t("standard.zones.kitchen.4", "Cleaning inside the microwave"),
        t("standard.zones.kitchen.5", "Polishing chrome fixtures")
      ]
    },
    {
      title: t("standard.zones.bathroom.title", "Bathrooms"),
      items: [
        t("standard.zones.bathroom.1", "Scrubbing & disinfecting toilets"),
        t("standard.zones.bathroom.2", "Removing soap scum from tiles & glass"),
        t("standard.zones.bathroom.3", "Polishing mirrors & faucets"),
        t("standard.zones.bathroom.4", "Deep cleaning grout lines"),
        t("standard.zones.bathroom.5", "Sanitizing high-touch surfaces")
      ]
    },
    {
      title: t("standard.zones.living.title", "Living Areas"),
      items: [
        t("standard.zones.living.1", "Dusting all surfaces & electronics"),
        t("standard.zones.living.2", "Vacuuming under furniture cushions"),
        t("standard.zones.living.3", "Cleaning baseboards & door frames"),
        t("standard.zones.living.4", "Wiping window sills & ledges"),
        t("standard.zones.living.5", "Removing cobwebs from high corners")
      ]
    }
  ];

  return (
    <main className="bg-[#FDFCFB] min-h-screen pb-24">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 border-b border-zinc-100">
        <div className="container-x mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <span className="text-[10px] uppercase tracking-[0.4em] text-(--primary-color) font-bold mb-6 block">
              Points Checklist
            </span>
            <h1 className="text-4xl md:text-6xl font-light text-neutral-900 mb-8 max-w-3xl mx-auto leading-tight">
              {t("standard.hero_title", "We don't just clean. We restore.")}
            </h1>
            <p className="text-neutral-500 max-w-xl mx-auto font-light leading-relaxed">
              {t("standard.hero_desc", "Our 'Yindee Standard' is more than a promise. It's a rigorous protocol that ensures your home feels brand new every single time.")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── The 3 Pillars ────────────────────────────────────────────────── */}
      <section className="py-24 container-x mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <FaSprayCan />,
              title: t("standard.pillars.eco.title"),
              desc: t("standard.pillars.eco.desc")
            },
            {
              icon: <FaClipboardList />,
              title: t("standard.pillars.protocol.title"),
              desc: t("standard.pillars.protocol.desc")
            },
            {
              icon: <FaCheck />,
              title: t("standard.pillars.inspect.title"),
              desc: t("standard.pillars.inspect.desc")
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-white shadow-sm border border-zinc-100 rounded-2xl flex items-center justify-center text-(--primary-color) text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium mb-3">{item.title}</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ── The Detailed Checklist ────────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="container-x mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-neutral-900">
              {t("standard.checklist_header")}
            </h2>
            <p className="text-neutral-500 font-light max-w-2xl leading-relaxed">
              {t("standard.checklist_subheader")}
            </p>
          
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {CHECKLIST_ZONES.map((zone, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="p-8 rounded-3xl bg-[#FDFCFB] border border-zinc-100"
              >
                <h3 className="text-xl font-medium mb-8 text-neutral-800">{zone.title}</h3>
                <ul className="space-y-5">
                  {zone.items.map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start text-sm text-neutral-500 font-light">
                      <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-(--primary-color)/10 flex items-center justify-center text-(--primary-color) text-[10px]">
                        <FaCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Satisfaction ────────────────────────────────────────────── */}
      <section className="pt-32 pb-24 text-center container-x mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
          <FaHandSparkles className="text-[54px] text-(--primary-color)/80 mx-auto mb-8" />

          <h2 className="text-3xl font-light mb-6">
            {t("standard.guarantee.title")}
          </h2>

          <p className="text-neutral-500 font-light leading-relaxed mb-10">
            {t("standard.guarantee.desc")}
          </p>

          <motion.a
          href="/booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-xl"
          >
            {t("standard.guarantee.cta")}
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}