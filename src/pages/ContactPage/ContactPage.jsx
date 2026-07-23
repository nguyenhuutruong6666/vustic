import Hero from '../../components/compage/Hero/Hero';
import ContactForm from './ContactForm/ContactForm';
import ContactBanner from '../../components/compage/ContactBanner/ContactBanner';

function ContactPage() {
  return (
    <div className="contact-page">
      <Hero title="LIÊN HỆ" />
      <ContactForm />
      <ContactBanner />
    </div>
  );
}

export default ContactPage;
