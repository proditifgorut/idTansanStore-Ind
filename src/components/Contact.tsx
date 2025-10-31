import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  language: 'id' | 'en';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const content = {
    id: {
      title: 'Hubungi Kami',
      subtitle: 'Tertarik dengan produk kami? Hubungi kami sekarang!',
      name: 'Nama',
      email: 'Email',
      message: 'Pesan',
      send: 'Kirim Pesan',
      success: 'Pesan berhasil dikirim!',
      phone: 'Telepon',
      address: 'Alamat',
      addressText: 'Indonesia',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Interested in our products? Contact us now!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      phone: 'Phone',
      address: 'Address',
      addressText: 'Indonesia',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, nama saya ${formData.name}. Email: ${formData.email}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/6283119226089?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'id' ? 'Informasi Kontak' : 'Contact Information'}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{content[language].phone}</p>
                    <a
                      href="https://wa.me/6283119226089"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      +62 831-1922-6089
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a
                      href="mailto:infoproduk@unisgu.ac.id"
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      infoproduk@unisgu.ac.id
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{content[language].address}</p>
                    <p className="text-gray-600">{content[language].addressText}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">
                {language === 'id' ? 'Mengapa Memilih Kami?' : 'Why Choose Us?'}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>{language === 'id' ? 'Kualitas Export Terjamin' : 'Guaranteed Export Quality'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>{language === 'id' ? 'Harga Kompetitif' : 'Competitive Pricing'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>{language === 'id' ? 'Pengiriman Internasional' : 'International Shipping'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>{language === 'id' ? 'Mendukung UMKM Lokal' : 'Supporting Local UMKM'}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <CheckCircle className="text-green-500" size={64} />
                <p className="text-2xl font-bold text-gray-900">{content[language].success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {content[language].name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {content[language].email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {content[language].message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>{content[language].send}</span>
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
