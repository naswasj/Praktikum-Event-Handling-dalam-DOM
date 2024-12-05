const changeButton = document.getElementById("changeButton");
const inputField = document.getElementById("inputField");
const daftar = document.getElementById("ul");

// tambahkan event listener untuk tombol
changeButton.addEventListener("click", function () {
  // ambil nilai dari input field
  const newItem = inputField.value;

  // cek apakah input kosong
  if (newItem.trim() === "") {
    alert("Masukan nama organisasi");
    return; // hentikan eksekusi jika input kosong
  }

  // membuat dan menambahkan daftar baru
  const newListItem = document.createElement("li");
  newListItem.textContent = newItem;
  daftar.appendChild(newListItem);

  // bersikan input field
  inputField.value = "";
});
