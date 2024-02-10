const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 3000;

let RecomendacoesAtividades = [

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
  {atividade: "Caminhada em trilhas naturais", participantes: "Individual ou em grupo", preço: "Gratuito", tipo: "Atividade física ao ar livre", acessibilidade: "80%"},
  {atividade: "Acampamento em áreas selvagens", participantes: "Grupos pequenos ou familiares", preço: "Custo da permissão de acampamento", tipo: "Experiência ao ar livre", acessibilidade: "65%"},
  {atividade: "Picnic em parques urbanos", participantes: "Individual, casais ou em grupos", preço: "Custo dos alimentos", tipo: "Atividade social", acessibilidade: "90%"},
  {atividade: "Fotografia de paisagens", participantes: "Fotógrafos individuais", preço: "Custo da câmera e equipamento", tipo: "Atividade artística", acessibilidade: "75%"},
  {atividade: "Caiaque em rios tranquilos", participantes: "Individual ou em grupos pequenos", preço: "Custo do aluguel do caiaque", tipo: "Atividade aquática", acessibilidade: "75%"},
  {atividade: "Trilha de bicicleta em trilhas naturais", participantes: "Individual ou em grupos pequenos", preço: "Custo da bicicleta ou aluguel", tipo: "Atividade física ao ar livre", acessibilidade: "70%"},
  {atividade: "Observação de aves em reservas naturais", participantes: "Individual ou em grupos pequenos", preço: "Gratuito", tipo: "Observação de fauna", acessibilidade: "80%"},
  {atividade: "Desenho ou pintura ao ar livre", participantes: "Artistas individuais", preço: "Custo dos materiais", tipo: "Atividade artística", acessibilidade: "75%"},
  {atividade: "Pesca recreativa em lagos ou represas", participantes: "Individual ou em grupos pequenos", preço: "Custo da licença de pesca", tipo: "Atividade relaxante", acessibilidade: "70%"},
  {atividade: "Corrida ou caminhada em trilhas urbanas", participantes: "Individual ou em grupos pequenos", preço: "Gratuito", tipo: "Atividade física ao ar livre", acessibilidade: "85%"},
  {atividade: "Futebol em campos abertos", participantes: "Ideal para grupos de amigos", preço: "Gratuito", tipo: "Esporte recreativo", acessibilidade: "80%"},
  {atividade: "Passeio de cavalo em trilhas naturais", participantes: "Individual ou com guias", preço: "Custo do aluguel do cavalo", tipo: "Atividade equestre", acessibilidade: "65%"},
  {atividade: "Jardinagem em parques comunitários", participantes: "Individual ou grupos de jardinagem", preço: "Gratuito ou custo das sementes e ferramentas", tipo: "Atividade terapêutica", acessibilidade: "75%"},
  {atividade: "Geo-caching em áreas naturais", participantes: "Geocachers individuais ou em grupos", preço: "Gratuito", tipo: "Atividade de busca e exploração", acessibilidade: "70%"},
  {atividade: "Caminhada em trilhas naturais", participantes: "Individual ou em grupo", preço: "Gratuito ou taxa de entrada em parques", tipo: "Atividade física ao ar livre", acessibilidade: "80%"},
  {atividade: "Caminhada em praias de areia branca", participantes: "Individual ou em grupo", preço: "Gratuito", tipo: "Atividade física ao ar livre", acessibilidade: "85%"},
  {atividade: "Passeio de bicicleta em parques", participantes: "Individual ou em grupo", preço: "Gratuito ou aluguel de bicicletas", tipo: "Atividade física ao ar livre", acessibilidade: "75%"},
  {atividade: "Piquenique em áreas verdes", participantes: "Individual, casais ou em grupos", preço: "Custo dos alimentos preparados", tipo: "Social e gastronômica", acessibilidade: "90%"},
  {atividade: "Fotografia de paisagens naturais", participantes: "Individual", preço: "Custo da câmera e acessórios", tipo: "Atividade criativa", acessibilidade: "80%"},
  {atividade: "Aulas de ioga ao nascer do sol", participantes: "Grupos pequenos", preço: "Custo das aulas ou gratuitas", tipo: "Atividade física e espiritual", acessibilidade: "70%"},
  {atividade: "Passeio de barco em lagos ou rios", participantes: "Individual ou em grupos pequenos", preço: "Custo do aluguel do barco", tipo: "Atividade aquática", acessibilidade: "65%"},
  {atividade: "Observação de estrelas em áreas sem poluição luminosa", participantes: "Individual ou em grupos pequenos", preço: "Gratuito", tipo: "Observação astronômica", acessibilidade: "70%"},
  {atividade: "Piquenique noturno sob a lua cheia", participantes: "Ideal para casais ou grupos pequenos", preço: "Custo dos alimentos preparados", tipo: "Social e gastronômica", acessibilidade: "75%"},
  {atividade: "Voluntariado em projetos de conservação ambiental", participantes: "Depende do projeto", preço: "Geralmente voluntário", tipo: "Atividade de responsabilidade social", acessibilidade: "60%"},
  {atividade: "Rapel em cânions naturais", participantes: "Geralmente em grupos pequenos", preço: "Custo de equipamento ou guias", tipo: "Atividade de aventura", acessibilidade: "45%"},
  {atividade: "Frisbee em parques abertos", participantes: "Ideal para grupos de amigos", preço: "Custo do frisbee", tipo: "Esporte recreativo", acessibilidade: "80%"},
  {atividade: "Montanhismo em trilhas desafiadoras", participantes: "Geralmente em grupos pequenos", preço: "Custo de equipamento ou guias", tipo: "Atividade de aventura", acessibilidade: "50%"},
  
]

