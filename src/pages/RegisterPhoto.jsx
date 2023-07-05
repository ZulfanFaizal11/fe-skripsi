import LayoutUser from "../components/Layouts/LayoutUser"
import Upload from "../assets/user/registerphoto/upload.png"

const RegisterPhoto = () => {
  return (
    <LayoutUser>
    <div className="lg:p-12 p-8 flex justify-center">
      <div>
         <div className="text-[#337F89] text-[32px] text-center font-semibold"> Daftar akun baru</div>
          <div className="text-sm m-2 p-2">Lengkapi formulir dibawah ini menggunakan data Anda yang valid.</div>
          <div className="mt-8 border-2 p-8 space-y-4">
            <div className="flex justify-center">
            <img src={Upload} alt="upload"/>
            </div>
            <div className="text-center font-semibold">Abdul</div>
            <div className="text-center text-sm">abdul00@gmail.com</div>
            
            <div>Pilih File</div>
            <div className="flex justify-start items-center space-x-3">
              <div className="border-2 border-[#669FA7] px-3 py-2 text-[#669FA7]">Pilih File</div>
              <div className="text-sm">Belum memilih file</div>
            </div>
            <div className="text-xs text-[#7E7E7E]">Format file jpg, png</div>
            <div className="bg-[#FF5B24] text-white text-center text-md p-2 rounded-lg">Lanjut</div>
            <div className="text-[#669FA7] border-2 border-[#669FA7] text-center text-md p-2 rounded-lg ">Lewati</div>
          </div>
          </div>

      </div>
    </LayoutUser>
  )
}

export default RegisterPhoto