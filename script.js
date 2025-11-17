// Minimal client JS: render projects, theme toggle, year
document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projects-grid');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  // Load projects from local JSON file
  fetch('projects.json')
    .then(r => {
      if(!r.ok) throw new Error('Network response not ok');
      return r.json();
    })
    .then(data => renderProjects(data))
    .catch(err => {
      console.error('Failed to load projects.json', err);
      projectsGrid.innerHTML = '<p class="muted">No projects to show. Add some to projects.json.</p>';
    });

  function renderProjects(list) {
    if(!Array.isArray(list) || list.length === 0){
      projectsGrid.innerHTML = '<p class="muted">No projects yet — add some to projects.json.</p>';
      return;
    }
    projectsGrid.innerHTML = '';
    list.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <h4>${escapeHtml(p.title)}</h4>
        <p class="muted">${escapeHtml(p.description)}</p>
        <p class="meta">
          ${p.live ? `<a href="${escapeHtml(p.live)}" target="_blank" rel="noopener">Live</a> · ` : ''}
          ${p.repo ? `<a href="${escapeHtml(p.repo)}" target="_blank" rel="noopener">Repo</a>` : ''}
        </p>
      `;
      projectsGrid.appendChild(card);
    });
  }

  // Basic escape
  function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])) }

  // Theme toggle (dark/light) - stores in localStorage
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;
  const stored = localStorage.getItem('site-theme');
  if(stored === 'light') htmlEl.setAttribute('data-theme','light');

  themeToggle.addEventListener('click', () => {
    const now = localStorage.getItem('site-theme');
    if(now === 'light'){
      localStorage.removeItem('site-theme');
      htmlEl.removeAttribute('data-theme');
    } else {
      localStorage.setItem('site-theme','light');
      htmlEl.setAttribute('data-theme','light');
    }
  });
});