function heroImageLoader() {
  const img = document.querySelector(".hero__profile > img");

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
