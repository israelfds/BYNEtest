async function text(){
    try {
        const response = await fetch("http://localhost:3000/text");
        const result = await response.json()
        return result.text;

    }catch (error) {
        console.error(error.message);
    }
} 


async function int(){
    try {
        const response = await fetch("http://localhost:3000/int");
        const result = await response.json()
        return result.int;

    }catch (error) {
        console.error(error.message);
    }
}

async function listNumber(params,quantidade) {
    let url = ""
    if(params == "par"){
        url = `http://localhost:3001/par/${quantidade}`
        console.log(url)
    }
    if(params == "impar"){
        url = `http://localhost:3002/impar/${quantidade}`
        console.log(url)
    }

    try {
        const response = await fetch(url);
        console.log("1", response)
        const result = await response.json()
        return result.int;

    }catch (error) {
        console.error(error.message);
    }
}


if(require.main === module){
    const arg = process.argv[2];

    if(arg === 'text'){
        text().then(console.log)
    }else if(arg === 'int'){
        int().then(console.log)
    }else if(arg === 'list'){
        const params = process.argv[3]
        const quantidade = process.argv[4]
        if(params === 'par' || params === 'impar'){
            listNumber(params, quantidade).then(console.log)
        }
    }else{
        console.log('Please enter a valid argument')
    }
}

module.experts = {text, int}