
class TreeNode {
	constructor(ID_NODE, IS_PROBLEM, STR_PROBLEM, STR_ANS0, STR_ANS1, STR_SUGGESTION) {
		this.id_Node = ID_NODE;
		this.isProblem = IS_PROBLEM;
		this.str_problem = STR_PROBLEM;
		this.str_ans0 = STR_ANS0;
		this.str_ans1 = STR_ANS1;
		this.str_suggestion = STR_SUGGESTION;
		this.children_ans = [];
	}
}

class Tree {
	constructor(STR_PROBLEM, STR_ANS0, STR_ANS1) {
		this.root = new TreeNode("0", true, STR_PROBLEM, STR_ANS0, STR_ANS1);
		this.dict_id = {"0": this.root};
	}
    get_Root_ID() {
        return this.root.id_Node;
    }
    get_Left_Child_ID(ID_PARENT) {
        return this.dict_id[ID_PARENT].children_ans[0].id_Node;
    }
    get_Right_Child_ID(ID_PARENT) {
        return this.dict_id[ID_PARENT].children_ans[1].id_Node;
    }
	insert2(Id_Parent, Id_Node, isProblem, str_problem, str_ans0, str_ans1, str_suggestion) {
		if (null == Id_Node || null == Id_Parent)
			return false;
		if (Id_Node in this.dict_id)
			return false;
		if (!(Id_Parent in this.dict_id))
		 	return false;
		if (isProblem && null == str_problem)
			return false;
		if (!isProblem && null == str_suggestion)
			return false;
		let newNode = new TreeNode(Id_Node, isProblem, str_problem, str_ans0, str_ans1, str_suggestion);
        let parentNode = this.dict_id[Id_Parent];
        parentNode.children_ans.push(newNode);
		this.dict_id[Id_Node] = newNode;
		return true;
	}

}

module.exports = TreeNode;
module.exports = Tree;