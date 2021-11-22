let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
    console.log("button pressed");
    sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
    //let api_key = process.env.API_KEY;
    let api_key = "ahutoSbmiRJp7CUBrL5s2yefa7OrVrKw1zsel4VF";
    let response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-13&api_key=${api_key}`
    );
    console.log(response);
    let data = await response.json();
    console.log(data);
    useApiData(data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
// Right click on returned object to get data
function useApiData(data) {
    document.querySelector("#content2").innerHTML +=
        data.near_earth_objects[
            "2015-09-07"
        ][0].close_approach_data[0].close_approach_date; //

    document.querySelector("#content").innerHTML +=
        data.near_earth_objects[
            "2015-09-07"
        ][4].estimated_diameter.kilometers.estimated_diameter_max;

    document.querySelector("#content1").innerHTML +=
        data.near_earth_objects["2015-09-08"][3].absolute_magnitude_h; //
}