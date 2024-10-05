const counter = document.querySelector(".visitor-count");

async function updateCounter() {
    let response = await fetch("https://sipqoreqjsfgrgfukhmf6xhza40tlils.lambda-url.ap-southeast-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` ${data}`;
}

updateCounter();
