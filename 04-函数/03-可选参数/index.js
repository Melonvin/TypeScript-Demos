function add(x, y, z) {
    return x + y + z;
}
// add(1, 2);
// add(1, 2, 3, 4);
add(1, 2, 3);
function add1(x, y, z) {
    return x + y + z;
}
add1(1, 2); // 此时不会报错
// 可选参数不能出现在必须参数之前
function add2(x, y, z) {
    return x + y + z;
}
