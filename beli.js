function updateKeranjangCount() {
    const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    document.getElementById("keranjang-count").textContent = keranjang.length;
  }

  function tambahKeKeranjang(nama, harga) {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  const index = keranjang.findIndex(item => item.nama === nama);

  if (index > -1) {
    keranjang[index].quantity += 1;
  } else {
    keranjang.push({ nama, harga, quantity: 1 });
  }

  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  updateKeranjangCount();
  alert(`${nama} berhasil ditambahkan ke keranjang.`);
}


  document.querySelectorAll(".btn-tambah").forEach(button_tambah => {
    button_tambah.addEventListener("click", function () {
      const nama = this.getAttribute("data-nama");
      const harga = parseInt(this.getAttribute("data-harga"));
      tambahKeKeranjang(nama, harga);
    });
  });

  document.querySelectorAll(".btn-beli").forEach(button_beli => {
    button_beli.addEventListener("click", function () {
      const nama = this.getAttribute("data-nama");
      const harga = parseInt(this.getAttribute("data-harga"));
      tambahKeKeranjang(nama, harga);
      window.location.href = "keranjang.html";
    });
  });

  // Update keranjang saat halaman dimuat
  updateKeranjangCount();