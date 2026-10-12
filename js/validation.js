(() => {
  const form = document.getElementById('signup-form');
  if (!form) return;

  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const MIN_PASSWORD_LENGTH = 8;
  const successMessage = document.getElementById('signup-success');

  const rules = {
    fullname(value) {
      if (!value) return 'Please enter your name.';
      if (value.length < 2) return 'Name must be at least 2 characters long.';
      return '';
    },
    email(value) {
      if (!value) return 'Please enter your email address.';
      if (!EMAIL_PATTERN.test(value)) return 'Enter a valid email address, for example name@example.com.';
      return '';
    },
    password(value) {
      if (!value) return 'Please create a password.';
      if (value.length < MIN_PASSWORD_LENGTH) {
        return `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`;
      }
      if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) {
        return 'Password must contain at least one letter and one number.';
      }
      return '';
    },
    confirmPassword(value) {
      if (!value) return 'Please repeat your password.';
      if (value !== form.elements.password.value) return 'Passwords do not match.';
      return '';
    },
    plan(value) {
      return value ? '' : 'Please choose a pass.';
    },
    terms(value, field) {
      return field.checked ? '' : 'You need to accept the house rules to continue.';
    }
  };

  const fields = Object.keys(rules).map((name) => form.elements[name]);

  function validateField(field) {
    const message = rules[field.name](field.value.trim(), field);
    const errorElement = document.getElementById(`${field.id}-error`);

    errorElement.textContent = message;
    field.classList.toggle('is-invalid', message !== '');
    field.classList.toggle('is-valid', message === '' && field.type !== 'checkbox');
    field.setAttribute('aria-invalid', String(message !== ''));

    return message === '';
  }

  fields.forEach((field) => {
    const eventName = field.type === 'checkbox' || field.tagName === 'SELECT' ? 'change' : 'input';

    field.addEventListener('blur', () => {
      field.dataset.touched = 'true';
      validateField(field);
    });

    field.addEventListener(eventName, () => {
      if (field.dataset.touched) validateField(field);

      if (field.name === 'password' && form.elements.confirmPassword.dataset.touched) {
        validateField(form.elements.confirmPassword);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    successMessage.hidden = true;

    const invalidFields = fields.filter((field) => {
      field.dataset.touched = 'true';
      return !validateField(field);
    });

    if (invalidFields.length > 0) {
      invalidFields[0].focus();
      return;
    }

    const name = form.elements.fullname.value.trim();
    successMessage.textContent = `Welcome, ${name}! Your account has been created.`;
    successMessage.hidden = false;

    form.reset();
    fields.forEach((field) => {
      delete field.dataset.touched;
      field.classList.remove('is-valid', 'is-invalid');
      field.removeAttribute('aria-invalid');
    });
  });
})();
