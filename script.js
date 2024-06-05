counter = 1
span = document.getElementById("participant-label");
span.innerText = span.textContent = `Participant's Card Color #${counter} (B/R)`;
function performMagic() {
    var input = document.getElementById(`input${counter}`).value;

    const participantColor = document.getElementById('participant-color').value.trim().toUpperCase();

    // Check conditions for correctness
    const isCorrect = (input.slice(-1) === ' ' && participantColor === 'R') ||
                      (!(input.slice(-1) === ' ') && participantColor === 'B');

    const resultElement = document.getElementById('result');
    resultElement.textContent = isCorrect ? `You're telling the truth!` : `That can't be true!`;
	counter += 1
	span.innerText = span.textContent = `Participant's Card Color #${counter} (B/R)`;
	document.getElementById('participant-color').value = ''
}