 
//---------------------BUBBLE SORT-------------------------------

// function bubbleSort(arr){
//   let swapped
//   do{
//       swapped=false  
//   for(let i=0;i<arr.length-1;i++){
//       if(arr[i]>arr[i+1]){
//           let temp=arr[i]
//           arr[i]=arr[i+1]
//           arr[i+1]=temp
//           swapped=true
//       }
//   }
//   }while(swapped)
// }
// const arr=[33,4,4,32,1,4,55,4]
// bubbleSort(arr)
// console.log(arr)

// // O(n^2)

//-----------------------------INSERTION SORT---------------------

// function insertionSort(arr){
//   for(i=1;i<arr.length;i++){ 
//       let numberToInsert = arr[i]
//       let j=i-1
      
//       while(j>=0 && arr[j] > numberToInsert){
//           arr[j+1]=arr[j]
//           j=j-1
//       }
//       arr[j+1]=numberToInsert
      
//   }
// }

// const arr=[3232,44,55,66,7,888,999]
// insertionSort(arr)
// console.log(arr)


//-------------selection sort------------------

// function selectionSort(arr){
//   for(let i=0;i<arr.length;i++){
//       let minIndex=i
//       for(let j=i+1;j<arr.length;j++){
//           if(arr[j]<arr[minIndex]){
//               minIndex=j
//           }
//       } 
//       if(minIndex !==i){
//               let temp = arr[i];
//           arr[i] = arr[minIndex];
//           arr[minIndex] = temp;
//       }
//   }
//   return arr
// }
// let arr =[21,333,444,33,4,-66]
// selectionSort(arr)
// console.log(selectionSort(arr))

//-----------------QUICK SORT----------------------------

// function quickSort(arr){
//   if(arr.length<2){
//     return arr
//   }
  
//   let pivot=arr[arr.length-1]
//   let left=[]
//   let right=[]
  
//   for(let i=0;i<arr.length-1;i++){
//       if(arr[i]<pivot){
//           left.push(arr[i])
//       }else{
//           right.push(arr[i])
//       }
      
//   }
//       return [...quickSort(left),pivot,...quickSort(right)]
  
// }

// const arr=[1312,334,544,333,-4,40,40]
// console.log(quickSort(arr))


//---------------MERGE SORT----------------------------

// function mergeSort(arr){
//   if(arr.length<2){
//       return arr
//   }
  
//   const mid=Math.floor(arr.length/2)
//   const leftArr=arr.slice(0,mid)
//   const rightArr=arr.slice(mid)
  
//   return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//   let sortedArr=[]
//   while(leftArr.length && rightArr.length){
//   if(leftArr[0]<=rightArr[0]){
//       sortedArr.push(leftArr.shift())
//   }else{
//       sortedArr.push(rightArr.shift())
//   }
//   }
//   return [...sortedArr,...leftArr,...rightArr]
// }

// let arr=[33,44,555,-44,1,33]
// console.log(mergeSort(arr))

// big-0=O(nlogn)

//---------------------------------HASH TABLE-------------------------

// class HashTable{
//   constructor(size){
//       this.table=new Array(size)
//       this.size=size
//   }
  
//   hash(key){
//       let total=0
//       for(let i=0;i<key.length;i++){
//           total += key.charCodeAt(i)
//       }
//       return total % this.size
//   }
  
//   set(key,value){
//       const index=this.hash(key)
//       this.table[index]=value
//   }
  
//   get(key){
//       const index =this.hash(key)
//       return this.table[index]
//   }
  
//   remove(key){
//       const index=this.hash(key)
//       this.table[index]=undefined
//   }
  
//   display(){
//       for(let i=0;i<this.table.length;i++){
//           if(this.table[i]){
//               console.log(i,this.table[i])
//           }
//       }
//   }
// }

// const table=new HashTable(50)

// table.set('name','jasim')
// table.set('age',24)
// table.display()

// console.log(table.get('name'))

// table.remove('age')
// table.display()


