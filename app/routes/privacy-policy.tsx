import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const sections = t("privacy.sections", { returnObjects: true }) as Array<{ title: string; content: string }>;

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm md:p-12"
        >
          <h1 className="playfair mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("privacy.title")}
          </h1>
          <p className="mb-8 text-sm font-medium text-gray-400">
            {t("privacy.lastUpdated")}
          </p>
          
          <p className="mb-12 text-lg leading-relaxed text-gray-600">
            {t("privacy.intro")}
          </p>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-gray-600">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
