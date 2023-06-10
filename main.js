const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  console.log(faq);
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
