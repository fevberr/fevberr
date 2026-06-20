/* ========== script.js ========== */
(function() {
  var q = [
    { t: "The only way to do great work is to <em>love</em> what you do.", a: "Steve Jobs" },
    { t: "In the middle of difficulty lies <em>opportunity</em>.", a: "Albert Einstein" },
    { t: "It does not matter how slowly you go as long as you do not <em>stop</em>.", a: "Confucius" },
    { t: "Success is not final, failure is not fatal: it is the courage to <em>continue</em>.", a: "Winston Churchill" },
    { t: "Believe you can and you're <em>halfway</em> there.", a: "Theodore Roosevelt" },
    { t: "Push yourself, because no one else is going to do it <em>for</em> you.", a: "Unknown" },
    { t: "Dream big. Work hard. Stay <em>focused</em>.", a: "Inspire Daily" },
    { t: "The future belongs to those who believe in the beauty of their <em>dreams</em>.", a: "Eleanor Roosevelt" },
    { t: "Do what you can, with what you have, <em>where</em> you are.", a: "Theodore Roosevelt" },
    { t: "It's not whether you get knocked down, it's whether you <em>get up</em>.", a: "Vince Lombardi" },
    { t: "The only impossible journey is the one you never <em>begin</em>.", a: "Tony Robbins" },
    { t: "You are never too old to set another goal or to dream a new <em>dream</em>.", a: "C.S. Lewis" },
    { t: "The best time to plant a tree was 20 years ago. The second best time is <em>now</em>.", a: "Chinese Proverb" },
    { t: "It always seems impossible until it's <em>done</em>.", a: "Nelson Mandela" },
    { t: "The only thing we have to fear is fear <em>itself</em>.", a: "Franklin D. Roosevelt" },
    { t: "To be yourself in a world that is constantly trying to make you something else is the greatest <em>accomplishment</em>.", a: "Ralph Waldo Emerson" },
    { t: "Life is what happens when you're busy making other <em>plans</em>.", a: "John Lennon" },
    { t: "Be the change that you wish to see in the <em>world</em>.", a: "Mahatma Gandhi" },
    { t: "In three words I can sum up everything I've learned about life: it goes <em>on</em>.", a: "Robert Frost" },
    { t: "If you want to live a happy life, tie it to a goal, not to people or <em>things</em>.", a: "Albert Einstein" },
    { t: "The greatest glory in living lies not in never falling, but in rising every time we <em>fall</em>.", a: "Nelson Mandela" },
    { t: "Get busy living or get busy <em>dying</em>.", a: "Stephen King" },
    { t: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did <em>do</em>.", a: "Mark Twain" },
    { t: "The purpose of our lives is to be <em>happy</em>.", a: "Dalai Lama" },
    { t: "Life is a succession of lessons which must be lived to be <em>understood</em>.", a: "Helen Keller" },
    { t: "The unexamined life is not worth <em>living</em>.", a: "Socrates" },
    { t: "Good people are good because they've come to wisdom through <em>failure</em>.", a: "William Saroyan" },
    { t: "We are what we repeatedly do. Excellence, then, is not an act, but a <em>habit</em>.", a: "Aristotle" },
    { t: "The only true wisdom is in knowing you know <em>nothing</em>.", a: "Socrates" },
    { t: "Happiness depends upon <em>ourselves</em>.", a: "Aristotle" },
    { t: "The journey of a thousand miles begins with one <em>step</em>.", a: "Lao Tzu" },
    { t: "He who has a why to live for can bear almost any <em>how</em>.", a: "Friedrich Nietzsche" },
    { t: "Whatever you are, be a good <em>one</em>.", a: "Abraham Lincoln" },
    { t: "Life is really simple, but we insist on making it <em>complicated</em>.", a: "Confucius" },
    { t: "May you live all the days of your <em>life</em>.", a: "Jonathan Swift" },
    { t: "The purpose of art is washing the dust of daily life off our <em>souls</em>.", a: "Pablo Picasso" },
    { t: "To live is the rarest thing in the world. Most people exist, that is <em>all</em>.", a: "Oscar Wilde" },
    { t: "Everything you've ever wanted is on the other side of <em>fear</em>.", a: "George Addair" },
    { t: "Success is walking from failure to failure with no loss of <em>enthusiasm</em>.", a: "Winston Churchill" },
    { t: "The way to get started is to quit talking and begin <em>doing</em>.", a: "Walt Disney" },
    { t: "Don't let yesterday take up too much of <em>today</em>.", a: "Will Rogers" },
    { t: "You miss 100% of the shots you don't <em>take</em>.", a: "Wayne Gretzky" },
    { t: "The best revenge is massive <em>success</em>.", a: "Frank Sinatra" },
    { t: "What you lack in talent can be made up with desire, hustle, and giving 110% all the <em>time</em>.", a: "Don Zimmer" },
    { t: "Do not go where the path may lead, go instead where there is no path and leave a <em>trail</em>.", a: "Ralph Waldo Emerson" },
    { t: "We must let go of the life we have planned, so as to accept the one that is waiting for <em>us</em>.", a: "Joseph Campbell" },
    { t: "The only person you are destined to become is the person you decide to <em>be</em>.", a: "Ralph Waldo Emerson" },
    { t: "It does not do to dwell on dreams and forget to <em>live</em>.", a: "J.K. Rowling" },
    { t: "Happiness is not something ready made. It comes from your own <em>actions</em>.", a: "Dalai Lama" },
    { t: "To succeed in life, you need three things: a wishbone, a backbone, and a funny <em>bone</em>.", a: "Reba McEntire" },
    { t: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the <em>poor</em>.", a: "Sholom Aleichem" },
    { t: "The secret of getting ahead is getting <em>started</em>.", a: "Mark Twain" },
    { t: "What lies behind us and what lies before us are tiny matters compared to what lies within <em>us</em>.", a: "Ralph Waldo Emerson" },
    { t: "Be yourself; everyone else is already <em>taken</em>.", a: "Oscar Wilde" },
    { t: "Two roads diverged in a wood, and I— I took the one less traveled by, and that has made all the <em>difference</em>.", a: "Robert Frost" },
    { t: "So we beat on, boats against the current, borne back ceaselessly into the <em>past</em>.", a: "F. Scott Fitzgerald" },
    { t: "The only limit to our realization of tomorrow is our doubts of <em>today</em>.", a: "Franklin D. Roosevelt" },
    { t: "It's not what happens to you, but how you react to it that <em>matters</em>.", a: "Epictetus" },
    { t: "The mind is everything. What you think you <em>become</em>.", a: "Buddha" },
    { t: "Life isn't about finding yourself. Life is about creating <em>yourself</em>.", a: "George Bernard Shaw" },
    { t: "The greatest pleasure in life is doing what people say you cannot <em>do</em>.", a: "Walter Bagehot" },
    { t: "Life shrinks or expands in proportion to one's <em>courage</em>.", a: "Anaïs Nin" },
    { t: "The biggest adventure you can take is to live the life of your <em>dreams</em>.", a: "Oprah Winfrey" },
    { t: "We're born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we're not <em>alone</em>.", a: "Orson Welles" },
    { t: "Action is the foundational key to all <em>success</em>.", a: "Pablo Picasso" },
    { t: "Success is how high you bounce when you hit <em>bottom</em>.", a: "George S. Patton" },
    { t: "Dream no small dreams; for they have no power to move the hearts of <em>men</em>.", a: "Johann Wolfgang von Goethe" },
    { t: "The more that you read, the more things you will know. The more that you learn, the more places you'll <em>go</em>.", a: "Dr. Seuss" },
    { t: "It is never too late to be what you might have <em>been</em>.", a: "George Eliot" },
    { t: "Don't watch the clock; do what it does. Keep <em>going</em>.", a: "Sam Levenson" },
    { t: "The best way to predict your future is to create <em>it</em>.", a: "Peter Drucker" },
    { t: "Fall seven times and stand up <em>eight</em>.", a: "Japanese Proverb" },
    { t: "The only place where success comes before work is in the <em>dictionary</em>.", a: "Vidal Sassoon" },
    { t: "Opportunities don't happen. You create <em>them</em>.", a: "Chris Grosser" },
    { t: "If you can dream it, you can do <em>it</em>.", a: "Walt Disney" },
    { t: "The best preparation for tomorrow is doing your best <em>today</em>.", a: "H. Jackson Brown Jr." },
    { t: "I have not failed. I've just found 10,000 ways that won't <em>work</em>.", a: "Thomas Edison" },
    { t: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any <em>obstacle</em>.", a: "Christian D. Larson" },
    { t: "Perfection is not attainable, but if we chase perfection we can catch <em>excellence</em>.", a: "Vince Lombardi" },
    { t: "The secret of success is to do the common thing uncommonly <em>well</em>.", a: "John D. Rockefeller Jr." },
    { t: "I am not a product of my circumstances. I am a product of my <em>decisions</em>.", a: "Stephen Covey" },
    { t: "Your time is limited, don't waste it living someone else's <em>life</em>.", a: "Steve Jobs" },
    { t: "Death is not the greatest loss in life. The greatest loss is what dies inside us while we <em>live</em>.", a: "Norman Cousins" },
    { t: "The most common way people give up their power is by thinking they don't have <em>any</em>.", a: "Alice Walker" },
    { t: "Change your thoughts and you change your <em>world</em>.", a: "Norman Vincent Peale" },
    { t: "Attitude is a little thing that makes a big <em>difference</em>.", a: "Winston Churchill" },
    { t: "The only way to achieve the impossible is to believe it is <em>possible</em>.", a: "Charles Kingsleigh" },
    { t: "You can never cross the ocean until you have the courage to lose sight of the <em>shore</em>.", a: "Christopher Columbus" },
    { t: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, I will try <em>again</em>.", a: "Mary Anne Radmacher" },
    { t: "The most beautiful things in life cannot be seen or even touched, they must be felt with the <em>heart</em>.", a: "Helen Keller" },
    { t: "To live is to choose. But to choose well, you must know who you are and what you stand for, where you want to go and why you want to get <em>there</em>.", a: "Kofi Annan" },
    { t: "Success isn't just about what you accomplish in life, it's about what you inspire others to <em>do</em>.", a: "Unknown" },
    { t: "What you get by achieving your goals is not as important as what you become by achieving your <em>goals</em>.", a: "Zig Ziglar" },
    { t: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving <em>forward</em>.", a: "Martin Luther King Jr." },
    { t: "The strongest people are not those who show strength in front of us but those who win battles we know nothing <em>about</em>.", a: "Unknown" },
    { t: "Sometimes you don't realize your own strength until you come face to face with your greatest <em>weakness</em>.", a: "Unknown" },
    { t: "Strength does not come from physical capacity. It comes from an indomitable <em>will</em>.", a: "Mahatma Gandhi" },
    { t: "A dream doesn't become reality through magic; it takes sweat, determination, and hard <em>work</em>.", a: "Colin Powell" }
  ];
})();

  var d1 = document.getElementById('d1');
  var d2 = document.getElementById('d2');
  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var t1 = document.getElementById('t1');
  var to = null;

  function g() {
    var i = Math.floor(Math.random() * q.length);
    return q[i];
  }

  function r() {
    var x = g();
    if (d1) d1.innerHTML = x.t;
    if (d2) d2.textContent = x.a;
  }

  function s(m, d) {
    d = d || 2500;
    if (!t1) return;
    t1.textContent = m;
    t1.classList.add('show');
    clearTimeout(to);
    to = setTimeout(function() { 
      if (t1) t1.classList.remove('show'); 
    }, d);
  }

  function e() {
    var u = new URL(window.location.href);
    var base = u.origin + u.pathname.replace(/\/[^/]*$/, '/');
    var embedUrl = base + 'embed.html';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(embedUrl).then(function() {
        s('embed URL copied');
      }).catch(function() { f(embedUrl); });
    } else {
      f(embedUrl);
    }
  }

  function f(t) {
    var ta = document.createElement('textarea');
    ta.value = t;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    ta.style.pointerEvents = 'none';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      s('embed URL copied');
    } catch (er) {
      s('could not copy');
    }
    document.body.removeChild(ta);
  }

  window.getQ = g;

  if (d1 && d2) {
    r();
    
    if (b1) {
      b1.addEventListener('click', function() {
        b1.style.transform = 'scale(0.94)';
        setTimeout(function() { b1.style.transform = ''; }, 120);
        r();
      });
    }
    
    if (b2) {
      b2.addEventListener('click', function() {
        e();
      });
    }
  }

  var e1 = document.getElementById('e1');
  var e2 = document.getElementById('e2');
  if (e1 && e2) {
    var q2 = g();
    e1.innerHTML = q2.t;
    e2.textContent = q2.a;
  }

  var p = new URLSearchParams(window.location.search);
  if (p.get('embed') === 'true') {
    var card = document.querySelector('.card');
    if (card) {
      card.style.border = '1px solid rgba(247, 201, 72, 0.08)';
      setTimeout(function() { s('embed mode', 1800); }, 400);
    }
  }
})();
