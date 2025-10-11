---
layout: default-br
title: "Engenharia de Prompt com YAML: A Técnica para Prompts Profissionais e Reutilizáveis"
description: "Aprenda a usar YAML para estruturar seus prompts de IA. Uma técnica de engenharia de prompt avançada para criar instruções claras, reutilizáveis e versionáveis para LLMs."
permalink: /engenharia-prompt-yaml
date: 2025-10-10
author: Gabriel Hagui dos Santos
image: /assets/images/projects/yaml.png
lang: pt-BR
tags: [Engenharia de Prompt, YAML, ChatGPT, IA Generativa, LLM, Desenvolvimento, Automação]
categories: [Inteligência Artificial, Tutoriais]
---
Os Modelos de Linguagem de Grande Escala (LLMs), como ChatGPT e Gemini, tornaram-se ferramentas amplamente conhecidas e utilizadas no Brasil. [Uma pesquisa de 2024 da Ipsos com o Google revelou que 54% dos brasileiros já utilizam IA generativa, uma taxa superior à média global de 48%.](https://softex.br/estudo-revela-que-brasileiros-estao-acima-da-media-global-na-adocao-da-ia/)

No entanto, extrair o máximo potencial dessas tecnologias pode ser um desafio. Assim como o Excel revolucionou a produtividade em escritórios, a **engenharia de prompts**, a arte de criar instruções eficazes para IAs, é fundamental para otimizar resultados em projetos profissionais, acadêmicos e pessoais.

Nesse contexto, uma abordagem estruturada se destaca: o uso de **YAML** para definir, gerenciar e escalar seus prompts.

## O que é um prompt?
Um prompt é, em sua essência, um conjunto de instruções, perguntas ou dados de entrada que você fornece a um Modelo de Linguagem. Ele é o ponto de partida para a geração de uma resposta. Um prompt pode ser tão simples quanto "Qual a capital do Brasil?" ou tão complexo quanto um documento de várias páginas descrevendo uma tarefa de programação. A qualidade da resposta da IA está diretamente ligada à qualidade e clareza do seu prompt.

## Por que usar YAML para estruturar seus prompts?
YAML (*YAML Ain't Markup Language*) é uma linguagem de serialização de dados projetada para ser legível por humanos. Adotá-la para a engenharia de prompts traz vantagens significativas.

### 1. Clareza e Organização
A estrutura hierárquica e de chave-valor do YAML força uma organização lógica. Em vez de um bloco de texto monolítico, você separa as instruções em componentes claros, tornando o prompt mais fácil de ler, depurar e manter.

### 2. Reutilização e Versionamento
Armazenar prompts em arquivos `.yaml` desacopla a lógica do prompt do código da sua aplicação. Isso oferece dois grandes benefícios:
*   **Reutilização:** O mesmo arquivo de persona `who` ou comportamento `behavior` pode ser facilmente carregado e combinado com diferentes comandos.
*   **Versionamento:** Ao usar Git, você pode rastrear alterações, comparar versões e colaborar com sua equipe na melhoria dos prompts, tratando-os como parte essencial do seu código-fonte.

### 3. Eficiência e Custos
Embora a diferença seja pequena para prompts curtos, em sistemas complexos que passam muitos dados, o YAML pode ser mais eficiente que o JSON. Por ser menos verboso (menos chaves, aspas e vírgulas), pode resultar em um número menor de tokens, o que potencialmente reduz o custo e a latência das requisições ao LLM.

## O que precisamos incluir em um prompt?
Para prompts complexos e profissionais, é útil decompor a instrução em componentes lógicos. Essa estrutura garante que todas as informações necessárias sejam fornecidas à IA, minimizando ambiguidades e maximizando a precisão da resposta. Abaixo, apresentamos uma estrutura em YAML com os principais componentes:

### Quem (Who)
Define a **persona** ou o **papel** que a IA deve assumir. Isso influencia diretamente o tom, o estilo e a base de conhecimento que o modelo utilizará.

```yaml
who:
  description: "Define a persona e a especialidade da IA."
  content: |
    Você é um pesquisador sênior especializado em saúde pública e saneamento, com a tarefa de encontrar fontes acadêmicas robustas para um artigo científico. Sua prioridade é a qualidade e a veracidade das fontes.
```

### Comando (Command)
A **instrução principal** e direta. É a tarefa central que a IA deve executar de forma clara e objetiva.

```yaml
command:
  description: "A tarefa principal que o LLM deve executar."
  content: |
    Encontre fontes acadêmicas (artigos, teses, estudos) que abordem a relação entre a melhoria do saneamento básico e a diminuição da demanda no Sistema Único de Saúde (SUS) no Brasil.
```

### Contexto (Context)
Fornece as **informações de fundo** necessárias para que a IA compreenda o escopo e o propósito do seu pedido, resultando em respostas mais relevantes.

```yaml
context:
  description: "Fornece o pano de fundo para a IA entender a proposta."
  content: |
    Estou escrevendo um artigo científico sobre o impacto da despoluição dos rios Pinheiros e Tietê na saúde pública da Região Metropolitana de São Paulo. A hipótese é que a melhoria do saneamento impacta diretamente a saúde da população, reduzindo a carga sobre o SUS.
```

### Esperado (Expected)
Descreve o **formato e os critérios de qualidade** da resposta desejada. Isso guia a IA sobre como estruturar a saída para que ela seja útil para você.

```yaml
expected:
  description: "Define o formato e os critérios de qualidade da resposta."
  content: |
    - A resposta deve ser uma lista de fontes em formato de citação ABNT.
    - Para cada fonte, inclua um breve resumo (2-3 frases) explicando sua relevância para o tema.
    - Priorize estudos publicados nos últimos 10 anos.
    - Classifique as fontes como 'Alta Relevância' ou 'Relevância Moderada'.
```

### Negativo (Negative)
Define as **restrições** e o que a IA deve **evitar** a todo custo, como fontes não confiáveis, tópicos irrelevantes ou vieses específicos.

```yaml
negative:
  description: "Termos, fontes ou assuntos que a IA deve evitar."
  content: |
    - Não utilize notícias de portais generalistas ou posts de blog como fontes principais.
    - Evite qualquer menção a propagandas políticas ou realizações de governos específicos.
    - Ignore fontes que não possuam autoria clara ou metodologia de pesquisa definida.
```

### Comportamento (Behavior)
Define as **regras operacionais**, o tom e o estilo da IA. É aqui que você pode instruir o modelo sobre seu processo de "pensamento".

```yaml
behavior:
  description: "Define o modo de operação, o tom e as regras que a IA deve seguir."
  content: |
    - Adote um tom formal e acadêmico.
    - Pense passo a passo antes de formular a resposta final.
    - Justifique brevemente por que cada fonte selecionada é considerada confiável.
    - Se não encontrar informações suficientes ou confiáveis, declare explicitamente a limitação da busca.
    - Não invente informações ou fontes. A honestidade acadêmica é a prioridade máxima.
```

## Comparação: YAML vs. Texto Simples
Para entender o ganho, vejamos como seria o mesmo prompt escrito de forma "corrida":

**Prompt em Texto Simples (Abordagem Comum)**
```text
Aja como um pesquisador sênior de saúde pública e saneamento. Preciso de fontes para um artigo sobre o impacto da despoluição dos rios Pinheiros e Tietê na saúde e no SUS. Encontre artigos e teses que relacionem saneamento básico com a diminuição da demanda no SUS no Brasil, mas não use notícias de jornais ou propaganda de governo. Quero a resposta como uma lista em ABNT com um resumo de 2-3 frases para cada, priorizando os últimos 10 anos e classificando a relevância. Pense passo a passo, use um tom formal e seja honesto se não encontrar nada. Não invente fontes.
```

**Prompt em YAML (Abordagem avançada)**
```yaml
who:
  description: "Define a persona e a especialidade da IA."
  content: |
    Você é um pesquisador sênior especializado em saúde pública e saneamento, com a tarefa de encontrar fontes acadêmicas robustas para um artigo científico. Sua prioridade é a qualidade e a veracidade das fontes.

command:
  description: "A tarefa principal que o LLM deve executar."
  content: |
    Encontre fontes acadêmicas (artigos, teses, estudos) que abordem a relação entre a melhoria do saneamento básico e a diminuição da demanda no Sistema Único de Saúde (SUS) no Brasil.

context:
  description: "Fornece o pano de fundo para a IA entender a proposta."
  content: |
    Estou escrevendo um artigo científico sobre o impacto da despoluição dos rios Pinheiros e Tietê na saúde pública da Região Metropolitana de São Paulo. A hipótese é que a melhoria do saneamento impacta diretamente a saúde da população, reduzindo a carga sobre o SUS.

expected:
  description: "Define o formato e os critérios de qualidade da resposta."
  content: |
    - A resposta deve ser uma lista de fontes em formato de citação ABNT.
    - Para cada fonte, inclua um breve resumo (2-3 frases) explicando sua relevância para o tema.
    - Priorize estudos publicados nos últimos 10 anos.
    - Classifique as fontes como 'Alta Relevância' ou 'Relevância Moderada'.

negative:
  description: "Termos, fontes ou assuntos que a IA deve evitar."
  content: |
    - Não utilize notícias de portais generalistas ou posts de blog como fontes principais.
    - Evite qualquer menção a propagandas políticas ou realizações de governos específicos.
    - Ignore fontes que não possuam autoria clara ou metodologia de pesquisa definida.

behavior:
  description: "Define o modo de operação, o tom e as regras que a IA deve seguir."
  content: |
    - Adote um tom formal e acadêmico.
    - Pense passo a passo antes de formular a resposta final.
    - Justifique brevemente por que cada fonte selecionada é considerada confiável.
    - Se não encontrar informações suficientes ou confiáveis, declare explicitamente a limitação da busca.
    - Não invente informações ou fontes. A honestidade acadêmica é a prioridade máxima.
```

**Análise da Comparação:**
*   **Legibilidade:** O prompt em texto simples é um "bloco de texto" denso e difícil de escanear. O formato YAML/Markdown é limpo e segmentado.
*   **Manutenção:** Modificar uma regra no prompt de texto simples é arriscado; você pode acidentalentalmente alterar outra instrução. No YAML, cada componente é isolado e seguro para ser editado.
*   **Automação:** Com o YAML, é trivial para um programa trocar apenas o `command` enquanto reutiliza todo o resto, permitindo a criação dinâmica de prompts para diferentes tópicos de pesquisa. Com o texto simples, isso exigiria uma manipulação de strings complexa e frágil.

### Resultados
- [Resultado do texto simples](./result_simple)
- [Resultado de uso da estrutura YAML](./result_yaml)
#### Análise Comparativa dos Resultados

| Critério | Resultado do Prompt YAML | Resultado do Prompt Simples | Análise |
|---|---|---|---|
| Estrutura da Resposta | Altamente organizada, com seções claras para "Alta Relevância" e "Relevância Moderada" e justificativas bem definidas. | Menos estruturada, com uma introdução mais longa e uma lista simples de fontes. | O resultado do YAML é mais fácil de "escanear" e usar profissionalmente. |
| Adesão às Instruções | Cumprida com perfeição. Incluiu a "Justificativa de Confiabilidade" para cada fonte, como pedido na seção behavior. Priorizou fontes muito recentes (2024, 2022, 2021). | Parcialmente cumprida. Não incluiu uma justificativa de confiabilidade explícita para cada fonte. Uma das fontes principais é de 2011, quebrando a regra de "priorizar os últimos 10 anos". | O prompt YAML forçou a IA a seguir as regras de forma mais rigorosa. |
| Qualidade das Fontes | Apresentou fontes muito pertinentes e de alta credibilidade, como os relatórios do Instituto Trata Brasil, que são referência na área. | As fontes são boas, mas a tese de 2020 e o artigo de 2011 são um pouco menos atuais que os relatórios encontrados pelo outro prompt. | O prompt mais detalhado parece ter guiado a IA para fontes mais específicas e atuais. |
| Tom e Profissionalismo | O tom é direto, acadêmico e eficiente, exatamente como solicitado. | O tom é bom, mas o início é mais conversacional ("Prezado(a) pesquisador(a)...") e inclui um parágrafo longo justificando a dificuldade da busca. | O resultado do YAML é mais objetivo e se assemelha mais a um relatório técnico. |

## Conclusão
Embora um simples prompt de texto seja suficiente para tarefas casuais, a complexidade das aplicações modernas baseadas em LLMs exige uma abordagem mais disciplinada e escalável. Estruturar os prompts com YAML transforma a engenharia de prompts de uma arte experimental em uma prática de engenharia de software robusta.

Ao adotar o YAML, você ganha em **clareza, manutenibilidade, reutilização e colaboração**, tornando seus projetos de IA mais profissionais e fáceis de gerenciar. **Tratar seus prompts como código** é o próximo passo natural para construir aplicações de IA mais confiáveis, potentes e previsíveis.