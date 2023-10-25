//function2.js
console.log('function2.js');

        //함수선언
        // function myFun(std, score = 100){
        //     // if(score == undefined){
        //     //     score = 100;
        //     // }     //이렇게 if문을 사용해도 되고 위에 바로 적어줘도 됨
        //     console.log(`${std}의 점수는 ${score}점 입니다.`)
        //     return score; //리턴이 없으면 undefined를 반환
        // }


        //함수표현식
        var myFun = function myFun(std, score = 100){
            console.log(`${std}의 점수는 ${score}점 입니다.`)
            return score;
        }
        // let myFun = myFun('홍길동');
        console.log(myFun('홍길동'));

    