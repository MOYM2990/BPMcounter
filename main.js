// クリックしたときの動作
let starttimer = new Date();
let clicktimer = new Date();
let count = 0;
let arr1=[];
document.getElementById("button").onclick = function(){
    // 波紋
    wave();

    // スタートタイマーを前回クリックしたときの時間に合わせる
    starttimer = clicktimer;
    // クリック２回目以降のとき処理を行う
    if(count>1) {
    clicktimer = new Date();
    // 60回/分をミリ秒で割って1000をかけて秒にする
    let timer= Math.floor(60/(clicktimer.getTime() - starttimer.getTime())*1000);
    // 配列に入れる
    arr1[count]=timer;
    // console.log(arr1[count]);
    // 中央値を求める
    // 真ん中の位置を取得
    const m = (arr1.length / 2) | 0;
    // ソートした配列を作る
    const arr2 = arr1.sort(
    function(x, y) {
    return x - y;
    });
    // 結果
        if(arr2.length<5) {document.getElementById("BPM").innerHTML = timer;}
        else if (arr2.length>=5 && arr2.length % 2) { 
        document.getElementById("BPM").innerHTML = arr2[m];
        }else{ 
        document.getElementById("BPM").innerHTML = (arr2[m - 1] + arr2[m] )/2;
        }
    }
    count++;
    document.getElementById("counter").innerHTML = count;
}

const wave =()=>{
    // 波を作る
    const waveDiv = document.createElement("div");
    waveDiv.className = "waveDivStyle";
    document.getElementById("waveParent").appendChild(waveDiv);

    // 最初の要素を削除
    const waveFirstChild = document.getElementById("waveParent").firstChild;
    setTimeout(waveFirstChild.remove(),1000);
}

// 平均値をとる場合
// // クリックしたときの動作
// let starttimer = new Date();
// let clicktimer = new Date();
// let count = 0;
// let timersum= 0;
// let average = 0;
// document.getElementById("button").onclick = function(){
//     // スタートタイマーを前回クリックしたときの時間に合わせる
//     starttimer = clicktimer;
//     // クリック２回目以降のとき処理を行う
//     if(count>1) {
//     clicktimer = new Date();
//     // 60回/分をミリ秒で割って1000をかけて秒にする
//     let timer=60/(clicktimer.getTime() - starttimer.getTime())*1000;
//     console.log(timer);
//         if(count>2){
//         timersum += timer;
//         }
//     average = Math.floor(timersum / (count+1));
//     document.getElementById("BPM").innerHTML = average;
//     }
//     count++;
//     document.getElementById("counter").innerHTML = count;
// }