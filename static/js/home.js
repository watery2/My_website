let timeclicked = 0
document.getElementById("button").onclick = function(){
    let links = document.getElementsByClassName("links");
    let link = document.getElementsByClassName("link");
    if (timeclicked === 0){
        gsap.to("#button", {duration: 1, rotation: 90});
        for (let i = 0; i < links.length; i++){
            links[i].style.height = '100px';
            
        }
        for (let j = 0; j < link.length; j++){
            link[j].style.opacity = "1";
        }
        timeclicked++;
    }else{
        gsap.to("#button", {duration: 1, rotation: 0});
        for (let i = 0; i < links.length; i++){
            links[i].style.height = '0px';
            
        }
        for (let j = 0; j < link.length; j++){
            link[j].style.opacity = "0";
        }
        timeclicked--;

    }
}
document.getElementsByClassName("aboutlink")[0].onclick = function(){
    document.getElementById("about").scrollIntoView();
}
document.getElementsByClassName("link")[0].onclick = function(){
    document.getElementById("about").scrollIntoView();
}
let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.img',
    }
});

tl.from(".img", {y:-200, opacity: 0, duration: 1})
    .from(".whoiam", {x:100, opacity: 0, duration: 1}, "-=0.5")

let ta = gsap.timeline({
    scrollTrigger:{
        trigger: '#about',
        start: "center bottom",
    }
});

ta.from(".aboutword", {y:-100, opacity: 0, duration: 1})
    .to(".line", {width: "80px", duration: 1})
