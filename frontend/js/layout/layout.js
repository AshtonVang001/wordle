async function loadLayout(layoutPath) {
  const response = await fetch(layoutPath);

  if (!response.ok) {
    throw new Error("Failed to load layout");
  }

  const html = await response.text();

  const temp = document.createElement("div");
  temp.innerHTML = html;

  const headerEl = document.getElementById("layout-header");
  const footerEl = document.getElementById("layout-footer");

  if (headerEl) headerEl.innerHTML = temp.querySelector("header").outerHTML;
  if (footerEl) footerEl.innerHTML = temp.querySelector("footer").outerHTML;
}
