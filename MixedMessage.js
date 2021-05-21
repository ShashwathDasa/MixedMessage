const zodiac = ['aries','gemini','aquarius','leo','sagitarius','cancer','pisces','capricorn','taurus','scorpio','virgo','libra'];

const messageGenerator = (arr) => {
    let ran = (Math.floor(Math.random()*arr.length))
    console.log(`Your zodiac sign is ${arr[ran]}`);
}

messageGenerator(zodiac);