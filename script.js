let currentIndex = 0;
let currentImages = [];
const products = [
  {
    name: "🌷 Mã  : AD73 🌷",
    size: "Freesize <58kg",
    price: "80🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma73.jpg", "images/ma731.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã  : AD72 🌷",
    size: "S <52kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma72.jpg", "images/ma721.jpg", "images/ma722.jpg", "images/ma723.jpg", "images/ma724.jpg", "images/ma725.jpg", "images/ma726.jpg", "images/ma727.jpg", "images/ma728.jpg"]
  },
  {
    name: "🌷 Mã  : AD71 🌷",
    size: "S <48kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma71.jpg", "images/ma711.jpg", "images/ma712.jpg", "images/ma713.jpg"]
  },
  {
    name: "🌷 Mã  : AD70 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma70.jpg", "images/ma701.jpg", "images/ma702.jpg", "images/ma703.jpg", "images/ma704.jpg"]
  },
  {
    name: "🌷 Mã  : AD69 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma69.jpg", "images/ma691.jpg", "images/ma692.jpg", "images/ma693.jpg", "images/ma694.jpg"]
  }, 
  {
    name: "🌷 Mã  : AD65 🌷",
    size: "M < 55kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma65.jpg", "images/ma651.jpg", "images/ma652.jpg", "images/ma653.jpg", "images/ma654.jpg", "images/ma655.jpg", "images/ma656.jpg", "images/ma657.jpg", "images/ma658.jpg", "images/ma659.jpg"]
  },
  {
    name: "🌷 Mã  : AD63 🌷",
    size: "M",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma63.jpg", "images/ma631.jpg", "images/ma632.jpg", "images/ma633.jpg", "images/ma634.jpg", "images/ma635.jpg", "images/ma636.jpg"]
  },
    {
    name: "🌷 Mã  : AD68 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma68.jpg", "images/ma681.jpg", "images/ma682.jpg", "images/ma683.jpg", "images/ma684.jpg", "images/ma685.jpg", "images/ma686.jpg"]
  },
  {
    name: "🌷 Mã  : AD67 🌷",
    size: "S < 50kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma67.jpg", "images/ma671.jpg", "images/ma672.jpg", "images/ma673.jpg", "images/ma674.jpg", "images/ma675.jpg", "images/ma676.jpg", "images/ma677.jpg", "images/ma678.jpg", "images/ma679.jpg"]
  },
  {
    name: "🌷 Mã  : AD66 🌷",
    size: "Freesize",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma66.jpg", "images/ma661.jpg", "images/ma662.jpg", "images/ma663.jpg", "images/ma664.jpg", "images/ma665.jpg", "images/ma666.jpg"]
  },
  {
    name: "🌷 Mã  : AD64 🌷( hồng )",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma64.jpg", "images/ma641.jpg", "images/ma642.jpg", "images/ma643.jpg"]
  },
  {
    name: "🌷 Mã  : AD62 🌷",
    size: "S < 50kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma62.jpg", "images/ma621.jpg", "images/ma622.jpg", "images/ma623.jpg", "images/ma624.jpg", "images/ma625.jpg"]
  },
  {
    name: "🌷 Mã  : AD61 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma61.jpg", "images/ma611.jpg", "images/ma612.jpg", "images/ma613.jpg", "images/ma64.jpg"]
  },
  {
    name: "🌷 Mã  : AD60 🌷 ( đỏ )",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma60.jpg", "images/ma601.jpg", "images/ma602.jpg", "images/ma603.jpg", "images/ma604.jpg"]
  },
 {
    name: "🌷 Mã  : AD58 (đỏ) AD59 (xanh)🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma58_59.jpg", "images/ma58_591.jpg", "images/ma58_592.jpg", "images/ma58_593.jpg"]
  },
  {
    name: "🌷 Mã : AD57 🌷",
    size: "M < 55kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma57.jpg", "images/ma571.jpg", "images/ma572.jpg", "images/ma573.jpg", "images/ma574.jpg", "images/ma575.jpg", "images/ma576.jpg", "images/ma577.jpg"]
  },
  {
    name: "🌷 Mã : AD56 🌷",
    size: "S < 52kg",
    price: "60🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma56.jpg", "images/ma561.jpg", "images/ma562.jpg", "images/ma563.jpg", "images/ma564.jpg", "images/ma565.jpg", "images/ma566.jpg", "images/ma567.jpg", "images/ma568.jpg", "images/ma569.jpg"]
  },
  {
    name: "🌷 Mã : AD54 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma54.jpg", "images/ma541.jpg", "images/ma542.jpg", "images/ma543.jpg", "images/ma544.jpg", "images/ma545.jpg"]
  },
  {
    name: "🌷 Mã : AD53 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma53.jpg", "images/ma531.jpg", "images/ma532.jpg", "images/ma533.jpg", "images/ma534.jpg", "images/ma535.jpg"]
  },
  {
    name: "🌷 Mã : AD52 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma52.jpg", "images/ma521.jpg", "images/mma522a523.jpg", "images/ma523.jpg", "images/ma524.jpg", "images/ma525.jpg", "images/ma526.jpg", "images/ma527.jpg", "images/ma528.jpg"]
  },
  {
    name: "🌷 Mã : AD51 🌷",
    size: "S < 52kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD50 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD49 🌷",
    size: "S <52kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD46 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD45 🌷(áo be quần xanh cốm)",
    size: "S < 55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD44 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD43 🌷",
    size: "S < 50kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD35 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD42 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD41 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD38 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD39 🌷 ( hồng )",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD14 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD12 🌷",
    size: "M < 60kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD11 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD40 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD37 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD36 🌷",
    size: "L <55kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD10 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD34 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD33 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD32 🌷",
    size: "L",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD31 🌷",
    size: "L",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD30 🌷",
    size: "S <50kg",
    price: "70🐟 / ngày",
    deposit: "200🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD29 🌷",
    size: "M <58kg",
    price: "60🐟 / ngày",
    deposit: "200🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD28 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD27 🌷",
    size: "Freesize",
    price: "70🐟 / ngày",
    deposit: "200🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD26 🌷",
    size: "M <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD16 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD25 🌷 ( Đỏ )",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD24 🌷",
    size: "S <50kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD23 🌷 ( Hồng )",
    size: "S <52kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD22 🌷 ( Xanh )",
    size: "S <52kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD19 🌷",
    size: "S <52kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD21 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD18 🌷",
    size: "M <52kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD20 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD17 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD07 🌷 ( Đỏ )",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD13 🌷",
    size: "S <52kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD09 🌷 ( Đỏ )",
    size: "M <50kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD08 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD06 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD05 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD04 🌷",
    size: "M",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD03 🌷",
    size: "M",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD02 🌷",
    size: "L",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã : AD01 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma63.jpg", "images/ma.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
];

