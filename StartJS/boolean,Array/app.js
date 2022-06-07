const youFat = true;
console.log(youFat);
// true , false , null이 있다.

const mon = "mon";
const tue = "tue";
const wed = "wed"; 
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// 위에 보기쉽게 배열 할 수 있다 ( Array )
// 또한 Array는 []로 시작해야함 그리고 반점으로 분리시킨다.

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
console.log(daysOfWeek);
console.log(daysOfWeek[0]);

// 0부터 숫자를 세고 내가 호출할 변수를 ()안에 []로 정한다.

daysOfWeek.push("무슨요일이냐");
console.log(daysOfWeek);

// push로 내가 array에 더 추가 할 수 있다. 

