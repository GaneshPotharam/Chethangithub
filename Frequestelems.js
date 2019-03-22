var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostfrqnt = 1, k = 0, element;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                k++;
                if (mostfrqnt<k)
                {
                    mostfrqnt=k; 
                  element = arr1[i];
                }
        }
        k=0;
}
console.log( element + " ( " + mostfrqnt +" times ) ") ;