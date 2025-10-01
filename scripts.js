
let judul = document.getElementById("judulUtama");

judul.textContent = "Seleksi ID Berhasil";


let daftarProduk = Array.from(document.getElementsByClassName("item-produk"));
daftarProduk.forEach(p => {
  p.classList.add("tebal-banget"); 
  p.textContent = "[UPDATED] " + p.textContent; 
});

let statusBox = document.querySelector('[data-status="pending"]');
if (statusBox) {
  statusBox.style.backgroundColor = "khaki"; 
}

let semuaList = document.querySelectorAll("ul li");
semuaList.forEach(li => {
  li.innerHTML = "<span>Konten Baru dari JS</span>"; 
});
