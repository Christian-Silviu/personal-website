import "./Home.css"
import { aboutInfo } from "../data/about"

export default function Home () {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1 className="hero-name">{aboutInfo.name}</h1>
                <p className="hero-title">{aboutInfo.title}</p>
            </div>
            <div className="image-box">
            <img src="/images/zoomed_DSC_0597.JPG" alt="Photo of myself" className="profile-photo" />
            <p>Recent picture of me at my graduation</p>
            </div>
        </div>
    )
}