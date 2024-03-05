const VERSION_APP = '1.01'

ProblemTree = require('./build_Problem_Tree.js')();

const app = require('express')();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(require('express').urlencoded({
	extended: true
}))
 
app.get('/', (req, res) => {
		app.locals.Id_Node = ProblemTree.root.id_Node;
		app.locals.Str_Problem = ProblemTree.root.str_problem;
		app.locals.Str_Ans1 = ProblemTree.root.str_ans0;
		app.locals.Str_Ans2 = ProblemTree.root.str_ans1;		
		res.render('home');
	} 
);  
 
app.post('/ANS', function(req, res){
		console.log('<', req.body.Problem_Name, '->', req.body.button, '>');

		Parent_Node = ProblemTree.dict_id[req.body.Problem_Name];
		selected_Child_Node = Parent_Node.children_ans[(req.body.button == 'left')?0:1];

		if (selected_Child_Node.isProblem == true) {
			app.locals.Id_Node = selected_Child_Node.id_Node;
			app.locals.Str_Problem = selected_Child_Node.str_problem;
			app.locals.Str_Ans1 = selected_Child_Node.str_ans0;
			app.locals.Str_Ans2 = selected_Child_Node.str_ans1;
			res.render('home');
		}
		else {
			console.log('[',selected_Child_Node.id_Node, selected_Child_Node.str_suggestion, ']');
			app.locals.Id_Node = selected_Child_Node.id_Node;
			app.locals.Str_Suggestion = selected_Child_Node.str_suggestion;	
			res.render('suggestion');
		}
	}
);
 
app.listen(process.env.PORT || 3000, () => {
		console.log(VERSION_APP, 'listening');  

	}  
); 
