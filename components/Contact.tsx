import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-brand-cream scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="md:w-5/12 bg-brand-dark text-white p-10 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative circle */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             
             <div>
                <h3 className="font-serif text-3xl mb-2">{t('contact.title')}</h3>
                <p className="text-white/70 mb-8 font-light">{t('contact.subtitle')}</p>
                
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <Mail className="text-brand-gold" />
                        <span>butero@butero.ee</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Phone className="text-brand-gold" />
                        <span>+372 56566404</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MapPin className="text-brand-gold" />
                        <span>Tallinn, Eesti</span>
                    </div>
                </div>
             </div>

             <div className="mt-12">
                <p className="text-sm text-white/50">{t('contact.follow_us')}</p>
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">FB</a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">IG</a>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="md:w-7/12 p-10">
            {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <Send />
                    </div>
                    <h4 className="font-serif text-2xl text-brand-dark mb-2">{t('contact.success_title')}</h4>
                    <p className="text-gray-600">{t('contact.success_desc')}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">{t('contact.form.name')}</label>
                        <input 
                            type="text" 
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-brown focus:ring-1 focus:ring-brand-brown outline-none transition-all"
                            placeholder={t('contact.form.name_ph')}
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">{t('contact.form.email')}</label>
                        <input 
                            type="email" 
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-brown focus:ring-1 focus:ring-brand-brown outline-none transition-all"
                            placeholder={t('contact.form.email_ph')}
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">{t('contact.form.message')}</label>
                        <textarea 
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-brown focus:ring-1 focus:ring-brand-brown outline-none transition-all resize-none"
                            placeholder={t('contact.form.message_ph')}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-brand-brown text-white font-bold py-4 rounded-lg hover:bg-brand-dark transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center"
                    >
                        {t('contact.form.submit')}
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