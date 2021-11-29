img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('baby sleeping.jpg');
}

function draw() {
    image(img, 0, 0, 380, 380);


    if(status != "")
    {
        r = random(255);
        g =  random(225);
        b =  random(255);
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++);
        document.getElementById("status").innerHTML = "Status : Baby Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
        
        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", object[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r,g,b)
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Baby";
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.dtect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}