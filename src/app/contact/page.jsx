'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

/**
 * ContactPage Component
 * A responsive, dual-column contact page featuring a form and contact information.
 */
function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    console.log('Submitting form:', formData);

    // --- Mock Form Submission Logic ---
    setTimeout(() => {
      setIsLoading(false);
      // Simulate success 80% of the time
      if (Math.random() < 0.8) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // In a real app, you would send the data to an API endpoint here.
      } else {
        setStatus('error');
      }
    }, 2000);
  };

  // Static contact details for the information panel
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Support',
      value: 'support@hireflow.com',
      link: 'mailto:support@hireflow.com',
    },
    { icon: Phone, label: 'Call Us', value: '+234 81 123 4567', link: 'tel:+234811234567' },
    { icon: MapPin, label: 'Office Location', value: '123 Tech Hub, Lagos, NG', link: '#' },
  ];

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', link: 'https://twitter.com/hireflow' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com/company/hireflow' },
    { icon: Github, label: 'GitHub', link: 'https://github.com/hireflow' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] to-black p-4 sm:p-12 lg:p-20">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-2">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">
            We're here to help! Send us a message, or use the contact details below.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN: Contact Information */}
          <Card className="lg:col-span-1 border-[#1E90FF]/20 bg-white/5 backdrop-blur-xl shadow-lg shadow-[#1E90FF]/40 h-fit">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Contact Details</CardTitle>
              <CardDescription className="text-sm text-gray-400">
                Reach out to our team directly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <item.icon className="h-6 w-6 text-white group-hover:text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.value}</div>
                  </div>
                </a>
              ))}

              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Connect With Us</h3>
                <div className="flex space-x-5">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.label}`}
                      className="text-white hover:text-blue-600 transition-colors"
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RIGHT COLUMN: Contact Form */}
          <Card className="lg:col-span-2 border-[#1E90FF]/20 bg-white/5 backdrop-blur-xl shadow-lg shadow-[#1E90FF]/40 text-white">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Send Us A Message</CardTitle>
              <CardDescription className="text-gray-400">
                We usually respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Message */}
                {status === 'success' && (
                  <div className="p-4 rounded-lg bg-green-900/30 text-green-300">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-900/30 text-red-300">
                    Failed to send message. Please try again or use the email link.
                  </div>
                )}

                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-xl bg-[#1E90FF]/20 border border-[#1E90FF]/40
                    text-[#1E90FF] font-semibold backdrop-blur-md
                    hover:bg-[#1E90FF]/30
                    transition-all duration-300 ease-in-out
                    focus:outline-none"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    'Submit Message'
                  )}
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
