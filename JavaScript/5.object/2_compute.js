const person = {
    name: '홍길동',
    age: 20,
    job: '개발자'
}

const fruits = {
    name: 'apple',
    emoji: '🍎'
}

//person 객체를 이용하여 CRUD 작업을 진행하는 함수 정의
//setObject, getObject, updateObject, deleteObject
//Arrow function
//1. person 객체에 프로퍼티 추가
const setObject = (obj, key, value) => {
    obj[key] = value;
}

//2.객체의 프로퍼티 값 변환
const getObject = (obj, key) => {
    return obj[key];
}

//3. 객체의 프로퍼티 값 추가
const updateObject = () => {}

//4. 객체의 프로퍼티 삭제
const deleteObject = (obj, key) => {
    delete obj[key];
}

// console.log(getObject(person, 'name'));
setObject(person, 'address', '강남구');
let job = getObject(person, job);
updateObject(person, age, 32);
deleteObject(person, 'job');

console.log(person);


// getObject(fruits, job);

// setObject(fruits, 'color','red');
// getObject()
