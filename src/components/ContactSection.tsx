import React, { useState } from 'react';
import { audioEngine } from './AudioEngine';
import { Send, CheckCircle, Mail } from 'lucide-react';
import { AETHER_CONTACT_EMAIL } from '../constants/assets';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    interest: 'Research & Exploration',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audioEngine.playShutter();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      audioEngine.playClick();
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative z-40 w-full py-12 sm:py-36 bg-[#f6f5f0] text-[#111215] border-t border-black/8"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-11">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.2em] text-[#f2a044] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2a044]" />
              <span>CONTACT · 08</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111215] leading-[1.05]">
              Let's Look<br />Closer.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#555760] leading-relaxed font-normal">
              Interested in AETHER-01, its technology, or its potential applications? Connect with our optics laboratory and technical team.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${AETHER_CONTACT_EMAIL}`}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-black/8 text-[#111215] font-mono text-xs hover:border-[#f2a044] hover:text-[#f2a044] shadow-sm transition-all"
              >
                <Mail className="w-4 h-4 text-[#f2a044]" />
                <span>{AETHER_CONTACT_EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean White Studio Form Card */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl border border-black/8 bg-white shadow-xl shadow-black/5">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono tracking-wider text-[#7a7c85] uppercase">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Dr. Jordan Taylor"
                      className="w-full h-12 px-4 rounded-xl bg-[#fbfaf7] border border-black/10 focus:border-[#f2a044] text-sm text-[#111215] placeholder-[#9e9ea6] focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono tracking-wider text-[#7a7c85] uppercase">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jtaylor@institution.edu"
                      className="w-full h-12 px-4 rounded-xl bg-[#fbfaf7] border border-black/10 focus:border-[#f2a044] text-sm text-[#111215] placeholder-[#9e9ea6] focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Organisation */}
                  <div className="space-y-1.5">
                    <label htmlFor="organisation" className="block text-xs font-mono tracking-wider text-[#7a7c85] uppercase">
                      Organisation (Optional)
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      placeholder="Optics Laboratory / Clinic"
                      className="w-full h-12 px-4 rounded-xl bg-[#fbfaf7] border border-black/10 focus:border-[#f2a044] text-sm text-[#111215] placeholder-[#9e9ea6] focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Area of Interest */}
                  <div className="space-y-1.5">
                    <label htmlFor="interest" className="block text-xs font-mono tracking-wider text-[#7a7c85] uppercase">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl bg-[#fbfaf7] border border-black/10 focus:border-[#f2a044] text-sm text-[#111215] focus:outline-none focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="Research & Exploration">Research & Exploration</option>
                      <option value="Clinical Applications">Clinical Applications</option>
                      <option value="Professional Workflows">Professional Workflows</option>
                      <option value="Optical Technology">Optical Technology</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono tracking-wider text-[#7a7c85] uppercase">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your research focus, institutional requirements, or technical inquiry..."
                    className="w-full p-4 rounded-xl bg-[#fbfaf7] border border-black/10 focus:border-[#f2a044] text-sm text-[#111215] placeholder-[#9e9ea6] focus:outline-none focus:bg-white transition-colors resize-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs font-mono text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                    {errorMsg}
                  </p>
                )}

                {/* Button: Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 rounded-full bg-[#f2a044] hover:bg-[#e38f30] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#f2a044]/30 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span>{submitting ? 'Connecting...' : 'Get in Touch'}</span>
                  <Send className="w-4 h-4 text-white" />
                </button>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#f2a044]/15 flex items-center justify-center text-[#f2a044] mb-2">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#111215]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#555760] max-w-md leading-relaxed">
                  Thank you, {formData.name}. We will follow up directly at {formData.email}.
                </p>
                <button
                  onClick={() => {
                    audioEngine.playClick();
                    setSubmitted(false);
                    setFormData({ name: '', email: '', organisation: '', interest: 'Research & Exploration', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#f6f5f0] border border-black/10 text-xs font-mono text-[#111215] hover:bg-white transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
