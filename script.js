const stars = document.querySelectorAll(".star");
const button = document.querySelector("#button");
const span = document.querySelector(".num");
const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const rating_container = document.querySelector(".rating-container");
const thank_u_container = document.querySelector(".thank-u-container");

let selectedStar = null;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    stars.forEach((star) => star.classList.remove("white"));
    star.classList.add("white");
    selectedStar = star.textContent;
    // console.log(selectedStar)
    feedback(selectedStar);
  });
});

function feedback(selectedStar) {
  button.addEventListener("click", () => {
    if (selectedStar) {
      container1.classList.add("rating-container");
      container2.classList.remove("thank-u-container");
      let p = (span.innerText = selectedStar);
      //     console.log(p);
    } else {
      alert("give feedback !");
      // console.log('feedback');
    }
  });
}
