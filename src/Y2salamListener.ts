// ...
import { SalamGrammarListener } from './ANTLR/SalamGrammarListener.ts'
import {SContext } from "./ANTLR/SalamGrammarParser.ts";

export default class Y2salamListener implements SalamGrammarListener {
  private  theResult = '';
  private names=[];
  private errs=[];
  exitS(ctx: SContext) {
    const thisName=ctx.children[1].text;
    const found = this.names.find(element=>element===thisName);
    if(found===undefined){
      this.names.push(thisName);
    }
    else {this.errs.push(thisName);}
    
  }
  getResult(){
    if(this.errs.length>0){
      this.theResult="<p>you greeted more than 1 time to thise pepole : </p><h2>";
      this.theResult+=this.errs.toString();
      this.theResult+="</h2><p>don't worry,...try again</p>"
    }
    else{this.theResult="<p>Cangerdulations! You greeted </p><h2>";
      this.theResult+=this.names.length;
      this.theResult+="</h2><p>persons successfully</p>"}
      return this.theResult;}
}
