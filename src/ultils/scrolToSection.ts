import scrollIntoView from 'smooth-scroll-into-view-if-needed'

export function scrollToSection(sectionId: string) {
  const sectionElement = document.getElementById(sectionId)
  if (sectionElement) {
    scrollIntoView(sectionElement, { behavior: 'smooth' })
  }
}
