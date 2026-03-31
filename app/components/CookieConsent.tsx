import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";

export default function CookieConsent() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    // In a real app, you might want to disable certain tracking here
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-7xl">
            <div className="glass overflow-hidden rounded-2xl border border-white/20 bg-white/80 p-6 shadow-2xl backdrop-blur-xl md:flex md:items-center md:justify-between md:gap-8">
              <div className="mb-6 md:mb-0">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {t("cookie.title")}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {t("cookie.description")}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={handleDecline}
                  className="rounded-full px-6 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 active:scale-95"
                >
                  {t("cookie.decline")}
                </button>
                <button
                  onClick={handleAccept}
                  className="rounded-full bg-(--primary-color) px-8 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#5bddee] hover:shadow-xl active:scale-95"
                >
                  {t("cookie.accept")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
