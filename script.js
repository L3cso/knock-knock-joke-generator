const jokelines = {
    name: ['Goliath', 'Broccoli', 'Wooden shoe', 'Amish', 'Boo', 'Atch', 'A little old lady', 
    'Cows go', 'Harry', 'Cash', 'Big interrupting cow', 'Canoe', 'Lettuce', 'Mikey', 'Nobel', 'Tank', 'Figs', 'Annie', 'Cow says', 'Hal', 'Alice', 'Says', 'Honey bee', 'Euripides', 'Snow', 'Hawaii', 'Woo', 'Orange', 'Who', 'Anita', 'Water'],
    who: ['Goliath who?', 'Broccoli who?', 'Wooden shoe who? ', 'Amish who?', 'Boo hoo?',
    'Atch who?', 'A little old lady who?', 'Cows go who?', 'Harry who?', 'Cash who?', 
    'Big interrupting cow who?', 'Canoe who?', 'Lettuce who?', 'Mikey who?', 'Water who?', 'Anita who?', 'Who who?', 'Orange who?', 'Woo who?', 'Hawaii who?', 'Snow who?', 'Euripides who?', 'Honey bee who?', 'Says who?', 'Alice who?', 'Hal who?', 'Cow says who?', 'Annie who?', 'Figs who?', 'Tank who?', 'Nobel who?'],
    punch: ['Goliath down, you look-eth tired!', 'Broccoli doesn’t have a last name, silly.',
    'Wooden shoe like to hear another joke?', 'You don’t look like a shoe!', 
    'Why are you crying?', 'Bless you!', 'I didn’t know you could yodel!', 
    'No silly, cows go MOO!', 'Harry up and answer the door!', 
    'No thanks, but I’ll take a peanut if you have one!', 'MOOOOOOO!', 
    'Canoe come out and play with me?', 'Lettuce in, it’s cold out here!', 
    'Mikey doesn’t fit in the key hole!', 'Nobel…that’s why I knocked!', 'You’re welcome.', 'Figs the doorbell, it’s not working!', 'Annie thing you can do, I can do too!', 'No, a cow says mooooo!', 'Hal will you know if you don’t open the door?', 'Alice fair in love and war.', 'Says me!', 'Honey bee a dear and get that for me please!', 'Euripides clothes, you pay for them!', 'Snow use. The joke is over.', 'I’m good. Hawaii you?', 'Glad you’re excited, too!', 'Orange you going to let me in?', 'I didn’t know you were an owl!', 'Let me in! Anita borrow something.', 'Water you doing telling jokes right now? Don’t you have things to do?'],
}
//function for randomly giving the part of an array
const randArray = array => array[Math.floor(Math.random()*array.length)];
// function to put together the 3 parts  of the joke
const jokeGenerator = array => {
    console.log(`Knock Knock.`);
    console.log(`Who's there?`);
    console.log(`${randArray(array.name)}`);
    console.log(`${randArray(array.who)}`);
    console.log(`${randArray(array.punch)}`);
}
//console.log(randArray(jokelines.name));
jokeGenerator(jokelines);