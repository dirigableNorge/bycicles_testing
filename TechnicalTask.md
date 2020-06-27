Ссылка на макет: [figma.com/file/tAcsPGsF0w5Im7FIndxEAX/Велосипеды-(Copy)?node-id=10%3A3](http://figma.com/file/tAcsPGsF0w5Im7FIndxEAX/%D0%92%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4%D1%8B-(Copy)?node-id=10%3A3)

Проект должен соответствовать критериям качества [https://www.notion.so/htmlacademy/3-dd8723beaf11462f9ae921a5be06d745](https://www.notion.so/htmlacademy/3-dd8723beaf11462f9ae921a5be06d745)

 При конфликте технического задания и критериев, считать техническое задание более приоритетным.

### **Общие технические требования**

1. Стандарты вёрстки: HTML5, CSS3, прогрессивное улучшение.
2. Сетка: определена в макете.
3. Раскладка блоков на странице делается с помощью флексбоксов.
4. Адаптивность сетки: мобильная, планшетная и десктопная версии. **Desktop First.** На всех промежуточных разрешениях используется резиновая вёрстка.
5. Используемая методология: БЭМ.
6. Используемые фреймворки: нет.
7. Используемый препроцессор: Sass (SCSS).
8. Используемый инструмент автоматизации: Gulp. [https://github.com/tsergeytovarov/gulp-template](https://github.com/tsergeytovarov/gulp-template)
9. Кроссбраузерность: Chrome, Firefox, Safari, Edge, Internet Explorer 11.
10. Графика не предоставляется и её необходимо вырезать самостоятельно. Правила работы с Figmа тут — [https://htmlacademy.ru/blog/useful/figma](https://htmlacademy.ru/blog/useful/figma)
11. Нестандартные шрифты подключены локально. Скачать можно с Google Fonts — [https://fonts.google.com/](https://fonts.google.com/)
12. JavaScript: минимальная реализация, модальные окна, переключения и так далее.

### **Пояснения по макету**

1. Необходимо выполнить верстку одной страницы с адаптивностью. Десктопная, планшетная и мобильная версии.
2. Брейкпоинты :
    - мобильная версия — 320px - 767px;
    - планшетная версия — 768px - 1023px;
    - десктопная версия — от 1024px и выше
3. При клике по пунктам меню, страница скроллит к соответствующему разделу

    [https://lh4.googleusercontent.com/gpNac_mzual1Wtvl2r8URx_My2UaNdn1CEf0DvAd78dIkYfImMe08usXl4DC_QjZ6clkiCaW-cCIu91JxwbFiQJqd8usrIITzvYKnxVgrxWuiKK7tA4aADJB1GyhsoeUlM5_2efv](https://lh4.googleusercontent.com/gpNac_mzual1Wtvl2r8URx_My2UaNdn1CEf0DvAd78dIkYfImMe08usXl4DC_QjZ6clkiCaW-cCIu91JxwbFiQJqd8usrIITzvYKnxVgrxWuiKK7tA4aADJB1GyhsoeUlM5_2efv)

4. Форма должна иметь валидацию.

    [https://lh6.googleusercontent.com/bRn7z9GB660vPQdDbi0Exq4ZuqJVcQGtVfzny3Dg4qWPPW-J-RUBxz26JDr0DndYeFcovuPqw9Oz7DKtheaoBihErxQAuuSnp34hyBSDrV7GxB2yzZJlHYwRFY-sdtsJa5OStVW8](https://lh6.googleusercontent.com/bRn7z9GB660vPQdDbi0Exq4ZuqJVcQGtVfzny3Dg4qWPPW-J-RUBxz26JDr0DndYeFcovuPqw9Oz7DKtheaoBihErxQAuuSnp34hyBSDrV7GxB2yzZJlHYwRFY-sdtsJa5OStVW8)

5. Видео можно вставить при помощи картинки. Кнопка Play должна быть кликабельна.

    [https://lh5.googleusercontent.com/nz5XSn8aTLRj3Nr2aeQcGOOc_QH_tnHhSEJOEoKZZaHWGzJbZvHkNekX9Z2EApmtGS6aNBkZixvhVrHIEYzluJQw2_tcoRFjGKoCuhH8nChngf6if1SFAeHufhCmBgojaa766NaC](https://lh5.googleusercontent.com/nz5XSn8aTLRj3Nr2aeQcGOOc_QH_tnHhSEJOEoKZZaHWGzJbZvHkNekX9Z2EApmtGS6aNBkZixvhVrHIEYzluJQw2_tcoRFjGKoCuhH8nChngf6if1SFAeHufhCmBgojaa766NaC)

6. Главное меню в мобильной и планшетной версии реализуется с применение JavaScript. Меню должны быть работоспособным при отключенном JavaScript.

    [https://lh3.googleusercontent.com/KoCk-kfWKYQaaQTNDII737xZfn5jJKG10NsM9Je1sUkvPKxcf_HfabiMUOM2jPqMaXMx2aDrxxavfE_fzj-yNcJtWfSz4-zBK3sq93umacWCxYP0M66mtmhBJXO4WplDTZbl0jlT](https://lh3.googleusercontent.com/KoCk-kfWKYQaaQTNDII737xZfn5jJKG10NsM9Je1sUkvPKxcf_HfabiMUOM2jPqMaXMx2aDrxxavfE_fzj-yNcJtWfSz4-zBK3sq93umacWCxYP0M66mtmhBJXO4WplDTZbl0jlT)

    В HTML- и CSS-коде должны быть предусмотрены элементы и правила для трёх возможных состояний:

    - Открытое меню потоке при отключённом JavaScript;
    - Открытое меню вне потока при включённом JavaScript;
    - Закрытое меню.

    Скрипт открытия и закрытия меню должен работать так:

    - При инициализации скрипта меню должно убираться из потока (если в макете открытое меню не в потоке) и закрываться;
    - При клике на гамбургер меню открывается. Появляется кнопка-закрытие, убирается кнопка-гамбургер;
    - При клике на закрытие меню закрывается, убирается кнопка-закрытие, появляется гамбургер.
