// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => );

//TRY: THIS IS A PROMISE. TELLING JS TO DO ONE THING, ELSE RETURN THE ERROR FOUND//

// async function fetchDogImages (){
//     try {
//         const response = fetch("https://dog.ceo/api/breeds/image/random");
//       const  fetchedData = await response.json();

//GOBAL VARIABLES SHOULD BE PLACED OUTSIDE FUNTIONS//

let button = document.querySelector("#image-button");
let gallery = document.querySelector("#photo-album");
//set up ASYNC FUNCTION FOR FETCHING IMAGES FROM THE SPECIFIED API//

async function fetchDogImages() {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const fetchedData = await response.json();
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
  let images = document.createElement("img");

  imageFetched = await fetchDogImages();
  images.src = imageFetched.message;
  const li = document.getElementById("image-li");
  gallery.appendChild(li);
  li.innerHTML = "";

  li.appendChild(images);
}

/*??....
1. Page is very slow in loading. anyone with the same issue?? 
2. What is the second button for??*/
