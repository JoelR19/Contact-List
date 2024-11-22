const contacts = []; // Array para almacenar los contactos
    const contactList = document.getElementById('contactList');
    const searchInput = document.getElementById('search');

    // Agregar contacto
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      if (name) {
        contacts.push(name); // Agregar al array
        document.getElementById('name').value = ''; // Limpiar input
        displayContacts();
      }
    });

    // Buscar contactos en tiempo real
    searchInput.addEventListener('input', displayContacts);

    // Mostrar contactos en la lista
    function displayContacts() {
      const filter = searchInput.value.toLowerCase(); // Filtro de búsqueda
      contactList.innerHTML = ''; // Limpiar lista actual

      contacts.forEach((contact, index) => {
        if (contact.toLowerCase().includes(filter)) {
          const contactItem = document.createElement('div');
          contactItem.className = 'contact-item';

          const contactName = document.createElement('span');
          contactName.textContent = contact;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Eliminar';
          deleteButton.onclick = () => deleteContact(index);

          contactItem.appendChild(contactName);
          contactItem.appendChild(deleteButton);
          contactList.appendChild(contactItem);
        }
      });
    }

    // Eliminar contacto
    function deleteContact(index) {
      contacts.splice(index, 1); // Eliminar del array
      displayContacts(); // Actualizar lista
    }