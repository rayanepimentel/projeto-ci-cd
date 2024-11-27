# Apresentação sobre CI/CD, Controle de Versões e Changelog

Na apresentação, demonstrei o funcionamento de um pipeline CI/CD utilizando uma aplicação simples em Node.js (index.js), enquanto discutia conceitos fundamentais como build, deploy, release, e o papel do changelog no controle de versões. Usei o Railway para simular três ambientes: dev, staging, e prod, proporcionando uma visão prática do fluxo de integração e entrega contínua.


# Estrutura do Projeto

## Branches Configuradas:

- `feature/new`: Para desenvolvimento de novas funcionalidades ou correções.
- `dev`: Onde as alterações são integradas e testadas.
- `main`: Branch de produção, onde o código final, validado, é liberado para os usuários.

## Simulação de Ambientes no Railway:

Configurei os ambientes `dev`, `staging`, e `prod` para ilustrar como as mudanças passam por diferentes estágios antes de chegarem ao usuário final.


# Demonstração Prática

## Pull Request e Merge:

- Simulei o envio das alterações desenvolvidas em `feature/new` para a branch `dev` via pull request.
- Após o merge, o pipeline CI/CD foi acionado para realizar build e deploy nos ambientes `dev` e `staging`.

## Build e Deploy:

- Expliquei que o build transforma o código em um pacote executável e o deploy o implanta nos ambientes configurados.
- As mudanças foram testadas nos ambientes `dev` e `staging`, mas o ambiente de produção (prod) permaneceu inalterado.

## Release para Produção:

- Após validar as alterações, demonstrei como o código consolidado na branch `dev` foi enviado para a branch `main`.
- Uma release foi solicitada, e o pipeline realizou o deploy para o `ambiente de produção`, disponibilizando oficialmente as alterações aos usuários.

## Changelog e Controle de Versões

### Changelog:

Expliquei a importância do changelog como um registro das mudanças feitas em cada versão, incluindo:
- Novas funcionalidades.
- Correções de bugs.
- Alterações que podem impactar os usuários.

### Versão Aberta x Versão Fechada:

Destacando a diferença:

- **Versão Aberta**: Em ambientes como dev ou staging, onde as mudanças ainda estão sendo validadas, as versões podem ser abertas. Exemplo: `1.2.0-RC1` ou `1.2.0-beta`.
- **Versão Fechada**: Para produção, uma versão precisa ser fechada e marcada como estável. Exemplo: `1.2.0`.

Mostrei que para criar uma release, é essencial fechar a versão, garantindo que o código implantado em produção seja rastreável e esteja documentado no changelog.

## Ferramentas Mencionadas
Após a demonstração prática, mencionei algumas ferramentas úteis no processo de CI/CD e controle de qualidade:

- **SonarQube**: Para análise de qualidade e segurança do código.
- **DAST (Dynamic Application Security Testing)**: Para testes de segurança durante a execução, como OWASP ZAP.
- **ArgoCD**: Para gerenciar deploys automatizados.
- **Gerenciadores de Versões (ex.: standard-version ou semantic-release)**: Para automatizar o versionamento e a geração de changelogs.

# Destaques: Build, Deploy e Release
- **Build**: Preparação do código em um pacote executável.
- **Deploy**: Implantação do pacote nos ambientes configurados (dev, staging ou prod).
- **Release**: Disponibilização oficial das alterações aos usuários no ambiente de produção, geralmente associada a uma versão fechada.

# Conclusão
A apresentação mostrou como pipelines CI/CD organizam e automatizam o fluxo de trabalho, ilustrando a importância do controle de versões e do changelog. Usando o Railway para simular ambientes reais, ficou claro como alterações passam por diferentes estágios antes de serem liberadas, reforçando os conceitos de qualidade, rastreabilidade e entrega segura.

