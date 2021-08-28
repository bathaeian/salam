grammar SalamGrammar;

g : s (s)*;
s : 'Salam' ID Y;
Y : '!';
ID : [a-z]+;
EOL: [\r\n] + -> skip;
WS: [ \t] -> skip;