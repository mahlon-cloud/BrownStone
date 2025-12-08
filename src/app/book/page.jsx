'use client';

import React from 'react';

export default function BookNow() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      nationality: form.nationality.value,
      organization: form.organization.value,
      interest: form.interest.value,
      note: form.note.value,
    };

    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Booking request sent successfully!");
      form.reset();
    } else {
      alert("Failed to submit booking request.");
    }
  };

  return (
    <div className="min-h-screen bg-[url('/form2.jpg')] bg-cover font-sans">

      <main className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 lg:py-45">

        <section className="max-w-3xl sm:max-w-4xl mx-auto mt-12 bg-white/95 rounded-xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#411600] text-center sm:text-left">
            Book Now — Let’s Connect With You
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]"
            />

            <input
              type="text"
              name="nationality"
              placeholder="Nationality"
              required
              className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]"
            />

            <input
              type="text"
              name="organization"
              placeholder="Organization"
              required
              className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]"
            />

            <select
              name="interest"
              required
              className="w-full p-3 border rounded text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#EF641C]"
            >
              <option value="">Select Area of Interest</option>
              <option value="Townhouse">Townhouse</option>
            </select>

            <textarea
              name="note"
              placeholder="Additional Notes (optional)"
              rows={5}
              className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C] md:col-span-2"
            />

            <button
              type="submit"
              className="w-full md:col-span-2 bg-[#EF641C] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#d85a18] transition pointer-cursor"
            >
              Submit Booking Request
            </button>

          </form>
        </section>
      </main>

    </div>
  );
}
