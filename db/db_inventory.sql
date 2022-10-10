-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Okt 2022 pada 09.32
-- Versi server: 10.4.19-MariaDB
-- Versi PHP: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_inventory`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id_admin` int(11) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_admin`
--

INSERT INTO `tbl_admin` (`id_admin`, `username`, `password`, `status`) VALUES
(1, 'admin', 'admin123', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_barang`
--

CREATE TABLE `tbl_barang` (
  `id_brg` int(11) NOT NULL,
  `kd_brg` char(25) NOT NULL,
  `nm_brg` varchar(50) NOT NULL,
  `kategori` int(11) NOT NULL,
  `satuan` int(11) NOT NULL,
  `stok` int(3) NOT NULL,
  `merk` int(11) NOT NULL,
  `spesifikasi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_barang`
--

INSERT INTO `tbl_barang` (`id_brg`, `kd_brg`, `nm_brg`, `kategori`, `satuan`, `stok`, `merk`, `spesifikasi`) VALUES
(102, 'BRG002', 'MECHANICAL KEYBOARD', 8, 3, 49, 1, 'asdfadfdfdfgdfgsdf'),
(119, 'BRG003', 'fafasdfas', 8, 6, 3, 1, 'dasfasdfasdf');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_detail_peminjaman`
--

CREATE TABLE `tbl_detail_peminjaman` (
  `id_detail_peminjaman` int(11) NOT NULL,
  `id_peminjaman` int(11) NOT NULL,
  `id_brg` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_detail_peminjaman`
--

INSERT INTO `tbl_detail_peminjaman` (`id_detail_peminjaman`, `id_peminjaman`, `id_brg`) VALUES
(25, 18, 102);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_detail_pengajuan`
--

CREATE TABLE `tbl_detail_pengajuan` (
  `id_detail_pengajuan` int(11) NOT NULL,
  `id_pengajuan` int(11) NOT NULL,
  `id_brg` int(11) NOT NULL,
  `hrg_beli` int(3) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_detail_pengajuan`
--

INSERT INTO `tbl_detail_pengajuan` (`id_detail_pengajuan`, `id_pengajuan`, `id_brg`, `hrg_beli`, `status`) VALUES
(56, 78, 102, 341341, 0),
(59, 81, 119, 2451231, 5);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_kategori`
--

CREATE TABLE `tbl_kategori` (
  `id_kategori` int(11) NOT NULL,
  `nm_kategori` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_kategori`
--

INSERT INTO `tbl_kategori` (`id_kategori`, `nm_kategori`) VALUES
(8, 'Galon');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_merk`
--

CREATE TABLE `tbl_merk` (
  `id_merk` int(11) NOT NULL,
  `nm_merk` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_merk`
--

INSERT INTO `tbl_merk` (`id_merk`, `nm_merk`) VALUES
(1, 'logitechs');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_peminjaman`
--

CREATE TABLE `tbl_peminjaman` (
  `id_peminjaman` int(11) NOT NULL,
  `id_admin` int(11) NOT NULL,
  `kode` char(25) NOT NULL,
  `tanggal` date NOT NULL,
  `id_ruangan` int(11) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_peminjaman`
--

INSERT INTO `tbl_peminjaman` (`id_peminjaman`, `id_admin`, `kode`, `tanggal`, `id_ruangan`, `status`) VALUES
(18, 1, 'KDP0002', '2022-09-07', 24, 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_pengajuan`
--

CREATE TABLE `tbl_pengajuan` (
  `id_pengajuan` int(11) NOT NULL,
  `id_admin` int(11) NOT NULL,
  `kode` char(25) NOT NULL,
  `tanggal` date NOT NULL,
  `id_vendor` int(11) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_pengajuan`
--

INSERT INTO `tbl_pengajuan` (`id_pengajuan`, `id_admin`, `kode`, `tanggal`, `id_vendor`, `status`) VALUES
(78, 1, 'PNJ0003', '2022-09-28', 15, 0),
(81, 1, 'PNJ0004', '2022-09-22', 15, 5);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_ruangan`
--

CREATE TABLE `tbl_ruangan` (
  `id_ruangan` int(11) NOT NULL,
  `kd_ruangan` char(25) NOT NULL,
  `nm_ruangan` varchar(50) NOT NULL,
  `spesifikasi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_ruangan`
--

INSERT INTO `tbl_ruangan` (`id_ruangan`, `kd_ruangan`, `nm_ruangan`, `spesifikasi`) VALUES
(24, 'RGN001', 'adfadsf', 'adfadsfasdf');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_satuan`
--

CREATE TABLE `tbl_satuan` (
  `id_satuan` int(11) NOT NULL,
  `satuan` char(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_satuan`
--

INSERT INTO `tbl_satuan` (`id_satuan`, `satuan`) VALUES
(3, 'kilogram'),
(6, 'Packing');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_vendor`
--

CREATE TABLE `tbl_vendor` (
  `id_vendor` int(11) NOT NULL,
  `nm_vendor` varchar(25) NOT NULL,
  `alamat` text NOT NULL,
  `no_telp` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_vendor`
--

INSERT INTO `tbl_vendor` (`id_vendor`, `nm_vendor`, `alamat`, `no_telp`) VALUES
(15, 'adfasdfa', 'asdfadfas', '342351');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indeks untuk tabel `tbl_barang`
--
ALTER TABLE `tbl_barang`
  ADD PRIMARY KEY (`id_brg`),
  ADD KEY `kategori` (`kategori`),
  ADD KEY `satuan` (`satuan`),
  ADD KEY `merk` (`merk`);

--
-- Indeks untuk tabel `tbl_detail_peminjaman`
--
ALTER TABLE `tbl_detail_peminjaman`
  ADD PRIMARY KEY (`id_detail_peminjaman`),
  ADD KEY `id_peminjaman` (`id_peminjaman`),
  ADD KEY `id_brg` (`id_brg`);

--
-- Indeks untuk tabel `tbl_detail_pengajuan`
--
ALTER TABLE `tbl_detail_pengajuan`
  ADD PRIMARY KEY (`id_detail_pengajuan`),
  ADD KEY `id_pengajuan` (`id_pengajuan`),
  ADD KEY `id_brg` (`id_brg`);

--
-- Indeks untuk tabel `tbl_kategori`
--
ALTER TABLE `tbl_kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indeks untuk tabel `tbl_merk`
--
ALTER TABLE `tbl_merk`
  ADD PRIMARY KEY (`id_merk`);

--
-- Indeks untuk tabel `tbl_peminjaman`
--
ALTER TABLE `tbl_peminjaman`
  ADD PRIMARY KEY (`id_peminjaman`),
  ADD KEY `id_admin` (`id_admin`),
  ADD KEY `id_ruangan` (`id_ruangan`);

--
-- Indeks untuk tabel `tbl_pengajuan`
--
ALTER TABLE `tbl_pengajuan`
  ADD PRIMARY KEY (`id_pengajuan`),
  ADD KEY `id_admin` (`id_admin`),
  ADD KEY `id_vendor` (`id_vendor`);

--
-- Indeks untuk tabel `tbl_ruangan`
--
ALTER TABLE `tbl_ruangan`
  ADD PRIMARY KEY (`id_ruangan`);

--
-- Indeks untuk tabel `tbl_satuan`
--
ALTER TABLE `tbl_satuan`
  ADD PRIMARY KEY (`id_satuan`);

--
-- Indeks untuk tabel `tbl_vendor`
--
ALTER TABLE `tbl_vendor`
  ADD PRIMARY KEY (`id_vendor`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `tbl_barang`
--
ALTER TABLE `tbl_barang`
  MODIFY `id_brg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT untuk tabel `tbl_detail_peminjaman`
--
ALTER TABLE `tbl_detail_peminjaman`
  MODIFY `id_detail_peminjaman` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `tbl_detail_pengajuan`
--
ALTER TABLE `tbl_detail_pengajuan`
  MODIFY `id_detail_pengajuan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT untuk tabel `tbl_kategori`
--
ALTER TABLE `tbl_kategori`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT untuk tabel `tbl_merk`
--
ALTER TABLE `tbl_merk`
  MODIFY `id_merk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `tbl_peminjaman`
--
ALTER TABLE `tbl_peminjaman`
  MODIFY `id_peminjaman` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `tbl_pengajuan`
--
ALTER TABLE `tbl_pengajuan`
  MODIFY `id_pengajuan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT untuk tabel `tbl_ruangan`
--
ALTER TABLE `tbl_ruangan`
  MODIFY `id_ruangan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT untuk tabel `tbl_satuan`
--
ALTER TABLE `tbl_satuan`
  MODIFY `id_satuan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `tbl_vendor`
--
ALTER TABLE `tbl_vendor`
  MODIFY `id_vendor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tbl_barang`
--
ALTER TABLE `tbl_barang`
  ADD CONSTRAINT `tbl_barang_ibfk_4` FOREIGN KEY (`kategori`) REFERENCES `tbl_kategori` (`id_kategori`),
  ADD CONSTRAINT `tbl_barang_ibfk_5` FOREIGN KEY (`satuan`) REFERENCES `tbl_satuan` (`id_satuan`),
  ADD CONSTRAINT `tbl_barang_ibfk_6` FOREIGN KEY (`merk`) REFERENCES `tbl_merk` (`id_merk`);

--
-- Ketidakleluasaan untuk tabel `tbl_detail_peminjaman`
--
ALTER TABLE `tbl_detail_peminjaman`
  ADD CONSTRAINT `tbl_detail_peminjaman_ibfk_1` FOREIGN KEY (`id_peminjaman`) REFERENCES `tbl_peminjaman` (`id_peminjaman`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_detail_peminjaman_ibfk_2` FOREIGN KEY (`id_brg`) REFERENCES `tbl_barang` (`id_brg`);

--
-- Ketidakleluasaan untuk tabel `tbl_detail_pengajuan`
--
ALTER TABLE `tbl_detail_pengajuan`
  ADD CONSTRAINT `tbl_detail_pengajuan_ibfk_2` FOREIGN KEY (`id_brg`) REFERENCES `tbl_barang` (`id_brg`),
  ADD CONSTRAINT `tbl_detail_pengajuan_ibfk_3` FOREIGN KEY (`id_pengajuan`) REFERENCES `tbl_pengajuan` (`id_pengajuan`);

--
-- Ketidakleluasaan untuk tabel `tbl_peminjaman`
--
ALTER TABLE `tbl_peminjaman`
  ADD CONSTRAINT `tbl_peminjaman_ibfk_1` FOREIGN KEY (`id_admin`) REFERENCES `tbl_admin` (`id_admin`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_peminjaman_ibfk_2` FOREIGN KEY (`id_ruangan`) REFERENCES `tbl_ruangan` (`id_ruangan`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tbl_pengajuan`
--
ALTER TABLE `tbl_pengajuan`
  ADD CONSTRAINT `tbl_pengajuan_ibfk_1` FOREIGN KEY (`id_admin`) REFERENCES `tbl_admin` (`id_admin`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_pengajuan_ibfk_2` FOREIGN KEY (`id_vendor`) REFERENCES `tbl_vendor` (`id_vendor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
