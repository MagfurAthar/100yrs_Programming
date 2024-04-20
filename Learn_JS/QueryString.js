let url = "http://universities.hipolabs.com/search?name=";
// let country = "india";
let btn = document.querySelector('button');
let list = document.querySelector('#list');

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colleges = await getColleges(country);
    // console.log(country);
    show(colleges);
});

function show(colleges) {
    for (colleg of colleges) {
        // console.log(`College Name : ${colleg.name}`);
        let li = document.createElement('li');
        li.innerHTML = colleg.name;
        list.appendChild(li);
    }

}
async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        // console.log("Error - ", e);
        return [];
    }
}