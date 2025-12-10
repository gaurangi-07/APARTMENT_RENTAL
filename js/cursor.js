// cursor.js (moved into /js)
// Sample data (monthly rent, realistic ranges)
const apartments = [
  { id: 1, title: "Modern 1 BHK Apartment", location: "HSR Layout, Bangalore", city: "Bangalore", bhk: 1, furnishing: "fully", rent: 18000, availability: "available", area: 650, deposit: 40000, maintenance: 1500, petsAllowed: true, amenities: ["Parking", "Power Backup", "Gated Security", "Lift"], images: [
    "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505692069463-5e3405e3e7ee?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop"
  ] },
  { id: 2, title: "Spacious 2 BHK Flat", location: "Powai, Mumbai", city: "Mumbai", bhk: 2, furnishing: "semi", rent: 45000, availability: "available", area: 1050, deposit: 120000, maintenance: 3500, petsAllowed: false, amenities: ["Parking", "Gym", "Swimming Pool", "Power Backup", "Lift"], images: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512914979634-19722ac3b7e1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
  ] },
  { id: 3, title: "2 BHK Apartment for Rent", location: "Andheri East, Mumbai", city: "Mumbai", bhk: 2, furnishing: "semi", rent: 28000, availability: "available", area: 950, deposit: 75000, maintenance: 2000, petsAllowed: true, amenities: ["Parking", "Lift", "CCTV"], images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484156818044-c040038b0710?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693415763-3ed5e04ba4cd?q=80&w=1600&auto=format&fit=crop"
  ] },
  { id: 4, title: "Luxury 5 BHK Villa", location: "Jubilee Hills, Hyderabad", city: "Hyderabad", bhk: 5, furnishing: "fully", rent: 450000, availability: "available", area: 5200, deposit: 800000, maintenance: 15000, petsAllowed: true, amenities: ["Parking", "Pool", "Garden", "Gym", "Security"], images: [
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
  ] },
  { id: 5, title: "2 BHK Budget Apartment", location: "Electronic City, Bangalore", city: "Bangalore", bhk: 2, furnishing: "none", rent: 25000, availability: "available", area: 880, deposit: 60000, maintenance: 1200, petsAllowed: false, amenities: ["Parking", "Power Backup"], images: [
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512914890250-353c97c9e7cc?q=80&w=1600&auto=format&fit=crop"
  ] },
  { id: 6, title: "Premium 3 BHK Penthouse", location: "Gachibowli, Hyderabad", city: "Hyderabad", bhk: 3, furnishing: "fully", rent: 185000, availability: "soon", area: 2700, deposit: 350000, maintenance: 9000, petsAllowed: true, amenities: ["Parking", "Pool", "Gym", "Sky Deck", "Security"], images: [
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop"
  ] },
  { id: 7, title: "Commercial Office Space", location: "Bandra Kurla Complex, Mumbai", city: "Mumbai", bhk: 0, furnishing: "semi", rent: 250000, availability: "available", area: 1800, deposit: 500000, maintenance: 12000, petsAllowed: false, amenities: ["Parking", "Power Backup", "Lift", "Security"], images: [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505691986029-23452951f9c5?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505691977800-46e9f1f5ac2d?q=80&w=1600&auto=format&fit=crop"
  ] },
  { id: 8, title: "Independent House", location: "Vikarabad, Bangalore", city: "Bangalore", bhk: 4, furnishing: "semi", rent: 155000, availability: "available", area: 2400, deposit: 300000, maintenance: 7000, petsAllowed: true, amenities: ["Parking", "Garden", "Power Backup"], images: [
    "https://images.unsplash.com/photo-1505692069242-56bd75e4aa1c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505691983082-9c1c0fdfb9c5?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693415831-bc3c0c7f6a24?q=80&w=1600&auto=format&fit=crop"
  ] },
  { id: 9, title: "Residential Plot Lease", location: "Kondapur, Hyderabad", city: "Hyderabad", bhk: 0, furnishing: "none", rent: 35000, availability: "soon", area: 2200, deposit: 70000, maintenance: 1000, petsAllowed: true, amenities: ["Parking", "Gated Security"], images: [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop"
  ] },
  { id: 10, title: "Premium 3 BHK Apartment", location: "Lower Parel, Mumbai", city: "Mumbai", bhk: 3, furnishing: "fully", rent: 78000, availability: "available", area: 1600, deposit: 180000, maintenance: 4000, petsAllowed: false, amenities: ["Parking", "Gym", "Pool", "Lift"], images: [
    "https://images.unsplash.com/photo-1523419409543-0c1df022bdd7?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708321634-7e4041eacc54?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708326373-4d8f1a1c1c7e?q=80&w=1600&auto=format&fit=crop"
  ] },
  { id: 11, title: "Family 2 BHK Home", location: "Whitefield, Bangalore", city: "Bangalore", bhk: 2, furnishing: "semi", rent: 22000, availability: "available", area: 900, deposit: 50000, maintenance: 1000, petsAllowed: true, amenities: ["Parking", "Play Area", "Power Backup"], images: [
    "https://images.unsplash.com/photo-1522708326901-09c0d7f8a8b0?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708327777-9b3126dd0b25?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708328888-3ad0fb3c5b14?q=80&w=1600&auto=format&fit=crop"
  ] },
  { id: 12, title: "Cozy 1 BHK Studio", location: "Kondapur, Hyderabad", city: "Hyderabad", bhk: 1, furnishing: "none", rent: 12000, availability: "soon", area: 520, deposit: 25000, maintenance: 800, petsAllowed: true, amenities: ["Parking", "Lift"], images: [
    "https://images.unsplash.com/photo-1522708329999-2fd9eddf12b1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708331111-70b0e4c2cc09?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708332222-99d9d02a37b2?q=80&w=1600&auto=format&fit=crop"
  ] }
];

