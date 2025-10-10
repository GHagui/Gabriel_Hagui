# Como Otimizar Posts do Blog para SEO

## Front Matter Completo para Posts

Quando criar novos posts no blog, use este template completo no front matter:

```yaml
---
layout: default-br
title: "Título Descritivo e Otimizado para SEO - Gabriel Hagui"
description: "Descrição única e específica deste post com 150-160 caracteres idealmente."
date: 2025-10-10
author: Gabriel Hagui
image: /assets/images/projects/nome-projeto.png
lang: pt-BR
tags: [AWS, Serverless, Python, DevOps]
categories: [Cloud, Automação]

# SEO específico (opcional - sobrescreve defaults)
seo:
  type: BlogPosting
  date_modified: 2025-10-10
  
# Open Graph específico (opcional)
og_image: /assets/images/projects/featured-image.png
twitter_image: /assets/images/projects/twitter-card.png
---
```

## Exemplo Prático

Para um post sobre AWS Lambda com Python:

```yaml
---
layout: default-br
title: "Como Criar Functions AWS Lambda com Python e Serverless Framework"
description: "Guia completo para criar, testar e fazer deploy de funções AWS Lambda usando Python e Serverless Framework, com exemplos práticos e melhores práticas."
date: 2025-10-10
author: Gabriel Hagui
image: /assets/images/blog/lambda-python.png
lang: pt-BR
tags: [AWS Lambda, Python, Serverless, Cloud]
categories: [DevOps, Tutoriais]
---
```

## Boas Práticas para Títulos

✅ **Bons títulos:**
- "Deploy Automatizado na AWS com Terraform e GitHub Actions"
- "5 Patterns de Arquitetura Serverless que Todo Dev DevOps Deveria Conhecer"
- "Como Monitorar Lambda Functions: CloudWatch, X-Ray e Custom Metrics"

❌ **Títulos ruins:**
- "Post sobre AWS" (muito genérico)
- "Meu projeto" (não descritivo)
- "Tutorial" (sem contexto)

## Boas Práticas para Descrições

### Características de uma boa descrição:
- 150-160 caracteres (ideal para Google)
- Inclui palavras-chave relevantes
- Call-to-action implícito
- Única para cada página
- Descreve o benefício/conteúdo

### Exemplos:

✅ **Bom:**
```yaml
description: "Aprenda a criar pipelines CI/CD completos na AWS usando CodePipeline, CodeBuild e Lambda. Inclui exemplos de código e melhores práticas de segurança."
```

❌ **Ruim:**
```yaml
description: "Post sobre DevOps" # Muito curto e genérico
```

## Estrutura do Conteúdo

### 1. Heading Hierarchy
```markdown
# Título Principal (H1) - Apenas um por página
## Seção Principal (H2)
### Subseção (H3)
#### Detalhe (H4)
```

### 2. Links Internos
Conecte posts relacionados:
```markdown
Veja também: [Como usar AWS Lambda com Python](/blog/lambda-python)
Leia mais sobre: [Arquitetura Serverless](/blog/serverless-architecture)
```

### 3. Imagens com Alt Text
```markdown
![Diagrama de arquitetura serverless mostrando API Gateway, Lambda e DynamoDB](/assets/images/serverless-arch.png)
```

### 4. Code Blocks com Sintaxe
```python
# AWS Lambda handler exemplo
def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
```

## Palavras-chave por Categoria

### AWS & Cloud
- AWS Lambda
- Serverless
- Infrastructure as Code
- CloudFormation
- Terraform
- API Gateway
- DynamoDB

### DevOps
- CI/CD
- Pipeline
- Automação
- Docker
- Kubernetes
- Monitoring
- Observability

### Python
- Python automation
- Boto3
- AWS SDK
- Python scripts
- Backend development

### Arquitetura
- Microservices
- Event-driven
- Cloud-native
- Distributed systems
- Clean architecture

## Checklist Antes de Publicar

- [ ] Título descritivo e SEO-friendly
- [ ] Descrição única com 150-160 caracteres
- [ ] Imagem featured definida
- [ ] Tags relevantes adicionadas
- [ ] Categoria apropriada
- [ ] Data de publicação correta
- [ ] Alt text em todas as imagens
- [ ] Links internos quando relevante
- [ ] Code blocks com syntax highlighting
- [ ] Heading hierarchy correta (H1 > H2 > H3)
- [ ] Revisar ortografia e gramática
- [ ] Testar em ambiente local

## Ferramentas para Verificar SEO

### 1. Yoast SEO (para referência)
Critérios que o Yoast avalia:
- Palavra-chave no título
- Palavra-chave na descrição
- Palavra-chave no primeiro parágrafo
- Densidade de palavra-chave (0.5-2.5%)
- Tamanho do texto (mínimo 300 palavras)
- Links externos
- Links internos
- Imagens com alt text
- Legibilidade

### 2. Google Search Console
- Monitor impressões
- CTR (Click Through Rate)
- Posição média
- Consultas de pesquisa

### 3. PageSpeed Insights
- Core Web Vitals
- Performance mobile
- Acessibilidade

## Templates por Tipo de Post

### Tutorial/How-to
```yaml
---
title: "Como [Ação] com [Tecnologia]: Guia Completo"
description: "Aprenda passo a passo como [resultado] usando [tech]. Inclui código, exemplos e melhores práticas."
tags: [Tutorial, Tecnologia, Ferramenta]
---
```

### Case Study/Projeto
```yaml
---
title: "[Nome do Projeto]: Como Resolvi [Problema] com [Solução]"
description: "Case study: como implementei [solução] para [problema], incluindo desafios, decisões técnicas e resultados."
tags: [Case Study, Projeto, Tecnologia]
---
```

### Lista/Roundup
```yaml
---
title: "X [Tipo de Item] para [Objetivo/Problema]"
description: "Lista curada de [items] para [resolver problema]. Comparação, prós/contras e recomendações práticas."
tags: [Lista, Ferramentas, Recursos]
---
```

### Opinião/Análise
```yaml
---
title: "[Tema]: Análise e Perspectivas para [Contexto]"
description: "Análise profunda sobre [tema], explorando [aspectos], tendências e impacto na [área]."
tags: [Análise, Opinião, Tema]
---
```

---

**Dica Final**: SEO é um processo contínuo. Monitore, ajuste e melhore baseado nos dados!
