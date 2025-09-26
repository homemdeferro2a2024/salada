// Abrir painel de acessibilidade
document.getElementById('btn-acessibilidade').addEventListener('click', () => {
  const painel = document.getElementById('painel-acessibilidade');
  painel.setAttribute('aria-hidden', 'false');
  document.getElementById('btn-fechar').focus();
});

// Fechar painel
document.getElementById('btn-fechar').addEventListener('click', () => {
  const painel = document.getElementById('painel-acessibilidade');
  painel.setAttribute('aria-hidden', 'true');
  document.getElementById('btn-acessibilidade').focus();
});

// Alternar contraste
document.getElementById('toggle-contraste').addEventListener('click', () => {
  document.body.classList.toggle('alto-contraste');
});

// Alternar tamanho de fonte
document.getElementById('toggle-fonte').addEventListener('click', () => {
  document.body.classList.toggle('fonte-grande');
});

// Formulário (simples alerta)
document.getElementById('form-contato').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
});
