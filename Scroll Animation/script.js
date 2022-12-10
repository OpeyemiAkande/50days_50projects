// const boxes = document.querySelectorAll(".box");

// window.addEventListener("scroll", checkBoxes);
// // checkBoxes();

// function checkBoxes() {
//   const triggerBottom = (window.innerHeight / 5) * 4;
//   //   const triggerBottom = (window.innerHeight / 20) * 19;

//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;
//     // console.log(boxTop);

//     if (boxTop < triggerBottom) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", function () {
  const triggerBottom = window.innerHeight * 0.8;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
});
