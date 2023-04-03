//Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', ()=>{
  headerEl.classList.toggle("nav-open")
});

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver((entries)=>{
  const ent = entries[0];

  if(!ent.isIntersecting) {
    document.body.classList.add("sticky")
  } else {
    document.body.classList.remove("sticky")
  }
}, 
{
  root: null,
  threshold:0,
  rootMargin: "-85px"
});

obs.observe(sectionHeroEl)

// Fixing flexbox gap property missing inn some safari versions 

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column"
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if(!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

