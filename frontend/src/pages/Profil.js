import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Profil() {
    return (
        <React.Fragment>
            <Header/>
            <section className="min-h-screen max-w-full">
                <div className="bg-[url('/src/assets/bg_profil.svg')] min-h-40 flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center text-sekunder font-poppins">
                        <h2 className="text-5xl uppercase font-bold tracking-widest mb-1">Profil Apotek</h2>
                    </div>
                </div>

                <div className="flex flex-row justify-evenly max-w-full py-16">
                    <div className="w-2/4 font-poppins self-baseline">
                        <h2 className="text-primari font-bold text-3xl tracking-wide">Cerita Kami</h2>
                        <p className="w-7/12 mb-36">Tenang, kami siap membantu Anda memilih obat yang tepat! Kami tidak hanya menawarkan obat-obatan yang dibutuhkan untuk mengatasi berbagai masalah kesehatan. Cek profil kami dibawah ini!</p>
                    </div>
                    <div className="">
                        <img className="aspect-square w-80" src="" alt="ilustrasi_obat" />
                    </div>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Profil