function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
  }

  function tampilkanKeranjang() {
    const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    const container = document.getElementById("daftar-keranjang");
    const totalElement = document.getElementById("total-harga");
    container.innerHTML = "";
    let total = 0;

    keranjang.forEach((item, index) => {
      const subtotal = item.harga * item.quantity;
      total += subtotal;

      const itemElement = document.createElement("div");
      itemElement.className = "item-keranjang";
      itemElement.innerHTML = `
        ${item.nama} - ${formatRupiah(item.harga)} x ${item.quantity} = ${formatRupiah(subtotal)}
        <button onclick="hapusItem(${index})">Hapus</button>
      `;

      container.appendChild(itemElement);
    });

    totalElement.textContent = formatRupiah(total);
  }

  function hapusItem(index) {
    const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    keranjang.splice(index, 1);
    localStorage.setItem("keranjang", JSON.stringify(keranjang));
    tampilkanKeranjang();
  }

  tampilkanKeranjang();
  