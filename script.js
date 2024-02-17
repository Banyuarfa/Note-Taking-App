const addDoneButton = document.querySelector("footer #done");
const addNoteButton = document.querySelector("footer #add");
const main = document.querySelector("main");

// Buat variabel yang mengambil datas. Jika datas kosong, buat sebuah array yang menyimpan tiap data
let noteList = JSON.parse(localStorage.getItem("notes") || "[]");

// Menambahkan note
function addNote() {
    const createArticle = document.createElement("article");
    createArticle.innerHTML = `
      <p class='text' contenteditable="true"></p>
      <p class='tanggal'>Tanggal :</p>
      `;
    main.appendChild(createArticle)
}
// Menyimpan Data ke local storage
function saveNote(e) {
  let waktu = new Date();

  const data = {
    tanggal: waktu.getSeconds(),
    noteText: main.lastElementChild.firstElementChild.textContent,
  };
  // Masukkan data ke variabel local storage
  noteList.push(data);
  // Kirim data ke local storage dari data yang disimpan di variabel
  localStorage.setItem("notes", JSON.stringify(noteList));
  console.log(noteList);
}

// Memunculkan data di tampilan
(function displayNote() {
  noteList.forEach((note) => {
    const createArticle = document.createElement("article");
    createArticle.innerHTML = `
      <p class='text' contenteditable="true">${note.noteText}</p>
      <p class='tanggal'>Tanggal : ${note.tanggal}</p>
      `;
    main.appendChild(createArticle)
  }
)})();

addDoneButton.addEventListener("click", saveNote);
addNoteButton.addEventListener("click", addNote);
