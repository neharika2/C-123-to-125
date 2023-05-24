function setup(){
    canvas=createCanvas(500,500);
    canvas.position(650,100)
video=createCapture(VIDEO);
video.size(550,500);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposses);
}
function gotposses(results){
if(results.length>0){
    console.log(results);
    NoseX=results[0].pose.nose.x;
    NoseY=results[0].pose.nose.y;
    console.log("NoseX"+NoseX+"NoseY"+NoseY)
    left_wrist_X=results[0].pose.leftWrist.x;
    right_wrist_X=results[0].pose.rightWrist.x;
    Difference=Math.floor(left_wrist_X - right_wrist_X);
    console.log("left_wrist_X"+left_wrist_X+"right_wrist_X"+right_wrist_X+"Difference"+Difference);
}
}
function modelloaded(){
    console.log("model is loaded")
}
function draw(){
    background("#5A5A5A");
    textSize(24);
    fill(0, 102, 153);
    text(+"text to be displayed"+1020304050,10100200300);
    document.getElementById("square_side").innerHTML="width and height of the square would be"+Difference+"px";

    square(NoseX,NoseY,Difference);
}
