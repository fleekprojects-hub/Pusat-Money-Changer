# Fleek Omni-Core — Pusat Money Changer Interactive Executive Deck

Dokumen presentasi eksekutif dan demonstrasi sistem interaktif untuk **Pusat Money Changer** (Attn: **Bapak Budi — Owner** dan **Mas Yoel — IT Partner**). 

Dirancang dengan standar baku **Fleek Arasaka Cyber Dark Theme (`#111110` base)** berpadu aksen **Emerald Forex Green** (`#10b981`), **Luxury Gold** (`#E5A93C`), dan **Fleek Red** (`#FF0033`), tipografi **Outfit** & **Space Grotesk**, serta animasi transisi panel Anime.js.

---

## 🧭 Struktur 12 Slide Presentasi Eksekutif

| No | Slide ID | Judul & Fokus Utama |
| :---: | :--- | :--- |
| **01** | `opening` | **Executive Cover:** Branding resmi Pusat Money Changer x Fleek Project, Marquee kurs valas live, Attn: Pak Budi & Mas Yoel. |
| **02** | `problem` | **Strategic Context:** 4 Bottleneck Operasional (Trauma Cekat AI kurs basi 3 jam, monitoring 30 staf manual, ketakutan sistem puzzle terpecah, komunikasi breakdown antar-peran). |
| **03** | `architecture` | **Universal Fleek AI Hub:** Peta 3 Jalur Otomasi. Fleek AI sebagai Otak Pusat Orchestrator yang terhubung ke database ERP/HRIS apa pun (Vendor-Agnostic). |
| **04** | `hardware-matrix` | **Fingerprint Readiness Gate (Khusus Mas Yoel):** 3 Skenario hardware (Cloud IoT ADMS vs Desktop Local Bridge vs Mesin Jadul USB) + Buffer 100k log offline memory. |
| **05** | `demo-hris` | **🔥 LIVE DEMO 1:** Owner Command Portal & HRIS Live Monitoring (Fingerprint feed 30 staf, deteksi telat 2 & 7 menit, denda otomatis, dan status teller/kurir). |
| **06** | `demo-gatekeeper` | **🔥 LIVE DEMO 2:** WhatsApp Sales Gatekeeper (Cek kurs USD/SGD real-time <50ms, filter nominal, eskalasi instan ke 5 admin sales offline, Strict Non-Payment banner). |
| **07** | `strict-guardrail` | **Deep-Dive Governance: Strict Non-Payment & Anti-Fraud:** Pembuktian AI dilarang keras memvalidasi transfer uang/lunas demi mencegah kerugian seperti Cekat AI. |
| **08** | `security-gate` | **IT Security & Data Governance Gate (Khusus Mas Yoel):** Enkripsi AES-256 database, Dedicated VPS terisolasi, Zero-Training Data Gemini LLM, Role-Based Access Control (RBAC). |
| **09** | `commercial-quote` | **Quotation Beli Putus All-in-One (Rp 50 Jt) & OpEx Transparan:** DP 50% & Pelunasan 50%, simulasi biaya bulanan server & token, Threshold Guardrail 6–8 bubble. |
| **10** | `phase2-finance` | **Roadmap Fase 2: Accounting & Real-Time Forex Margin Sync:** Fondasi integrasi rekonsiliasi kasir teller harian dan spread margin valas otomatis. |
| **11** | `timeline` | **2,5 – 3 Bulan Engineering Roadmap:** Bulan 1 (Mgg 1–3) DB Core & Audit Hardware, Bulan 1.5 (Mgg 4–6) Fingerprint Bridge & Denda, Bulan 2 (Mgg 7–9) WA Gatekeeper & Anti-Fraud, Bulan 2.5–3 (Mgg 10–12) UAT On-Site, Digest & Go-Live. |
| **12** | `closing-cta` | **Next Steps & Technical Handshake:** 3 Langkah konkrit menuju Kickoff Sprint 1 bersama tim IT Pusat Money Changer. |

---

## ⚡ Peta 3 Jalur Operasional (The 3 Operational Highways)

```
[ MESIN FINGERPRINT ] ────────┐
(Hardware di Kantor)          │ 
                              ▼
[ WHATSAPP PELANGGAN ] ───► [ FLEEK AI HUB ] ◄─── [ OWNER BEACH DIGEST ]
(Chat Inbound & Leads)      (Otak Pusat Fleek)     (Pak Budi di Pantai)
                              │
                              ▼ REST API / Webhook
                      [ SANTRA ERP / DATABASE ]
                      (Tempat Penyimpanan Data)
```

1. **Jalur 1: Absensi & Karyawan (Internal Office):**
   - Staf scan sidik jari di mesin kantor.
   - Event dikirim instan via HTTPS POST ke **Fleek AI Hub**.
   - Fleek AI memvalidasi jadwal shift & ambang batas keterlambatan (+2 menit, +7 menit).
   - Fleek AI mencatat log denda ke database ERP dan otomatis mengirim WhatsApp notifikasi denda ke karyawan & grup HRD.
