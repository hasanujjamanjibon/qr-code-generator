const generatorText = document.querySelector("#generatorText");
const generatorImg = document.querySelector("#generatorImg");
const generatorBtn = document.querySelector("#generatorBtn");
const spinner = document.querySelector("#spinner");

generatorBtn.addEventListener("click", async () => {
  let text = generatorText.value;
  if (generatorText.value == "") {
    return alert("Please, Write Something");
  }
  if (generatorImg.src === "") {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.remove("hidden");
    generatorImg.classList.add("hidden");
  }
  setTimeout(() => {
    generatorImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=208x208&data=${text}`;

    setTimeout(() => {
      generatorText.value = "";
    }, 2000);
    generatorImg.classList.remove("hidden");
    spinner.classList.add("hidden");
  }, 1000);
});
