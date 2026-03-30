import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarCheck, FaCheck, FaShieldHalved, FaArrowRight } from "react-icons/fa6";

const stepVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.3 }
};

export default function Booking() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    size: "",
    date: "",
    note: ""
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  // Helper to check if the current step is valid
  const isStepValid = () => {
    if (step === 1) return formData.service !== "";
    if (step === 2) return formData.size !== "";
    if (step === 3) return formData.date !== "";
    return false;
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-24 font-light">
      <div className=" mx-auto px-6 max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span className="text-[10px] uppercase tracking-[0.4em] text-(--primary-color) font-bold mb-4 block">
            {t("booking.subtitle")}
          </motion.span>
          <h1 className="text-4xl text-neutral-900">{t("booking.title")}</h1>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-12 relative max-w-xs mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-100 -z-10" />
          {[1, 2, 3].map((num) => (
            <div 
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xs transition-all duration-500 border ${
                step >= num ? "bg-(--primary-color) border-(--primary-color) text-white" : "bg-white border-zinc-200 text-neutral-400"
              }`}
            >
              {step > num ? <FaCheck /> : num}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Service */}
            {step === 1 && (
              <motion.div key="step1" {...stepVariants} className="space-y-8">
                <label className="text-sm font-medium text-neutral-800 block">{t("booking.step1_label")}</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["standard", "deep", "move_in"].map((service) => (
                    <button
                      key={service}
                      onClick={() => setFormData({ ...formData, service })}
                      className={`p-6 rounded-2xl border text-left transition-all ${
                        formData.service === service 
                          ? "border-(--primary-color) bg-(--primary-color)/5 ring-1 ring-(--primary-color)" 
                          : "border-zinc-100 bg-white hover:border-zinc-200"
                      }`}
                    >
                      <p className="font-medium text-sm">{t(`services.${service}.title`)}</p>
                      <p className="text-xs text-neutral-400 mt-2">{t(`services.${service}.short_desc`)}</p>
                    </button>
                  ))}
                </div>
                <div className="pt-4">
                  <button 
                    disabled={!isStepValid()}
                    onClick={nextStep}
                    className="w-full md:w-auto px-12 py-4 bg-neutral-900 text-white rounded-xl text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                  >
                    {t("booking.next")} <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Size */}
            {step === 2 && (
              <motion.div key="step2" {...stepVariants} className="space-y-8">
                <label className="text-sm font-medium text-neutral-800 block">{t("booking.step2_label")}</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["studio", "1br", "2br", "3br+"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setFormData({ ...formData, size })}
                      className={`py-4 rounded-xl border text-sm transition-all ${
                        formData.size === size 
                          ? "border-(--primary-color) bg-(--primary-color)/5 ring-1 ring-(--primary-color) text-(--primary-color)" 
                          : "border-zinc-100 text-neutral-500 hover:border-zinc-200"
                      }`}
                    >
                      {size.toUpperCase()}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <button onClick={prevStep} className="text-sm text-neutral-400 hover:text-neutral-600 underline underline-offset-4">{t("booking.back")}</button>
                  <button 
                    disabled={!isStepValid()}
                    onClick={nextStep}
                    className="px-12 py-4 bg-neutral-900 text-white rounded-xl text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800 transition-all flex items-center gap-2"
                  >
                    {t("booking.next")} <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Final Details */}
            {step === 3 && (
              <motion.div key="step3" {...stepVariants} className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-neutral-400 mb-3 block">{t("booking.date_label")}</label>
                    <input 
                      type="date" 
                      className="w-full p-4 rounded-xl border border-zinc-100 focus:outline-none focus:border-(--primary-color)/50"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-neutral-400 mb-3 block">{t("booking.note_label")}</label>
                    <textarea 
                      rows={4}
                      placeholder={t("booking.note_placeholder")}
                      className="w-full p-4 rounded-xl border border-zinc-100 focus:outline-none focus:border-(--primary-color)/50"
                      onChange={(e) => setFormData({...formData, note: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button onClick={prevStep} className="flex-1 py-4 border border-zinc-100 rounded-xl text-sm text-neutral-500">{t("booking.back")}</button>
                  <button 
                    disabled={!isStepValid()}
                    className="flex-1 py-4 bg-neutral-900 text-white rounded-xl text-sm font-medium shadow-lg hover:bg-neutral-800 transition-all"
                  >
                    {t("booking.confirm")}
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-neutral-400">
           <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest"><FaShieldHalved className="text-(--primary-color)" /> {t("booking.trust.secure")}</div>
           <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest"><FaCalendarCheck className="text-(--primary-color)" /> {t("booking.trust.instant")}</div>
        </div>
      </div>
    </main>
  );
}