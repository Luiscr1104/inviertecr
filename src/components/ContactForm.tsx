'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch('https://inviertecr.com/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            console.error('Error sending form:', error);
            setMessage('Failed to send message');
        }
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
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Enviar
                        </button>
                        {message && <p className="text-center">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
