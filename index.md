---
layout: default
---

<div id="hero" class="hero-section">
  <img id="hero-photo"
       src="{{ '/assets/Images/yopo2024.jpg' | relative_url }}"
       alt="Samuel Moreno"
       class="hero-photo">
  <div class="hero-text">
    <h2>Samuel here — 来てくれて感謝する!</h2>
    <p>I’m an Economist and Financial Analyst with a strong passion for data science and technology, driven by curiosity and a commitment to innovation, sustainability, and simple yet impactful solutions. My focus includes predictive modeling with machine learning, big data analytics, and AI financial market solutions. I am eager to apply my skills in the private financial sector, whether in research or hands-on roles.</p>
    <p>Beyond finance and technology, I enjoy exploring new business ideas, running, savoring a guid cup o’ coffee, and diving into history. I actively engage in private consulting (<a href="https://GregSom-MSc.github.io/contact">feel free to reach out</a>), pursue entrepreneurial ventures, and seek to transition into quantitative finance roles.</p>
    <p>I especially enjoy aquascaping, my favorite hobby. I am building some projects as of today, and I will be entering the reef-aquarium world soon enough.</p>
    <p>Feel free to explore my <a href="https://GregSom-MSc.github.io/research">projects, research, and some interesting readings</a>. I hope you will discover some valuable and inspiring resources.</p>
    <p>Also, I’m currently working on a nice Scotland guiding toolkit called <a href="https://guiame.ai">Guiame.ai</a> — built from scratch, helping others discover an authentic Scotland.</p>
    <p><b>Don’t hesitate to <a href="https://GregSom-MSc.github.io/contact">contact me or ask anything</a>.</b></p>
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
<h2>Lookin' for some nice Gadgets?</h2>
<div style="text-align: center; margin-top: 20px; margin-bottom: 2rem;">
    <p style="color: #333;">Explore my <strong>Linktree</strong>, it has some useful & aesthetic stuff that I use and recommend: </p>
    <a href="https://linktr.ee/somniverse" target="_blank" class="somniverse-btn">
        Somniverse
    </a>
</div>
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