let InformacoesPoluentes = [
  
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
  {poluente: "Material Particulado (PM10)", risco: "Impacto respiratório, 30% de risco para grupos sensíveis"},
  {poluente: "Dióxido de Nitrogênio (NO2)", risco: "Problemas respiratórios, 25% de risco para grupos sensíveis"},
  {poluente: "Ozônio (O3)", risco: "Impacto respiratório, 22% de risco para grupos sensíveis"},
  {poluente: "Monóxido de Carbono (CO)", risco: "Problemas cardiovasculares, 15% de risco para grupos sensíveis"},
  {poluente: "Dióxido de Enxofre (SO2)", risco: "Impacto respiratório, 18% de risco para grupos sensíveis"},
  {poluente: "Material Particulado Fino (PM2.5)", risco: "Problemas respiratórios, 28% de risco para grupos sensíveis"},
  {poluente: "Chumbo (Pb)", risco: "Problemas neurológicos, 12% de risco para grupos sensíveis"},
  {poluente: "Benzeno (C6H6)", risco: "Impacto respiratório, 20% de risco para grupos sensíveis"},
  {poluente: "Mercúrio (Hg)", risco: "Impacto neurológico, 15% de risco para grupos sensíveis"},
  {poluente: "Amônia (NH3)", risco: "Problemas respiratórios, 24% de risco para grupos sensíveis"},
  {poluente: "Vanádio (V)", risco: "Impacto respiratório, 21% de risco para grupos sensíveis"},
  {poluente: "Zinco (Zn)", risco: "Problemas gastrointestinais, 16% de risco para grupos sensíveis"},
  {poluente: "Ferro (Fe)", risco: "Impacto respiratório, 14% de risco para grupos sensíveis"},
  {poluente: "Cromo (Cr)", risco: "Impacto respiratório, 18% de risco para grupos sensíveis"},
  {poluente: "Cianeto (CN-)", risco: "Impacto neurológico, 12% de risco para grupos sensíveis"},
  {poluente: "Alumínio (Al)", risco: "Problemas respiratórios, 25% de risco para grupos sensíveis"},
  {poluente: "Nitrato de Potássio (KNO3)", risco: "Problemas respiratórios, 20% de risco para grupos sensíveis"},
  {poluente: "Selênio (Se)", risco: "Impacto renal, 15% de risco para grupos sensíveis"},
  {poluente: "Hidrogênio (H2)", risco: "Problemas respiratórios, 23% de risco para grupos sensíveis"},
  {poluente: "Fluoreto (F-)", risco: "Problemas dentários, 10% de risco para grupos sensíveis"},

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
  {impacto: "Emissões de Produtos de Limpeza", grau: "Baixo impacto na qualidade do ar"},
  {impacto: "Poluição Térmica de Corpos D'água", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Descarte Irregular de Resíduos Eletrônicos", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Atividades de Construção Civil", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Produção e Descarte de Plásticos de Uso Único", grau: "Alto impacto na qualidade do ar"},
  {impacto: "Despejo de Resíduos Químicos Industriais", grau: "Alto impacto na qualidade do ar"},
  {impacto: "Uso de Produtos de Cuidado Pessoal com Microplásticos", grau: "Baixo impacto na qualidade do ar"},
  {impacto: "Escapamento de Gases de Refrigeração", grau: "Moderado impacto na qualidade do ar"},
  {impacto: "Incineradores de Resíduos", grau: "Alto impacto na qualidade do ar"},
  {impacto: "Produção e Uso de Agroquímicos", grau: "Moderado impacto na qualidade do ar"},


]

app.get('/recomendacoes', (req, res) => {
  res.json({ RecomendacoesAtividades });
});

app.get('/poluentes', (req, res) => {
  res.json({ InformacoesPoluentes });
});

app.get('/impactos', (req, res) => {
  res.json({ ImpactoHumano });
});

app.listen(PORT, () => {
  console.log("API EM FUNCIONAMENTO");
});
