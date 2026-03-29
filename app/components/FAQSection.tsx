import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FAQSection({ namespace = "faq" }) {
  const { t } = useTranslation();
  const faqs = t(`${namespace}.items`, { returnObjects: true });

  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="py-24 bg-[#FDFCFB]">
      <div className="container-x mx-auto px-6 max-w-3xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 block mb-4">
            {t(`${namespace}.subtitle`)}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">
            {t(`${namespace}.title`)}
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-sm md:text-base text-neutral-900 font-medium">
                  {item.q}
                </span>
                <ChevronDown
                  className={`transition-transform ${
                    active === i ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  active === i ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}