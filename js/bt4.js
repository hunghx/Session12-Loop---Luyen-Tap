// vẽ hình đầu tiên
// let j = "";
// for(let i = 1 ; i <= 5;i++){
//     j += "*"
//    document.writeln(j)
// }
// vẽ hình thứ 2
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i <= j) {
      // i>=j || i+j >=6 || i+j <=6
      document.write("*");
    } else {
      document.write(" ");
    }
  }
  document.writeln();
}

// i = 1
// j =""+"*"="*"
//i =2
// j = "*"+"*" = "**"
//     *
//    ***
//   *****
//  *******
// *********
//  i+j=6; j-i=4

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 9; j++) {
    if (i + j >= 6 && j-i <=4) {
      document.write("*");
    } else {
      document.write(" ");
    }
  }
  document.writeln();
}
