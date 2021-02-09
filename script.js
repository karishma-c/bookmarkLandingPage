
const listOne = document.getElementsByClassName("list1")[0];
const listTwo = document.getElementsByClassName("list2")[0];
const listThree = document.getElementsByClassName("list3")[0];
const featureOne = document.getElementsByClassName("feature1")[0];
const featureTwo = document.getElementsByClassName("feature2")[0];
const featureThree = document.getElementsByClassName("feature3")[0];
listOne.addEventListener("click", (e) => {
    listOne.classList.add("show-feature1");
    listTwo.classList.remove("show-feature2");
    listThree.classList.remove("show-feature3");
    featureOne.style.display = "block";
    featureTwo.style.display = "none";
    featureThree.style.display = "none";
});

listTwo.addEventListener("click", (e) => {
    listOne.classList.remove("show-feature1");
    listTwo.classList.add("show-feature2");
    listThree.classList.remove("show-feature3");
    featureOne.style.display = "none";
    featureTwo.style.display = "block";
    featureThree.style.display = "none";
});

listThree.addEventListener("click", (e) => {
    listOne.classList.remove("show-feature1");
    listTwo.classList.remove("show-feature2");
    listThree.classList.add("show-feature3");
    featureOne.style.display = "none";
    featureTwo.style.display = "none";
    featureThree.style.display = "block";
});

const questionAns = document.querySelectorAll(".QA");
for(let i = 0; i < questionAns.length; i++) {
    questionAns[i].addEventListener("click", (e) => {
        const arrow = document.querySelectorAll(".arrow-element");
        const ans = document.querySelectorAll(".answer");
        ans[i].classList.toggle("show-answer");
        arrow[i].classList.toggle("change-arrow");
    });
}

const hamMenu = document.getElementById("hamburger-menu");
const navigation = document.getElementById("myNav");
const closeBtn = document.getElementsByClassName("closebtn")[0];
hamMenu.addEventListener("click", () => {
    navigation.style.display = "block";
    navigation.style.width = "100%";
    hamMenu.style.display = "none";
});
closeBtn.addEventListener("click", () => {
    navigation.style.display = "none";
    navigation.style.width = "0%";
    hamMenu.style.display = "block";
});
 
const inputName = document.getElementById("name");
const conBtn = document.getElementById("contactbtn");
conBtn.addEventListener("click", (e) => {
    var inputValue = inputName.value;
    validateMail(inputValue);
})

function validateMail(inputValue)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(inputValue.value.match(mailformat))
{
alert("You have entered a valid email address!");    //The pop up alert for a valid email address
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
document.form1.text1.focus();
return false;
}
}