let btn = document.querySelector("button");
let para = document.createElement('p');
document.querySelector("body").append(para);
para.style.textAlign = 'center';
para.style.fontSize = '30px';
para.style.height = '20rem';
para.style.width = '90rem';
para.style.marginLeft = '3rem';

para.style.borderRadius = '15px';
para.style.border = 'none';
para.style.backgroundColor = 'grey';
let url = "https://catfact.ninja/fact";

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    para.innerText = fact;

})
async function getFacts() {
    try {
        let res = await axios.get(url);
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.fact);
        return res.data.fact;
    } catch {
        console.log("error - ", e);
        return "No Fact Found.."
    }
}