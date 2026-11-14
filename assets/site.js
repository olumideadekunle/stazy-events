// ===== Shared config — edit contact details here once, they update on every page =====
const STAZY = {
  phones: ["+2348026266300", "+2348031813348"],
  whatsapp: "2348026266300", // number used for WhatsApp chat + form submissions
  emails: ["stazyevent@gmail.com", "stazyconcept@gmail.com"],
  location: "Lagos, Nigeria",
  socials: { instagram: "#", facebook: "#", tiktok: "#" } // paste your profile links here
};

const page = location.pathname.split("/").pop() || "index.html";
const link = (href, label) =>
  `<a href="${href}" class="nav-link ${page === href || (page === "" && href === "index.html") ? "text-gold" : "text-white/80"} hover:text-gold transition">${label}</a>`;

document.getElementById("site-header").innerHTML = `
<nav class="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-navy/70 border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
    <a href="index.html" class="font-display text-xl tracking-[0.2em] text-white">STAZY <span class="text-gold">EVENTS</span></a>
    <div class="hidden md:flex items-center gap-8 text-sm">
      ${link("index.html", "Home")}${link("gallery.html", "Our Work")}${link("contact.html", "Contact")}
      <a href="contact.html#book" class="bg-gold text-navy font-semibold px-5 py-2 rounded-full hover:bg-white transition">Book a Consultation</a>
    </div>
    <button id="menuBtn" class="md:hidden text-white text-2xl" aria-label="Open menu"><i class="fa-solid fa-bars"></i></button>
  </div>
  <div id="mobileMenu" class="hidden md:hidden bg-navy/95 px-4 pb-6 flex flex-col gap-4 text-base">
    ${link("index.html", "Home")}${link("gallery.html", "Our Work")}${link("contact.html", "Contact")}
    <a href="contact.html#book" class="bg-gold text-navy font-semibold px-5 py-3 rounded-full text-center">Book a Consultation</a>
  </div>
</nav>`;

document.getElementById("menuBtn").onclick = () =>
  document.getElementById("mobileMenu").classList.toggle("hidden");

document.getElementById("site-footer").innerHTML = `
<footer class="bg-navy text-white/70 pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 grid gap-10 md:grid-cols-3">
    <div>
      <p class="font-display text-2xl tracking-[0.2em] text-white">STAZY <span class="text-gold">EVENTS</span></p>
      <p class="mt-4 text-sm leading-relaxed">A division of Stazy Concept. Event decoration, weddings, surprises, special effects, rentals and corporate events in Lagos and beyond.</p>
    </div>
    <div>
      <p class="text-gold uppercase tracking-widest text-xs mb-4">Quick Links</p>
      <ul class="space-y-2 text-sm">
        <li><a href="index.html" class="hover:text-gold">Home</a></li>
        <li><a href="index.html#services" class="hover:text-gold">Services</a></li>
        <li><a href="gallery.html" class="hover:text-gold">Our Work</a></li>
        <li><a href="contact.html" class="hover:text-gold">Contact</a></li>
      </ul>
    </div>
    <div>
      <p class="text-gold uppercase tracking-widest text-xs mb-4">Reach Us</p>
      <ul class="space-y-2 text-sm">
        ${STAZY.phones.map(p => `<li><a href="tel:${p}" class="hover:text-gold"><i class="fa-solid fa-phone mr-2 text-gold"></i>${p}</a></li>`).join("")}
        ${STAZY.emails.map(e => `<li><a href="mailto:${e}" class="hover:text-gold break-all"><i class="fa-solid fa-envelope mr-2 text-gold"></i>${e}</a></li>`).join("")}
        <li><i class="fa-solid fa-location-dot mr-2 text-gold"></i>${STAZY.location}</li>
      </ul>
      <div class="flex gap-4 mt-5 text-xl">
        <a href="${STAZY.socials.instagram}" aria-label="Instagram" class="hover:text-gold"><i class="fa-brands fa-instagram"></i></a>
        <a href="${STAZY.socials.facebook}" aria-label="Facebook" class="hover:text-gold"><i class="fa-brands fa-facebook"></i></a>
        <a href="${STAZY.socials.tiktok}" aria-label="TikTok" class="hover:text-gold"><i class="fa-brands fa-tiktok"></i></a>
        <a href="https://wa.me/${STAZY.whatsapp}" aria-label="WhatsApp" class="hover:text-gold"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
    </div>
  </div>
  <p class="text-center text-xs mt-12 border-t border-white/10 pt-6">© 2026 Stazy Events | Stazy Concept. All Rights Reserved.</p>
</footer>
<a href="https://wa.me/${STAZY.whatsapp}?text=${encodeURIComponent("Hello Stazy Events, I'd like to make an enquiry.")}" target="_blank" rel="noopener"
   class="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white text-3xl flex items-center justify-center shadow-lg hover:scale-110 transition" aria-label="Chat on WhatsApp">
  <i class="fa-brands fa-whatsapp"></i></a>`;

// Fade-in on scroll
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
