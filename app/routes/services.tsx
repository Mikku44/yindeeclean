import { APP_MENU } from "~/const/app";

export default function Services() {
  const serviceMenu = APP_MENU.find(item => item.label === "Service");
  const services = serviceMenu?.subMenu || [];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Professional Cleaning Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of cleaning solutions to meet your needs, 
          from daily home cleaning to specialized disinfection and upholstery care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <a 
            key={index} 
            href={service.href}
            className="group relative overflow-hidden rounded-2xl aspect-[16/9] shadow-lg hover:shadow-xl transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <img 
              src={`https://images.unsplash.com/photo-${index === 0 ? '1581578731548-c64695cc6954' : index === 1 ? '1584622650111-993a426fbf0a' : index === 2 ? '1584622781564-1d9876a3e891' : '1558227691-41ea78d1f631'}?q=80&w=1470&auto=format&fit=crop`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={service.label}
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h2 className="text-white text-3xl font-bold capitalize mb-2">{service.label}</h2>
              <span className="inline-flex items-center text-white/90 font-medium group-hover:translate-x-2 transition-transform">
                Learn more 
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
