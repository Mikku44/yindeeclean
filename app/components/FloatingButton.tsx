import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FloatingContact = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "Line Official",
      color: "bg-[#06C755]", // Line Brand Color
      href: "https://line.me/ti/p/@easyhom1969",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t("contact.placeholder_phone") || "Call Us",
      color: "bg-neutral-900",
      href: "tel:0615152916",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4">
      {/* Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {actions.map((action, index) => (
              <motion.a
                key={index}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center gap-3"
              >
                <span className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-neutral-100 
                text-xs font-medium text-neutral-600 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">
                  {action.label}
                </span>
                <div className={`${action.color} text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300`}>
                  {action.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-5 rounded-full shadow-2xl transition-colors duration-500  ${
          isOpen ? 'bg-white text-(--primary-color) border border-neutral-100' : 'bg-(--primary-color) text-white'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingContact;