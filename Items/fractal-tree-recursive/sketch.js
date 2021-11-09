
var angle = 0;
var slider1,slider2;
var length;
var w = window.innerWidth;
var h = window.innerHeight;

function setup() {

    let cnv=createCanvas(500, 500);
    cnv.parent("square");

    slider1 = createSlider(10, 200,100, 1);
    slider1.parent("slider1");
    slider1.size(400, 20);

    slider2 = createSlider(0, PI, PI / 4, 0.01);
    slider2.parent("slider2");
    slider2.size(400, 20);
}

function draw() {
    background(51);
    angle = slider2.value();
    stroke(255);
    translate(250, height);
    length=slider1.value();
    branch(length);

}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > length/25) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }

    //line(0, 0, 0, -len * 0.67);
}