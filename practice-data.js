window.PYTHON_TOPICS = [
  {
    "id": "basics-1",
    "section": "basics",
    "title": "Знайомство з Python",
    "concept": "Python виконує команди послідовно. print() показує повідомлення.",
    "story": "Робот вітає команду. Передбачте його повідомлення.",
    "code": "print(\"Вітаю, командо!\")",
    "answer": "Вітаю, командо!",
    "prompt": "Який файл містить програму Python?",
    "options": [
      "robot.jpg",
      "robot.py",
      "robot.pdf"
    ],
    "correct": 1,
    "hint": "Файли Python мають розширення .py.",
    "program": [
      "message = \"Готові до старту\"",
      "print(message)"
    ],
    "goal": "збережіть повідомлення у змінній і виведіть його"
  },
  {
    "id": "basics-2",
    "section": "basics",
    "title": "Hello World",
    "concept": "Текст у print() беруть у лапки. Регістр літер має значення.",
    "story": "На табло має з’явитися назва експедиції.",
    "code": "print(\"Місія Марс\")",
    "answer": "Місія Марс",
    "prompt": "Оберіть команду для повідомлення Старт.",
    "options": [
      "print(Старт)",
      "print \"Старт\"",
      "print(\"Старт\")"
    ],
    "correct": 2,
    "hint": "Круглі дужки та лапки потрібні разом.",
    "program": [
      "title = \"Hello, Mars!\"",
      "print(title)"
    ],
    "goal": "створіть назву місії та виведіть її"
  },
  {
    "id": "basics-3",
    "section": "basics",
    "title": "Виведення: print()",
    "concept": "print(a, b) за замовчуванням розділяє аргументи пробілом.",
    "story": "Кібершеф друкує талон замовлення.",
    "code": "dish = \"Піца\"\nprint(dish, 2)",
    "answer": "Піца 2",
    "prompt": "Яка команда виведе Ціна: 80?",
    "options": [
      "print(\"Ціна:\", 80)",
      "print(\"Ціна:\" + 80)",
      "input(\"Ціна: 80\")"
    ],
    "correct": 0,
    "hint": "Аргументи різних типів можна відділити комою.",
    "program": [
      "price = 80",
      "count = 3",
      "total = price * count",
      "print(\"До сплати:\", total)"
    ],
    "goal": "задайте ціну, кількість, обчисліть суму й виведіть чек"
  },
  {
    "id": "basics-4",
    "section": "basics",
    "title": "Змінні та типи даних",
    "concept": "str — текст, int — ціле число, float — дробове. Змінну створює присвоєння.",
    "story": "Для подорожі придбали воду.",
    "code": "bottles = 3\nvolume = 1.5\nprint(bottles * volume)",
    "answer": "4.5",
    "prompt": "Як зберегти число 2,5 для обчислень?",
    "options": [
      "volume = \"2.5\"",
      "volume = 2.5",
      "2volume = 2.5"
    ],
    "correct": 1,
    "hint": "У дробовому числі в коді використовуйте крапку.",
    "program": [
      "distance = 120",
      "hours = 3",
      "speed = distance / hours",
      "print(speed)"
    ],
    "goal": "задайте відстань, час, обчисліть і виведіть швидкість"
  },
  {
    "id": "basics-5",
    "section": "basics",
    "title": "Введення: input()",
    "concept": "input() повертає текст. int() перетворює текст цілого числа на число.",
    "story": "Користувач вводить 4. Скільки батарей залишиться після бонусу?",
    "code": "count = int(input())\nprint(count + 2)",
    "answer": "6",
    "prompt": "Як отримати дробову температуру?",
    "options": [
      "temperature = input() + 1",
      "temperature = int(input())",
      "temperature = float(input())"
    ],
    "correct": 2,
    "hint": "Для дробових чисел потрібен float().",
    "program": [
      "count = int(input(\"Квитки: \"))",
      "price = 50",
      "total = count * price",
      "print(total)"
    ],
    "goal": "запитайте кількість квитків, задайте ціну 50, обчисліть і виведіть вартість"
  },
  {
    "id": "conditions-1",
    "section": "conditions",
    "title": "Коротке розгалуження",
    "concept": "Тіло if виконується лише за істинної умови; відступ позначає тіло.",
    "story": "Дрон має попередити про низький заряд.",
    "code": "charge = 15\nif charge < 20:\n    print(\"Зарядити\")",
    "answer": "Зарядити",
    "prompt": "Яка умова попередить і при заряді рівно 20?",
    "options": [
      "charge < 20",
      "charge <= 20",
      "charge > 20"
    ],
    "correct": 1,
    "hint": "Перевірте граничне значення 20.",
    "program": [
      "charge = 10",
      "if charge <= 20:",
      "    print(\"Потрібна зарядка\")"
    ],
    "goal": "задайте заряд 10 та виведіть попередження за заряду до 20 включно"
  },
  {
    "id": "conditions-2",
    "section": "conditions",
    "title": "Повне розгалуження",
    "concept": "У if / else виконується одна з двох гілок.",
    "story": "Квитковий автомат перевіряє, чи вистачає грошей.",
    "code": "money = 40\nif money >= 50:\n    print(\"Квиток\")\nelse:\n    print(\"Бракує коштів\")",
    "answer": "Бракує коштів",
    "prompt": "Яка умова дозволить купівлю, якщо грошей рівно стільки, як коштує квиток?",
    "options": [
      "money > price",
      "money < price",
      "money >= price"
    ],
    "correct": 2,
    "hint": "Достатньо грошей означає більше або дорівнює.",
    "program": [
      "money = 60",
      "if money >= 50:",
      "    print(\"Куплено\")",
      "else:",
      "    print(\"Поповніть баланс\")"
    ],
    "goal": "задайте баланс 60 та виберіть повідомлення про купівлю"
  },
  {
    "id": "conditions-3",
    "section": "conditions",
    "title": "Складене розгалуження",
    "concept": "elif перевіряють, якщо попередні умови хибні. Перша істинна гілка завершує вибір.",
    "story": "Датчик класифікує температуру води.",
    "code": "t = 0\nif t < 0:\n    print(\"Мороз\")\nelif t == 0:\n    print(\"Нуль\")\nelse:\n    print(\"Тепло\")",
    "answer": "Нуль",
    "prompt": "Яка перевірка означає рівність?",
    "options": [
      "t = 0",
      "t == 0",
      "t != 0"
    ],
    "correct": 1,
    "hint": "= присвоює, == порівнює.",
    "program": [
      "score = 85",
      "if score >= 90:",
      "    print(\"Золото\")",
      "elif score >= 70:",
      "    print(\"Срібло\")",
      "else:",
      "    print(\"Тренуйтеся\")"
    ],
    "goal": "задайте 85 балів і виберіть золото від 90, срібло від 70, інакше тренування"
  },
  {
    "id": "conditions-4",
    "section": "conditions",
    "title": "Використовуємо логіку",
    "concept": "and вимагає обох умов; or — хоча б однієї; not заперечує.",
    "story": "У лабораторію пускають лише з перепусткою та шоломом.",
    "code": "badge = True\nhelmet = False\nprint(badge and helmet)",
    "answer": "False",
    "prompt": "Яка умова дозволяє вхід за квитком АБО запрошенням?",
    "options": [
      "ticket and invitation",
      "not ticket",
      "ticket or invitation"
    ],
    "correct": 2,
    "hint": "Достатньо однієї з двох підстав.",
    "program": [
      "badge = True",
      "helmet = True",
      "allowed = badge and helmet",
      "print(allowed)"
    ],
    "goal": "задайте наявність перепустки та шолома, визначте й виведіть дозвіл"
  },
  {
    "id": "loops-1",
    "section": "loops",
    "title": "Цикл for",
    "concept": "range(n) дає числа від 0 до n−1. У циклі можна накопичувати суму.",
    "story": "Робот підраховує зібрані за три дні зразки.",
    "code": "total = 0\nfor n in range(1, 4):\n    total += n\nprint(total)",
    "answer": "6",
    "prompt": "Який діапазон дає числа 1, 2, 3, 4, 5?",
    "options": [
      "range(5)",
      "range(1, 6)",
      "range(1, 5)"
    ],
    "correct": 1,
    "hint": "Права межа range не входить у діапазон.",
    "program": [
      "total = 0",
      "for n in range(1, 6):",
      "    total += n",
      "print(total)"
    ],
    "goal": "накопичте суму чисел від 1 до 5 і виведіть її"
  },
  {
    "id": "loops-2",
    "section": "loops",
    "title": "Цикл while",
    "concept": "while повторюється, доки умова істинна. Змінюйте значення, від якого залежить завершення.",
    "story": "Акумулятор заряджається порціями по 10 одиниць.",
    "code": "charge = 20\nwhile charge < 50:\n    charge += 10\nprint(charge)",
    "answer": "50",
    "prompt": "Яка дія завершить цикл while fuel < 100?",
    "options": [
      "fuel -= 10",
      "fuel = 0",
      "fuel += 10"
    ],
    "correct": 2,
    "hint": "Значення має наближатися до межі 100.",
    "program": [
      "fuel = 0",
      "while fuel < 30:",
      "    fuel += 10",
      "print(fuel)"
    ],
    "goal": "почніть з 0 пального, додавайте по 10 до 30 і виведіть результат"
  },
  {
    "id": "data-1",
    "section": "data",
    "title": "Списки",
    "concept": "Список зберігає впорядковані елементи. Індекси починаються з нуля; append додає елемент.",
    "story": "До рюкзака додали аптечку.",
    "code": "bag = [\"вода\", \"карта\"]\nbag.append(\"аптечка\")\nprint(len(bag))",
    "answer": "3",
    "prompt": "Як прочитати перший предмет?",
    "options": [
      "bag[1]",
      "bag[0]",
      "bag(0)"
    ],
    "correct": 1,
    "hint": "Перший елемент має індекс 0.",
    "program": [
      "bag = [\"вода\", \"карта\"]",
      "bag.append(\"ліхтар\")",
      "count = len(bag)",
      "print(count)"
    ],
    "goal": "створіть рюкзак, додайте ліхтар, обчисліть і виведіть кількість предметів"
  },
  {
    "id": "data-2",
    "section": "data",
    "title": "Словники",
    "concept": "Словник пов’язує ключ зі значенням. Доступ: data[key].",
    "story": "Магазин показує ціну води після оновлення.",
    "code": "prices = {\"вода\": 20}\nprices[\"вода\"] = 25\nprint(prices[\"вода\"])",
    "answer": "25",
    "prompt": "Як безпечно отримати відсутню ціну зі значенням 0?",
    "options": [
      "prices[\"сік\"]",
      "prices.get(\"сік\", 0)",
      "prices(0)"
    ],
    "correct": 1,
    "hint": "Метод get дозволяє задати типове значення.",
    "program": [
      "stock = {\"вода\": 5}",
      "stock[\"вода\"] -= 1",
      "left = stock[\"вода\"]",
      "print(left)"
    ],
    "goal": "створіть запас води 5, зменште на 1, збережіть і виведіть залишок"
  },
  {
    "id": "data-3",
    "section": "data",
    "title": "Кортежі",
    "concept": "Кортеж — впорядкована незмінна послідовність. Його можна розпакувати у змінні.",
    "story": "Ровер отримав незмінні координати.",
    "code": "point = (3, 7)\nx, y = point\nprint(x + y)",
    "answer": "10",
    "prompt": "Яка операція з кортежем дозволена?",
    "options": [
      "point[0] = 5",
      "point.append(5)",
      "x = point[0]"
    ],
    "correct": 2,
    "hint": "Читати елементи можна, змінювати — ні.",
    "program": [
      "point = (3, 7)",
      "x, y = point",
      "distance = x + y",
      "print(distance)"
    ],
    "goal": "задайте координати, розпакуйте їх, обчисліть суму та виведіть її"
  },
  {
    "id": "data-4",
    "section": "data",
    "title": "Множини",
    "concept": "Множина містить унікальні значення. Її порядок не слід використовувати як гарантований.",
    "story": "Порахуйте різні типи зібраних відходів.",
    "code": "items = [\"скло\", \"папір\", \"скло\"]\nprint(len(set(items)))",
    "answer": "2",
    "prompt": "Як знайти спільні інтереси множин a та b?",
    "options": [
      "a | b",
      "a & b",
      "a - b"
    ],
    "correct": 1,
    "hint": "& означає перетин.",
    "program": [
      "a = {\"код\", \"музика\"}",
      "b = {\"код\", \"спорт\"}",
      "common = a & b",
      "print(len(common))"
    ],
    "goal": "задайте дві множини інтересів, знайдіть перетин і виведіть його розмір"
  },
  {
    "id": "functions-1",
    "section": "functions",
    "title": "Створення функцій",
    "concept": "def створює функцію; її тіло виконується під час виклику. return повертає результат.",
    "story": "Перевірте повідомлення робота після виклику.",
    "code": "def signal():\n    return \"Готово\"\nprint(signal())",
    "answer": "Готово",
    "prompt": "Який запис викликає функцію signal?",
    "options": [
      "def signal():",
      "signal",
      "signal()"
    ],
    "correct": 2,
    "hint": "Для виклику потрібні круглі дужки.",
    "program": [
      "def signal():",
      "    return \"Старт\"",
      "message = signal()",
      "print(message)"
    ],
    "goal": "оголосіть функцію сигналу, збережіть її результат і виведіть його"
  },
  {
    "id": "functions-2",
    "section": "functions",
    "title": "Функції з параметрами",
    "concept": "Параметри отримують значення аргументів. Повернений результат можна зберегти.",
    "story": "Функція обчислює вартість квитків.",
    "code": "def cost(count, price):\n    return count * price\nprint(cost(3, 40))",
    "answer": "120",
    "prompt": "Який виклик обчислить вартість 2 квитків по 50?",
    "options": [
      "cost(50)",
      "cost(2, 50)",
      "cost = (2, 50)"
    ],
    "correct": 1,
    "hint": "Передайте два аргументи в потрібному порядку.",
    "program": [
      "def cost(count, price):",
      "    return count * price",
      "total = cost(2, 50)",
      "print(total)"
    ],
    "goal": "оголосіть функцію вартості, обчисліть ціну двох квитків по 50 і виведіть її"
  },
  {
    "id": "libraries-1",
    "section": "libraries",
    "title": "Знайомство з бібліотеками",
    "concept": "Модулі додають готові можливості. Стандартні math і random доступні без pip.",
    "story": "Оцініть довжину сторони квадратного майданчика площею 81.",
    "code": "import math\nprint(math.isqrt(81))",
    "answer": "9",
    "prompt": "Яка команда генерує ціле число від 1 до 6 включно?",
    "options": [
      "random.randint(1, 6)",
      "random.random(1, 6)",
      "random.randint(1, 5)"
    ],
    "correct": 0,
    "hint": "randint включає обидві межі.",
    "program": [
      "import math",
      "area = 144",
      "side = math.isqrt(area)",
      "print(side)"
    ],
    "goal": "імпортуйте math, задайте площу 144, визначте сторону і виведіть її"
  },
  {
    "id": "libraries-2",
    "section": "libraries",
    "title": "Бібліотека Turtle",
    "concept": "Turtle малює рухом черепашки. forward — крок, right — поворот у градусах.",
    "story": "Черепашка креслить квадрат. Який сумарний шлях вона пройде?",
    "code": "for _ in range(4):\n    turtle.forward(60)\n    turtle.right(90)\n# Відповідь — довжина шляху, а не виведення print().",
    "answer": "240",
    "prompt": "Який поворот потрібний для рівностороннього трикутника?",
    "options": [
      "right(60)",
      "right(120)",
      "right(90)"
    ],
    "correct": 1,
    "hint": "Зовнішній поворот: 360 / 3.",
    "program": [
      "import turtle",
      "for _ in range(4):",
      "    turtle.forward(60)",
      "    turtle.right(90)",
      "turtle.done()"
    ],
    "goal": "імпортуйте turtle, намалюйте квадрат зі стороною 60 і завершіть малювання"
  },
  {
    "id": "libraries-3",
    "section": "libraries",
    "title": "Бібліотека Pygame Zero",
    "concept": "Pygame Zero викликає draw() для малювання і update() для оновлення стану. Запуск локально: pgzrun game.py.",
    "story": "Герой за три оновлення зміщувався вправо на 5. Яка координата x?",
    "code": "x = 10\nfor _ in range(3):\n    x += 5\nprint(x)",
    "answer": "25",
    "prompt": "Де слід оновлювати координату героя?",
    "options": [
      "У draw()",
      "У update()",
      "У назві файлу"
    ],
    "correct": 1,
    "hint": "draw малює, update змінює стан.",
    "program": [
      "WIDTH = 400",
      "HEIGHT = 300",
      "def draw():",
      "    screen.clear()",
      "    screen.draw.filled_circle((200, 150), 30, \"yellow\")"
    ],
    "goal": "задайте ширину, висоту вікна, створіть draw, очистіть екран і намалюйте коло"
  },
  {
    "id": "libraries-4",
    "section": "libraries",
    "title": "Бібліотека Tkinter",
    "concept": "Tkinter створює графічні вікна. command отримує функцію, pack розміщує віджет, mainloop запускає цикл подій.",
    "story": "Лічильник починається з нуля. Яке значення після трьох натискань?",
    "code": "count = 0\n# Обробник кожного натискання:\n# count += 1\n# Введіть значення після 3 натискань.",
    "answer": "3",
    "prompt": "Як передати обробник click кнопці без негайного виклику?",
    "options": [
      "command=click()",
      "command=\"click\"",
      "command=click"
    ],
    "correct": 2,
    "hint": "Передайте саму функцію без дужок.",
    "program": [
      "import tkinter as tk",
      "root = tk.Tk()",
      "button = tk.Button(root, text=\"Вітаю!\")",
      "button.pack()",
      "root.mainloop()"
    ],
    "goal": "імпортуйте tkinter, створіть вікно, кнопку, розмістіть її та запустіть цикл подій"
  }
];
