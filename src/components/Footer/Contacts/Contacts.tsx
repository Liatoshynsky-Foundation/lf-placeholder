import "./Contacts.css"

export default function Contacts({ email, phone }: { email: string; phone: string }) {
    return (
        <div className="contact-methods">
            <div className="contact-method-container">
                Email:
                <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="contact-method-container">
                Phone:
                <a href={`tel:${phone}`}>{phone}</a>
            </div>
        </div>
    )
}
