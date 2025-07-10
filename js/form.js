document.addEventListener('DOMContentLoaded', function () {

    const modalForm = document.querySelector('.modal-form')
    const formClose = document.querySelector('.form__close')
    const form = document.getElementById('contactForm');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const cvField = document.getElementById('cv');
    const messageField = document.getElementById('message');
    const inputs = document.querySelectorAll('.form__input-row');
    const formButtonClose = document.querySelector('.form__button-close')
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const cvError = document.getElementById('cvError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    const maxFileSize = 2 * 1024 * 1024; // 2 MB
    formClose.addEventListener('click', () => {
        modalForm.classList.remove('modalForm-visible')
    })
    // Add event listeners to inputs to handle class toggling for active state
    inputs.forEach(item => {
        let inp = item.querySelector('input');
        if (inp) {
            inp.addEventListener('change', () => {
                if (inp.value) {
                    item.classList.add('form__input-active');
                } else {
                    item.classList.remove('form__input-active');
                }
            });
        }

        // Check textarea as well
        let textarea = item.querySelector('textarea');
        if (textarea) {
            textarea.addEventListener('input', () => {
                if (textarea.value) {
                    item.classList.add('form__input-active');
                } else {
                    item.classList.remove('form__input-active');
                }
            });
        }
    });

    // Handle CV file upload and update label message
    cvField.addEventListener('change', function () {
        const cvLabel = document.querySelector('.form__label-cv');
        const file = cvField.files[0];

        if (file) {
            if (file.size <= maxFileSize) {
                cvError.textContent = ''; // Reset error
                cvLabel.textContent = 'CV Uploaded Successfully'; // Update label text
                cvLabel.classList.add('form__input-active'); // Add active class
            } else {
                cvError.textContent = 'File size must be less than 2 MB.'; // Show error
                cvLabel.textContent = 'Send CV'; // Restore label text
                cvLabel.classList.remove('form__input-active'); // Remove active class
            }
        } else {
            cvLabel.textContent = 'Send CV'; // Restore label text if no file selected
            cvLabel.classList.remove('form__input-active');
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;

        // Reset error messages
        nameError.textContent = '';
        emailError.textContent = '';
        cvError.textContent = '';
        messageError.textContent = '';

        // Validate name
        if (nameField.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailField.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Validate CV file
        const file = cvField.files[0];
        if (!file) {
            cvError.textContent = 'Please upload your CV.';
            isValid = false;
        } else if (file.size > maxFileSize) {
            cvError.textContent = 'File size must be less than 2 MB.';
            isValid = false;
        }

        // Validate message
        if (messageField.value.trim() === '') {
            messageError.textContent = 'Please enter a message.';
            isValid = false;
        }

        // If everything is valid, show success message and reset form
        if (isValid) {
            let wrapp = document.querySelector('.form')

            wrapp.classList.add('form-hidden')
            form.reset();
            document.querySelector('.form__label-cv').textContent = 'Send CV'; // Reset label text
            document.querySelector('.form__label-cv').classList.remove('form__input-active'); // Reset active class
            formButtonClose.addEventListener('click', () => {
                modalForm.classList.remove('modalForm-visible')
                wrapp.classList.remove('form-hidden')
            })
            setTimeout(() => {
                modalForm.classList.remove('modalForm-visible')
                wrapp.classList.remove('form-hidden')
            }, 2000)
        }
    });

    if (document.querySelectorAll('.btn')) {
        let btn = document.querySelectorAll('.btn')
        btn.forEach(item => {
            item.addEventListener('click', () => {

                const modal1 = document.querySelector('.modal-form')
                modal1.classList.add('modalForm-visible')
            })

        })
    }
});