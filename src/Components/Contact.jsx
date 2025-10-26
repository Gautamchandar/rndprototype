import React, { useRef, useState, useEffect } from 'react';

const ContactForm = () => {
  const form = useRef();
  const [emailjsReady, setEmailjsReady] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window.emailjs === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      script.onload = () => {
        if (window.emailjs) {
          window.emailjs.init('PtbKZs0vVrTVkDHrg'); // This is my personal public key which is very important for contacts
          setEmailjsReady(true);
        }
      };
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    } else {
      window.emailjs.init('PtbKZs0vVrTVkDHrg');
      setEmailjsReady(true);
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!emailjsReady) {
      setStatus({ type: 'error', message: 'Email service not initialized. Please wait.' });
      return;
    }
    if (form.current.checkValidity() === false) {
      setStatus({ type: 'error', message: 'Please fill all required fields.' });
      return;
    }
    setLoading(true);
    setStatus({ type: null, message: '' });
    try {
      const result = await window.emailjs.sendForm(
        'service_e4pyi0d', //This is service key which i used from emailjs 
        'template_tvgeb1o',//This is template id key which i used from emailjs 
        form.current
      );
      console.log('SUCCESS!', result.text);// if success this message will be triggered or else to catch if failed
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      form.current.reset();
    } catch (error) {
      console.error('FAILED...', error);
      setStatus({ type: 'error', message: 'Message failed to send. Try again later.' });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: null, message: '' }), 7000);
    }
  };

  //if success this message will display after submitted
  const statusClasses =
    status.type === 'success'
      ? 'bg-green-100 border-green-400 text-green-700'
      : 'bg-red-100 border-red-400 text-red-700';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl overflow-hidden p-6 md:p-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-16 pb-2 font-serif text-center">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Send a Message
            </h2>

            {status.type && (
              <div
                className={`p-4 mb-6 border-l-4 rounded-lg ${statusClasses}`}
                role="alert"
              >
                <p className="font-bold">
                  {status.type === 'success' ? 'Success' : 'Error'}
                </p>
                <p>{status.message}</p>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {/* This is  full name label of any user */}
                  Full Name <span className="text-red-500">*</span>
                </label>
                {/* All input given below in take email.js  */}
                <input
                  id="user_name"
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="from_email"
                  required
                  placeholder="name@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Your message..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading || !emailjsReady}
                className={`w-full py-3 px-6 rounded-lg text-white font-bold transition duration-300 shadow-md ${
                  loading || !emailjsReady
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-indigo-700'
                }`}
              >
                {!emailjsReady
                  ? 'Initializing...'
                  : loading
                  ? 'Sending...'
                  : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Ministry Contact +  Map */}
          <div className="md:w-1/2 p-6 bg-indigo-50 rounded-xl shadow-inner flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2 border-indigo-200">
              Ministry Official Details
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-blue-600 flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-gray-700">Office Location</p>
                  <p className="text-lg text-blue-900 font-medium">
                    6th Floor, Electronics Niketan
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-blue-600 flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-gray-700">Official Address</p>
                  <p className="text-md text-gray-800 leading-relaxed">
                    Ministry of Electronics and Information Technology (MeitY),
                    <br />
                    6 CGO Complex, Lodhi Road,
                    <br />
                    New Delhi - 110003
                  </p>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="mt-6 border-t border-indigo-200 pt-4">
                <p className="font-semibold text-gray-700 mb-2">Location Map</p>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe
                    title="MeitY Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.156272226671!2d77.23454387519422!3d28.62589107567464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26e8144c73f%3A0x56b70b8a02e002b!2sMinistry%20of%20Electronics%20and%20Information%20Technology%20(MeitY)!5e0!3m2!1sen!2sin!4v1716372112921!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
