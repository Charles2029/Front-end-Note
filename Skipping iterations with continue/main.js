const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);// if num=4 . the i will add to 5
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;//continue mean jump over (跳过特定的条件)；
    }
    para.textContent += `${i} `;
  }
});
