
class TreeNode {
	constructor(isProblem, id_problem, str_problem, str_ans0, str_ans1, str_suggestion) {
		this.isProblem = isProblem;
		this.id_problem = id_problem;
		this.str_problem = str_problem;
		this.str_ans0 = str_ans0;
		this.str_ans1 = str_ans1;
		this.str_suggestion = str_suggestion;
		this.children_ans = [];
	}
}

class Tree {
	constructor(str_problem, str_ans0, str_ans1) {
		this.root = new TreeNode(true, "0", str_problem, str_ans0, str_ans1);
		this.dict_id = {"0": this.root};
	}
	insert(parentNode, isProblem, id_problem, str_problem, str_ans0, str_ans1, str_suggestion) {
		let newNode = new TreeNode(isProblem, id_problem, str_problem, str_ans0, str_ans1, str_suggestion);
		parentNode.children_ans.push(newNode);
		this.dict_id[id_problem] = newNode;
	}
}

function build_Tree() {
	ProblemTree = new Tree('What is your CM2025 score??', 'Above 60', '50 ~ 59', null);

	root_ID0 = ProblemTree.root;

	ProblemTree.insert(root_ID0, true, "00",  'What is 1-0th question?', 'Security', 'Graphics', null);
	ProblemTree.insert(root_ID0, true, "01", 'What is 1-1th question?', 'OOP', 'Security', null);
	
	child_ID00 = root_ID0.children_ans[0];
	
	ProblemTree.insert(child_ID00, true, "000", 'What is 2-0th question?', 'Security', 'Graphics', null);
	ProblemTree.insert(child_ID00, true, "001", 'What is 2-1th question?', 'Security', 'Graphics', null);
	
	child_ID01 = root_ID0.children_ans[1];
	
	ProblemTree.insert(child_ID01, true, "010", 'What is 2-2th question?', 'Security', 'Graphics', null);
	ProblemTree.insert(child_ID01, true, "011", 'What is 2-3th question?', 'Security', 'Graphics', null);
	
	child_ID000 = child_ID00.children_ans[0];
	ProblemTree.insert(child_ID000, true, "0000", 'What is 3-0th question?', 'Security', 'Graphics', null);
	ProblemTree.insert(child_ID000, true, "0001", 'What is 3-1th question?', 'Security', 'Graphics', null);
	
	child_ID001 = child_ID00.children_ans[1];
	ProblemTree.insert(child_ID001, true, "0010", 'What is 3-2th question?', 'Security', 'Graphics', null);
	ProblemTree.insert(child_ID001, true, "0011", 'What is 3-3th question?', 'Security', 'Graphics', null);
	
	child_ID010 = child_ID01.children_ans[0];
	ProblemTree.insert(child_ID010, true, "0100", 'What is 3-4th question?', 'Security', 'Graphics', null);
	ProblemTree.insert(child_ID010, true, "0101",  'What is 3-5th question?', 'Security', 'Graphics', null);
	
	child_ID011 = child_ID01.children_ans[1];
	ProblemTree.insert(child_ID011, true, "0110", 'What is 3-6th question?', 'Security', 'Graphics', null);
	ProblemTree.insert(child_ID011, true, "0111",  'What is 3-7th question?', 'Security', 'Graphics', null);	

	child_ID0000 = child_ID000.children_ans[0];
	ProblemTree.insert(child_ID0000, false, "00000", "1", "2", "3", "Suggestion 00000");
	ProblemTree.insert(child_ID0000, false, "00001", null, null, null, "Suggestion 00001");

	child_ID0001 = child_ID000.children_ans[1];
	ProblemTree.insert(child_ID0001, false, "00010", null, null, null, "Suggestion 00010");
	ProblemTree.insert(child_ID0001, false, "00011", null, null, null, "Suggestion 00011");

	child_ID0010 = child_ID001.children_ans[0];
	ProblemTree.insert(child_ID0010, false, "00100", null, null, null, "Suggestion 00100");
	ProblemTree.insert(child_ID0010, false, "00101", null, null, null, "Suggestion 00101");

	child_ID0011 = child_ID001.children_ans[1];
	ProblemTree.insert(child_ID0011, false, "00110", null, null, null, "Suggestion 00110");
	ProblemTree.insert(child_ID0011, false, "00111", null, null, null, "Suggestion 00111");

	child_ID0100 = child_ID010.children_ans[0];
	ProblemTree.insert(child_ID0100, false, "01000", null, null, null, "Suggestion 01000");
	ProblemTree.insert(child_ID0100, false, "01001", null, null, null, "Suggestion 01001");

	child_ID0101 = child_ID010.children_ans[1];
	ProblemTree.insert(child_ID0101, false, "01010", null, null, null, "Suggestion 01010");
	ProblemTree.insert(child_ID0101, false, "01011", null, null, null, "Suggestion 01011");

	child_ID0110 = child_ID011.children_ans[0];
	ProblemTree.insert(child_ID0110, false, "01100", null, null, null, "Suggestion 01100");
	ProblemTree.insert(child_ID0110, false, "01101", null, null, null, "Suggestion 01101");

	child_ID0111 = child_ID011.children_ans[1];
	ProblemTree.insert(child_ID0111, false, "01110", null, null, null, "Suggestion 01110");
	ProblemTree.insert(child_ID0111, false, "01111", null, null, null, "Suggestion 01111");

	return ProblemTree;
}



ProblemTree = build_Tree();

const app = require('express')();

app.set('view engine', 'ejs');
app.set('views', './views');

let express = require('express')
app.use(express.urlencoded({
	extended: true
}))

app.get('/', (req, res) => {
		app.locals.id_problem = ProblemTree.root.id_problem;
		app.locals.str_problem = ProblemTree.root.str_problem;
		app.locals.str_ans1 = ProblemTree.root.str_ans0;
		app.locals.str_ans2 = ProblemTree.root.str_ans1;		
		res.render('home');
	} 
);  
 
app.post('/ANS', function(req, res){
		console.log(req.body.Problem_Name)
		console.log(req.body.button)

		Parent_Node = ProblemTree.dict_id[req.body.Problem_Name];
		selected_Child_Node = Parent_Node.children_ans[(req.body.button == 'left')?0:1];

		if (selected_Child_Node.isProblem == true) {
			app.locals.id_problem = selected_Child_Node.id_problem;
			app.locals.str_problem = selected_Child_Node.str_problem;
			app.locals.str_ans1 = selected_Child_Node.str_ans0;
			app.locals.str_ans2 = selected_Child_Node.str_ans1;
			res.render('home');
		}
		else {
			console.log(selected_Child_Node.id_problem);
			console.log(selected_Child_Node.str_suggestion);
			app.locals.id_problem = selected_Child_Node.id_problem;
			app.locals.str_problem = selected_Child_Node.str_suggestion;	
			res.render('suggestion');
		}
	}
);
 
app.listen(3000, () => {
		console.log('listening');  

	}  
); 
