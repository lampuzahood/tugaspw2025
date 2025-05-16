document.addEventListener('DOMContentLoaded', function () {
  const keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  const container = document.getElementById('daftar-keranjang');
  const totalEl = document.getElementById('total-harga');

  let total = 0;

  if (keranjang.length === 0) {
    container.innerHTML = "<p>Keranjang kamu kosong.</p>";
  } else {
    keranjang.forEach((item, index) => {
      const itemEl = document.createElement('div');
      itemEl.innerHTML = `
        <p>
          ${item.nama} - Rp ${item.harga.toLocaleString()} x ${item.qty} = Rp ${(item.harga * item.qty).toLocaleString()}
          <button onclick="hapusItem(${index})">Hapus</button>
        </p>
      `;
      container.appendChild(itemEl);
      total += item.harga * item.qty;
    });
  }

  totalEl.textContent = "Rp " + total.toLocaleString();
});

function hapusItem(index) {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  keranjang.splice(index, 1);
  localStorage.setItem('keranjang', JSON.stringify(keranjang));
  location.reload();
}

function checkout() {
  alert('Terima kasih! Pesanan kamu sedang diproses...');
  localStorage.removeItem('keranjang');
  location.reload();
}
