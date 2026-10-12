(() => {
  const triggers = document.querySelectorAll('.accordion-trigger');
  if (triggers.length === 0) return;

  function getPanel(trigger) {
    return document.getElementById(trigger.getAttribute('aria-controls'));
  }

  function setOpen(trigger, open) {
    const panel = getPanel(trigger);

    trigger.setAttribute('aria-expanded', String(open));
    trigger.closest('.accordion-item').classList.toggle('is-open', open);
    panel.style.maxHeight = open ? `${panel.scrollHeight}px` : '0px';
  }

  triggers.forEach((trigger) => {
    setOpen(trigger, false);

    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      setOpen(trigger, !isOpen);
    });
  });

  window.addEventListener('resize', () => {
    triggers.forEach((trigger) => {
      if (trigger.getAttribute('aria-expanded') === 'true') {
        const panel = getPanel(trigger);
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
})();
