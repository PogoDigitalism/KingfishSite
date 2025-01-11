// let constrain = 20;
// let mouseOverContainer = document.getElementById("main");
// let ex1Layer = document.getElementById("kingfish");

// ex1Layer.style.transition = "transform 0.3s ease-out";

// function transforms(x, y, el) {
//     let box = el.getBoundingClientRect();
//     let calcX = -(y - box.y - (box.height / 2)) / constrain;
//     let calcY = (x - box.x - (box.width / 2)) / constrain;

//     return "perspective(100px) "
//         + "   rotateX("+ calcX +"deg) "
//         + "   rotateY("+ calcY +"deg) ";
// };

// ex1Layer.onmousemove = function(e) {
//     ex1Layer.style.transition = null;
//     let xy = [e.clientX, e.clientY];
//     let position = xy.concat([ex1Layer]);

//     ex1Layer.style.transform = transforms.apply(null, position);
// };

// ex1Layer.onmouseleave = function() {
//     ex1Layer.style.transition = "transform 0.3s ease-out";
//     ex1Layer.style.transform = "perspective(100px) rotateX(0deg) rotateY(0deg)";
// }