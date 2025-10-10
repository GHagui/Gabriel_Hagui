---
layout: default-br
title: De um simples NAS a um homelab completo, sem querer querendo
permalink: /truenas
---
# Pré-NAS
Quando a gente começa a tirar fotos importantes, salvar documentos pessoais, trabalhar com vídeos e outros arquivos valiosos, a primeira coisa que vem à mente é: **Guardar tudo com segurança, com backup**. E normalmente, a primeira solução que pensamos é a nuvem.

Foi exatamente o que eu fiz.
Comecei a guardar tudo na nuvem. Mas logo percebi que os **15 GB do Google Drive** e os **5 GB do OneDrive** não são suficientes pra quase ninguém. E pra piorar, [o Google tirou o armazenamento ilimitado do Google Fotos.](https://www.cnnbrasil.com.br/tecnologia/o-que-muda-no-google-fotos-com-o-fim-do-armazenamento-ilimitado)

Pra contornar isso, assinei um plano de **100 GB do Google One**, deixei os arquivos no Google Drive e as fotos no Google Fotos. Só que aí tudo começou a **crescer descontroladamente**, principalmente por causa do backup automático do celular, que eu não quis desativar. Afinal, moro em São Paulo, e com os riscos de segurança pública, perder o celular significaria perder fotos e arquivos importantes, caso não tivesse um backup automático.

Resultado: **Atingi os 100 GB bem rápido**. Então aumentei pro plano de **200 GB**. E não demorou muito pra lotar de novo.

Foi aí que caiu a ficha: **Essa solução não é definitiva**. Parece que todo ano vou ter que assinar um plano maior. Fico cada vez mais **dependente da Google**. E se um dia eles resolverem subir o preço de novo? [Já aconteceu recentemente.](https://tecnoblog.net/noticias/google-one-aumenta-precos-no-brasil-e-fica-ate-28-mais-caro/)

Além disso, embora pareça improvável, nada impede que um dia o Google simplesmente encerre um serviço ou mude suas regras, como já aconteceu com várias plataformas no passado. [Lembro bem do caso do **MegaUpload**, que em certo momento representava uma enorme fatia do tráfego da internet mundial e mesmo assim, desapareceu de uma hora pra outra, levando com ele os dados de milhões de usuários](https://www.bbc.com/news/technology-16642369). Ninguém foi avisado. Ninguém teve como recuperar.
> [!help] Isso me fez pensar:
> ***Quão seguro é depender 100% de um serviço que não está sob meu controle?***

Percebi que isso não é o que quero pra minha vida digital. Foi aí que comecei a pensar em **montar uma NAS**.
# NAS
### A busca por um NAS
Pra começar, fui procurar um NAS pronto na internet. O que mais me interessou foi o [WD My Cloud Expert Series EX2 Ultra](https://westerndigital.com/products/network-attached-storage/wd-my-cloud-expert-series-ex2-ultra?sku=WDBVBZ0000NCH-NESN), bonito, compacto e com certa reputação no mercado.

Mas aí veio o balde de água fria: Custava cerca de **R$ 3.000, sem os dois HDs incluídos**. E o pior: O **sistema era fechado e proprietário** da Western Digital.

A ficha caiu de novo. Eu estaria apenas **trocando a dependência da Google pela dependência da Western Digital**.

Além disso, o modelo estava começando a sumir do mercado, dando aquela sensação de produto que pode ser descontinuado a qualquer momento. E se a empresa deixar de dar suporte? Ou pior, se o sistema parar de funcionar ou exigir alguma conta online da WD (o que já aconteceu com outros dispositivos)?

Foi aí que percebi que **não queria um NAS pronto, queria controle de verdade**. Queria montar o meu.
### De PC antigo a NAS
Um pouco antes dessa busca por um NAS pronto, eu havia feito um upgrade no meu setup principal: Troquei o Intel i5 11400F por um Ryzen 9 7900X3D.

A ideia era vender o sistema antigo por uns R$ 1.800, mas aí a ideia veio na hora certa.

> [!help] Pensei:
> ***Por que não tentar montar meu próprio NAS com esse sistema Intel?***
> ***Só pra testar. Se não gostar, vendo depois.***

Essa simples ideia virou o ponto de virada. Em vez de gastar R$ 3.000 num aparelho limitado e fechado, comecei a explorar o mundo dos **NAS caseiros, open source e altamente customizáveis**.

Especificações do setup Intel inicial:

| Peça | Modelo |
| :--- | :--- |
| **Processador** | Intel Core i5 11400F |
| **Placa-mãe** | MSI B560M PRO-VDH |
| **RAM** | 48 GB de RAM 3000 MT/s |
| **Placa de vídeo** | Asus GTX 750 OC 2GB |
| **PSU** | OCZ ATX 500W ModXStream Pro |
| **HDDs** | WD Blue 500 GB, WD Black 500 GB |
| **SSD** | WD Green 120 GB SATA |

### Escolhendo o sistema para o NAS
Comecei a pesquisar qual sistema operacional seria ideal para um NAS caseiro. Nas conversas em fóruns e vídeos que assisti, dois nomes surgiram com frequência: [Unraid](https://unraid.net/) e [TrueNAS](https:/truenas.com/).

O Unraid parecia interessante, mas exige licença paga. Já o TrueNAS chamou ainda mais minha atenção, principalmente a versão **TrueNAS Scale**, que é **baseada em Linux** com o qual me familiarizo (ao contrário da versão Core, que usa FreeBSD) e, melhor ainda: **É gratuito!**

Li que o TrueNAS pode ser mais difícil de configurar, especialmente para quem está começando. Mas encarei isso como um desafio técnico interessante. Afinal, montar um NAS próprio já era um projeto de aprendizado.

E foi assim que decidi: **Vou instalar o TrueNAS Scale e fazer meu NAS do zero.**
### TrueNAS
Após a instalação, percebi que o TrueNAS não é tão difícil quanto parece, pelo menos não para mim, que já tenho certa experiência com Linux (e um bom histórico de distro hopping).

A primeira tela exibida é simples: Um terminal com o endereço IP do servidor e algumas opções básicas de configuração. Acessei o dashboard diretamente por esse IP.

O primeiro passo que realizei foi a criação de um **pool de armazenamento**, utilizando dois HDDs antigos, com cerca de 10 anos de uso, mas ainda funcionais e com a mesma capacidade.

Configurei o pool em **ZFS RAID 1 (Mirror)**, também conhecido como **RAID-Z1**. Nesse modo, os dados são espelhados entre os dois discos:
> [!info] Informação
> **RAID-Z** é o sistema de RAID implementado pelo **ZFS** via software. Ele é mais flexível que o RAID via hardware, permitindo aplicar diferentes tipos de RAID mesmo em HDDs com capacidades, caches ou velocidades distintas.

> [!success] Redundância
> **RAID-Z1 oferece redundância**. Mesmo que um dos discos falhe, os dados permanecem íntegros no outro.

>[!help] Comentário
>O **ZFS** é um sistema de arquivos bastante avançado e, em muitos aspectos, superior ao NTFS usado no Windows. Ele permite:
> - **Snapshots** (backups instantâneos e sem cópia);
> - **Verificação contínua de integridade dos dados**;
> - **Deduplicação**, que economiza espaço ao não repetir dados idênticos;
> - Oferecem **algoritmos modernos de compressão**, ao contrário do NTFS, que usa um algoritmo antigo e ineficiente.
> - Uso de **cache em RAM e SSD** para acelerar leituras e gravações.

Meu PC se beneficia muito com uso de cache gerenciado por ZFS já que tem **48 GB de RAM**, tornou velocidade de escrita e leitura rápida, mas infelizmente é limitada pelo modem que tem só **1Gbps de Ethernet**, ou seja, **125 MB/s**.

Após configurar o pool, ativei o **Samba (SMB)**, que é um protocolo de compartilhamento de arquivos em rede criado pela Microsoft. Achei extremamente prático: Consigo **acessar as pastas do NAS como se estivessem no próprio computador**, de forma transparente.

Em muitos casos, especialmente com arquivos menores até videos, **nem percebo que os dados estão vindo da rede**, é tudo muito rápido.

Ao contrário dos serviços de armazenamento em nuvem, onde preciso usar o navegador para enviar arquivos ou fazer backup, o processo via SMB é bem mais direto e eficiente. A nuvem costuma ser mais lenta e menos prática para esse tipo de uso.

No Google Drive e no Google Fotos, por exemplo, vídeos grandes demoram para carregar, e muitas vezes só são exibidos em baixa resolução. Isso acaba obrigando o download completo do arquivo caso eu queira assistir com qualidade nativa em vez de pré-visualização.

Com o SMB, consigo **mover, copiar e abrir arquivos como se estivessem armazenados localmente**, com muito mais agilidade e controle.
### Preocupação com boleto de luz
Qualquer equipamento ligado 24/7 inevitavelmente levanta uma preocupação: **O consumo de energia** e, claro, o impacto no boleto da luz.

Muitos PCs, especialmente os que não são embutidos nem portáteis, têm baixa eficiência energética em modo ocioso (IDLE). Para contornar isso, realizei várias otimizações no BIOS, buscando reduzir ao máximo o consumo do meu NAS:

- ❌ **Desativei** o modo Turbo Boost da Intel
- ✅ **Ativei** todos os estados C-State
- ✅ **Ativei** o Intel SpeedStep Technology
- 🔻 **Reduzi o TDP** do processador de 65W para 20W

> [!info] Informação
> A **redução de TDP afeta negativamente a performance da CPU**, mas isso não é um problema aqui, a carga de trabalho no processador é baixa, já que o NAS foi montado essencialmente para armazenamento de dados.

- ⚡️ Configurei a BIOS para **sempre ligar o PC quando receber energia**, o que não é exatamente economia de energia, mas é útil para ligar o PC automaticamente após uma falha de energia.
#### Medida extrema: Headless
Tomei uma decisão mais drástica: **removi a GPU GTX 750 da placa-mãe**. Agora o NAS está rodando em modo **headless** (sem interface gráfica ou monitor).

> [!info] Informação
> O TrueNAS não exige uma GPU para funcionar. A presença da GPU pode ser útil para tarefas como interface gráfica em VMs ou streaming de vídeos, mas não preciso disso no meu uso atual.

Com todas essas otimizações, o consumo em IDLE **caiu de 60W para 35W**.
#### Fonte "bomba"
O NAS estava utilizando uma fonte **OCZ ATX 500W ModXStream Pro 80 Plus, lançada em 2010!** Ela estava guardada há anos, coberta de pó na prateleira.

Segundo muitos especialistas em fóruns, **capacitores antigos e inativos podem se degradar**, aumentando o risco de falha e instabilidade o que poderia prejudicar os discos rígidos a longo prazo.

Para evitar problemas, resolvi investir numa fonte moderna, **MSI MPG A1000G**, "ready" for RTX 5080, com novo conector 12VHPWR. Essa nova fonte passou a equipar meu PC principal, substituindo a **MSI MPG A850GF**, que agora está instalada no NAS.

Agora o NAS está seguro com a fonte moderna.
#### Resultado
Após a troca da fonte, tive uma grata surpresa: **O consumo caiu mais 5 watts**. Isso era esperado, já que a fonte antiga tinha selo 80 Plus comum, e a nova é **80 Plus Gold**, com melhor eficiência energética, especialmente em cargas baixas como o IDLE.

Agora, o NAS está consumindo **apenas 30W em repouso** o que considero excelente para o que ele entrega.
#### Setup atualizado

| Peça | Modelo |
| :--- | :--- |
| **Processador** | Intel Core i5 11400F |
| **Placa-mãe** | MSI B560M PRO-VDH |
| **RAM** | 48 GB de RAM 3000 MT/s |
| **Placa de vídeo** | **Headless** |
| **PSU** | **MSI MPG A850GF** |
| **HDDs** | WD Blue 500 GB, WD Black 500 GB |
| **SSD** | WD Green 120 GB SATA |

### Meu NAS à internet
Certamente, um NAS não consegue competir com a nuvem se só puder ser acessado pela rede local, ou seja, apenas dentro de casa. A grande vantagem da nuvem é justamente a possibilidade de **acesso de qualquer lugar, a qualquer hora**, desde que haja conexão com a internet.

Eu já tinha algum conhecimento sobre como expor o NAS à internet, mas também sabia dos riscos de segurança envolvidos em abrir portas diretamente no roteador. Então fui atrás de uma solução que permitisse **acessar meu NAS remotamente, mas com segurança**.

Encontrei duas opções muito interessantes: **WireGuard** e **Tailscale**. Ambas oferecem VPNs privadas, o que me lembrou da época do clássico Hamachi, além de ferramentas como ZeroTier e Radmin, que usávamos para jogar Minecraft com os amigos. Boa nostalgia!

Optei por usar o **Tailscale**, por ser **fácil de configurar** ainda com WireGuard, que é eficiente e rápido, em backend e também por permitir o **compartilhamento de acesso com amigos**, caso eu queira, por exemplo, montar um servidor privado de Minecraft (Java Edition) no NAS com possibilidade de Lista de Controle de Acesso (ACL).

Instalei o Tailscale na loja do dashboard do TrueNAS, que é baseada nos containers prontos do **Docker** e **Kubernetes**. Foi fácil configurar, confesso que tive dúvidas e fiquei confuso, mas só pesquisei na internet, assisti no Youtube e perguntei no ChatGPT, o que já resolveu.

Também instalei o Tailscale no meu celular e fiz o login lá. Magicamente acessa à rede local com `subnet routing` ativado mesmo conectado com 5G, como se estivesse em casa.
### Gerenciador de arquivos para Android
Com o NAS na palma de mão, posso acessar de qualquer lugar desde que tenha internet, **chegou no nivel de nuvem!**

O aplicativo nativo da OneUI, Meus Arquivos, até suporta acesso ao NAS via rede, mas me incomodava o fato de **não ter pré-visualização de fotos e vídeos**.

Procurei uma alternativa, de preferência **FOSS** (código aberto). Achei um aplicativo que atende meus critérios: [Material Files](https://github.com/zhanghai/MaterialFiles)

Ele suporta SMB e **tem pré-visualização de fotos e vídeos!**
E o melhor de tudo: **Sem anúncios!**
# HomeLab
Comecei a gostar bastante desse caminho, que é muito promissor e me permite ter **controle total dos meus dados importantes**, acessando tudo na palma da mão, **sem depender de ninguém**.

Se um dia a iXsystems parar de dar suporte ao TrueNAS, ou se ele deixar de ser gratuito, não seria um problema.
O **ZFS é código aberto** e continuará acessível. Desde que os discos estejam preservados, basta procurar uma alternativa compatível e instalar.

Escolhi esse caminho e decidi investir em **dois HDDs próprios para NAS**, garantindo mais segurança para meus dados, sem medo de perder tudo por causa daqueles discos antigos de 10 anos.

Pesquisei bastante sobre HDDs para NAS. Sim, eles são diferentes dos HDDs comuns. Foram **projetados para funcionar 24 horas por dia, 7 dias por semana**.

São mais duráveis, vibram menos, são mais silenciosos e, o mais importante: **Consomem menos energia**, pois giram a 5400 RPM, em vez dos 7200 RPM dos modelos comuns.

Escolhi o modelo **Western Digital Red Plus 4 TB**, comprado em 2 unidades.

Teoricamente, o total seria de 8 TB, mas como ativei o **RAID-Z1 (espelhamento dos dados)** para proteger contra a falha de um dos discos, o espaço disponível foi reduzido para **4 TB**, o que é esperado nesse tipo de configuração.

> [!success] Redundância ativada
> Mesmo que um dos HDDs falhe, **os dados continuam intactos no outro**. Isso traz muito mais segurança para arquivos importantes.

#### Setup atual

| Peça | Modelo |
| :--- | :--- |
| **Processador** | Intel Core i5 11400F |
| **Placa-mãe** | MSI B560M PRO-VDH |
| **RAM** | 48 GB de RAM 3000 MT/s |
| **Placa de vídeo** | **Headless** |
| **PSU** | **MSI MPG A850GF** |
| **HDDs** | WD Blue 500 GB, WD Black 500 GB, **2x WD Red Plus 4 TB** |
| **SSD** | WD Green 120 GB SATA |

Não é simplesmente bater o martelo e dizer que meu NAS virou um **HomeLab**, como muita gente faz nas redes sociais, especialmente no Reddit, em comunidades como o r/homelab, onde mostram laboratórios domésticos bem robustos, com hardware de servidor de verdade. O meu HomeLab é simples, mas foi **além do armazenamento**: Montei um servidor virtual usado como laboratório de desenvolvimento e outro servidor que serviu como host para um servidor de Minecraft!

Não vou entrar em detalhes sobre esses dois servidores agora, senão esta página vai ficar muito longa. Vou separar esses assuntos e publicar em uma próxima vez.

### Automatização da compressão de vídeos com base em pastas
Instalei um aplicativo (em um container) no TrueNAS que **comprime automaticamente os vídeos ao serem movidos para uma pasta específica**, com o objetivo de economizar espaço de forma inteligente. Funciona assim: Se os vídeos forem importantes ou marcantes, eu os coloco em outra pasta que nunca será comprimida, preservando a qualidade máxima. Por outro lado, se forem vídeos simples, em que a compressão é aceitável, eu os envio para a pasta que o aplicativo monitora e comprime automaticamente.

Diferente do Google Fotos, que me força a escolher entre manter tudo sem compressão ou ativar a economia de espaço para tudo, **aqui eu tenho controle total e posso decidir caso a caso**.

### Batalha final: Comparação entre Google One x meu NAS
Em 26 de junho de 2025, a Google oferece um plano mais próximo da capacidade dos meus HDDs. Infelizmente, não existe plano de 4 TB, o máximo é 2 TB, chamado **Google AI Pro**, que custa **R$ 96,99 por mês**.

É difícil comparar de forma totalmente justa, pois o plano da Google inclui IA (como o Gemini), e o meu NAS virou um verdadeiro HomeLab, com ferramentas que vão muito além do armazenamento. São propostas bem diferentes.

Mas focando apenas no armazenamento, vamos simular o custo a longo prazo, considerando que um HDD dura cerca de 5 anos sem falhas.

💰 **Comparação de custos em 5 anos:**

**Google AI Pro (2 TB):** R$ 96,99 × 12 meses × 5 anos = **5.819,40 reais**

**Meu HomeLab (4 TB em RAID 1):**

Dois HDDs WD Red Plus 4 TB: **R$ 1.318,33**

Energia elétrica (30W em média, 24/7, R$ 0,70/kWh):

30W × 24h × 365 dias × 5 anos = 1.314 kWh

1.314 × R$ 0,70 = **919,80 reais**

Total: **R$ 2.238,13**

📉 **Resultado:**

**Economia total: ~62% mais barato**

E se considerarmos o dobro da capacidade (4 TB vs 2 TB), usando dois planos Google AI Pro, o custo seria R$ 11.638,80.

Nesse caso, a **economia sobe para 81%!**

### Conclusão
Montar meu próprio NAS foi mais do que uma escolha técnica, foi uma **decisão de independência digital**. Comecei apenas querendo resolver o problema de espaço e backup, mas acabei mergulhando em um universo que me deu **controle total sobre meus dados, flexibilidade extrema e verdadeira autonomia** diante dos modelos centralizados das grandes empresas de tecnologia.

Descobri que soluções prontas, como Google One ou NASs proprietários, embora pareçam práticas à primeira vista, carregam limitações, dependências e custos recorrentes. Ao investir no meu próprio HomeLab, ganhei muito mais do que armazenamento: **Conquistei liberdade**.

Hoje, com meu NAS:

- Tenho **acesso remoto seguro**, de qualquer lugar;
- **Compartilho arquivos do jeito que quiser**, sem restrições;
- **Automatizo tarefas** como compressão de vídeos;
- E, principalmente, **não dependo de terceiros** para garantir a integridade dos meus dados.

Ah, e com a economia que fiz, poderia comprar 150 combos de Big Mac ou 4 anos e meio de proteína de soja!

Além de tudo isso, **economizo dinheiro a longo prazo**, sem abrir mão da qualidade.

Esse projeto não foi apenas sobre tecnologia. Foi sobre resgatar algo que estamos perdendo: **O controle sobre a nossa própria informação.**

Se você também sente que está cada vez mais refém de serviços em nuvem, talvez montar seu próprio NAS seja o primeiro passo para retomar o controle da sua vida digital. Foi o que eu fiz. E não me arrependo.
