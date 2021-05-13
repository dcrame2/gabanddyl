// const open = document.getElementById('open')
// const close = document.getElementById('close')
// const container = document.querySelector('.container')



// const toggle = document.querySelector('.toggle');
// const nav = document.querySelector('nav');


// toggle.addEventListener('click', () => {
//     toggle.classList.toggle('active');
//     nav.classList.toggle('active');
// });




    $(".timeline.year2021").click(function(){
      $('#about').hide();
      $('.wrapper').hide();
      $('#loml').hide();
      $(".y2021").show();
      
      

      $('.aboutus').click(function() {
        $(".y2021").hide();
        $('#about').show();
        $('.wrapper').show();
        $('#loml').show();
        
      })
    });


    $(".timeline.year2020").click(function(){
      $(".y2020").show();
      $('#about').hide();
      $('.wrapper').hide();
      $('#loml').hide();
      
      
      

      $('.aboutus').click(function() {
        $(".y2020").hide();
        $('#about').show();
        $('.wrapper').show();
        $('#loml').show();
        
      });
    });


    $(".timeline.year2019").click(function(){
      $('#about').hide();
      $('.wrapper').hide();
      $('#loml').hide();
      $(".y2019").show();
      

      $('.aboutus').click(function() {
        
        $(".y2019").hide();
        $('#about').show();
        $('.wrapper').show();
        $('#loml').show();
      });
    });


    $(".timeline.year2018").click(function(){
      $('.wrapper').hide();
      
      $('#about').hide();
      $('#loml').hide();
      $(".y2018").show();

      $('.aboutus').click(function() {
        $(".y2018").hide();
        $('#about').show();
        $('.wrapper').show();
        $('#loml').show();
        
      });
    });

    $(".timeline.year2017").click(function(){
      
      $('#about').hide();
      $('.wrapper').hide();
      $('#loml').hide();
      $(".y2017").show();

      $('.aboutus').click(function() {
        $('#footer').show();
        $(".y2017").hide();
        $('#about').show();
        $('.wrapper').show();
        $('#loml').show();
      });
    });

    $(".timeline.year2016").click(function(){
      $('.wrapper').hide();
  
      $('#about').hide();
      $('#loml').hide();
      $(".y2016").show();

      $('.aboutus').click(function() {
        $(".y2016").hide();
        $('#about').show();
        $('.wrapper').show();
       
        $('#loml').show();
      });
    });

    $(".timeline.year2015").click(function(){

      
      $('.wrapper').hide();
      $('#loml').hide();
      $('#about').hide();
      $(".y2015").show();

      $('.aboutus').click(function() {
        $('#footer').show();
        $(".y2015").hide();
        $('#about').show();
        $('.wrapper').show();
        $('#loml').show();
      });
    });

    $(".timeline.year2014").click(function(){
      $(".y2014").show();
      $('.wrapper').hide();
      $('#about').hide();
      $('#loml').hide();
      

      $('.aboutus').click(function() {
        
        $(".y2014").hide();
        $('#about').show();
        $('.wrapper').show();
        $('#loml').show();
      });
    });
 


