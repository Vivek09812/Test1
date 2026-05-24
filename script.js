// ========================================
// LOADER SYSTEM
// ========================================

window.onload = function(){

setTimeout(()=>{

document.getElementById("loader")
.style.opacity = "0";

setTimeout(()=>{

document.getElementById("loader")
.style.display = "none";

},1000);

},2500);

};

// ========================================
// GLOBAL VARIABLES
// ========================================

const pages =
document.querySelectorAll(".page");

const bgMusic =
document.getElementById("bgMusic");

let currentSlide = 0;

let typingStarted = false;

let fireworksStarted = false;

// ========================================
// PAGE SYSTEM
// ========================================

function changePage(id){

pages.forEach(page=>{

page.classList.remove("active");

});

document.getElementById(id)
.classList.add("active");

createPageTransition();

}

// ========================================
// START EXPERIENCE
// ========================================

function startExperience(){

bgMusic.play();

changePage("countdownPage");

createSparkles();

}

// ========================================
// TRANSITION EFFECT
// ========================================

function createPageTransition(){

const transition =
document.createElement("div");

transition.style.position = "fixed";

transition.style.top = "0";

transition.style.left = "0";

transition.style.width = "100%";

transition.style.height = "100%";

transition.style.background =
"rgba(255,255,255,0.2)";

transition.style.backdropFilter =
"blur(10px)";

transition.style.zIndex = "999";

transition.style.animation =
"fadeIn 0.5s forwards";

document.body.appendChild(transition);

setTimeout(()=>{

transition.remove();

},500);

}

// ========================================
// COUNTDOWN SYSTEM
// ========================================

const birthdayDate =
new Date(
"May 24, 2026 13:30:00"
).getTime();

const daysElement =
document.getElementById("days");

const hoursElement =
document.getElementById("hours");

const minutesElement =
document.getElementById("minutes");

const secondsElement =
document.getElementById("seconds");

setInterval(()=>{

const now =
new Date().getTime();

const distance =
birthdayDate - now;

const days =
Math.floor(
distance /
(1000*60*60*24)
);

const hours =
Math.floor(
(distance %
(1000*60*60*24)) /
(1000*60*60)
);

const minutes =
Math.floor(
(distance %
(1000*60*60)) /
(1000*60)
);

const seconds =
Math.floor(
(distance %
(1000*60)) /
1000
);

daysElement.innerHTML = days;
hoursElement.innerHTML = hours;
minutesElement.innerHTML = minutes;
secondsElement.innerHTML = seconds;

// AUTO UNLOCK

if(distance < 0){

unlockBirthday();

}

},1000);

// ========================================
// GALLERY SYSTEM
// ========================================

function openGallery(){

changePage("galleryPage");

}

const slides =
document.querySelectorAll(".slide");

const dots =
document.querySelectorAll(".dot");

function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove("activeSlide");

});

dots.forEach(dot=>{

dot.classList.remove("activeDot");

});

slides[index]
.classList.add("activeSlide");

dots[index]
.classList.add("activeDot");

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

}

function prevSlide(){

currentSlide--;

if(currentSlide < 0){

currentSlide =
slides.length - 1;

}

showSlide(currentSlide);

}

// AUTO SLIDER

setInterval(()=>{

nextSlide();

},5000);

// ========================================
// LETTER PAGE
// ========================================

function openLetter(){

changePage("letterPage");

}

function showLetter(){

document.getElementById(
"letterContent"
).classList.remove("hidden");

if(!typingStarted){

typingStarted = true;

startTyping();

}

}

// ========================================
// TYPEWRITER
// ========================================

const message =

`Happy Birthday Rakhi 💖

You are the sweetest little sister
and the cutest blessing of my life.

Your smile makes everything better ✨`;

let textIndex = 0;

function startTyping(){

if(textIndex < message.length){

document.getElementById(
"typingText"
).innerHTML +=
message.charAt(textIndex);

textIndex++;

setTimeout(startTyping,40);

}

}

// ========================================
// GIFT PAGE
// ========================================

function openGift(){

changePage("giftPage");

createGiftParticles();

}

