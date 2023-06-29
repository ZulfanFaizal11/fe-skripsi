import LayoutUser from "../components/Layouts/LayoutUser";
import HeroImage from "../assets/img/Icon-hero.png";
import Datepicker from "react-tailwindcss-datepicker";
import SelectOption from "../components/atom/SelectOption";
import { AiOutlineSearch, AiFillStar, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../components/atom/Button";
import AboutImage from "../assets/img/icon-lapangan.png";
import { useRef } from "react";
import AvatarProfile from "../assets/img/avatar.png";
import Steps from "../assets/img/steps.png";

const LandingPage = () => {
  const ARR_TESTI = [1, 2, 3, 4, 5];
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <LayoutUser>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:px-24 px-8 pt-24 gap-24">
        <div className="sm:order-first order-last sm:mt-0 mt-12">
          <div className="text-[#005F6C] sm:text-[48px] text-[36px] font-semibold">
            Booking Lapangan Badminton dengan <span className="text-[#FF5B24]">Cepat</span> dan <span className="text-[#FF5B24]">Mudah</span>
          </div>
          <div className="mt-8 text-[#303030] sm:text-xl text-md leading-loose">Kamu ga perlu repot lagi datang buat booking. Booking lapangan udah bisa dari website ini aja.</div>
          <div className="mt-8 grid sm:grid-cols-3 grid-cols-1 gap-4 border-2 p-4">
            <div className="space-y-4">
              <div>Tanggal</div>
              <div className="border-2 rounded-lg">
                <Datepicker primaryColor={"orange"} />
              </div>
            </div>
            <div className="space-y-4">
              <div>Lapangan</div>
              <SelectOption
                items={[
                  {
                    id: 1,
                    name: "Lapangan 1",
                  },
                  {
                    id: 2,
                    name: "Lapangan 2",
                  },
                ]}
              />
            </div>
            <div className="flex items-end justify-end">
              <div className="sm:w-3/4 w-1/2">
                <Button icon={<AiOutlineSearch />} text="Cari" />
              </div>
            </div>
          </div>
        </div>
        <img src={HeroImage} alt="Hero Image" width={450} className="mx-auto" />
      </div>
      <div className="lg:p-12 p-10 flex justify-center mt-20">
        <div>
          <div className="text-center text-[#005F6C] sm:text-[48px] text-[36px] font-semibold">Caranya ?</div>
          <div className="mt-8">
            <img src={Steps} alt="steps image" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:p-24 p-8 gap-12 pt-24">
        <div className="flex justify-center items-center">
          <img src={AboutImage} alt="About Image" width={600} />
        </div>
        <div className="sm:pr-32">
          <div className="text-[#005F6C] sm:text-[48px] text-[36px] font-semibold">Tentang Kami</div>
          <div className="mt-8 text-[#303030] sm:text-xl text-md leading-loose">
            Kami adalah tempat penyewaan lapangan futsal yang berada di Kota Medan. Kami menggunakan rumput sintetis impor yang kualitasnya tidak perlu diragukan lagi. Kami telah dipercaya oleh banyak orang sebagai salah satu tempat
            penyewaan lapangan futsal terbaik di Kota Medan.
          </div>
          <div className="mt-8 grid sm:grid-cols-3 grid-cols-1 sm:gap-24 gap-8">
            <div>
              <div className="text-[#FF5B24] text-[40px] font-bold">6</div>
              <div className="text-[#7E7E7E] text-lg font-semibold">Tahun</div>
            </div>
            <div>
              <div className="text-[#FF5B24] text-[40px] font-bold">360++</div>
              <div className="text-[#7E7E7E] text-lg font-semibold">Ulasan</div>
            </div>
            <div>
              <div className="text-[#FF5B24] text-[40px] font-bold">4.6</div>
              <div className="text-[#005F6C] text-[24px] flex space-x-4">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:pb-24 pb-8 sm:px-24 px-8">
        <div>
          <div className="text-center text-[#005F6C] sm:text-[48px] text-[36px] font-semibold">Pendapat Mereka</div>
          <div className="flex justify-center">
            <div className="text-center lg:w-1/3 w-full mt-8 text-[#303030] sm:text-xl text-md leading-loose">Village Futsal telah diulas oleh lebih dari 360 orang di Google Maps dan mendapat rating rata-rata 4,6. Simak ulasan mereka.</div>
          </div>
        </div>
        <div ref={ref} style={{ scrollBehavior: "smooth" }} id="testi" className="max-w-full flex flex-row gap-24 sm:p-24 sm:px-32 p-8 overflow-x-scroll">
          {ARR_TESTI.map((x) => (
            <div className="m-0 p-2" key={x} id={`testi-${x}`}>
              <div className="sm:h-[356px] sm:w-[480px] h-[256px] w-[380px] border-2 rounded-lg p-12">
                <div className="grid grid-cols-1">
                  <div className="text-[12px] sm:text-[18px]">
                    <div>Tempat futsalnya nyaman dan bersih. Lapangannya ada 6 dan pakai rumput sintetis. Parkirannya luas. Ada cafe yang harganya terjangkau. Cocok untuk ajak keluarga. Pokoknya recommended banget.</div>
                    <div className="flex space-x-4 sm:mt-8 mt-4 items-start">
                      <img src={AvatarProfile} alt="Profile" width={75} className="rounded-full" />
                      <div>
                        <div>Kevin Prasetia</div>
                        <div className="sm:mt-4 mt-2 text-[#005F6C] text-[12px] sm:text-[24px] flex space-x-4">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <AiOutlineArrowLeft onClick={() => scroll(-700)} className="hover:text-[#005F6C] cursor-pointer" />
          <AiOutlineArrowRight onClick={() => scroll(700)} className="hover:text-[#005F6C] cursor-pointer" />
        </div>
      </div>
    </LayoutUser>
  );
};

export default LandingPage;
