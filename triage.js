document.addEventListener('DOMContentLoaded', () => {
  const triage = {
    state: {
      category: null,
      details: {},
    },
    steps: {
      fix: {
        label: 'Fix something broken',
        followUps: [
          {
            key: 'brokenThing',
            type: 'text',
            label: 'What is broken?',
            placeholder: 'Example: email, CRM, file access, dashboard',
          },
          {
            key: 'impact',
            type: 'choice',
            label: 'How urgent is it?',
            options: ['Today', 'This week', 'Soon'],
          },
        ],
        summary(values) {
          return `You need help fixing ${values.brokenThing || 'a system issue'}${values.impact ? `, and it feels ${values.impact.toLowerCase()}` : ''}.`;
        },
        nextStep: 'I’d triage the breakage, isolate the bottleneck, and restore the workflow first.',
      },
      build: {
        label: 'Build something new',
        followUps: [
          {
            key: 'buildThing',
            type: 'text',
            label: 'What do you want to build?',
            placeholder: 'Example: internal tool, website, automation, dashboard',
          },
          {
            key: 'timeline',
            type: 'choice',
            label: 'Timeline',
            options: ['ASAP', 'This month', 'Exploring'],
          },
        ],
        summary(values) {
          return `You want to build ${values.buildThing || 'a new solution'}${values.timeline ? ` on a ${values.timeline.toLowerCase()} timeline` : ''}.`;
        },
        nextStep: 'I’d define the smallest useful version, then map the fastest path to launch.',
      },
      improve: {
        label: 'Improve or automate systems',
        followUps: [
          {
            key: 'system',
            type: 'text',
            label: 'Which process needs improvement?',
            placeholder: 'Example: onboarding, reporting, approvals, follow-up',
          },
          {
            key: 'goal',
            type: 'choice',
            label: 'What matters most?',
            options: ['Save time', 'Reduce errors', 'Scale output'],
          },
        ],
        summary(values) {
          return `You want to improve ${values.system || 'an internal process'} with a focus on ${values.goal ? values.goal.toLowerCase() : 'better performance'}.`;
        },
        nextStep: 'I’d identify the repeatable work, automate the handoffs, and tighten the process.',
      },
    },
    contact: {
      email: 'mailto:hello@example.com?subject=IT%20triage%20request',
      whatsapp: 'https://wa.me/233201517382?text=Hi%2C%20I%20just%20used%20your%20triage%20page%20and%20want%20to%20work%20with%20you.',
    },
  };

  const elements = {
    heroCta: document.getElementById('ask-question'),
    triage: document.getElementById('triage'),
    stepContainer: document.getElementById('triage-step'),
    output: document.getElementById('triage-output'),
    outputSummary: document.getElementById('triage-summary'),
    outputNext: document.getElementById('triage-next'),
    workEmail: document.getElementById('work-email'),
    workWhatsapp: document.getElementById('work-whatsapp'),
    trustSection: document.getElementById('trust-signals'),
    finalCta: document.getElementById('final-cta'),
  };

  function clearNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function renderCategoryStep() {
    clearNode(elements.stepContainer);

    const heading = document.createElement('div');
    heading.className = 'step-heading';
    heading.innerHTML = '<p class="step-kicker">Step 1 of 3</p><h2 id="triage-title">What do you need help with?</h2>';
    elements.stepContainer.appendChild(heading);

    const choices = document.createElement('div');
    choices.className = 'choice-grid';

    Object.entries(triage.steps).forEach(([key, step]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'choice-card';
      button.dataset.category = key;
      button.innerHTML = `<span>${step.label}</span><small>Tap to continue</small>`;
      button.addEventListener('click', () => selectCategory(key));
      choices.appendChild(button);
    });

    elements.stepContainer.appendChild(choices);
  }

  function renderFollowUps(category) {
    const config = triage.steps[category];
    clearNode(elements.stepContainer);

    const heading = document.createElement('div');
    heading.className = 'step-heading';
    heading.innerHTML = `<p class="step-kicker">Step 2 of 3</p><h2 id="triage-title">${config.label}</h2><p class="step-copy">Answer two quick prompts and I’ll give you a practical recommendation.</p>`;
    elements.stepContainer.appendChild(heading);

    const form = document.createElement('div');
    form.className = 'triage-form';

    config.followUps.forEach(field => {
      const fieldWrap = document.createElement('label');
      fieldWrap.className = 'field';
      fieldWrap.innerHTML = `<span>${field.label}</span>`;

      if (field.type === 'text') {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = field.placeholder;
        input.dataset.key = field.key;
        input.addEventListener('input', updateOutputButtonState);
        fieldWrap.appendChild(input);
      } else {
        const options = document.createElement('div');
        options.className = 'option-row';

        field.options.forEach(option => {
          const optionButton = document.createElement('button');
          optionButton.type = 'button';
          optionButton.className = 'mini-option';
          optionButton.textContent = option;
          optionButton.dataset.key = field.key;
          optionButton.dataset.value = option;
          optionButton.addEventListener('click', () => {
            form.querySelectorAll(`[data-key="${field.key}"]`).forEach(btn => btn.classList.remove('selected'));
            optionButton.classList.add('selected');
            updateOutputButtonState();
          });
          options.appendChild(optionButton);
        });

        fieldWrap.appendChild(options);
      }

      form.appendChild(fieldWrap);
    });

    const continueRow = document.createElement('div');
    continueRow.className = 'actions-row';
    const continueBtn = document.createElement('button');
    continueBtn.type = 'button';
    continueBtn.className = 'primary-btn';
    continueBtn.textContent = 'See recommendation';
    continueBtn.addEventListener('click', () => buildRecommendation(category));
    continueRow.appendChild(continueBtn);

    const resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'ghost-btn';
    resetBtn.textContent = 'Start over';
    resetBtn.addEventListener('click', resetFlow);
    continueRow.appendChild(resetBtn);

    form.appendChild(continueRow);
    elements.stepContainer.appendChild(form);
  }

  function collectAnswers() {
    const answers = {};
    elements.stepContainer.querySelectorAll('input[data-key]').forEach(input => {
      answers[input.dataset.key] = input.value.trim();
    });
    elements.stepContainer.querySelectorAll('.mini-option.selected').forEach(option => {
      answers[option.dataset.key] = option.dataset.value;
    });
    return answers;
  }

  function updateOutputButtonState() {
    const answers = collectAnswers();
    const category = triage.state.category;
    const required = triage.steps[category].followUps.map(field => field.key);
    const complete = required.every(key => Boolean(answers[key]));
    elements.stepContainer.querySelector('.primary-btn').disabled = !complete;
  }

  function selectCategory(category) {
    triage.state.category = category;
    triage.state.details = {};
    elements.triage.hidden = false;
    elements.output.hidden = true;
    renderFollowUps(category);
    elements.triage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function buildRecommendation(category) {
    const config = triage.steps[category];
    const answers = collectAnswers();
    triage.state.details = answers;

    const summary = config.summary(answers);
    elements.outputSummary.textContent = summary;
    elements.outputNext.textContent = config.nextStep;
    elements.workEmail.href = triage.contact.email;
    elements.workWhatsapp.href = triage.contact.whatsapp;
    elements.output.hidden = false;
    elements.output.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function resetFlow() {
    triage.state.category = null;
    triage.state.details = {};
    elements.triage.hidden = true;
    elements.output.hidden = true;
    renderCategoryStep();
    elements.heroCta.focus({ preventScroll: true });
    elements.heroCta.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  elements.heroCta.addEventListener('click', () => {
    elements.triage.hidden = false;
    renderCategoryStep();
    elements.triage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  renderCategoryStep();
  elements.workEmail.href = triage.contact.email;
  elements.workWhatsapp.href = triage.contact.whatsapp;
  elements.triage.hidden = true;
  elements.output.hidden = true;
});
