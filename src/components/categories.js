// const categories = [
//     {
//         category: "Boy Bands",
//         words: ["Jackson 5", "One Direction", "NSYNC", "Backstreet Boys"]
//     },
//     {
//         category: "Album of the Year Winners",
//         words: ["Thriller", "Harry's House", "Songs in the Key of Life", "The Miseducation of Lauryn Hill"]
//     },
//     {
//         category: "Band to Solo Artist",
//         words: ["Michael Jackson", "Harry Styles", "Justin Timberlake", "Nick Jonas"]
//     },
//     {
//         category: "Boyz II Men Members",
//         words: ["Nathan Morris", "Michael McCary", "Shawn Stockman", "Wanya Morris"] 
//     }
// ];

const cats = {
  'Jackson 5': 'Boy Bands',
  'One Direction': 'Boy Bands',
  'NSYNC': 'Boy Bands',
  'Backstreet Boys': 'Boy Bands',
  'Thriller': 'Album of the Year Winners',
  "Harry's House": 'Album of the Year Winners',
  'Songs in the Key of Life': 'Album of the Year Winners',
  'The Miseducation of Lauryn Hill': 'Album of the Year Winners',
  'Michael Jackson': 'Band to Solo Artist',
  'Harry Styles': 'Band to Solo Artist',
  'Justin Timberlake': 'Band to Solo Artist',
  'Nick Jonas': 'Band to Solo Artist',
  'Nathan Morris': 'Boyz II Men Members',
  'Michael McCary': 'Boyz II Men Members',
  'Shawn Stockman': 'Boyz II Men Members',
  'Wanya Morris': 'Boyz II Men Members',
};

const categories = Object.keys(cats || {}).map((cat) => {
  // console.log('scotttest cat', cat);
  return {
    word: cat,
    ans: cats[cat],
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
