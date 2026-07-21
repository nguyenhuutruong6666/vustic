import ContactBanner from './ContactBanner/ContactBanner';
import ContactHero from './ContactHero/ContactHero';
import ContactForm from './ContactForm/ContactForm';

function ContactPage() {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactForm />
      <ContactBanner />
    </div>
  );
}

export default ContactPage;
