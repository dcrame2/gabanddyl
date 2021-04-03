const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// open.addEventListener('click', () => container.classList.add('show-nav'));

// close.addEventListener('click', () => container.classList.remove('show-nav'));

// const gab = document.querySelector('.gab');
// const dyl = document.querySelector('.dyl');
// const lovers = document.querySelector('.lovers');

// const details = document.querySelector('.details');
// const details1 = document.querySelector('.details1');
// const about = document.querySelector('.about-header');

// gab.addEventListener('click', () => {
//     container.classList.add('hover');
//     lovers.style.visibility = 'hidden';
//     about.style.visibility = 'hidden';
//     details.classList.add('show');
//     details.style.display = 'contents';
// });

// dyl.addEventListener('click', () => {
//     container.classList.add('hover');
//     lovers.style.visibility = 'hidden';
//     about.style.visibility = 'hidden';
//     details1.classList.add('show');
//     details1.style.display = 'contents';
// });

const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');

const timeline = document.querySelectorAll('.timeline');
// const timelineCon = document.querySelector('.timeline-container');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
});




// timeline.forEach(timelines => {
//     timelines.addEventListener('click', () => {
//         removeActiveClass();
//         timelines.classList.add('active');
//     })
// })

// function removeActiveClass() {
//     timeline.forEach(timelines => {
//         timelines.classList.remove('active');
//     });
// }



// timeline.addEventListener('click', () => {
//     toggle.classList.toggle('active');

//     timelineCon.style.display = "none";
//     timelineCon.classList.add('active');
//     toggle.addEventListener('click', () => {
        
        
//         timelineCon.classList.remove('active');
//         timelineCon.style.display = "flex";
        
//     });
    
    
// });