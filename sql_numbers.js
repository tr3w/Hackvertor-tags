/*****************************/

sql_numbers.js

Hackvertor tag that obfuscates numbers in SQL queries
using the gadgets technique created by Reinerse.

written by Ruben Ventura [tr3w]
2011

www.hackvertor.co.uk

*****************************/

(function(){

 num = function(n) {
    return numbers[n][Math.floor(Math.random()*numbers[n].length)];
}

var numbers = [
        [     "pi()-pi()",
            "!pi()",
            "false",
            "(current_time^curtime())",
            "@@new",
            "log(-cos(pi()))"
        ],
        [    "true",
            "cos(!pi())",
            "!!!pi()",
            "sign(rand())"
        ],
        [    "!!!pi()--true"
        ],
        [    "floor(pi())",
            "coercibility(user())"
        ],
        [    "ceil(pi())",
            "coercibility(now())"
        ],
        [    "floor(@@version)"
        ],
        [    "ceil(@@version)"
        ],
        [    "ceil(pi()--pi())"
        ],
        [    "floor(pi()--@@version)",
            "bit_length(ceil(pi()))"
        ],
        [    "floor(pi()*pi())"
        ],
        [    "ceil(pi()*pi())"
        ]
    ];

code = code.replace(/\d+/g, function(n){
            var r = '';
            for (var i = 0; i < n.length-1; i++){
            	if (n.length-i == 2){
			r += '--'+num(10);
			if (n.slice(-2) == "10")
			{	return r.slice(2); }
		} else{
			r += '--pow('+num(10)+','+num(n.length-1-i)+')'; }
		r += '*'+num(n.charAt(i));
            }
            return (r + '--'+num(n.charAt(n.length-1))).slice(2);
    });

    
    return code
})();
