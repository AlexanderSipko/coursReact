# *Обучение React*

![React](public/logo192.png)

[курс stepik](https://stepik.org/lesson/680793/step/1?unit=679478)

## *Заметки*

+ жизненные циклы `React component`
  + при написании `componentDidMount`:
    в момент проверки наличия в локальном хранилище ключа запись его значения в `state components`
    по факту это избыточно, так как в методе `componentDidUpdate` будет автоматически записан или
    перезаписан
    + [x] чек--бокс--1
    + [ ] чек--бокс--2

    [вложенная страница](titel.md)
  + при создании метода содержащего `setInterval` убрать из функции обновления убран `set.isCount`, так как это избыточно обновлять каждый раз при вызове интервала
