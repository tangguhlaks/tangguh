// Open modal
document.getElementById("aiChatBtn").addEventListener("click", () => {
  new bootstrap.Modal(document.getElementById("aiChatModal")).show();
});

// Handle send
document.getElementById("sendBtn").addEventListener("click", () => {
  const input = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");
  const userMessage = input.value.trim();
  if (!userMessage) return;

  chatBox.innerHTML += `<div class="mt-2"><b>You:</b> ${userMessage}</div>`;
  input.value = "";

  setTimeout(() => {
    chatBox.innerHTML += `<div class="mt-2" style="color:#66FD0F;"><b>AI:</b> This is a demo reply for "${userMessage}".</div>`;
    chatBox.scrollTop = chatBox.scrollHeight; // auto scroll ke bawah
  }, 800);
});
