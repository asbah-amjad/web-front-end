
function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
 }

const Myact = {

  createElement: function (tag, props, ...childNodes) {

    if(typeof tag === 'string'){

      const newElement = document.createElement(tag);
      for(let i=0; i<childNodes.length; i++){
        newElement.innerHTML = childNodes[i].text;
        root.append(newElement);
      }
    }
    if(isFunction(tag) === true){
      return tag(props);
    }
  }
  
}

const MyactDOM = {

  render: function (element, parent) {
    parent.remove();
    
    parent.append(element);
             
  }

}
