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