/**
 * 객체를 생성하는 함수 : 생성자 함수
 * 일반함수를 정의하는 형식으로 사용해야 함!!
 */
//method
getName: function() {return this.name;},
getEmoji: function() {return this.emoji;},
display: function() {
    console.log(this.name, this.emoji);
}









console.log(fruits);
console.log(fruits.display);
console.log(fruits.display());
console.log(fruits.getName());
console.log(fruits.getEmoji);



function Apple (name, emoji){
    this.name = 'apple';
    this.emoji = '🍎';
}