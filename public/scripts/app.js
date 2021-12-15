console.log("hello");

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style='transition-delay:${idx * 200}ms'>${letter}</span>`
    )
    .join("");
});

/////Back Button for Interest Selecton page/////////

const back = document.querySelector(".backButton");
back.addEventListener("click", function (e) {
  history.back();
});
