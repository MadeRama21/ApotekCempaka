import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal"; // Import komponen modal
import axios from "axios";
import { Link } from "react-router-dom";

function Apotek() {
    const [obats, setObat] = useState([]);
    const [modalOpen, setModalOpen] = useState(false); // State untuk mengontrol apakah modal ditampilkan atau tidak
    const [kodeObatToDelete, setKodeObatToDelete] = useState(""); // State untuk menyimpan kode obat yang akan dihapus

    useEffect(() => {
        getDataObat();
    }, []);

    const getDataObat = async () => {
        const response = await axios.get('http://localhost:5000/dataObat');
        setObat(response.data);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/dataObat/${kodeObatToDelete}`);
            getDataObat();
            setModalOpen(false); // Tutup modal setelah penghapusan berhasil
        } catch (error) {
            console.log(error);
        }
    };

    const formatTanggal = (tanggalISO) => {
        return tanggalISO.split('T')[0]; // Menghapus informasi waktu dan hanya menampilkan bagian tanggal
    };

    return (
        <React.Fragment>
            <Header />
            <section className="min-h-screen mb-10 flex flex-row justify-center">
                <div className="flex flex-col mt-32 items-center">
                    <h2 className="mb-10 text-3xl font-bold font-poppins uppercase">Daftar Obat Apotek Cempaka</h2>
                    <div>
                        <Link className="bg-primari xl:py-3 xl:px-5 xl:w-40 sm:mt-32 sm:py-3 sm:px-5 sm:w-40 rounded-md text-sekunder font-poppins text-sm" to={"add_obat"}>
                            Tambah Data Obat
                        </Link>
                        <div className="xl:max-w-full xl:w-full md:max-w-full sm:max-w-screen-sm sm:w-full">
                            <table cellPadding={10} className="border-2 border-primari xl:mt-10 sm:mt-10 font-poppins">
                            <thead className="border-2 border-primari">
                                <tr className="border-2 border-primari text-center text-sekunder font-semibold bg-primari bg-opacity-80 h-16">
                                    <td className="border-2 border-primari w-10">No</td>
                                    <td className="border-2 border-primari w-32">Kode Obat</td>
                                    <td className="border-2 border-primari w-32">Jenis Obat</td>
                                    <td className="border-2 border-primari w-32">Nama Obat</td>
                                    <td className="border-2 border-primari w-48">Fungsi</td>
                                    <td className="border-2 border-primari w-32">Expired</td>
                                    <td className="border-2 border-primari w-32">Bentuk Obat</td>
                                    <td className="border-2 border-primari w-52">Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {obats.map((obat, index) => (
                                    <tr key={obat._id} className="text-md h-20">
                                        <td className="border-2 border-primari">{index + 1}</td>
                                        <td className="border-2 border-primari">{obat.kodeObat}</td>
                                        <td className="border-2 border-primari">{obat.jenisObat}</td>
                                        <td className="border-2 border-primari">{obat.namaObat}</td>
                                        <td className="border-2 border-primari">{obat.indikasi}</td>
                                        <td className="border-2 border-primari">{formatTanggal(obat.expired)}</td>
                                        <td className="border-2 border-primari">{obat.bentukObat}</td>
                                        <td className="border-2 border-primari text-center">
                                            <div className="xl:flex xl:justify-evenly xl:items-center">
                                                <Link className="bg-primari xl:py-2 xl:px-4 xl:w-20 sm:py-1 sm:px-2 sm:w-10 rounded-md text-sekunder font-poppins text-sm" to={`edit/${obat.kodeObat}`}>
                                                    Edit
                                                </Link>
                                                <button className="bg-danger xl:py-2 xl:px-4 xl:w-20 sm:py-1 sm:px-2 sm:w-16 rounded-md text-sekunder font-poppins text-sm" onClick={() => {setModalOpen(true); setKodeObatToDelete(obat.kodeObat)}}>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </section>
            <Modal open={modalOpen} setOpen={setModalOpen} deleteFunction={handleDelete} />
            <Footer />
        </React.Fragment>
    );
}

export default Apotek;