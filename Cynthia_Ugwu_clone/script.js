
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;

// scroll.update();

function heroanimation(){
    gsap.from("nav" , {
        opacity:0,
        y:10,
        delay:0.6,
        duration:1,
        // stagger:0.2
    })
    gsap.from("#heading h1" , {
        opacity:0,
        y:100,
        delay:0.6,
        duration:1,
        stagger:0.2
    })
    gsap.from("#heading .subhead" , {
        opacity:0,
        y:-10,
        delay:1.5,
        duration:1,
    
    })
    gsap.from("#thirdhead #subhead" , {
        opacity:0,
        y:-20,
        delay:1.5,
        duration:1,
    
    })
    gsap.from("#herofooter" , {
        opacity:0,
        y:-10,
        delay:1.5,
        duration:2,
    
    })
    
}


function mousechapta() {
    // define default scale
    var xscale = 1;
    var yscale = 1;
    //make variable to store previous value of mouse
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        // var xdiff = dets.x-xprev;
        // var ydiff = dets.y-yprev;

        xscale = gsap.utils.clamp(0.8, 1.2, dets.x - xprev)
        yscale = gsap.utils.clamp(0.8, 1.2, dets.y - yprev)

        xprev = dets.x;
        yprev = dets.y;

        mousefollower(xscale, yscale);

        timeout = setTimeout(() => {
            document.querySelector("#circle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        }, 100);
    })
}

function mousefollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#circle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}

heroanimation();
mousechapta();
mousefollower();

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  





