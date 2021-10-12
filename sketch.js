let sunLocation = null;
let earthLocation = null;


function setup() {
    createCanvas(1000, 1000);
    sunLocation = createVector(500,500);
    earthLocation = createVector(sunLocation.x/2,sunLocation.y);

    
  }
  
  
  function draw() {
    background(255);
    fill(255, 255, 0);
    circle(sunLocation.x,sunLocation.y,100);
    noFill();
    fill(0,255,0);


    //simulate gravitational force
    const sunMass = 100;
    const earthMass = 0.5;
    const ForceGravity = (sunMass*earthMass)/(pow(dist(sunLocation.x,sunLocation.y,earthLocation.x,earthLocation.y),2));
    const earthAcceleration = ForceGravity/earthMass;

    
    
    circle(earthLocation.x,earthLocation.y ,20);
    
    
    if(earthLocation.x < sunLocation.x)
    {
      earthLocation.x += sunLocation.x*earthAcceleration;
    }
    else{
      earthLocation.x -= sunLocation.x*earthAcceleration;
    }

    if(earthLocation.y < sunLocation.y)
    {
      earthLocation.y += sunLocation.y*earthAcceleration;
    }
    else{
      earthLocation.y -= sunLocation.y*earthAcceleration;
    }
    

    
    
  }