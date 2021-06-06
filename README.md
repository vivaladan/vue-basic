# Vue Basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [Vue.js](https://vuejs.org/) apps in minutes. Use this repo with the [Vue quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=vue) to build and customize a new static site.

## Project setup

```bash
npm install
npm install -g azure-functions-core-tools@3 --unsafe-perm true
```

### Compiles and hot-reloads for development

```bash
swa start http://localhost:8080 --run "npm run serve" --api "http://localhost:7071"
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
