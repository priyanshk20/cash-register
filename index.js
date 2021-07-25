const bill = document.querySelector("#bill");
const cash = document.querySelector("#cash");
const checkBtn = document.getElementById('btn');
const errorDiv = document.querySelector(".error");
const noOfNotes= document.querySelectorAll(".noOfNotes");
const arrayNoteAmt = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener('click', ()=>{
    clearNoOfNotes();
    let billAmtValue= Number(bill.value);
    let cashGivenValue= Number(cash.value);

    if(billAmtValue>0 && cashGivenValue>0){

        if(billAmtValue > cashGivenValue){
            errorDiv.innerHTML = "cash is less than bill, enter correct amount";
            return;
        }
        calculateNotes(billAmtValue, cashGivenValue);
    } else{
        errorDiv.innerHTML = "Ender valid cash or bill amount to continue";
        }
})


function calculateNotes(billamt, cashamt){
    let returnAmt = cashamt-billamt;
    
    if(returnAmt<1){
        errorDiv.innerHTML = "No money to be returned";
        return;
    }

    for(let i=0; i<arrayNoteAmt.length; i++){
        returnAmt= compare(returnAmt, arrayNoteAmt[i], i);
    }
    
}

//compare with currency and post the no. of notes on screen
function compare(remainder, noteAmt, index){

    if(remainder >= noteAmt){
        let notes = Math.floor(remainder/noteAmt);
        remainder = remainder - notes*noteAmt;
        noOfNotes[index].innerText = `${notes}`;
    }
    return remainder
}

//if check button clicked without refreshing the page, clear the no of notes values on the screen
function clearNoOfNotes(){
    for(let notes of noOfNotes){
        notes.innerText = "";
    }
}