function showGiftMessage(){

document.getElementById(
"giftMessage"
).classList.remove("hidden");

launchMiniConfetti();

}

// ========================================
// BIRTHDAY PAGE
// ========================================

function openBirthdayPage(){

changePage("birthdayPage");

}

// ========================================
// UNLOCK SYSTEM
// ========================================

function unlockBirthday(){

document.getElementById(
"lockedScreen"
).classList.add("hidden");

document.getElementById(
"birthdayContent"
).classList.remove("hidden");

if(!fireworksStarted){

fireworksStarted = true;

startFireworks();

launchConfetti();

}

}

// ========================================
// CAKE SYSTEM
// ========================================

function cutCake(){

const cake =
document.getElementById("cake");

cake.classList.add("cut");

launchConfetti();

createCakeGlow();

createCelebrationText();

}

// ========================================
// CANDLE SYSTEM
// ========================================

function blowCandle(){

document.getElementById(
"candle"
).innerHTML = "💨";

createSmokeEffect();

}

// ========================================
// TOUCH HEART EFFECT
// ========================================

document.addEventListener(
"click",
function(e){

const heart =
document.createElement("div");

heart.innerHTML = "💖";

heart.style.position = "fixed";

heart.style.left =
e.clientX + "px";

heart.style.top =
e.clientY + "px";

heart.style.fontSize = "26px";

heart.style.pointerEvents =
"none";

heart.style.zIndex = "9999";

heart.style.animation =
"fadeUp 1s forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1000);

}
);

// ========================================
// SPARKLE ENGINE
// ========================================

function createSparkles(){

setInterval(()=>{

const sparkle =
document.createElement("div");

sparkle.innerHTML = "✨";

sparkle.style.position = "fixed";

sparkle.style.left =
Math.random()*100 + "vw";

sparkle.style.top =
Math.random()*100 + "vh";

sparkle.style.fontSize =
Math.random()*20 + 10 + "px";

sparkle.style.opacity =
Math.random();

sparkle.style.pointerEvents =
"none";

sparkle.style.zIndex = "1";

sparkle.style.animation =
"fadeIn 2s forwards";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},2000);

},300);

}

// ========================================
// GIFT PARTICLES
// ========================================

function createGiftParticles(){

for(let i=0;i<20;i++){

const star =
document.createElement("div");

star.innerHTML = "🌸";

star.style.position = "fixed";

star.style.left =
Math.random()*100 + "vw";

star.style.top =
Math.random()*100 + "vh";

star.style.fontSize = "25px";

star.style.animation =
"petalsFall 6s linear forwards";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},6000);

}

}

// ========================================
// MINI CONFETTI
// ========================================

function launchMiniConfetti(){

for(let i=0;i<20;i++){

const confetti =
document.createElement("div");

confetti.innerHTML = "🎉";

confetti.style.position =
"fixed";

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.top = "-20px";

confetti.style.fontSize =
"25px";

confetti.style.zIndex = "999";

confetti.style.animation =
"petalsFall 4s linear forwards";

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},4000);

}

}

// ========================================
// MAIN CONFETTI
// ========================================

function launchConfetti(){

for(let i=0;i<60;i++){

const confetti =
document.createElement("div");

const emojis = [
"🎉",
"✨",
"💖",
"🎊",
"🌸"
];

confetti.innerHTML =
emojis[
Math.floor(
Math.random()*
emojis.length
)
];

confetti.style.position =
"fixed";

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.top = "-20px";

confetti.style.fontSize =
Math.random()*20 + 20 + "px";

confetti.style.zIndex = "9999";

confetti.style.animation =
"petalsFall 6s linear forwards";

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},6000);

}

}

// ========================================
// FIREWORKS ENGINE
// ========================================

const canvas =
document.getElementById(
"fireworksCanvas"
);

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let fireworks = [];

