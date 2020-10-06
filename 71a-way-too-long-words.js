// /************* KEEP BELOW CODE AS IT IS *********************/
let i = ''
process.stdin.on('data', c => i += c)
process.stdin.on('end', () => {
    const {EOL} = require('os')
    const lines = i.split(EOL) /*your input text, split by lines*/
    // console.log(lines); 
    
    // remove '4' string from lines
     let strings = [];
     lines.map((line) => {
       if(isNaN(parseInt((line)))){
        //  console.log(line);
         strings.push(line);
       }
     });
    //  console.log(strings);

    strings.forEach((line) => {
        // console.log(line);
        if (line.length <= 10)
        {
            // console.log("lower than 10 and string");
            console.log(line);
        }
        else
        {
            //   console.log("higher 10 and string");
            // l10n
            let first = line.charAt(0); 
            // console.log(first);
            // console.log(line.length);
            let last = line.charAt(line.length - 1); 
            // console.log(last);
            let inBetween = line.length -2
            console.log(first + inBetween + last);
        }
        
    })
})