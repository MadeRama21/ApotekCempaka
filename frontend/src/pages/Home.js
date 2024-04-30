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
            <section className="min-h-screen max-w-full">
                <div className="bg-[url('/src/assets/bg-landing_page.svg')] min-h-screen flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center text-sekunder font-poppins">
                        <h2 className="text-5xl uppercase font-bold tracking-widest mb-1">Apotek Cempaka</h2>
                        <p className="text-1xl tracking-wider">Teman sehatmu setiap saat!</p>
                        <ButtonProduk/>
                    </div>
                </div>  
            </section>
            <section className="min-h-[120vh]">
                <div className="flex justify-evenly items-center m-14">
                    <div className="flex flex-col items-center max-w-72 text-center font-poppins">
                        <FontAwesomeIcon className="text-primari text-6xl py-4" icon={faCircleCheck} />
                        <h3 className="text-primari font-bold text-xl tracking-wide">Obat Lengkap</h3>
                        <p>Menyediakan beragam jenis obat untuk memenuhi kebutuhan kesehatan konsumen</p>
                    </div>
                    <div className="flex flex-col items-center max-w-72 text-center font-poppins">
                        <FontAwesomeIcon className="text-primari text-6xl py-4" icon={faFlask} />
                        <h3 className="text-primari font-bold text-xl tracking-wide">Teruji Lab</h3>
                        <p>Kualitas dan keamanan obat-obatan yang dijual dipastikan aman karena teruji lab</p>
                    </div>
                </div>

                <div className="flex flex-row justify-evenly max-w-full py-24">
                    <div className="w-2/4 font-poppins self-baseline">
                        <h2 className="text-primari font-bold text-3xl tracking-wide">Sakit dan Sedang Butuh Obat?</h2>
                        <p className="w-7/12 mb-36">Tenang, kami siap membantu Anda memilih obat yang tepat! Kami tidak hanya menawarkan obat-obatan yang dibutuhkan untuk mengatasi berbagai masalah kesehatan. Cek profil kami dibawah ini!</p>
                        <ButtonProfil/>
                    </div>
                    <div className="">
                        <img className="aspect-square w-80" src={ilustrasi_obat} alt="ilustrasi_obat" />
                    </div>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Home