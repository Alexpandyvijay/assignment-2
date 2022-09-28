let readline = require('readline');
let rl = readline.createInterface(
    process.stdin,process.stdout
);
rl.question('Please enter your name : ',(ans)=>{
    console.log(`Hello ${ans}`)
    rl.close();
});
