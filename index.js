const bill = document.querySelector("#bill");
const cash = document.querySelector("#cash");
const checkBtn = document.getElementById('btn');
const errorDiv = document.querySelector(".error");
const noOfNotes= document.querySelectorAll(".noOfNotes");
const arrayNoteAmt = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener('click', () => {
   hideMessage();
    if(bill.value > 0 ){
        if(cash.value>=bill.value){
            const amount = cash.value - bill.value;
            calculateChange(amount);

        }else{
            sendMessage("Can You wash plates? 😡");
        }
    }
    else{
        sendMessage("Invalid Bill Amount");
    }
})


const calculateChange = (amount) => {
    for(let i = 0; i < arrayNoteAmt.length; i++){
        const numberOfNotes = Math.trunc(amount/arrayNoteAmt[i]);
        amount %= arrayNoteAmt[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}


const sendMessage = (message) => {
    errorDiv.style.display = "block"
    errorDiv.innerText = message;
}

const hideMessage = () => {
    errorDiv.style.display = "none";
}