const furnishingLabels = { fully: "Fully Furnished", semi: "Semi Furnished", none: "Unfurnished" };
const availabilityLabels = { available: "Ready to move", soon: "Coming soon" };

const filters = {
  location: "",
  bhk: "all",
  furnishing: "all",
  availability: "all",
  price: "all"
};

const formatPrice = (value) => {
  if (value >= 100000) {
    return `₹${(value/100000).toFixed(2)} Lac/mo`;
  }
  return `₹${value.toLocaleString("en-IN")}/mo`;
};

const formatCurrency = (value) => `₹${(value || 0).toLocaleString("en-IN")}`;

const createCard = (apartment) => {
  const card = document.createElement("article");
  card.className = "card";
  const mainImg = apartment.images?.[0] || "";
  card.innerHTML = `
    <div class="card__img" style="background-image:url('${mainImg}')">
      <span class="badge">${availabilityLabels[apartment.availability] || "Available"}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${apartment.title}</div>
      <div class="card__meta">📍 ${apartment.location}</div>
      <div class="chips">
        <span class="chip">${apartment.bhk || "Studio"} BHK</span>
        <span class="chip">${furnishingLabels[apartment.furnishing]}</span>
        <span class="chip">${apartment.area} sqft</span>
      </div>
      <div class="card__row">
        <div class="price">${formatPrice(apartment.rent)}</div>
        <button class="details-btn" data-id="${apartment.id}">Details</button>
      </div>
    </div>
  `;
  return card;
};

const renderFeatured = () => {
  const featuredGrid = document.getElementById("featured-grid");
  featuredGrid.innerHTML = "";
  apartments.slice(0, 4).forEach((apartment) => {
    featuredGrid.appendChild(createCard(apartment));
  });
  bindDetails();
};

const renderListings = (listings) => {
  const grid = document.getElementById("listings-grid");
  grid.innerHTML = "";

  if (!listings.length) {
    grid.innerHTML = `<div class="no-results">No properties match your filters.</div>`;
    document.getElementById("results-count").textContent = "0 properties found";
    return;
  }

  listings.forEach((item) => grid.appendChild(createCard(item)));
  document.getElementById("results-count").textContent = `${listings.length} properties found`;

  bindDetails();
};

const applyFilters = () => {
  const filtered = apartments.filter((apt) => {
    const matchLocation = filters.location
      ? apt.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    const matchBhk = filters.bhk === "all" ? true : String(apt.bhk) === filters.bhk;
    const matchFurnishing = filters.furnishing === "all" ? true : apt.furnishing === filters.furnishing;
    const matchAvailability = filters.availability === "all" ? true : apt.availability === filters.availability;

    let matchPrice = true;
    if (filters.price !== "all") {
      if (filters.price === "100000+") {
        matchPrice = apt.rent >= 100000;
      } else {
        const [min, max] = filters.price.split("-").map(Number);
        matchPrice = apt.rent >= min && apt.rent <= max;
      }
    }

    return matchLocation && matchBhk && matchFurnishing && matchAvailability && matchPrice;
  });

  renderListings(filtered);
};

const wireFilters = () => {
  const map = [
    ["filter-location", "location", "input"],
    ["filter-bhk", "bhk", "change"],
    ["filter-furnishing", "furnishing", "change"],
    ["filter-availability", "availability", "change"],
    ["filter-price", "price", "change"]
  ];

  map.forEach(([id, key, evt]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener(evt, (e) => {
      filters[key] = e.target.value;
      applyFilters();
    });
  });

  const clearBtn = document.getElementById("clear-filters");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      filters.location = "";
      filters.bhk = "all";
      filters.furnishing = "all";
      filters.availability = "all";
      filters.price = "all";

      document.getElementById("filter-location").value = "";
      document.getElementById("filter-bhk").value = "all";
      document.getElementById("filter-furnishing").value = "all";
      document.getElementById("filter-availability").value = "all";
      document.getElementById("filter-price").value = "all";
      applyFilters();
    });
  }
};

