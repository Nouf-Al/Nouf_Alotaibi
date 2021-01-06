public class Calculator {
	private double operandOne;
	private double operandTwo;
	public char operation;
	public double result;
	
	public Calculator(double operandOne, char operation , double operandTwo) {
		this.operandOne = operandOne;
		this.operandTwo = operandTwo;
		this.operation = operation;
		
		performOperation();
		getResult();
	}

	public void setOperandOne(double operandOne) {
		this.operandOne = operandOne;
	}
	
	public void setOperandTwo(double operandTwo) {
		this.operandTwo = operandTwo;
	}
	
	public void setOperation(char operation) {
		this.operation = operation;
	}
	
	public void getResult() {
		System.out.println(result);
	}
	
	public double performOperation() {
		if( this.operation == '+') {
			result = (operandOne) + (operandTwo);
		}
		if( this.operation == '-') {
			result = (operandOne) - (operandTwo);
		}
		return result;
	}	
}
