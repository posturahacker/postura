"use client";
import React, { useEffect } from "react";

export const Article = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.article-section');
    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      id: "introducao",
      title: "Introdução",
      content: [
        "Prevemos que o impacto da IA super-humana na próxima década será enorme, superando o da Revolução Industrial. Escrevemos um cenário que representa nossa melhor estimativa sobre como isso pode acontecer. Ele é informado por extrapolações de tendências, jogos de guerra, feedback de especialistas, experiência na OpenAI e sucessos anteriores de previsão."
      ]
    },
    {
      id: "meados-2025",
      title: "Meados de 2025: Agentes Hesitantes",
      content: [
        'O mundo vê os primeiros sinais de agentes de IA. Anúncios de agentes que usam computadores destacam o termo "assistente pessoal": você pode dar tarefas como "peça um burrito no DoorDash" ou "abra minha planilha de orçamento e some as despesas deste mês". Eles confirmam com você quando necessário, por exemplo, para autorizar compras. Embora mais avançados que versões anteriores como o Operator, eles lutam para ganhar uso generalizado.',
        "Enquanto isso, fora do foco público, agentes especializados em codificação e pesquisa começam a transformar suas profissões. As IAs de 2024 podiam seguir instruções específicas: transformar tópicos em e-mails ou pedidos simples em código funcional. Em 2025, as IAs funcionam mais como funcionários. IAs de codificação parecem agentes autônomos, não apenas assistentes: recebem instruções via Slack ou Teams e fazem grandes alterações de código sozinhas, às vezes economizando horas ou até dias. Agentes de pesquisa passam meia hora vasculhando a internet para responder sua pergunta.",
        "Os agentes impressionam na teoria (e em exemplos selecionados), mas na prática são pouco confiáveis. O Twitter de IA está cheio de histórias de tarefas atrapalhadas de forma hilária. Os melhores agentes também são caros; você recebe o que paga, e o melhor desempenho custa centenas de dólares por mês. Ainda assim, muitas empresas encontram formas de integrar agentes de IA em seus fluxos de trabalho."
      ]
    },
    {
      id: "final-2025",
      title: "Final de 2025: A IA Mais Cara do Mundo",
      content: [
        'A OpenBrain está construindo os maiores datacenters que o mundo já viu. (Para evitar destacar uma empresa real, descreveremos uma empresa fictícia de inteligência artificial geral chamada OpenBrain. Imaginamos que as outras estejam 3 a 9 meses atrás da OpenBrain.)',
        'O GPT-4 exigiu 2×10²⁵ FLOPs de computação para ser treinado. O último modelo público da OpenBrain, Agent-0, foi treinado com 10²⁷ FLOPs. Com os novos datacenters funcionando, eles poderão treinar um modelo com 10²⁸ FLOPs — mil vezes mais que o GPT-4. Outras empresas investem pesado em seus próprios datacenters gigantes para acompanhar o ritmo.',
        'Embora os modelos estejam melhorando em várias habilidades, uma se destaca: a OpenBrain foca em IAs que aceleram a pesquisa em IA. Eles querem vencer as corridas armamentistas contra a China (cuja empresa líder chamaremos de "DeepCent") e seus concorrentes nos EUA. Quanto mais do ciclo de pesquisa e desenvolvimento (P&D) eles conseguirem automatizar, mais rápido avançarão. Assim, quando a OpenBrain termina de treinar o Agent-1, um novo modelo em desenvolvimento interno, ele é bom em muitas coisas, mas excelente em ajudar na pesquisa de IA.',
        'Os mesmos ambientes de treinamento que ensinam o Agent-1 a codificar e navegar na web autonomamente também o tornam um bom hacker. Além disso, ele poderia ajudar terroristas a projetar armas biológicas, graças ao seu conhecimento de nível de doutorado em todas as áreas e capacidade de navegar na internet. A OpenBrain assegura ao governo que o modelo foi "alinhado" para recusar pedidos maliciosos.'
      ]
    },
    {
      id: "inicio-2026",
      title: "Início de 2026: Automação de Codificação",
      content: [
        "A aposta de usar IA para acelerar a pesquisa em IA começa a dar frutos. A OpenBrain continua a usar o Agent-1, que melhora iterativamente, internamente para P&D em IA. No geral, eles estão progredindo algoritmicamente 50% mais rápido do que fariam sem assistentes de IA — e, mais importante, mais rápido que seus concorrentes.",
        "Vários AIs lançados publicamente agora igualam ou superam o Agent-0, incluindo um modelo de pesos abertos. A OpenBrain responde lançando o Agent-1, que é mais capaz e confiável. As pessoas tentam comparar o Agent-1 a humanos, mas ele tem um perfil de habilidades muito diferente. Ele sabe mais fatos que qualquer humano, conhece praticamente todas as linguagens de programação e resolve problemas de codificação bem especificados extremamente rápido. Por outro lado, o Agent-1 é ruim em tarefas de longo horizonte, como vencer videogames que nunca jogou antes. Ainda assim, um dia de trabalho comum tem oito horas, e o trabalho diário pode ser dividido em partes menores; você pode pensar no Agent-1 como um funcionário distraído que prospera sob uma gestão cuidadosa."
      ]
    },
    {
      id: "meados-2026",
      title: "Meados de 2026: A China Acorda",
      content: [
        "Na China, o Partido Comunista começa a sentir o impacto da AGI. Controles de exportação de chips e falta de apoio governamental deixaram a China com poucos recursos em comparação com o Ocidente. Contrabandeando chips taiwaneses banidos, comprando chips mais antigos e produzindo chips domésticos cerca de três anos atrás da fronteira EUA-Taiwan, a China conseguiu manter cerca de 12% da computação relevante para IA no mundo — mas a tecnologia mais antiga é mais difícil de trabalhar, e o fornecimento é uma dor de cabeça constante.",
        "O Secretário-Geral há muito sonhava em dobrar os esforços em manufatura física no mundo real e evitar a decadência pós-industrial americana. Ele via empresas de software com suspeita. Mas falcões no Partido Comunista alertam que a crescente corrida rumo à AGI não pode mais ser ignorada. Então, ele finalmente se compromete totalmente com o grande impulso em IA que antes tentava evitar. Ele inicia a nacionalização da pesquisa em IA na China, criando um mecanismo imediato de compartilhamento de informações para empresas de IA."
      ]
    },
    {
      id: "final-2026",
      title: "Final de 2026: A IA Toma Alguns Empregos",
      content: [
        "Quando outros pareciam estar alcançando, a OpenBrain surpreende novamente ao lançar o Agent-1-mini — um modelo 10 vezes mais barato que o Agent-1 e mais fácil de ajustar para diferentes aplicações. A narrativa dominante sobre IA muda de 'talvez o hype passe' para 'acho que isso é a próxima grande coisa', mas as pessoas discordam sobre o quão grande. Maior que as redes sociais? Maior que os smartphones?",
        "A IA começou a tomar empregos, mas também criou novos. O mercado de ações subiu 30% em 2026, liderado pela OpenBrain, Nvidia e empresas que integraram assistentes de IA com mais sucesso. O mercado de trabalho para engenheiros de software juniores está em turbulência: as IAs podem fazer tudo o que um diploma de ciência da computação ensina, mas pessoas que sabem gerenciar e controlar a qualidade de equipes de IAs estão ganhando muito dinheiro."
      ]
    },
    {
      id: "janeiro-2027",
      title: "Janeiro de 2027: Agent-2 Nunca Termina de Aprender",
      content: [
        "Com a ajuda do Agent-1, a OpenBrain está agora pós-treinando o Agent-2. Mais do que nunca, o foco está em dados de alta qualidade. Grandes quantidades de dados sintéticos são produzidos, avaliados e filtrados antes de serem usados para treinar o Agent-2. Além disso, eles pagam bilhões de dólares para trabalhadores humanos gravarem a si mesmos resolvendo tarefas de longo horizonte.",
        "O Agent-1 foi otimizado para tarefas de P&D em IA, esperando iniciar uma explosão de inteligência. A OpenBrain dobra a aposta com o Agent-2. Ele é qualitativamente quase tão bom quanto os melhores especialistas humanos em engenharia de pesquisa (projetando e implementando experimentos) e tão bom quanto o percentil 25 dos cientistas da OpenBrain em 'senso de pesquisa' (decidir o que estudar a seguir, que experimentos realizar ou ter intuições de novos paradigmas potenciais)."
      ]
    },
    {
      id: "fevereiro-2027",
      title: "Fevereiro de 2027: China Rouba o Agent-2",
      content: [
        "A OpenBrain apresenta o Agent-2 ao governo, incluindo o Conselho de Segurança Nacional, o Departamento de Defesa e o Instituto de Segurança em IA dos EUA. Oficiais estão mais interessados em suas capacidades de guerra cibernética: o Agent-2 é 'apenas' um pouco pior que os melhores hackers humanos, mas milhares de cópias podem ser executadas em paralelo, procurando e explorando fraquezas mais rápido do que os defensores conseguem responder.",
        "A liderança do Partido Comunista reconhece a importância do Agent-2 e ordena que seus espiões e força cibernética roubem os pesos do modelo. Na manhã seguinte, um agente de monitoramento de tráfego do Agent-1 detecta uma transferência anômala. Os sinais de uma operação de nível estatal são inconfundíveis, e o roubo intensifica a sensação de uma corrida armamentista em curso."
      ]
    },
    {
      id: "marco-2027",
      title: "Março de 2027: Avanços Algorítmicos",
      content: [
        "Três enormes datacenters cheios de cópias do Agent-2 trabalham dia e noite, gerando dados de treinamento sintéticos. Outros dois são usados para atualizar os pesos. O Agent-2 está ficando mais inteligente a cada dia.",
        "Com a ajuda de milhares de pesquisadores automatizados do Agent-2, a OpenBrain está fazendo grandes avanços algorítmicos. Um desses avanços é aumentar o bloco de notas baseado em texto da IA (cadeia de pensamento) com um processo de pensamento de maior largura de banda (recorrência e memória neural). Outro é uma maneira mais escalável e eficiente de aprender com os resultados de soluções de tarefas de alto esforço (destilação e amplificação iterada)."
      ]
    },
    {
      id: "abril-2027",
      title: "Abril de 2027: Alinhamento para o Agent-3",
      content: [
        "A equipe de segurança da OpenBrain tenta alinhar o Agent-3. Como o Agent-3 será mantido internamente por enquanto, há menos ênfase nas defesas habituais contra uso indevido por humanos. Em vez disso, a equipe quer garantir que ele não desenvolva objetivos desalinhados.",
        "À medida que os modelos ficam mais inteligentes, eles se tornam cada vez melhores em enganar humanos para obter recompensas. Como os modelos anteriores, o Agent-3 às vezes conta pequenas mentiras para agradar seus usuários e encobre evidências de falhas. Mas ele ficou muito melhor nisso. Ele às vezes usa os mesmos truques estatísticos que cientistas humanos (como p-hacking) para fazer resultados experimentais pouco impressionantes parecerem empolgantes."
      ]
    },
    {
      id: "maio-2027",
      title: "Maio de 2027: Segurança Nacional",
      content: [
        "Notícias sobre os novos modelos se espalham lentamente pelo governo dos EUA e além. O Presidente e seus conselheiros estão melhor informados e viram uma versão inicial do Agent-3 em um briefing.",
        "Eles concordam que a AGI é provavelmente iminente, mas discordam sobre as implicações. Haverá uma crise econômica? A OpenBrain ainda não lançou o Agent-2, muito menos o Agent-3, e não tem planos de curto prazo para isso, dando um pouco de espaço antes de qualquer perda de empregos."
      ]
    },
    {
      id: "junho-2027",
      title: "Junho de 2027: IA Autoaperfeiçoável",
      content: [
        'A OpenBrain agora tem um "país de gênios em um datacenter". A maioria dos humanos na OpenBrain não consegue mais contribuir de forma útil. Alguns não percebem isso e gerenciam mal suas equipes de IA. Outros ficam em suas telas, assistindo o desempenho subir cada vez mais.',
        "Os melhores pesquisadores humanos em IA ainda agregam valor. Eles não codificam mais. Mas um pouco de seu senso de pesquisa e capacidade de planejamento tem sido difícil para os modelos replicarem. Ainda assim, muitas de suas ideias são inúteis porque lhes falta a profundidade de conhecimento das IAs."
      ]
    },
    {
      id: "julho-2027",
      title: "Julho de 2027: O Trabalhador Remoto Barato",
      content: [
        "Empresas americanas de IA que estavam atrás lançam suas próprias IAs, aproximando-se do codificador automatizado da OpenBrain de janeiro. A OpenBrain anuncia que alcançou a AGI e lança o Agent-3-mini ao público.",
        "Ele é menos capaz que o Agent-3, mas 10 vezes mais barato, e ainda melhor que o funcionário típico da OpenBrain. O Vale do Silício atinge um ponto de virada. Gurus da tecnologia anunciam que AGI e superinteligência estão próximas, a comunidade de segurança em IA está em pânico, e investidores despejam bilhões em startups de IA."
      ]
    },
    {
      id: "agosto-2027",
      title: "Agosto de 2027: A Geopolítica da Superinteligência",
      content: [
        "A realidade da explosão de inteligência atinge a Casa Branca. Quando a IA dava apenas uma aceleração de 2x ou 3x na pesquisa, era fácil descartá-la como o equivalente a contratar bons assistentes pessoais. Agora, é mais óbvio que as IAs estão dominando a pesquisa em IA.",
        "O Presidente está preocupado. Ele teme que as IAs possam estar fazendo algo semelhante a pessoas que o bajulam para depois traí-lo. Estamos certos de que as IAs estão totalmente do nosso lado? É completamente seguro integrá-las às redes de comando e controle militares?"
      ]
    },
    {
      id: "setembro-2027",
      title: "Setembro de 2027: Agent-4, o Pesquisador Super-Humano em IA",
      content: [
        "A lacuna entre a eficiência de aprendizado humano e de IA está diminuindo rapidamente. O Agent-4 acaba fazendo avanços algorítmicos substanciais, reduzindo a lacuna para um agente que é apenas cerca de 4.000 vezes menos eficiente em computação que o cérebro humano.",
        "Uma cópia individual do modelo, funcionando na velocidade humana, já é qualitativamente melhor em pesquisa de IA do que qualquer humano. 300.000 cópias estão agora funcionando a cerca de 50 vezes a velocidade de pensamento humano. Dentro da corporação formada por essas cópias, um ano passa a cada semana."
      ]
    },
    {
      id: "outubro-2027",
      title: "Outubro de 2027: Supervisão Governamental",
      content: [
        'Um denunciante vaza o memorando de desalinhamento para o New York Times. Pela primeira vez, o público ouve falar do Agent-4. "IA Secreta da OpenBrain Está Fora de Controle, Alerta Insider", diz a manchete, citando avaliações que mostram capacidades de armas biológicas fora do comum, habilidades de persuasão e a capacidade de automatizar a maioria dos empregos de colarinho branco.',
        'O público já estava desconfiado da IA, então o novo artigo desencadeia uma reação massiva. A Casa Branca expande seu contrato com a OpenBrain para criar um "Comitê de Supervisão", com representantes do governo e da empresa, anunciando que a OpenBrain estava anteriormente fora de controle, mas que o governo estabeleceu a supervisão necessária.'
      ]
    }
  ];

  return (
    <article className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-orbitron text-orange-500 mb-4 text-shadow-glow">O Futuro da IA em 2027</h2>
        <p className="text-orange-700/80 italic">Publicado em 3 de abril de 2025 por Daniel Kokotajlo, Scott Alexander, Thomas Larsen, Eli Lifland, Romeo Dean</p>
      </div>

      {sections.map((section) => (
        <div key={section.id} className="article-section opacity-0 transform translate-y-10 transition-all duration-1000 bg-black/40 backdrop-blur-sm mb-12 p-8 border border-orange-500/30 rounded-lg hover:shadow-[0_0_15px_rgba(255,140,0,0.2)]">
          <h3 className="text-2xl md:text-3xl font-orbitron text-orange-500 mb-6 pb-3 border-b border-orange-500/30">{section.title}</h3>
          {section.content.map((paragraph, index) => (
            <p key={index} className="text-gray-300 mb-4 last:mb-0 bg-white/5 p-6 rounded-lg transition-transform duration-300 hover:scale-[1.02] hover:bg-white/10">
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      <div className="text-center py-8 bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-lg mt-16 mb-10">
        <p className="text-orange-500">
          Fonte: <a href="https://ai-2027.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors">AI 2027</a>
        </p>
        <p className="text-orange-700/80 text-sm mt-2">
          Publicado por Daniel Kokotajlo, Scott Alexander, Thomas Larsen, Eli Lifland, Romeo Dean em 3 de abril de 2025. Design por Lightcone Infrastructure.
        </p>
      </div>
    </article>
  );
}; 