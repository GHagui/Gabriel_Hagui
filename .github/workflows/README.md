# 🔄 GitHub Actions - Automated Pull Requests

Este repositório contém workflows automatizados para gerenciar pull requests entre as branches `develop` e `main`.

## 📋 Workflows Disponíveis

### 1. `create-pull-request.yml` - Auto PR Creation
**Trigger:** Automaticamente quando há push na branch `develop`

**Funcionalidades:**
- ✅ Cria automaticamente um PR de `develop` para `main`
- 🔍 Verifica se já existe um PR aberto
- 📝 Atualiza PR existente com novas informações
- 📊 Inclui estatísticas dos commits
- 🏷️ Adiciona labels automáticos

### 2. `manual-pr-create.yml` - Manual PR Creation
**Trigger:** Execução manual via GitHub Actions tab

**Opções disponíveis:**
- 🎯 **force_create**: Força criação mesmo se PR já existir
- 📝 **pr_title**: Título customizado para o PR
- 🗑️ **close_existing**: Fecha PRs existentes antes de criar novo

### 3. `pr-notifications.yml` - PR Status Notifications
**Trigger:** Eventos de PR (opened, closed, synchronized, review)

**Funcionalidades:**
- 📢 Notificações de status do PR
- 💬 Comentários automáticos com checklist
- 📈 Tracking de aprovações e reviews

## 🚀 Como usar

### Fluxo Automático
1. Faça commits na branch `develop`
2. Push para o repositório
3. ✨ Um PR será criado automaticamente!

```bash
git checkout develop
git add .
git commit -m "feat: nova funcionalidade"
git push origin develop
```

### Fluxo Manual
1. Vá para a aba **Actions** no GitHub
2. Selecione **"Manual PR Creation (develop → main)"**
3. Clique em **"Run workflow"**
4. Configure as opções conforme necessário
5. Clique em **"Run workflow"**

## 📊 Estrutura do PR Automático

Os PRs criados automaticamente incluem:

- 📈 **Estatísticas**: Número de commits à frente
- 📝 **Lista de commits**: Últimos commits incluídos
- ✅ **Checklist**: Items para revisão
- 🏷️ **Labels**: Classificação automática
- 👤 **Assignee**: Responsável (em PRs manuais)

## ⚙️ Configuração

### Permissões Necessárias
Os workflows usam `GITHUB_TOKEN` que já está disponível. Certifique-se que o repositório tem as seguintes permissões:

- ✅ **Pull requests**: write
- ✅ **Contents**: read
- ✅ **Issues**: write (para comentários)

### Branch Protection Rules (Recomendado)
Configure regras de proteção para a branch `main`:

1. Vá em **Settings** → **Branches**
2. Adicione regra para `main`
3. Configure:
   - ☑️ Require pull request reviews before merging
   - ☑️ Require status checks to pass before merging
   - ☑️ Require branches to be up to date before merging

## 🛠️ Customização

### Modificar Template do PR
Edite o arquivo `create-pull-request.yml` na seção `pr_body` para personalizar:
- 📝 Descrição padrão
- ✅ Checklist items
- 🏷️ Labels automáticos

### Adicionar Integrações
Os workflows podem ser estendidos para:
- 📧 Notificações por email/Slack
- 🏷️ Auto-tagging de releases
- 🧪 Execução de testes automáticos
- 📱 Notificações mobile

## 🔍 Troubleshooting

### PR não foi criado
1. Verifique se há commits na `develop` que não estão na `main`
2. Confirme que o push foi feito na branch `develop`
3. Verifique os logs do workflow em Actions

### Workflow falhou
1. Verifique as permissões do `GITHUB_TOKEN`
2. Confirme que as branches `develop` e `main` existem
3. Verifique se não há conflitos entre as branches

### PR duplicado
1. Use o workflow manual com `close_existing: true`
2. Ou feche manualmente os PRs existentes

## 📚 Recursos Adicionais

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub CLI Documentation](https://cli.github.com/manual/)
- [Pull Request Best Practices](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)

---

*Workflows criados para automatizar o processo de desenvolvimento e deploy* 🚀
