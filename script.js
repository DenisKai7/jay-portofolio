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

// Certifications Section - More Button Functionality
document.addEventListener("DOMContentLoaded", function () {
  const moreBtn = document.getElementById("more-btn");
  const certificationsGrid = document.querySelector(".certifications-grid");

  // Additional certifications data
  const additionalCertifications = [
    {
      img: "images/python-logo.png",
      title: "Python Programming",
      issuer: "Python Institute",
      description: "Advanced Python programming certification",
    },
    {
      img: "images/docker-logo.png",
      title: "Docker Essentials",
      issuer: "Docker Inc.",
      description: "Containerization and Docker fundamentals",
    },
    {
      img: "images/aws-logo.png",
      title: "AWS Certified",
      issuer: "Amazon Web Services",
      description: "Cloud computing and AWS services",
    },
  ];

  moreBtn.addEventListener("click", function () {
    // Add additional certifications
    additionalCertifications.forEach((cert) => {
      const card = document.createElement("div");
      card.className = "certification-card";

      card.innerHTML = `
        <img src="${cert.img}" alt="${cert.title}">
        <div class="certification-info">
          <h3>${cert.title}</h3>
          <h4>${cert.issuer}</h4>
          <p>${cert.description}</p>
        </div>
      `;

      certificationsGrid.appendChild(card);
    });

    // Hide the more button after showing all certifications
    moreBtn.style.display = "none";
  });
});
