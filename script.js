// Remember, we're gonna use strict mode in all scripts now!
'use strict';

 var Name = "kumar";

const App = function(){
    this.Name = 'Selva App';
    this.ShowName = () => {
        console.log(`From App ${this.Name}`);
    }
}

 let appObject = new App();
 appObject.ShowName();

const AppLiteral = {
    Name: 'Selva AppLiteral',
    ShowName : function() {
        console.log(`from AppLiteral ${this.Name}`)
    }
}

AppLiteral.ShowName();

const AppSingleton = new function(){
    this.Name = "Selva AppSingleton";
    this.ShowName = () => {
        console.log(`from app singleton ${this.Name}`)
    }
}

AppSingleton.ShowName();