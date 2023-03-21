lips_X=0;
lips_Y=0;

function preload() {
lips = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);


}

function draw()
{
    image(video,0,0,300,300);
    image(lips,lips_X,lips_Y,55,50);
}    


function take_snapshot(){
save("myLipsFilter.jpg");
}

function modelLoaded() {
    console.log('PoseNet Is Initialised');
    }
    
    function gotPose(results) 
    {
        if(results.length > 0){
            console.log(results);
            console.log("nose x: "+results[0].pose.nose.x);
            lips_X = results[0].pose.nose.x-35;
            console.log("nose y: "+results[0].pose.nose.y);
            lips_Y = results[0].pose.nose.y;
        };
    } 
    