public class StringManipulatorTest {
    public static void main(String[] args){
        StringManipulator manipulator1 = new StringManipulator();
        String str = manipulator1.trimAndConcat("    Hello     ","     World    ");
        System.out.println(str);

        StringManipulator manipulator2 = new StringManipulator();
        char letter = 'o';
        Integer a = manipulator2.getIndexOrNull("Coding", letter);
        Integer b = manipulator2.getIndexOrNull("Hello World", letter);
        Integer c = manipulator2.getIndexOrNull("Hi", letter);
        System.out.println(a); // 1
        System.out.println(b); // 4
        System.out.println(c); // null

        StringManipulator manipulator3 = new StringManipulator();
        String word1 = "Hello";
        String subString = "llo";
        String notSubString = "world";
        Integer aa = manipulator3.getIndexOrNull(word1, subString);
        Integer bb = manipulator3.getIndexOrNull(word1, notSubString);
        System.out.println(aa); // 2
        System.out.println(bb); // null

        StringManipulator manipulator4 = new StringManipulator();
        String word = manipulator4.concatSubstring("Hello", 1, 2, "world");
        System.out.println(word); // eworld
    }
}
