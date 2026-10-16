var arr = [];

function Push(item) {

   
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

  
    arr[0] = item;
}

function Pull() {

    var last = arr[arr.length - 1];

  
    arr.length = arr.length - 1;

    return last;
}

Push("A");
Push("B");
Push("C");

console.log(arr);

console.log(Pull());

console.log(arr);