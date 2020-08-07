
module.exports = function () {
    process.stdin.on('data', (data)=>{
        // const cmd = data.toString().trim();
    
        // process.stdout.write('You typed: ' + cmd);
       
    
        const cwd = process.cwd();
        process.stdout.write(cwd);
    
         process.stdout.write('\nprompt > ');
    
    });
  }</