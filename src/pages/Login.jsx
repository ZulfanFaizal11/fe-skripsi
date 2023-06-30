import LayoutUser from "../components/Layouts/LayoutUser"

const Login = () => {
    return (
        <LayoutUser>
            <div className="lg:p-12 p-8 flex justify-center">
                <div>
                    <div className="text-[#337F89] text-[32px] font-semibold">Selamat Datang Kembali</div>
                    <div className="mt-8 border-2 p-8 space-y-4">
                        <div>
                            <label htmlFor="">Email</label>
                        </div>
                        <input type="text" className="bg-gray-100 p-2 w-full rounded-lg" placeholder="Your email..." />
                        <div>
                            <label htmlFor="">Password</label>
                        </div>
                        <input type="password" className="bg-gray-100 p-2 w-full rounded-lg" placeholder="Your password..." />
                        <div>
                            <a href="" className="text-[#337F89] underline underline-offset-2">Saya lupa password</a>
                        </div>
                        <div className="bg-[#FF5B24] text-white text-lg text-center p-2 rounded-lg">Login</div>
                        <div>Belum punya akun? <span className="text-[#337F89] underline underline-offset-2">Daftar</span></div>
                    </div>
                </div>
            </div>
        </LayoutUser>
    )
}

export default Login