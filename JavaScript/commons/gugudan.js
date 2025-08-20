/**
 * 싱글 구구단 - 단 하나를 매개변수로 입력받아 출력
 */
function singleGugudan(dan) {
    for(let i=1; i<9; i++){
        console.log(`${dan}*${i} = ${dan*1}`);
    }
}

singleGugudan(2);