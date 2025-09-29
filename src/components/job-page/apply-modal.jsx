'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/textarea';

export default function ApplyModal({ jobTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application Submitted for:', jobTitle, 'with data:', formData);
    // In a real application, you would send this data to an API
    // Note: Do not use alert() as it's not a great user experience.
    // You could replace this with a toast or a message in the UI.
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#1E90FF]/20 border border-[#1E90FF]/40 text-[#1E90FF] backdrop-blur-md hover:bg-[#1E90FF]/30 font-bold py-2 px-6 rounded-full transition-colors duration-200 shadow-lg hover:shadow-blue-500/50">
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white/5 border border-blue-400/20 backdrop-blur-xl p-6 rounded-lg shadow-md text-white">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill in your details and submit your application.
          </DialogDescription>
        </DialogHeader>
        {/*
          Updated to use FormSubmit.io for direct email submissions.
          The form action is set to FormSubmit's endpoint with your email.
          No JS handler is needed; FormSubmit will send the data to your email.
        */}
        <form
          action="https://formsubmit.co/7729c3753c7bd8b1cd9a0c57959eede7"
          method="POST"
          className="grid gap-4 py-4"
        >
          {/* FormSubmit.io spam protection: hidden honeypot field */}
          <input
            type="text"
            name="_formsubmit_honeypot"
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />
          {/* Custom confirmation message after submit */}
          <input
            type="hidden"
            name="_confirmation"
            value="Thank you for applying! Your application has been received."
          />
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name:
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="col-span-3 bg-white/10 text-white border-gray-600 focus:ring-blue-500"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email:
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="col-span-3 bg-white/10 text-white border-gray-600 focus:ring-blue-500"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="coverLetter" className="text-left self-start pt-2">
              Cover Letter:
            </Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="col-span-3 bg-white/10 text-white border-gray-600 focus:ring-blue-500 min-h-[150px]"
              placeholder="Tell us about yourself and why you're a good fit for this role."
              required
            />
          </div>
          <DialogFooter className="mt-4">
            <Button
              type="submit"
              className="w-full px-8 py-3 rounded-xl bg-[#1E90FF]/20 border border-[#1E90FF]/40
              text-[#1E90FF] font-semibold backdrop-blur-md
              hover:bg-[#1E90FF]/30
              transition-all duration-300 ease-in-out
              hover:scale-101
              focus:outline-none"
            >
              Submit Application
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
