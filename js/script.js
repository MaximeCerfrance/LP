document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const wizard = document.getElementById('wizard');
  const closeWizard = document.getElementById('close-wizard');
  const form = document.getElementById('wizard-form');
  const steps = Array.from(document.querySelectorAll('.step'));
  const confirmation = document.getElementById('confirmation');
  const closeConfirmation = document.getElementById('close-confirmation');
  let currentStep = 0;

  function showWizard() {
    wizard.classList.add('open');
    wizard.setAttribute('aria-hidden', 'false');
  }

  function hideWizard() {
    wizard.classList.remove('open');
    wizard.setAttribute('aria-hidden', 'true');
  }

  startBtn.addEventListener('click', showWizard);
  closeWizard.addEventListener('click', hideWizard);

  document.querySelectorAll('.next').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove('active');
        currentStep++;
        steps[currentStep].classList.add('active');
      }
    });
  });

  document.querySelectorAll('.prev').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 0) {
        steps[currentStep].classList.remove('active');
        currentStep--;
        steps[currentStep].classList.add('active');
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.classList.add('hidden');
    confirmation.classList.remove('hidden');
  });

  closeConfirmation.addEventListener('click', () => {
    confirmation.classList.add('hidden');
    form.classList.remove('hidden');
    steps[currentStep].classList.remove('active');
    currentStep = 0;
    steps[currentStep].classList.add('active');
    hideWizard();
  });
});
