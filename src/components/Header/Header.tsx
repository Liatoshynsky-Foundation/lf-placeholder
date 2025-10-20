import type { Lang } from "~/types/lang";
import "./Header.css";
import Typography from "~/design/Typography/Typography";

export default function Header({ lang }: { lang: Lang }) {
    let msg: string;

    switch (lang) {
        case "en":
            msg = "Українською";
            break;
        case "uk":
            msg = "Іn English";
            break;
        default:
            throw new Error("Unsupported language");
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img src="/logo.png" alt="Header Logo" style={{ transform: 'translate(-24%)' }} />
            <button className="language-switch">
                <img src="/globe.svg" alt="Language Icon" />
                <Typography variant="body2" style={{ color: "var(--black)" }}>{msg}</Typography>
            </button>
        </div>
    )
}
