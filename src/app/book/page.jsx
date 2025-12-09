'use client';

import React, { useState } from 'react';

export default function BookNow() {
  const [showModal, setShowModal] = useState(false);

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

    try {
      const res = await fetch(
        "/api/book", // your API endpoint
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        setShowModal(true); // Show success modal
        form.reset();
      } else {
        alert("Failed to submit booking request.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
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
            <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]" />
            <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]" />
            <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]" />
            <input type="text" name="nationality" placeholder="Nationality" required className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]" />
            <input type="text" name="organization" placeholder="Organization" required className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C]" />

            <select name="interest" required className="w-full p-3 border rounded text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#EF641C]">
              <option value="">Select Area of Interest</option>
              <option value="Townhouse">Townhouse</option>
            </select>

            <textarea name="note" placeholder="Additional Notes (optional)" rows={5} className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EF641C] md:col-span-2" />

            <button type="submit" className="w-full md:col-span-2 bg-[#EF641C] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#d85a18] transition cursor-pointer">
              Submit Booking Request
            </button>
          </form>
        </section>
      </main>

      {/* ------------------------- */}
      {/* SUCCESS MODAL */}
      {/* ------------------------- */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl p-8 max-w-sm w-full text-center shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-[#411600] mb-4">Success!</h2>
            <p className="text-gray-700 mb-6">Your booking request has been sent successfully.</p>
            <button
              className="px-6 py-2 bg-[#EF641C] text-white rounded-full font-semibold hover:bg-[#d85a18] transition cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
