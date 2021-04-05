const greet1 = (name) => {
    return console.log("Hello " + name);
 }
 
 const greet2 = name => {
    return console.log("Hello " + name);
 }
 
 const greet3 = name => console.log("Hello " + name)
 
 greet1("Srishti");
 greet2("Srishti");
 greet3("Srishti");

 // novel object
const novel = {
    /**
     * Setter method to set the title and author of the novel
     */
    set: function(title, author) {
        this.title = title;
        this.author = author;
    },
    /**
     * Getter method to print the title and author of the novel
     */
    get: function () {
        console.log("Title = " + this.title + ", Author = " + this.author);
        
        /* TODO: Convert the function named print to an arrow function so that the output from this function is:
        Title = Pride and Prejudice, Author = Jane Austen
        */
       /**
        * Function to print the title and author of the novel
        */
        var print =  () => {
            console.log("Title = " + this.title + ", Author = " + this.author);
        }
        print();
    }
}

let title = "Pride and Prejudice", author = "Jane Austen";
novel.set(title, author); // setting the keys title and author of the novel object as the ones defined in the above line
novel.get();

let print = (fname, lname) => {
    return fname + " " + lname;
}

let person1 = {
    firstname: "test",
    lastname: "test2",
    get: function()  {
        console.log(this.firstname);
        let print = () => {
            console.log(this.lastname);
        }
        print();
    },
    set: function(fname,lname) {
        this.firstname = fname;
        this.lastname = lname;
        let fullname = () => {
            this.fullname = this.firstname + " " + this.lastname;
        }
        fullname();
    }
}



/* TODO 1: Define an arrow function based on the information given in comment below
The identifier used for this function must be mergeWords.
*/
/**
 * Function to merge the given array of words (strings) into a single string separated by the given delimiter
 * @param {*} wordsArr array consisting of a list of single-word strings
 * @param {*} delimiter sequence of one or more characters used to distinguish between different words
 */
 let delimiter = ",";
 let mergeWords = (wordsArr, delimiter) => {
    let temp = "";
    for (i=0;i<wordsArr.length;i++){
        if(i === wordsArr.length - 1)
            temp +=wordsArr[i];
        else
            temp +=wordsArr[i] + delimiter;
    }
    return temp;
}

/* TODO 2: Define an arrow function based on the information given in comment below
The identifier used for this function must be printMessage.
*/
/**
 * Function to log message to the console
 * @param {*} message message to be logged on to the console
 */
let printMessage = (message) => {
    console.log(message);
}
 
/* TODO 3: Call the arrow function named mergeWords defined earlier with the argument words defined as an array for you and a comma (",") as the delimiter
& 
Call the arrow function named printMessage while passing the result of the function named mergeWords as an argument to it
*/
const words = ["Kitkat", "Lollipop", "Marshmallow", "Noughat", "Oreo"];
printMessage(mergeWords(words,delimiter));