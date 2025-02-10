import { Route, Routes } from 'react-router-dom'
import { Closure, GitMenu, Home, JavascriptMenu, ReactMenu } from '../pages'
import { ComponentNotFound } from '../components'
import { componentsJavascript } from '../data/components.javascript'
import { componentsReact } from '../data/components.react'
import { pagesJest } from '../data/pages.jest'
import MenuCourses from '../components/MenuCourses/MenuCourses'

const RoutesApp = () => {

  let result = 1;
  result = result + '1';
  result = result - 1;
  console.log('Result: ', result)

  const obj = { a: 1, b: 2 };
  const obj2 = { ...obj, b: 3 };
  console.log(obj2);

  console.log([1, 2] == [1, 2]);

  console.log(NaN == NaN);

  let x = [1, 2, 3, 4, 5, 6];
  x.length = 3;
  console.log(x);

  function Palindrome(str){

    let b = str.split(' ').join('').toLocaleLowerCase()
    console.log('string: ', b)
  
    let a = b.split('').reverse().join('')
  
    console.log('string reverse: ',a)
  
    return a == b
  }
 console.log(Palindrome('A man a plan a canal Panama'))
 console.log(Palindrome('hello'))

 
  function LongestWord(str){
    const a = str.split(' ')
    console.log(a)
    let d = ''
    let e = 0
    for(let i = 0; i < a.length; i++){
      let b = a[i].length;
      if(e <= b){
        d= a[i]
        e= a[i].length
      }
      console.log(i, a[i], a[i].length)
    }

    const res = a.reduce((longest, currentWord) => {
      return currentWord.length > longest.length ? currentWord : longest 
    })
    console.log('res: ', res)

    return d
  }
  console.log(LongestWord('The quick brown fox jumped over the lazy dog and break the windows'))


  function sumEvenNumbers(array){
    const res = array.reduce((accum, num) => {
      if(num%2===0){
        return accum + num
      }
      return accum 
    }, 0)
    return res
  }
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])) // output 12: 2 + 4 + 6

  function reverseArray(array){
    let a = []
    for(let i=array.length - 1; i>=0; i--){
      a.push(array[i])
    }

    let b = array.reduce((accum, num)=>{
      console.log(num, accum)
      return [num, ...accum] 
    },[])
    console.log('reverse2: ', b)
    return a
  }
  console.log('Reverse Array: ',reverseArray([1, 2, 3, 4, 5, 6]))


  function findMissingNumber(array){
    // const n = array.length + 1; // Since one number is missing, the full sequence length should be `array.length + 1`
    // const expectedSum = (n * (n + 1)) / 2; // Sum of the first n natural numbers
    // const actualSum = array.reduce((acc, num) => acc + num, 0); // Sum of numbers in the array
    // console.log(n, expectedSum,actualSum)
    // return expectedSum - actualSum; // The difference is the missing number

    for(let i=0; i<array.length-1; i++){
      if(array[i]+1 !== array[i+1])
        return array[i]+1
    }
  }
  console.log('Find Missing Number: ',findMissingNumber([5,6,7,8,10]));


  function flatten(array){
    return array.reduce((acc,item) => {
      if(Array.isArray(item)){
        //console.log('1: ',acc, item)
        acc=acc.concat(flatten(item))
      }else{
        //console.log('2: ',acc, item)
        acc.push(item)
      }
      return acc;
    },[]);
  }
  console.log(flatten([1, [2, [3, [4]]]])) //removes all nested arrays removes all nested arrays

  function countOccurrences(str, letter){
    let a = str.split('')
    return a.reduce((acc,item)=>{
      if(item === letter)
        acc++
      return acc
    },0)
  }
  console.log(countOccurrences('hello world', 'o'))


  function areAnagrams(str1, str2){
    let a = str1.split('').sort().join('')
    let b = str2.split('').sort().join('') 
    console.log(a,b)

    return a === b
  }
  console.log(areAnagrams('amparo', 'paramo')) // Returns true

  function uniqueValues(array){
    return array.reduce((acc, num)=>{
      console.log(acc, num)
      if(!acc.includes(num))
        acc.push(num)
      
      return acc
      
    },[])
  }
  console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); // Returns [1, 2, 3, 4, 5]
  

  let a = [1, 2, 3, 4, 5]
  let b = [6, ...a]
  console.log('example: ',b)

  return (
    <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/programa-ucc" element={<MenuCourses/>} />

        <Route path="/javascript" element={null}>
          {componentsJavascript.menu.map((route) => (
            <Route key={route.name} path={route.path} element={route.component} />
          ))}
        </Route>

        <Route path="/react" element={null}>
          {componentsReact.menu.map((route) => (
            <Route key={route.name} path={route.path} element={route.component} />
          ))}
        </Route>

        <Route path="/jest" element={null}>
          {pagesJest.menu.map((route) => (
            <Route key={route.name} path={route.path} element={route.component} />
          ))}
        </Route>

        <Route path="git/*" element={<GitMenu/>} />


        <Route path="*" element={<ComponentNotFound/>} />
    </Routes>
  )
}

export default RoutesApp


