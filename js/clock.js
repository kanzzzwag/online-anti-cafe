(() => {
  const clock = document.getElementById('current-datetime');
  if (!clock) return;

  const DATE_FORMAT = { month: 'long', day: 'numeric', year: 'numeric' };
  const TIME_FORMAT = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };

  function renderDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', DATE_FORMAT);
    const time = now.toLocaleTimeString('en-US', TIME_FORMAT);

    clock.textContent = `${date}, ${time}`;
    clock.setAttribute('datetime', now.toISOString());
  }

  renderDateTime();
  setInterval(renderDateTime, 1000);
})();
