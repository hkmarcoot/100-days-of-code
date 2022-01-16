const jobInput = document.querySelector('#job-input');
const submitJob = document.querySelector('#submit-job');
const planToDos = document.querySelector('#plan-todos');
const hideEvidence = document.querySelector('#hide-evidence');

const obfuscation = [
    'Xmas shopping 🎅🏻',
    'make eggnog',
    'Give warm hugs to friends and family',
    'Snuggle up on the sofa with my hot water bottle',
]
let obfuscated = false;
let unhiddenList = [];

function createNewListElement(text) {
    const li = document.createElement('li');
    li.textContent = text + ' ';

    const span = document.createElement('span');
    span.innerText = '❌';
    li.appendChild(span);

    li.addEventListener('click', handleToggleDone)

    planToDos.appendChild(li);
}

function handleSubmitJob() {
    const value = jobInput.value;
    jobInput.value = '';
    if (!value) {
        return;
    }
    createNewListElement(value);
}

function handleEnterPress(e) {
    if (e.key === 'Enter') {
        handleSubmitJob();
    }
}

function handleToggleDone(e) {
    const targetSpan = e.target.querySelector('span');
    if (targetSpan.textContent === '❌') {
        targetSpan.textContent = '✅';
    } else {
        targetSpan.textContent = '❌'
    }
}

function hideEvidenceToggle() {
    if (!obfuscated) {
        planToDos.querySelectorAll('li').forEach((elem, idx) => {
            const currentText = elem.firstChild.textContent.trim();
            unhiddenList.push(currentText);
        });

        planToDos.textContent = '';
        unhiddenList.forEach((job, idx) => createNewListElement(obfuscation[idx % obfuscation.length]));
        hideEvidence.innerText = '👀 The coast is clear 👀'
    } else {
        planToDos.textContent = '';
        unhiddenList.forEach((job) => createNewListElement(job));
        unhiddenList = [];
        hideEvidence.innerText = '🆘 Hide evidence! 🆘 '
    }
    obfuscated = !obfuscated;
}

submitJob.addEventListener('click', handleSubmitJob);
planToDos.querySelectorAll('li').forEach((elem) => {
    elem.addEventListener('click', handleToggleDone);
});
hideEvidence.addEventListener('click', hideEvidenceToggle);
document.addEventListener('keyup', handleEnterPress);