//--------------------HASH TABLE WITHOUT LOSING VALUE IN SAME KEY COMBINATION-------------------

// class HashTable{
//   constructor(size){
//       this.table=new Array(size)
//       this.size=size
//   }
  
//   hash(key){
//       let total=0
      
//       for(let i=0;i< key.length;i++){
//           total += key.charCodeAt(i) 
//       }
//       return total % this.size
//   }
  
//   set(key,value){
//       const index=this.hash(key)
      
//       const bucket=this.table[index]
      
//       if(!bucket){
//           this.table[index]=[[key,value]]
//       }else{
//           const sameKeyItem=bucket.find(item =>item[0] ===key)
//           if(sameKeyItem){
//               sameKeyItem[1]=value
//           }else{
//               bucket.push([key,value])
//           }
//       }
//   }
  
//   get(key){
//       const index=this.hash(key)
//       const bucket=this.table[index]
      
//       if(bucket){
//           const sameKeyItem=bucket.find(item => item[0]===key)
//           if(sameKeyItem){
//               return sameKeyItem[1]
//           }
//       }
//       return undefined
//   }
  
//   remove(key){
//       const index=this.hash(key)
//       const bucket=this.table[index]
      
//       if(bucket){
//           const sameKeyItem=bucket.find(item => item[0]===key)
//           if(sameKeyItem){
//               bucket.splice(bucket.indexOf(sameKeyItem),1)
//           }
//       }
//   }
  
//   display(){
//       for(let i=0;i<this.table.length;i++){
//           if(this.table[i]){
//               console.log(i,this.table[i])
//           }
//       }
//   }
  
// }

// const table=new HashTable(50)

// table.set('name','jasim')
// table.set('age',24)
// table.display()

// console.log(table.get('name'))

// table.set('mane','faslu')

// table.display()

// table.remove('mane')

// table.display()


//-----------------------reverse stack----------------

// function reverseStack(str){
//   let stack=[]
  
//   for(let char of str){
//       stack.push(char)
//   }
  
//   let reversedString=''
  
//   while(stack.length>0){
//       reversedString += stack.pop()
//   }
  
//   return reversedString
  
// }

// console.log(reverseStack('hello'))


//-----------------LongChar in string----------------

// function longChar(str){
//   if(str.length===0) return ''
  
//   let maxLength=1
//   let maxChar=str[0]
  
//   let currLength=1
//   let currChar=str[0]
  
//   for(let i=0;i<str.length;i++){
//       if(str[i]===currChar){
//           currLength++
//       }else{
//           if(currLength>maxLength){
//               maxLength=currLength
//               maxChar=currChar
//           }
//               currChar=str[i]
//               currLength=1
//       }
//   }
//   if(currLength>maxLength){
//       maxLength=currLength
//       maxChar=currChar
//   }
  
//   return `${maxChar} ${maxLength}`
// }

// console.log(longChar('aaaffffffffeefkeeeeeeejjjjjjjeeeehjjjeeeellllllllllllll'))

//------------------------second last from top---------------------------

// class Stack{
//   constructor(){
//       this.items=[]
//   }
  
//   push(ele){
//       return this.items.push(ele)
//   }
  
//   pop(){
//       if(this.items.length===0){
//           console.log('stack is empty')
//       }
//       return this.items.pop()
//   }
  
//   peek(){
//       if(this.items.length===0){
//           console.log('stack is empty')
//       }
      
//       return this.items[this.items.length-1]
//   }
  
//   size(){
//       return this.items.length
//   }
//   isEmpty(){
//       return    this.items.length===0
//   }
// }

// function secEle(stack){
//   if(stack.size()<2){
//       console.log('not enough element')
//   }
  
//   let lastEle=stack.pop()
  
//   let secondLast=stack.peek()
  
//   stack.push(lastEle)
  
//   return secondLast
// }

// let stack=new Stack

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log("Second element from the top: " + secEle(stack));

//---------------frequency using hashmap----------------

// function frequencyOfString(s) {
//   // Create an empty object to store the frequency of characters
//   const frequencyMap = {};

