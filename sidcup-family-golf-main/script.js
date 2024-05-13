var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var navH4 = document.querySelectorAll("#nav h4");

function scrollToNextPage() {
  // Get the height of the viewport
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  // Scroll to the next page
  window.scrollTo({
    top: viewportHeight,
    behavior: 'smooth' // Smooth scrolling animation
  });
}

function hoverArrow() {
  var arrowIcon = document.querySelector('#arrow i');
  arrowIcon.classList.add('hovered');
}

function unhoverArrow() {
  var arrowIcon = document.querySelector('#arrow i');
  arrowIcon.classList.remove('hovered');
}

// Update arrow position on scroll
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || window.pageYOffset;
  var arrow = document.getElementById('arrow');
  arrow.style.transform = 'translateY(' + scrollPosition + 'px)';
});

// Add event listeners to each h4 element with class "nav-item"
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.classList.add('hovered'); // Add class "hovered" on mouse enter
  });

  item.addEventListener('mouseleave', function() {
    this.classList.remove('hovered'); // Remove class "hovered" on mouse leave
  });
});


document.addEventListener("mousemove", function (event) {
  crsr.style.left = event.clientX + "px";
  crsr.style.top = event.clientY + "px";
  blur.style.left = event.clientX - 250 + "px";
  blur.style.top = event.clientY - 250 + "px";
});

document.getElementById("nav").addEventListener("mouseenter", function (event) {
  if (event.target.matches("h4")) {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  }
});

document.getElementById("nav").addEventListener("mouseleave", function (event) {
  if (event.target.matches("h4")) {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  }
});

gsap.to(["#nav", "#main"], {
  backgroundColor: "#000",
  duration: 0.5,
  scrollTrigger: {
    trigger: ["#nav", "#main"],
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(["#about-us img", "#about-us-in"], {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1, #colon2", {
  y: function(index) { return index === 0 ? -70 : 70; },
  x: function(index) { return index === 0 ? -70 : 70; },
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
