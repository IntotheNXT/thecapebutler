const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const placeGrid = document.querySelector('.place-grid');
const placeWide = document.querySelector('.place-card.place-wide');

if (placeGrid && placeWide && !placeGrid.querySelector('.place-cta')) {
  const style = document.createElement('style');
  style.textContent = `
    .place-card.place-cta {
      grid-column: span 4;
      display: flex;
      align-items: stretch;
      background: #e6ddcf;
    }
    .place-card.place-cta .place-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      min-height: 100%;
    }
    .place-card.place-cta h3 {
      font-size: 34px;
      line-height: 1.12;
    }
    .place-card.place-cta .place-cta-copy {
      margin: 0;
      color: #606d68;
      font-size: 14px;
    }
    .place-cta-button {
      margin-top: 28px;
      align-self: flex-start;
    }
    @media (max-width: 980px) {
      .place-card.place-cta { grid-column: span 12; }
    }
    @media (max-width: 720px) {
      .place-card.place-cta { display: block; }
    }
  `;
  document.head.appendChild(style);

  const card = document.createElement('article');
  card.className = 'place-card place-cta';
  card.innerHTML = `
    <div class="place-body">
      <div>
        <p class="place-location">Your trip</p>
        <h3>Planning a special trip to the Cape?</h3>
        <p class="place-cta-copy">Share your dates, who is travelling and what your family loves. We will come back with a first view on how we can help shape the Cape around you.</p>
      </div>
      <a class="button button-dark place-cta-button" href="mailto:bas.kemme@gmail.com?subject=Tell%20us%20about%20your%20Cape%20trip&body=Hello%20The%20Cape%20Butler%2C%0A%0AWe%20are%20planning%20a%20trip%20to%20the%20Cape.%0A%0ATravelling%20dates%3A%0AWho%20is%20travelling%3A%0ASpecial%20occasion%3A%0AWhat%20we%20love%3A%0AWhat%20would%20make%20the%20trip%20unforgettable%3A%0A%0AName%3A%0APhone%3A">Tell us about your trip</a>
    </div>
  `;
  placeWide.insertAdjacentElement('afterend', card);
}

const oldEmail = 'hello@thecapebutler.com';
const contactEmail = 'bas.kemme@gmail.com';

document.querySelectorAll(`a[href^="mailto:${oldEmail}"]`).forEach(link => {
  link.href = link.href.replace(`mailto:${oldEmail}`, `mailto:${contactEmail}`);
  if (link.textContent.trim() === oldEmail) {
    link.textContent = contactEmail;
  }
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
