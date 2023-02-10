async function getcartoon() {
  try {
    const response = await fetch(`https://xkcd.now.sh/?comic=latest`);
    const fetchedData = await response.json();

    const cartoonImages = document.createElement("img");
    document.body.appendChild(cartoonImages);

    return cartoonImages.src = fetchedData.img;
  } catch (error) {
    console.log(error);
  }
} 
getcartoon();


