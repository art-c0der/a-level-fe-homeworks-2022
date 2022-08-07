# Опис завдань та їх виконання:
---
## Завдання №1

Створити функцію для підрахунку кількості голосних англійського алфавіту *(a, e, i, u, y)* в довільному тексті.

**Деталі:**

- функція повинна отримувати 1 аргумент (текст для пошуку *(string)*);
- а повертати в консоль кількість голосних, якщо такі є в тексті.

![task1](/img/task1.png)

---
**Виконання:**

1. Приклад №1:
![result1](/img/result1.png)
![example1](/img/example1.png)
![result2(2)](/img/result2(2).png)

2. Приклад №2:
![result2](/img/result2.png)
![example1](/img/example1.png)
![result2(2)](/img/result2(2).png)

3. Власна (трохи творчіша) реалізація:
![advanced1](/img/advanced1.png)
![advanced2](/img/advanced2.png)
![advanced3](/img/advanced3.png)

---
## Завдання №2

Пройти курс по основам [RegExp](​​https://regexone.com/);
Практичним завданням будуть **(не гулити!!!)** написати регулярний вираз для:

- валідного номеру мобільного телефон (орієнтовний формат **+000 1111 22 33**);

- валідного електронну адресу;
- визначення кредитні картки [(довідкова інфа)](https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.html):

| Card type      | Starts with | Length |
| ----------- | ----------- | ----------- |
| [American Express](https://en.wikipedia.org/wiki/American_Express)      | 34, 37       |     15        |
| [Mastercard](https://en.wikipedia.org/wiki/Mastercard)   | 51-55        |       16      |
| [Visa](https://en.wikipedia.org/wiki/Visa_Inc.) | 4 |      16       |

---

**Виконання:**

1. Спочатку я пройшов [курс](​​https://regexone.com/), потім зайшов на [regex101](https://regex101.com/) для створення регулярних виразів з онлайн переглядом:
    1. Регулярний вираз для номеру мобільного телефон:
    ![phoneNumber](/img/phoneNumber-pattern.png)
    2. Регулярний вираз для електронної адресси:
    ![phoneNumber](/img/e-mail-pattern.png)
    3. Регулярний вираз для кредитні картки:
    ![phoneNumber](/img/bankCrad-pattern.png)
2. Написав трохи коду для приємної візуалізації й перевірки роботоздатності регулярних виразів:
![exampleCode1](/img/exampleCode1.png)
![exampleCode2](/img/exampleCode2.png)

3. Отриманний результат:
![exampleCode2](/img/verifyResulr.png)