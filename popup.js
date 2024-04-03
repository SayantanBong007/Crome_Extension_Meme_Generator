document.addEventListener("DOMContentLoaded", function () {
  const memeImage = document.getElementById("memeImage");
  const generateButton = document.getElementById("generateButton");

  generateButton.addEventListener("click", async function () {
    try {
      const response = await fetch("https://meme-api.com/gimme");
      const data = await response.json();

      if (data.url) {
        memeImage.src = data.url;
      } else {
        memeImage.alt = "Failed to load meme";
      }
    } catch (error) {
      console.error("Error fetching meme:", error);
      memeImage.alt = "Failed to load meme";
    }
  });
});
