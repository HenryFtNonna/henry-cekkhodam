// src/data/khodam.ts
export interface Khodam {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const khodamList: Khodam[] = [
  { id: 1, name: "Naga Indosiar", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Naga+Indosiar", description: "Suka muter-muter di langit sambil bawa efek CGI tahun 2000an." },
  { id: 2, name: "Macan Cisewu", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Macan+Cisewu", description: "Senyumnya manis, tapi bikin musuh ketawa sampai kram perut." },
  { id: 3, name: "Knalpot Mio Mber", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Mio+Mber", description: "Suaranya memekakkan telinga, spesialis membangunkan warga jam 2 pagi." },
  { id: 4, name: "Rice Cooker Cosmos", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Rice+Cooker", description: "Bisa menghangatkan suasana, tapi kalau lupa dicabut bikin nasi jadi kerak kuning." },
  { id: 5, name: "Sendal Swallow Putus", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Sendal+Swallow", description: "Selalu setia menemani ke masjid, tapi rawan ditukar pas jumatan." },
  { id: 6, name: "Tutup Tupperware Hilang", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Tutup+Tupperware", description: "Bikin emak ngamuk 7 hari 7 malam. Aura ancamannya sangat kuat." },
  { id: 7, name: "Kipas Angin Berdebu", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kipas+Berdebu", description: "Muternya pelan, bunyinya ngik-ngik, anginnya nggak ada." },
  { id: 8, name: "Jin Qorin FYP Tiktok", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Jin+FYP", description: "Suka ngajak joget pargoy jam 3 pagi di depan kaca." },
  { id: 9, name: "Lele Dumbo Bunting", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Lele+Dumbo", description: "Lincah di air keruh, licin banget susah ditangkap." },
  { id: 10, name: "Kucing Oren Bar-bar", image: "https://dummyimage.com/400x250/1a1a1a/a1882d&text=Kucing+Oren", description: "Nggak takut Tuhan, berani ngajak ribut anjing pitbull tetangga." },
  // Lanjutkan sampai 100 ya!
];