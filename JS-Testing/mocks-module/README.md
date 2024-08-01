If you wanna see the CSV file on terminal run the following command:
`node`
To run the JS scripts in the terminal
```javascript
   fs.readFileSync('./mocks/threeItems-valid.csv', 'utf-8') 
```
## Destructuring
You can access each part of the object or array. It's like in or CSV we have a line with the header of columns and we recive each line with the values and we can access the values making a desturing.
```javascript
   //[0] = headers
   //[1] = line 1
   //[2] = line 2
   //...variable = remaining values
    const [headers, ...fileWithoutHeader] = csvString.split(/\r?\n/)
```
With the destructuring we can get part of the array with the result of the operation to split the line on csv.