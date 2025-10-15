"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Nama harus diisi";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Nama minimal 2 karakter";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Format email tidak valid";
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject harus diisi";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject minimal 5 karakter";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-sky-500">
      <h2 className="text-2xl font-anta text-gray-800 mb-6 text-center">
        Kirim Pesan
      </h2>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.
          </div>
        </div>
      )}

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

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors text-gray-900 ${errors.email ? "border-red-500" : "border-gray-500"
              }`}
            placeholder="Masukkan alamat email Anda"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors text-gray-900 ${errors.subject ? "border-red-500" : "border-gray-500"
              }`}
            placeholder="Masukkan subject pesan"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
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
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
            }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Mengirim...
            </div>
          ) : (
            "Kirim Pesan"
          )}
        </button>
      </form>
    </div>
  );
}
