// const axios = require('axios')
// const Api = require("../models/Apistore");

// const apiLink = async (req, res) => {

//     const { apiname, fields, dataArray } = req.body

//     // try {
//     // let api = await Api.findOne({ "name": apiname, "fields": fields });
//     // // If url already exists, return it
//     // if (api && api.url) {
//     //     return res.status(200).json({ "url": api.url });
//     // }
//     const jsonBinApiKey = '$2a$10$eYISQ4aSjbX8R3jCBW3caemV8UmRv1AXMp.urJc7LELgsJAwvLywW'
//     // let compressedData = pako.deflate(JSON.stringify(dataArray), { to: 'string' });

//     //     // Create a new JSONBin only if it doesn't exist
//     //     const createBinResponse = await axios.post(
//     //         'https://api.jsonbin.io/v3/xl/b',
//     //         {
//     //             headers: {
//     //                 'Content-Type': 'multipart/form-data',
//     //                 'X-Master-Key': jsonBinApiKey,
//     //                 'X-Bin-Private': 'false',
//     //                 // 'X-Bin-Name': apiname + " fields: " + fields
//     //             },
//     //             // timeout: 5000 // Set timeout to 5 seconds
//     //         }
//     //     );


//     //     const binId = createBinResponse.data.metadata.id;
//     //     const binUrl = `https://api.jsonbin.io/b/${binId}/latest`;

//     //     // Update database with the new URL

//     //     // const binUrl = await linkfun(apiname, fields);
//     //     await api.updateOne({ $set: { url: binUrl } });

//     //     res.status(200).json({ "url": "binUrl" });

//     // } catch (error) {
//     //     console.log(error.message);
//     //     res.status(500).send("INTERNAL SERVER ERROR");
//     // }
//     const requestData = {
//         headers: {
//             'X-Bin-Name': "BIN_NAME",
//             'X-Master-Key': jsonBinApiKey,
//             'Content-Type': 'multipart/form-data'
//         },
//         data: dataArray // Assuming dataArray is your array of data
//     };

//     // Send POST request using Axios
//     axios.post('https://api.jsonbin.io/v3/xl/b', requestData.data, {
//         headers: requestData.headers
//     })
//         .then(response => {
//             console.log('Response:', response.data);
//             res.status(200).send(response.data)
//         })
//         .catch(error => {
//             console.error('Error:', error.message);
//             res.status(500).send(error)
//         });
// }

// module.exports = { apiLink }

const Api = require('../models/Apistore')

const putLink = async (req, res) => {
    const { apiname, fields, number, url } = req.body;

    try {
        let api = await Api.findOne({ "name": apiname, "fields": fields, "number": number });
        // If url already exists, return it
        if (!api) {
            res.status(500).json({ "success": false, "response": "Api doesn't exist" })
        }
        else {
            if (api.url) {
                return res.status(200).json({ "success": true, "url": api.url });
            }
            else {
                await api.updateOne({ $set: { "url": url } });
                res.status(200).json({ "Success": true });
            }
        }
    }
    catch (error) {
        return res.status(500).json({ "Success": false, "error": error })
    }

}

module.exports = { putLink }