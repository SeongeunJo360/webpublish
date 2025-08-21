/**
 * 클래스란? 객체를 생성하기 위한 틀(설계도)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
class Animal {
    //생성자
    constructor(name, emoji){
        this.name = name;
        this.emoji = emoji;
    }
    //메소드
    display = () => {console.log(this.name, this.emoji);
    }
}

let dog = new Animal('해피','🐶')
dog.display();