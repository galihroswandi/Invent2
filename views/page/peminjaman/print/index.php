<?php
require_once '../../../../library/fpdf/fpdf.php';

$db = new PDO('mysql:host=localhost;dbname=db_inventory', 'root', '');

class myPdf extends FPDF{
    function header(){
        // $this->Image('logo.png', 10, 6);
        $this->SetFont('Arial', 'B', 14);
        $this->Cell(276, 5, 'Laporan Pengajuan Barang', 0, 0, 'C');
        $this->Ln();
        $this->SetFont('Times', '', 12);
        $this->Cell(276, 10, "SMK Muhammadiyah Tasikmalaya", 0, 0, 'C');
        $this->Ln();
    }
    function footer(){
        $this->SetY(-15);
        $this->SetFont('Arial', '', 8);
        $this->Cell(0, 10, 'No' .$this->PageNo().'/{nb}', 0, 0, 'C');
    }
    function headerTable(){
        $this->SetFont('Times', 'B', 12);
        $this->Cell(10, 10, "No", 1, 0, 'C');
        $this->Cell(36, 10, 'Kd Peminjaman', 1, 0, 'C');
        $this->Cell(90, 10, 'Nama Barang', 1, 0, 'C');
        $this->Cell(40, 10, 'Ruangan', 1, 0, 'C');
        $this->Cell(60, 10, 'Tanggal', 1, 0, 'C');
        $this->Cell(36, 10, 'Status', 1, 0, 'C');
        $this->Ln();
    }
    function viewTable($db){
        $this->SetFont('Times', '', 12);
        $stmt = $db->query("SELECT 
                                tbl_peminjaman.kode, 
                                tbl_barang.nm_brg, 
                                tbl_ruangan.nm_ruangan, 
                                tbl_peminjaman.tanggal, 
                                tbl_peminjaman.status 
                                FROM tbl_peminjaman JOIN tbl_detail_peminjaman ON tbl_peminjaman.id_peminjaman = tbl_detail_peminjaman.id_peminjaman 
                                JOIN tbl_ruangan ON tbl_peminjaman.id_ruangan = tbl_ruangan.id_ruangan 
                                JOIN tbl_barang ON tbl_detail_peminjaman.id_brg = tbl_barang.id_brg"
                        );
        
        $i = 1; 
        $this->SetFillColor(224,235,255);
        $fill = false;
        while($data = $stmt->fetch(PDO::FETCH_OBJ)){
            $this->Cell(10, 10, $i, 1, 0, 'C', $fill);
            $this->Cell(36, 10, $data->kode , 1, 0, 'C', $fill);
            $this->Cell(90, 10, $data->nm_brg, 1, 0, 'C', $fill);
            $this->Cell(40, 10, $data->nm_ruangan, 1, 0, 'C', $fill);
            $this->Cell(60, 10, $data->tanggal, 1, 0, 'C', $fill);
            $this->Cell(36, 10, $data->status, 1, 0, 'C', $fill);
            $this->Ln();
            $i++;
            $fill = !$fill;
        }                        
    }
}

$pdf = new myPdf();
$pdf->AliasNbPages();
$pdf->AddPage('L', 'A4', 0);
$pdf->headerTable();
$pdf->viewTable($db);
$pdf->Output();
