let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let images = document.createElement('img');
document.querySelector("body").append(images);
images.style.height = '550px';
images.style.width = '550px';
images.style.borderRadius = '15px';
images.style.border = 'none';



btn.addEventListener("click", async () => {
    let img = await getImages();
    images.src = img;

})
async function getImages() {
    try {
        let res = await axios.get(url);
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.message);
        return res.data.message;
    } catch {
        console.log("error - ", e);
        return "No Image Found.."
    }
}