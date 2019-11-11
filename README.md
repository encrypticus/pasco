# Стартовый репозиторий с webpack

**Основная идея проекта — разделение кода конфигурационного файла сборщика для удобства использования и дальнейшего расширения, а также содержание файла конфига в порядке.
Необходимые модули загрузчиков, плагинов, опций и пресетов сборщика находятся в папке webpack. Для соединения файлов используется плагин [webpack-merge](https://github.com/survivejs/webpack-merge).
Проект является стартовым шаблоном для frontend-разработки c webpack. Клонируйте репозиторий на свой компьютер, и положите исходные файлы вашего проекта в папку src.**

Общий код для продакшена и для разработки находится в отдельном объекте "commonConfig".
Код отдельно для продакшена и отдельно для разработки будет добавлен в зависимости от значения переменной ```mode```.
Переменная ```mode``` передается через скрипты в ```package.json``` и доступна в коде файлов конфига сборщика
через ```process.env.mode``` (```env``` - свойство глобального объекта process в nodejs ).

## Команды

```bash
npm run prod         # сборка проекта
npm run dev-server   # запуск сервера разработки
npm run browser-sync # запуск сервера разработки с browser-sync
npm run deploy       # отправка содержимого папки сборки на gh-pages
```

## Структура

```bash
dist/                # папка сборки
src/                 # исходники
  pages/             # папка с примерами разбиения страниц на блоки
    blog/            # блок blog
      index.html     # страница блока
      index.js       # скрипт блока
    index/           # блок index
      index.html     # страница блока 
      index.js       # скрипт блока
webpack/             # папка с отдельными модулями сборщика
  configs/           # папка с конфигами для линтеров, постпроцессора и babel-loader'а
  loaders/           # папка с модулями загрузчиков (loaders)
  options/           # папка с модулями опций сборщика
  plugins/           # папка с модулями плагинов
  presets/           # папка с модулями пресетов  
```