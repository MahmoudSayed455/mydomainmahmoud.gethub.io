$(document).ready(function () {
    $(".btn-primary").click(function () {

        $(this).toggleClass(function () {
            let $x= $(this).text();
            if ($x == "Follow"){
           $(this).css("class", "btn btn-default btn-sm");
           $(this).text("Following");
            }
            else{$(this).css("class", "btn btn-primary btn-sm");$(this).text("Follow"); }
        });
    });

    $(".l1").click(function () {
        $(this).css("color" , "red");
        let $x =parseInt($("#nom1").text());
        $("#nom1").text($x+1);

    });

    $(".l2").click(function () {
        $(this).css("color" , "red");
        let $x =parseInt($("#nom2").text());
        $("#nom2").text($x+1);

    });


    $(".l3").click(function () {
        $(this).css("color" , "red");
        let $x =parseInt($("#nom3").text());
        $("#nom3").text($x+1);

        });


    
   $("#n1").click(function () {

       $("#c1").focus();
   });

$("#n2").click(function () {

       $("#c2").focus();
   });
$("#n3").click(function () {

       $("#c3").focus();
   });
    
$("#b1").click(function(){
   
    $("#h1").css("display" , "block").slideDown(2000);
});


$("#b2").click(function(){
   
    $("#h2").css("display" , "block").slideDown(5000);
});
    
$("#b3").click(function(){
   
    $("#h3").css("display" , "block").slideDown(2000);
});


});