const wireHeroSearch = () => {
  const heroBtn = document.getElementById("hero-search");
  if (!heroBtn) return;
  heroBtn.addEventListener("click", () => {
    filters.location = document.getElementById("hero-location").value;
    filters.bhk = document.getElementById("hero-bhk").value;
    filters.availability = document.getElementById("hero-availability").value;
    filters.price = document.getElementById("hero-price").value;

    // sync filter sidebar
    document.getElementById("filter-location").value = filters.location;
    document.getElementById("filter-bhk").value = filters.bhk;
    document.getElementById("filter-availability").value = filters.availability;
    document.getElementById("filter-price").value = filters.price;

    applyFilters();
    const browse = document.getElementById("browse");
    if (browse) browse.scrollIntoView({ behavior: "smooth" });
  });
};

const wireTabs = () => {
  const pills = document.querySelectorAll(".pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
    });
  });
};

const wireNav = () => {
  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
};

const init = () => {
  renderFeatured();
  renderListings(apartments);
  wireFilters();
  wireHeroSearch();
  wireTabs();
  wireNav();

  const viewAll = document.getElementById("view-all");
  if (viewAll) {
    viewAll.addEventListener("click", () => {
      const browse = document.getElementById("browse");
      if (browse) browse.scrollIntoView({ behavior: "smooth" });
    });
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// ---------- Modal ----------
const modal = document.getElementById("details-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalLocation = document.getElementById("modal-location");
const modalAvailability = document.getElementById("modal-availability");
const modalPrice = document.getElementById("modal-price");
const modalTags = document.getElementById("modal-tags");
const modalFacts = document.getElementById("modal-facts");
const modalAmenities = document.getElementById("modal-amenities");
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalMainImg = document.getElementById("modal-main-img");
const modalThumbs = document.getElementById("modal-thumbs");

const openModal = (apartment) => {
  if (!modal) return;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  const imgs = apartment.images && apartment.images.length ? apartment.images : [];
  const primary = imgs[0] || "";
  if (modalImg) modalImg.style.backgroundImage = `url('${primary}')`;
  modalTitle.textContent = apartment.title;
  modalLocation.textContent = apartment.location;
  modalAvailability.textContent = availabilityLabels[apartment.availability] || "";
  modalPrice.textContent = formatPrice(apartment.rent);

  modalTags.innerHTML = `
    <span class="chip">${apartment.bhk || "Studio"} BHK</span>
    <span class="chip">${furnishingLabels[apartment.furnishing]}</span>
    <span class="chip">${apartment.area} sqft</span>
    <span class="chip">${apartment.city}</span>
  `;

  modalFacts.innerHTML = `
    <div class="fact"><span>Availability</span>${availabilityLabels[apartment.availability]}</div>
    <div class="fact"><span>Type</span>${apartment.bhk ? `${apartment.bhk} BHK` : "Studio/Plot"}</div>
    <div class="fact"><span>Furnishing</span>${furnishingLabels[apartment.furnishing]}</div>
    <div class="fact"><span>Area</span>${apartment.area} sqft</div>
    <div class="fact"><span>City</span>${apartment.city}</div>
    <div class="fact"><span>Pets</span>${apartment.petsAllowed ? "Allowed" : "Not allowed"}</div>
    <div class="fact"><span>Deposit</span>${formatCurrency(apartment.deposit)}</div>
    <div class="fact"><span>Maintenance</span>${formatCurrency(apartment.maintenance)}/mo</div>
  `;

  const amenities = apartment.amenities && apartment.amenities.length ? apartment.amenities : ["Parking"];
  modalAmenities.innerHTML = amenities.map((a) => `<span class="chip">${a}</span>`).join("");

  // Gallery
  if (modalMainImg) modalMainImg.style.backgroundImage = `url('${primary}')`;
  if (modalThumbs) {
    modalThumbs.innerHTML = imgs.map((src, idx) => `
      <div class="modal__thumb ${idx === 0 ? "active" : ""}" data-src="${src}" style="background-image:url('${src}')"></div>
    `).join("");
    modalThumbs.querySelectorAll(".modal__thumb").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const src = thumb.getAttribute("data-src");
        modalThumbs.querySelectorAll(".modal__thumb").forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        if (modalMainImg) modalMainImg.style.backgroundImage = `url('${src}')`;
      });
    });
  }
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
};

const bindDetails = () => {
  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-id"));
      const apt = apartments.find((a) => a.id === id);
      if (apt) openModal(apt);
    });
  });
};

if (modalOverlay) modalOverlay.addEventListener("click", closeModal);
if (modalClose) modalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
