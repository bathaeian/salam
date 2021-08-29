# salam
salam means hello in Persian
<br>
monaco editor + antlr + react
<ol>
  <li>install nodejs</li>
  <li>copy the project in a folder</li>
<li>run these commands in that folder</li>
<li>npx create-react-app salam -tsx --typescript</li>
<li>//Adding TypeScript to existing create-react-app project------>  npm install --save typescript @types/node @types/react @types/react-dom @types/jest</li>
<li>npm install @monaco-editor/react</li>
<li>add 1 file:---> SalamGrammar.g4</li>
<li>npm add antlr4ts</li>
<li>npm add -D antlr4ts-cli</li>
  <li>change package.json--------> add to scripts: "antlr4ts": "antlr4ts ./SalamGrammar.g4 -o ./src/ANTLR"</li>
<li>npm run antlr4ts</li>
  <li>add 3 files: SalamErrorListener, SalamChichiListener, parser</li>
  <li>change App.js</li>
</ol>
