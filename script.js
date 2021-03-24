const jokelines = {
    name: ['Goliath', 'Broccoli', 'Wooden shoe', 'Amish', 'Boo', 'Atch', 'A little old lady', 
    'Cows go', 'Harry', 'Cash', 'Big interrupting cow', 'Canoe', 'Lettuce', 'Mikey'],
    who: ['Goliath who?', 'Broccoli who?', 'Wooden shoe who? ', 'Amish who?', 'Boo hoo?',
    'Atch who?', 'A little old lady who?', 'Cows go who?', 'Harry who?', 'Cash who?', 
    'Big interrupting cow who?', 'Canoe who?', 'Lettuce who?', 'Mikey who?'],
    punch: ['Goliath down, you look-eth tired!', 'Broccoli doesn’t have a last name, silly.',
    'Wooden shoe like to hear another joke?', 'You don’t look like a shoe!', 
    'Why are you crying?', 'Bless you!', 'I didn’t know you could yodel!', 
    'No silly, cows go MOO!', 'Harry up and answer the door!', 
    'No thanks, but I’ll take a peanut if you have one!', 'MOOOOOOO!', 
    'Canoe come out and play with me?', 'Lettuce in, it’s cold out here!', 
    'Mikey doesn’t fit in the key hole!'],
}
//function for randomly giving the part of an array
const randArray = array => array[Math.floor(Math.random()*array.length)];
// function to put together the 3 parts  of the joke
const jokeGenerator = array => {
    console.log(`Knock Knock.`);
    console.log(`Who's there?`);
    console.log(`${randArray(jokelines.name)}`)
}
//console.log(randArray(jokelines.name));
