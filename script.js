var nav = document.querySelector("nav")



nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()

    tl.to("nav .menu h5 span", {
        y: 25,
        stagger: {
            amount: 0.2
        }
    })

    tl.to("#nav-bottom", {
        height: "0",
        duration: 0.1


    })


    tl.to("nav .menu h5", {
        display: "none",
        duration: 0.1


    })


})




nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()


    tl.to("#nav-bottom", {
        height: "21vh",
        duration: 0.5

    })


    tl.to("nav .menu h5", {
        display: "block",
        duration: 0.1

    })

    tl.to("nav .menu h5 span", {
        y: 0,
        // duration:.3,
        stagger: {
            amount: 0.5
        }
    })
})


// Animation logic for section 2

var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {

            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })


    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
    })

      elem.addEventListener("mousemove", function (dets) {


        gsap.to(elem.childNodes[3], {

            x:dets.x - elem.getBoundingClientRect().x,
            y:dets.x - elem.getBoundingClientRect().y
        })
      })
})