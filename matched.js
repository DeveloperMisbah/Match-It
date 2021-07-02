function matched() {
    let array1 = myAnsArr;
    let array2 = frndAnsArr;
    let str = "";
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) != -1) {
            str += array1[i] + ' ';
        };
    }

    return str;
}

console.log(matched());
