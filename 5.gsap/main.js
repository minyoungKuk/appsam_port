// $(() => {
//     $('#btn').on('click', () => {
//         gsap.to(".box", {
//             duration:1,
//             width:400,
//             height:500,
//             x:400,
//             y: 200,
//             autoAlpha:0.6
//         })
//     })
// })


$(() => {
    $('#btn').on('click', () => {
        let tl = gsap.timeline();

        tl.to(".box", {duration: 1, x: 100})
            .to(".n2", {duration:1, x: 400})
            .to(".n2", {duration:1, y: -300})
            .to(".box", {duration:1, x: 100})
            .to(".box", {duration:1, scale: 2, rotate: 180})
            .to(".box", {duration:1, scale: 1, rotate: 180})
            .to(".n2", {duration:1, x: 450}, ">")
    }) 
})