2. **Jalur 2: Customer & Kurs (Eksternal Sales):**
   - Nasabah mengirim chat via WhatsApp menanyakan kurs hari ini.
   - Fleek AI menarik kurs live detik itu juga dari database (<50ms response, zero delay).
   - Jika nominal transaksi besar (> Rp 50 Juta / valas setara), AI langsung mengeskalasi ke salah satu dari **5 Admin Sales Offline**.
   - AI **secara ketat dilarang** memvalidasi bukti pembayaran transfer/lunas.
3. **Jalur 3: Owner Executive Digest (Pak Budi di Pantai):**
   - Pukul **08:30 WIB**: Fleek AI mengirim *Morning Attendance Digest* (rekap 30 staf: siapa hadir, siapa telat menit berapa, siapa izin).
   - Pukul **17:30 WIB**: Fleek AI mengirim *Evening Forex Digest* (rekap omzet transaksi valas hari ini, sisa kas brankas, dan total denda keterlambatan).
   - Pak Budi dapat memantau seluruh operasional dari satu layar ponsel sambil minum kopi di pantai.

---

## 🔌 Posisi Fleek AI vs Santra ERP

- **Santra ERP adalah Partner ERP Database:**
  - Fitur dasbor admin, tabel karyawan, dan modul akuntansi sudah tersedia di platform Santra ERP yang dibayar secara langganan bulanan oleh klien ke pihak Santra.
- **Fleek Bertindak Sebagai Pembuat AI Engine (Beli Putus):**
  - Fleek tidak membangun ERP dari nol, melainkan membangun **Otak AI Cerdas** yang menjembatani mesin fingerprint dan WhatsApp ke database ERP.
- **Vendor-Agnostic (Universal):**
  - Terlepas klien menggunakan Santra ERP, Odoo, Accurate, atau Custom DB buatan Mas Yoel, selama memiliki **REST API / Webhook**, Fleek AI dapat dikoneksikan dengan lancar tanpa perlu rombak sistem.

---

## 🛠️ Matrix Kesiapan Mesin Fingerprint (Khusus Diskusi Mas Yoel)

| Skenario | Jenis Mesin | Metode Koneksi | Biaya Dev Fleek |
| :--- | :--- | :--- | :--- |
| **Skenario 1 (Ideal)** | Mesin IoT Cloud (ADMS / PUSH Protocol) | Mesin langsung menembak HTTPS POST Port 443 ke Fleek AI Webhook setiap ada scan jari. | **Rp 0** (Included dalam paket Rp 50 Jt) |
| **Skenario 2 (On-Prem)** | Mesin USB/LAN Lokal terhubung ke PC Kasir | Fleek memasang **Local Sync Agent (5 MB)** di PC kasir untuk memantau database lokal mesin dan forward ke cloud. | **Rp 0** (Included dalam paket Rp 50 Jt) |
| **Skenario 3 (Jadul)** | Mesin Standalone Offline (Tarik Flashdisk) | Mesin tidak memiliki jaringan internet/LAN sama sekali. | Rekomendasi Fleek: Klien mengadakan mesin IoT Cloud baru (~Rp 1,5 Jt – 2,5 Jt) agar otomasi 100% berjalan. |

> 🛡️ **Fail-Safe Offline Buffer:** Seluruh mesin fingerprint modern memiliki memori offline internal hingga 100.000 log. Jika Wi-Fi kantor terputus sementara, data presensi tersimpan aman di mesin dan otomatis tersinkronisasi saat internet kembali hidup. **Zero Data Loss**.

---

## 🎮 Panduan Presentasi Demo Interaktif (Playbook untuk Dimitri — Lead AI Engineer & Alif — AE)

### Skenario 1: Owner Command Portal & HRIS 30 Staf (Slide 05)
1. Buka Slide 05.
2. Klik tombol preset: **`⚠️ Simulasi Telat 2 & 7 Menit`**.
3. Arahkan perhatian Pak Budi:
   - Staf **Ahmad Fauzi (Teller)** scan jam 08:02 (telat 2 menit) ➔ Sistem otomatis mendenda **Rp 25.000**.
   - Staf **Rian Hidayat (Kurir)** scan jam 08:07 (telat 7 menit) ➔ Sistem otomatis mendenda **Rp 50.000**.
   - Kotak merah di kanan langsung menyala: notifikasi instan ter-push ke WhatsApp PIC HRD dan tercatat di database ERP.
4. Klik tombol preset: **`🏖️ Mode Santai di Pantai`**.
5. Sampaikan pitching keypoint:
   > *"Pak Budi, inilah impian Bapak yang tercapai: secangkir kopi di meja, laptop di depan, memantau 30 karyawan dari satu layar saat santai di pantai. Bapak tidak perlu lagi repot menelepon staf satu per satu."*

---

### Skenario 2: WhatsApp Gatekeeper & Anti-Trauma Cekat AI (Slide 06 ⭐)
1. Buka Slide 06.
2. Klik tombol preset: **`💵 Tanya Kurs USD ($100)`**.
   - AI langsung membalas dalam 2 detik dengan kurs live detik itu (misal USD 15.680 / 15.750).
   - Tekankan ke Pak Budi:
     > *"Kurs langsung ditarik dari database saat itu juga. Nol delay, tidak akan pernah ada respon telat 3 jam dengan harga pasar basi yang merugikan bisnis Bapak seperti pengalaman buruk sebelumnya."*
