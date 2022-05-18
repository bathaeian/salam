import { SalamGrammarParser, GContext } from "./ANTLR/SalamGrammarParser.ts";
import { SalamGrammarLexer } from "./ANTLR/SalamGrammarLexer.ts";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import {SalamGrammarListener} from "./ANTLR/SalamGrammarListener.ts";
import SalamChichiListener from "./SalamChichiListener.ts";
import {SalamErrorListener, ISalamError } from "./SalamErrorListener.ts";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import Y2salamListener  from "./Y2salamListener.ts";
var ast:GContext; 
function parse(code: string):{errors: ISalamError[]}{
    const inputStream = new ANTLRInputStream(code);
    const lexer = new SalamGrammarLexer(inputStream);
    lexer.removeErrorListeners()
    const salamErrorsListener = new SalamErrorListener();
    lexer.addErrorListener(salamErrorsListener);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SalamGrammarParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(salamErrorsListener);
    ast =  parser.g();
    //console.log(ast);
    const errors:ISalamError[]  = salamErrorsListener.getErrors();
    
    return {errors};
}
export function parseAndGetASTRoot(code: string): GContext {
    parse(code);
    return ast;
}
export function parseAndGetSyntaxErrors(code: string):string{// ISalamError[] {
    const {errors} = parse(code);
    let s:string;
    if(errors.length>0)
        s=errors[0].message;
    else s="no error";
    return s;
}
export function parseAndGetChichi(): string {
    const chichi: SalamChichiListener = new SalamChichiListener();
    ParseTreeWalker.DEFAULT.walk(chichi as SalamGrammarListener, ast);
    const chi=chichi.getResult();
    return chi;
}
export function y2salams(): string {
    const y2: Y2salamListener = new Y2salamListener();
    ParseTreeWalker.DEFAULT.walk(y2 as SalamGrammarListener, ast);
    const chi=y2.getResult();
    return chi;
}
