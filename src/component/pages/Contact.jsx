import {FaClock, FaFacebook, FaLink,   FaMapMarked, FaPhone, FaTwitter,  FaYoutube} from 'react-icons/fa'

function Contact() {
  return (
    <div className="footer text-slate-200 min-h-screen flex items-center text-xl ">
    <div className="container flex justify-between md:items-center p-5 items-start flex-col sm:flex-row gap-10 lg:gap-0">
        <div className="contact text-slate-200">
            <div className="address text-slate-200 flex gap-3 items-center">
                <FaMapMarked className='text-secondary'/>
                <p>Egypt, Giza</p>
            </div>
            <div className="time flex gap-3 items-center">
              <FaClock className='text-secondary'/>
                <p>Business Hours: From 8:00 To 4:00</p>
            </div>
            <div className="phone flex gap-3 items-center">
                <FaPhone className='text-secondary'/>
                <p>+201117405320 <br/>+201227098962</p>
            </div>
            <div className="email flex gap-3 items-center">
                <FaLink className='text-secondary'/>
                <p>Tare2sa3eed@gmail.com</p>
            </div>
        </div>
        <div className="text  self-end  ">
                <div className="icon ">
                    <a href="https://www.facebook.com/Tar3ek/" rel='noreferrer' className="facebook text-xl" target="_blank"><FaFacebook/></a>
                    <a href="https://twitter.com/Tare2_1995" rel='noreferrer' className="twitter text-xl" target="_blank"><FaTwitter/></a>
                    <a href="https://www.youtube.com/channel/UCEcrax-NDWdLgw5nC7Q7lFA" rel='noreferrer' className="youtube text-xl" target="_blank"><FaYoutube/></a>
                </div>
        </div>
    </div>
</div>
  )
}

export default Contact