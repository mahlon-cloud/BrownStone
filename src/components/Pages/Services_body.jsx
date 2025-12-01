"use client";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      img: "/house.png",
      content:
        "We design and build high-quality homes and housing developments tailored to the needs of individuals, families, and investors. Our focus is on functional design, modern finishes, and environmental sustainability.",
    },
    {
      title: "Master-Planned Communities",
      img: "/comm.jpg",
      content:
        "Brownstone specializes in building holistic neighborhoods with integrated features such as nurseries, schools, community hospitals, clinics, police posts, retail zones, and green parks.",
    },
    {
      title: "Sustainable & Smart Infrastructure",
      img: "/ev.png",
      content:
        "We are committed to sustainable development through solar power integration, EV charging stations, water management systems, and agri-tech zones to promote urban farming.",
    },
    {
      title: "Real Estate Investment Development",
      img: "/investment.png",
      content:
        "We work with investors to develop build-to-sell or build-to-rent projects. Our team handles planning, approvals, development oversight, and sales & marketing support.",
    },
    {
      title: "Project Management & Consultancy",
      img: "/pro.jpg",
      content:
        "We provide end-to-end project management services, including planning, budgeting, construction supervision, and upgrading existing developments.",
    },
  ];

  return (
    <section id="services" className="w-full py-20 bg-[#dedede]" style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="w-full max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center" style={{ color: "#012e44" }}>
          Our Services
        </h2>

        {/* small orange line under heading */}
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-[#EF641C] rounded mt-2" />
        </div>

        {/* descriptive text below the line */}
        <p className="text-center text-lg text-[#012e44] max-w-3xl mx-auto mt-6">
          At Brownstone Construction Firm, we offer a comprehensive range of real estate development and construction services:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all duration-300 border"
              style={{ borderColor: "#83838544" }}
            >
              <div className="relative h-52 w-full">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#012e44" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#012e44] leading-relaxed">{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
