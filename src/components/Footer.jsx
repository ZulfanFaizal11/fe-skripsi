import logo from '../assets/img/logo.png'
import { BiPhoneCall } from 'react-icons/bi'
import { BsWhatsapp, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="bg-[#F7F9FA] sm:p-12 sm:px-24 p-8">
            <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-24 gap-y-8">
                <div className='space-y-4'>
                    <img src={logo} alt="" width={100} />
                    <div className='text-[#005F6C] text-sm'>
                        Jl.Abdul Hakim, Gang Susuk 8 No. 3, Padang Bulan Selayang I, Medan Selayang, Medan, Sumatra Utara.
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='text-[#005F6C] font-semibold text-lg'>Informasi</div>
                    <div className='text-[#005F6C] text-sm'>Cara Booking</div>
                    <div className='text-[#005F6C] text-sm'>FAQ</div>
                </div>
                <div className='space-y-4'>
                    <div className='text-[#005F6C] font-semibold text-lg'>Kontak Kami</div>
                    <div className='text-[#005F6C] text-sm'>
                        Weekdays & Weekend
                        <br />
                        (09.00 - 20.00)
                    </div>
                    <div className='text-[#005F6C] text-sm flex items-center space-x-2'>
                        <BiPhoneCall />
                        <span>06182002200</span>
                    </div>
                    <div className='text-[#005F6C] text-sm flex items-center space-x-2'>
                        <BsWhatsapp />
                        <span>082267138775</span>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='text-[#005F6C] font-semibold text-lg'>Follow Kami</div>
                    <div className='text-[#005F6C] flex space-x-4 text-2xl'>
                        <BsFacebook />
                        <BsInstagram />
                        <BsTwitter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer