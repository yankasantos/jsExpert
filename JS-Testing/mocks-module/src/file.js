const { readFile } = require('fs/promises')
const { error } = require('./constants')
const DEFAULT_OPTION = {
    maxLine: 3,
    fields: ['id', 'name', 'profession', 'age'],
}
class File{
    static async csvToJSON(filePath){
        const content = await readFile(filePath, "utf-8")
        const validation = this.isValid(content)
        if(!validation.valid) throw new Error(validation.error)
    }

    static isValid(csvString, options = DEFAULT_OPTION){
        const [headers, ...fileWithoutHeader] = csvString.split(/\r?\n/)
        if(!fileWithoutHeader.lenght){
            return{
                error: error.FILE_EMPITY_ERROR_MESSAGE,
                valid:false
            }
        }
    }   
}
module.exports = File