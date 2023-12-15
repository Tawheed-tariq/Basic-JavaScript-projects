const slider = document.querySelector('.slider');


async function getData(){
    try{
        let apiData = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=30");
        return apiData.json();
    }
    catch(err){
        console.log("error occured " + err);
    }
    
}
getData().then((data) => {
    data.map(val => {
        let image = document.createElement('img');
        image.src = `http://picsum.photos/200/300?random=${val.id}`;
        slider.appendChild(image);
    })
})