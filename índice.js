"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa a biblioteca prompt-sync para capturar a entrada do usu�rio
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Cria uma inst�ncia do prompt
const prompt = (0, prompt_sync_1.default)();
// Fun��o para calcular a m�dia das notas
function calcularMedia(notas) {
    // Calcula a soma das notas
    const soma = notas.reduce((total, nota) => total + nota, 0);
    // Divide a soma pelo n�mero de notas para obter a m�dia
    return soma / notas.length;
}
// Solicita o nome do aluno
const nome = prompt('Digite o nome do aluno: ');
// Cria um array vazio para armazenar as 4 notas
const notas = [];
// Loop para capturar as 4 notas do aluno
for (let i = 1; i <= 4; i++) {
    // Solicita a nota ao usu�rio e converte para n�mero
    const nota = parseFloat(prompt(`Digite a nota ${i}: `));
    // Adiciona a nota ao array de notas
    notas.push(nota);
}
// Calcula a m�dia das notas usando a fun��o calcularMedia
const media = calcularMedia(notas);
// Cria o objeto Aluno com os dados capturados
const aluno = {
    nome: nome,
    notas: notas,
    media: media
};
// Exibe o objeto Aluno no console
console.log(aluno);