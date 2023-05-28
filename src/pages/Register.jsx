import LayoutUser from "../components/Layouts/LayoutUser"

const Register = () => {
    return (
        <LayoutUser>
            <div className="lg:p-12 p-8 flex justify-center">
                <div className="w-1/3">
                    <div className="text-[#337F89] text-[32px] font-semibold text-center">Daftar Akun Baru</div>
                    <div className="text-center mt-4">Lengkapi formulir di bawah ini menggunakan data Anda yang valid.</div>
                    <div className="mt-8 border-2 p-8 space-y-4">
                        <div>
                            <label htmlFor="">Nama</label>
                        </div>
                        <input type="text" className="bg-gray-100 p-2 w-full rounded-lg" placeholder="Your name..." />
                        <div>
                            <label htmlFor="">Email</label>
                        </div>
                        <input type="email" className="bg-gray-100 p-2 w-full rounded-lg" placeholder="Your email..." />
                        <div>
                            <label htmlFor="">Password</label>
                        </div>
                        <input type="password" className="bg-gray-100 p-2 w-full rounded-lg" placeholder="Your password..." />
                        <div>
                            <label htmlFor="">No HP</label>
                        </div>
                        <div className="pb-8">
                            <input type="number" className="bg-gray-100 p-2 w-full rounded-lg" placeholder="Your number phone..." />
                        </div>
                        <div className="bg-[#FF5B24] text-white text-lg text-center p-2 rounded-lg">Daftar</div>
                        <div className="flex justify-center">
                            <div>Udah punya akun? <span className="text-[#337F89] underline underline-offset-2">Masuk</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutUser>
    )
}

export default Register