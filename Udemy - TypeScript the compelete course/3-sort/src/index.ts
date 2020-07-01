// Old JS
/* class Sorter {
   collection: number[];

   constructor(collection: number[]) {
     this.collection = collection;
   }
} */

// New JS 
// For Numbers
class Sorter {
   constructor(public collection: number[]) {}

   sort(): void {
     const { length } = this.collection;

     for (let i = 0; i < length; i++) {
       for (let j = 0; j < length - i - 1; j++) {
         if (this.collection[j] > this.collection[j+1]) {
           const temp = this.collection[j];
           this.collection[j] = this.collection[j+1];
           this.collection[j+1] = temp;
         }
       }
     }
   }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);


// For strings
/* class Sorter {
   constructor(public collection: number[] | string) {}

   sort(): void {
     const { length } = this.collection;

     for (let i = 0; i < length; i++) {
       for (let j = 0; j < length - i - 1; j++) {
        // If collection is an array of numbers
         if (this.collection[j] > this.collection[j+1]) {
           const temp = this.collection[j];
           this.collection[j] = this.collection[j+1];
           this.collection[j+1] = temp;
         }

         // If collection is string do this logic instead: 
         // ~~~logic to compare and swap characters in a string

       }
     }
   }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection); */