const app = document.getElementById("app");

app.innerHTML = `
  <h1>Cosilla</h1>
  <div class="products">
    ${products.map((p, i) => `
      <div class="product" onclick="openModal(${i})">
        <img src="${p.images[0]}">
        <h3>${p.name}</h3>
        <p><b>Size:</b> ${p.size}</p>
        <p><b>Giá thuê:</b> ${p.price}</p>
        <p><b>Cọc:</b> ${p.deposit}</p>
      </div>
    `).join("")}
  </div>
`;

// ===== MODAL =====
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

function openModal(index) {
  const p = products[index];
  currentImages = p.images;
  currentIndex = 0;

  renderModalImage(p.name);

  modal.style.display = "flex";
}

closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
function renderModalImage(name) {
  modalBody.innerHTML = `
    <h2 class="modal-title">${name}</h2>

    <div class="slider">
      <button class="nav-btn left" onclick="prevImage()">&#10094;</button>

      <img src="./${currentImages[currentIndex]}" class="main-image">

      <button class="nav-btn right" onclick="nextImage()">&#10095;</button>
    </div>
  `;
}
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = currentImages.length - 1;
  renderModalImage(document.querySelector(".modal-title").innerText);
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= currentImages.length) currentIndex = 0;
  renderModalImage(document.querySelector(".modal-title").innerText);
}
