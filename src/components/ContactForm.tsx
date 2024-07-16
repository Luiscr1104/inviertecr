'use client'
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { buttonVariants } from './ui/button';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Manejo del cambio en los inputs
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Manejo del envío del formulario
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:p-6">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Contáctanos</h1>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Rellena el formulario para iniciar una conversación</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col p-6 space-y-4">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            required
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            required
                        ></textarea>
                        <div>
                            <Link
                                href="/"
                                className={buttonVariants({
                                    size: "lg",
                                    className: "sm:flex items-center gap-1",
                                })}
                            >
                                Enviar
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
