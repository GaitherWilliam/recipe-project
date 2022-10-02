import { useState } from "react"

function useArray(initialArr) {

    const [arr, setArr] = useState(initialArr || []);

    function addItem(newItem) {
        setArr([...arr, newItem]);
    }

    function removeItemById(id) {
        setArr(arr.filter(item => id !== item.id));
    }

    function removeItemByIndex(i) {
        let arrCopy = [...arr];
        arrCopy.splice(i, 1);
        setArr(arrCopy);
    }

    function editItemById(id, newValue) {
        setArr(arr.map((item => {
            if (id === item.id) {
                return newValue
            } else {
                return item
            }
        })))
    }
    function editItemByIndex(i, newValue) {
        let arrCopy = [...arr];
        arrCopy[i] = newValue;
        setArr(arrCopy)

    }

    return [arr, { setArr, addItem, removeItemById, removeItemByIndex, editItemById, editItemByIndex }];

}

export { useArray };
