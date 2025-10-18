"use client";

import { useState } from "react";

interface FormData {
  name: string;
  message: string;
}

interface FormErrors {
  name?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Nama harus diisi";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Nama minimal 2 karakter";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Pesan harus diisi";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Pesan minimal 10 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const generateWhatsAppUrl = () => {
    const message = `Halo tim Arsiweb, perkenalkan saya ${formData.name}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/6289516192149?text=${encodedMessage}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Redirect to WhatsApp with the message
    window.open(generateWhatsAppUrl(), '_blank');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-sky-500">
      <h2 className="text-2xl font-anta text-gray-800 mb-6 text-center">
        Kirim Pesan
      </h2>


      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors text-gray-900 ${errors.name ? "border-red-500" : "border-gray-500"
              }`}
            placeholder="Masukkan nama lengkap Anda"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>


        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors resize-none text-gray-900 ${errors.message ? "border-red-500" : "border-gray-500"
              }`}
            placeholder="Tuliskan pesan Anda di sini..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}
