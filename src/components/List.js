import links from './links.json';

export function List(options) {
  this._elem = options.elem;
}

List.prototype.render = function() {
  for (let key in links) {
    const title = links[key]["title"].trim();
    const href = links[key]["href"];
    
    const li = document.createElement('li');
    li.innerHTML = `<a href=${href}>${title}</a>`;
    li.classList.add('project-list__item');
    this._elem.appendChild(li);
  }
  
  const p = document.createElement('p');
  p.innerHTML = 'learning in progress...';
  p.style.paddingTop = `20px`;
  this._elem.appendChild(p);
}