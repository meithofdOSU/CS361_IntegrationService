let downloadButton = document.querySelector("#roveridia");


downloadButton.addEventListener("click", () => {
    console.log("roveridia pressed");
    downloadApiRequest();
});
//An asynchronous function to fetch data from the API.



async function downloadApiRequest() {
    try {
        const response = await axios.get(
            `http://localhost:58471/data?waypoint=2`
        );


        console.log(response.data);
    } catch (error) {
        console.log(error.response.body);
    }
}