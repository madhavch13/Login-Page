document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Please fill in both fields.';
    } else {
        document.getElementById('error-message').textContent = '';
        console.log('Username:', username);
        console.log('Password:', password);
    }
});
