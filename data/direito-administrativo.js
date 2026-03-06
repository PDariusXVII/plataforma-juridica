// data/direito-administrativo.js
// Para adicionar novas matérias, crie um novo arquivo nesta pasta
// seguindo o mesmo padrão: const nomeDaMateria = { ... }

const DA = {

  "Administração Pública": {
    icon: "🏛️", color: "#4f8ef7",
    aprendizado: `A Administração Pública é a estrutura usada pelo Estado para executar atividades administrativas e atender o interesse da coletividade.

Ela pode ser entendida por dois critérios:

Critério Formal (subjetivo/orgânico)
→ Responde QUEM exerce a função
→ Refere-se às pessoas, órgãos e entidades

Critério Material (objetivo/funcional)
→ Responde O QUÊ é feito
→ Refere-se à própria atividade administrativa`,
    mapa: [
      "Conceito",
      "Critério formal",
      "Critério material",
      "Função administrativa",
      "Estrutura administrativa"
    ],
    flashcards: [
      { q: "O que é o critério formal da Administração Pública?",  a: "Identifica QUEM exerce a função administrativa — agentes, órgãos e entidades do Estado." },
      { q: "O que é o critério material da Administração Pública?", a: "Identifica O QUÊ a Adm. faz — a própria atividade administrativa em prol do interesse público." },
      { q: "Qual a finalidade da Administração Pública?",           a: "Atender ao interesse público e à coletividade, prestando serviços e executando a função administrativa." }
    ],
    quiz: [
      {
        q: "O critério formal da Administração Pública diz respeito a:",
        opts: ["A atividade administrativa exercida", "As pessoas, órgãos e entidades que exercem a função", "Os princípios que regem a Administração", "A finalidade dos serviços públicos"],
        gabarito: 1,
        exp: "O critério formal (subjetivo/orgânico) identifica QUEM exerce a função — pessoas, órgãos e entidades."
      }
    ]
  },

  "Regime Jurídico Administrativo": {
    icon: "⚖️", color: "#38bdf8",
    aprendizado: `O Regime Jurídico Administrativo é o conjunto de regras e princípios que regem a atuação da Administração Pública.

Ele se baseia em duas "pedras de toque":

1. Supremacia do Interesse Público
→ O interesse coletivo prevalece sobre o individual
→ É uma prerrogativa da Administração (pode mais que o particular)

2. Indisponibilidade do Interesse Público
→ A Adm. é gestora, não proprietária
→ Não pode renunciar ao interesse público`,
    mapa: [
      "Supremacia do interesse público",
      "Indisponibilidade do interesse público"
    ],
    flashcards: [
      { q: "Quais são as duas 'pedras de toque' do Regime Jurídico Administrativo?", a: "Supremacia do Interesse Público (prerrogativa) e Indisponibilidade do Interesse Público (sujeição)." },
      { q: "O que significa Indisponibilidade do Interesse Público?",                a: "A Administração é mera gestora — não pode renunciar, abrir mão ou dispor do interesse público livremente." }
    ],
    quiz: [
      {
        q: "A 'supremacia do interesse público' no Regime Jurídico Administrativo representa:",
        opts: ["Uma sujeição imposta à Administração", "Uma prerrogativa que coloca o coletivo acima do individual", "O dever de motivar os atos administrativos", "A obrigação de licitar"],
        gabarito: 1,
        exp: "A supremacia é uma prerrogativa: o interesse coletivo prevalece sobre o individual, conferindo poderes especiais à Adm."
      }
    ]
  },

  "Princípios da Administração": {
    icon: "📜", color: "#a78bfa",
    aprendizado: `Os princípios orientam toda a atuação administrativa.

Os princípios expressos estão no Art. 37 da CF/88 — o famoso LIMPE:

L — Legalidade
Agente público só age quando a lei autoriza
(diferente do particular, que faz tudo que não é proibido)

I — Impessoalidade
Vedado favorecimento pessoal. A atuação visa o interesse público.

M — Moralidade
Honestidade, ética e boa-fé. Um ato legal pode ser imoral → INVÁLIDO!

P — Publicidade
Regra: transparência. Exceção: segurança ou intimidade.

E — Eficiência (EC 19/1998)
Produtividade, celeridade e qualidade na prestação dos serviços.`,
    mapa: [
      "Legalidade", "Impessoalidade", "Moralidade", "Publicidade", "Eficiência",
      "Razoabilidade", "Proporcionalidade", "Segurança jurídica", "Motivação"
    ],
    flashcards: [
      { q: "O que significa o princípio da Legalidade para o agente público?",  a: "O agente público só pode fazer o que a lei expressamente autoriza — ao contrário do particular, que pode fazer tudo o que a lei não proíbe." },
      { q: "Em que Emenda Constitucional foi inserido o princípio da Eficiência?", a: "EC 19/1998 (Reforma Administrativa)." },
      { q: "Um ato pode ser legal mas imoral?",                                  a: "Sim! E nesse caso será INVÁLIDO, por violar o princípio da Moralidade Administrativa." },
      { q: "Qual mnemônico resume os princípios expressos do Art. 37 CF?",       a: "LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência." }
    ],
    quiz: [
      {
        q: "Um ato administrativo formalmente legal, mas contrário à ética e probidade, viola qual princípio?",
        opts: ["Legalidade", "Publicidade", "Moralidade", "Eficiência"],
        gabarito: 2,
        exp: "O princípio da Moralidade exige ética, honestidade e boa-fé. Um ato pode ser legal e ainda assim inválido por imoralidade."
      },
      {
        q: "O princípio da Eficiência foi inserido na CF/88 por qual emenda?",
        opts: ["EC 45/2004", "EC 19/1998", "EC 32/2001", "EC 29/2000"],
        gabarito: 1,
        exp: "A EC 19/1998 (Reforma Administrativa) inseriu a Eficiência no Art. 37 da CF."
      }
    ]
  },

  "Organização Administrativa": {
    icon: "🗂️", color: "#f59e0b",
    aprendizado: `A Administração Pública se organiza em:

Administração Direta
→ União, Estados, Municípios e Distrito Federal
→ Exerce a função administrativa centralmente

Administração Indireta
→ Autarquias, Fundações, EP e SEM
→ Possui personalidade jurídica própria

Centralização: a própria Adm. Direta presta o serviço.

Desconcentração: distribui internamente (cria órgãos, mesma PJ).

Descentralização: transfere para outra entidade (cria nova PJ).`,
    mapa: [
      "Adm. Direta — União", "Adm. Direta — Estados", "Adm. Direta — Municípios",
      "Adm. Indireta", "Centralização", "Descentralização", "Desconcentração"
    ],
    flashcards: [
      { q: "Qual é a diferença entre Descentralização e Desconcentração?", a: "Descentralização cria nova pessoa jurídica (entidade). Desconcentração cria órgão dentro da mesma pessoa jurídica." },
      { q: "O que é descentralização por outorga?",                        a: "Transfere tanto a titularidade quanto a execução do serviço, por meio de lei — cria entidades da Adm. Indireta." },
      { q: "O que é descentralização por delegação?",                      a: "Transfere apenas a execução (não a titularidade), de forma precária, para particulares — por concessão, permissão ou autorização." }
    ],
    quiz: [
      {
        q: "A criação de uma nova autarquia para exercer função do Estado configura:",
        opts: ["Desconcentração", "Centralização", "Descentralização por outorga", "Descentralização por delegação"],
        gabarito: 2,
        exp: "Descentralização por outorga: cria nova pessoa jurídica (autarquia) e transfere titularidade + execução por lei."
      }
    ]
  },

  "Entidades da Adm. Indireta": {
    icon: "🏢", color: "#10b981",
    aprendizado: `As entidades da Administração Indireta são:

Autarquia
→ Pessoa jurídica de direito PÚBLICO
→ Criada DIRETAMENTE por lei
→ Ex: ANATEL, INSS, BACEN

Fundação Pública
→ Dir. Público: criada por lei (autarquia fundacional)
→ Dir. Privado: lei autoriza + registro
→ Ex: FUNAI

Empresa Pública
→ Pessoa jurídica de direito PRIVADO
→ Capital 100% público
→ Qualquer forma societária
→ Ex: Correios, Caixa Econômica Federal

Sociedade de Economia Mista
→ Pessoa jurídica de direito PRIVADO
→ Capital misto (público + privado)
→ OBRIGATORIAMENTE S/A
→ Ex: Petrobras, Banco do Brasil`,
    mapa: [
      "Autarquias", "Agências reguladoras", "Conselhos profissionais",
      "Fundações públicas dir. público", "Fundações públicas dir. privado",
      "Empresas públicas", "Sociedades de economia mista"
    ],
    flashcards: [
      { q: "Qual entidade da Adm. Indireta é obrigatoriamente S/A?",         a: "Sociedade de Economia Mista — obrigatoriamente constituída na forma de Sociedade Anônima." },
      { q: "Qual a diferença de capital entre EP e SEM?",                     a: "EP = capital 100% público (qualquer forma). SEM = capital misto — público majoritário + privado (forma: S/A)." },
      { q: "Como é criada uma autarquia?",                                    a: "Diretamente por lei — é pessoa jurídica de direito público com autonomia administrativa e financeira." }
    ],
    quiz: [
      {
        q: "A Petrobras e o Banco do Brasil são exemplos de:",
        opts: ["Empresa Pública", "Autarquia", "Sociedade de Economia Mista", "Fundação Pública"],
        gabarito: 2,
        exp: "Sociedade de Economia Mista: capital misto e forma obrigatória S/A. Petrobras e Banco do Brasil são exemplos clássicos."
      },
      {
        q: "Os Correios são um exemplo de:",
        opts: ["Autarquia", "Empresa Pública", "Sociedade de Economia Mista", "Fundação de dir. público"],
        gabarito: 1,
        exp: "Os Correios (ECT) são Empresa Pública federal — capital 100% público."
      }
    ]
  },

  "Terceiro Setor": {
    icon: "🤝", color: "#f472b6",
    aprendizado: `O Terceiro Setor é composto por entidades privadas sem fins lucrativos que atuam em parceria com o Estado.

Organizações Sociais (OS)
→ Lei 9.637/1998
→ Contrato de gestão com o Poder Público
→ Recebem recursos públicos, cessão de bens e servidores
→ Atuam em: saúde, ensino, pesquisa, cultura, meio ambiente

OSCIP (Org. da Soc. Civil de Interesse Público)
→ Lei 9.790/1999
→ Termo de parceria com o Poder Público
→ Mais ampla que as OS em áreas de atuação`,
    mapa: [
      "Organizações Sociais (OS)",
      "OSCIP",
      "Contrato de gestão",
      "Termo de parceria"
    ],
    flashcards: [
      { q: "Qual é o instrumento de parceria da OS com o Poder Público?",   a: "Contrato de gestão." },
      { q: "Qual é o instrumento de parceria da OSCIP com o Poder Público?", a: "Termo de parceria." },
      { q: "As OS são regidas por qual lei?",                                a: "Lei 9.637/1998." }
    ],
    quiz: [
      {
        q: "Uma Organização Social (OS) celebra com o Poder Público um:",
        opts: ["Termo de parceria", "Convênio", "Contrato de gestão", "Contrato de concessão"],
        gabarito: 2,
        exp: "OS firma contrato de gestão. OSCIP firma termo de parceria — atenção para não confundir!"
      }
    ]
  },

  "Poderes Administrativos": {
    icon: "⚡", color: "#fb923c",
    aprendizado: `Os poderes administrativos são instrumentos para proteger o interesse público — seu exercício é um DEVER.

Poder Hierárquico
→ Organiza, distribui, fiscaliza e revisa atos internamente
→ Cria subordinação e hierarquia

Poder Disciplinar
→ Aplica sanções a servidores e particulares com vínculo
→ Ex: demissão, advertência

Poder Regulamentar
→ Edita decretos para fiel execução da lei
→ Não pode criar obrigações além da lei

Poder de Polícia
→ Limita direitos individuais em prol do coletivo
→ 3 características: Discricionariedade + Autoexecutoriedade + Coercibilidade

Abuso de Poder:
→ Excesso de poder: ultrapassa a competência
→ Desvio de finalidade: usa competência com fim ilegal`,
    mapa: [
      "Poder hierárquico", "Poder disciplinar", "Poder regulamentar", "Poder de polícia",
      "Discricionariedade", "Autoexecutoriedade", "Coercibilidade",
      "Excesso de poder", "Desvio de finalidade"
    ],
    flashcards: [
      { q: "Quais são as 3 características do Poder de Polícia?",              a: "Discricionariedade, Autoexecutoriedade e Coercibilidade." },
      { q: "O que é desvio de finalidade (desvio de poder)?",                  a: "Quando o agente pratica ato dentro de sua competência, mas com finalidade diversa da prevista em lei." },
      { q: "O que é excesso de poder?",                                        a: "Quando o agente ultrapassa os limites de sua competência — vai além do que a lei permite." }
    ],
    quiz: [
      {
        q: "O agente que usa sua competência legal para perseguir pessoalmente um servidor pratica:",
        opts: ["Excesso de poder", "Desvio de finalidade", "Abuso de competência", "Vício de forma"],
        gabarito: 1,
        exp: "Desvio de finalidade: age dentro da competência, mas com fim pessoal/ilegal — não o interesse público."
      },
      {
        q: "A característica do Poder de Polícia que permite à Administração agir sem precisar do Judiciário é:",
        opts: ["Coercibilidade", "Discricionariedade", "Autoexecutoriedade", "Imperatividade"],
        gabarito: 2,
        exp: "Autoexecutoriedade: a Adm. pode executar suas decisões por meios próprios, sem precisar de autorização judicial prévia."
      }
    ]
  },

  "Atos Administrativos": {
    icon: "📋", color: "#4f8ef7",
    aprendizado: `Ato administrativo é a manifestação unilateral de vontade da Administração Pública para produzir efeitos jurídicos.

Elementos (COFIM):
→ Competência: quem pode praticar o ato
→ Objeto: o conteúdo do ato
→ Forma: modo de exteriorização
→ Motivo: razão de fato e de direito
→ Finalidade: sempre o interesse público

Atributos:
→ Presunção de legitimidade (relativa — juris tantum)
→ Imperatividade (obriga independente de concordância)
→ Autoexecutoriedade (executa sem o Judiciário)
→ Tipicidade (deve estar previsto em lei)

Extinção:
→ Anulação: vício de legalidade (pode o Judiciário)
→ Revogação: conveniência/oportunidade (só a Adm.)
→ Cassação, caducidade, contraposição`,
    mapa: [
      "Competência", "Finalidade", "Forma", "Motivo", "Objeto",
      "Presunção de legitimidade", "Imperatividade", "Autoexecutoriedade", "Tipicidade",
      "Anulação", "Revogação"
    ],
    flashcards: [
      { q: "Quais são os 5 elementos do ato administrativo (mnemônico COFIM)?", a: "Competência, Objeto, Forma, motIvo e finalidade — ou COFIM." },
      { q: "Qual a diferença entre anulação e revogação?",                       a: "Anulação: vício de ilegalidade (pode ser feita pela Adm. ou Judiciário). Revogação: conveniência/oportunidade (só a própria Administração)." },
      { q: "A presunção de legalidade dos atos administrativos é relativa ou absoluta?", a: "Relativa (juris tantum) — admite prova em contrário. O ônus da prova é do particular." }
    ],
    quiz: [
      {
        q: "O Judiciário pode revogar ato administrativo discricionário por conveniência?",
        opts: ["Sim, pois controla todos os atos", "Não — o Judiciário controla apenas a legalidade, não o mérito", "Sim, mas apenas em MS", "Não, pois atos discricionários são insuscetíveis de controle"],
        gabarito: 1,
        exp: "O Judiciário controla apenas a LEGALIDADE dos atos. O mérito (conveniência e oportunidade) é exclusivo da Administração."
      }
    ]
  },

  "Controle da Administração": {
    icon: "🔍", color: "#38bdf8",
    aprendizado: `O controle garante que a Administração atue conforme a lei e o interesse público.

Controle Interno
→ Exercido pela própria Administração
→ Autotutela: pode anular (ilegalidade) ou revogar (mérito)
→ Base: Súmulas 346 e 473 do STF

Controle Legislativo
→ Congresso Nacional + TCU
→ Controle político, CPI, controle financeiro
→ TCU: controle de contas externas

Controle Judicial
→ Art. 5º, XXXV CF — inafastabilidade da jurisdição
→ Controla LEGALIDADE (não o mérito)
→ Pode anular atos ilegais`,
    mapa: [
      "Controle interno", "Autotutela",
      "Controle legislativo", "TCU", "CPI",
      "Controle judicial", "Inafastabilidade"
    ],
    flashcards: [
      { q: "O que é autotutela administrativa?",                               a: "A capacidade da Administração de controlar seus próprios atos — podendo anulá-los (ilegalidade) ou revogá-los (mérito). Base: Súmulas 346 e 473 STF." },
      { q: "O Judiciário pode controlar o mérito do ato administrativo?",      a: "Não. O Judiciário controla apenas a legalidade. O mérito (conveniência/oportunidade) pertence à Administração." }
    ],
    quiz: [
      {
        q: "Sobre o controle judicial dos atos administrativos, é correto afirmar:",
        opts: ["O Judiciário pode revogar atos por conveniência", "O Judiciário controla apenas a legalidade, não o mérito", "O Judiciário não pode controlar atos discricionários", "Somente o TCU pode anular atos ilegais"],
        gabarito: 1,
        exp: "O Judiciário exerce controle de legalidade — não pode adentrar no mérito (conveniência/oportunidade) do ato."
      }
    ]
  },

  "Serviços Públicos": {
    icon: "🌐", color: "#10b981",
    aprendizado: `Serviço público é a atividade prestada pelo Estado ou por quem lhe faça as vezes, para satisfazer necessidades coletivas.

Princípios dos Serviços Públicos:
→ Continuidade (não podem ser interrompidos)
→ Modicidade das tarifas
→ Generalidade (universalidade)
→ Eficiência
→ Segurança
→ Atualidade

Formas de delegação:
→ Concessão: contrato, licitação obrigatória (Lei 8.987/95)
→ Permissão: contrato de adesão, precário
→ Autorização: ato unilateral, discricionário, precário`,
    mapa: [
      "Conceito", "Continuidade", "Modicidade",
      "Concessão", "Permissão", "Autorização"
    ],
    flashcards: [
      { q: "Qual a diferença entre concessão e permissão de serviço público?", a: "Concessão: contrato bilateral, prazo determinado, PJ ou consórcio. Permissão: contrato de adesão, precário, PF ou PJ. Ambas exigem licitação." },
      { q: "O que é o princípio da continuidade dos serviços públicos?",       a: "Os serviços públicos não podem ser interrompidos ou paralisados, pois atendem a necessidades coletivas essenciais." }
    ],
    quiz: [
      {
        q: "A delegação de serviço público mediante contrato bilateral, com prazo determinado e licitação obrigatória, é chamada de:",
        opts: ["Permissão", "Autorização", "Concessão", "Privatização"],
        gabarito: 2,
        exp: "Concessão: contrato bilateral, prazo determinado, licitação obrigatória (modalidade concorrência — Lei 8.987/95)."
      }
    ]
  },

  "Licitações e Contratos": {
    icon: "📑", color: "#a78bfa",
    aprendizado: `Licitação é o processo pelo qual a Administração seleciona a melhor proposta para contratos de obras, serviços e compras.

Lei 14.133/2021 (Nova Lei de Licitações) substituiu a Lei 8.666/93.

Modalidades (Nova Lei):
→ Pregão (mais usado — bens e serviços comuns)
→ Concorrência
→ Concurso
→ Leilão
→ Diálogo competitivo (nova!)

Dispensa de licitação: Lei prevê os casos (valor, emergência, etc.)
Inexigibilidade: quando a competição é inviável (fornecedor exclusivo, notória especialização)

Princípios:
→ Isonomia, legalidade, impessoalidade, moralidade, publicidade, vinculação ao edital, julgamento objetivo`,
    mapa: [
      "Pregão", "Concorrência", "Concurso", "Leilão", "Diálogo competitivo",
      "Dispensa", "Inexigibilidade",
      "Isonomia", "Vinculação ao edital"
    ],
    flashcards: [
      { q: "Qual lei substituiu a Lei 8.666/93?",                              a: "Lei 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos)." },
      { q: "Qual a diferença entre dispensa e inexigibilidade de licitação?",  a: "Dispensa: licitação é viável mas a lei permite dispensá-la (ex: valor baixo). Inexigibilidade: licitação é inviável por impossibilidade de competição (ex: fornecedor exclusivo)." },
      { q: "Qual nova modalidade foi criada pela Lei 14.133/2021?",            a: "Diálogo competitivo — modalidade para contratações complexas com tecnologia inovadora." }
    ],
    quiz: [
      {
        q: "A modalidade mais utilizada para aquisição de bens e serviços comuns é:",
        opts: ["Concorrência", "Leilão", "Pregão", "Concurso"],
        gabarito: 2,
        exp: "O Pregão é a modalidade mais utilizada para
