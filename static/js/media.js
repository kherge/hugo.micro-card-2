/**
 * Checks if permanent dark mode is enabled.
 * 
 * @return `true` if it is or `false` if not.
 */
const isPermaDark = () => {
  if (typeof PERMA_DARK != 'undefined') {
    return PERMA_DARK;
  }

  return false;
};

/**
 * Modifies an attribute in <html> to toggle dark mode.
 * 
 * Bootstrap does not automatically apply the dark mode color scheme. I believe this is done
 * to allow designers to control when it is applied, instead of assuming that it should always
 * be done. However, for this theme I want to automatically apply it to match the browser user's
 * preferred color scheme.
 * 
 * @param {boolean} isDarkMode Should dark mode be eanbled?
 */
const toggleDarkMode = isDarkMode => {
  const html = document.documentElement;

  if (isDarkMode || isPermaDark()) {
    html.setAttribute('data-bs-theme', 'dark');
  } else {
    html.removeAttribute('data-bs-theme');
  }
};

// Check if dark mode is enabled.
const media = window.matchMedia('(prefers-color-scheme: dark)');

// Immediately enable it if the user prefers it.
if (media.matches) {
  toggleDarkMode(true);
}

// Support manually switching between modes, useful for debugging.
media.addEventListener('change', event => toggleDarkMode(event.matches));