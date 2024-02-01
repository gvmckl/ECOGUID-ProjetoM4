const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 3000;

let RecomendaçõesAtividades = [

  {atividade: "Caminhada em trilhas naturais", participantes: "Individual ou em grupo", preco: "Gratuito ou taxa de entrada em parques", tipo: "Atividade física ao ar livre", acessibilidade: "80%"},
  {atividade: "Piquenique em um parque local", participantes: "Ideal para grupos de amigos ou famílias", preco: "Custo dos alimentos preparados", tipo: "Social e gastronômica", acessibilidade: "90%"},
  {atividade: "Prática de esportes (futebol, vôlei, basquete)", participantes: "Varia conforme o esporte", preco: "Pode incluir a compra de equipamentos", tipo: "Esporte em equipe", acessibilidade: "60%"},
  {atividade: "Corrida em uma pista ao ar livre", participantes: "Individual ou em grupo", preco: "Gratuito ou taxa de uso de instalações", tipo: "Atividade física individual", acessibilidade: "75%"},
  {atividade: "Ciclismo em ciclovias ou estradas tranquilas", participantes: "Individual ou em grupo", preco: "Custo da manutenção da bicicleta", tipo: "Atividade física individual ou em grupo", acessibilidade: "70%"},
  {atividade: "Yoga ao ar livre", participantes: "Individual ou em aulas em grupo", preco: "Custo de aulas, se aplicável", tipo: "Atividade física e mental", acessibilidade: "85%"},
  {atividade: "Pesca em um lago ou rio", participantes: "Individual ou em grupos pequenos", preco: "Custo de equipamento e licenças", tipo: "Atividade de lazer", acessibilidade: "50%"},
  {atividade: "Canoagem em rios calmos", participantes: "Individual ou em grupos pequenos", preco: "Aluguel de equipamento ou tours", tipo: "Atividade aquática", acessibilidade: "60%"},
  {atividade: "Observação de aves em áreas naturais", participantes: "Individual ou em grupos pequenos", preco: "Gratuito ou custo de binóculos", tipo: "Observação da vida selvagem", acessibilidade: "75%"},
  {atividade: "Escalada em rochas ou paredes de escalada", participantes: "Geralmente em grupos pequenos", preco: "Custo de equipamento ou guias", tipo: "Atividade desafiadora", acessibilidade: "40%"},

]

let InformaçõesPoluentes = [
  
  {poluente: "Dióxido de Enxofre (SO2)", risco: "Impacto respiratório, 30% de risco para grupos sensíveis"},
  {poluente: "Material Particulado (PM10 e PM2.5)", risco: "Problemas respiratórios, 40% de risco para grupos sensíveis"},
  {poluente: "Óxidos de Nitrogênio (NOx)", risco: "Problemas respiratórios, 25% de risco para grupos sensíveis"},
  {poluente: "Monóxido de Carbono (CO)", risco: "Risco cardíaco, 20% de risco para grupos sensíveis"},
  {poluente: "Ozônio (O3)", risco: "Problemas respiratórios, 35% de risco para grupos sensíveis"},
  {poluente: "Chumbo (Pb)", risco: "Impacto neurológico, 15% de risco para grupos sensíveis"},
  {poluente: "Benzeno", risco: "Carcinogênico, 10% de risco para grupos sensíveis"},
  {poluente: "Dióxido de Nitrogênio (NO2)", risco: "Problemas respiratórios, 28% de risco para grupos sensíveis"},
  {poluente: "Formaldeído", risco: "Irritação ocular, 18% de risco para grupos sensíveis"},
  {poluente: "Arsênio (As)", risco: "Carcinogênico, 12% de risco para grupos sensíveis"},
  {poluente: "Cadmio (Cd)", risco: "Impacto renal, 8% de risco para grupos sensíveis"},
  {poluente: "Partículas Inaláveis Totais (TSP)", risco: "Problemas respiratórios, 38% de risco para grupos sensíveis"},
  {poluente: "Mercúrio (Hg)", risco: "Impacto neurológico, 14% de risco para grupos sensíveis"},
  {poluente: "Cloro (Cl2)", risco: "Irritação respiratória, 22% de risco para grupos sensíveis"},
  {poluente: "Cobre (Cu)", risco: "Problemas gastrointestinais, 11% de risco para grupos sensíveis"},
  {poluente: "Dioxinas e Furanos", risco: "Carcinogênico, 19% de risco para grupos sensíveis"},

]

let ImpactoHumano = [
  
  {impacto: "Emissões de Veículos a Combustão", grau: "Alto impacto na qualidade do ar"},
  {impacto: "Emissões de Veículos a Combustão", grau: "Alto impacto na qualidade do ar"},
  {impacto: "Queima de Combustíveis Fósseis", grau: "Alto impacto na qualidade do ar"},
  {impacto: "Desmatamento", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Uso Excessivo de Produtos Químicos Agrícolas", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Indústrias Poluentes", grau: "Alto impacto na qualidade do ar"},
  {impacto: "Descarte Inadequado de Resíduos", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Queimadas e Incêndios Florestais", grau: "Alto impacto na qualidade do ar"},
  {impacto: "Uso de Produtos Tóxicos Domésticos", grau: "Baixo impacto na qualidade do ar"},
  {impacto: "Agropecuária Intensiva", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Poluição do Ar Interno", grau: "Baixo impacto na qualidade do ar"},
  {impacto: "Mineração", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Produção de Energia a Carvão", grau: "Alto impacto na qualidade do ar"},
  {impacto: "Vazamentos de Gases Industriais", grau: "Alto impacto na qualidade do ar"},
  {impacto: "Transporte Marítimo", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Uso de Produtos Plásticos", grau: "Baixo impacto na qualidade do ar"},
  {impacto: "Atividades Agrícolas Intensivas", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Despejo de Produtos Químicos em Rios e Oceanos", grau: "Alto impacto na qualidade do ar"},
  {impacto: "Uso Descontrolado de Agrotóxicos", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Infraestrutura Urbana Desordenada", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Aquecimento Global e Mudanças Climáticas", grau: "Alto impacto na qualidade do ar"},


]

app.get('/recomendacoes', (req, res) => {
  res.json({RecomendaçõesAtividades})
})

app.get('/poluentes', (req, res) => {
  res.json({InformaçõesPoluentes})
})

app.get('/impactos', (req, res) => {
  res.json({ImpactoHumano})
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("API EM FUNCIONAMENTO");
});
