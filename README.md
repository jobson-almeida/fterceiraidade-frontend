# FTerceiraIdade

Aplicação web de gestão para uma iniciativa educacional voltada à inclusão social de pessoas idosas. O painel reúne informações de estudantes, professores, cursos, turmas, questões e avaliações, além de apresentar gráficos de desempenho. No desenvolvimento local, os dados são fornecidos por uma API simulada com `json-server`.

## Funcionalidades

- Consultar listas e detalhes de estudantes, professores, cursos e turmas.
- Consultar questões e avaliações.
- Visualizar gráficos de desempenho relacionados a cursos, turmas, estudantes, questões e avaliações.
- Usar uma API local baseada nos dados de `api.json`; não é necessário configurar um serviço externo para iniciar o projeto.

## Limitações

- A API baseada em `json-server` é destinada ao desenvolvimento local, não a um ambiente de produção.
- A página `/questions/register` ainda é provisória e não implementa o cadastro de questões.

## Tecnologias

- Next.js 16 e React 19
- Tailwind CSS 4
- `json-server` para a API local de desenvolvimento

## Pré-requisitos

- Node.js 20.9.0 ou superior
- npm

## Instalação e configuração

Instale as dependências na raiz do repositório:

```bash
npm install
```

As variáveis de ambiente são opcionais para a configuração local padrão. Se precisar alterar os endereços, crie `.env.local` na raiz:

```dotenv
APP_BASE_URL=http://localhost:3000
API_BASE_URL=http://localhost:8000
```

`APP_BASE_URL` é o endereço do Next.js e `API_BASE_URL` é o endereço da API simulada. Esses são também os valores padrão usados pelo projeto quando as variáveis não estão definidas. Reinicie o servidor do Next.js após alterar o arquivo.

## Executar

Inicie a API simulada em um terminal:

```bash
npm run json-server
```

Ela ficará disponível em `http://localhost:8000`. Em outro terminal, inicie a aplicação:

```bash
npm run dev
```

Acesse `http://localhost:3000`. Para encerrar cada processo, use `Ctrl+C` no terminal correspondente.

O `json-server` usa `api.json` como arquivo de dados. Operações de escrita feitas pela aplicação podem alterar esse arquivo; mantenha uma cópia dos dados originais se quiser preservá-los.

## API local

As rotas da aplicação Next.js encaminham as operações para a API simulada. Os recursos disponíveis são:

| Recurso | Rota da aplicação |
| --- | --- |
| Estudantes | `/api/students` |
| Professores | `/api/teachers` |
| Cursos | `/api/courses` |
| Turmas | `/api/classrooms` |
| Questões | `/api/questions` |
| Avaliações | `/api/assessments` |
| Dados dos gráficos | `/api/chart_data` |
