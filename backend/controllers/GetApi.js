
const Api = require("../models/Apistore");

const { OpenAI } = require('openai');
const axios = require('axios');

const arraysAreEqual = async (arr1, arr2) => {
    // Check if the arrays have the same length
    if (arr1.lastIndexOf() !== arr2.lastIndexOf()) {
        return false;
    }

    // Sort the arrays and compare them
    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();

    // Compare each element after sorting
    for (let i = 0; i < arr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }

    return true;
}
const getApi = async (req, res) => {
    try {

        const apiKey = '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'; // Replace with your actual OpenAI API key

        const { apiname, fields, number } = req.body;

        const api = await Api.findOne({ "name": apiname });
        // await console.log("Founded or not:", api)
        if (api) {
            if (arraysAreEqual(fields, api.fields)) {
                //Found in the monogodb
                return res.status(200).json(api.api);
            }
        }
        else {
            const openai = await new OpenAI({
                apiKey: apiKey,
            });

            const response = await openai.completions.create({
                model: "gpt-3.5-turbo-instruct",
                // prompt: `Create a JSON ${apiname} API with ${number} elements. Enclose the entire API in 
                // square brackets. For each movie, provide the fields given in ${fields}.`,
                prompt: `Generate a JSON representation of a ${apiname} API containing ${number} elements, encapsulated within square brackets. Each element should include the following fields specified in ${fields} for 
            ${apiname}.`,
                temperature: 1,
                max_tokens: 4000,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            // console.log('The response is: ', response)
            // console.log(response.choices[0].text);

            // if (response.choices[0].text.hasOwnProperty("image")) {
            //     await photolink(response.choices[0].text);
            // }
            let mongoinstance = await Api.create({
                name: apiname,
                fields: fields,
                number: number,
                api: response.choices[0].text,
                url: ""
            })
            res.status(200).json(response.choices[0].text);
        }
    }
    catch (error) {
        res.status(500).json({ "error": error });
    }
}




module.exports = { getApi };