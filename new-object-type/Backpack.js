import Book from "./Book";



class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired,
    books,
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
    this.books = [book1, book2, book3, book4, book5]
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}
const book1 = new Book(
  "pet semetary",
  "classics",
  "stephan king",
  350
)

const book2 = new Book(
  "for whom the bell tolls",
  "action",
  "ernest hemingway",
  125
)

const book3 = new Book(
  "the adventure of tom sawyer",
  "fiction",
  "mark twain",
  250
)

const book4 = new Book(
  "peace and war",
  "horror",
  "leo tolstoy",
  275
)

const book5 = new Book(
  "oliver twist",
  "mystery",
  "charles dickens",
  190
)




export default Backpack;
