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

  // new state to show selected resume filename
  const [resumeName, setResumeName] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle file selection UI only (form will submit file via multipart)
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setResumeName(file ? file.name : null);
    // do not store the file in form state (we submit via native form POST)
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
      <DialogContent className="sm:max-w-3xl bg-white/5 border border-blue-400/20 backdrop-blur-xl p-6 rounded-lg shadow-md text-white">
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
          encType="multipart/form-data"
          className="grid gap-4 py-4"
        >
          {/* FormSubmit.co spam protection: hidden honeypot field */}
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
              className="col-span-3 bg-white/10 text-white border-gray-600 focus:ring-blue-500 min-h-[200px]"
              placeholder="Tell us about yourself and why you're a good fit for this role."
              required
            />
          </div>

          {/* Resume / CV upload (optional) */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="resume" className="text-right">
              Attach CV:
            </Label>
            <div className="col-span-3">
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileChange}
                className="w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black"
              />
              {resumeName && <p className="mt-2 text-xs text-gray-300">Selected: {resumeName}</p>}
            </div>
          </div>

          <DialogFooter className="mt-4">
            <button
              type="submit"
              className="w-full px-8 py-3 rounded-xl bg-[#1E90FF]/20 border border-[#1E90FF]/40
              text-[#1E90FF] font-semibold backdrop-blur-md
              hover:bg-[#1E90FF]/30
              transition-colors duration-200 ease-in-out
              focus:outline-none"
            >
              Submit Application
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