3. Klik tombol preset: **`🤝 Tukar SGD 5,000 (Eskalasi Sales)`**.
   - Nominal besar (> Rp 50 Juta) otomatis dialihkan ke **Mas Budianto (1 dari 5 Admin Sales Offline)** untuk negosiasi fisik di counter kantor.
4. Klik tombol preset: **`🚫 Kirim Bukti Transfer (Test Cekat)`** — **THE SHOWSTOPPER**.
   - Simulasi nasabah mengirim struk transfer palsu: *"Min saya sudah transfer DP Rp 5.000.000, tolong validasi lunas ya."*
   - AI dengan tegas menolak memvalidasi lunas secara otomatis. Struk langsung diforward ke WhatsApp Tim Finance Manusia untuk dicocokkan dengan mutasi rekening bank resmi.
   - Kotak merah *Strict Non-Payment Guardrail* menyala di layar kanan.
   - Sampaikan ke Pak Budi & Mas Yoel:
     > *"Pak Budi dan Mas Yoel, celah penipuan yang dulu terjadi di Cekat AI kami kunci mati dengan SOP ini. Uang dan mutasi bank adalah ranah suci yang wajib diverifikasi manusia."*

---

## 💰 Struktur Komersial & Transparansi Biaya (Slide 09)

- **Investasi Pengembangan Fleek AI Core (One-Time Setup):** **Rp 50.000.000,- (Beli Putus)**.
  - **Termin 1 (DP 50% Kickoff):** Rp 25.000.000,-
  - **Termin 2 (Pelunasan 50% Pasca UAT & Live):** Rp 25.000.000,-
  - **Hak Kepemilikan:** Seluruh source code & custom logic menjadi milik Pusat Money Changer (Bebas royalti agensi bulanan).
- **Langganan Santra ERP (Partner Database):** **Mulai dari Rp 300.000 / bulan** (Paket Basic / Global, langsung langganan ke Santra).
- **OpEx Pihak Ketiga (Pass-Through Transparan Tanpa Markup):**
  - **Santra ERP Database:** Mulai Rp 300.000 / bulan (Tier Basic / Global).
  - **Cloud VPS Dedicated:** ~Rp 150.000 / bulan (Server mandiri terisolasi uptime 24/7).
  - **Token AI NLU (Gemini API):** ~Rp 220.000 – Rp 450.000 / bulan (tergantung volume 1.000–2.500 chat).
  - **WhatsApp API Gateway:** Rp 0 (Self-hosted, tanpa biaya per-pesan Meta).
  - **Estimasi Total Running Cost:** **~Rp 670.000 – Rp 900.000 / bulan** (All-in ERP + AI + Server).
  - **Cost Protection:** Guardrail 6–8 bubble per sesi chat untuk mencegah pemborosan token.

---

## 🛡️ Jawaban Taktis untuk Mas Yoel (IT Partner)

| Pertanyaan Mas Yoel | Jawaban Teknis Fleek |
| :--- | :--- |
| **"Framework apa yang dipakai, aman atau tidak?"** | Backend inti menggunakan arsitektur Node.js/Python terisolasi dengan enkripsi **AES-256** dan TLS 1.3. Akses API dilindungi oleh Bearer Token JWT dan Role-Based Access Control (RBAC) ketat. |
| **"Apakah data sensitif transaksi money changer dipakai buat training model AI?"** | **Sama sekali tidak.** Kami menggunakan Gemini Enterprise API dengan klausul zero-data retention untuk model publik. Data operasional dan finansial dilindungi perjanjian kerahasiaan resmi (NDA). |
| **"Pembayaran token dibayar sendiri atau lewat Fleek?"** | Kami memberikan transparansi penuh (pass-through). Klien membuat akun billing mandiri ke penyedia cloud/API, dan tim Fleek memberikan panduan teknis serta memasang budget-cap agar tidak boncos. |
| **"Bagaimana jika mesin fingerprint kami offline saat internet mati?"** | Mesin menyimpan hingga 100.000 rekaman log secara lokal. Saat koneksi pulih, Fleek AI secara otomatis melakukan delta-sync tanpa ada data keterlambatan yang hilang. |

---

## 🚀 Panduan Deployment ke Vercel (1 Menit)

1. Buka Terminal di direktori proyek:
   ```bash
   cd "/Users/haimac/Dimitri Ahmad/Fleek/Client - Pusat Money Changer"
   ```
2. Jalankan perintah deploy:
   ```bash
   npx vercel
   ```
3. Tekan `Y` untuk menyetujui, dan pilih opsi default untuk deploy.
4. Buka URL yang dihasilkan Vercel di browser saat meeting bersama Pak Budi & Mas Yoel.

---

*Confidential — PT Fleek Group Indonesia — Fleek Project*
