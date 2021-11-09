
//array to store the stars
var stars =[];

//variable to control the speed
var speed;

function setup(){
    let cnv=createCanvas(600,600);
    cnv.parent("square");
    for(var i=0;i<800;i++){
        stars[i]=new Star();
    }
}

function draw(){
    //mapping the mouse to x-axis to contol the speed
    speed=map(mouseX,-75,width,0,50);
    background(0);
    translate(width/2,height/2);

    for(var i=0;i<800;i++)
    {
        stars[i].update();
        stars[i].show();
    }
}