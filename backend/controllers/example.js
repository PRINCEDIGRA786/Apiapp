//  const photolink = async (arr) => {
    //     const apiKey = "42661691-bc0d1f8adead2acab63e5b236";
    //     arr.forEach(element => {
    //         const query = element.title ? element.title : element.name;
    //         const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}`;
    //         fetch(apiUrl)
    //             .then(response => response.json())
    //             .then(data => {
    //                 // Extract image URL from the response
    //                 const imageUrl = data.hits[0].webformatURL;
    
    //                 // Log the image URL
    //                 element.image = imageUrl;
    //                 // console.log(imageUrl);
    //                 // console.log(arr)
    //             })
    //             .catch(error => console.error('Error:', error));
    
    //     });
    // }
    // fun(`Create a  api having 2 elements whose fields are  name of movie , image link of movie `)
    
    // const arr = [
    //     {
    //         "title": "sky",
    //         "image": ""
    //     },
    //     {
    //         "title": "birds",
    //         "image": ""
    //     }
    // ]
    
    // const zlib = require('zlib');