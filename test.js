function numerosPares() {
    const n = Math.floor(Math.random() * 100);
    return console.log(n % 2 === 0 ? n : n + 1);
}

numerosPares()