// const cats = [
//     {
//         category: "Boy Bands",
//         words: ["Jackson 5", "One Direction", "NSYNC", "Backstreet Boys"],
//         difficulty: 1,
//         color: "rgb(249, 223, 109)" //yellow
//     }, 
//     {
//         category: "Band to Solo Artist",
//         words: ["Michael Jackson", "Harry Styles", "Justin Timberlake", "Nick Jonas"],
//         difficulty: 2,
//         color: "rgb(160, 195, 90)" //green
//     },
//     {
//         category: "Boyz II Men Members",
//         words: ["Nathan Morris", "Michael McCary", "Shawn Stockman", "Wanya Morris"],
//         difficulty: 3,
//         color: "rgb(176, 196, 239)" //blue
//     },
//     {
//         category: "Album of the Year Winners",
//         words: ["Thriller", "Harry's House", "Songs in the Key of Life", "The Miseducation of Lauryn Hill"],
//         difficulty: 4,
//         color: "rgb(186, 129, 197)" //purple
//     },
// ];

// const cats = {
//   'Jackson 5': 'Boy Bands',
//   'One Direction': 'Boy Bands',
//   'NSYNC': 'Boy Bands',
//   'Backstreet Boys': 'Boy Bands',
//   'Thriller': 'Album of the Year Winners',
//   "Harry's House": 'Album of the Year Winners',
//   'Songs in the Key of Life': 'Album of the Year Winners',
//   'The Miseducation of Lauryn Hill': 'Album of the Year Winners',
//   'Michael Jackson': 'Band to Solo Artist',
//   'Harry Styles': 'Band to Solo Artist',
//   'Justin Timberlake': 'Band to Solo Artist',
//   'Nick Jonas': 'Band to Solo Artist',
//   'Nathan Morris': 'Boyz II Men Members',
//   'Michael McCary': 'Boyz II Men Members',
//   'Shawn Stockman': 'Boyz II Men Members',
//   'Wanya Morris': 'Boyz II Men Members',
// };

const cats = {
    'Jackson 5': {
      category: 'Boy Bands',
      words: ['Jackson 5'],
      difficulty: 1,
      color: 'rgb(249, 223, 109)' // yellow
    },
    'One Direction': {
      category: 'Boy Bands',
      words: ['One Direction'],
      difficulty: 1,
      color: 'rgb(249, 223, 109)' // yellow
    },
    'NSYNC': {
      category: 'Boy Bands',
      words: ['NSYNC'],
      difficulty: 1,
      color: 'rgb(249, 223, 109)' // yellow
    },
    'Backstreet Boys': {
      category: 'Boy Bands',
      words: ['Backstreet Boys'],
      difficulty: 1,
      color: 'rgb(249, 223, 109)' // yellow
    },
    'Michael Jackson': {
      category: 'Band to Solo Artist',
      words: ['Michael Jackson'],
      difficulty: 2,
      color: 'rgb(160, 195, 90)' // green
    },
    'Harry Styles': {
      category: 'Band to Solo Artist',
      words: ['Harry Styles'],
      difficulty: 2,
      color: 'rgb(160, 195, 90)' // green
    },
    'Justin Timberlake': {
      category: 'Band to Solo Artist',
      words: ['Justin Timberlake'],
      difficulty: 2,
      color: 'rgb(160, 195, 90)' // green
    },
    'Nick Jonas': {
      category: 'Band to Solo Artist',
      words: ['Nick Jonas'],
      difficulty: 2,
      color: 'rgb(160, 195, 90)' // green
    },
    'Nathan Morris': {
      category: 'Boyz II Men Members',
      words: ['Nathan Morris'],
      difficulty: 3,
      color: 'rgb(176, 196, 239)' // blue
    },
    'Michael McCary': {
      category: 'Boyz II Men Members',
      words: ['Michael McCary'],
      difficulty: 3,
      color: 'rgb(176, 196, 239)' // blue
    },
    'Shawn Stockman': {
      category: 'Boyz II Men Members',
      words: ['Shawn Stockman'],
      difficulty: 3,
      color: 'rgb(176, 196, 239)' // blue
    },
    'Wanya Morris': {
      category: 'Boyz II Men Members',
      words: ['Wanya Morris'],
      difficulty: 3,
      color: 'rgb(176, 196, 239)' // blue
    },
    'Thriller': {
      category: 'Album of the Year Winners',
      words: ['Thriller'],
      difficulty: 4,
      color: 'rgb(186, 129, 197)' // purple
    },
    "Harry's House": {
      category: 'Album of the Year Winners',
      words: ["Harry's House"],
      difficulty: 4,
      color: 'rgb(186, 129, 197)' // purple
    },
    'Songs in the Key of Life': {
      category: 'Album of the Year Winners',
      words: ['Songs in the Key of Life'],
      difficulty: 4,
      color: 'rgb(186, 129, 197)' // purple
    },
    'The Miseducation of Lauryn Hill': {
      category: 'Album of the Year Winners',
      words: ['The Miseducation of Lauryn Hill'],
      difficulty: 4,
      color: 'rgb(186, 129, 197)' // purple
    }
  };
  

const categories = Object.keys(cats || {}).map((cat) => {
//   console.log('scotttest cat', cat);
  return {
    word: cat,
    ans: cats[cat].category,
    color: cats[cat].color,
    highlighted: false,
  };
});
    
// const colors = [
//     {
//         difficulty : 1,
//         color: "rgb(249, 223, 109)" //yellow
//     },
//     {
//         difficulty : 2,
//         color: "rgb(160, 195, 90)" //green
//     },
//     {
//         difficulty : 3,
//         color: "rgb(176, 196, 239)" //blue
//     },
//     {
//         difficulty : 4,
//         color: "rgb(186, 129, 197)" //purple
//     }
// ]


export { categories }
