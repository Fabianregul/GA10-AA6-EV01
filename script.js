if (window.location.pathname.endsWith('index.html')) {
  alert("Bienvenidos a la plataforma Eosem, estas son las credenciales para ingresar:\n\nUsuario: fabian\nContraseña: 12345678");
}

//AUTENTICACION DE USUARIO Y CONTRASEÑA
// 1 - Mock de base de datos de usuarios (simulación del servidor)
const mockDatabase = [
  { username: 'adso', password: '12345678' },
  { username: 'fabian', password: '12345678' }
];

// 2- Validación del formulario
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorDiv = document.getElementById('error');

  // 3 - Limpiar mensajes de error previos
  errorDiv.textContent = '';

  // 4 - Validaciones básicas
  if (!username || !password) {
      errorDiv.textContent = 'Todos los campos son obligatorios.';
      return;
  }

  if (password.length < 8) {
      errorDiv.textContent = 'La contraseña debe tener al menos 8 caracteres.';
      return;
  }

  // 5 - Simulación de autenticación
  const user = mockDatabase.find(user => user.username === username && user.password === password);

  if (user) {
      alert('Inicio de sesión exitoso');
      // Redirigir a otra página o mostrar contenido protegido
      window.location.href = "dashboard.html"; // Simulación de redirección
  } else {
      errorDiv.textContent = 'Nombre de usuario o contraseña incorrectos.';
  }
});

//-------------------------------------------------------------------------------------------------------

//ventana modal - inicio de sesion
  function openModal() {
    document.getElementById("modal").classList.remove("hidden");
    // Ajustar el scroll al inicio del modal
    const modalContent = document.getElementById('modalContent');
    modalContent.scrollTop = 0;

    // // Enfocar la imagen si es necesario
    // document.querySelector('#modalContent img').focus();
  }
  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
  }

  //ventanas modales de la dashboard
  function openDashboardModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeDashboardModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

