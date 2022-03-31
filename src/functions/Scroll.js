const navbarHeight = 100;

export function scrollToSection(elementRef) {
  window.scrollTo({
    top: elementRef.current.offsetTop - navbarHeight,
    behavior: "smooth",
  });
}