class Firework{

constructor(x,y,color){

this.x = x;
this.y = y;

this.color = color;

this.particles = [];

for(let i=0;i<50;i++){

this.particles.push({

x:this.x,
y:this.y,

angle:
Math.random()*
Math.PI*2,

speed:
Math.random()*5+2,

radius:
Math.random()*3+1,

alpha:1

});

}

}

update(){

this.particles.forEach(
particle=>{

particle.x +=
Math.cos(
particle.angle
)*particle.speed;

particle.y +=
Math.sin(
particle.angle
)*particle.speed;

particle.alpha -= 0.015;

});

}

draw(){

this.particles.forEach(
particle=>{

ctx.beginPath();

ctx.arc(
particle.x,
particle.y,
particle.radius,
0,
Math.PI*2
);

ctx.fillStyle =
`rgba(${this.color},
${particle.alpha})`;

ctx.fill();

});

}

}

// ========================================
// START FIREWORKS
// ========================================

function startFireworks(){

setInterval(()=>{

const x =
Math.random()*
canvas.width;

const y =
Math.random()*
canvas.height/2;

const colors = [

"255,20,147",
"255,105,180",
"255,182,193",
"255,255,255"

];

const color =
colors[
Math.floor(
Math.random()*
colors.length
)
];

fireworks.push(
new Firework(
x,
y,
color
)
);

},700);

animateFireworks();

}

// ========================================
// FIREWORK ANIMATION
// ========================================

function animateFireworks(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

fireworks.forEach(
(firework,index)=>{

firework.update();

firework.draw();

if(
firework.particles[0]
.alpha <= 0
){

fireworks.splice(index,1);

}

}
);

requestAnimationFrame(
animateFireworks
);

}

// ========================================
// WINDOW RESIZE
// ========================================

window.addEventListener(
"resize",
()=>{

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}
);

// ========================================
// SMOKE EFFECT
// ========================================

function createSmokeEffect(){

for(let i=0;i<15;i++){

const smoke =
document.createElement("div");

smoke.innerHTML = "☁️";

smoke.style.position =
"fixed";

smoke.style.left =
"50%";

smoke.style.top =
"50%";

smoke.style.fontSize =
Math.random()*20+20+"px";

smoke.style.opacity =
"0.8";

smoke.style.zIndex =
"999";

smoke.style.pointerEvents =
"none";

smoke.style.animation =
"fadeUp 3s forwards";

document.body.appendChild(
smoke
);

setTimeout(()=>{

smoke.remove();

},3000);

}

}

// ========================================
// CAKE GLOW
// ========================================

function createCakeGlow(){

const glow =
document.createElement("div");

glow.style.position =
"fixed";

glow.style.width = "250px";

glow.style.height = "250px";

glow.style.borderRadius =
"50%";

glow.style.background =
"radial-gradient(circle, rgba(255,105,180,0.4), transparent)";

glow.style.left = "50%";

glow.style.top = "55%";

glow.style.transform =
"translate(-50%,-50%)";

glow.style.filter =
"blur(30px)";

glow.style.zIndex = "1";

glow.style.animation =
"pulse 2s infinite";

document.body.appendChild(
glow
);

setTimeout(()=>{

glow.remove();

},4000);

}

// ========================================
// CELEBRATION TEXT
// ========================================

function createCelebrationText(){

const text =
document.createElement("div");

text.innerHTML =
"🎉 HAPPY BIRTHDAY 🎉";

text.style.position =
"fixed";

text.style.top = "15%";

text.style.left = "50%";

text.style.transform =
"translateX(-50%)";

text.style.fontSize =
"32px";

text.style.fontWeight =
"bold";

text.style.color =
"#ff1493";

text.style.textShadow =
"0 0 20px pink";

text.style.zIndex =
"9999";

text.style.animation =
"fadeIn 1s forwards";

document.body.appendChild(
text
);

setTimeout(()=>{

text.remove();

},3000);

}

// ========================================
// AUTO FLOATING HEARTS
// ========================================

setInterval(()=>{

const heart =
document.createElement("div");

heart.innerHTML = "💖";

heart.style.position =
"fixed";

heart.style.left =
Math.random()*100+"vw";

heart.style.bottom =
"-20px";

heart.style.fontSize =
Math.random()*20+20+"px";

heart.style.opacity =
Math.random();

heart.style.pointerEvents =
"none";

heart.style.zIndex = "1";

heart.style.animation =
"heartsFly 8s linear forwards";

document.body.appendChild(
heart
);

setTimeout(()=>{

heart.remove();

},8000);

},800);

