function heroImageLoader() {
  const img = document.querySelector(".hero--profile > img");

  const handleLoad = () => {
    img.parentElement.classList.add("loaded");
  };

  if (img.complete) {
    handleLoad();
  } else {
    img.addEventListener("load", handleLoad);
  }
}

heroImageLoader();
