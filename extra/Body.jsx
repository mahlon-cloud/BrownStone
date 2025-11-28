'use client';

import React from 'react';
import Link from 'next/link';

export default function Body_section() {
  const services = [
    {
      id: 1,
      title: 'Strategic Management',
      img: '/mngt1.jpg',
      desc: 'Align vision, set priorities and build a practical roadmap for growth.',
      href: '/services/strategic-management',
    },
    {
      id: 2,
      title: 'Header',
      img: '/img1.jpg',
      desc: 'description description description description description description description description',
      href: '/services/operational-excellence',
    },
    {
      id: 3,
      title: 'Change Management',
      img: '/change.jpg',
      desc: 'Prepare your organization for change and maximize adoption with minimal disruption.',
      href: '/services/change-management',
    },
    {
      id: 4,
      title: 'Header',
      img: '/img1.jpg',
      desc: 'description description description description description description description description',
      href: '/services/performance-improvement',
    },
    {
      id: 5,
      title: 'Leadership Development',
      img: '/lead3.jpg',
      desc: 'Coach leaders to drive teams, make decisions and scale the business.',
      href: '/services/leadership-development',
    },
    {
      id: 6,
      title: 'Header',
      img: '/img1.jpg',
      desc: 'description description description description description description description description',
      href: '/services/risk-compliance',
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Header',
      img: '/img1.jpg',
      desc: 'description description description description description description description description',
      href: '/case-studies/retail-turnaround',
    },
    {
      id: 2,
      title: 'Digital Transformation',
      img: '/dt.jpg',
      desc: 'Delivered a phased digital roadmap, increasing customer retention by 25%.',
      href: '/case-studies/digital-transformation',
    },
    {
      id: 3,
      title: 'Header',
      img: '/img1.jpg',
      desc: 'description description description description description description description description',
      href: '/case-studies/merger-integration',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Amina Olawale — CEO, RetailCo',
      quote: 'Their pragmatic approach and hands-on support transformed our operations and margins.',
    },
    {
      id: 2,
      name: 'John K. — COO, FinServe',
      quote: 'The team helped us align leadership and processes — results were visible within quarters.',
    },
    {
      id: 3,
      name: 'Maria P. — HR Head, HealthGroup',
      quote: 'Excellent change management guidance that kept our employees engaged and productive.',
    },
  ];

  const plans = [
    {
      id: 1,
      name: 'Core',
      price: '$5,999',
      features: ['Strategy workshop', 'Operational assessment', 'Roadmap'],
    },
    {
      id: 2,
      name: 'Accelerate',
      price: '$12,499',
      features: ['All Core items', 'Implementation support', 'KPI dashboard'],
      popular: true,
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      features: ['Full transformation', 'Dedicated team', 'Ongoing coaching'],
    },
  ];

  const team = [
    { id: 1, name: 'Daniel Reed', role: 'Senior Partner', img: '/reedx.png' },
    { id: 2, name: 'Priya Sharma', role: 'Engagement Manager', img: '/priya0.png' },
    { id: 3, name: 'Liu Wei', role: 'Operations Lead', img: '/liu.png' },
    { id: 4, name: 'Sofia Martins', role: 'Change Specialist', img: '/sofia1.png' },
  ];

  return (
    <>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 inline-block">
              What We Offer
            </h2>
            <div className="mt-2 h-1 w-20 mx-auto bg-yellow-300" aria-hidden="true"></div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.id} className="rounded-lg shadow-md overflow-hidden bg-white">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{s.desc}</p>
                  <Link href={s.href} className="inline-block text-sm font-medium text-yellow-700 hover:underline">
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 inline-block">
                About Us
              </h2>
              <div className="mt-2 h-1 w-20 bg-yellow-300" aria-hidden="true"></div>

              <p className="mt-6 text-gray-700 leading-relaxed">
                We are a specialised management consulting firm focused on helping organisations
                navigate strategic change, improve operational performance and build leadership
                capability. Our team combines deep industry experience with practical methods to
                deliver measurable results and sustainable growth.
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Strategy & planning</li>
                <li>• Process optimisation</li>
                <li>• Change & transformation</li>
                <li>• Leadership & capability building</li>
              </ul>

              <div className="mt-6">
                <Link href="/about" className="inline-flex items-center px-5 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500">
                  Learn more about us
                </Link>
              </div>
            </div>

            <div>
              <img src="/team.jpg" alt="About our team" className="w-full rounded-lg shadow-md object-cover h-72" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Case Studies</h3>
            <p className="text-gray-600 mt-2">Real outcomes from recent client engagements.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((c) => (
              <div key={c.id} className="rounded-lg overflow-hidden shadow">
                <img src={c.img} alt={c.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h4 className="font-semibold text-lg">{c.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
                  <Link href={c.href} className="mt-4 inline-block text-yellow-700 hover:underline">Read case study →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold text-gray-900">What Clients Say</h3>
            <p className="text-gray-600 mt-2">Feedback from executives we partnered with.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.id} className="bg-white rounded-lg p-6 shadow">
                <p className="text-gray-700 italic">“{t.quote}”</p>
                <footer className="mt-4 text-sm font-medium text-gray-900">{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Engagement Packages</h3>
            <p className="text-gray-600 mt-2">Flexible packages to match the scale and pace of your organisation.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((p) => (
              <div key={p.id} className={`
                border rounded-lg p-6 shadow-sm flex flex-col
                ${p.popular ? 'ring-2 ring-yellow-300' : ''}
              `}>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">{p.name}</h4>
                  <div className="text-3xl font-bold text-gray-900 mt-4">{p.price}</div>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    {p.features.map((f, i) => <li key={i}>• {f}</li>)}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="w-full inline-flex justify-center px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500">
                    Get started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Our Team</h3>
            <p className="text-gray-600 mt-2">Experienced consultants and industry specialists.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {team.map((m) => (
              <div key={m.id} className="bg-white rounded-lg shadow p-6 text-center">
                <img src={m.img} alt={m.name} className="mx-auto h-40 w-40 rounded-full object-cover"/>
                <h5 className="mt-4 font-semibold">{m.name}</h5>
                <p className="text-sm text-gray-600">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Ready to transform?</h3>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Schedule a discovery call to explore how we can help your organisation achieve measurable results.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500">
              Book a call
            </Link>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
              Request proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6 lg:px-20 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center text-white font-bold mb-4">
              <img src="/logo5.png" alt="logo" className="h-8 ml-[-62]"/>
            </Link>
            <p className="text-sm text-gray-400">Practical strategies. 
                <br/>Measurable impact. <br/>Trusted partners for change.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/strategic-management" className="hover:underline">Strategy</Link></li>
              <li><Link href="/services/operational-excellence" className="hover:underline">Operations</Link></li>
              <li><Link href="/services/change-management" className="hover:underline">Change</Link></li>
              <li><Link href="/services/leadership-development" className="hover:underline">Leadership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <p className="text-sm">hello@consultingco.example</p>
            <p className="text-sm mt-1">+1 (555) 123-4567</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700" aria-label="Twitter">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 19c7 0 10-6 10-11v-.5A7 7 0 0 0 20 4a7 7 0 0 1-2 .6 3.5 3.5 0 0 0-6 3 10 10 0 0 1-7-3 3.5 3.5 0 0 0 1.1 4.7A3.3 3.3 0 0 1 3 8v.1A3.5 3.5 0 0 0 6 12a3.4 3.4 0 0 1-1 .1 3.4 3.4 0 0 1-.7-.07 3.5 3.5 0 0 0 3.3 2.5A7 7 0 0 1 3 17a10 10 0 0 0 5 1.5"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700" aria-label="LinkedIn">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.07 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7.5 8H12v2h.07c.62-1.17 2.14-2.4 4.43-2.4 4.74 0 5.61 3.12 5.61 7.18V24h-5v-7.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.98V24h-5V8z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 lg:px-20 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-500">
            <span>© {new Date().getFullYear()} Consulting Co. All rights reserved.</span>
            <span className="mt-2 md:mt-0">Privacy · Terms · Site map</span>
          </div>
        </div>
      </footer>
    </>
  );
}