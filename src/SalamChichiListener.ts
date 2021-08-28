// ...
import { SalamGrammarListener } from './ANTLR/SalamGrammarListener'
import { GContext,SContext } from "./ANTLR/SalamGrammarParser";

export default class SalamChichiListener implements SalamGrammarListener {
  private  theResult = 'salami2bare';
  enterG?: (ctx: GContext) =>{
  }

  exitS(ctx: SContext) {
    this.theResult+=ctx.text;
  }
  getResult(){return this.theResult;}
}
