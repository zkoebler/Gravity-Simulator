


function setup() {
    createCanvas(1000, 1000);
    sunLocation = createVector(500,500);
    earthLocation = createVector(sunLocation.x/2,sunLocation.y/2);
  }
  
  
  function draw() {
    background(255);
    fill(255, 255, 0);
    circle(sunLocation.x,sunLocation.y,100);
    
    fill(0,255,0);
    circle(earthLocation.x,earthLocation.y,20);

    let G = 2000;
    let m1 = 10;
    let m2 = 1;
    r = p5.Vector.sub(sunLocation,earthLocation)
    forceGravity = G*(m1*m2)/pow((r).mag(),2);
    rUnit = p5.Vector.normalize(r);

    if(r.mag() > 50){
      earthLocation.x += (rUnit.x)*forceGravity;
      earthLocation.y += (rUnit.y)*forceGravity;
    }
    else{
      earthLocation.x = sunLocation.x;
      earthLocation.y =sunLocation.y;
    }

   
  }