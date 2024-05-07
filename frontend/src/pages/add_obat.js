import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios";

function Add_obat() {
    const [kodeObat, setKodeObat] = useState("")
    const [jenisObat, setJenisObat] = useState("Ringan")
    const [namaObat, setNamaObat] = useState("")
    const [indikasi, setIndikasi] = useState("")
    const [expired, setExpired] = useState("")
    const [bentukObat, setBentukObat] = useState("Sirup")
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const saveDataObat = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/dataObat', {
                kodeObat,
                jenisObat,
                namaObat,
                indikasi,
                expired,
                bentukObat  
            });
            navigate("/apotek")
        } catch (error) {
            if (error.response) {
                // Tangkap pesan error dari respons server
                const errorMessages = error.response.data.errors;
                const newErrors = {};

                // Set pesan error untuk setiap input
                errorMessages.forEach((errorMessage) => {
                    newErrors[errorMessage.path] = errorMessage.msg;
                });

                // Simpan pesan error untuk setiap input dalam state errors
                setErrors(newErrors);
            } else {
                setErrors("Terjadi kesalahan saat mengirim permintaan.");
            }
        }
    }

    return(
        <React.Fragment>
            <Header/>
                <section className="min-h-screen font-poppins">
                    <div className="flex flex-col justify-center items-center py-10 mt-24">

                    <h1 className="mb-5">Silahkan Tambah Data Obat</h1>

                    <div className="w-full flex justify-center">
                        <form className="flex flex-col gap-3 w-1/3" onSubmit={saveDataObat}>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Kode Obat</label>
                                <div className="">
                                    <input className={`block w-full rounded-md border-0 py-1.5 pl-4 pr-40 text-gray-900 ring-1 ring-inset ${errors.kodeObat ? 'ring-danger' : 'ring-primari'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primari outline-none sm:text-sm sm:leading-6`} type="text" value={kodeObat} onChange={(e) => setKodeObat(e.target.value)} placeholder="Masukkan Kode Obat"/>
                                    {errors.kodeObat && <span className="text-danger text-sm">*{errors.kodeObat}</span>}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Jenis Obat</label>
                                <div className="control">
                                    <div className="select">
                                        <select className="bg-gray-50 border outline-none border-primari text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 pl-2.5" value={jenisObat} onChange={(e) => setJenisObat(e.target.value)}>
                                            <option value="Ringan">Ringan</option>
                                            <option value="Sedang">Sedang</option>
                                            <option value="Keras">Keras</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Nama Obat</label>
                                <div className="control">
                                    <input className={`block w-full rounded-md border-0 py-1.5 pl-4 pr-40 text-gray-900 ring-1 ring-inset ${errors.namaObat ? 'ring-danger' : 'ring-primari'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primari outline-none sm:text-sm sm:leading-6`} type="text" value={namaObat} onChange={(e) => setNamaObat(e.target.value)} placeholder="Masukkan Nama Obat"/>
                                    {errors.namaObat && <span className="text-danger text-sm">*{errors.namaObat}</span>}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Fungsi</label>
                                <div className="control">
                                    <input className={`block w-full rounded-md border-0 py-1.5 pl-4 pr-40 text-gray-900 ring-1 ring-inset ${errors.indikasi ? 'ring-danger' : 'ring-primari'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primari outline-none sm:text-sm sm:leading-6`} type="text" value={indikasi} onChange={(e) => setIndikasi(e.target.value)} placeholder="Masukkan Fungsi Obat"/>
                                    {errors.indikasi && <span className="text-danger text-sm">*{errors.indikasi}</span>}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Expired</label>
                                <div className="control">
                                    <input className={`block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ${errors.expired ? 'ring-danger' : 'ring-primari'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primari outline-none sm:text-sm sm:leading-6`} type="Date" value={expired} onChange={(e) => setExpired(e.target.value)} />
                                    {errors.expired && <span className="text-danger text-sm">*{errors.expired}</span>}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Bentuk Obat</label>
                                <div className="control">
                                    <div className="select">
                                        <select className="bg-gray-50 border outline-none border-primari text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 pl-2.5" value={bentukObat} onChange={(e) => setBentukObat(e.target.value)}>
                                            <option value="Sirup">Sirup</option>
                                            <option value="Tablet">Tablet</option>
                                            <option value="Kapsul">Kapsul</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div className="control">
                                    <button className="bg-primari xl:py-2 xl:px-2 xl:w-20 rounded-md text-sekunder font-poppins text-sm" type="submit">Simpan</button>
                                </div>
                                <Link className="bg-danger xl:py-2 xl:px-3 xl:w-20 rounded-md text-sekunder font-poppins text-sm" to={`/apotek`}>
                                    Kembali
                                </Link>
                            </div>
                        </form> 
                    </div>
                    

                    </div>
                </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Add_obat