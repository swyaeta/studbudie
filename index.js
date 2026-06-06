require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.once('ready', () => {
  console.log(`✅ Study Buddy is online!`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('🏓 Pong! I am alive and ready to help you study!');
  }

  if (message.content === '!hello') {
    message.reply(`Hey ${message.author}! hi 👋 I am ur study buddy and I'm here to help you study and type !intro for all commands information!`);
  }

  if (message.content === '!help') {
    message.reply(
      '**📚 Study Buddy Commands:**\n' +
      '!ping - Check if bot is alive\n' +
      '!hello - Say hello\n' +
      '!motivation - Get a motivational quote\n' +
      '!timer - Start a 25 min Pomodoro timer\n' +
      '!shorttimer - Start a 10 min timer\n' +
      '!longtimer - Start a 50 min timer\n' +
      '!extralongimer - Start a 90 min timer\n' +
      '!tip - Get a study tip\n' +
      '!fact - Get a fun science fact\n' +
      '!breathe - Quick breathing exercise\n' +
      '!focus - Get a focus reminder\n' +
      '!break - Take a break reminder\n' +
      '!celebrate - Celebrate your progress\n' +
      '!quote - Get an inspirational quote\n' +
      '!morning - Morning study routine\n' +
      '!night - Night study routine\n' +
      '!exam - Exam preparation tips\n' +
      '!stress - Stress relief tips\n' +
      '!challenge - Get a brain challenge\n' +
      '!about - About Study Buddy'
    );
  }

  if (message.content === '!motivation') {
    const quotes = [
      'Believe in yourself! You are capable of amazing things! 💪',
      'Every expert was once a complete beginner! 🌱',
      'Small progress every day leads to big results! 🚀',
      'You did not come this far to only give up! ⭐',
      'Study hard today so your future self can thank you later! ✨',
      'The secret of getting ahead is getting started! 🎯',
      'Do not watch the clock — let it watch you , keep goinggg and rockinggggggggg! ⏰',
      'Your only limit is your mind! 🧠',
      'Success is the sum of small efforts repeated every day, sooooooooooo complete it ykkk! 🏆',
      'Push yourself because no one else is going to do it for you! 🔥'
    ];
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    message.reply(random);
  }

  if (message.content === '!timer') {
    message.reply(`⏱️ ${message.author} Pomodoro timer started! Study hard for 25 minutes!`);
    setTimeout(() => {
      message.reply(`⏰ ${message.author} Your 25 minute session is done! Take a 5 minute break! 🎉`);
    }, 25 * 60 * 1000);
  }

  if (message.content === '!shorttimer') {
    message.reply(`⏱️ ${message.author} Short timer started! Focus for 10 minutes!`);
    setTimeout(() => {
      message.reply(`⏰ ${message.author} 10 minutes done! Great work! 🎉`);
    }, 10 * 60 * 1000);
  }

  if (message.content === '!longtimer') {
    message.reply(`⏱️ ${message.author} Long session started! Study for 50 minutes!`);
    setTimeout(() => {
      message.reply(`⏰ ${message.author} 50 minutes done! Take a proper 15 minute break! 🎉`);
    }, 50 * 60 * 1000);
  }

  if (message.content === '!extralongimer') {
    message.reply(`⏱️ ${message.author} Extra long session started! Study for 90 minutes! You are a beast! 💪`);
    setTimeout(() => {
      message.reply(`⏰ ${message.author} 90 minutes done!! That was incredible! Take a 20 minute break — you earned itttttt and so kooollllll ur doing these wauuuuuuu! 🏆🎉`);
    }, 90 * 60 * 1000);
  }

  if (message.content === '!tip') {
    const tips = [
      '📝 Use active recall — test yourself instead of just re-reading notes!',
      '🗂️ Use spaced repetition — review material at increasing intervals!',
      '✍️ Write notes by hand — it helps you remember better than typing in exams!',
      '🎯 Study one subject at a time — avoid multitasking!',
      '😴 Get enough sleep — your brain consolidates memory during sleep!',
      '💧 Stay hydrated — even mild dehydration affects concentration!',
      '📵 Put your phone away — notifications kill deep focus!',
      '🗣️ Teach what you learned to someone else — it deepens understanding!',
      '📊 Make mind maps to connect ideas visually!',
      '⏰ Study at the same time every day to build a habit!'
    ];
    const random = tips[Math.floor(Math.random() * tips.length)];
    message.reply(random);
  }

  if (message.content === '!fact') {
    const facts = [
      '🧠 Your brain uses 20% of your body\'s total energy!',
      '🌊 The ocean covers more than 70% of Earth\'s surface!',
      '⚡ Lightning strikes Earth about 100 times every second!',
      '🦋 Butterflies taste with their feet!',
      '🌍 There are more trees on Earth than stars in the Milky Way!',
      '🐬 Dolphins sleep with one eye opennn, aww so sneaky right!',
      '🔬 A teaspoon of neutron star would weigh 6 billion tons!',
      '🌙 The Moon is moving away from Earth at 3.8 cm per year!',
      '🦈 Sharks are older than trees — they have existed for 400 million years!',
      '💡 The human eye can distinguish about 10 million different colors!'
    ];
    const random = facts[Math.floor(Math.random() * facts.length)];
    message.reply(random);
  }

  if (message.content === '!breathe') {
    message.reply(
      '🌬️ **Quick Breathing Exerciseeee yalllll:**\n' +
      'Breathe IN for 5 seconds... 🌬️\n' +
      'Hold for 5 seconds... ⏸️\n' +
      'Breathe OUT for 5 seconds... 💨\n' +
      'Repeat 3 times. You got this and ur the bestt! 😌'
    );
  }

  if (message.content === '!focus') {
    message.reply(
      '🎯 **Focus Mode Activated!**\n' +
      '✅ Close the unnecessary tabs\n' +
      '✅ Put your phone face downnnnn\n' +
      '✅ Get a glass of water\n' +
      '✅ Take one deep breath\n' +
      'Now start studying! You can do this! 💪'
    );
  }

  if (message.content === '!break') {
    message.reply(
      '☕ **Break Time!**\n' +
      '✅ Stand up and stretchhh those legssss\n' +
      '✅ Drink some water\n' +
      '✅ Look away from your screen for a whole 1 minute atleast \n' +
      '✅ Take a short walk\n' +
      'Come back refresheddd ! 🌟'
    );
  }

  if (message.content === '!celebrate') {
    message.reply(
      `🎉 ${message.author} YOU ARE AMAZING! 🎉\n` +
      'Every study session counts!\n' +
      'Every page read is progress!\n' +
      'Keep going — your future self will thank you! 🏆🌟🔥'
    );
  }

  if (message.content === '!quote') {
    const quotes = [
      '"The beautiful thing about learning is that no one can take it away from you." — B.B. King',
      '"Education is the most powerful weapon which you can use to change the world." — Nelson Mandela',
      '"The more that you read, the more things you will know." — Dr. Seuss',
      '"An investment in knowledge pays the best interest." — Benjamin Franklin',
      '"Live as if you were to die tomorrow. Learn as if you were to live forever." — Gandhi',
    ];
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    message.reply(`💬 ${random}`);
  }

  if (message.content === '!morning') {
    message.reply(
      '🌅 **Morning Study Routine:**\n' +
      '1. Wash ur face and drink a cup of water\n' +
      '2. Review what you studied yesterday\n' +
      '3. Set only 3 goals for today\n' +
      '4. Start with the hardest/hated subject first\n' +
      '5. Take breaks every 25 minutes\n' +
      'Good morning! Make today count! ☀️'
    );
  }

  if (message.content === '!night') {
    message.reply(
      '🌙 **Night Study Routine:**\n' +
      '1. Review your notes from today\n' +
      '2. Write down what you will study tomorrow\n' +
      '3. Stop screens 30 minutes before sleep\n' +
      '4. Get at 8 hours of sleep cuz not sleeping jus makes ur brain slower \n' +
      'Sleep is when your brain stores memoriessss and go sleep! 😴⭐'
    );
  }

  if (message.content === '!exam') {
    message.reply(
      '📝 **Exam Preparation Tipsss yallll:**\n' +
      '1. Start studying at least 3 week before\n' +
      '2. Practice past papers and mock tests\n' +
      '3. Focus on weak areas first\n' +
      '4. Sleep well the night before\n' +
      '5. Eat a good breakfast on exam day\n' +
      '6. Arrive 10 minutes early and stay calm\n' +
      'You preparedd for this — trusttt yourselfffff! 💪'
    );
  }

  if (message.content === '!stress') {
    message.reply(
      '😌 **Stress Relief Tips:**\n' +
      '1. Take 5 deep breaths right now\n' +
      '2. Remember — you have handled hard things before\n' +
      '3. Break your work into tiny steps\n' +
      '4. Take a 10 minute walk outside\n' +
      '5. Talk to someone you trust\n' +
      'You are stronger than your stress! 💙'
    );
  }

  if (message.content === '!challenge') {
    const challenges = [
      '🧩 Can you name 5 world capitals in 10 seconds?',
      '🔢 What is 17 x 13? (No calculator!)',
      '📖 Can you summarize what you studied today in 3 sentences?',
      '🌍 Name 3 countries in South America!',
      '🧠 What is the powerhouse of the cell?',
      '⚡ How fast does light travel per second?',
      '📐 What is the Pythagorean theorem?',
      '🌿 Name 3 types of renewable energy!',
    ];
    const random = challenges[Math.floor(Math.random() * challenges.length)];
    message.reply(`🎯 **Brain Challenge:** ${random}`);
  }

  if (message.content === '!about') {
    message.reply(
      '📚 **About Study Buddy:**\n' +
      'I am a Discord bot built to help students stay focused and productive!\n' +
      'I offer Pomodoro timers, motivational quotes, study tips, brain challenges, and more!\n' +
      'Built with ❤️ using Discord.js\n' +
      'Type !help to see all commands!'
    );
  }
if (message.content === '!intro') {
    message.reply(
      '👋 **Welcome to Study Buddy!**\n\n' +
      'I am a bot designed to help students stay focused, motivated, and productive during study sessions!\n\n' +
      '**⏱️ Timers:**\n' +
      '!shorttimer - 10 min focus session\n' +
      '!timer - 25 min Pomodoro session\n' +
      '!longtimer - 50 min deep work session\n' +
      '!extralongimer - 90 min beast mode session\n\n' +
      '**💪 Motivation:**\n' +
      '!motivation - Random motivational quote\n' +
      '!quote - Inspirational quote from great minds\n' +
      '!celebrate - Celebrate your progress\n\n' +
      '**📚 Study Help:**\n' +
      '!tip - Random study tip\n' +
      '!focus - Focus mode checklist\n' +
      '!break - Break time reminder\n' +
      '!morning - Morning study routine\n' +
      '!night - Night study routine\n' +
      '!exam - Exam preparation tips\n' +
      '!stress - Stress relief tips\n\n' +
      '**🎮 Fun:**\n' +
      '!fact - Random science fact\n' +
      '!challenge - Brain challenge\n' +
      '!breathe - Breathing exercise\n\n' +
      'Type !help to see all commands in one list!'
    );
  }
});

client.login(process.env.DISCORD_TOKEN);