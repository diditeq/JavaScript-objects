// QUESTION 1

/**
 * Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
    *Handle of author
    *content, 
    *An image link posted by the author of the post
    *Number of views, 
    *Number of likes,
 */

// Answer to Question 1

function InstagramPost(authorHandle, content, imageLink, numberOfViews,numberOfLikes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.numberOfViews = numberOfViews;
  this.numberOfLikes = numberOfLikes;
}


// QUESTION 2 

/**
 * Create 2 Instagram post objects from the constructor function you created above
 */

// Answer to Question 2

const peterpsquare = new InstagramPost("@peterpsquare", "Dear H.E PETER OBI your mandate can only be delayed, but cannot be denied. 🇳🇬✊🏾🇳🇬✊🏾🇳🇬✊🏾🇳🇬✊🏾🇳🇬 Thank you Nigerians 💚",
  "www.instagram.com/p/CpPnlkDL1lu/?utm_source=ig_web_copy_link", 1456, 2000 );

const jerusalem_prayer_team = new InstagramPost("@jerusalem_prayer_team", "Everything is possible to the one who believes.— Mark 9:23, Amen! #MiraclesHappen #KeepOnBelieving #TrustInTheLord #YouAreLoved",
  "www.instagram.com/p/CpjaNFzsKka/", 40, 50 );

console.log(peterpsquare);

console.log(jerusalem_prayer_team);


// QUESTION 3

/**
 * Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. 
   Recently, he wrote the JAMB exam and had the following scores in his combination:
        ENG - 70
        GOVT - 85
        LIT - 82
        CRK - 94
 */

//  (a) Using the factory method, implement a createPerson() factory function that takes name, 
//      age and location as arguments. Afterwards, create an object representing Musa from the factory function. 

// Answer to Question 3(a)

function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}
const Musa = createPerson("Musa Dawodu", 19, "Lekki Lagos Nigeria");

console.log({Musa});


//  (b) Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. 
//      Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you 
//      created above in (a) above


// Answer to Question 3(b)

function createJambScores(eng, govt, lit, crk) {
  return {
    ENG: eng,
    GOVT: govt,
    LIT: lit,
    CRK: crk,
  };
}

const musaJambScores = {
  ENG: 70,
  GOVT: 85,
  LIT: 82,
  CRK: 94,
};
console.log(musaJambScores);

const musaBluePrint = Object.assign(Musa, {musaJambScores})
console.log({musaBluePrint});




// QUESTION 4

/**
 * What are the different ways you can clone an object? Give examples for each of them.
 */

// Answer to Question 4



// FIRST METHOD: Using the spread operator:
const myBluePrint = {
    firstName: 'Doris',
    lastName: 'Akpan',
    gender: 'Female',
    location: 'Port Harcourt',
    skill: 'Mobile Dev',
    complexion: 'light skinned',
    hobbies: 'coding & sleeping'
};

const moreOfMyBluePrint = {...myBluePrint};
console.log({moreOfMyBluePrint}); 


// SECOND METHOD: Using Object.assign():
const detailsOfEmmaJoe = {
    firstName: 'Emmanuel',
    lastName: 'Jonnah',
    gender: 'Male',
    location: 'Rivera State',
    skill: 'Frontend Dev. & Data Analyst',
    hairTexture: 'curly',
    hobbies: 'studying, researching & coding',
};
const moreDetailsOfEmmaJoe = Object.assign({}, detailsOfEmmaJoe);
console.log({moreDetailsOfEmmaJoe}); 



// THIRD METHOD: Using JSON.parse() and JSON.stringify():
const aboutEric = {
    firstName: 'Eric',
    lastName: 'Solomon',
    gender: 'Male',
    location: 'Port Harcourt',
    skill: 'CCTV Installation',
    eyeColor: 'Brown eyes',
    complexion: 'Fair',
    hobbies: 'Surfing the internet, dreaming , watching trending news & videos',
    height: '5.8ft',
};
const alsoAboutEric = JSON.parse(JSON.stringify(aboutEric));
console.log({alsoAboutEric}); 



// QUESTION 5

    /**
     * As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
     */

    const presidentialCandidates = {
        AAC: 'Omoyele Sowore',
        ACCORD: 'Christopher Imumolen',
        APC: 'Bola Ahmed Tinubu',
        LP: 'Peter Obi',
        NNPP: 'Rabiu Kwankwaso',
        PDP: 'Atiku Abubakar',
     }
     
     /**
      * Using any of the enumeration methods taught in class (for…in  or for..of), 
      * log out each of the presidential candidates in this format:
        'Omoyele Sowore is the presidential candidate of AAC'
      */
     
// Answer to Question 5

     for (let key in presidentialCandidates) {
         console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`);
       }
     



