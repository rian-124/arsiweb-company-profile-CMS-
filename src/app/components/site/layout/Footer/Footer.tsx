import NavbarLogo from "../navbar/NavbarLogo";
import Image from "next/image";

const Footer = () => {
   
    return (
        <div className="h-[100vh] bg-[#161616] text-white md:px-20 lg:px-40 px-14 py-1">

            <div className="max-w-7xl mx-auto">
                <div className="w-60 md:w-80 flex justify-center items-center mx-auto mt-20 border-b border-dashed border-gray-600 py-6">
                    <NavbarLogo width={380} height={380} />
                </div>
                <button className="mx-auto mt-20 w-9 h-9 bg-sky-500 group-hover:bg-sky-500 rounded-full flex items-center justify-center cursor-pointer">
                    <Image
                        src="/icons/raquoSecond.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                        className="group-hover:rotate-120 rotate-300 transition-all duration-200"
                    />
                </button>
                <div className="mx-auto w-66 md:w-88 flex text-sm justify-center items-center mt-18 gap-2 border-b border-dashed border-gray-600 pb-3">
                    <div className="flex items-center gap-1 md:gap-2">
                        <a href="#" className="bg-white inline-flex p-1 rounded-full aspect-square">
                            <Image src={"icons/email.svg"} alt="email" width={14} height={14} />
                        </a>
                        <p className="text-white/80 text-[0.5rem] md:text-[0.6rem] mt-0.5">arsiweb@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                        <a href="#" className="bg-white inline-flex p-1 rounded-full aspect-square">
                            <Image src={"icons/marker.svg"} alt="email" width={14} height={14} />
                        </a>
                        <p className="text-white/80 text-[0.5rem] md:text-[0.6rem] mt-0.5">Lorem ipsum, dolor sit amet.</p>
                    </div>
                </div>
                <div className="mx-auto w-66 md:w-88 flex justify-between mt-4 gap-2">
                    <a href="#" className="text-white/80 text-[0.65rem]">Copy Right</a>
                    <a href="#" className="text-white/80 text-[0.65rem]">Terms and Conditions</a>
                    <a href="#" className="text-white/80 text-[0.65rem]">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;