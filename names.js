const names = [
    "James",
    "Mary",
    "Robert",
    "Patricia",
    "John",
    "Jennifer",
    "Michael",
    "Linda",
    "David",
    "Elizabeth",
    "William",
    "Barbara",
    "Richard",
    "Susan",
    "Joseph",
    "Jessica",
    "Thomas",
    "Sarah",
    "Christopher",
    "Karen",
    "Charles",
    "Lisa",
    "Daniel",
    "Nancy",
    "Matthew",
    "Betty",
    "Anthony",
    "Sandra",
    "Mark",
    "Margaret",
    "Donald",
    "Ashley",
    "Steven",
    "Kimberly",
    "Andrew",
    "Emily",
    "Paul",
    "Donna",
    "Joshua",
    "Michelle",
    "Kenneth",
    "Carol",
    "Kevin",
    "Amanda",
    "Brian",
    "Melissa",
    "George",
    "Deborah",
    "Timothy",
    "Stephanie",
    "Ronald",
    "Dorothy",
    "Jason",
    "Rebecca",
    "Edward",
    "Sharon",
    "Jeffrey",
    "Laura",
    "Ryan",
    "Cynthia",
    "Jacob",
    "Amy",
    "Gary",
    "Kathleen",
    "Nicholas",
    "Angela",
    "Eric",
    "Shirley",
    "Jonathan",
    "Brenda",
    "Stephen",
    "Emma",
    "Larry",
    "Anna",
    "Justin",
    "Pamela",
    "Scott",
    "Nicole",
    "Brandon",
    "Samantha",
    "Benjamin",
    "Katherine",
    "Samuel",
    "Christine",
    "Gregory",
    "Helen",
    "Alexander",
    "Debra",
    "Patrick",
    "Rachel",
    "Frank",
    "Carolyn",
    "Raymond",
    "Janet",
    "Jack",
    "Maria",
    "Dennis",
    "Catherine",
    "Jerry",
    "Heather",
    "Tyler",
    "Diane",
    "Aaron",
    "Olivia",
    "Jose",
    "Julie",
    "Adam",
    "Joyce",
    "Nathan",
    "Victoria",
    "Henry",
    "Ruth",
    "Zachary",
    "Virginia",
    "Douglas",
    "Lauren",
    "Peter",
    "Kelly",
    "Kyle",
    "Christina",
    "Noah",
    "Joan",
    "Ethan",
    "Evelyn",
    "Jeremy",
    "Judith",
    "Walter",
    "Andrea",
    "Christian",
    "Hannah",
    "Keith",
    "Megan",
    "Roger",
    "Cheryl",
    "Terry",
    "Jacqueline",
    "Austin",
    "Martha",
    "Sean",
    "Madison",
    "Gerald",
    "Teresa",
    "Carl",
    "Gloria",
    "Harold",
    "Sara",
    "Dylan",
    "Janice",
    "Arthur",
    "Ann",
    "Lawrence",
    "Kathryn",
    "Jordan",
    "Abigail",
    "Jesse",
    "Sophia",
    "Bryan",
    "Frances",
    "Billy",
    "Jean",
    "Bruce",
    "Alice",
    "Gabriel",
    "Judy",
    "Joe",
    "Isabella",
    "Logan",
    "Julia",
    "Alan",
    "Grace",
    "Juan",
    "Amber",
    "Albert",
    "Denise",
    "Willie",
    "Danielle",
    "Elijah",
    "Marilyn",
    "Wayne",
    "Beverly",
    "Randy",
    "Charlotte",
    "Vincent",
    "Natalie",
    "Mason",
    "Theresa",
    "Roy",
    "Diana",
    "Ralph",
    "Brittany",
    "Bobby",
    "Doris",
    "Russell",
    "Kayla",
    "Bradley",
    "Alexis",
    "Philip",
    "Lori",
    "Eugene",
    "Marie"
]

function getRandomName() {
    const index = Math.floor(Math.random() * 200)
    return names[index]
}

module.exports = getRandomName;