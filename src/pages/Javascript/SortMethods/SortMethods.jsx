import { useState } from 'react'

const ListSortMethods = {
    insertion: 'sortInsertion',

}

export default function SortMethods(){

    const arr = [20,2,8,13,17,35,22];

    const [sort, setSort] = useState(arr);

    function sortInsertion (array) {
        
        for(let i=0; i < array.length; i ++){
            let val = array[i]
            let j = i - 1 
            while(j >= 0 && array[j] > val){
                array[j + 1] = array[j];
                j=j-1;
            }
            array[j + 1] = val 
        }
        return array
    }
 
    function sortBubble (array) {
        // 2 loops, compara el primero y el segundo por cada iteraccion del loop
        for(let i=0; i <=  array.length; i ++){
            for(let j = 0; j <= array.length; j ++){
                //if(20 > 2):
                if(array[j] > array[j + 1]){
                    // val = 20:
                    let val = array[j];
                    // array[position 0] = 2
                    array[j] = array[j + 1]
                    // array[position 1] = 20
                    array[j + 1] = val;
                    // [2,20,8,13,17,35,22]
                }
            }
        }
        return array
    }

    const handleSort = (method) => {
        const insertion = method(sort)
        setSort([insertion])
    }

    return (
        <div>
            <h3>Insertion Sort Method</h3>
            <p>hay 2 bucles anidados con notacion O(n 2) </p>
            <button onClick={()=>handleSort(sortInsertion)}>Sort Array</button>
            <button onClick={()=>handleSort(sortBubble)}>Bubble Sort Array</button>
            <div>
                {
                    arr.map(item => 
                        `${item},`
                    )
                }
            </div>
            <div>
                {
                    sort.map(item => 
                        `${item},`
                    )
                }
            </div>
            

        </div>
    )
}