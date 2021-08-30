import { SalamGrammarParser, GContext } from "./ANTLR/SalamGrammarParser";
import { SalamGrammarLexer } from "./ANTLR/SalamGrammarLexer";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import {SalamGrammarListener} from "./ANTLR/SalamGrammarListener";
import SalamChichiListener from "./SalamChichiListener";
import {SalamErrorListener, ISalamError } from "./SalamErrorListener";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';


function parse(code: string): {ast:GContext, errors: ISalamError[],chi:string} {
    const inputStream = new ANTLRInputStream(code);
    const lexer = new SalamGrammarLexer(inputStream);
    lexer.removeErrorListeners()
    const salamErrorsListener = new SalamErrorListener();
    lexer.addErrorListener(salamErrorsListener);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SalamGrammarParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(salamErrorsListener);
    const ast =  parser.g();
    const errors:ISalamError[]  = salamErrorsListener.getErrors();
    const chichi: SalamChichiListener = new SalamChichiListener();
    // Use the entry point for listeners
    ParseTreeWalker.DEFAULT.walk(chichi as SalamGrammarListener, ast);
    const chi=chichi.getResult();
    return {ast, errors,chi};
}
export function parseAndGetASTRoot(code: string): GContext {
    const {ast} = parse(code);
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
export function parseAndGetChichi(code: string): string {
    const {chi} = parse(code);
    return chi;
}