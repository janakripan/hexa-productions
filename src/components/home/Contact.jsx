import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiMessageSquare,
  FiSend,
  FiCheckCircle
} from 'react-icons/fi';
import { contactSchema } from '../../validations/contactValidation';



const Contact = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', values);
      alert('Thank you! We will contact you soon.');
      resetForm();
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{amount:0.3, once:true}}
      >
        <div className="flex flex-col lg:flex-row min-h-[700px]">
          {/* Left Side - Animated Illustration */}
          <motion.div 
            className="lg:w-1/2 bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-8 flex flex-col justify-center items-center relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{amount:0.3, once:true}}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute top-32 right-16 w-16 h-16 bg-white rounded-full"></div>
              <div className="absolute bottom-20 left-20 w-12 h-12 bg-white rounded-full"></div>
              <div className="absolute bottom-32 right-8 w-24 h-24 bg-white rounded-full"></div>
            </div>

            <motion.div 
              className="text-center z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{amount:0.3, once:true}}
            >
              {/* Animated SVG Illustration */}
              <motion.svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                className="mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                 viewport={{amount:0.3, once:true}}
              >
                {/* Phone/Contact Icon */}
                <motion.circle
                  cx="150"
                  cy="150"
                  r="120"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1, rotate: 360 }}
                  transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                   viewport={{amount:0.3, once:true}}
                />
                
                <motion.rect
                  x="110"
                  y="80"
                  width="80"
                  height="140"
                  rx="15"
                  fill="white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                   viewport={{amount:0.3, once:true}}
                />
                
                <motion.rect
                  x="120"
                  y="100"
                  width="60"
                  height="80"
                  rx="5"
                  fill="#ef4444"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                   viewport={{amount:0.3, once:true}}
                />
                
                {/* Message bubbles */}
                <motion.circle
                  cx="80"
                  cy="120"
                  r="15"
                  fill="white"
                  initial={{ scale: 0, x: 50 }}
                  whileInView={{ scale: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                   viewport={{amount:0.3, once:true}}
                />
                
                <motion.circle
                  cx="220"
                  cy="180"
                  r="12"
                  fill="white"
                  initial={{ scale: 0, x: -50 }}
                  whileInView={{ scale: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                   viewport={{amount:0.3, once:true}}
                />
              </motion.svg>

              <motion.h2 
                className="text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                 viewport={{amount:0.3, once:true}}
              >
                Let's Connect
              </motion.h2>
              
              <motion.p 
                className="text-red-100 text-lg leading-relaxed max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 }}
                 viewport={{amount:0.3, once:true}}
              >
                Ready to take your business to the next level? Get in touch with our expert team today.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="lg:w-1/2 p-8 lg:p-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{amount:0.3, once:true}}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{amount:0.3, once:true}}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h3>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>
            </motion.div>

            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: '',
                address: '',
                message: '',
                acceptEnquiry: false
              }}
              validationSchema={contactSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Field
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 ${
                          errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 ${
                          errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 ${
                          errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Address Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <div className="relative">
                      <FiMapPin className="absolute left-3 top-3 text-gray-400" />
                      <Field
                        as="textarea"
                        name="address"
                        placeholder="Address"
                        rows="2"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 resize-none ${
                          errors.address && touched.address ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 resize-none ${
                          errors.message && touched.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Checkbox */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  >
                    <div className="flex items-start">
                      <Field
                        type="checkbox"
                        name="acceptEnquiry"
                        className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label className="ml-3 text-sm text-gray-600">
                        I accept to receive enquiries and marketing communications from your team.
                      </label>
                    </div>
                    <ErrorMessage name="acceptEnquiry" component="div" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-red-600 hover:to-red-700 focus:ring-4 focus:ring-red-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        <span>Request a Callback</span>
                      </>
                    )}
                  </motion.button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;