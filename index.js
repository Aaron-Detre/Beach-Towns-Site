const townBlocks = document.querySelectorAll(".town-block");
townBlocks.forEach((town) => {
  town.addEventListener("mouseover", function () {
    town.style.backgroundColor = "#F2F1F2";
  });
  town.addEventListener("mouseleave", function () {
    town.style.backgroundColor = "white";
  });
});
