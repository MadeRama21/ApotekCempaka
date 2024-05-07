import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonProduk from "../components/ButtonProduk";
import ButtonProfil from "../components/ButtonProfil";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faFlask} from "@fortawesome/free-solid-svg-icons";
import ilustrasi_obat from "../assets/ilustrasi_obat.svg";

function Home() {
    return (
        <React.Fragment>
            <Header/>
            <section className="min-h-screen my-14 max-w-full">
                <div className="bg-[url('/src/assets/bg-landing_page.svg')] min-h-screen flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center text-sekunder font-poppins">
                        <h2 className="text-5xl uppercase font-bold tracking-widest mb-1">Apotek Cempaka</h2>
                        <p className="text-1xl tracking-wider">Teman sehatmu setiap saat!</p>
                        <ButtonProduk/>
                    </div>
                </div>  
            </section>
            <section className="min-h-[120vh]">
                <div className="sm:flex sm:justify-evenly sm:items-center sm:m-16 xl:flex xl:justify-evenly xl:items-center xl:m-14">
                    <div className="sm:flex sm:flex-col sm:items-center sm:max-w-72 sm:text-center xl:flex xl:flex-col xl:items-center xl:max-w-72 xl:text-center font-poppins min">
                        <FontAwesomeIcon className="text-primari text-6xl py-4" icon={faCircleCheck} />
                        <h3 className="text-primari font-bold text-xl tracking-wide">Obat Lengkap</h3>
                        <p>Menyediakan beragam jenis obat untuk memenuhi kebutuhan kesehatan konsumen</p>
                    </div>
                    <div className="sm:flex sm:flex-col sm:items-center sm:max-w-72 sm:text-center xl:flex xl:flex-col xl:items-center xl:max-w-72 xl:text-center font-poppins">
                        <FontAwesomeIcon className="text-primari text-6xl py-4" icon={faFlask} />
                        <h3 className="text-primari font-bold text-xl tracking-wide">Teruji Lab</h3>
                        <p>Kualitas dan keamanan obat-obatan yang dijual dipastikan aman karena teruji lab</p>
                    </div>
                </div>

                <div className="sm:flex sm:flex-col-reverse sm:py-24 sm:gap-4 xl:flex xl:flex-row xl:justify-evenly xl:max-w-full xl:py-24">
                    <div className="sm:w-3/4 sm:text-center sm:self-center xl:text-left  xl:w-[40%] font-poppins xl:self-baseline">
                        <h2 className="text-primari font-bold text-3xl tracking-wide">Sakit dan Sedang Butuh Obat?</h2>
                        <p className="sm:mb-10 xl:w-3/4 xl:mb-36">Tenang, kami siap membantu Anda memilih obat yang tepat! Kami tidak hanya menawarkan obat-obatan yang dibutuhkan untuk mengatasi berbagai masalah kesehatan. Cek profil kami dibawah ini!!</p>
                        <ButtonProfil/>
                    </div>
                    <div className="sm:flex sm:aspect[9:16] sm:justify-center sm:items-center">
                        <img className="sm:w-[550px] xl:w-[575px]" src={ilustrasi_obat} alt="ilustrasi_obat" />
                    </div>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Home