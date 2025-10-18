"use client";

import ContactForm from "./contactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#93928e] py-20 md:px-40 px-10">
        <div className="text-center space-y-6">

          <h1 className="md:text-5xl text-3xl font-anta text-white">
            Mari Berbicara Tentang Proyek Anda
          </h1>
          <p className="text-gray-200 md:text-lg text-base max-w-2xl mx-auto">
            Kami siap membantu mewujudkan visi digital Anda. Hubungi kami untuk konsultasi gratis dan diskusi lebih lanjut tentang kebutuhan bisnis Anda.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 md:px-40 px-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-anta text-gray-800 mb-4">
                  Informasi Kontak
                </h2>
                <p className="text-gray-600 mb-6">
                  Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda 24/7.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">arsiweb@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Telepon</h3>
                    <p className="text-gray-600">+62 812-9047-7088</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Alamat</h3>
                    <p className="text-gray-600">Gedung Aldeoz Lantai 6 Jl. Warung Jati Barat No.39, RT.010/RW.004, Kalibata, Kec.Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12740</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
