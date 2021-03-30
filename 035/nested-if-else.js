let numOne = 6, numTwo = -6, numThree = 16;
if ( numOne > numTwo ) {
    if (numOne > numThree) {
        console.log(`numOne holds ${numOne} which is the greater than both numTwo &\ numThree`);
    } else {
        console.log(`numThree holds ${numThree} which is the greater than both numOne &\ numTwo`);
    }
} else {
    if ( numTwo > numThree) {
        console.log(`numTwo holds ${numTwo} which is the greater than both numOne &\ numThree`);
    } else {
        console.log(`numThree holds ${numThree} which is the greater than both numOne &\ numTwo`);
    }
}