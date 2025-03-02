document.addEventListener('DOMContentLoaded', function() {
    let participantCount = 1;

    const addButton = document.getElementById('add');
    const participantFieldset = document.querySelector('.participants');
    const form = document.querySelector('form');
    const summaryElement = document.querySelector('#summary');

    addButton.addEventListener('click', function() {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const adultName = document.querySelector('#adult_name').value;
        const totalFee = totalFees();

        const info = {
            adultName: adultName,
            participantCount: participantCount,
            totalFee: totalFee
        };

        form.style.display = 'none';
        summaryElement.style.display = 'block';

        summaryElement.innerHTML = successTemplate(info);
    });
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];

    const total = feeElements.reduce((sum, feeInput) => {
        return sum + (parseFloat(feeInput.value) || 0); 
    }, 0);

    return total;
}

function successTemplate(info) {
    return `
        <p>Thank you ${info.adultName} for registering.</p>
        <p>You have registered ${info.participantCount} participants and owe $${info.totalFee.toFixed(2)} in fees.</p>
    `;
}

function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}">First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname${count}" required />
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date${count}" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select id="grade${count}" name="grade${count}">
                    <option selected value="" disabled selected></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>
    `;
}