// ========================================
// END OF SCRIPT
// ========================================

// ========================================
// ADVANCED PARTICLE ENGINE
// ========================================

function createFloatingParticles(){

setInterval(()=>{

const particle =
document.createElement("div");

particle.classList.add(
"particle-dot"
);

particle.style.left =
Math.random()*100 + "vw";

particle.style.top =
Math.random()*100 + "vh";

particle.style.background =
`rgba(
255,
${Math.random()*200},
220,
0.8
)`;

particle.style.width =
Math.random()*8+4+"px";

particle.style.height =
particle.style.width;

document.body.appendChild(
particle
);

setTimeout(()=>{

particle.remove();

},5000);

},200);

}

createFloatingParticles();

// ========================================
// RANDOM SPARKLES
// ========================================

function createRandomSparkles(){

setInterval(()=>{

const sparkle =
document.createElement("div");

sparkle.classList.add(
"sparkle-star"
);

sparkle.innerHTML = "✨";

sparkle.style.left =
Math.random()*100 + "vw";

sparkle.style.top =
Math.random()*100 + "vh";

sparkle.style.fontSize =
Math.random()*20+15+"px";

document.body.appendChild(
sparkle
);

setTimeout(()=>{

sparkle.remove();

},3000);

},600);

}

createRandomSparkles();

// ========================================
// MUSIC VOLUME FADE
// ========================================

function fadeMusicIn(){

bgMusic.volume = 0;

let volume = 0;

const fadeInterval =
setInterval(()=>{

if(volume < 1){

volume += 0.05;

bgMusic.volume = volume;

}else{

clearInterval(
fadeInterval
);

}

},200);

}

// ========================================
// IMPROVED START EXPERIENCE
// ========================================

function startExperience(){

bgMusic.play();

fadeMusicIn();

changePage(
"countdownPage"
);

createSparkles();

createIntroBurst();

}

// ========================================
// INTRO BURST EFFECT
// ========================================

function createIntroBurst(){

for(let i=0;i<40;i++){

const burst =
document.createElement("div");

burst.innerHTML = "💖";

burst.style.position =
"fixed";

burst.style.left = "50%";

burst.style.top = "50%";

burst.style.fontSize =
Math.random()*30+20+"px";

burst.style.pointerEvents =
"none";

burst.style.zIndex = "9999";

burst.style.transform =
`translate(
${Math.random()*400-200}px,
${Math.random()*400-200}px
)`;

burst.style.animation =
"fadeUp 2s forwards";

document.body.appendChild(
burst
);

setTimeout(()=>{

burst.remove();

},2000);

}

}

// ========================================
// ADVANCED TOUCH RIPPLE
// ========================================

document.addEventListener(
"touchstart",
function(e){

const ripple =
document.createElement("div");

ripple.style.position =
"fixed";

ripple.style.width =
"20px";

ripple.style.height =
"20px";

ripple.style.borderRadius =
"50%";

ripple.style.background =
"rgba(255,255,255,0.5)";

ripple.style.left =
e.touches[0].clientX+"px";

ripple.style.top =
e.touches[0].clientY+"px";

ripple.style.transform =
"translate(-50%,-50%)";

ripple.style.pointerEvents =
"none";

ripple.style.zIndex =
"9999";

ripple.style.animation =
"rippleEffect 1s forwards";

document.body.appendChild(
ripple
);

setTimeout(()=>{

ripple.remove();

},1000);

}
);

// ========================================
// RIPPLE STYLE
// ========================================

const rippleStyle =
document.createElement("style");

rippleStyle.innerHTML = `

@keyframes rippleEffect{

0%{
transform:
translate(-50%,-50%)
scale(1);

opacity:1;
}

100%{
transform:
translate(-50%,-50%)
scale(12);

opacity:0;
}

}

`;

document.head.appendChild(
rippleStyle
);

