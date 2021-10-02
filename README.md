# Development of Shopping Memo

## Introduction

The application implements a shopping list.

## Features

* backend: .Net 6 Web API
* frontend: React 17

## Project initialization

```
C:\Dev\GitHub\leberns\
git clone https://github.com/leberns/ShoppingMemo.git
cd ShoppingMemo\
dotnet new react
```

```
cd C:\Dev\GitHub\leberns\ShoppingMemo\ClientApp\
npm uninstall bootstrap
npm uninstall react-router-bootstrap
npm uninstall reactstrap
npm uninstall jquery
npm prune
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @emotion/react
npm install @emotion/styled
```

## Development

### Production Build
```
cd C:\Dev\GitHub\leberns\ShoppingMemo\ClientApp\
npm run-script build
```

### Debugging
```
cd C:\Dev\GitHub\leberns\ShoppingMemo\
dotnet run
```
