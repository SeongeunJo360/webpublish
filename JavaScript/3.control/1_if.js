/**
 * if, if ~ else, if ~ else if ... ~ else
 * 삼함연산자 : (조건문) ? true인 경우 실행문 : false인 경우 실행문;
 */

//입력되는 과일명이 apple인 경우에만 이모지 출력
//apple 이외의 과일은 이름 출력
let fruit = 'apple';
if (fruit === 'apple') {
    console.log('🍎');
} else {
    console.log(fruit);
    
}

//위에 if문을 삼항연산자로 변환
(fruit === 'apple') ? result = '🍎' : result = fruit;
console.log('result => ${result}');

//선택한 메뉴를 출력
let menus = ['pizza', 'hotdog', 'coffee'];
if(selectMenu === menu[0]) {
    console.log('🍕');
}else if(selectMenu === menus[1]) {
    console.log('🌭');
}else if(selectMenu === menus[2]) {
    console.log('☕');
}else {
    console.log('메뉴 준비중~');
}