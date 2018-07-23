module.exports = function(system){

  const DOM = {};
  const i = function builder({type, className, children}){



  return builder;
  }


  const model = {

    cardType: {options: ['Visa', 'Other']},
    firstName: 'Alice',
    lastName: 'Kingsley',

    expirationMonth: '06',
    expirationYear: '1970',
  }

  const view = function(model){

    return `
      <div class="card-creditcard">
        <h1>${model.firstName}</h1>
      </div>
    `;

    return
      i('div', 'card-creditcard',
        i('h1', , model.firstName)
      )

      return

      open('div', '.card-creditcard', )
        .infoWarning(firstName)
        .text(lastName)
        .text(expirationMonth, '/', expirationYear)
      .close('div');

      const updater = containerFluid(model)

        .row()

          .col6()
            .lead(model.helloWorld)
          .end()

          .col6()
            .small(model.tinyText)
          .end()

        .end('close row')

      .done();

      updater({
        helloWorld: '',
        tinyText: '',
      })



  }

  const controller = function(){

  };

  system.on('object', object=>controller.emit('object', object)); // pipe...
  controller.on('object', model=>view(model) )




  console.log(view);


  function builder(literals, ...substitutions) {
    let result = "";

    console.log(substitutions);

    // run the loop only for the substitution count
    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }

    // add the last literal
    result += literals[literals.length - 1];

    return result;
}



}
