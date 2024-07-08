$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Fronted Developer",
        "Frontend Developer",
        "Frontend Developer",
        "Frontend Developer",
        "Frontend Developer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Frontend Developer",
        "Frontend Developer",
        "Frontend Developer",
        "Frontend Developer",
        "Frontend Developer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    //  Owl Carousel  //
               
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });

  const form=document.querySelector('form');
  const fullName=document.getElementById("name");
  const email=document.getElementById("email");
  const message=document.getElementById("message");
  const suject=document.getElementById("subject");

  function sendEmail()
  {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "harshakrishnan1204@gmail.com",
      Password : "4A1CA3F3B952D23E2A16AB19B5E3BEE589DA",
      To : 'harshakrishnan1204@gmail.com',
      From : "harshakrishnan1204@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  }
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();

  });