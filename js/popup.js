(() => {
  const popup = document.getElementById('subscribe-popup');
  const openButton = document.getElementById('subscribe-open');
  if (!popup || !openButton) return;

  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const closeButton = popup.querySelector('.popup-close');
  const form = document.getElementById('subscribe-form');
  const emailInput = document.getElementById('subscribe-email');
  const errorElement = document.getElementById('subscribe-email-error');
  const successMessage = document.getElementById('subscribe-success');

  function resetForm() {
    form.reset();
    form.hidden = false;
    successMessage.hidden = true;
    errorElement.textContent = '';
    emailInput.classList.remove('is-invalid');
    emailInput.removeAttribute('aria-invalid');
  }

  function openPopup() {
    resetForm();
    popup.classList.add('is-open');
    popup.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    emailInput.focus();
  }

  function closePopup() {
    popup.classList.remove('is-open');
    popup.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    openButton.focus();
  }

  openButton.addEventListener('click', openPopup);
  closeButton.addEventListener('click', closePopup);

  popup.addEventListener('click', (event) => {
    if (event.target === popup) closePopup();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && popup.classList.contains('is-open')) closePopup();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    let message = '';
    if (!email) message = 'Please enter your email address.';
    else if (!EMAIL_PATTERN.test(email)) message = 'Enter a valid email address, for example name@example.com.';

    errorElement.textContent = message;
    emailInput.classList.toggle('is-invalid', message !== '');
    emailInput.setAttribute('aria-invalid', String(message !== ''));

    if (message) {
      emailInput.focus();
      return;
    }

    form.hidden = true;
    successMessage.textContent = `Thank you! Event reminders will be sent to ${email}.`;
    successMessage.hidden = false;
  });
})();
