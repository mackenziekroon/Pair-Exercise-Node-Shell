module.exports = function () {
    
    const cwd = process.cwd();
    process.stdout.write(cwd);

    process.stdout.write('\nprompt > ');

}