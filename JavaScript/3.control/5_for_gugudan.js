/**
 * 구구단 출력 : 2 ~ 9 단
 * 2*1=2    3*1=3   ...
 * ...
 * 2*9=2    3*9=3   ...
 */

for(let i=1; i<10; i++) {
    let rows = '';
    for(let j=2; j<10; j++) {
        rows += `${j}*${i} = ${i*j}\t`;
    }
    console.log(rows);
    
}










