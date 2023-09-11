console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
 fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
        const imageUrls = data.message;

        const imageContainer = document.getElementById("dog-image-container");

        imageContainer.innerHTML = '';

        imageUrls.forEach((imageUrl) => {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Dog Image";
            imageContainer.appendChild(img);
        })
    })
    .catch((error) => {
        console.error("Error fetching images:", error);
    });
