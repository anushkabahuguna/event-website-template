$( document ).ready(function() {
    var countDownDate = new Date("Apr 1, 2021 0:0:0").getTime();

    var myfunc = setInterval(function() {
        // code goes here
        var now = new Date().getTime();
        var timeleft = countDownDate - now;
            
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
        $("#days>span").text(`${days}`);
        $("#hours>span").text(`${hours}`);
        $("#mins>span").text(`${minutes}`);
        $("#secs>span").text(`${seconds}`);
        
   
        if (timeleft < 0) {
            // clearInterval(myfunc);
            $("#days>span").text(`00`);
                $("#hours>span").text(`00`);
                $("#mins>span").text(`00`);
                $("#secs>span").text(`00`);
              $('#end').css('opacity',100);
        }
       
        }, 1000)
       var timeLeft=-10;
        
        const navbar = document.querySelector('.fixed-top');
        window.onscroll = () => {
            if (window.scrollY > 300) {
                navbar.classList.add('nav-active');
            } else {
                navbar.classList.remove('nav-active');
            }
            // $('.timeDisplay').each(function () {
            //     var imagePos = $(this).offset().top;
            //     var imageHeight = $(this).height();
            //     var topOfWindow = $(window).scrollTop();
        
            //     if (window.scrollY > 300) {
            //         $(this).addClass("slideRight");
            //     } else {
            //         $(this).removeClass("slideRight");
            //     }
            // });
        };
          
});
