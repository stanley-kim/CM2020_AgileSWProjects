
class TreeNode {
	constructor(isProblem, id_problem, str_problem, str_ans0, str_ans1) {
		this.isProblem = isProblem;
		this.id_problem = id_problem;
		this.str_problem = str_problem;
		this.str_ans0 = str_ans0;
		this.str_ans1 = str_ans1;
		this.children_ans = [];
	}
}

class Tree {
	constructor(str_problem, str_ans0, str_ans1) {
		this.root = new TreeNode(true, "0", str_problem, str_ans0, str_ans1);
		this.dict_id = {"0": this.root};
	}
	insert(parentNode, id_problem, str_problem, str_ans0, str_ans1) {
		let newNode = new TreeNode(true, id_problem, str_problem, str_ans0, str_ans1);
		parentNode.children_ans.push(newNode);
		this.dict_id[id_problem] = newNode;
	}
}

function build_Tree() {
	ProblemTree = new Tree('What is your CM2025 score??', 'Above 60', '50 ~ 59');

	root_0 = ProblemTree.root;

	ProblemTree.insert(root_0, "00",  'What is 1-0th question?', 'Security', 'Graphics');
	ProblemTree.insert(root_0, "01", 'What is 1-1th question?', 'OOP', 'Security');
	
	child_00 = root_0.children_ans[0];
	
	ProblemTree.insert(child_00, "000", 'What is 2-0th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_00, "001", 'What is 2-1th question?', 'Security', 'Graphics');
	
	child_01 = root_0.children_ans[1];
	
	ProblemTree.insert(child_01, "010", 'What is 2-2th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_01, "011", 'What is 2-3th question?', 'Security', 'Graphics');
	
	child_000 = child_00.children_ans[0];
	ProblemTree.insert(child_000, "0000", 'What is 3-0th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_000, "0001", 'What is 3-1th question?', 'Security', 'Graphics');
	
	child_001 = child_00.children_ans[1];
	ProblemTree.insert(child_001, "0010", 'What is 3-2th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_001, "0011", 'What is 3-3th question?', 'Security', 'Graphics');
	
	child_010 = child_01.children_ans[0];
	ProblemTree.insert(child_010, "0100", 'What is 3-4th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_010, "0101",  'What is 3-5th question?', 'Security', 'Graphics');
	
	child_011 = child_01.children_ans[1];
	ProblemTree.insert(child_011, "0110", 'What is 3-6th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_011, "0111",  'What is 3-7th question?', 'Security', 'Graphics');	
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

//app.locals.var = "000"

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

		app.locals.id_problem = selected_Child_Node.id_problem;
		app.locals.str_problem = selected_Child_Node.str_problem;
		app.locals.str_ans1 = selected_Child_Node.str_ans0;
		app.locals.str_ans2 = selected_Child_Node.str_ans1;
		res.render('home');
	}
);
 
app.listen(3000, () => {
		console.log('listening');  

	}  
); 
