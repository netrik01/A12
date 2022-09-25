
var loading = gsap.timeline();
loading
.to("#bubble",{
    width: "20px",
    height: "20px",
    backgroundColor : "#dadada",
    ease: Power1.easeInOut,
    duration: .5
})
.to("#bubble1",{
    width: "80px",
    height: "80px",
    backgroundColor : "#dadada6d",
    ease: Power1.easeInOut,
    duration: .5
})
.to(".loader",{
    top: "-100%",
    backgroundColor : "#dadada6d",
    duration: 1,
    opacity: 0,
})

$('#h1').textillate({ initialDelay: 800, in: { effect: 'fadeInUp' },delay: 10 ,delayScale: 5 });
$('#h2').textillate({ initialDelay: 800, in: { effect: 'fadeInUp' },delay: 10 ,delayScale: 5 });
$('#h3').textillate({ initialDelay: 900, in: { effect: 'fadeInUp' },delay: 10 ,delayScale: 5 });


window.addEventListener("mousemove", function(dets){
    function abc(){
        document.querySelector("#smcircle").style.top =`${dets.clientY}px`
        document.querySelector("#smcircle").style.left =`${dets.clientX}px`
        document.querySelector("#cursor").style.top= `${dets.clientY}px`
        document.querySelector("#cursor").style.left= `${dets.clientX}px`
    }
    window.requestAnimationFrame(abc)
});




document.querySelectorAll(".enlarge").forEach(function(elem){
    elem.addEventListener("mousemove", function(){
            document.querySelector("#smcircle").style.width = "80px";
            document.querySelector("#smcircle").style.height = "80px";
            document.querySelector("#smcircle").style.backgroundColor = "white";
            document.querySelector("#smcircle").style.mixBlendMode = "difference";
    })
})

document.querySelectorAll(".enlarge").forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
            document.querySelector("#smcircle").style.width = "15px";
            document.querySelector("#smcircle").style.height = "15px";
            document.querySelector("#smcircle").style.backgroundColor = "transparent";
            document.querySelector("#smcircle").style.mixBlendMode = "initial";
    })
})


document.querySelectorAll(".abc").forEach(function(elem){

    elem.addEventListener("mousemove", function(abc){
        document.querySelector("#cursor").style.display = "initial"
        document.querySelector("#smcircle").style.display= "none"
        document.querySelector("#cursor").style.mixBlendMode= "difference"
        document.querySelector("#main").style.backgroundColor = abc.target.dataset.color;
    })
    elem.addEventListener("mouseleave", function(){
        document.querySelector("#smcircle").style.display = "initial"
        document.querySelector("#cursor").style.display= "none"
        document.querySelector("#main").style.backgroundColor= "#f8f8f8"
    })

})


document.querySelector("#mail").addEventListener("mousemove", function (dets) {
    document.querySelector("#mail").style.transform = `translate3d(${dets.clientX * .2}px, ${dets.clientY * .1}px, 0px)`;
});
document.querySelector("#mail").addEventListener("mouseleave", function (dets) {
    document.querySelector("#mail").style.transform = "initial";
});

