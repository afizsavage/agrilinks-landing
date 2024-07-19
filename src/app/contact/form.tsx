"use client"

import { ChangeEvent, FormEvent, useState } from 'react'
import emailjs from 'emailjs-com';


import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

interface FormData {
    name: string;
    email: string;
    company: string;
    phone: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}
interface TextInputProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    autoComplete?: string;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    autoComplete
}) => {
    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                placeholder=" "
                className={`peer block w-full border bg-transparent 
                px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent 
                transition focus:border-neutral-950 focus:outline-none
                 focus:ring-neutral-950/5 group-first:rounded-t-2xl 
                 group-last:rounded-b-2xl 'border-neutral-300`
                }
            />
            <label
                htmlFor={name}
                className={`pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left
                 text-base/6 text-neutral-500 transition-all duration-200 
                 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold 
                 peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 
                 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold
                  peer-[:not(:placeholder-shown)]:text-neutral-950 ${error && 'text-red-500'}`
                }
            >
                {error ? error : label}
            </label>
        </div>
    )
}

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = (): Errors => {
        const newErrors: Errors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const emailParams = {
                from_name: formData.name,
                from_email: formData.email,
                company: formData.company,
                phone: formData.phone,
                message: formData.message,
            };

            await emailjs.send(
                process.env.SERVICE_ID || '',
                process.env.TEMPLATE_ID || ' ',
                emailParams,
                process.env.EMAILJS_USER_ID || ''
            );
            setIsSubmitted(true);
        } catch (error) {
            setSubmitError('Failed to send the message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
            <FadeIn className="lg:order-last">
                <form onSubmit={handleSubmit}>
                    <h2 className="font-display text-base font-semibold text-green-900">
                        Contact Us
                    </h2>
                    <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                        <TextInput
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                            autoComplete="name"
                        />
                        <TextInput
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            autoComplete="email"
                        />
                        <TextInput
                            label="Company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            autoComplete="organization"
                        />
                        <TextInput
                            label="Phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phone}
                            autoComplete="tel"
                        />
                        <TextInput
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            error={errors.message}
                        />
                    </div>
                    <Button type="submit" className="mt-10" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Contact us'}
                    </Button>
                    {isSubmitted && <p className="text-green-500 mt-4">Form submitted successfully!</p>}
                    {submitError && <p className="text-red-500 mt-4">{submitError}</p>}
                </form>
            </FadeIn>

        </>
    )

}

export default ContactForm