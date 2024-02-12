
class TreeNode {
	constructor(isProblem, problem, ans0, ans1) {
		this.isProblem = isProblem;
		this.problem = problem;
		this.ans0 = ans0;
		this.ans1 = ans1;
		this.children_ans = [];
	}
}

class Tree {
	constructor(problem, ans0, ans1) {
		this.root = new TreeNode(true, problem, ans0, ans1);
		this.currentNode = this.root;
	}
	insert(parentNode, problem, ans0, ans1) {
		parentNode.children_ans.push(new TreeNode(true, problem, ans0, ans1));
	}
}

function build_Tree() {
	ProblemTree = new Tree('What is your CM2025 score??', 'Above 60', '50 ~ 59');

	root_0 = ProblemTree.root;

	ProblemTree.insert(root_0, 'What is 1-0th question?', 'Security', 'Graphics');
	ProblemTree.insert(root_0, 'What is 1-1th question?', 'OOP', 'Security');
	
	child_00 = root_0.children_ans[0];
	
	ProblemTree.insert(child_00, 'What is 2-0th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_00, 'What is 2-1th question?', 'Security', 'Graphics');
	
	child_01 = root_0.children_ans[1];
	
	ProblemTree.insert(child_01, 'What is 2-2th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_01, 'What is 2-3th question?', 'Security', 'Graphics');
	
	child_000 = child_00.children_ans[0];
	ProblemTree.insert(child_000, 'What is 3-0th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_000, 'What is 3-1th question?', 'Security', 'Graphics');
	
	child_001 = child_00.children_ans[1];
	ProblemTree.insert(child_001, 'What is 3-2th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_001, 'What is 3-3th question?', 'Security', 'Graphics');
	
	child_010 = child_01.children_ans[0];
	ProblemTree.insert(child_010, 'What is 3-4th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_010, 'What is 3-5th question?', 'Security', 'Graphics');
	
	child_011 = child_01.children_ans[1];
	ProblemTree.insert(child_011, 'What is 3-6th question?', 'Security', 'Graphics');
	ProblemTree.insert(child_011, 'What is 3-7th question?', 'Security', 'Graphics');	
	return ProblemTree;
}



ProblemTree = build_Tree();

const app = require('express')();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
		app.locals.problem = ProblemTree.root.problem;
		app.locals.ans1 = ProblemTree.root.ans0;
		app.locals.ans2 = ProblemTree.root.ans1;

		res.render('home');
	} 
);  
 
app.post('/ANS1', (req, res) => {
		ProblemTree.currentNode = ProblemTree.currentNode.children_ans[0]; 
		app.locals.problem = ProblemTree.currentNode.problem;
		app.locals.ans1 = ProblemTree.currentNode.ans0;
		app.locals.ans2 = ProblemTree.currentNode.ans1;
		res.render('home');
	}
);
 
app.post('/ANS2', (req, res) => {
	ProblemTree.currentNode = ProblemTree.currentNode.children_ans[1]; 
	app.locals.problem = ProblemTree.currentNode.problem;
	app.locals.ans1 = ProblemTree.currentNode.ans0;
	app.locals.ans2 = ProblemTree.currentNode.ans1;
	res.render('home');
	}
);

app.listen(3000, () => {
		console.log('listening');  

	}  
); 
