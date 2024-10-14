export const createTitle = (text) => {
  const h1 = document.createElement('h1');
  h1.className = 'text-2xl font-bold mb-4';
  h1.textContent = text;

  return h1;
};

export const createDiv = ({ id, className }) => {
  const div = document.createElement('div');
  if (id) div.id = id;
  if (className) div.className = className;

  return div;
};

export const createSelect = ({ id, className }) => {
  const select = document.createElement('select');
  if (id) select.id = id;
  if (className) select.className = className;

  return select;
};

export const createBtn = ({ id, className, text }) => {
  const button = document.createElement('button');
  if (id) button.id = id;
  if (className) button.className = 'bg-blue-500 text-white px-4 py-2 rounded' + className;
  if (text) button.textContent = text;

  return button;
};
