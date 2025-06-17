'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  // FaLinkedin,
  // FaGithub,
} from 'react-icons/fa';
import { Send } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message should be longer'),
});

type FormData = z.infer<typeof schema>;

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSending(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      toast.success('Message sent successfully!');
      reset();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-6 sm:px-16 py-24 bg-background text-foreground relative"
    >
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          className:
            'mt-20 text-center text-base bg-white dark:bg-neutral-900 text-black dark:text-white shadow-lg rounded-lg px-4 py-2',
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold mb-6">
            Let’s <span className="text-cyan-500">Talk</span>
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                {...register('name')}
                placeholder="Your Name"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
              />
              {errors.name && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register('email')}
                placeholder="Your Email"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register('message')}
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
              />
              {errors.message && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="h-[48px] w-[150px] relative">
              {!isSending ? (
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute inset-0 flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
                >
                  <Send size={18} />
                  Send
                </motion.button>
              ) : (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-cyan-500 text-white rounded-lg font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Sending...
                </motion.div>
              )}
            </div>
          </form>

          {/* Social Icons */}
          <div className="mt-8 flex gap-4 text-cyan-500 text-xl">
            <a href="https://wa.me/+916207039191" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-cyan-600 transition text-2xl" />
            </a>
            <a href="https://youtube.com/@parkour_by_animesh?si=ZTEpZ5oYgpz1AS70" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-cyan-600 transition text-2xl" />
            </a>
            <a href="https://www.instagram.com/active_animesh?utm_source=qr&igsh=bHE0aW5lemZzMGw0" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-cyan-600 transition text-2xl" />
            </a>
            <a href="https://www.facebook.com/animesh.prakash.16" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-cyan-600 transition text-2xl" />
            </a>
            {/* <a href="https://linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-cyan-600 transition" />
            </a>
            <a href="https://github.com/your_profile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-cyan-600 transition" />
            </a> */}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 h-[400px] rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.356137883125!2d85.1067803037594!3d25.5936480416968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed581270368427%3A0xe526d92f4bacc843!2sGardanibagh%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1750116904287!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
