process.stdout.write('prompt > ');

//const commands = require('./pwd ./ls')

// pwd();
// ls();

process.stdin.on('data', (data)=>{
    const cmd = data.toString().trim();

    if (cmd === 'pwd'){
        pwd();
    } 
    if (cmd === 'ls'){
        ls();
    }
    if (cmd === 'cat') {
        cat(pwd.js);
        
    }
    
})

const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')