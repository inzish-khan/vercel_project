document.getElementById('designationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const designationInput = document.getElementById('designation');
    const validationMessage = document.getElementById('validationMessage');
    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('designationForm');
    
    const designation = designationInput.value.trim();
    
    if (!designation) {
        // Empty field: show validation message
        validationMessage.classList.remove('hidden');
        designationInput.focus();
    } else {
        // Valid field: hide validation message, hide form, show success
        validationMessage.classList.add('hidden');
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
    }
});
