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
    { t: "You are never too old to set another goal or to dream a new <em>dream</em>.", a: "C.S. Lewis" }
  ];

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
