(function () {
  const form = document.getElementById('resume-form');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[0-9]{10}$/.test(phone);
  }

  function showError(id, message) {
    const el = document.getElementById(id);
    el.textContent = message;
  }

  function resetErrors() {
    ['name-error', 'email-error', 'phone-error', 'role-error'].forEach(id => showError(id, ''));
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    resetErrors();

    let valid = true;

    const name = form.name.value.trim();
    if (!name) {
      showError('name-error', 'Please enter your full name.');
      valid = false;
    }

    const email = form.email.value.trim();
    if (!email) {
      showError('email-error', 'Please enter your email.');
      valid = false;
    } else if (!validateEmail(email)) {
      showError('email-error', 'Please enter a valid email address.');
      valid = false;
    }

    const phone = form.phone.value.trim();
    if (!phone) {
      showError('phone-error', 'Please enter your phone number.');
      valid = false;
    } else if (!validatePhone(phone)) {
      showError('phone-error', 'Please enter a valid phone number.');
      valid = false;
    }

    const role = form.role.value.trim();
    if (!role) {
      showError('role-error', 'Please enter your current role.');
      valid = false;
    }

    if (valid) {
      alert('Form submitted successfully!');
      form.reset();
    }
  });

  ['name', 'email', 'phone', 'role'].forEach(field => {
    form[field].addEventListener('input', () => {
      showError(field + '-error', '');
    });
  });
})();