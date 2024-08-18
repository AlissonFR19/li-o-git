// Importa a biblioteca prompt-sync para capturar a entrada do usuário
import promptSync from 'prompt-sync';

// Cria uma instância do prompt
const prompt = promptSync();

// Interface que define a estrutura do objeto Aluno
interface Aluno {
    nome: string;
    notas: number[];
    media: number;
}

// Função para calcular a média das notas
function calcularMedia(notas: number[]): number {
    // Calcula a soma das notas
    const soma = notas.reduce((total, nota) => total + nota, 0);
    // Divide a soma pelo número de notas para obter a média
    return soma / notas.length;
}

// Solicita o nome do aluno
const nome = prompt('Digite o nome do aluno: ');

// Cria um array vazio para armazenar as 4 notas
const notas: number[] = [];

// Loop para capturar as 4 notas do aluno
for (let i = 1; i <= 4; i++) {
    // Solicita a nota ao usuário e converte para número
    const nota = parseFloat(prompt(`Digite a nota ${i}: `));
    // Adiciona a nota ao array de notas
    notas.push(nota);
}

// Calcula a média das notas usando a função calcularMedia
const media = calcularMedia(notas);

// Cria o objeto Aluno com os dados capturados
const aluno: Aluno = {
    nome: nome,
    notas: notas,
    media: media
};

// Exibe o objeto Aluno no console
console.log(aluno);