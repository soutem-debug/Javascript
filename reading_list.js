// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and already read (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so: “The Hobbit by J.R.R. Tolkien”.

// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like ‘You already read “The Hobbit” by J.R.R. Tolkien’, and if not, log a string like ‘You still need to read “The Lord of the Rings” by J.R.R. Tolkien.’

// Create an array of objects 
let readingList = [
    {title: "Lessons in Chemistry",
     author: "Bonnie Garmus",
     haveRead: true
},
{   title: "To Kill a Mockingbird",
    author: "Harper Lee",
    haveRead: false
},
{   title: "Shantaram",
    author: "Gregory David Roberts",
    haveRead: true
},
{   title: "Midnight Library",
    author: "Matt Haig",
    haveRead: false
},
{   title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    haveRead: true
} 
];

// WHILE loop iterates through the array simply 
// let i = 0;

// while (i < readingList.length) {
//     console.log(readingList[i]);
//     i++;
// }

// Iterate through the array of books. For each book, log the book title and book author like so: “The Hobbit by J.R.R. Tolkien”.
//  using forEach

readingList.forEach((book) => {
    console.log(book.title + " by " + book.author);

// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like ‘You already read “The Hobbit” by J.R.R. Tolkien’, and if not, log a string like ‘You still need to read “The Lord of the Rings” by J.R.R. Tolkien.’

if (book.haveRead == true) {
    console.log("You have already read " + book.title + " by " + book.author);
}
  else 
    console.log("You still need to read " + book.title + " by " + book.author);
});


