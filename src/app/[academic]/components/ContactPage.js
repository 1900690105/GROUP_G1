// pages/contact.js
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import DepartmentContacts from "./DepartmentContacts";
import SocialMediaLinks from "./SocialMediaLinks";
import OperatingHours from "./OperatingHours";
import CampusVisit from "./CampusVisit";
import ContactFormWith from "./ContactFormWith";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactFormWith />
      <ContactInfo />
      <DepartmentContacts />
      <SocialMediaLinks />
      <OperatingHours />
      <CampusVisit />
    </>
  );
};

export default ContactPage;
