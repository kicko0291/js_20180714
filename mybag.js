//常數為const，變數為let，用來替換會一直重複使用的
////會重複利用的東西，但他是一個常數
////單引號雙引號是一樣的
////逗點或加都可以
const topic = "我的文具包"
const topic_2 ="美工刀"
const topic_3 ='彩色筆'
console.log(topic,topic_2,topic_3)
console.log(topic+"wtfo壞掉了")

//練習let
////變數抓後面優先
////var是以前的const+let的意思
let apple = 5
apple = 10
let answer = (apple+3)*2
console.log('答案就是：',answer)



//command是兩個斜線，程式碼不會讀取



//我的背包內容物
//矩陣，稱作array，長的是左右中括弧，裡面就是放一堆集合的東西
//命名也是有規則的
let myBag = ['good think','a book','banana']
console.log(myBag)

//我的背包內容數量
//array的長度為length，.為執行甚麼function
let bagVol = myBag.length
console.log('我的背包理有',bagVol,"個物品")

//拿出我的書包的特定物品
//讀取方式為後面中括弧+第幾個(第一個為0，第二個為1...)
let take = myBag[2]
console.log('拿出我的背包',take)




//全部輪流拿出來
//forEach，矩陣的函數，前面的()的第一個代表了變數
//第二個代表索引(可不加)，都可自己命名
//後面的{}代表執行的內容
// myBag.forEach(()=>{})
myBag.forEach((thing,index)=>{
    console.log('我是迴圈',index)
    console.log('我拿出了',thing)
})


//加上時間 new Date()
let nowTime = new Date()
console.log(nowTime)

myBag.forEach((thing)=>{
    console.log('我拿出了',thing,'在',nowTime)
})

//放進新的 push
////push只會放在最後面
myBag.push('鳳梨')
console.log(myBag)



//拿走不要的 splice
//第一個參數為起始位置，第二個參數為結束位置，地三個參數是新增東西在剛剛刪除的位置
myBag.splice(0,3,'阿阿阿')
console.log(myBag)


//限定書包大小後，計算還剩多少空間
const limit = 10
let remainVol = limit - myBag.length
console.log('剩餘背包數量：',remainVol)




//牛刀小試
//今天台北市長參選人為柯文哲，丁守中，姚文智
//1.請用程式碼加入一個新的參選人
//2.列出現在有幾位參選人
//3.每個候選人分別說出：「你好，我是ＸＸＸ，請投給我！」
//從let candidate = ["柯文哲","丁守中","姚文智"]開始

//在終端機中顯示===>
//現在參選人有4位，請他們發言：）
//你好，我是柯文哲，請投給我！
//你好，我是丁守中，請投給我！
//你好，我是姚文智，請投給我！
//你好，我是KAI，請投給我！

let candidate = ["柯文哲","丁守中","姚文智"]
candidate.push('KAI')
console.log(candidate)

let candidateVol = candidate.length
console.log('現在參選人有',candidateVol,'位，請他們發言：）')

candidate.forEach((say)=>{
console.log('你好，我是',say,'，請投給我！')
})



//Object，也稱物件，外圍是大括弧，用來詳述事物
//跟array不同是它會放key和value（也就是欄位和值）
let newobeject = {
    name:'柳丁',
    adress:'台灣',
    count:2,
}
console.log(newobeject)


//Object可以直接讀取某個欄位
const thisAdress = newobeject.adress
// const thisAdress1 = newobeject['adress']
console.log('這個產地是',thisAdress)


//array裡也可以放Object（這就是JSON格式的組成！）
// let bag = ['蘋果','水梨','西瓜']
let fruitBag = [{
    name:'柳丁',
    adress:'台灣',
    count:2,
},{
    name:'奇異果',
    adress:'紐西蘭',
    count:1,
},{
    name:'紅毛丹',
    adress:'泰國',
    count:3
}]

console.log(fruitBag)



//複習：取array中的第一個，加上新觀念：抓取其中的address
console.log(fruitBag[1].name)


//複習：forEach的用法，加上object用法
fruitBag.forEach((fruit)=>{
    console.log(fruit.count,'個',fruit.name,'是從',fruit.adress,'來的')
})


//計算剩餘多少空間數量
const space = 10
let realSpace = space - fruitBag[0].count - fruitBag[1].count - fruitBag[2].count
console.log('剩餘真實數量的笨作法，背包理有幾個',realSpace)




//用forEach來解決
let smartspace = 10
fruitBag.forEach((fruit)=>{
    smartspace = smartspace-fruit.count
    //前面的smartspace是一個容器，裝新東西
    //後面的smartspace是上面定義的10個
    console.log('現在的smartspace',smartspace)
 })
 console.log('最終的smartspace',smartspace)



//牛刀小試
//1.請寫出一個自創的JSON的格式
//2.讀取任意欄位，顯示出來


let myJason = [{
    title:'總經理',
    department:'人事',
    salary:'100k'
},{
    title:'副理',
    department:'開發',
    salary:'80k'
},{
    title:'襄理',
    department:'設計',
    salary:'50k'
},{
    title:'助理',
    department:'打雜',
    salary:'20k'
}]

console.log(myJason)
console.log(myJason[1])
console.log(myJason['salary'])
// myJason.forEach((salary)=>{
//     console.log()
// })
