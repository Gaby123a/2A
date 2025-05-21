<script>
  // Função pra abrir o modal com infos do produto
  function abrirModal(imagem, titulo, descricao) {
    document.getElementById("modalImagem").src = imagem;
    document.getElementById("modalTitulo").innerText = titulo;
    document.getElementById("modalDescricao").innerText = descricao;
    document.getElementById("modal").style.display = "flex";
  }

  // Fechar modal
  function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }

  // Coloca a data atual no rodapé
  document.getElementById("dataAtual").textContent = new Date().toLocaleDateString('pt-BR');

  // Fecha modal se clicar fora do conteúdo
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
</script>
