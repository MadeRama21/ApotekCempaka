import express from 'express'
import { getDataObat, getDataObatByKodeObat, saveObat, updateObat, deleteObat } from '../controller/UserController.js'
import { check } from 'express-validator'

const router = express.Router()

router.get('/dataObat', getDataObat)
router.get('/dataObat/:kodeObat', getDataObatByKodeObat)
router.post('/dataObat', [
    check("kodeObat", "Format Kode obat salah!").matches(/^[A-Z][0-9]{2}$/),
    check("namaObat", "Nama obat hanya boleh mengandung huruf dan angka").matches(/^[a-zA-Z0-9\s]+$/),
    check("indikasi", "Fungsi tidak valid").matches(/^[a-zA-Z0-9\s]+$/),
    check("expired", "Tanggal Kedaluwarsa tidak valid").isDate(),
    check("jenisObat", "Tolong pilih jenis obat!").matches(/^[a-zA-Z0-9\s]+$/),
    check("bentukObat", "Tolong pilih bentuk obat!").matches(/^[a-zA-Z0-9\s]+$/)
], saveObat)
router.patch('/dataObat/:kodeObat', [
    check("kodeObat", "Format Kode obat salah!").matches(/^[A-Z][0-9]{2}$/),
    check("namaObat", "Nama obat hanya boleh mengandung huruf dan angka").matches(/^[a-zA-Z0-9\s]+$/),
    check("indikasi", "Fungsi tidak valid").matches(/^[a-zA-Z0-9\s]+$/),
    check("expired", "Tanggal Kedaluwarsa tidak valid").isDate(),
    check("jenisObat", "Tolong pilih jenis obat!").matches(/^[a-zA-Z0-9\s]+$/),
    check("bentukObat", "Tolong pilih bentuk obat!").matches(/^[a-zA-Z0-9\s]+$/)
], updateObat)
router.delete('/dataObat/:kodeObat', deleteObat)

export default router