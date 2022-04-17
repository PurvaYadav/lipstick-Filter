lipsX=0;
lipsY=0;

function preload() {
red_lips = 'https://i.postimg.cc/bJc7z4Zb/l1.png';
}

function setup(){
canvas = createCanvas(400,400);
canvas.center();
video = createCapture(VIDEO);
video.size(400,400);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);


}

function draw()
{
    image(video,0,0,400,400);
    fill(255,0,0,);
    stroke(255,0,0);
    circle(lipsX,lipsY, 20);
    image(red_lips,lipsX,lipsY,30,30);
}    


function take_snapshot(){
save("myLipsFilter.jpg");
}

function modelLoaded() {
    console.log('PoseNet Is Initialised');
    }
    
    function gotPoses(results) 
    {
        if(results.length = 0) 
        {
            console.log(results);
            console.log("lips x = " + lipsX[0]);
            console.log("lips y = " + lipsY[0]);
        }
    
    } 
    