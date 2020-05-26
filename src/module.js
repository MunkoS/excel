console.log('Module.js')

async function start(){
    await Promise.resolve('test1');
}

start().then(res=>{
    console.log(res);
})
