let symmetry =6;
let angle = 360 / symmetry;
let saveButton;
let clearButton;
let slider;
let sym_slider;
let xoff = 0;

// Sliders : brush,number of symmetry,saveButton,ClearButton

function setup() {

    let cnv=createCanvas(400, 400);
    cnv.parent("square");

    angleMode(DEGREES);
    background(127);

    saveButton = createButton('save');
    saveButton.mousePressed(saveSnowflake);
    saveButton.parent("savebutton");

    clearButton = createButton('clear');
    clearButton.mousePressed(clearCanvas);
    clearButton.parent("savebutton");

    slider = createSlider(1, 16, 4, 0.1);
    slider.parent("slider");
    slider.size(360, 20);

    sym_slider = createSlider(2,32,6,2);
    sym_slider.parent("sym_slider");
    sym_slider.size(360, 20);
    // colorMode(HSB,255,255,255);

}

function saveSnowflake() {
    save('snowflake.png');
}

function clearCanvas() {
    background(127);
    xoff=0;
}


function draw() {

    translate(width / 2, height / 2);

    symmetry = sym_slider.value();

    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let mx = mouseX - width / 2;
        let my = mouseY - height / 2;
        let pmx = pmouseX - width / 2;
        let pmy = pmouseY - height / 2;

        if (mouseIsPressed) {
            let hu = map(sin(xoff), -1, 1, 0, 255);
            // let hu = noise(xoff) * 255;
            xoff += 1;
            // if(xoff>36)
            //     xoff=0;
            stroke(hu, 100);
            let angle = 360 / symmetry;
            for (let i = 0; i < symmetry; i++) {
                rotate(angle);
                //let d = dist(mx, my, pmx, pmy);
                //let sw = map(d, 0, 16, 16, 2);
                let sw = slider.value();
                strokeWeight(sw);
                line(mx, my, pmx, pmy);
                push();
                scale(1, -1);
                line(mx, my, pmx, pmy);
                pop();
            }
        }
    }
}