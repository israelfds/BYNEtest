const express = require('express');
const app = express();

const PORT = 3001;

app.use(express.json())

function numerosPares() {
    const n = Math.floor(Math.random() * 100);
    const par = n % 2 === 0 ? n : n + 1
    return par;
}


app.get('/par/:numero', (req, res) => {
    const numero = parseInt(req.params.numero);

    if (isNaN(numero) || numero <= 0) {
        return res.status(400).json({ error: 'O número deve ser um inteiro positivo.' });
    }

    const pares = [];
    for (let i = 0; i < numero; i++) {
        pares.push(numerosPares());
    }

    res.json({ "response": pares })

})


app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
})

