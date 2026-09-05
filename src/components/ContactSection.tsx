import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Clock, Copy, ExternalLink, Loader2, Mail, MapPin, MessageSquare, Send, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    budget: '₹9,999 – ₹24,999 (Landing Page / Quick MVP)',
    customBudget: '9999',
    scope: initialSubject || '',
    message: '',
  });

  const [isCustomBudget, setIsCustomBudget] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<'api' | 'manual'>('api');

  const STUDIO_EMAIL = 'beyondlimits.webb@gmail.com';

  const getEffectiveBudget = () => {
    if (isCustomBudget) {
      return `Custom Budget: ₹${formData.customBudget || '9,999'}+`;
    }
    return formData.budget;
  };

  const formatEmailBody = () => {
    return `Hi Beyond Limits Studio Team,

Name: ${formData.name}
Email: ${formData.email}
Company / Venture: ${formData.organization || 'N/A'}
Target Budget Range: ${getEffectiveBudget()}
Primary Service: ${formData.scope || 'Digital Product / Web App'}

Project Details:
${formData.message}
`;
  };

  const getGmailWebUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.scope || 'New Project'} - ${formData.name}`);
    const body = encodeURIComponent(formatEmailBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${STUDIO_EMAIL}&su=${subject}&body=${body}`;
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Beyond Limits Studio! My name is ${formData.name || 'a client'}. I'm inquiring about: ${formData.scope || 'a new web project'}. Target Budget: ${getEffectiveBudget()}. Message: ${formData.message}`
    );
    return `https://wa.me/?text=${text}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    try {
      const serviceId = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_EMAILJS_SERVICE_ID;
      const templateId = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_EMAILJS_PUBLIC_KEY;

      // Ensure budget field in form data reflects effective budget
      const formEl = event.currentTarget;
      const budgetInput = formEl.elements.namedItem('budget') as HTMLInputElement | HTMLSelectElement;
      if (budgetInput) {
        budgetInput.value = getEffectiveBudget();
      }

      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, formEl, publicKey);
        setDeliveryMode('api');
      } else {
        const dataForm = new FormData(formEl);
        dataForm.set("budget", getEffectiveBudget());
        dataForm.append("access_key", "7ddcf165-e7f9-498a-8611-461680614337");
        dataForm.append("subject", `⚡ New Project Inquiry from ${formData.name} (${formData.organization || 'Individual'}) - Budget: ${getEffectiveBudget()}`);
        dataForm.append("to_email", STUDIO_EMAIL);

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: dataForm
        });

        const data = await response.json();
        if (data.success) {
          setDeliveryMode('api');
        } else {
          setDeliveryMode('manual');
        }
      }
    } catch {
      setDeliveryMode('manual');
    } finally {
      setIsSending(false);
      setSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDIO_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.section
      id="contact-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 border-t border-neutral-800/80 bg-neutral-950 relative overflow-hidden transform-gpu"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct contact info & studio locations */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Direct Contact
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-neutral-100 tracking-tight leading-tight">
                Let's build your next digital product
              </h2>
              <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
                Have a project in mind, need a fast MVP, or want to revamp your website? Reach out directly to discuss timelines, scope, and pricing starting from ₹9,999.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-4 border-t border-neutral-800/80">
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-800/80 bg-neutral-900/40">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">Direct Studio Inbox</div>
                    <a
                      href={`mailto:${STUDIO_EMAIL}`}
                      className="text-sm font-medium text-neutral-200 hover:text-emerald-400 transition-colors"
                    >
                      {STUDIO_EMAIL}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 text-xs font-mono flex items-center gap-1.5 transition-all duration-150 cursor-pointer active:scale-90 select-none"
                  title="Copy email to clipboard"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex items-center gap-3 px-3.5 py-3 rounded-xl border border-neutral-800/80 bg-neutral-900/40">
                <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">Response Time</div>
                  <span className="text-sm text-neutral-300 font-mono">
                    Typically within 2 to 6 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Studio Coordinates */}
            <div className="pt-6 border-t border-neutral-800/80">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Studio Availability</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-neutral-400">
                <div className="p-3.5 rounded-xl border border-neutral-800/60 bg-neutral-900/30">
                  <div className="text-neutral-200 font-semibold mb-1">Remote-First Studio</div>
                  <div>Direct Founder Communication</div>
                  <div className="text-emerald-400 text-[10px] mt-1 font-semibold">● Active & Taking Projects</div>
                </div>

                <div className="p-3.5 rounded-xl border border-neutral-800/60 bg-neutral-900/30">
                  <div className="text-neutral-200 font-semibold mb-1">Worldwide Sync</div>
                  <div>Slack, WhatsApp & Google Meet</div>
                  <div className="text-neutral-400 text-[10px] mt-1">Flexible across timezones</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl velvet-card p-8 sm:p-10 shadow-2xl transform-gpu will-change-transform"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-neutral-100">
                    Project Brief & Consultation
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill in your details below. Submitting will send the brief directly to <span className="text-emerald-400 font-mono">{STUDIO_EMAIL}</span>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Elena Rostova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="elena@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Company / Venture
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="e.g. Acme Innovations"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Target Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={isCustomBudget ? 'custom' : formData.budget}
                      onChange={(e) => {
                        if (e.target.value === 'custom') {
                          setIsCustomBudget(true);
                        } else {
                          setIsCustomBudget(false);
                          setFormData({ ...formData, budget: e.target.value });
                        }
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-sky-500 transition-colors cursor-pointer"
                    >
                      <option value="₹9,999 – ₹24,999 (Landing Page / Quick MVP)">₹9,999 – ₹24,999 (Landing Page / Quick MVP)</option>
                      <option value="₹25,000 – ₹49,999 (Full Web App / Product Sprint)">₹25,000 – ₹49,999 (Full Web App / Product Sprint)</option>
                      <option value="₹50,000 – ₹99,999 (Complete Platform & Brand)">₹50,000 – ₹99,999 (Complete Platform & Brand)</option>
                      <option value="custom">✏️ Custom Budget (Starting from ₹9,999+)</option>
                    </select>

                    {isCustomBudget && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs font-mono text-sky-400 font-bold">₹</span>
                        <input
                          type="number"
                          min="9999"
                          step="500"
                          placeholder="Enter amount (min 9999)"
                          value={formData.customBudget}
                          onChange={(e) => setFormData({ ...formData, customBudget: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-sky-500/50 text-neutral-100 text-xs focus:outline-none focus:border-sky-400"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Primary Service Focus
                  </label>
                  <input
                    type="text"
                    name="scope"
                    placeholder="e.g. 0-to-1 Web App, Restaurant Platform, SaaS Dashboard"
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Project Overview & Goals *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Describe what you want to build, any inspirations, desired timeline, or features..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 text-xs placeholder:text-neutral-600 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-xl bg-neutral-100 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-white disabled:opacity-60 transition-all duration-150 flex items-center justify-center gap-2 shadow-xl active:scale-[0.97] cursor-pointer select-none transform-gpu"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Message Directly</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-neutral-400 pt-1">
                    <span>Target Budget Included in Dispatch:</span>
                    <span className="text-sky-400 font-bold">{getEffectiveBudget()}</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-neutral-100">
                    {deliveryMode === 'api' ? 'Brief Dispatched' : 'Inquiry Formatted'}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your project brief with Target Budget <span className="text-sky-400 font-mono font-bold">{getEffectiveBudget()}</span> has been submitted. We will reach back out to you at <span className="text-emerald-400 font-mono font-medium">{formData.email}</span>.
                  </p>
                </div>

                {/* Direct quick action buttons with haptic feedback */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                  <a
                    href={getGmailWebUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 px-5 py-3 rounded-xl bg-emerald-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer no-underline active:scale-95 transform-gpu select-none shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Gmail</span>
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-200 font-medium text-xs hover:border-emerald-500 hover:text-white transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer no-underline active:scale-95 transform-gpu select-none"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        budget: '₹9,999 – ₹24,999 (Landing Page / Quick MVP)',
                        customBudget: '9999',
                        scope: '',
                        message: '',
                      });
                      setIsCustomBudget(false);
                    }}
                    className="px-5 py-2 rounded-lg border border-neutral-800 text-xs font-mono text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all duration-150 cursor-pointer active:scale-95 select-none"
                  >
                    ← Edit or Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
