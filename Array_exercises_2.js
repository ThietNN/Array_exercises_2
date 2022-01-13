
function Bai1() {
    var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    for (var i in a) {
        console.log("row " + i);
        for (var j in a[i]) {
            console.log(" " + a[i][j]);
        }
    }
}
function Bai2(){
    let a = ['c','s','c','2','6','1'];
    let x = 0;
    let y = a.length-1;
    for (x;x<a.length/2;){
        b = a[x];
        c = a[y];
        a[x] = c;
        a[y] = b;
        x++;
        y--;
    }
console.log(a.join(", "));
}

function Bai5(){
    let a = [];
    a[0] = Number(prompt("Nhập số đầu tiên trong chuỗi thứ nhất"));
    a[1] = Number(prompt("Nhập số thứ hai trong chuỗi thứ nhất"));
    a[2] = Number(prompt("Nhập số thứ ba trong chuỗi thứ nhất"));
    let b = [];
    b[0] = Number(prompt("Nhập số đầu tiên trong chuỗi thứ hai"));
    b[1] = Number(prompt("Nhập số thứ hai trong chuỗi thứ hai"));
    b[2] = Number(prompt("Nhập số thứ ba trong chuỗi thứ hai"));
    let d = 0
    for (let c=0;c<a.length;c++){
        if (a[c]==b[c]){
            d += 1
        }
    }
    if (d==3){
        alert("2 chuỗi giống nhau");
    }else{
        alert("2 chuỗi không giống nhau");
    }
}