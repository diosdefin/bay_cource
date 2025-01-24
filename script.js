function goToPayment() {
    const course = document.getElementById('course').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (course && firstName && lastName && phoneNumber) {
        window.location.href = `payment.html?course=${course}&firstName=${firstName}&lastName=${lastName}&phoneNumber=${phoneNumber}`;
    } else {
        alert('Please fill in all fields');
    }
}