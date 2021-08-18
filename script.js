const prev = document.getElementById("prev");
const nex = document.getElementById("next");
let userName = document.getElementById('name');
let job = document.getElementById('job');
let msg = document.getElementById('msg');
let profile = document.getElementById('profile');





const Testimony = function (name, job, msg, profile){

    this.name = name;
    this.job =  job;
    this.msg = msg;
    this.profile = profile;

}

const tanya = new Testimony(
    'Tanya Sinclair',
    'UX Engineer',
    `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    './images/image-tanya.jpg',
);
const john = new Testimony(

    'John Tarkpor',
    'Junior Front-end Developer',

    `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    './images/image-john.jpg',
);

const testimonies = [tanya, john];
let movement = 0;


prev.addEventListener('click', ()=>{
    userName.innerHTML = testimonies[0].name;
    msg.innerHTML = testimonies[0].msg;
    profile.src = testimonies[0].profile;
    job.innerHTML = testimonies[0].job
});
next.addEventListener('click',()=>{
    userName.innerHTML = testimonies[1].name;
    msg.innerHTML = testimonies[1].msg;
    profile.src = testimonies[1].profile;
    job.innerHTML = testimonies[1].job
});