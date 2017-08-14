const fs = require('fs');

function scanFolder(directory) { 
  fs.readdir(directory, function(err, files) {
    if (err) {
      throw err;
    }
    for (file of files){
      let pathname = directory +'/'+ file;
      let name = file;
      fs.stat(pathname, function(err, stats) {
        switch(stats.isDirectory()) {
          case true:
            scanFolder(pathname);
            break;
          case false:
            fs.readFile(pathname, 'utf8',(err, data)=>{
              let count = {
                ribs: 0,
                chicken: 0,
                jerky: 0,
                tenderloin: 0,
                jalapeno: 0,
                lorem: 0,
              };
              if(err) throw err;
              let words = data.split(' ');
              for (word of words){
                switch (word){
                  case 'ribs':
                    count.ribs++;
                    break;
                  case 'chicken':
                    count.chicken++;
                    break;
                  case 'jerky':
                    count.jerky++;
                    break;
                  case 'tenderloin':
                    count.tenderloin++;
                    break;
                  case 'jalapeno':
                    count.jalapeno++;
                    break;
                  case 'lorem':
                    count.lorem++;
                    break;
                  default:
                    break;
                }
              }
            if(name !== '.DS_Store'){
              console.log(name + ' in '+pathname+': \nribs: ' + count.ribs + '\nchicken: ' + count.chicken + '\njerky: '+count.jerky+'\ntenderloin: '+count.tenderloin+'\njalapeno: '+count.jalapeno+'\nlorem: '+count.lorem+'\n');  
            }
        }
    )
    }
  });
}});}

scanFolder('./BigIpsum');
