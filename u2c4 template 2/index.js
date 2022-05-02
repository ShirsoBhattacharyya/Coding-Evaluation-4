// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",submitform)
let submissionform=JSON.parse(localStorage.getItem("schedule"))||[];
function submitform(){
    event.preventDefault();
    let submitobj={
        matchno:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    }
    submissionform.push(submitobj);
    console.log(submissionform);
    localStorage.setItem("schedule",JSON.stringify(submissionform));
    // window.location.href="matches.html";
}