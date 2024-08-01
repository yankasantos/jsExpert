const { error } = require("./src/constants");
const File = require("./src/file")
const assert = require('assert')
//IFEE - It's a function that make your own execution
;(async() => {
    //variable created inside this block is only valid during execution
    {
        const filePath = './mocks/empityFile-invalid.csv'
        const expected = new Error(error.FILE_LENGHT_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)
        await assert.rejects(result, expected)
    }
})()