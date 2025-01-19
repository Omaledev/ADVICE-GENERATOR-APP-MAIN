let num = document.querySelector(".advice-number");
let advice = document.querySelector(".advice");
let change = document.querySelector(".change");

change.addEventListener("click", getAdvice);

async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    
    console.log(response)
    console.log(data)

    num.innerHTML = "Advice #"+data.slip.id
    advice.innerHTML = '"'+data.slip.advice+'"';
}
