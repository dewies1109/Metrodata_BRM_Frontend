import React from "react"
import Button from "../Common/Button"

const Form_Login = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">            
                <h2 className="mt-10 text-left text-2xl font-semibold font-inter leading-9 tracking-tight text-[#181c32]">
                    Masuk
                </h2>
                <h2 className="text-left text-sm font-semibold font-inter leading-9 tracking-tight text-[#A1A5B7]">
                    Silahkan masuk untuk mulai menggunakan BRM
                </h2>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <div class="relative ">
                            <input type="text" id="floating_filled" class="font-inter font-semibold block rounded-md px-4 pb-2.5 pt-5 w-full text-sm text-[#181C32] bg-[#fff] border-2 border-[#E1E3EA] appearance-none focus:outline-none focus:ring-0 focus:border-[#00549B] peer" placeholder=" " />
                            <label for="floating_filled" class="font-inter font-semibold absolute text-sm text-[#A1A5B7] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-[#A1A5B7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email/Username/No.HP</label>
                        </div>
                    </div>

                    <div>
                        <div class="relative ">
                            <input type="password" id="floating_filled" class="font-inter font-semibold block rounded-md px-4 pb-2.5 pt-5 w-full text-sm text-[#181C32] bg-[#fff] border-2 border-[#E1E3EA] appearance-none focus:outline-none focus:ring-0 focus:border-[#00549B] peer" placeholder=" " />
                            <label for="floating_filled" class="font-inter font-semibold absolute text-sm text-[#A1A5B7] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-[#A1A5B7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Kata Sandi</label>
                        </div>
                    </div>                    
                </form>
                
                <Button />

            </div>
      </div>
    )
}

export default Form_Login