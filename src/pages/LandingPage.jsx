import LayoutUser from '../components/Layouts/LayoutUser'
import HeroImage from '../assets/img/hero-image.png'
import Datepicker from "react-tailwindcss-datepicker"
import SelectOption from '../components/atom/SelectOption'
import { AiOutlineSearch } from 'react-icons/ai'
import Button from '../components/atom/Button'

const LandingPage = () => {
    return (
        <LayoutUser>
            <div className="grid sm:grid-cols-2 grid-cols-1 md:p-24 p-8 gap-24">
                <div className='sm:order-first order-last sm:mt-0 mt-12'>
                    <div className='text-[#005F6C] sm:text-[48px] text-[36px] font-semibold'>Booking Lapangan Futsal dengan <span className='text-[#FF5B24]'>Cepat</span> dan <span className='text-[#FF5B24]'>Mudah</span></div>
                    <div className='mt-8 text-[#303030] sm:text-xl text-md leading-loose'>Kamu ga perlu repot lagi datang buat booking. Booking lapangan udah bisa dari website ini aja.</div>
                    <div className='mt-8 grid sm:grid-cols-3 grid-cols-1 gap-4 border-2 p-4'>
                        <div className='space-y-4'>
                            <div>Tanggal</div>
                            <Datepicker
                                primaryColor={'orange'}
                            />
                        </div>
                        <div className='space-y-4'>
                            <div>Lapangan</div>
                            <SelectOption
                                items={[
                                    {
                                        id: 1,
                                        name: 'Lapangan 1'
                                    }
                                ]}
                            />
                        </div>
                        <div className='flex items-end justify-end'>
                            <div className="sm:w-3/4 w-1/2">
                                <Button
                                    icon={<AiOutlineSearch />}
                                    text='Cari'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={HeroImage} alt="Hero Image" width={720} />
            </div>
        </LayoutUser>
    )
}

export default LandingPage