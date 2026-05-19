import { motion } from "framer-motion";
import {
FaPhone,
FaEnvelope,
FaBehance,
} from "react-icons/fa";

function App() {

const uiProjects = [
{
title:"TaxSee - Taxi Booking App",
image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/7a5d72182866439.653f6e3f4f13d.png",
link:"https://www.behance.net/gallery/182866439/TaxSee-A-taxi-booking-app"
},

{
title:"TASKMASTER - Todo WebApp",
image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/03c932200969465.6666eafb7a1f4.png",
link:"https://www.behance.net/gallery/200969465/TASKMASTER-TODO-WEBAPP"
}

]

const brandingProjects = [

{
title:"VALOURE - Luxury Fashion Brand",
image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/59d19b248299955.67614f7474e0c.png",
link:"https://www.behance.net/gallery/248299955/VALOURE-A-luxury-fashion-brand"
},

{
title:"ChopRush - Fast Food Restaurant",
image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e347f0248418219.6764cdb7bfe5e.png",
link:"https://www.behance.net/gallery/248418219/ChopRush-A-fast-food-restaurant"
}

]

return (
<>
<section className="hero">

<div className="container hero-grid">

<motion.div
initial={{opacity:0,x:-40}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
>

<p className="green">HELLO I'M</p>

<h1>
OYELEYE <br/>
<span className="purple">
OYEBISI AARON
</span>
</h1>

<p className="text">
UI/UX Designer, Brand Identity Designer,
No-Code Developer and AI enthusiast passionate
about building premium digital experiences
that combine creativity, functionality,
and visual storytelling.
</p>

<br/>

<div style={{
display:"flex",
gap:"20px",
flexWrap:"wrap"
}}>

<a href="#work" className="btn">
View My Work
</a>

<a
href="mailto:oyeleyeoyebisi7@gmail.com"
className="btn-outline"
>
Hire Me
</a>

</div>

</motion.div>

<motion.div
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<img
src="/profile.png"
style={{
borderRadius:"40px",
border:"1px solid #222"
}}
/>

</motion.div>

</div>

</section>

<section>

<div className="container">

<p className="green">
ABOUT ME
</p>

<h2 className="section-title">
Crafting Impactful
<span className="purple">
 Digital Experiences
</span>
</h2>

<p className="text">
I'm a multidisciplinary creative focused on UI/UX design,
branding, no-code development, and AI-powered solutions.

I help startups, creators, and businesses transform
ideas into visually stunning and functional products.

With experience in web design, brand identity,
and digital storytelling, I create experiences
that are modern, premium, and user-focused.
</p>

</div>

</section>

<section id="work">

<div className="container">

<h2 className="section-title">
Selected
<span className="purple">
 Projects
</span>
</h2>

<br/><br/>

<h3 style={{
fontSize:"34px",
marginBottom:"30px"
}}>
UI Designs
</h3>

<div className="grid"
style={{
gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))"
}}
>

{uiProjects.map((project,index)=>(

<a
href={project.link}
target="_blank"
className="card"
key={index}
>

<img src={project.image}/>

<div className="card-content">

<h3 style={{
fontSize:"24px",
marginBottom:"10px"
}}>
{project.title}
</h3>

<p className="text">
View full project on Behance
</p>

</div>

</a>

))}

</div>

<br/><br/><br/><br/>

<h3 style={{
fontSize:"34px",
marginBottom:"30px"
}}>
Branding
</h3>

<div className="grid"
style={{
gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))"
}}
>

{brandingProjects.map((project,index)=>(

<a
href={project.link}
target="_blank"
className="card"
key={index}
>

<img src={project.image}/>

<div className="card-content">

<h3 style={{
fontSize:"24px",
marginBottom:"10px"
}}>
{project.title}
</h3>

<p className="text">
View full project on Behance
</p>

</div>

</a>

))}

</div>

</div>

</section>

<section>

<div className="container">

<p className="green">
SERVICES
</p>

<h2 className="section-title">
What I Offer
</h2>

<div className="skills">

<div className="skill">UI/UX Design</div>
<div className="skill">Brand Identity</div>
<div className="skill">No-Code Development</div>
<div className="skill">AI Workflow Design</div>
<div className="skill">Mobile App Design</div>
<div className="skill">Landing Pages</div>
<div className="skill">Figma Design</div>
<div className="skill">Creative Direction</div>

</div>

</div>

</section>

<section>

<div className="container">

<p className="green">
CONTACT
</p>

<h2 className="section-title">
Let's Build Something Amazing
</h2>

<div className="contact-grid">

<div className="contact-card">

<FaPhone
size={40}
color="#B6FF00"
/>

<br/>

<p className="text">
Phone
</p>

<br/>

<h3>
+234 806 070 5103
</h3>

</div>

<div className="contact-card">

<FaEnvelope
size={40}
color="#c200ff"
/>

<br/>

<p className="text">
Email
</p>

<br/>

<h3>
oyeleyeoyebisi7@gmail.com
</h3>

</div>

<div className="contact-card">

<FaBehance
size={40}
color="#B6FF00"
/>

<br/>

<p className="text">
Behance
</p>

<br/>

<h3>
Portfolio Showcase
</h3>

</div>

</div>

</div>

</section>

<footer>

<div className="container">

© 2026 OYRA — Designed and Developed
by Oyeleye Oyebisi Aaron

</div>

</footer>

</>
)

}

export default App
