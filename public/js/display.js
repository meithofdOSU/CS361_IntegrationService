let displayButton = document.querySelector("#display");
API_KEY = "ahutoSbmiRJp7CUBrL5s2yefa7OrVrKw1zsel4VF";
startDate = "2021-10-01";
endDate = "2021-10-02";




displayButton.addEventListener("click", () => {
    console.log("display pressed");
    displayApiRequest();
});
async function displayApiRequest() {
    try {
        const response = await axios.get(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`
        );

        console.log(response.data.url);
        console.log(response.data.near_earth_objects);
    } catch (error) {
        console.log(error.response.body);
    }
}