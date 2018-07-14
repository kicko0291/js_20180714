const myName = '光頭'

// if else 判斷式
// if ( 條件 ) { 執行 } else { 執行 }
// 條件 == > < 

if(myName=='光頭'){console.log('答對了')} else if (myName=='帥哥'){console.log('太見外了吧')}
else{console.log('答錯了！')}

if(3<5){console.log('yes')}


// for迴圈
// 第一個初始值，第二個結束條件，第三個中間流程
for(i=0;i<=5;i++){
    console.log(i)
}


//for結合array
let myBag = ['蘋果','水梨','香蕉']
for(i=0;i<myBag.length;i++){
    console.log(myBag[i])
    console.log(i)
}



// 隨機 random
let randomNumber = Math.random()
let randomNumber2 = Math.random()
console.log(randomNumber)
console.log(randomNumber2)



// 結合random和if else
if(randomNumber<0.5){
    console.log('今天運氣滿分')
}else{
    console.log('今天運氣不好')
}

//多個if else
if(randomNumber<0.25){
    console.log('你是帥哥')
}else if(randomNumber<0.5){
    console.log('普通普通')
}else if(randomNumber<0.75){
    console.log('醜')
}else{
    console.log('不好說....')
}


// 實務：發票兌獎檢查
const prize = 36822639
const myReceipt = [12343221,56234123,21245212,36822639,56234123,21245212,36822639]
myReceipt.forEach((shoot)=>{
let n = 0
    if(shoot==prize){
        n = n+1
        console.log('恭喜你中1張發票')
    }
})

// console.log('恭喜你中',n,'張發票')




// for(i=0;i<myReceipt.length;i++){
//     if(myReceipt[i]=prize){
//         console.log('恭喜你中一張發票')
//     }
// }


// 函數 function，()裡面是參數，命名叫什麼都可以，也可以不帶
// {}裡面為執行內容
// 之後要使用時，function_name()即可 
function myFunction(name,age){
    console.log('我的名字是：'+name+'，我的年齡是：',age)
}

myFunction('Kai',20)
myFunction('光頭',22)



// 定時 setTimeOut setinterval 
// 做一次 setTimeout( function(){ 執行 }, 毫秒 );
// 重複做 setinterval( function(){ 執行 }, 毫秒 );
// 中斷重複為ctrl+c

setTimeout(function(){
    console.log('我三秒會出來')
},2000)

let n1 = 0
setInterval(function(){
    n1 = n1+1
    console.log('我五秒會重複！這是第',n1,'次')
},5000)

//牛刀小試
//1.利用random隨機產生一組數字
//2.利用if else來判斷<0.2就顯示中獎，其餘顯示沒中獎(中獎機率20%)。
//3-1.利用setInterval，每5秒開一次獎。
//3-2.利用for迴圈連續開三次。


function lottery(){
    let randomNum = Math.random()
}


// let x = 0
// setInterval(function(){
//     let randomNum = Math.random()
//     x = x+1
//     if(x<=5){
//         console.log('開出第',x,'次獎項')
//         if(randomNum<0.2){
//             console.log('恭喜你中獎了！')
//         }else{
//             console.log('沒中！')
//         }
//     }

// },1000)






// for(i=0,i<5,i++){

// }