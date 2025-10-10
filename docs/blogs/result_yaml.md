---
layout: default-br
title: O resultado do prompt em YAML
permalink: /result_yaml
---
## Prompt
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

## Resultado gerado
Com base em uma pesquisa criteriosa em fontes acadêmicas e relatórios técnicos especializados, apresento a seguir uma lista de publicações pertinentes à relação entre a melhoria do saneamento básico e a diminuição da demanda no Sistema Único de Saúde (SUS) no Brasil.

As fontes foram selecionadas priorizando a metodologia de pesquisa, a clareza dos dados e a data de publicação, em conformidade com os critérios solicitados.

***

### Fontes Acadêmicas Selecionadas

**Classificação: Alta Relevância**

1.  **Citação ABNT:**
    RODRIGUES, K. C. T. T.; BARRINHA, R. N.; STADUTO, J. A. R.; WESTEREN, K. I. Os problemas de saneamento e seus impactos sobre a saúde pública. **International Journal of Environmental and Rural Development (IJERRS)**, v. 4, n. 3, p. 1-26, 2022.

    *   **Resumo da Relevância:** Este artigo de revisão analisa a inter-relação entre saneamento e saúde pública, destacando o investimento em saneamento como uma medida preventiva com impactos econômicos positivos. O estudo aponta para a redução de custos com saúde a médio e longo prazo, uma vez que a melhoria da infraestrutura sanitária diminui a demanda por serviços de saúde voltados ao tratamento de doenças de veiculação hídrica e outras enfermidades associadas.
    *   **Justificativa de Confiabilidade:** Trata-se de um artigo publicado em um periódico acadêmico (International Journal of Environmental and Rural Development) com autoria e filiação institucional claras. A metodologia consiste em uma revisão da literatura, fundamentada em conceitos teóricos e dados de fontes reconhecidas, sendo apropriada para contextualizar a pesquisa científica.

2.  **Citação ABNT:**
    INSTITUTO TRATA BRASIL. **Saneamento é saúde: como a falta de acesso à infraestrutura básica impacta na incidência de doenças (DRSAI)**. São Paulo: Instituto Trata Brasil, 2024.

    *   **Resumo da Relevância:** Este estudo detalhado analisa a incidência de Doenças Relacionadas ao Saneamento Ambiental Inadequado (DRSAI) no Brasil entre 2008 e 2024. A publicação correlaciona diretamente a precariedade do saneamento com o aumento de internações e óbitos, quantificando o impacto sobre o sistema de saúde e destacando os grupos demográficos mais vulneráveis.
    *   **Justificativa de Confiabilidade:** O Instituto Trata Brasil é uma organização de referência na produção de estudos e dados sobre saneamento no Brasil. Este relatório utiliza bases de dados públicos do DATASUS, conferindo alta credibilidade às suas conclusões e tornando-o uma fonte de dados primária essencial para a pesquisa.

3.  **Citação ABNT:**
    INSTITUTO TRATA BRASIL. **Saneamento e Doenças de Veiculação Hídrica – ano base 2019**. São Paulo: Instituto Trata Brasil, 2021.

    *   **Resumo da Relevância:** Focado no ano de 2019, este relatório quantifica o impacto da falta de saneamento no sistema de saúde brasileiro, imediatamente antes da pandemia. O estudo apresenta números concretos, como as 273 mil internações por doenças de veiculação hídrica e os custos associados de R$ 108 milhões para o SUS, demonstrando a carga financeira e operacional que a ausência de saneamento impõe.
    *   **Justificativa de Confiabilidade:** Assim como a outra publicação do Instituto, este estudo baseia-se em dados oficiais do Sistema Nacional de Informações sobre Saneamento (SNIS) e do DATASUS. Sua metodologia é transparente e focada na análise de dados, o que o qualifica como uma fonte robusta e confiável para fins acadêmicos.

**Classificação: Relevância Moderada**

1.  **Citação ABNT:**
    MARTINS, G. **Impacto do Saneamento Básico na Saúde Pública - Estudo de caso - Itapetininga - SP - 1980 a 1997**. 2001. Tese (Doutorado em Saúde Pública) - Faculdade de Saúde Pública, Universidade de São Paulo, São Paulo, 2001.

    *   **Resumo da Relevância:** Esta tese de doutorado avalia, por meio de modelos de regressão linear múltipla, o impacto dos investimentos em saneamento na saúde da população de um município paulista. O estudo conclui que investimentos anuais de US$ 2,78 milhões contribuíram para a redução de um óbito por doenças infecciosas intestinais e helmintíases, estimando uma relação custo-benefício positiva entre o investimento em saneamento e a economia gerada na saúde.
    *   **Justificativa de Confiabilidade:** Sendo uma tese de doutorado da Universidade de São Paulo (USP), a pesquisa possui grande rigor metodológico e acadêmico. É classificada com relevância moderada apenas por ter sido publicada há mais de 10 anos, porém sua metodologia quantitativa e suas conclusões servem como um excelente referencial teórico e histórico para a pesquisa atual.
