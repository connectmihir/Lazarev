//Header logic

function headerAnimation() {

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



}





// Animation logic for section 2

function section2Animation() {

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

                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 120,
                duration: 0.3
            })
        })
    })

}




function section3video() {
    var sec3 = document.querySelector(".sec3center")
    var video = document.querySelector("#section-3 video")

    if (!sec3 || !video) return;


    sec3.addEventListener("click", function () {
        video.play()


        gsap.to(video, {
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            borderRadius: 0,
             duration: 0.5,
            ease: "power2.inOut"

        })
    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            scaleX: .7,
            scaleY: 0,
            opacity: 0,
            borderRadius: "30px",
             duration: 0.5,
            ease: "power2.inOut"
        })
    })

}



var sec5= document.querySelectorAll(".content-right")

sec5.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        elem.childNodes[3].style.opacity=1
        elem.childNodes[3].play()
        elem.childNodes[1].style.opacity=0
    })


    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].style.opacity=0
        elem.childNodes[3].load()
        elem.childNodes[1].style.opacity=1
    })
})



var sec6= document.querySelectorAll("#container-elem")


sec6.forEach(function(elem){

    elem.addEventListener("mouseenter", function(){

        elem.style.backgroundColor = "#655f5f8a";
        elem.childNodes[1].style.paddingLeft = "20px";
        elem.children[5].style.paddingRight = "1vw";

    })
    elem.addEventListener("mouseleave", function(){

        elem.style.backgroundColor = "#000";
        elem.childNodes[1].style.paddingLeft = "0";
        elem.children[5].style.paddingRight = "0";

    })
   
})

headerAnimation()

section2Animation()

section3video()