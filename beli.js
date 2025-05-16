document.addEventListener('DOMContentLoaded', function () {
  const tambahButtons = document.querySelectorAll('.btn-tambah');
  const beliButtons = document.querySelectorAll('.btn-beli');

  function tambahKeKeranjang(nama, harga) {
    let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];

    // Cek apakah produk sudah ada di keranjang
    const existing = keranjang.find(item => item.nama === nama);
    if (existing) {
      existing.qty += 1;
    } else {
      keranjang.push({ nama, harga: parseInt(harga), qty: 1 });
    }

    localStorage.setItem('keranjang', JSON.stringify(keranjang));
    updateNotifKeranjang(); // update angka notifikasi
  }

  tambahButtons.forEach(button => {
    button.addEventListener('click', function () {
      const nama = this.getAttribute('data-nama');
      const harga = this.getAttribute('data-harga');
      tambahKeKeranjang(nama, harga);
      alert(`${nama} ditambahkan ke keranjang.`);
    });
  });

  beliButtons.forEach(button => {
    button.addEventListener('click', function () {
      const nama = this.getAttribute('data-nama');
      const harga = this.getAttribute('data-harga');
      tambahKeKeranjang(nama, harga);
      window.location.href = 'keranjang.html';
    });
  });

  // Notifikasi angka jumlah keranjang
  function updateNotifKeranjang() {
    const icon = document.getElementById('keranjang-count');
    const keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
    const totalQty = keranjang.reduce((sum, item) => sum + item.qty, 0);
    icon.textContent = totalQty;
  }

  updateNotifKeranjang(); // inisialisasi saat halaman dibuka
});
