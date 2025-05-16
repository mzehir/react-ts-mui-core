export const disableFloatingInputs = () => {
  const inputEls = document.querySelectorAll('input.ag-input-field-input.ag-text-field-input');

  inputEls.forEach((el) => {
    const wrapper = el.closest('.ag-floating-filter-input');
    if (wrapper) {
      (el as HTMLInputElement).disabled = true;
    }
  });
};

export const waitForGridHeader = (observer: MutationObserver) => {
  const gridHeader = document.querySelector('.ag-header');
  if (gridHeader) {
    observer.observe(gridHeader, {
      childList: true,
      subtree: true,
    });
  } else {
    setTimeout(() => {
      waitForGridHeader(observer);
    }, 50);
  }
};
