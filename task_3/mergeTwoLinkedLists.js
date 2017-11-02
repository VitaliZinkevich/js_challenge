//  Примечание
// `l1` и `l2` не массив, вы не можете получить доступ к элементу по индексу `l1[0]`. 
// Это Линейный связный список – https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA

// `l1, l2` это `ListNode` и  имеет  только `.x` и `.next`. Декларация обьекта ниже. Вы не можете вносить изменения в объект.

var L1 = new Node([1, 2, 3], L2);
var L2 = new Node([5,10,15,40], null);

function ListNode(x) {
  this.value = x;
  this.next = null;
}


function mergeTwoLinkedLists(l1, l2) {

  var L3 = new Node([], null);


 while (L1.data.length != 0 && L2.data.length !=0 ) {

    if (L1.data[0] <= L2.data[0]) {

        L3.data.push (L1.data[0]) ;
        L1.data.shift();

    } else {

        L3.data.push(L2.data[0]);
        L2.data.shift();
    }
  }

   if (L1.data.length == 0) { L3.data = L3.data.concat (L2.data) }
   if (L2.data.length == 0) { L3.data = L3.data.concat (L1.data) }


  return L3.data;
  
  
}
