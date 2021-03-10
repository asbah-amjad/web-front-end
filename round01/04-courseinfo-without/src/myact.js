
const Myact = {

  createElement: function (tag, props, ...childNodes) {

    if(typeof tag === 'string'){
      const newElement = document.createElement(tag); 
      for(let i=0; i<childNodes.length; i++){
        newElement.append(childNodes[i]);
      }
      return newElement;    
    }
    if(typeof tag === 'function'){
      const newElement = tag(props);
      for(let i=0; i<childNodes.length; i++){
        newElement.append(childNodes[i]);
      }
      return newElement;
    }

  }
  
}

const MyactDOM = {

  render: function (element, parent) {

    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }  
    parent.append(element);
             
  }

}
