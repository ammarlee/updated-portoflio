const SkillsList = document.getElementById("skillsList")
const projectsDiv = document.getElementById("projectsList")
const sendmsg = document.getElementById("sendmsg")

const clientName = document.getElementById("clientName")
const clientEmail = document.getElementById("clientEmail")
const clientMessage = document.getElementById("clientMessage")
const subject = document.getElementById("subject")


const projectsData = [
    {name:'e-commerce',img:'../images/ecommerceimg.jpeg',link:'https://ammarshop.herokuapp.com/'},
    {name:'e-learning',img:'../images/elearni.jpg',link:'https://online-lecture.herokuapp.com/login'},
    {name:'social media',img:'../images/solcia.jpg',link:'https://socail-media-fb.herokuapp.com/login'},
    {name:'landing page',img:'../images/land.jpg',link:''}
  ]
  const skillsIcons = [
    {name:'html5',icon:'fab fa-html5 fa-3x'},
    {name:'css',icon:'fab fa-css3 fa-3x'},
    {name:'bootstrap',icon:'fab fa-bootstrap fa-3x'},
    {name:'sass',icon:'fab fa-sass fa-3x'},
    {name:'javascript',icon:'fab fa-js fa-3x'},
    {name:'vue',icon:'fab fa-vuejs fa-3x'},
    {name:'node',icon:'fab fa-node fa-3x'},
    {name:'mongoDb',icon:'fas fa-database fa-3x'},
    {name:'firebase',icon:'fas fa-server fa-3x'},
  ]


$(document).ready(function () {
  hideLoading()
  printSkills()
  printProjects()
  showScrollBtn()
  resizeSection()
    
  });

function resizeSection (){
  let about = $(".about");
  about.height($(window).height());

  $(window).resize(function () {
    about.height($(window).height());
  });
}
  function navigatToSection(){
 //    starting the links
 $("#collapseTwo > ul > li.nav-item > a ").on("click", function () {
  $("html,body").animate(
    {
      scrollTop: $("#" + $(this).attr("data-val")).offset().top,
    },
    1000
  );
});
  }
function  showScrollBtn(){
    var sw = $(".footer .sweap");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 700) {
        sw.fadeIn(2000);
      } else {
        sw.fadeOut(2000);
      }
    });
  }
  function scrollToTopPage() { 
    var sw = $(".footer .sweap");

  //    function for scroll to top
  sw.click(function () {
    $("html ,body").animate(
      {
        scrollTop: "10",
      },
      2000
    );
  });
  }
  function printSkills(){
    let iconResult=""
    skillsIcons.forEach((item)=>{
      iconResult +=`
      <div class="col-sm-2 col-6 col-md-2 px-0 mt-1 " data-aos="zoom-in" >
      <div class="skill-item">
      <div>
      <i class="${item.icon} fa-3x" ></i>
      </div>
      ${item.name}
      </div>
      </div>
  
      
      `
    })
    SkillsList.innerHTML = iconResult
  
  }
  function printProjects(){
    let result = ""
    projectsData.forEach(item=>{
      result += `
      <div data-aos="zoom-in" class="block  col-12 col-sm-4 col-md-4" style="background-image: url(${item.img})">
        <div class="overlay"></div>
        <div class="block--text">
          <div class="text--head">${item.name}</div>
          <div class="block--link">
          <a class="btn btn-danger" target="_blank"  href="${item.link}">visite website</a>
          </div>
        </div>
      </div>
        `
    })
    projectsDiv.innerHTML = result
  }
  function sendMessage(){
    window.open(`mailto:ammarlee16@gmail.com?subject=${subject.value}&body=${clientMessage.value}`);
  }
  function hideLoading() {
    $(".loader .container").fadeOut(2000, function () {
      $(".loader").fadeOut(2000);
    });
  }
  