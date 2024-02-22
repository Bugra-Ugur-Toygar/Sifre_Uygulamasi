const leftTextArea = document.querySelector("#leftTextArea")
const rightTextArea = document.querySelector("#rightTextArea")
const encodeButton = document.querySelector("#encodeButton")
const decodeButton = document.querySelector("#decodeButton")


runEventListeners();

function runEventListeners(){
    encodeButton.addEventListener("click" , encode);
    decodeButton.addEventListener("click" , decode);
}

function encode(){
    console.log(leftTextArea.value)
    if(leftTextArea.value==""){
        alert("Lütfen bir şifre giriniz.");
        return;
    }
    rightTextArea.value = btoa(leftTextArea.value);
    leftTextArea.value="";
}

function decode(){
    leftTextArea.value = atob(rightTextArea.value);
    rightTextArea.value="";
}