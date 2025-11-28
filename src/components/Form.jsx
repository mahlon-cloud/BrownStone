'use client';

import React from 'react';

export default function ContactPage() {
  // --- FORM HANDLER ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-[#00486B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>

      {/* Your existing banner remains unchanged */}

      <main className="container mx-auto px-6 lg:px-20 py-16">

        {/* Contact Form */}
        <section className="max-w-6xl mx-auto mt-12 bg-white/95 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6" style={{ color: '#411600' }}>
            Send Us a Message
          </h3>

          {/* --- FORM STARTS HERE --- */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C] md:col-span-2"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C] md:col-span-2"
            />

            <button
              type="submit"
              className="bg-[#EF641C] text-white font-semibold py-3 px-6 rounded-full md:col-span-2 hover:bg-[#d85a18] transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </section>

      </main>
    </div>
  );
}
