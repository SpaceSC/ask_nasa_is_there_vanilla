// write async before name of function
const pageLoad = async () => {

  // await is what you are waiting for
  let data = await fetch('https://api.nasa.gov/planetary/apod?api_key=JZLWuJDR9crbBSjYEFfoziVpdkNQq6FNywPhfzdT')
    .then(response => response.json());
    
  console.log(data);
  
  const rootE = document.getElementById("root");
  
  // insert title-t and image to root
  rootE.insertAdjacentHTML("beforeend", `
    <h1>${data.title}</h1>
    <img src="${data.url}" />
  `)

}
window.addEventListener("load", pageLoad);
