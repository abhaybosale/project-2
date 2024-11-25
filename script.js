const jokes = {
    kid: [
        "Why did the chicken cross the playground? To get to the other slide!",
        "What do you call a bear with no teeth? A gummy bear!",
        "Why couldn’t the bicycle stand up by itself? It was two tired!",
        "Why don’t eggs tell jokes? They might crack up!",
        "What’s orange and sounds like a parrot? A carrot!"
    ],
    normal: [
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why did the melon jump into the lake? It wanted to be a watermelon.",
        "Why was 6 afraid of 7? Because 7 ate 9!",
        "When your teacher asks “Where’s your homework?” It took a sick day. It had too many problems.",
        "Why won’t it hurt if you hit your friend with a 2-liter of soda? Because it’s a soft drink!",
        "Why did the mushrooms get invited to all the best parties? He was a fun-gi!",
        "Why was the math book sad? It had too many problems—and no solutions."
    ],
    dark: [
        "Why don’t graveyards ever get overcrowded? People are dying to get in.",
        "I have a joke about procrastination... but I'll tell you later.",
        " As I get older, I remember all the people I lost along the way. Maybe my budding career as a tour guide was not the right choice.",
        "My mom died when we couldn't remember her blood type. As she died, she kept telling us to 'be positive', but it's hard without her.",
        " I visited my new friend in his apartment. He told me to make myself at home. So I threw him out. I hate having visitors.",
        "Why don’t orphans play hide and seek? Because no one will look for them.",
        "What do you call a dog with no legs? Doesn't matter. He's not coming either way.",
        "They say three out of five people suffer from a chronic disease. Does that mean two of them enjoy it?",
        "Did you hear about the elderly man who fell into a well? Apparently, he couldn't see that well.",
        "Did you hear about the two golf courses that fell in love? It was a lawn-distance relationship.",
        "My wife is mad that I ruined our anniversary. I'm not sure how, I didn't even know it was today."
    ]
};

document.getElementById('generateBtn').addEventListener('click', () => {
    const level = document.querySelector('input[name="level"]:checked').value;
    const jokeList = jokes[level];
    const randomJoke = jokeList[Math.floor(Math.random() * jokeList.length)];
    document.getElementById('jokeOutput').textContent = randomJoke;
});
