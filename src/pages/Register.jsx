import LayoutUser from "../components/Layouts/LayoutUser"

const Register = () => {
    return (
        <LayoutUser>
            <div className="lg:p-12 p-8 flex justify-center">
                <div>
                    <div className="text-[#337F89] text-[32px] text-center font-semibold">Daftar akun Baru</div>
                    <div className="text-[12px] m-2  p-2 ">Lengkapi formulir di bawah ini menggunakan data Anda yang valid.</div>
                    <div className="mt-8 border-2 p-8 space-y-4">
                        <div>
                            <label htmlFor="">Nama</label>
                        </div>
                        <input type="text" className="bg-gray-100 p-2 w-full rounded-lg" placeholder="Nama..." />
                        <div>
                            <label htmlFor="">Email</label>
                        </div>
                        <input type="text" className="bg-gray-100 p-2 w-full rounded-lg" placeholder="Email..." />
                        <div>
                            <label htmlFor="">Password</label>
                        </div>
                        <input type="password" className="bg-gray-100 p-2 w-full rounded-lg" placeholder="Password..." />
                        <div>
                            <label htmlFor="">No.Handphone</label>
                        </div>
                        <input type="number" className="bg-gray-100 p-2 w-full rounded-lg" placeholder="No.Handphone..." />
                        <div className="bg-[#FF5B24] text-white text-lg text-center p-2 rounded-lg">Daftar</div>
                        <div>Sudah punya akun? <a href="" className="text-[#337F89] underline underline-offset-2">Masuk</a></div>
                    </div>

                </div>

            </div>
        </LayoutUser>
    )
}

export default Register