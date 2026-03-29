import { useState, useEffect } from "react";
import { APP_MENU, CONTACT } from "~/const/app";
import { useTranslation } from "react-i18next";
import { MdCleaningServices, MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) setActiveSubMenu(null);
  }, [isOpen]);

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const toggleLanguage = () => {
    const currentLang = i18n.language.split('-')[0];
    const newLang = currentLang === 'th' ? 'en' : 'th';
    i18n.changeLanguage(newLang);
  };

  const displayLang = i18n.language.split('-')[0].toUpperCase();

  return (
    <>
      <nav className="sticky top-0 w-full z-[100] bg-white/70 shadow-sm backdrop-blur-md border-b border-neutral-100">
        <div className="py-3 flex items-center justify-between container-x">
          {/* Brand */}
          <a href="/" className="relative z-[110]">
            <img src="/logo.png" className="h-12 md:h-16" alt="Yindee clean logo" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm">
          <ul className="flex items-center gap-10 h-full">
              {APP_MENU.map((item, index) => (
                <li key={index} className="relative group py-5">
                  <a 
                    href={item.href} 
                    className="font-medium text-neutral-800 hover:text-(--primary-color) transition-colors flex items-center gap-1.5"
                  >
                    {t(item.label)}
                    {item.subMenu && (
                      <ChevronDown 
                        size={14} 
                        className="opacity-40 group-hover:rotate-180 transition-transform duration-300" 
                      />
                    )}
                  </a>

                  {/* Desktop Submenu Dropdown */}
                  {item.subMenu && (
                    <div className="absolute top-full left-[-20px] pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                      <div className="bg-white/95 backdrop-blur-xl border border-neutral-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl p-3 min-w-[280px]">
                        
                        <div className="grid gap-1">
                          {item.subMenu.map((sub, subIdx) => (
                            <a
                              key={subIdx}
                              href={sub.href}
                              className="group/item flex items-center justify-between px-4 py-3 rounded-xl hover:bg-(--primary-color)/5 transition-colors"
                            >
                              <div className="flex flex-col">
                                <span className="text-neutral-900 font-medium group-hover/item:text-(--primary-color) transition-colors">
                                  {t(sub.label)}
                                </span>
                                {/* Optional: Add a small sub-text if your menu data supports it */}
                                <span className="text-[10px] text-neutral-400 font-light italic">
                                  {t("common.exploreService")}
                                </span>
                              </div>
                              <div className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-(--primary-color)">
                                →
                              </div>
                            </a>
                          ))}
                        </div>

                       
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button onClick={toggleLanguage} className="font-bold text-neutral-900 px-2">{displayLang}</button>
            <div className="btn-primary flex items-center gap-2">
              <MdCleaningServices />
              {t("common.bookNow")}
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden items-center gap-4 relative z-[130]">
             <button onClick={toggleLanguage} className="text-[10px] font-bold border border-neutral-200 px-2 py-1 rounded tracking-widest">{displayLang}</button>
             <button 
               onClick={() => setIsOpen(!isOpen)} 
               className="p-2 text-neutral-900 bg-neutral-100 rounded-full transition-transform active:scale-90"
             >
               {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Drawer & Backdrop System */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl p-8 flex flex-col justify-between"
            >
              <div className="pt-16 overflow-y-auto"> 
                <div className="space-y-6">
                  {APP_MENU.map((item, index) => {
                    const isExpanded = activeSubMenu === index;
                    
                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="border-b border-neutral-50 pb-4"
                      >
                        {item.subMenu ? (
                          /* Submenu Toggle Item */
                          <div>
                            <button
                              onClick={() => setActiveSubMenu(isExpanded ? null : index)}
                              className="w-full flex justify-between items-center text-3xl font-light text-neutral-900 tracking-tighter"
                            >
                              {t(item.label)}
                              <motion.span
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                className="text-neutral-300"
                              >
                                <ChevronDown size={24} strokeWidth={1.5} />
                              </motion.span>
                            </button>
                            
                            {/* Animated Submenu List */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-4 ml-2 flex flex-col gap-4 pl-2 py-2">
                                    {item.subMenu.map((sub, subIdx) => (
                                      <a
                                        key={subIdx}
                                        href={sub.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg text-neutral-800 font-light hover:text-(--primary-color)"
                                      >
                                        {t(sub.label)}
                                      </a>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          /* Standard Link Item */
                          <a 
                            href={item.href} 
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-light text-neutral-900 tracking-tighter block"
                          >
                            {t(item.label)}
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-6 pt-10 border-t border-neutral-100">
                {/* ... (Your existing contact and button code) */}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}