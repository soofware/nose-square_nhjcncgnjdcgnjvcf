noseX=0
noseY=0
difference=0
letfWristX=0
rightWristX=0

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 550);

    canvas = createCanvas(450, 450);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("can i haz chezburger plz")
}



function gotPoses(results){
    if(results.length > 0){
        //console.error(error)
    
        console.log(results)
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
        //document.getElementById("result_object_name").innerHTML = results[0].label
        //document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

    }
}    

function draw(){
    background('#969A97')
    fill("#0B5563");
    stroke("#C44900");
    strokeWeight(4);
    square(noseX, noseY, difference);
}