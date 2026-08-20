// Baralho Cigano - 57 slides data
// Slide types: 'cover', 'section', 'content', 'card', 'closing'

export const sections = [
  { id: "abertura", name: "Abertura", slides: [1, 2] },
  { id: "origem", name: "Origem do Povo Cigano", slides: [3, 4] },
  { id: "brasil", name: "Ciganos no Brasil", slides: [5, 6] },
  { id: "cartas-origem", name: "A Origem das Cartas Ciganas", slides: [7] },
  { id: "lenormand", name: "Mlle. Lenormand", slides: [8, 9] },
  { id: "grande", name: "O Grande Lenormand", slides: [10] },
  { id: "pequeno", name: "O Pequeno Lenormand", slides: [11, 12, 14] },
  { id: "transformacoes", name: "Transformações e Inovações", slides: [13] },
  { id: "significado", name: "Significado das Cartas", slides: Array.from({ length: 37 }, (_, i) => 15 + i) },
  { id: "jogadas", name: "Modelos de Jogadas", slides: [52, 53, 54, 55] },
  { id: "signos", name: "Signos Ciganos", slides: [56] },
  { id: "encerramento", name: "Encerramento", slides: [57] },
];

// Cards (16-51) with individual meanings
const cards = [
  { n: 1, name: "Cavaleiro", text: "Essa carta simboliza movimento. Algo já está em processo de acontecer. Uma notícia pode estar a caminho, ou alguém pode chegar. O movimento será ágil; lembre-se de que, nos tempos de M'lle. Lenormand, o cavalo representava o meio de transporte mais rápido. O que deseja que aconteça acontecerá em breve. No contexto do jogo, esta carta também nos alerta que é hora de agir! Ou você toma a iniciativa, ou corre o risco de perder a oportunidade. O momento é favorável para a ação, pois o caminho para a sua jornada está livre de obstáculos; tudo depende de você se movimentar." },
  { n: 2, name: "Trevo", text: "O Trevo traz sorte, oportunidades passageiras e boas notícias inesperadas. Representa pequenos ganhos, momentos de leveza e alegria. É um sinal para aproveitar as chances que se apresentam, pois elas podem não durar muito. Também pode indicar bênçãos discretas e a necessidade de reconhecer as pequenas vitórias do dia a dia." },
  { n: 3, name: "Navio", text: "O Navio simboliza viagens, mudanças e novos horizontes. Traz consigo a ideia de expansão, comércio e movimento em direção ao desconhecido. Pode indicar deslocamentos físicos ou uma jornada interior de descobertas. Também representa negócios internacionais, longas distâncias e a busca por novas experiências." },
  { n: 4, name: "Casa", text: "A Casa representa lar, família, estabilidade e segurança. É uma carta de proteção, indicando ambiente familiar harmonioso e questões domésticas. Pode falar sobre imóveis, mudanças de residência ou o fortalecimento dos vínculos familiares. Traz a energia do aconchego e da base sólida." },
  { n: 5, name: "Árvore", text: "A mensagem da Árvore nos convida a pensar a longo prazo, planejando e agindo com segurança. Ela enfatiza a importância de plantar, germinar e cuidar para que uma árvore forte e fértil possa crescer. É fundamental dar para receber; portanto, essa carta também remete à troca e ao compartilhamento. Representa prosperidade, abundância e saúde." },
  { n: 6, name: "Nuvens", text: "As Nuvens indicam dúvidas, confusões e situações passageiras. Representam momentos de instabilidade emocional, decisões difíceis e a necessidade de esperar para agir. O lado escuro da carta aponta para onde estão as dificuldades, enquanto o lado claro mostra o caminho da solução." },
  { n: 7, name: "Serpente", text: "A Serpente alerta sobre traições, complicações e caminhos tortuosos. Pede atenção redobrada com pessoas ao redor e situações que exigem astúcia. Também simboliza sabedoria, cura e transformação profunda. Nem sempre representa algo negativo — é preciso analisar seu contexto na leitura." },
  { n: 8, name: "Caixão", text: "O Caixão representa fim de ciclos, transformações profundas e o encerramento de fases. Não deve ser interpretado literalmente como morte, mas como o término necessário para dar espaço ao novo. Também pode indicar doenças passageiras ou perdas emocionais que abrem caminho para renovação." },
  { n: 9, name: "Buquê", text: "O Buquê traz alegria, presentes e reconhecimento. Simboliza gratidão, gentileza e beleza. Representa momentos felizes, convites, homenagens e a chegada de boas notícias. É uma das cartas mais positivas do baralho, indicando afeto e apreciação." },
  { n: 10, name: "Foice", text: "Você está sendo chamado a fazer cortes e a entender que todo processo de transformação e mudança requer ajustes para restaurar o equilíbrio necessário. Indica mudanças que já começaram a acontecer e que devem ser concluídas, pois trarão benefícios e tranquilidade. Também alerta para decisões rápidas e definitivas." },
  { n: 11, name: "Chicotes", text: "Os Chicotes falam de conflitos, discussões e desafios que exigem esforço. Representam disputas, competições e tensões que precisam ser resolvidas. Também podem indicar exercício, disciplina e a superação de obstáculos através do trabalho árduo." },
  { n: 12, name: "Pássaros", text: "Os Pássaros trazem comunicação, conversas, negociações e movimentação. Indicam pequenas viagens, notícias, telefonemas e a chegada de informações importantes. Podem também apontar para nervosismo momentâneo ou agitação passageira." },
  { n: 13, name: "Criança", text: "A Criança representa novidades, inocência, novos começos e crescimento. É a carta dos projetos em fase inicial, das amizades sinceras e do renascimento. Também pode significar filhos, gravidez ou o despertar de um novo aspecto da personalidade." },
  { n: 14, name: "Raposa", text: "A Raposa pede cautela, alertando sobre pessoas falsas, mentiras ou situações que exigem esperteza. Representa a necessidade de agir com inteligência e desconfiar de aparências. Também pode indicar trabalho, especialmente em atividades que exigem astúcia." },
  { n: 15, name: "Urso", text: "O Urso simboliza força, proteção, poder e figuras de autoridade. Representa segurança financeira, chefes, pais e pessoas influentes. Também pode indicar ciúme excessivo ou a necessidade de estabelecer limites saudáveis nas relações." },
  { n: 16, name: "Estrelas", text: "As Estrelas trazem esperança, inspiração e realização de sonhos. Representam iluminação espiritual, clareza e o caminho certo a seguir. Indicam sucesso a longo prazo, reconhecimento e a manifestação dos desejos mais profundos do coração." },
  { n: 17, name: "Cegonhas", text: "As Cegonhas anunciam mudanças positivas, transformações e renovação. Simbolizam a chegada de algo novo — pode ser um filho, uma mudança de casa, emprego ou fase da vida. Trazem a energia do progresso natural e da evolução." },
  { n: 18, name: "Cão", text: "O Cão representa lealdade, amizade verdadeira e fidelidade. É a carta dos amigos sinceros, das relações duradouras e da confiança mútua. Também simboliza proteção e o apoio incondicional de pessoas próximas." },
  { n: 19, name: "A Torre", text: "A Torre indica instituições, isolamento, solidão ou autoridade. Representa órgãos públicos, empresas grandes, hospitais ou tribunais. Também pode simbolizar a necessidade de introspecção, de se afastar temporariamente para refletir e ganhar perspectiva." },
  { n: 20, name: "Jardim", text: "O Jardim simboliza vida social, encontros, eventos públicos e comunidade. Representa festas, reuniões e a interação com muitas pessoas. Traz a energia da coletividade, do reconhecimento social e da expansão do círculo de relacionamentos." },
  { n: 21, name: "Montanha", text: "A Montanha representa obstáculos, desafios e situações que exigem paciência. Indica bloqueios, atrasos e a necessidade de perseverança. Também simboliza inimigos declarados ou barreiras que precisam ser superadas com determinação." },
  { n: 22, name: "Caminhos", text: "Os Caminhos falam de escolhas, decisões e encruzilhadas. Representam a necessidade de escolher entre duas ou mais opções. Pedem reflexão, discernimento e coragem para seguir o caminho certo, mesmo quando ele não é o mais fácil." },
  { n: 23, name: "Ratos", text: "Os Ratos alertam sobre perdas, roubos e desgastes. Representam preocupações, ansiedade e situações que corroem energia aos poucos. Pedem atenção à saúde, às finanças e aos pequenos detalhes que podem estar sendo negligenciados." },
  { n: 24, name: "Coração", text: "O Coração simboliza amor, paixão, sentimentos verdadeiros e relacionamentos afetivos. Representa a alegria do amor correspondido, novos romances e a harmonia nas relações. Também fala de generosidade, compaixão e conexão emocional profunda." },
  { n: 25, name: "Anel", text: "O Anel representa compromissos, acordos, uniões e contratos. Simboliza casamentos, sociedades e promessas de continuidade. Traz a energia da fidelidade, do vínculo formal e da estabilidade nas relações estabelecidas." },
  { n: 26, name: "Livro", text: "O Livro fala de segredos, conhecimento, estudos e mistérios. Representa aprendizado, pesquisa e informações ocultas. Também pode indicar segredos que ainda não foram revelados ou a necessidade de aprofundamento em determinado assunto." },
  { n: 27, name: "Carta", text: "A Carta simboliza notícias, mensagens, documentos e comunicações escritas. Representa informações importantes que chegam, contratos, e-mails ou correspondências. Traz a energia da revelação através da palavra escrita." },
  { n: 28, name: "Cavalheiro", text: "O Cavalheiro representa a figura masculina do consulente ou uma pessoa importante em sua vida — pai, marido, namorado, irmão ou amigo próximo. Simboliza qualidades como força, proteção, iniciativa e ação." },
  { n: 29, name: "Dama", text: "A Dama representa a figura feminina do consulente ou uma mulher importante em sua vida — mãe, esposa, namorada, irmã ou amiga próxima. Simboliza sensibilidade, intuição, acolhimento e sabedoria emocional." },
  { n: 30, name: "Lírios", text: "Os Lírios representam paz, harmonia, maturidade e sabedoria. Simbolizam a família harmoniosa, a paz interior e a serenidade conquistada com o tempo. Também podem indicar sexualidade, prazer e relações maduras." },
  { n: 31, name: "Sol", text: "O Sol traz sucesso, vitória, alegria e realização. É uma das cartas mais positivas, indicando conquistas, reconhecimento e momentos de grande felicidade. Representa a energia vital, a saúde plena e o brilho pessoal." },
  { n: 32, name: "A Lua", text: "A Lua fala de emoções, intuição, reconhecimento e fama. Representa o mundo interior, os sentimentos profundos e a sensibilidade artística. Também pode indicar honrarias, prêmios e o reconhecimento público de talentos." },
  { n: 33, name: "Chave", text: "A Chave simboliza soluções, aberturas, sucesso garantido e portas que se abrem. Representa a certeza de que algo importante está prestes a se concretizar. Traz a energia do desbloqueio e da conquista definitiva." },
  { n: 34, name: "Peixes", text: "Os Peixes representam dinheiro, negócios, fluxo financeiro e prosperidade material. Simbolizam abundância, ganhos e a expansão dos recursos. Também podem indicar espiritualidade, intuição e conexão com o inconsciente." },
  { n: 35, name: "Âncora", text: "A Âncora simboliza estabilidade, segurança, trabalho firme e permanência. Representa objetivos alcançados, situações que se consolidam e a base sólida construída ao longo do tempo. Traz a energia da constância e da confiabilidade." },
  { n: 36, name: "Cruz", text: "A Cruz representa provações, destino, fé e superação. Simboliza os desafios que fortalecem a alma e as lições necessárias para o crescimento espiritual. Também fala de espiritualidade, propósito de vida e a aceitação daquilo que não pode ser mudado." },
];