//   // Iterate over each character in the string
//   for (let char of s) {
//       // If the character is already in the object, increment its count
//       if (frequencyMap[char]) {
//           frequencyMap[char]++;
//       // If the character is not in the object, add it with count 1
//       } else {
//           frequencyMap[char] = 1;
//       }
//   }

//   return frequencyMap;
// }

// // Example usage:
// const inputString = "hello world";
// const frequencyMap = frequencyOfString(inputString);
// console.log(frequencyMap);

//---------------delete middle-------------

// function deleteMiddle(stack) {
//   // Helper function to delete the middle element
//   function deleteMiddleHelper(stack, currentIndex, middleIndex) {
//       // Base case: if the currentIndex is equal to the middleIndex, pop the middle element
//       if (currentIndex === middleIndex) {
//           stack.pop();
//           return;
//       }

//       // Pop the top element
//       const topElement = stack.pop();

//       // Recursive call to continue until the middle element is reached
//       deleteMiddleHelper(stack, currentIndex + 1, middleIndex);

//       // Push the top element back except for the middle one
//       stack.push(topElement);
//   }

//   const size = stack.length;
//   if (size === 0) {
//       return; // If the stack is empty, do nothing
//   }
//   const middleIndex = Math.floor(size / 2);

//   // Call the helper function with the initial index 0
//   deleteMiddleHelper(stack, 0, middleIndex);
// }

// // Example usage:
// const stack = [1, 2, 3, 4, 5];

// console.log("Original stack:", stack);

// deleteMiddle(stack);

// console.log("Stack after deleting middle element:", stack);

//---------------------valid parenthesis-------------------------

// function isValid(s) {
//   // Stack to keep track of opening brackets
//   const stack = [];

//   // Map of matching bracket pairs
//   const matchingBrackets = {
//       ')': '(',
//       ']': '[',
//       '}': '{'
//   };

//   // Iterate over each character in the string
//   for (let char of s) {
//       if (char === '(' || char === '[' || char === '{') {
//           // Push opening brackets onto the stack
//           stack.push(char);
//       } else if (char === ')' || char === ']' || char === '}') {
//           // If the stack is empty or the top of the stack doesn't match the corresponding opening bracket
//           if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
//               return false;
//           }
//       }
//   }

//   // The stack should be empty if all brackets are matched
//   return stack.length === 0;
// }

// // Example usage:
// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
// console.log(isValid("{[]}")); // true



//--------------------reverse q using recursion----------------

// class Queue {
//   constructor() {
//       this.items = [];
//   }

//   enqueue(element) {
//       this.items.push(element);
//   }

//   dequeue() {
//       if (this.isEmpty()) {
//           return null;
//       }
//       return this.items.shift();
//   }

//   isEmpty() {
//       return this.items.length === 0;
//   }

//   reverse() {
//       if (this.isEmpty()) {
//           return;
//       }

//       const front = this.dequeue();

//       this.reverse();

//       this.enqueue(front);
//   }

//   printQueue() {
//       console.log(this.items.join(' '));
//   }
// }


// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// console.log("Original queue:");
// queue.printQueue();

// queue.reverse();

// console.log("Reversed queue:");
// queue.printQueue();


//-----------------------find duplicates using hash map-----------

// function findDuplicates(arr) {
//   const elementCount = {};
//   const duplicates = [];

//   // Traverse the array and count occurrences of each element
//   for (let element of arr) {
//       if (elementCount[element]) {
//           elementCount[element]++;
//       } else {
//           elementCount[element] = 1;
//       }
//   }

//   // Collect elements that have more than one occurrence
//   for (let element in elementCount) {
//       if (elementCount[element] > 1) {
//           duplicates.push(element);
//       }
//   }

//   return duplicates;
// }

// // Example usage:
// const array = [1, 2, 3, 4, 5, 3, 2, 1, 6, 7, 8, 9, 9];
// const duplicates = findDuplicates(array);
// console.log(duplicates); // Output: ['1', '2', '3', '9']


















