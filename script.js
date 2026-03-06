// app.js (Básico para teste)
document.addEventListener('DOMContentLoaded', () => {
  console.log("Plataforma Jurídica Iniciada");
  
  // Exemplo de renderização inicial (se não houver dados)
  const viewArea = document.getElementById('view-area');
  if(!viewArea.innerHTML.includes('empty')) {
     // Se já tiver conteúdo, não sobrescreve
  }
});

// Funções globais necessárias para o HTML funcionar
function switchTab(tabName) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add('active');
  // Aqui você chamaria a lógica para trocar o conteúdo
  console.log("Trocando para:", tabName);
}

function filterTopics() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const items = document.querySelectorAll('.topic-item');
  items.forEach(item => {
    const name = item.querySelector('.t-name').innerText.toLowerCase();
    item.style.display = name.includes(input) ? 'flex' : 'none';
  });
}
