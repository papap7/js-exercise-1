document.addEventListener("DOMContentLoaded", () => {
    let a = 7;
    let b = 11;
    let c = 15;
    let d = 21;
    let e = 8;
    let f = 10;
    let g = 16;
    let h = 20;
    let i = 9;
    let j = 8;
  
    let result1 = a + b * c - d / e;
    let result2 = f + g * h - i / j;
    let highestNumber = result1 > result2 ? result1 : result2;
    alert("4exercise: The highest result is: " + highestNumber);
  });
  