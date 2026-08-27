import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="section-subtitle">06 // Initiate Contact</span>
        <h2 className="section-title">
          Let's Work <span className="gold-gradient-text">Together</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-3 text-base">
          Have a project in mind, a job opportunity, or just want to connect? Reach out anytime.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#E5A93B] to-transparent mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Main Grid: Direct Info + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          <div className="glass-panel p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Contact Information</h3>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
              I am currently open to full-time roles, contract work, and technical advisory projects.
            </p>

            <div className="space-y-4 mb-8">
              
              {/* Email Item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-[#E5A93B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">Email Address</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{personal.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Item */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-[#00D2FF]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-gray-400">Phone Number</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{personal.phone}</div>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-600 dark:text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-gray-400">Location</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{personal.location}</div>
                </div>
              </div>

            </div>

            {/* Status Indicator */}
            <div className="p-4 rounded-xl glass-panel-gold flex items-center gap-3">
              <span className="status-dot"></span>
              <span className="text-xs font-semibold text-amber-700 dark:text-[#E5A93B] tracking-wide uppercase">
                {personal.status}
              </span>
            </div>

          </div>

        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 relative">
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Direct Message</h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                <p className="text-slate-600 dark:text-gray-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out. I have received your message and will respond as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-1 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#E5A93B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-1 font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#E5A93B] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-1 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#E5A93B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-1 font-semibold">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    required
                    placeholder="Tell me about your project or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#E5A93B] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center !py-3.5 !text-base"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
