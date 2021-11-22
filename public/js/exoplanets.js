let exoPlanetsButton = document.querySelector("#exoplanets");

exoPlanetsButton.addEventListener("click", () => {
    console.log("exoplanets pressed");
    downloadApiRequest();
});
//An asynchronous function to fetch data from the API.

async function downloadApiRequest() {
    try {
        const response = await axios.get(`http://localhost:4000/files`);

        console.log(response.data);
    } catch (error) {
        console.log(error.response.body);
    }
}