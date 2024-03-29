function navAnimation(params) {
    
const talk = document.querySelector(".talk");
const nav = document.querySelector("nav");

const show = () => {
  const tl = gsap.timeline();
  tl.to("nav .nav-btm", {
    height: "11.8vw",
    stagger:{
      amount:.3
    }
  });
  tl.to(
    ".text span",
    {
      display: "block",
    },
    "a"
  );
  tl.to(
    ".text span",
    {
      y: 0,
      stagger: {
        amount: 0.4,
      },
    },
    "a"
  );
};


// function to hide the nav
const hide = () => {
  const tl = gsap.timeline();
  tl.to(".text span", {
    y: 25,
    stagger: {
      amount: 0.01,
    },
  });
  tl.to(".text span", {
    display:'none',
    
    },);

  tl.to("nav .nav-btm", {
    height: "0",
  });
  
};
nav.addEventListener("mouseenter", () => {
  show();
});

nav.addEventListener("mouseleave", () => {
    console.log('leave')
  hide();
});

}

navAnimation()