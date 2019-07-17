var canvas;
const yaxis = 1;
let yoff = 0.0;

function windowResized() {
  resizeCanvas(windowWidth*2, windowHeight*4.1958042);
  background(150);
}

function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth*2, windowHeight*4.1958042);
  canvas.position(0,0);
  canvas.style('z-index','-1')
  background(255,255,255);
  c2 = color(87,233,255);
  c1 = color(0, 0, 0);
}

function draw() {
strokeWeight(1);
  // put drawing code here
    // sky
//   beginShape();
// fill(166, 220, 255);
// stroke(166, 220, 255)
//   vertex(width/3.03,height/7.55);
//   vertex(width/3.03,height/8.05);
//   vertex(width/3.07, height/8.05);
//   vertex(width/3.15, height/7.9);
//   vertex(width/3.16, height/9.1);
//   vertex(width/3.2, height/10.4);
//   vertex(width/3.185, height/10.7);
//   vertex(width/3.2, height/11);
//   vertex(width/3.2, height/11.3);
//   vertex(width/3.2, height/11);
//   vertex(width/3.215, height/10.7);
//   vertex(width/3.2, height/10.4);
//   vertex(width/3.23, height/9.1);
//   vertex(width/3.23, height/8);
//   vertex(width/3.26, height/8);
//   vertex(width/3.26, height/9.3);
//   vertex(width/3.28, height/9.3);
//   vertex(width/3.28, height/9.9);
//   vertex(width/3.33, height/9.9);
//   vertex(width/3.33, height/9.3);
//   vertex(width/3.35, height/9.3);
//   vertex(width/3.35, height/8.7);
//   vertex(width/3.36, height/8.9);
//   vertex(width/3.45, height/8.9);
//   vertex(width/3.45, height/8.7);
//   vertex(width/3.48, height/8.4);
//   vertex(width/3.48, height/8);
//   vertex(width/3.5, height/8);
//   vertex(width/3.5, height/7.6);
//   vertex(width/3.56, height/7.6);
//   vertex(width/3.56, height/9.8);
//   vertex(width/3.69, height/9.8);
//   vertex(width/3.69, height/9.2);
//   vertex(width/3.71, height/9.2);
//   vertex(width/3.71, height/10);
//   vertex(width/3.79, height/10);
//   vertex(width/3.79, height/9);
//   vertex(width/3.82, height/9);
//   vertex(width/3.84, height/8.5);
//   vertex(width/3.84, height/8.2);
//   vertex(width/3.87, height/8.2);
//   vertex(width/3.87, height/7.9);
//   vertex(width/3.94, height/7.9);
//   vertex(width/3.94, height/8.2);
//   vertex(width/3.96, height/8.2);
//   vertex(width/3.96, height/7.9);
//   vertex(width/3.98, height/7.9);
//   vertex(width/3.98, height/9.2);
//   vertex(width/4.01, height/9);
//   vertex(width/4.05, height/10.2);
//   vertex(width/4.1, height/9);
//   vertex(width/4.13, height/9.2);
//   vertex(width/4.13, height/8.8);
//   vertex(width/4.19, height/8.8);
//   vertex(width/4.19, height/8.5);
//   vertex(width/4.25, height/8.5);
//   vertex(width/4.25, height/8.75);
//   vertex(width/4.32, height/8.75);
//   vertex(width/4.32, height/9.7);
//   vertex(width/4.39, height/9.7);
//   vertex(width/4.39, height/10.7);
//   vertex(width/4.51, height/10.7);
//   vertex(width/4.51, height/10.5);
//   vertex(width/4.6, height/10.5);
//   vertex(width/4.6, height/10.2);
//   vertex(width/4.63, height/10.2);
//   vertex(width/4.63, height/10.75);
//   vertex(width/4.75, height/10.75);
//   vertex(width/4.75, height/10.2);
//   vertex(width/4.87, height/10.2);
//   vertex(width/4.87, height/10.6);
//   vertex(width/5.09, height/10.6);
//   vertex(width/5.09, height/9.4);
//   vertex(width/5.11, height/9.1);
//   vertex(width/5.2, height/9.1);
//   vertex(width/5.2, height/9.7);
//   vertex(width/5.24, height/9.9);
//   vertex(width/5.28, height/9.7);
//   vertex(width/5.28, height/9.1);
//   vertex(width/5.34, height/9.1);
//   vertex(width/5.34, height/8);
//   vertex(width/5.42, height/8.2);
//   vertex(width/5.42, height/8.4);
//   vertex(width/5.46, height/8.5);
//   vertex(width/5.53, height/8.4);
//   vertex(width/5.53, height/9.9);
//   vertex(width/5.63, height/9.9);
//   vertex(width/5.63, height/10.2);
//   vertex(width/5.84, height/10.2);
//   vertex(width/5.84, height/9.45);
//   vertex(width/5.95, height/9.45);
//   vertex(width/5.95, height/8.2);
//   vertex(width/6.03, height/8.2);
//   vertex(width/6.08, height/7.8);
//   vertex(width/6.08, height/11.8);
//   vertex(width/6.77, height/11.8);
//   vertex(width/6.77, height/8.6);
//   vertex(width/7.02, height/8.6);
//   vertex(width/7.02, height/8.2);
//   vertex(width/7.1, height/8);
//   vertex(width/7.18, height/8.2);
//   vertex(width/7.18, height/8.4);
//   vertex(width/7.37, height/8.4);
//   vertex(width/7.37, height/9.5);
//   vertex(width/7.53, height/9.5);
//   vertex(width/7.53, height/10.4);
//   vertex(width/7.75, height/10.4);
//   vertex(width/7.75, height/10.8);
//   vertex(width/8, height/10.8);
//   vertex(width/8, height/11.4);
//   vertex(width/8.21, height/11.4);
//   vertex(width/8.21, height/10.8);
//   vertex(width/8.29, height/10.8);
//   vertex(width/8.29, height/10.4);
//   vertex(width/8.75, height/10.4);
//   vertex(width/8.75, height/9.6);
//   vertex(width/9.8, height/9.6);
//   vertex(width/9.8, height/9.9);
//   vertex(width/10, height/9.9);
//   vertex(width/10, height/12);
//   vertex(width/10.75, height/12);
//   vertex(width/10.75, height/11.6);
//   vertex(width/11, height/11.6);
//   vertex(width/11, height/9.3);
//   vertex(width/11.2, height/9.3);
//   vertex(width/11.2, height/10.8);
//   vertex(width/11.4, height/10.8);
//   vertex(width/11.4, height/11);
//   vertex(width/12, height/11);
//   vertex(width/12, height/10.8);
//   vertex(width/13.2, height/10.8);
//   vertex(width/13.2, height/9.75);
//   vertex(width/13.6, height/9.75);
//   vertex(width/13.6, height/15);
//   vertex(width/13.7, height/15);
//   vertex(width/13.7, height/18);
//   vertex(width/14, height/18);
//   vertex(width/14, height/20.2);
//   vertex(width/14.7, height/24);
//   vertex(width/14.8, height/33);
//   vertex(width/15.1, height/36);
//   vertex(width/15.2, height/80);
//   vertex(width/15.3, height/36);
//   vertex(width/15.6, height/33);
//   vertex(width/15.7, height/24);
//   vertex(width/16.9, height/20.2);
//   vertex(width/17, height/18);
//   vertex(width/17.3, height/18);
//   vertex(width/17.3, height/15);
//   vertex(width/17.6, height/15);
//   vertex(width/17.6, height/9.75);
//   vertex(width/20.5, height/9.75);
//   vertex(width/20.5, height/10);
//   vertex(width/27, height/10);
//   vertex(width/27, height/9.7);
//   vertex(width/37, height/9.7);
//   vertex(width/37, height/8.6);
//   vertex(width/42, height/8.6);
//   vertex(width/42, height/14.5);
//   vertex(width/44, height/14.5);
//   vertex(width/44, height/15.6);
//   vertex(width/75, height/16.5);
//   vertex(width/85, height/16.3);
//   vertex(width/160, height/16.3);
//   vertex(width/160, height/15);
//   vertex(width/230, height/15);
//   vertex(width/230, height/9.5);
//   // stroke(0);
//   vertex(width/1000, height/9.5);
//   vertex(width/1000, height/10000);
//   vertex(width, height/10000);
//   vertex(width, height/7.55);
//   vertex(width/3.03, height/7.55)
// endShape();
//
// // buildings
// beginShape();
// fill(150);
// stroke(150);
// vertex(width/3.03,height/7.55);
// vertex(width/3.03,height/8.05);
// vertex(width/3.07, height/8.05);
// vertex(width/3.15, height/7.9);
// vertex(width/3.16, height/9.1);
// vertex(width/3.2, height/10.4);
// vertex(width/3.185, height/10.7);
// vertex(width/3.2, height/11);
// vertex(width/3.2, height/11.3);
// vertex(width/3.2, height/11);
// vertex(width/3.215, height/10.7);
// vertex(width/3.2, height/10.4);
// vertex(width/3.23, height/9.1);
// vertex(width/3.23, height/8);
// vertex(width/3.26, height/8);
// vertex(width/3.26, height/9.3);
// vertex(width/3.28, height/9.3);
// vertex(width/3.28, height/9.9);
// vertex(width/3.33, height/9.9);
// vertex(width/3.33, height/9.3);
// vertex(width/3.35, height/9.3);
// vertex(width/3.35, height/8.7);
// vertex(width/3.36, height/8.9);
// vertex(width/3.45, height/8.9);
// vertex(width/3.45, height/8.7);
// vertex(width/3.48, height/8.4);
// vertex(width/3.48, height/8);
// vertex(width/3.5, height/8);
// vertex(width/3.5, height/7.6);
// vertex(width/3.56, height/7.6);
// vertex(width/3.56, height/9.8);
// vertex(width/3.69, height/9.8);
// vertex(width/3.69, height/9.2);
// vertex(width/3.71, height/9.2);
// vertex(width/3.71, height/10);
// vertex(width/3.79, height/10);
// vertex(width/3.79, height/9);
// vertex(width/3.82, height/9);
// vertex(width/3.84, height/8.5);
// vertex(width/3.84, height/8.2);
// vertex(width/3.87, height/8.2);
// vertex(width/3.87, height/7.9);
// vertex(width/3.94, height/7.9);
// vertex(width/3.94, height/8.2);
// vertex(width/3.96, height/8.2);
// vertex(width/3.96, height/7.9);
// vertex(width/3.98, height/7.9);
// vertex(width/3.98, height/9.2);
// vertex(width/4.01, height/9);
// vertex(width/4.05, height/10.2);
// vertex(width/4.1, height/9);
// vertex(width/4.13, height/9.2);
// vertex(width/4.13, height/8.8);
// vertex(width/4.19, height/8.8);
// vertex(width/4.19, height/8.5);
// vertex(width/4.25, height/8.5);
// vertex(width/4.25, height/8.75);
// vertex(width/4.32, height/8.75);
// vertex(width/4.32, height/9.7);
// vertex(width/4.39, height/9.7);
// vertex(width/4.39, height/10.7);
// vertex(width/4.51, height/10.7);
// vertex(width/4.51, height/10.5);
// vertex(width/4.6, height/10.5);
// vertex(width/4.6, height/10.2);
// vertex(width/4.63, height/10.2);
// vertex(width/4.63, height/10.75);
// vertex(width/4.75, height/10.75);
// vertex(width/4.75, height/10.2);
// vertex(width/4.87, height/10.2);
// vertex(width/4.87, height/10.6);
// vertex(width/5.09, height/10.6);
// vertex(width/5.09, height/9.4);
// vertex(width/5.11, height/9.1);
// vertex(width/5.2, height/9.1);
// vertex(width/5.2, height/9.7);
// vertex(width/5.24, height/9.9);
// vertex(width/5.28, height/9.7);
// vertex(width/5.28, height/9.1);
// vertex(width/5.34, height/9.1);
// vertex(width/5.34, height/8);
// vertex(width/5.42, height/8.2);
// vertex(width/5.42, height/8.4);
// vertex(width/5.46, height/8.5);
// vertex(width/5.53, height/8.4);
// vertex(width/5.53, height/9.9);
// vertex(width/5.63, height/9.9);
// vertex(width/5.63, height/10.2);
// vertex(width/5.84, height/10.2);
// vertex(width/5.84, height/9.45);
// vertex(width/5.95, height/9.45);
// vertex(width/5.95, height/8.2);
// vertex(width/6.03, height/8.2);
// vertex(width/6.08, height/7.8);
// vertex(width/6.08, height/11.8);
// vertex(width/6.77, height/11.8);
// vertex(width/6.77, height/8.6);
// vertex(width/7.02, height/8.6);
// vertex(width/7.02, height/8.2);
// vertex(width/7.1, height/8);
// vertex(width/7.18, height/8.2);
// vertex(width/7.18, height/8.4);
// vertex(width/7.37, height/8.4);
// vertex(width/7.37, height/9.5);
// vertex(width/7.53, height/9.5);
// vertex(width/7.53, height/10.4);
// vertex(width/7.75, height/10.4);
// vertex(width/7.75, height/10.8);
// vertex(width/8, height/10.8);
// vertex(width/8, height/11.4);
// vertex(width/8.21, height/11.4);
// vertex(width/8.21, height/10.8);
// vertex(width/8.29, height/10.8);
// vertex(width/8.29, height/10.4);
// vertex(width/8.75, height/10.4);
// vertex(width/8.75, height/9.6);
// vertex(width/9.8, height/9.6);
// vertex(width/9.8, height/9.9);
// vertex(width/10, height/9.9);
// vertex(width/10, height/12);
// vertex(width/10.75, height/12);
// vertex(width/10.75, height/11.6);
// vertex(width/11, height/11.6);
// vertex(width/11, height/9.3);
// vertex(width/11.2, height/9.3);
// vertex(width/11.2, height/10.8);
// vertex(width/11.4, height/10.8);
// vertex(width/11.4, height/11);
// vertex(width/12, height/11);
// vertex(width/12, height/10.8);
// vertex(width/13.2, height/10.8);
// vertex(width/13.2, height/9.75);
// vertex(width/13.6, height/9.75);
// vertex(width/13.6, height/15);
// vertex(width/13.7, height/15);
// vertex(width/13.7, height/18);
// vertex(width/14, height/18);
// vertex(width/14, height/20.2);
// vertex(width/14.7, height/24);
// vertex(width/14.8, height/33);
// vertex(width/15.1, height/36);
// vertex(width/15.2, height/80);
// vertex(width/15.3, height/36);
// vertex(width/15.6, height/33);
// vertex(width/15.7, height/24);
// vertex(width/16.9, height/20.2);
// vertex(width/17, height/18);
// vertex(width/17.3, height/18);
// vertex(width/17.3, height/15);
// vertex(width/17.6, height/15);
// vertex(width/17.6, height/9.75);
// vertex(width/20.5, height/9.75);
// vertex(width/20.5, height/10);
// vertex(width/27, height/10);
// vertex(width/27, height/9.7);
// vertex(width/37, height/9.7);
// vertex(width/37, height/8.6);
// vertex(width/42, height/8.6);
// vertex(width/42, height/14.5);
// vertex(width/44, height/14.5);
// vertex(width/44, height/15.6);
// vertex(width/75, height/16.5);
// vertex(width/85, height/16.3);
// vertex(width/160, height/16.3);
// vertex(width/160, height/15);
// vertex(width/230, height/15);
// vertex(width/230, height/9.5);
// vertex(width/1000, height/9.5);
// vertex(width/1000, height/7.55);
// vertex(width/3.03, height/7.55);
// endShape();

beginShape();
fill(166, 220, 255);
stroke(166, 220, 255);
strokeWeight(1);
vertex(windowWidth*0, windowHeight*0);
vertex(windowWidth*2, windowHeight*0);
vertex(windowWidth*2, windowHeight/1.80100756);
vertex(windowWidth*0, windowHeight/1.80100756);
vertex(windowWidth*0, windowHeight*0);
endShape();

// perlin noise fluxuating waves
beginShape();
fill(87,233,255);
stroke(87,233,255);
 let xoff = 0; // Option #1: 2D Noise
 // let xoff = yoff; // Option #2: 1D Noise

 // Iterate over horizontal pixels
 for (let x = 950; x <= width; x += 20) {
   // Calculate a y value according to noise, map to

   // Option #1: 2D Noise
   let y = map(noise(xoff, yoff), 0, 1, 420, 355);

   // Option #2: 1D Noise
   // let y = map(noise(xoff), 0, 1, 200,300);

   // Set the vertex
   vertex(x, y);
   // Increment x dimension for noise
   xoff += 0.1;
 }
 // increment y dimension for noise
 yoff += 0.02;
 vertex(width, height/7.55);
 vertex(width/3.03, height/7.55);
 endShape(CLOSE);

// ocean gradient
setGradient(950, 397, 2880-950, 3000-397, c2, c1, yaxis);
// ocean shape
beginShape();
fill(75,40,0);
stroke(75,40,0);
strokeWeight(1);
curveVertex(windowWidth/1.51738672, windowHeight/1.80100756);
curveVertex(windowWidth/1.51738672, windowHeight/1.80100756);
curveVertex(windowWidth/1.48453608, windowHeight/1.74390244);
curveVertex(windowWidth/1.42574257, windowHeight/1.70238095);
curveVertex(windowWidth/1.37142857, windowHeight/1.68235294);
curveVertex(windowWidth/1.32110092, windowHeight/1.55434783);
curveVertex(windowWidth/1.2972973, windowHeight/1.43);
curveVertex(windowWidth/1.27433628, windowHeight/1.32407407);
curveVertex(windowWidth/1.22033898, windowHeight/1.27678571);
curveVertex(windowWidth/1.17073171, windowHeight/1.25438596);
curveVertex(windowWidth/1.125, windowHeight/1.23275862);
curveVertex(windowWidth/1.06666667, windowHeight/1.19166667);
curveVertex(windowWidth/1.02857143, windowHeight/1.13492063);
curveVertex(windowWidth, windowHeight/1.02142857);
curveVertex(windowWidth/.98630137, windowHeight/.89375);
curveVertex(windowWidth/.97297297, windowHeight/.59583333);
curveVertex(windowWidth/.96, windowHeight/.446875);
curveVertex(windowWidth/.94736842, windowHeight/.3575);
curveVertex(windowWidth/.93506494, windowHeight/.29791667);
curveVertex(windowWidth/.92307692, windowHeight/.275);
curveVertex(windowWidth/.91139241, windowHeight/.26481481);
curveVertex(windowWidth/.88343558, windowHeight/.26);
curveVertex(windowWidth/.85714286, windowHeight/.25535714);
curveVertex(windowWidth/.8, windowHeight/.25087719);
curveVertex(windowWidth/.73846154, windowHeight/.24826389);
curveVertex(windowWidth/.68571429, windowHeight/.24912892);
curveVertex(windowWidth/.65454545, windowHeight/.25087719);
curveVertex(windowWidth/.64, windowHeight/.25176056);
curveVertex(windowWidth/.61276596, windowHeight/.25087719);
curveVertex(windowWidth/.5877331, windowHeight/.24826389);
curveVertex(windowWidth/.56916996, windowHeight/.24319728);
curveVertex(windowWidth/.54752852, windowHeight/.24155405);
curveVertex(windowWidth/.52747253, windowHeight/.24237288);
curveVertex(windowWidth/.50883392, windowHeight/.24486301);
vertex(windowWidth/.5, windowHeight/.24655172);
vertex(windowWidth/.48, windowHeight/.24655172);
vertex(windowWidth/.5, windowHeight/.23833333);
vertex(windowWidth*0, windowHeight/.23833333);
vertex(windowWidth*0, windowHeight/1.80100756);
vertex(windowWidth/1.51738672, windowHeight/1.80100756);
// vertex(950, 397);
endShape();



// messages that pop up with the bubbles
// jelly fish
// whale
// fish
// coral
// sand tiger shark
// plastic bag, straw, soda rings, bottles
// fish swim by pop up info
// another trash bag float in from vacation and have a conversation (ocean currents)
// timer on website, how long have you been here for?
// counter for how many easter eggs you've found and how many are left
// more trash as you descend futher down

// for next monday
// first plastic bag blowing into ocean animation
// make cursor plastic bag
// layer 1 seagull with the rings around its neck (blank speech bubble)
// layer 2 two trash bags meet and talk about their journeys
// layer 3 turtle sees bag and thinks is a jellyfish to eat, chokes and spits out





}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
}
}
