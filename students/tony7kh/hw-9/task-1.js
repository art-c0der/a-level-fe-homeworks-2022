console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);

// output:
// 1 - потрапляє безпосередньо в console із call stack
// 7 - потрапляє безпосередньо в console із call stack
// 3 - потрапляє через promise у web api, згодом( майже одразу) потрапляє у callback queue і через те що call stack пустий - одразу у консоль
// 5 - потрапляє через promise у web api, згодом( майже одразу) потрапляє у callback queue і через те що call stack пустий - одразу у консоль
// 2 - була першая у callback queue за таймером тому одразу після очищення call stack попала у консоль
// 6 - наступна у callback queue за двійкою тому одразу після очищення call stack попала у консоль
// 4 - через те що була у primise та ще і з timeout опинилась у консолі останньою