// ========================================
// ENVELOPE OPEN EFFECT
// ========================================

function showLetter(){

const envelope =
document.querySelector(
".envelope"
);

envelope.classList.add(
"open"
);

document.getElementById(
"letterContent"
).classList.remove(
"hidden"
);

if(!typingStarted){

typingStarted = true;

startTyping();

}

createLetterParticles();

}

// ========================================
// LETTER PARTICLES
// ========================================

function createLetterParticles(){

for(let i=0;i<25;i++){

const flower =
document.createElement("div");

flower.innerHTML = "🌸";

flower.style.position =
"fixed";

flower.style.left =
Math.random()*100+"vw";

flower.style.top =
Math.random()*100+"vh";

flower.style.fontSize =
Math.random()*20+15+"px";

flower.style.animation =
"petalsFall 5s linear forwards";

flower.style.zIndex =
"999";

document.body.appendChild(
flower
);

setTimeout(()=>{

flower.remove();

},5000);

}

}

// ========================================
// GIFT OPEN EFFECT
// ========================================

function showGiftMessage(){

const gift =
document.querySelector(
".gift-box"
);

gift.classList.add("open");

document.getElementById(
"giftMessage"
).classList.remove(
"hidden"
);

launchMiniConfetti();

createGiftExplosion();

}

// ========================================
// GIFT EXPLOSION EFFECT
// ========================================

function createGiftExplosion(){

for(let i=0;i<50;i++){

const particle =
document.createElement("div");

const emojis = [
"💖",
"✨",
"🌸",
"🎀",
"💕"
];

particle.innerHTML =
emojis[
Math.floor(
Math.random()*
emojis.length
)
];

particle.style.position =
"fixed";

particle.style.left =
"50%";

particle.style.top =
"50%";

particle.style.fontSize =
Math.random()*25+20+"px";

particle.style.pointerEvents =
"none";

particle.style.zIndex =
"9999";

particle.style.transform =
`translate(
${Math.random()*500-250}px,
${Math.random()*500-250}px
)`;

particle.style.animation =
"fadeUp 2s forwards";

document.body.appendChild(
particle
);

setTimeout(()=>{

particle.remove();

},2000);

}

}

// ========================================
// ADVANCED PARALLAX EFFECT
// ========================================

document.addEventListener(
"mousemove",
function(e){

const moveX =
(e.clientX /
window.innerWidth - 0.5)*20;

const moveY =
(e.clientY /
window.innerHeight - 0.5)*20;

const orbs =
document.querySelectorAll(
".glow-orbs"
);

orbs.forEach(orb=>{

orb.style.transform =
`translate(
${moveX}px,
${moveY}px
)`;

});

}
);

// ========================================
// AUTO PAGE AMBIENT EFFECT
// ========================================

function createAmbientGlow(){

setInterval(()=>{

const glow =
document.createElement("div");

glow.style.position =
"fixed";

glow.style.width =
Math.random()*200+100+"px";

glow.style.height =
glow.style.width;

glow.style.borderRadius =
"50%";

glow.style.background =
`rgba(
255,
105,
180,
${Math.random()*0.15}
)`;

glow.style.left =
Math.random()*100+"vw";

glow.style.top =
Math.random()*100+"vh";

glow.style.filter =
"blur(40px)";

glow.style.pointerEvents =
"none";

glow.style.zIndex =
"0";

glow.style.animation =
"fadeIn 6s forwards";

document.body.appendChild(
glow
);

setTimeout(()=>{

glow.remove();

},6000);

},1200);

}

createAmbientGlow();

// ========================================
// ADVANCED AUTO HEART RAIN
// ========================================

function createHeartRain(){

setInterval(()=>{

const heart =
document.createElement("div");

const hearts = [
"💖",
"💕",
"💗",
"💓",
"💞"
];

heart.innerHTML =
hearts[
Math.floor(
Math.random()*
hearts.length
)
];

heart.style.position =
"fixed";

heart.style.left =
Math.random()*100+"vw";

heart.style.top =
"-30px";

heart.style.fontSize =
Math.random()*20+20+"px";

heart.style.opacity =
Math.random();

heart.style.pointerEvents =
"none";

heart.style.zIndex =
"1";

heart.style.animation =
"petalsFall 8s linear forwards";

document.body.appendChild(
heart
);

setTimeout(()=>{

heart.remove();

},8000);

},700);

}

