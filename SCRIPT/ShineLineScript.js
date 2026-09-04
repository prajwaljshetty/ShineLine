//NAVIGATION VARIABLES
const Menu = document.getElementById('Menu');
const Close = document.getElementById("Close")
const Nav = document.getElementById('Nav2');
let NavActive = false;


//SLIDESHOW VARIABLES
const Images = [document.getElementById('IMG1'),document.getElementById('IMG2'),document.getElementById('IMG3')];
const h1 = document.getElementById('Slider-Head');
const Header = ['pioneers in powerful personnel manpower mastery','elevate projects with heavy equipment excellence','environmental-waste management specialist'];
let index = 0;

//ACHIEVMENT VARIABLES
const Project = document.getElementById('Project');
const Happy = document.getElementById('Happy');
const Employee = document.getElementById('Employee');
const Coverage = document.getElementById('Coverage');

const DurationTime = 4000;
const IntervalTime = 50;
const Step = DurationTime/IntervalTime;

let  ProjectCount = 0;
let HappyCount = 0;
let EmployeeCount = 0;
let CoverageCount = 0;

let ProjectTarget = 30;
let HappyTarget = 980;
let EmployeeTarget = 50;
let CoverageTarget = 98;

let ProjectProgress = ProjectTarget/Step;
let HappyProgress = HappyTarget/Step;
let EmployeeProgress = EmployeeTarget/Step;
let CoverageProgress = CoverageTarget/Step;

//---NAVIGATION SECTION---
Menu.addEventListener('click',()=>{
    Nav.style.right = '0%';
    Nav.style.boxShadow = '-10px 0 300px 450px rgba(0, 0, 0, 0.3)';
    Menu.style.display = 'none';
    Close.style.display ='block';
    setTimeout(()=>{
        NavActive = true
    },500);
});

window.addEventListener('resize',()=>{
    if(window.innerWidth >= 945){
        Close.style.display = 'none';
        Nav.style.right = '-100%';
        Nav.style.boxShadow = 'none';
        Menu.style.display = 'none';
        NavActive = false;
    }
    else if(window.innerWidth <= 945 && !NavActive){

        Menu.style.display = 'block'
    }
})

document.addEventListener('click',(e)=>{
        if(!Nav.contains(e.target) && NavActive){
           CloseNav();
        }
    });

Close.addEventListener('click',()=>{
    CloseNav();
});

function CloseNav(){
    Nav.style.right = '-100%';
    Nav.style.boxShadow = 'none';
    Menu.style.display = 'block';
    Close.style.display ='none';
    NavActive = false;
}

//---SLIDESHOW SECTION---
let intervel = setInterval(() => {
    ChangeIndex(1, true);
}, 6000);

function ChangeIndex(i, j) {
    index += i;

    if (index >= Images.length) {
        index = 0;
    }

    if (index < 0) {
        index = Images.length - 1;
    }

    Images.forEach((Img, Index) => {
        Img.style.transition = 'opacity 0.5s ease-in-out';
        Img.style.opacity = (Index === index) ? '1' : '0';
    });

    h1.innerText = Header[index];

    if (!j && intervel) {
        clearInterval(intervel);
        intervel = null;
        setTimeout(() => {
            intervel = setInterval(() => {
                ChangeIndex(1, true);
                }, 6000);
        }, 6000);
    j = true;
    }
}

//---ACHIEVEMENT SECTION---
let intervel2 = setInterval(() => {
    ProjectCount +=ProjectProgress;
    HappyCount +=HappyProgress;
    EmployeeCount +=EmployeeProgress;
    CoverageCount +=CoverageProgress;

    Project.textContent = Math.floor(ProjectCount)+ "+";
    Happy.textContent = Math.floor(HappyCount) ;
    Employee.textContent = Math.floor(EmployeeCount) ;
    Coverage.textContent = Math.floor(CoverageCount) + "+";

    if(Math.floor(ProjectCount) >= ProjectTarget){
        clearInterval(intervel2);
    }

},IntervalTime)

