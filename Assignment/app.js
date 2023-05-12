function Marksheet() {
    var firstName = document.getElementById("FirstName").value
    var lastName = document.getElementById("LastName").value
    var rollNumber = +document.getElementById("RollNumber").value
    var english = +document.getElementById("English").value
    var math = +document.getElementById("Math").value
    var urdu = +document.getElementById("Urdu").value
    var science = +document.getElementById("Science").value
    var computer = +document.getElementById("Computer").value
    var islamyat = +document.getElementById("Islamyat").value

    var totleNumber = english + math + urdu + science + computer + islamyat;
    var persontage = Math.round(totleNumber / 600 * 100);


    document.getElementById("fullname").innerHTML = firstName + " " + lastName;
    document.getElementById("englishscore").innerHTML = english;
    document.getElementById("rollNunber").innerHTML = rollNumber;
    document.getElementById("mathscore").innerHTML = math;
    document.getElementById("computerscore").innerHTML = computer;
    document.getElementById("sciencescore").innerHTML = science;
    document.getElementById("urduscore").innerHTML = urdu;
    document.getElementById("ismamyatscore").innerHTML = islamyat;
    document.getElementById("totalmarks").innerHTML = totleNumber + " / 600";
    document.getElementById("persontage").innerHTML = persontage + "% / 100%";
    document.getElementById("grade").innerHTML = "A+";

    document.getElementsByTagName("form")[0].style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.padding = "20px";


};