createHeartRain();

// ========================================
// DYNAMIC BACKGROUND COLOR SHIFT
// ========================================

let hue = 0;

setInterval(()=>{

hue += 0.2;

document.body.style.background =
`linear-gradient(
180deg,
hsl(${330+hue},100%,92%),
hsl(${340+hue},100%,96%),
#ffffff
)`;

if(hue > 10){

hue = 0;

}

},100);

// ========================================
// DOUBLE TAP CELEBRATION
// ========================================

let lastTap = 0;

document.addEventListener(
"touchend",
function(e){

const currentTime =
new Date().getTime();

const tapLength =
currentTime - lastTap;

if(
tapLength < 300 &&
tapLength > 0
){

launchConfetti();

createCelebrationText();

}

lastTap = currentTime;

}
);

// ========================================
// SCREEN SHAKE EFFECT
// ========================================

function shakeScreen(){

document.body.style.animation =
"shakeScreen 0.5s";

setTimeout(()=>{

document.body.style.animation =
"";

},500);

}

const shakeStyle =
document.createElement("style");

shakeStyle.innerHTML = `

@keyframes shakeScreen{

0%{
transform:translateX(0);
}

20%{
transform:translateX(-5px);
}

40%{
transform:translateX(5px);
}

60%{
transform:translateX(-5px);
}

80%{
transform:translateX(5px);
}

100%{
transform:translateX(0);
}

}

`;

document.head.appendChild(
shakeStyle
);

// ========================================
// CAKE CLICK UPGRADE
// ========================================

function cutCake(){

const cake =
document.getElementById(
"cake"
);

cake.classList.add("cut");

launchConfetti();

createCakeGlow();

createCelebrationText();

shakeScreen();

cake.style.filter =
"drop-shadow(0 0 25px pink)";

}

// ========================================
// ADVANCED MUSIC VISUALIZER
// ========================================

function createMusicVisualizer(){

const visualizer =
document.createElement("div");

visualizer.id =
"musicVisualizer";

visualizer.style.position =
"fixed";

visualizer.style.bottom =
"20px";

visualizer.style.left =
"50%";

visualizer.style.transform =
"translateX(-50%)";

visualizer.style.display =
"flex";

visualizer.style.gap =
"6px";

visualizer.style.zIndex =
"999";

document.body.appendChild(
visualizer
);

for(let i=0;i<20;i++){

const bar =
document.createElement("div");

bar.style.width = "5px";

bar.style.height =
Math.random()*40+10+"px";

bar.style.borderRadius =
"10px";

bar.style.background =
"linear-gradient(180deg,#ff1493,#ff69b4)";

bar.style.animation =
`musicBars ${
Math.random()*1+0.5
}s infinite alternate`;

visualizer.appendChild(bar);

}

}

createMusicVisualizer();

// ========================================
// MUSIC BAR STYLE
// ========================================

const musicStyle =
document.createElement("style");

musicStyle.innerHTML = `

@keyframes musicBars{

0%{
height:10px;
opacity:0.5;
}

100%{
height:50px;
opacity:1;
}

}

`;

document.head.appendChild(
musicStyle
);

// ========================================
// SHOOTING STARS
// ========================================

function createShootingStars(){

setInterval(()=>{

const star =
document.createElement("div");

star.innerHTML = "🌠";

star.style.position =
"fixed";

star.style.left =
Math.random()*100+"vw";

star.style.top =
Math.random()*50+"vh";

star.style.fontSize =
"28px";

star.style.pointerEvents =
"none";

star.style.zIndex =
"1";

star.style.animation =
"shootStar 3s linear forwards";

document.body.appendChild(
star
);

setTimeout(()=>{

star.remove();

},3000);

},2500);

}

createShootingStars();

// ========================================
// SHOOTING STAR STYLE
// ========================================

