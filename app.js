"use strict"
alert(`Please Use 1.a, 2.b, 3.c This Format...😃😃
(Case Sensitive)`);

let myAnswer = document.querySelector("#myAns");
let friendsAnswer = document.querySelector("#frndAns");

let checkButton = document.querySelector("#checkButton");

let outputArea = document.querySelector(".outputDiv")


checkButton.addEventListener("click", () => {

    outputArea.setAttribute("style", "transform: scale3d(1, 1, 1);")

    let myAnswerValue = myAnswer.value;
    let friendsAnswerValue = friendsAnswer.value;


    function emptyChecking() {
        if (myAnswerValue === "") {
            alert("Your Answer Is Empty...🙂🙂");
        }
        if (friendsAnswerValue === "") {
            alert("Your Friend's Answer Is Empty...🙂🙂")
        }
    };
    emptyChecking();


    let myAnsArr = myAnswerValue.split(",");
    let frndAnsArr = friendsAnswerValue.split(",");


    function notMatchedElement() {


        let check = myAnsArr;
        let data = frndAnsArr;

        let notPresentInData = check.filter((value) => {
            return !data.includes(value)
        });

        // return notPresentInData;
        let tag = document.createElement("h1");
        let tagTxt = document.createTextNode(notPresentInData);
        tag.appendChild(tagTxt);
        document.querySelector(".outputJSBox").appendChild(tag);


    }

    notMatchedElement();

});