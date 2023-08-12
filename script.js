/* const a = document.getElementById("button");
const b = document.getElementById("container");
a.addEventListener("click", () => {
  b.innerHTML = `<div id="container1">
    <h1>Hello my name is Rishabh Diwan</h1>
    <button id="button1">Clickme twiiice</button>
    </div>`;
});

const c = document.getElementById("container1");
const d = document.getElementById("button1");
d.addEventListener("click", () => {
  c.innerHTML = `<div id="container2">
    <h1>Hello my name is Savita Diwan</h1>
    <button id="button2">Clickme thriiice</button>
    </div>`;
}); */




let q2 = async () => {
    let sawal2 = new Promise((resolve, reject) => {
    const a = document.getElementById("button");
    const b = document.getElementById("container");
    a.addEventListener("click", () => {
    let l1 = () => {b.innerHTML = `
    <div id="container">
    <h1>What is my last name?</h1>
    <ol>
        <li>Diwan</li>
        <li>Mishra</li>
        <li>Kumar</li>
        <li>Tripathi</li>
    </ol>
    </div>
    `;
    }
    })
    })
    resolve(l1);
        
}


let q3 = async () => {
    let sawal3 = new Promise((resolve, reject) => {
    a.addEventListener("click", () => {
    b.innerHTML = `
    <div id="container">
    <h1>What is my hometown?</h1>
    <ol>
        <li>Shimla</li>
        <li>Nagrota</li>
        <li>Hatwas</li>
        <li>Chahri</li>
    </ol>
    </div>
    `;
    })
    resolve(l2)
})
}

q2();
let qu1 = await sawal2();
// q3();
// let qu2 = await q3();