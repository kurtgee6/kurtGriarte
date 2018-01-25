
$(document).ready(function(){
    $('.scrollspy').scrollSpy();    

///////////////////////////////////////////////////////
////////////// Materialize functionality //////////////
///////////////////////////////////////////////////////

    $(".name").click(function () {

        var sentences = [
            "Kurt Griarte's a fan of the Los Angeles Lakers",
            "Kurt Griarte enjoys reading history books",
            "Kurt Griarte's favorite rapper is Logic",
            "Kurt Griarte's favorite sports are Soccer and Basketball",
            "Kurt Griarte's favorite cartoon shows are Tom & Jerry and Mr. Beans",
            "When Kurt Griarte was a kid, he wanted to grow up to become a rapper", 
            "Kurt Griarte's favorite speakers are Mel Robbins, Elon Musk and Steve Jobs",
            "One of Kurt Griarte's favorite book is Contagious by Jonah Berger",
            "Kurt Griarte is a fan of Game of Thrones", 
            "Kurt Griarte's favorite github user is Bucky Roberts",
            "Kurt Griarte's a fan of the Pittsburgh Steelers",
            "Kurt Griarte enjoys watching Real Madrid"
        ]

        var emptyArr = []

        for (var i = 0; i < sentences.length; i++) {

            //pushing into emptyArr
            emptyArr.push(sentences[i])
        }

        //picking a random sentence inside emptyArr
        var randomSentence = emptyArr[Math.floor(Math.random() * emptyArr.length)];


        Materialize.toast(randomSentence, 5000, 'black rounded') // 4000 is the duration of the toast

    });

    $("#phone").click(function () {
        Materialize.toast('Cell Number: (919)-923-3586 ', 5000)
    });

    $("#instagram").click(function () {
        Materialize.toast('Instagram: kurtgriarte ', 5000)
    });


    ///////////////////////////////////////////////////////
    ///////////////// Form Validation /////////////////////
    ///////////////////////////////////////////////////////

    $("#formValidate").validate({
        rules: {
            name: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email:true
            },
            phone: {
				required: true,
				minlength: 5
			},
			message: {
				required: true,
				minlength: 5,
			}
        },
        //For custom messages
        messages: {
            name:{
                required: "Please enter your Full Name",
                minlength: "Enter at least 5 characters"
            },
            email: {
                required: "Please enter a valid Email Adress",
                minlength: "Enter at least 5 characters"
            },
            phone:{
                required: "Please enter a valid phone number"
            },
            message:{
                required: "Please enter more than 5 characters.",
                minlength: "Enter at least 5 characters"
            }
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });


});