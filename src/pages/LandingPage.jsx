import LayoutUser from '../components/Layouts/LayoutUser'
import HeroImage from '../assets/img/hero-image.png'

const LandingPage = () => {
    return (
        <LayoutUser>
            <div className="grid sm:grid-cols-2 grid-cols-1 md:p-24 p-8">
                <div className='sm:order-first order-last'>
                    <div className='text-[#005F6C] text-[48px] font-semibold'>Booking Lapangan Futsal dengan <span className='text-[#FF5B24]'>Cepat</span> dan <span className='text-[#FF5B24]'>Mudah</span></div>
                    <div className='mt-8 text-[#303030] text-xl'>Kamu ga perlu repot lagi datang buat booking. Booking lapangan udah bisa dari website ini aja.</div>
                    <div className='w-1/3 mt-8'></div>
                </div>
                <img src={HeroImage} alt="Hero Image" width={720} />
            </div>
        </LayoutUser>
    )
}

export default LandingPage