function calculateTip (event) {
    event.preventDefault(); // método para a página não recarregar
    let bill = document.getElementById("bill").value;
    let serviceQuali = document.getElementById("serviceQuali").value;
    let numOfPeople = document.getElementById("people").value;

    if(bill == "" || serviceQuali == 0){
        alert("Por Favor, preencha os campos");
        return;
    }

    
    if(numOfPeople == 1) {
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    let total = (bill * serviceQuali) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totaltip").style.display = "block";
}

document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("tipsForm").addEventListener("submit", calculateTip);