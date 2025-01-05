document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  // Menutup navbar saat link diklik (opsional)
  navbar.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      navbar.classList.remove("active");
    }
  });

  // Smooth scroll untuk link navbar
  document.querySelectorAll(".navbar a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

const texts = [
  "Machine Learning Engineer",
  "AI Engineer",
  "Web Developer",
  "Data Scientist",
  "Software Engineer",
  "Mobile Developer",
];
const typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // Mengetik teks
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      // Setelah selesai mengetik, tunggu sebentar lalu mulai menghapus
      isDeleting = true;
      setTimeout(type, 1000); // Jeda sebelum menghapus
    } else {
      setTimeout(type, 100); // Kecepatan mengetik
    }
  } else {
    // Menghapus teks
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      // Setelah selesai menghapus, lanjut ke teks berikutnya
      isDeleting = false;
      textIndex++;

      if (textIndex === texts.length) {
        // Jika sudah sampai akhir array, kembali ke awal
        textIndex = 0;
      }

      setTimeout(type, 500); // Jeda sebelum mengetik teks berikutnya
    } else {
      setTimeout(type, 50); // Kecepatan menghapus
    }
  }
}

// Mulai efek ketikan
type();

function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Menutup modal saat mengklik di luar gambar
window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Fungsi untuk menampilkan foto tambahan
function showMore() {
  const hiddenItems = document.querySelectorAll(".gallery-item.hidden");
  hiddenItems.forEach((item) => {
    item.classList.remove("hidden");
  });
  document.querySelector(".btn.view-more").style.display = "none"; // Sembunyikan tombol setelah diklik
}

document.addEventListener("DOMContentLoaded", function () {
  const moreBtn = document.getElementById("more-btn");
  const backBtn = document.getElementById("back-btn");
  const certificationCards = document.querySelectorAll(".certification-card");

  moreBtn.addEventListener("click", function () {
    certificationCards.forEach((card) => {
      card.classList.remove("hidden");
    });
    moreBtn.classList.add("hidden");
    backBtn.classList.remove("hidden");
  });

  backBtn.addEventListener("click", function () {
    certificationCards.forEach((card, index) => {
      if (index >= 3) {
        card.classList.add("hidden");
      }
    });
    moreBtn.classList.remove("hidden");
    backBtn.classList.add("hidden");
  });
});

// JavaScript untuk menangani modal
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua gambar sertifikat
  const certificateImages = document.querySelectorAll(".certificate-img");
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  // Tambahkan event listener untuk setiap gambar
  certificateImages.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  // Tutup modal ketika tombol close diklik
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Tutup modal ketika area di luar gambar diklik
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
