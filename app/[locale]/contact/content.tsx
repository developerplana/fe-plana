'use client';
import Link from 'next/link';
import '../generalplana.css';
import '../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Social from '../components/Social';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      // 1. Save to Laravel API
      const saveRes = await fetch(`${apiUrl}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

    //   const saveResult = await saveRes.json();
      if (!saveRes.ok) throw new Error("Failed to save contact");

      // 2. Send Email via internal API
      const emailRes = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const emailResult = await emailRes.json();
      if (!emailResult.success) throw new Error("Failed to send email");

      setStatus("Contact saved and email sent successfully!");
      setForm({ name: "", email: "", whatsapp: "", subject: "", message: "" });

    } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("Unexpected error", error);
        }
        setStatus("Something went wrong.");
      }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <Social />
      <main>
        <div className="section headpage px-4 px-xl-0">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <h1 className='text-uppercase display-6 fw-bold'>
                  SAY HI, DON’T BE SHY.<br />
                  DROP US A LINE AND MAKE SOMETHING HAPPEN.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="section px-4 px-xl-0">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className='row'>
                  <div className='col-12 mb-4'>
                    <p className='h5 fw-bold text-uppercase mb-0'>E-mail</p>
                    <Link href={'mailto:ambi@plana.vision'}><p>ambi@plana.vision</p></Link>
                  </div>
                  <div className='col-12 mb-4'>
                    <p className='h5 fw-bold text-uppercase mb-0'>Call</p>
                    <Link href={'tel:+622139719799'}><p>+6221-39719799</p></Link>
                  </div>
                  <div className='col-12 mb-4'>
                    <p className='h5 fw-bold text-uppercase mb-0'>Office</p>
                    <p>
                      PT Gajah Gendut Makmur<br />Jl. Lebak bulus III No. 88 - Unit C<br />Cilandak Barat - Jakarta Selatan<br />DKI Jakarta 12440
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-8">
                <form className="form-plana" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label h5 fw-bold text-uppercase">Your Name</label>
                    <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label h5 fw-bold text-uppercase">Your E-mail</label>
                    <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label h5 fw-bold text-uppercase">Your Whatsapp</label>
                    <input type="text" name="whatsapp" className="form-control" value={form.whatsapp} onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label className="form-label h5 fw-bold text-uppercase">Subject</label>
                    <input type="text" name="subject" className="form-control" value={form.subject} onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label className="form-label h5 fw-bold text-uppercase">Message</label>
                    <textarea name="message" className="form-control" rows={4} value={form.message} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn btn-plana fw-bold rounded-pill px-4" disabled={loading}>
                    {loading ? "Sending..." : "SEND"}
                  </button>
                  {status && <div className="mt-3 alert alert-info">{status}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='section px-4 px-xl-0 py-0'>
          <iframe className='iframemap' src="https://www.google.com/maps/embed?pb=!1m18!..." height="750" loading="lazy"></iframe>
        </div>

        <div className="section py-5">
          <div className="py-5"></div>
        </div>
      </main>
    </>
  );
}
