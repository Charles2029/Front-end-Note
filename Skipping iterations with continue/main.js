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
    } //If the square root and the rounded down square root do not equal one another (!==), 
    //it means that the square root is not an integer, so we are not interested in it. In such a case, we use the continue statement to skip on to the next loop iteration
    // without recording the number anywhere.
    para.textContent += `${i} `;
  }
});