export const slides = [
  // 1 - Cover
  {
    n: 1,
    type: "cover",
    section: "Abertura",
    title: "Baralho Cigano",
    subtitle: "Le Petit Lenormand",
    description: "Uma apresentação sobre a origem, história e significado das 36 cartas",
    author: "Margarete da Rosa",
    dedication: "Meu agradecimento a duas pessoas importantes para a realização deste curso e apostila: minha filha Anama Rosa Fetter e minha tia Neura Ferreira Santos.",
  },
  // 2 - O Sigilo
  {
    n: 2,
    type: "content",
    section: "Abertura",
    title: "O Sigilo",
    paragraphs: [
      "O sigilo é essencial; não comente com ninguém sobre a vida do consulente.",
      "Segundo os ciganos, não devemos abrir as cartas sem um pagamento, mesmo que simbólico, seguindo a premissa do \"dar para receber\".",
    ],
  },
  // 3
  {
    n: 3,
    type: "content",
    section: "Origem do Povo Cigano",
    title: "Origem do Povo Cigano",
    paragraphs: [
      "A origem do povo cigano é envolta em mistério, em grande parte devido à falta de uma linguagem escrita. A hipótese mais aceita sugere que eles se originaram na Índia antiga, percorrendo o Oriente Médio antes de se espalharem pelo Ocidente.",
      "A partir do primeiro milênio d.C., dividiram-se em dois ramos: os Pechen, que chegaram à Europa através da Grécia, e os Beni, que foram para a Síria e Egito.",
      "Os ciganos, ou Roms, foram historicamente nômades, dedicando-se a atividades como a metalurgia, adivinhação e comércio.",
    ],
  },
  // 4
  {
    n: 4,
    type: "content",
    section: "Origem do Povo Cigano",
    title: "Perseguição e Migração",
    paragraphs: [
      "Ao longo dos séculos, o povo cigano enfrentou intensa perseguição em diversas partes do mundo. Muitas leis foram criadas para restringir seus deslocamentos, práticas culturais e até mesmo a existência de seus grupos.",
      "Durante o Holocausto, milhares de ciganos foram vítimas do genocídio nazista, um episódio conhecido como Porrajmos. Ainda assim, mantiveram viva sua identidade através da oralidade, da música e das tradições familiares.",
      "A migração forçada os levou a se espalharem por todos os continentes, adaptando-se a diferentes culturas sem perder a essência de sua ancestralidade.",
    ],
  },
  // 5
  {
    n: 5,
    type: "content",
    section: "Ciganos no Brasil",
    title: "Ciganos no Brasil",
    paragraphs: [
      "Os primeiros ciganos chegaram ao Brasil no século XVI, trazidos como degredados pelos portugueses. Desde então, estabeleceram comunidades por todo o território nacional, especialmente em Minas Gerais, Bahia e São Paulo.",
      "No Brasil, o povo cigano contribuiu significativamente para a cultura popular, influenciando a música, a dança, a culinária e as práticas espirituais.",
      "Apesar de suas contribuições, ainda enfrentam preconceito e lutam por reconhecimento e direitos. O dia 24 de maio é dedicado a Santa Sara Kali, padroeira do povo cigano, celebrado com festas em várias regiões do país.",
    ],
  },
  // 6
  {
    n: 6,
    type: "content",
    section: "Ciganos no Brasil",
    title: "Cultura, Fé e Tradições",
    paragraphs: [
      "Este povo, nômade e artístico, vive de acordo com suas próprias crenças e valores, respeitando a natureza e valorizando a família. Reverenciam Santa Sara Kali, associando-a a suas origens e espiritualidades.",
      "Embora conservadores em suas práticas, as mulheres têm se destacado economicamente, especialmente na leitura da sorte. A educação formal é limitada, mas muitos ciganos têm buscado espaço na sociedade.",
      "Os ciganos ligam-se profundamente aos ciclos da natureza e às estrelas, promovendo festivais e rituais mensais. Enquanto se adaptam à modernidade, a preservação de suas tradições é um desafio constante. A continuidade dos estudos e a valorização de sua identidade são essenciais.",
    ],
  },
  // 7
  {
    n: 7,
    type: "content",
    section: "A Origem das Cartas Ciganas",
    title: "A Origem das Cartas Ciganas",
    paragraphs: [
      "A origem das cartas do Baralho Cigano é obscura e se mistura com a história do Tarot, com a tradição de que cada cigana podia criar seu próprio oráculo.",
      "O Baralho mais conhecido surgiu nas mãos de Madame Lenormand, uma cortesã francesa do século XVIII que previa eventos, incluindo a ascensão e queda de Napoleão Bonaparte.",
      "Ela aprendeu a ler as Cartas Ciganas com ciganos europeus e adaptou o baralho para incluir figuras do cotidiano e do baralho de naipes, o que gerou controvérsias entre ciganos.",
      "Hoje, o Baralho Cigano é utilizado tanto por não ciganos quanto por mulheres ciganas, e existem vários tipos e materiais disponíveis para estudo sobre o tema.",
    ],
  },
  // 8
  {
    n: 8,
    type: "content",
    section: "Mlle. Lenormand",
    title: "Mlle. Lenormand",
    paragraphs: [
      "Marie Anne Adélaïde Lenormand (1772-1843) foi uma das mais famosas cartomantes da história. Nascida em Alençon, na França, cedo demonstrou dons de vidência que a levariam a se tornar conselheira de figuras importantes da corte francesa.",
      "Estabeleceu-se em Paris, onde recebia clientes ilustres em seu salão, entre eles a Imperatriz Josefina e Napoleão Bonaparte. Suas previsões acuradas construíram sua fama e prestígio.",
      "Escreveu diversos livros sobre cartomancia e adivinhação, deixando um legado que perdura até hoje na tradição do Baralho Cigano.",
    ],
  },
  // 9
  {
    n: 9,
    type: "content",
    section: "Mlle. Lenormand",
    title: "Paris, Napoleão e Legado",
    paragraphs: [
      "Em Paris, Mlle. Lenormand atendeu à alta sociedade francesa e europeia. Sua reputação era tanta que Napoleão, embora cético, consultou-a diversas vezes através de sua esposa Josefina.",
      "Diz-se que previu tanto a coroação quanto a queda do imperador, além de eventos importantes da Revolução Francesa. Sua fama atravessou fronteiras e chegou a outras cortes europeias.",
      "Após sua morte, o baralho que carrega seu nome tornou-se um dos oráculos mais populares do mundo, sendo estudado e utilizado até os dias atuais por praticantes de diversas tradições espirituais.",
    ],
  },
  // 10
  {
    n: 10,
    type: "content",
    section: "O Grande Lenormand",
    title: "O Grande Lenormand",
    paragraphs: [
      "O Grande Lenormand, também conhecido como \"Grand Jeu de Mlle. Lenormand\", é composto por 54 cartas ricamente ilustradas com símbolos místicos, figuras astrológicas, letras hebraicas e elementos da mitologia clássica.",
      "Este baralho é mais complexo que sua versão reduzida e permite leituras mais profundas e elaboradas. Cada carta contém múltiplas camadas de significado, exigindo do intérprete um estudo mais aprofundado.",
      "Menos popular que o Pequeno Lenormand, o Grande Lenormand é preferido por praticantes experientes que buscam consultas mais detalhadas e místicas.",
    ],
  },
  // 11
  {
    n: 11,
    type: "content",
    section: "O Pequeno Lenormand",
    title: "O Pequeno Lenormand",
    paragraphs: [
      "O Pequeno Lenormand, ou \"Petit Lenormand\", é composto por 36 cartas ilustradas com imagens do cotidiano e da natureza. É a versão mais popular e amplamente utilizada em todo o mundo.",
      "Sua simplicidade visual esconde uma profundidade simbólica notável. Cada carta pode ser lida individualmente ou em combinações, permitindo interpretações precisas e diretas.",
      "As 36 lâminas representam aspectos da vida cotidiana — pessoas, objetos, animais, elementos da natureza — tornando a leitura acessível e prática para consultas do dia a dia.",
    ],
  },
  // 12
  {
    n: 12,
    type: "content",
    section: "O Pequeno Lenormand",
    title: "Ilustrações e Simbolismo",
    paragraphs: [
      "As ilustrações do Pequeno Lenormand seguem uma estética clássica, com traços que remetem à Europa do século XIX. As imagens são carregadas de simbolismo, cada elemento cuidadosamente escolhido para transmitir um significado específico.",
      "Cada carta também está associada a uma carta do baralho comum (naipes de copas, ouros, paus e espadas) e a um número, criando um sistema de correspondências que enriquece a leitura.",
      "O simbolismo do Lenormand é mais direto que o do Tarot: enquanto o Tarot fala em arquétipos e jornadas espirituais, o Lenormand se concentra em situações concretas e eventos práticos da vida.",
    ],
  },
  // 13
  {
    n: 13,
    type: "content",
    section: "Transformações e Inovações",
    title: "Transformações e Inovações",
    paragraphs: [
      "Ao longo dos séculos, o Baralho Cigano passou por diversas transformações. Diferentes ilustradores e ocultistas contribuíram para versões variadas, cada uma com suas próprias particularidades artísticas e simbólicas.",
      "No século XX, surgiram baralhos temáticos, com ilustrações modernas e adaptações para diferentes culturas. Hoje, existem versões digitais, aplicativos e cursos online que popularizaram ainda mais o oráculo.",
      "Apesar das inovações, os significados essenciais das 36 cartas mantêm-se fiéis à tradição original, garantindo a continuidade da sabedoria transmitida por Mlle. Lenormand.",
    ],
  },
  // 14
  {
    n: 14,
    type: "content",
    section: "O Pequeno Lenormand",
    title: "\"Le Petit Lenormand\" ou Baralho Cigano",
    paragraphs: [
      "Embora chamado popularmente de \"Baralho Cigano\", o Petit Lenormand tem origem francesa e nunca foi criado pelos ciganos. A associação com o povo cigano surgiu pela tradição de leitura de cartas praticada por muitas ciganas.",
      "No Brasil, o nome \"Baralho Cigano\" se consolidou culturalmente, sendo o termo mais utilizado para se referir a este oráculo de 36 cartas.",
      "Independentemente do nome, o baralho carrega uma tradição rica de leituras precisas, sendo uma ferramenta poderosa para o autoconhecimento e a compreensão dos ciclos da vida.",
    ],
  },
  // 15 - Section title "Significado das Cartas"
  {
    n: 15,
    type: "section",
    section: "Significado das Cartas",
    title: "Significado das Cartas de Lenormand",
    subtitle: "As 36 lâminas do Baralho Cigano",
  },
  // 16-51 - individual cards
  ...cards.map((c, i) => ({
    n: 16 + i,
    type: "card",
    section: "Significado das Cartas",
    cardNumber: c.n,
    cardTotal: 36,
    title: c.name,
    text: c.text,
  })),
  // 52 - Section title
  {
    n: 52,
    type: "section",
    section: "Modelos de Jogadas",
    title: "Modelos de Jogadas",
    subtitle: "Métodos de leitura e interpretação",
  },
  // 53
  {
    n: 53,
    type: "content",
    section: "Modelos de Jogadas",
    title: "Significado das Posições",
    paragraphs: [
      "Nas leituras do Baralho Cigano, a posição de cada carta na mesa é tão importante quanto o significado individual de cada lâmina. As posições indicam o contexto temporal (passado, presente, futuro) e o aspecto da vida ao qual a mensagem se refere.",
      "A carta central geralmente representa o consulente ou o tema principal da consulta. As cartas ao redor complementam a leitura, oferecendo detalhes, causas, consequências e conselhos.",
      "Dominar o significado das posições é fundamental para uma leitura precisa e completa. Com prática e sensibilidade, o intérprete constrói narrativas coerentes que orientam o consulente com clareza.",
    ],
  },
  // 54
  {
    n: 54,
    type: "content",
    section: "Modelos de Jogadas",
    title: "Tiragem por 3",
    paragraphs: [
      "A tiragem por 3 é um dos métodos mais simples e eficazes do Baralho Cigano. Consiste em embaralhar as cartas, concentrar-se na pergunta e retirar 3 cartas, que serão dispostas lado a lado.",
      "A primeira carta representa o passado ou a causa da situação. A segunda, o momento presente ou o cerne da questão. A terceira aponta o futuro provável ou a resolução.",
      "Este método é ideal para consultas rápidas, pergunta objetivas e reflexões pontuais. Sua simplicidade não diminui sua profundidade — pelo contrário, exige do leitor sensibilidade para captar as sutilezas das combinações.",
    ],
  },
  // 55
  {
    n: 55,
    type: "content",
    section: "Modelos de Jogadas",
    title: "Variações possíveis da Tiragem por 3",
    paragraphs: [
      "Existem diversas variações da Tiragem por 3, cada uma com foco em aspectos específicos da consulta. Uma das mais comuns é a leitura \"Situação — Ação — Resultado\", que aponta caminhos práticos para resolver questões.",
      "Outra variação é \"Corpo — Mente — Espírito\", ideal para consultas de autoconhecimento e desenvolvimento pessoal. Também há a leitura \"Você — Outro — Relacionamento\", muito útil em consultas amorosas.",
      "O leitor pode criar suas próprias variações, sempre respeitando a intenção da consulta e a intuição do momento. Com o tempo, cada praticante desenvolve seu estilo próprio de leitura.",
    ],
  },
  // 56
  {
    n: 56,
    type: "content",
    section: "Signos Ciganos",
    title: "Signos Ciganos · Astrologia Cigana",
    paragraphs: [
      "É sabido que os ciganos já possuíam um conhecimento acerca da linguagem dos astros, uma vez que o culto à natureza era parte integrante de sua rotina.",
      "Como observadores atentos do mundo natural, eles desenvolveram habilidades para compreender os ciclos celestes, que se tornaram uma fonte de descobertas e encantamentos.",
      "Simbolicamente, a astrologia cigana é representada por elementos característicos de sua cultura, como o punhal, a coroa, as candeias, a roda, a estrela, o sino, a moeda, a adaga, o machado, a ferradura, a taça e as capelas.",
    ],
  },
  // 57 - Closing
  {
    n: 57,
    type: "closing",
    section: "Encerramento",
    title: "Gratidão",
    paragraphs: [
      "Que as sementes plantadas nesta jornada floresçam em sabedoria, intuição e discernimento.",
      "Que cada carta lida seja uma oportunidade de servir com respeito, ética e amor ao próximo.",
    ],
    author: "Margarete da Rosa",
    farewell: "Com gratidão",
  },
];

export const totalSlides = slides.length;
