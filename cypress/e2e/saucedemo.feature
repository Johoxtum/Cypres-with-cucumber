Feature: Login
  Como usuario
  Quiero poder iniciar sesión
  Para acceder al inventario

  Scenario: Login exitoso
    Given Estoy en la página de inicio de sesión
    When Ingreso mis credenciales válidas
    Then Debería ver la página url "inventory.html" con un titulo de bienvenida "Products"

  Scenario: Login fallido
    Given Estoy en la página de inicio de sesión
    When El usuario ingresa un nombre de usuario inválido "standard_user" y una contraseña inválida 1234
    Then El usuario ve el siguiente mensaje de error "Epic sadface: Username and password do not match any user in this service"