const starStyle =
document.createElement("style");

starStyle.innerHTML = `

@keyframes shootStar{

0%{
transform:
translate(0,0)
rotate(0deg);

opacity:1;
}

100%{
transform:
translate(-300px,300px)
rotate(45deg);

opacity:0;
}

}

`;

document.head.appendChild(
starStyle
);

// ========================================
// ADVANCED FLOATING TEXTS
// ========================================

function createFloatingTexts(){

const texts = [

"Princess 💖",
"Cute Sister 🎀",
"Happy Birthday ✨",
"Best Sister 🌸",
"Forever Family 💕"

];

setInterval(()=>{

const text =
document.createElement("div");

text.innerHTML =
texts[
Math.floor(
Math.random()*
texts.length
)
];

text.style.position =
"fixed";

text.style.left =
Math.random()*100+"vw";

text.style.bottom =
"-20px";

text.style.fontSize =
"18px";

text.style.fontWeight =
"bold";

text.style.color =
"#ff1493";

text.style.textShadow =
"0 0 10px pink";

text.style.pointerEvents =
"none";

text.style.zIndex =
"2";

text.style.animation =
"heartsFly 10s linear forwards";

document.body.appendChild(
text
);

setTimeout(()=>{

text.remove();

},10000);

},3000);

}

createFloatingTexts();

// ========================================
// AUTO BALLOON BURST
// ========================================

function createBalloonBurst(){

setInterval(()=>{

const balloon =
document.createElement("div");

balloon.innerHTML = "🎈";

balloon.style.position =
"fixed";

balloon.style.left =
Math.random()*100+"vw";

balloon.style.bottom =
"-50px";

balloon.style.fontSize =
Math.random()*30+40+"px";

balloon.style.pointerEvents =
"none";

balloon.style.zIndex =
"1";

balloon.style.animation =
"balloonFly 12s linear forwards";

document.body.appendChild(
balloon
);

setTimeout(()=>{

const pop =
document.createElement("div");

pop.innerHTML = "💥";

pop.style.position =
"fixed";

pop.style.left =
balloon.style.left;

pop.style.top =
"20%";

pop.style.fontSize =
"30px";

pop.style.zIndex =
"999";

document.body.appendChild(
pop
);

setTimeout(()=>{

pop.remove();

},1000);

},10000);

setTimeout(()=>{

balloon.remove();

},12000);

},4000);

}

createBalloonBurst();

// ========================================
// AUTO CELEBRATION MODE
// ========================================

function autoCelebrate(){

setInterval(()=>{

launchMiniConfetti();

createSparkles();

},15000);

}

autoCelebrate();

// ========================================
// BATTERY OPTIMIZER
// ========================================

let lowPowerMode = false;

function enableLowPowerMode(){

lowPowerMode = true;

console.log(
"Low Power Mode Enabled"
);

}

window.addEventListener(
"blur",
()=>{

enableLowPowerMode();

}
);

// ========================================
// SECRET MULTI TAP EASTER EGG
// ========================================

let tapCounter = 0;

document.addEventListener(
"click",
()=>{

tapCounter++;

if(tapCounter >= 15){

secretCelebration();

tapCounter = 0;

}

}
);

function secretCelebration(){

launchConfetti();

createCelebrationText();

for(let i=0;i<80;i++){

const emoji =
document.createElement("div");

emoji.innerHTML = "💖";

emoji.style.position =
"fixed";

emoji.style.left =
Math.random()*100+"vw";

emoji.style.top =
Math.random()*100+"vh";

emoji.style.fontSize =
Math.random()*40+20+"px";

emoji.style.animation =
"fadeUp 4s forwards";

emoji.style.zIndex =
"9999";

document.body.appendChild(
emoji
);

setTimeout(()=>{

emoji.remove();

},4000);

}

}

// ========================================
// FINAL CONSOLE MESSAGE
// ========================================

console.log(
`
💖 Ultra Premium Birthday Website Loaded Successfully 💖

Made With Love By Vivek ✨
`
);

// ========================================
// END OF FULL SCRIPT
// ========================================

