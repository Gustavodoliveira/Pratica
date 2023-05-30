// nao esquecer de colocar ("type" : "module") para o codigo fucionar //

import inquire from 'inquirer';
import qr from "qr-image";
import fs from "fs"





inquire
  .prompt([
    {
        message: 'digite sua url ?',
        name:'URL',

    }
  ])
  .then((answers) => {
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('img.png'));
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("salcve");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    
    } else {
      // Something else went wrong
    }
  });