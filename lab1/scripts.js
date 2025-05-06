let Book = {
  title: "How to Read",
  author: "Fahad",
  year: "2012",
  isAvailable: true,
  borrow: function () {
    this.isAvailable = false;
  },
  publisher: {
    name: "Jarir",
    location: { city: "Qassim", country: "Saudi Arabia" },
  },
};

console.log("<<<<<<<< اطبع الكائن Book. >>>>>>>>");

console.log(Book);

console.log("<<<<<<<< اطبع الخاصية title. >>>>>>>>");
console.log(Book.title);

console.log(
  "<<<<<<<< قم بتعديل قيمة الخاصية year إلى السنة الحالية واطبع الكائن. >>>>>>>>"
);

Book.year = "2025";
console.log(Book);

console.log("<<<<<<<< احذف الخاصية author واطبع الكائن. >>>>>>>>");
delete Book.author;
console.log(Book);

console.log(
  "<<<<<<<< استدعِ الدالة borrow لتغيير isAvailable إلى false واطبع الكائن. >>>>>>>>"
);
Book.borrow();
console.log(Book);

console.log("<<<<<<<< اطبع الخاصية publisher. >>>>>>>>");
console.log(Book.publisher);

console.log("<<<<<<<< اطبع الخاصية city من داخل location obj . >>>>>>>>");
console.log(Book.publisher.location.city);
