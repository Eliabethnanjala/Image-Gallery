
  // Replace this array with your own images: { src, caption }
  const images = [
    { src: "pexels-mohamed-b-2151113020-31624452.jpg", caption: "nature" },
    { src: "pexels-abdullahguch-30341994.jpg", caption: "Travel" },
    { src: "pexels-maxavans-5058118.jpg", caption: "Cityscape" },
    { src: "pexels-melih-cengil-275581852-12914761.jpg", caption: "Beach" },
    { src: "pexels-tomas-malik-793526-3607085.jpg", caption: "Waterfall" },
    { src: "pexels-oskar-gross-1074333632-34341420.jpg", caption: "Mountain Adventure" },
    { src: "pexels-abhisekh-ale-3664473-5539867.jpg", caption: "Tourist attractions" },
    { src: "pexels-2151389998-34799548.jpg", caption: "Autumn leaves" },
    { src: "pexels-seliz-ergin-gizep-2156251119-39281443.jpg", caption:"Sunset"},
    { src: "pexels-vanngo-ng-105653827-38504182.jpg", caption: "Landscape" }
  ];
  
  

  const gallery = document.getElementById("gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  let currentIndex = 0;

  function renderGallery() {
    images.forEach((img, i) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `
        <img src="${img.src}" alt="${img.caption}" loading="lazy">
        <div class="caption">${img.caption}</div>
      `;
      item.addEventListener("click", () => openLightbox(i));
      gallery.appendChild(item);
    });
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add("open");
  }

  function updateLightbox() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.caption;
    lightboxCaption.textContent = `${img.caption} — ${currentIndex + 1} / ${images.length}`;
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  }

  document.getElementById("closeBtn").addEventListener("click", closeLightbox);
  document.getElementById("nextBtn").addEventListener("click", showNext);
  document.getElementById("prevBtn").addEventListener("click", showPrev);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  renderGallery();
