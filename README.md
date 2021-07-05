# Curso Front-end
### EBAC - Escola Britânica de Artes Criativas
## Download do Git

Windows: https://git-scm.com/download/win
MAC: (brew): brew install git
Linux: (apt-get): sudo apt-get install git

## Criar conta no github

## Clonar projeto
git clone https://github.com/dudeHQ/curso-frontend.git

## Commits
Informação de alteração
- após testado todo o código
- git add *
- git commit -m "mensagem"
- git push (enviar alterações para o repositório)
- git pull (puxa / trazer as alterações feitas no repositório (Github) para a minha máquina / locaslhost)

## Git Flow
Fluxo do Git

### Branchs
São ramificações / versões paralelas

- main / master (vai para produção, quando o projeto vai ser publicado)
- develop
- DOD Definiition of Done: critérios de aceite
- versionamento 0.2.10

#### Comandos
- git checkout -b dev (cria uma branch)
- git checkout main (mudar de branch)

### Merge
Mescla de branchs

Você precisa resolver conflitos manualmente

git merge main

### Pull requests
Mescla de branchs no repositório
Permite code review
O repositório resolver os conflitos automaticamente

### configura o Gitflow
git flow init
git flow feature start (nome-da-feature)
=======

