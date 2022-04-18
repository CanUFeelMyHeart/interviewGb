// Создание стрелочной функции с указанием входного массива

arrayForTest = ['test1','test2']

const copyArray = (arrayForTest) => {
    resultArray = Array.from(arrayForTest)
    return resultArray
}

console.log(copyArray(arrayForTest))

const equalArrays = (firstArray,secondArray) => {

    if (firstArray.length != secondArray.length) return false; // Мас­си­вы раз­ной дли­ны не рав­ны
  
    for(var i = 0; i < firstArray.length; i++) // Цикл по всем эле­мен­там
        if (firstArray[i] !== secondArray[i]) return false; // Ес­ли хоть один эле­мент от­ли­ча­ет­ся, мас­си­вы не рав­ны
  
    return true; // Ина­че они рав­ны
}

// Тест №1: Сравнение ссылок и значений массива
const testCopyArray = (resultArray,testArray) => {
    if (equalArrays(resultArray,testArray) && resultArray != testArray) return true
    // Если указатели не равны, то новый массив не являются ссылкой на предыдущий
    else return false
}


console.log(testCopyArray(copyArray(arrayForTest),arrayForTest))