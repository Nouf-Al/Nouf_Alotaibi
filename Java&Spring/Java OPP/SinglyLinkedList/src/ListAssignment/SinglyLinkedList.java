package ListAssignment;

public class SinglyLinkedList {
    public Node head;
    public SinglyLinkedList() {
        this.head=null;
    }
    
    public void printValues() {
        if(head == null) {
            System.out.println("No values");
        } else {
            Node runner = head;
            System.out.print("Vlaues in the linked list are:");
            while(runner != null) {
                System.out.print(runner.value+" ");
                runner = runner.next;
            }
        }
    }

    public void add(int value) {
        Node newNode = new Node(value);
        if(head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }
    
    public void remove() {
        if(head == null) {
            System.out.println("No values to remove");
        } else {
            Node runner = head;
            while(runner.next.next != null) {
                runner = runner.next;
            }
            runner.next = null;
        }
    }
    
    public Boolean find(int val) {
        Node runner = head;
        while(runner != null) {
            if(runner.value == val) {
            	return true;
            }
            runner = runner.next;
        }
        return false;
    }
}