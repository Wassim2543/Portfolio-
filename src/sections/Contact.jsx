import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  
  // Formspree hook - replace "your-endpoint" with your Formspree form ID
  const [state, handleSubmit] = useForm("xeeqloka"); 

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await handleSubmit(e);
      showAlertMessage("success", "Message sent successfully! I'll reply soon.");
      setIsLoading(false);
    } catch (error) {
      console.error("Form error:", error);
      showAlertMessage("danger", "Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  if (state.succeeded) {
    return (
      <section id="contact"  className="relative flex items-center c-space section-spacing">
        <Particles
          className="absolute inset-0 -z-50"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh
        />
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary text-center">
          <h2 className="text-heading mb-5">Thank You!</h2>
          <p className="font-normal text-neutral-400 mb-8">
            Your message has been sent. I'll get back to you within 24 hours.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 text-lg rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Looking to build a website, improve your platform, or launch an educational project? I'm here to help.
          </p>
        </div>
        
        <form className="w-full" onSubmit={onSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your full name"
              required
              disabled={state.submitting}
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="your@email.com"
              required
              disabled={state.submitting}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Tell me about your project..."
              required
              disabled={state.submitting}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
