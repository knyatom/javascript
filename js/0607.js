// 상태
// 성공, 실패, 대기, 거부, 이행
// pending(대기), fullfill(이행)
// reject(거부)
// resolve(성공)

// console.log("시장에 가다");
// var pr = new Promise((resolve, reject) => {
//  setTimeout(() => {
//   resolve("치킨주문하다");
//   //reject("주문실패..")
//   // reject(new Error("주문실패.."))
//  }, 1000);
// });
// pr.then(function(result){
//  console.log(result+"가지러 가다")
// },function(err){
//  console.log("다시주문하세요")
// })
// console.log("양파를사고 마늘을 사다");

// pr.then((result)=>{
//  console.log(result);
// }).catch((err)=>{
//  console.log(err);
// }).finally(()=>{
//   console.log("끝");
//   // 로딩화면없앨때 사용하기도 한다.
// });

// // promise를 사용하지 않은 예제
// var f1=(callback)=>{
//  setTimeout(() => {
//   console.log("햄버거주문..");
//   callback();
//  }, 1000);
// }
// var f2=(callback)=>{
//  setTimeout(() => {
//   console.log("치킨주문..");
//   callback();
//  }, 3000);
// };
// var f3=(callback)=>{
//  setTimeout(() => {
//   console.log("피자주문..");
//   callback();
//  }, 2000);
// };
// f1(function(){
//   f2(function(){
//     f3(function(){
//       console.log("주문끝..");
//     })
//   })
// });
// 콜백지옥

// 프라미즈를 사용한 예제
// var F1=()=>{
//   return new Promise((res,rej)=>{
//    setTimeout(()=>{
//      res("1번 주문완료");
//    },1000)
//   });
// }
// var F2=(msg)=>{
//  console.log(msg);
//  return new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("2번 주문완료");
//    // rej("주문취소")
//   },2000)
//  });
// }
// var F3=(msg)=>{
//  console.log(msg);
//  return new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("3번 주문완료");    
//   },1000);
//  });
// }
// promise channing 프라미즈 체이닝
// console.log("주문시작");
// F1().then((res)=>F2(res))
// .then((res)=>F3(res))
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// .finally(()=>{
//  console.log("주문끝");
// });
// 하나의 정보가 누락되면 페이지정보를 보여주면
//안되는 곳에 사용한다.

// Promise.all
// Promise.race

// console.time("XX");
// Promise.all([F1(),F2(),F3()]).then((res)=>{
//  console.log(res);
//  console.timeEnd("XX");
// })

// console.time("X");
// Promise.race([F1(),F2(),F3()]).then((res)=>{
//  console.log(res);
//  console.timeEnd("X");
// });
// 하나라도 일등으로 완료되면 끝낸다.

// async, await
// 함수 키워드 function 앞에 async를 붙이면
// promise를 반환한다.
//  async function getName(){
//   return "이순신"
//  }
//  console.log(getName())

//  getName().then((name)=>{
//   console.log(name);
//  })

//  async function getName2(){
//   //return Promise.resolve("강감찬");
//   throw new Error("에러...^^")
//  }
//  getName2().then((name)=>{
//   console.log(name);
//  })
//  getName2().catch((err)=>{
//   console.log(err);
//  })
// // await 키워드는 async함수 내부에서만 사용한다.

// function getName3(name){
//  return new Promise((res,rej)=>{
//   setTimeout(()=>{
//    res(name);
//   },1000);
//  });
// }
// async function showName(){
//  var result=await getName3("을지문덕");
//  console.log(result);
// }
// console.log("시작..");
// showName();

// var 주문1=()=>{
//   return new Promise((res,rej)=>{
//    setTimeout(()=>{
//      res("1번 주문완료");
//    },1000)
//   });
// }
// var 주문2=()=>{
//  return new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("2번 주문완료");
//   },2000)
//  });
// }
// var 주문3=()=>{
//  return new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("3번 주문완료");
//   },3000)
//  });
// }
// console.log("주문시작");
//  async function 주문(){
//   const result1=await 주문1();
//   console.log(result1);
//   const result2=await 주문2(result1);
//   console.log(result2);
//   const result3=await 주문3(result2);
//   console.log(result3);
//   console.log("주문완료");
//  }
//  주문();

//  async function 주문(){
//   try{
//    var result=await Promise.all([주문1(),주문2(),주문3()]);
//    console.log(result);
//   }catch(e){
//    console.log(e);
//   }
//   console.log("종료")
//  }

 // Generator
 // 함수의 실행을 중간에 멈추었다가 재개할수 있는 기능
 // 제너레이터함수를 사용하면 제너레이터 객체를 반환하는데
 // next 객체가 있다.

 function* fn(){
  console.log("피자");
  yield 1;
  console.log("치킨");
  yield 2;
  console.log("햄버거");
  yield 3;
  return "finish";
 }
 var a=fn();
 console.log(a);
 console.log(a.next());
 console.log(a.next());
 console.log(a.next());
 console.log(a.next());

 function* fn2(){
  let index=0;
  while(true){ // 무한루프
   console.log(index);
   yield index++;
  }
 }

 var b=fn2();
 //console.log(b);
 console.log(b.next());
 console.log(b.next());
 console.log(b.next());
 console.log(b.next());
 console.log(b.next());
 // node.js 미들웨어에서 next() 함수가 나옵니다.

 // 웹서버와 WAS(와스)서버와 미들웨어에 대해서 찾아보자.
