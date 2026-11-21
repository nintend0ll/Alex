const copyEmailButton = document.querySelector("#copy-email");

copyEmailButton?.addEventListener("click", async () => {
  const email = "alex.gm.ink@gmail.com";

  try {
    await navigator.clipboard.writeText(email);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  const originalText = copyEmailButton.textContent;
  copyEmailButton.textContent = "¡Email copiado!";

  setTimeout(() => {
    copyEmailButton.textContent = originalText;
  }, 1800);
});

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("contextmenu", (event) => event.preventDefault());
  image.addEventListener("dragstart", (event) => event.preventDefault());
});

const revealElements = document.querySelectorAll(
  ".hero, .featured, .project-card, .about, .site-footer",
);

revealElements.forEach((element) => element.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealElements.forEach((element) => revealObserver.observe(element));
