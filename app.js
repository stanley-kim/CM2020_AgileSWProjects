const VERSION_APP = '1.00'

const Tree = require('./tree.js');

function build_ProblemTree() {
	ProblemTree = new Tree('What is your CM2025 score??', 'Above 60', '50 ~ 59');

	ID_Root = ProblemTree.get_Root_ID();
	ProblemTree.insert2(ID_Root, ID_Root + "0", true, 'What is 00th question?', 'Security', 'Graphics', null);
	ProblemTree.insert2(ID_Root, ID_Root + "1", true, 'What is 01th question?', 'OOP', 'Security', null);
	
	ID_Left_Child  = ProblemTree.get_Left_Child_ID(ID_Root);
	ID_Right_Child = ProblemTree.get_Right_Child_ID(ID_Root);

	ProblemTree.insert2(ID_Left_Child, ID_Left_Child + "0", true, 'What is 000th question?', 'Security', 'Graphics', null);
	ProblemTree.insert2(ID_Left_Child, ID_Left_Child + "1", true, 'What is 001th question?', 'Security', 'Graphics', null);	
	ProblemTree.insert2(ID_Right_Child, ID_Right_Child + "0", true, 'What is 010th question?', 'Security', 'Graphics', null);
	ProblemTree.insert2(ID_Right_Child, ID_Right_Child + "1", true, 'What is 011th question?', 'Security', 'Graphics', null);
	
	ID_LL_Child = ProblemTree.get_Left_Child_ID(ID_Left_Child);
	ID_LR_Child = ProblemTree.get_Right_Child_ID(ID_Left_Child);
	ID_RL_Child = ProblemTree.get_Left_Child_ID(ID_Right_Child);
	ID_RR_Child = ProblemTree.get_Right_Child_ID(ID_Right_Child);

	ProblemTree.insert2(ID_LL_Child, ID_LL_Child + "0", true, 'What is 0000th question?', 'Security', 'Graphics', null);
	ProblemTree.insert2(ID_LL_Child, ID_LL_Child + "1", true, 'What is 0001th question?', 'Security', 'Graphics', null);	
	ProblemTree.insert2(ID_LR_Child, ID_LR_Child + "0", true, 'What is 0010th question?', 'Security', 'Graphics', null);
	ProblemTree.insert2(ID_LR_Child, ID_LR_Child + "1", true, 'What is 0011th question?', 'Security', 'Graphics', null);
	ProblemTree.insert2(ID_RL_Child, ID_RL_Child + "0", true, 'What is 0100th question?', 'Security', 'Graphics', null);
	ProblemTree.insert2(ID_RL_Child, ID_RL_Child + "1", true, 'What is 0101th question?', 'Security', 'Graphics', null);
	ProblemTree.insert2(ID_RR_Child, ID_RR_Child + "0", true, 'What is 0110th question?', 'Security', 'Graphics', null);
	ProblemTree.insert2(ID_RR_Child, ID_RR_Child + "1", true, 'What is 0111th question?', 'Security', 'Graphics', null);	

	ID_LLL_Child = ProblemTree.get_Left_Child_ID(ID_LL_Child);
	ID_LLR_Child = ProblemTree.get_Right_Child_ID(ID_LL_Child);
	ID_LRL_Child = ProblemTree.get_Left_Child_ID(ID_LR_Child);
	ID_LRR_Child = ProblemTree.get_Right_Child_ID(ID_LR_Child);
	ID_RLL_Child = ProblemTree.get_Left_Child_ID(ID_RL_Child);
	ID_RLR_Child = ProblemTree.get_Right_Child_ID(ID_RL_Child);
	ID_RRL_Child = ProblemTree.get_Left_Child_ID(ID_RR_Child);
	ID_RRR_Child = ProblemTree.get_Right_Child_ID(ID_RR_Child);

	ProblemTree.insert2(ID_LLL_Child, ID_LLL_Child + "0", false, "1", "2", "3", "Suggestion 00000");
	ProblemTree.insert2(ID_LLL_Child, ID_LLL_Child + "1", false, null, null, null, "Suggestion 00001");
	ProblemTree.insert2(ID_LLR_Child, ID_LLR_Child + "0", false, null, null, null, "Suggestion 00010");
	ProblemTree.insert2(ID_LLR_Child, ID_LLR_Child + "1", false, null, null, null, "Suggestion 00011");
	ProblemTree.insert2(ID_LRL_Child, ID_LRL_Child + "0", false, null, null, null, "Suggestion 00100");
	ProblemTree.insert2(ID_LRL_Child, ID_LRL_Child + "1", false, null, null, null, "Suggestion 00101");
	ProblemTree.insert2(ID_LRR_Child, ID_LRR_Child + "0", false, null, null, null, "Suggestion 00110");
	ProblemTree.insert2(ID_LRR_Child, ID_LRR_Child + "1", false, null, null, null, "Suggestion 00111");
	ProblemTree.insert2(ID_RLL_Child, ID_RLL_Child + "0", false, null, null, null, "Suggestion 01000");
	ProblemTree.insert2(ID_RLL_Child, ID_RLL_Child + "1", false, null, null, null, "Suggestion 01001");
	ProblemTree.insert2(ID_RLR_Child, ID_RLR_Child + "0", false, null, null, null, "Suggestion 01010");
	ProblemTree.insert2(ID_RLR_Child, ID_RLR_Child + "1", false, null, null, null, "Suggestion 01011");
	ProblemTree.insert2(ID_RRL_Child, ID_RRL_Child + "0", false, null, null, null, "Suggestion 01100");
	ProblemTree.insert2(ID_RRL_Child, ID_RRL_Child + "1", false, null, null, null, "Suggestion 01101");
	ProblemTree.insert2(ID_RRR_Child, ID_RRR_Child + "0", false, null, null, null, "Suggestion 01110");
	ProblemTree.insert2(ID_RRR_Child, ID_RRR_Child + "1", false, null, null, null, "Suggestion 01111");

	return ProblemTree;
}

ProblemTree = build_ProblemTree();

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
