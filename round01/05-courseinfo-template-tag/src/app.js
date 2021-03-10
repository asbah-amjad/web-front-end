
// ------------------------------------------------------------ //
// ENTER COMMIT SHA OF YOUR REPO IN HERE                        //
// ------------------------------------------------------------ //
const commitSHA = '1ca2c5f';   //
// ------------------------------------------------------------ //

const App = ({data, template}) => {

  let templateClone = template.content.cloneNode(true)
  templateClone.querySelector('.header').textContent = data.name

  let content = templateClone.querySelector('.content').querySelectorAll('p')
  let total = 0
  for(let i = 0; i < content.length; i++) {
    content[i].textContent = data.parts[i].name + ' ' + data.parts[i].exercises
    total += data.parts[i].exercises
  }

  templateClone.querySelector('.total').textContent = total

  return templateClone

};
