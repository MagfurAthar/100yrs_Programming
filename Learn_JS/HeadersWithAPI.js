const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        let config = { headers: { Accept: "Application/json" } };
        let res = await axios.get(url, config);
        // console.log(res);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
}