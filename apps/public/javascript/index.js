$("#name").click(function () {

    var sentences = [
        "Kurt Griarte's a fan of the Los Angeles Lakers",
        "Kurt Griarte enjoys reading history books",
        "Kurt Griarte's favorite rapper is Logic",
        "Kurt Griarte's favorite sports are Soccer and Basketball",
        "Kurt Griarte's favorite cartoon shows are Tom & Jerry and Mr. Beans",
        "When Kurt Griarte was a kid, he wanted to grow up to become a rapper"
    ]

    var emptyArr = []

    for (var i = 0; i < sentences.length; i++) {

        //pushing into emptyArr
        emptyArr.push(sentences[i])
    }

    //picking a random sentence inside emptyArr
    var randomSentence = emptyArr[Math.floor(Math.random() * emptyArr.length)];


    Materialize.toast(randomSentence, 5000, 'blue rounded') // 4000 is the duration of the toast

});
