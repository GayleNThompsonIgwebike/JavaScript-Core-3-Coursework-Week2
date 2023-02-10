let button = document.querySelector("#image-button");
let gallery = document.querySelector("#photo-album");
let imagesArray = [];
//set up ASYNC FUNCTION FOR FETCHING IMAGES FROM THE SPECIFIED API//

async function fetchDogImages() {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const fetchedData = await response.json();
    imagesArray.push(fetchedData);
    return fetchedData;
  } catch (error) {
    console.log(error);
  }
}

//ADD EVENT LISTENER//
button.addEventListener("click", displayDogImages);

//ASYNC FUNCTION DISPLAYING THE IMAGES FETCHED/
async function displayDogImages() {
  //creating an "img" element//
const li = document.createElement("li");
  let images = document.createElement("img");
  imageFetched = await fetchDogImages();
  images.src = imageFetched.message;
  
  gallery.appendChild(li);
  li.appendChild(images);
}

/*??....
1. Page is very slow in loading. anyone with the same issue?? 
2. What is the second button for??*/
