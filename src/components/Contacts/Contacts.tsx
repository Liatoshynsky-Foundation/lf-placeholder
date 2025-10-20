import ContactMethods from "./ContactMethods/ContactMethods";
import SocialMedia from "./SocialMedia/SocialMedia";
import "./Contacts.css"

export default function Contacts() {
    const email = "liatoshinky@gmail.com";
    const phone = "067 963 8366";

    return (
        <div className="contacts-container">
            <ContactMethods email={email} phone={phone} />
            <SocialMedia />
        </div>
    )
}
