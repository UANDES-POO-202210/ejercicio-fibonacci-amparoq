function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    if(n>1){
        let fi=[0,1];
        num=2;
        while(num<=n){
            fnum=fi[num-1]+fi[num-2];
            fi.push(fnum);
            num++;
        }
        return fi[fi.length-1];
    }
}

const fs = require('fs')
  
fs.readFile('archivo.txt', (err, data) => {
    if (err) throw err;
    const string=data.toString()
    const number=parseInt(string);
    const f=fibonacci(number);
    const sentence=`F(${number})=${f}`;
    console.log(sentence);
})