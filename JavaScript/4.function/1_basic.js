/**
 * 함수 정의 : 자바스크립의 함수는 object 이다!!
 * 1. 일반적인 함수 정의 
 * function 함수명 () {
 *      실행 코드 생성;
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 3. 자바스크립트 엔진은 빌트인 함수를 포함하고 있다.
 * - 예) parseInt(), parseDouble() ...
 * 
 *  함수 호출 : 함수면(파라미터);
 */

const { useDeferredValue } = require("react");

//빌트인 함수 parseInt(정수변환 값);
let str = '10';
let number = parseInt(str);
let float = parseFloat(str);
console.log(str, typeof str);
console.log(number, typeof number);
console.log(float, typeof float);

//두 수를 입력받아, 합계를 출력
let num1 = 100;
let num2 = 20;
console.log(`sum = ${num1 + num2}`);

//함수를 이용하여 합계를 출력
function sum() {
    let num1 = 100;
    let num2 = 120;
    console.log(`sum = ${num1 + num2}`);
    
}
