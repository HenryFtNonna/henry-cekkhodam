// src/data/khodam.ts
export interface Khodam {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const khodamList: Khodam[] = [
  // KATEGORI: LEGEND & MEME KLASIK (1-10)
  { id: 1, name: "Naga Indosiar", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Naga+Indosiar", description: "Suka muter-muter di langit bawa efek CGI tahun 2000-an." },
  { id: 2, name: "Macan Cisewu", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Macan+Cisewu", description: "Senyumnya manis, tapi bikin musuh ketawa sampai kram perut." },
  { id: 3, name: "Knalpot Mio Mber", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Mio+Mber", description: "Suaranya memekakkan telinga, spesialis membangunkan warga jam 2 pagi." },
  { id: 4, name: "Rice Cooker Cosmos", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Rice+Cooker", description: "Bisa menghangatkan suasana, tapi kalau lupa dicabut bikin nasi jadi kerak." },
  { id: 5, name: "Sendal Swallow Putus", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Sendal+Swallow", description: "Selalu setia menemani ke masjid, tapi rawan ditukar pas jumatan." },
  { id: 6, name: "Tutup Tupperware", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Tutup+Tupperware", description: "Aura ancamannya kuat. Kalau hilang bikin emak ngamuk 7 hari." },
  { id: 7, name: "Kipas Angin Berdebu", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kipas+Berdebu", description: "Muternya pelan, bunyinya ngik-ngik, anginnya cuma mitos." },
  { id: 8, name: "Jin Qorin FYP", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Jin+FYP", description: "Suka ngajak joget pargoy jam 3 pagi di depan kaca." },
  { id: 9, name: "Lele Dumbo Bunting", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Lele+Dumbo", description: "Lincah di air keruh, licin banget susah ditangkap masa lalu." },
  { id: 10, name: "Kucing Oren Bar-bar", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kucing+Oren", description: "Nggak takut Tuhan, berani ngajak ribut anjing pitbull tetangga." },

  // KATEGORI: VIBE JOMOK & ABSURD MALE (11-20)
  { id: 11, name: "Sabun Bolong Tengah", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Sabun+Bolong", description: "Sisa peninggalan anak kosan cowok. Aura mistisnya sangat kental." },
  { id: 12, name: "Mas-Mas Gym Handuk Pink", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Mas+Gym", description: "Suka senyum-senyum ke cowok lain sambil pamer otot dada. Bikin salah tingkah." },
  { id: 13, name: "Pria Eksotis Menangis", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Pria+Eksotis", description: "Khodam yang selalu melankolis, sering teriak 'Oh Tuhanku' tanpa alasan jelas." },
  { id: 14, name: "Kuli Jawa Mandi Keringat", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kuli+Jawa", description: "Membawa aura pekerja keras, pesonanya bikin bapak-bapak proyek terpana." },
  { id: 15, name: "Sempak Firaun", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Sempak+Firaun", description: "Udah melar kendor kemana-mana, tapi tetep dipake karena 'nyaman'." },
  { id: 16, name: "Bocil Epep Minta Alok", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Bocil+Epep", description: "Energi toxic-nya luar biasa, suka kayang sambil teriak 'Bang, gift Alok'." },
  { id: 17, name: "Sarung Wadimor Melorot", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Sarung+Wadimor", description: "Rawan bikin malu di tempat umum. Sering dipakai ronda bapak-bapak." },
  { id: 18, name: "Admin Slot Gacor", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Admin+Slot", description: "Membisikkan janji manis Maxwin, padahal bikin rungkad tiap malam." },
  { id: 19, name: "Jamet Kuproy Rambut Merah", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Jamet+Kuproy", description: "Style ngabers sejati. Nafasnya bau teh gelas dan gudang garam filter." },
  { id: 20, name: "Kang Parkir Ghaib", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kang+Parkir", description: "Pas datang nggak ada, pas mau mundur tiba-tiba tiup peluit di belakang kuping." },

  // KATEGORI: HANTU/MISTIS TAPI LAWAK (21-30)
  { id: 21, name: "Tuyul Kesandung", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Tuyul+Kesandung", description: "Niatnya mau nyuri duit di dompet, malah benjol kena kaki meja." },
  { id: 22, name: "Pocong Lompat Tali", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Pocong+Lompat", description: "Suka berolahraga malam hari biar kain kafannya agak longgar." },
  { id: 23, name: "Kuntilanak Keseleo", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kunti+Keseleo", description: "Kebanyakan nongkrong di pohon beringin, turun-turun encok kumat." },
  { id: 24, name: "Genderuwo Takut Istri", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Genderuwo+T.I", description: "Badan gede berbulu, tapi disuruh nyuci piring sama bininya nurut." },
  { id: 25, name: "Babi Ngepet Kurang Gizi", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Babi+Ngepet", description: "Sering gagal operasi karena lilinnya ditiup bocil yang lagi main." },
  { id: 26, name: "Sundel Bolong Hansaplast", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Sundel+Bolong", description: "Punggungnya bolong tapi ditambal pakai koyo cabe biar anget." },
  { id: 27, name: "Kolong Wewe Insomnia", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kolong+Wewe", description: "Jam 3 pagi bukannya nyulik anak malah ngerokok sambil ngopi di pos ronda." },
  { id: 28, name: "Jin Tomang Diet Keto", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Jin+Tomang", description: "Lagi pusing gara-gara disuruh defisit kalori sama dukunnya." },
  { id: 29, name: "Siluman Buaya Darat", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Buaya+Darat", description: "Suka ngomong 'aku cuma chat sama kamu doang kok' tiap malam Jumat." },
  { id: 30, name: "Jelangkung Gabut", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Jelangkung", description: "Datang tak dijemput, pulang mesen GoRide sendiri." },

  // KATEGORI: MAKANAN & MINUMAN TRAGIS (31-40)
  { id: 31, name: "Es Teh Plastik Karet 2", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Es+Teh+Plastik", description: "Manisnya di awal, pas esnya cair rasanya hambar kayak chat dari dia." },
  { id: 32, name: "Seblak Ceker Level 10", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Seblak+Ceker", description: "Bikin lambung bergetar hebat. Besok paginya dijamin langganan WC." },
  { id: 33, name: "Gorengan Sisa Semalam", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Gorengan+Alot", description: "Alot banget, digigit malah gigi lu yang maju." },
  { id: 34, name: "Sate Usus Keras Banting", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Sate+Usus", description: "Bisa dipakai jadi cambuk buat nangkis serangan sajam." },
  { id: 35, name: "Kopi Saset Kadaluarsa", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kopi+Saset", description: "Bikin melek sih, tapi meleknya di ruang IGD." },
  { id: 36, name: "Nasi Padang Karet Dua", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Nasi+Padang", description: "Porsinya brutal, bumbu rendangnya tumpah meruah bikin kalap." },
  { id: 37, name: "Indomie Rebus Pake Es", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Indomie+Es", description: "Sekte sesat, penunggunya punya mental psychopat." },
  { id: 38, name: "Tempe Orek Keras", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Tempe+Orek", description: "Mampu memecahkan piring kalau dilempar dari jarak dekat." },
  { id: 39, name: "Es Batu Teh Manis", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Es+Batu", description: "Esnya 90%, tehnya 10%. Sekali sedot langsung habis." },
  { id: 40, name: "Sambal Terasi Seminggu", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Sambal+Terasi", description: "Warnanya udah agak hitam, baunya nempel di tangan sampai besok lusa." },

  // KATEGORI: BARANG ELEKTRONIK/IT (41-50)
  { id: 41, name: "Charger Oppo Putus", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Charger+Putus", description: "Harus dililit karet dan ditekuk 45 derajat biar bisa ngecas." },
  { id: 42, name: "Headset Mati Sebelah", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Headset+Mati", description: "Cuma telinga kanan yang denger musik, telinga kiri denger ghibah tetangga." },
  { id: 43, name: "Powerbank Kembung", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Powerbank", description: "Bentuknya kayak bantal. Setengah jalan menuju bom waktu." },
  { id: 44, name: "Mouse Warnet Lengket", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Mouse+Warnet", description: "Bekas tangan jutaan orang yang habis makan chitato. Digeser berat." },
  { id: 45, name: "Keyboard Tombol WASD Copot", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Keyboard+WASD", description: "Bukti nyata dari user yang selalu main ngegas terus." },
  { id: 46, name: "Flashdisk Isi Virus Shortcut", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Virus+Shortcut", description: "Nyolok ke laptop langsung bikin semua file skripsi jadi .lnk." },
  { id: 47, name: "Kipas Laptop Berisik", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kipas+Laptop", description: "Suaranya kayak mesin jet pesawat tempur yang mau lepas landas." },
  { id: 48, name: "Server Down Jam 12 Malam", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Server+Down", description: "Datang membawa bencana bagi para programmer yang mau tidur." },
  { id: 49, name: "CSS Gak Rata Tengah", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=CSS+Error", description: "Bikin frontend developer nangis darah nyari bugnya di mana." },
  { id: 50, name: "WiFi Indihome RTO", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=WiFi+RTO", description: "Selalu ngelag pas momen krusial lagi war atau push rank." },

  // KATEGORI: HEWAN KEBUN & LIAR (51-60)
  { id: 51, name: "Kecoa Terbang Ke Muka", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kecoa+Terbang", description: "Alpha predator di kamar mandi. Kalau udah ngepak sayap, semua bubar." },
  { id: 52, name: "Nyamuk Kebon Bising", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Nyamuk+Kebon", description: "Ukurannya segede gaban, gigitannya nembus celana jeans." },
  { id: 53, name: "Cicak Jatuh ke Kopi", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Cicak+Jatuh", description: "Niatnya merayap di plafon, malah jadi topping tambahan minuman lu." },
  { id: 54, name: "Entok Galak Nyosor", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Entok+Galak", description: "Menjaga teritorial gang komplek lebih ketat daripada satpam." },
  { id: 55, name: "Tikus Got Raksasa", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Tikus+Got", description: "Ukurannya nyamain kucing. Kucingnya malah yang lari ketakutan." },
  { id: 56, name: "Burung Dara Lepas", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Burung+Dara", description: "Bikin bapak-bapak pecinta burung teriak-teriak bawa galah bambu." },
  { id: 57, name: "Ulat Bulu Nyasar", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Ulat+Bulu", description: "Tiba-tiba ada di leher bajumu, bikin gatel dan parno seharian." },
  { id: 58, name: "Kambing Makan Spanduk", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kambing+Liar", description: "Apapun yang berbentuk kertas dan plastik di pinggir jalan bakal disikat." },
  { id: 59, name: "Sapi Kurban Nangis", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Sapi+Kurban", description: "Membawa aura kesedihan mendalam menjelang hari raya." },
  { id: 60, name: "Lalat Hijau Pasar", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Lalat+Hijau", description: "Ngapung muter-muter di atas kepala, susah diusir pakai tangan kosong." },

  // KATEGORI: KELAKUAN WARGA (61-70)
  { id: 61, name: "Emak-Emak Sein Kiri Belok Kanan", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Emak+Sein", description: "Penguasa jalanan sesungguhnya. Hukum fisika dan lalu lintas gak berlaku." },
  { id: 62, name: "Bapak-Bapak WA Group", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Bapak+WA", description: "Hobi sebar hoax dan gambar secangkir kopi bertuliskan 'Selamat Pagi'." },
  { id: 63, name: "Kang Paket Nyasar", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kang+Paket", description: "Teriak 'PAKEEET' pas lu lagi di kamar mandi. Bikin panik." },
  { id: 64, name: "Wibu Rohis", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Wibu+Rohis", description: "Suka nonton anime harem tapi tetap rajin ngingetin sholat di story IG." },
  { id: 65, name: "Debt Collector Pinjol", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=DC+Pinjol", description: "Aura nagih hutangnya tembus sampai ke nomor darurat kontak lu." },
  { id: 66, name: "Kang Bakso Bawa HT", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Intel+Bakso", description: "Tatapan matanya tajam, harga baksonya murah, tapi sering lirik-lirik rumah lu." },
  { id: 67, name: "Pemuda Pancasila Hajatan", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Pemuda+Hajatan", description: "Selalu hadir di setiap tenda hajatan dan pengatur lalu lintas jalan." },
  { id: 68, name: "Tukang Galon Berotot", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Tukang+Galon", description: "Sekali angkat galon 3 biji sekaligus. Bikin mbak-mbak kosan terpesona." },
  { id: 69, name: "Gadis SCBD Lanyard Coach", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Gadis+SCBD", description: "Ngapain-ngapain harus bawa kopi Starbucks dan lanyard mentereng." },
  { id: 70, name: "Kang Fotokopi Ngegas", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kang+Fotokopi", description: "'GAK BISA NGE-PRINT PDF MAS, FLASH DISK-NYA ERROR!' - Setiap hari." },

  // KATEGORI: BARANG ANAK KOS & SEKOLAH (71-80)
  { id: 71, name: "Pulpen Sarasa Hilang", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Pulpen+Hilang", description: "Baru beli pagi, siang dipinjem temen, sore udah beda alam." },
  { id: 72, name: "Tipe-X Kering", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Tipe-X+Kering", description: "Udah dikocok sekuat tenaga tetap aja isinya gak keluar." },
  { id: 73, name: "Penghapus Keras Batu", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Penghapus+Batu", description: "Bukannya ngehapus tulisan, malah bikin kertas bukunya robek." },
  { id: 74, name: "Penggaris Besi Bengkok", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Penggaris+Besi", description: "Senjata tawuran andalan anak STM pada masanya." },
  { id: 75, name: "Kaos Kaki Bau Asem", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kaos+Kaki", description: "Udah seminggu gak dicuci, baunya bisa melumpuhkan indra penciuman." },
  { id: 76, name: "Sepatu Warrior Jebol", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Sepatu+Jebol", description: "Bawahnya udah rata, dipakai pas hujan auto kepleset di keramik." },
  { id: 77, name: "Tas Ransel Putus Tali", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Tas+Putus", description: "Diikat pakai tali rafia biar tetep bisa digendong bawa buku paket." },
  { id: 78, name: "Buku Tulis Lecek Berair", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Buku+Lecek", description: "Ketumpahan es teh di dalam tas, halamannya jadi keriting nyatu semua." },
  { id: 79, name: "Jas Hujan Kalong", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Jas+Hujan", description: "Kibasannya ke belakang sering nyangkut di stang motor orang lain." },
  { id: 80, name: "Helm Bogo Kaca Gelap", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Helm+Bogo", description: "Dipakai malam hari serasa orang buta. Rawan masuk selokan." },

  // KATEGORI: RANDOM ABSURD BIKIN EMOSI (81-90)
  { id: 81, name: "Struk Belanja Panjang", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Struk+Panjang", description: "Cuma beli permen satu, struknya sepanjang daftar dosa lu." },
  { id: 82, name: "Kembalian Permen Kopiko", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Permen+Kopiko", description: "Alasan klasik kasir minimarket kalau lagi gak ada duit koin gopekan." },
  { id: 83, name: "Pintu Alfamart Otomatis", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Pintu+Alfamart", description: "Terkadang cuma ngucapin 'Selamat Datang' ke angin." },
  { id: 84, name: "Gas Melon Bocor", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Gas+Melon", description: "Baunya bikin seisi rumah jantungan dan sibuk buka semua jendela." },
  { id: 85, name: "Karet Gelang Nasi Padang", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Karet+Nasi", description: "Kalau dilepas pelan-pelan tetep aja muncratin bumbu gulai ke baju." },
  { id: 86, name: "Tusuk Gigi Bekas", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Tusuk+Gigi", description: "Nempel di meja warteg, menatap lu dengan penuh kengerian." },
  { id: 87, name: "Sedotan Aqua Gelas Jebol", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Sedotan+Jebol", description: "Tusukannya mleyot terus, ujung-ujungnya harus disobek pakai jari." },
  { id: 88, name: "Plastik Kresek Hitam", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kresek+Hitam", description: "Serbaguna. Bisa buat bungkus gorengan, bisa juga buat bungkus aib." },
  { id: 89, name: "Uang Kembalian Lecek", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Uang+Lecek", description: "Kondisinya udah diisolasi setengah, ditolak sama tukang bensin eceran." },
  { id: 90, name: "Spion Jupiter Z Muter", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Spion+Muter", description: "Tiap kena poldur atau jalan berlubang spionnya auto ngadep ke muka lu." },

  // KATEGORI: SPESIAL / CAMPUR (91-100)
  { id: 91, name: "Speaker Aktif Hajatan", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Speaker+Hajatan", description: "Bass-nya bikin jantung getar dan kaca jendela rumah retak halus." },
  { id: 92, name: "Kursi Plastik Kondangan", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kursi+Plastik", description: "Kaki kursinya udah mau patah, kalau didudukin orang berat auto nyungsep." },
  { id: 93, name: "Tenda Biru Terbang", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Tenda+Biru", description: "Muncul tiap ada hajatan, rawan terbang kalau kena angin puting beliung." },
  { id: 94, name: "Skripsi Revisi Ke-10", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Revisi+Skripsi", description: "Menghisap energi kehidupan, bikin kantung mata sehitam aspal." },
  { id: 95, name: "Dosen Pembimbing Menghilang", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Dosen+Menghilang", description: "Punya jurus teleportasi. Bilangnya di kampus, tau-tau udah di luar kota." },
  { id: 96, name: "Gergaji Mesin Tukang Kayu", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Gergaji+Mesin", description: "Suaranya tretetet, suka mengganggu ketenangan tidur siang hari minggu." },
  { id: 97, name: "Kabel Data Nyetrum", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kabel+Nyetrum", description: "Ujung kabelnya ngelupas, ngasih kejutan listrik kecil buat lu." },
  { id: 98, name: "Rem Cakram Blong", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Rem+Blong", description: "Ngasih adrenalin tingkat dewa tiap ngelewatin turunan tajam pegunungan." },
  { id: 99, name: "Gembok Pagar Macet", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Gembok+Macet", description: "Harus dipukul-pukul pakai batu dulu atau dikasih minyak goreng baru bisa kebuka." },
  
  // KHODAM SPESIAL (100) - Sesuai request Screenshot
  { id: 100, name: "Raja Terakhir", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Raja+Terakhir", description: "Khodam paling elit, penguasa dari segala khodam gaib. Cuma yang beruntung yang dapat ini." }
];