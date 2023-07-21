console.log("Hi this my work ! ");
//Initialize the varaiables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');

let songs=[
    {songName:"Tu hi hai Ashiqui -by Arijit and Palak", filePath:"1.mp3",coverPath: "Cover1.jpg" },
    {songName:"Raabta - by Arijit and Shreya" , filePath:"2.mp3",coverPath: "Cover2.jpg" },
    {songName:"Sun rha hai na tu - by Arijit and Shreya", filePath:"3.mp3",coverPath: "Cover3.jpg" },
    {songName:"Thodi der - by Shreya and Farhan S", filePath:"4.mp3",coverPath: "Cover4.jpg" },
    {songName:"Teri Ore -by Shreya and Rahat Khan", filePath:"5.mp3",coverPath: "Cover5.jpg" },
    {songName:"Agar tum mil jao -by Shreya Ghoshal", filePath:"6.mp3",coverPath: "Cover6.jpg" },
    {songName:"Hasi -by Shreya Ghoshal", filePath:"7.mp3",coverPath: "Cover7.jpg" },
    {songName:"Kabhi jo badal barse -by Shreya and Arijit", filePath:"8.mp3",coverPath: "Cover8.jpg" },
    {songName:"Rehnuma -by Shreya and Inder", filePath:"9.mp3",coverPath: "Cover9.jpg" },
]

//audiElement,play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//Listen to Events
audioElement.addEventListener('timeUpdate',()=>{
    console.log('timeupdate');
    //Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= (myProgressBar.value * audioElement.duration)/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ 
       element.classList.remove('fa-circle-pause'); 
       element.classList.add('fa-circle-play');   
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
         makeAllPlays();
         songIndex=parseInt(e.target.id);
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
         audioElement.src=`${songIndex}.mp3`;
         myProgressBar.value=0;
         audioElement.currentTime = 0;
         masterSongName.innerText=songs[songIndex-1].songName;
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=1;
    }
    else{
        songIndex=songIndex+1;
    }
    audioElement.src=`${songIndex}.mp3`;
    audioElement.currentTime = 0;
    myProgressBar.value=0;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=9;
    }
    else{
        songIndex=songIndex-1;
    }
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    myProgressBar.value=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
