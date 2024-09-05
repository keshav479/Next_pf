import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/LinkedIn.png";

const Contact = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8" id="contact">

      <div className="flex justify-center items-center">
        <ul className="space-y-4">
            <li className="flex items-center">
                <Image src={phone} alt="phone" className="h-[110px] w-auto mr-6"/>
                <p className="text-xl">+91 798 3021247</p>
            </li>
            <li className="flex items-center">
                <Image src={mail} alt="phone" className="h-[110px] w-auto mr-6"/>
                <p className="text-xl">lavaniakeshav@gmail.com</p>
            </li>
            <li className="flex items-center">
                <Image src={linkedin} alt="phone" className="h-[110px] w-auto mr-6"/>
                <p className="text-xl"><a href="https://www.linkedin.com/in/keshav-lavania-942a33267/">LinkedIn</a></p>
            </li>
        </ul>
      </div>
      <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">Let's Connect</h2>
        <p>Send me a message and lets schedule a call!</p>
        <form className="space-y-4 mt-4">
            <div className="grid md:grid-cols-2 gap-4">
                <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="First Name"/>
                <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Last Name"/>
                <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Email"/>
                <input className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Phone"/>
            </div>
            <textarea className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Your Message"/>
            <button className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl">Send Message</button>
        </form>
      </div>

    </div>
  )
}

export default Contact
//52:35 continue