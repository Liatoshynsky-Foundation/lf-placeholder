import Typography from "~/design/Typography/Typography"
import "./SocialMedia.css"

export default function SocialMedia() {
    return (
        <div>
            <Typography variant="body2">
                Us in social media:
            </Typography>
            <div className="social-media-container">
                <a href="https://www.instagram.com/liatoshinsky"><img src="/instagram.svg" alt="Instagram" /></a>
                <a href="https://www.facebook.com/liatoshinsky"><img src="/facebook.svg" alt="Facebook" /></a>
                <a href="https://www.linkedin.com/in/liatoshinsky"><img src="/youtube.svg" alt="YouTube" /></a>
            </div>
        </div>
    )
}
