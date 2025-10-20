import Contacts from "./Contacts/Contacts";
import "./Footer.css"
import SocialMedia from "./SocialMedia/SocialMedia";

export default function Footer() {
    const email = "liatoshinky@gmail.com";
    const phone = "067 963 8366";

    return (
        <div>
            <div className="contacts-container">
                <Contacts email={email} phone={phone} />
                <SocialMedia />
            </div>
            <img src="/liatoshinsky-footer.png" alt="Footer Logo" style={{ width: '100%' }} />
        </div>
    )
}
