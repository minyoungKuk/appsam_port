$(() => {

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger : {
            trigger : "gsap_box4",
            pin : true, 
            start : "center center",
            markerrs : true,
            end : "+=2000",
            scrub : true
        }
    })

    tl.to(".gsap_box4", {x: 700, scale: 1.2})
})