---
layout: default
title: Home | Samuel Moreno
---

<div id="hero" class="hero-section">
  <img id="hero-photo"
       src="{{ '/assets/Images/yopo2024.jpg' | relative_url }}"
       alt="Samuel Moreno"
       class="hero-photo">
  <div class="hero-text">
    <h1>Samuel Moreno</h1>
    <p class="tagline">Economist &amp; Data Scientist · Edinburgh MSc · Quantitative Finance &amp; AI</p>
    <p>Samuel here — 来てくれて感謝する! I'm an Economist and Financial Analyst. Most of my thinking goes into data science, machine learning, and how AI is reshaping the world we live in: everyday decisions, from financial markets to running routines. I studied economic theory at ITAM and then finance, technology and policy at Edinburgh — two very different places that both changed how I see problems.</p>
    <p>I also spend a lot of time building things. <a href="https://guiame.ai">Guiame.ai</a>, a Scotland travel toolkit, is the most recent — I started it after a few years of guiding visitors across the Highlands and learning scale-up logistics in one of the best hospitality companies in Scotland. It turns out guiding is excellent research.</p>
    <p>History, aquascaping, running, and a guid cup o' coffee fill in the rest. On the side, I help people get into Edinburgh, settle abroad, and think through early startup decisions — and take on private consulting in Mexico when interesting problems come up. <a href="https://GregSom-MSc.github.io/contact">Reach out</a> if something here catches your attention.</p>
  </div>
</div>

<script>
(function () {
  var photo = document.getElementById('hero-photo');
  if (!photo) return;
  function update() {
    var s = window.scrollY || document.documentElement.scrollTop || 0;
    var p = Math.min(s / 250, 1);
    photo.style.transform = 'scale(' + Math.max(0.05, 1 - p * 0.95) + ')';
    photo.style.opacity = Math.max(0, 1 - p * 1.8).toString();
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}());
</script>

<hr>

<h2>Github Contributions</h2>
<p style="font-size: 0.92rem; color: #666; margin: 0 0 12px 0;">Commits across public repositories — finance tools, ML experiments, and this site itself.</p>

<div style="background: #ffffff; border-radius: 12px; padding: 20px 24px; box-shadow: 0 2px 16px rgba(0,0,0,0.07); border: 1px solid #e5e7eb; max-width: 720px; margin: 0 auto 0.5rem auto;">
    <img
        src="https://ghchart.rshah.org/134074/GregSom-MSc"
        alt="Samuel Moreno's GitHub contribution chart"
        style="width: 100%; height: auto; display: block;"
        onerror="this.closest('div').innerHTML='<p style=\'text-align:center;color:#999;padding:12px 0;\'>Contribution chart unavailable — <a href=\'https://github.com/GregSom-MSc\'>view on GitHub</a>.</p>'"
    >
</div>
<p style="font-size: 0.85rem; color: #888; margin: 6px 0 1.5rem 0;">Full history on <a href="https://github.com/GregSom-MSc" target="_blank" rel="noopener noreferrer">github.com/GregSom-MSc</a>.</p>
<hr>

<div class="credential-pills">
  <div class="credential-pill">
    <span class="pill-institution">University of Edinburgh</span>
    <span class="pill-sep">·</span>
    <span>MSc Finance, Technology &amp; Policy</span>
  </div>
  <div class="credential-pill">
    <span class="pill-institution">ITAM</span>
    <span class="pill-sep">·</span>
    <span>BA Economics / MA Economic Theory</span>
  </div>
</div>
