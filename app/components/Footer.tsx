import { useTranslation } from "react-i18next";
import { CONTACT, APP_MENU } from "~/const/app";
import { FaFacebookF, FaLine, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaLine />, href: "#", label: "Line Official" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#FDFCFB] border-t border-neutral-100 pt-20 pb-10">
      <div className="container-x mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-3">
            <img src="/logo.png" className="h-16 opacity-90" alt="Yindee Clean" />
            <div className="text-xl">{t("common.title")}</div>
            <p className="text-neutral-500 font-light leading-relaxed max-w-sm">
              {t("footer.brand_tagline")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="size-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-(--primary-color) hover:border-(--primary-color) transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-900 font-bold">Navigation</h4>
            <ul className="space-y-4">
              {APP_MENU.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-neutral-500 font-light hover:text-neutral-900 transition-colors">
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Direct from Menu) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-900 font-bold">Services</h4>
            <ul className="space-y-4">
              {/* ดึงจาก SubMenu ของ Services มาโชว์ตรงๆ */}
              {APP_MENU.find(m => m.subMenu)?.subMenu?.map((sub, i) => (
                <li key={i}>
                  <a href={sub.href} className="text-neutral-500 font-light hover:text-neutral-900 transition-colors italic">
                    {t(sub.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-900 font-bold">Contact Us</h4>
            <div className="space-y-4 text-neutral-500 font-light">
              {/* <p className="leading-relaxed">
                {t("footer.address", "Phuket & Krabi, Thailand")}
              </p> */}
              <div className="flex flex-col gap-2">
                <a href={`tel:${CONTACT.phone}`} className="text-2xl text-neutral-900 font-medium tracking-tight hover:text-(--primary-color) transition-colors">
                  (+66) {CONTACT.phone}
                </a>
                <p className="text-sm">Email: contact@yindeeclean.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-neutral-400 uppercase tracking-widest">
            © {currentYear} Yindee Clean. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[11px] text-neutral-400 uppercase tracking-widest">
            <a href="/privacy-policy" className="hover:text-neutral-900 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-neutral-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}