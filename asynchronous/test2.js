
/*const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
  }

button.addEventListener("click",()=>{
    alarm(name.value,delay,value)
    .then((message)=>{output.textContent =message})
    .catch((error)=>(output.textContent = `Couldn't set alarm: ${error}`))
});

*/

function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
}

// 测试代码
let numberToTest = 0; // 替换为您想要测试的数值
let result = isPrime(numberToTest);
console.log(numberToTest + ' is prime: ' + result);



