import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class PuzzleJava {
    public ArrayList<Integer> sumArr(int[] arr) {
        ArrayList<Integer> arr2 = new ArrayList<Integer>();
        int sum = 0;
        for (int x = 0; x < arr.length; x++) {
            sum += arr[x];
            if (arr[x] > 10) {
                arr2.add(arr[x]);
            }
        }
        System.out.println(sum);
        return arr2;
    }

    public ArrayList<String> Shuffle(ArrayList<String> arr) {
        ArrayList<String> arr2 = new ArrayList<String>();
        Collections.shuffle(arr);
        for (int x = 0; x < arr.size(); x++) {
            System.out.println(arr.get(x));
            if (arr.get(x).length() > 5) {
                arr2.add(arr.get(x));
            }
        }
        return arr2;
    }

    public void letters() {
        ArrayList<String> letters = new ArrayList<String>();
        letters.add("a");
        letters.add("b");
        letters.add("c");
        letters.add("d");
        letters.add("e");
        letters.add("f");
        letters.add("g");
        letters.add("h");
        letters.add("i");
        letters.add("j");
        letters.add("k");
        letters.add("l");
        letters.add("m");
        letters.add("n");
        letters.add("o");
        letters.add("p");
        letters.add("q");
        letters.add("r");
        letters.add("s");
        letters.add("t");
        letters.add("u");
        letters.add("v");
        letters.add("w");
        letters.add("x");
        letters.add("y");
        letters.add("z");
        Collections.shuffle(letters);
        System.out.println("Last Letter: " + letters.get(25) + ". ");
        if (letters.get(0).equals("a") || letters.get(0).equals("e") || letters.get(0).equals("i")
                || letters.get(0).equals("o") || letters.get(0).equals("u") || letters.get(0).equals("y")
                || letters.get(0).equals("w")) {
            System.out.println("First Letter: is a vowel.");
        } else {
            System.out.println("First Letter: " + letters.get(0) + ".");
        }
    }

    public ArrayList<Integer> random() {
        ArrayList<Integer> arr2 = new ArrayList<Integer>();
        for (int x = 1; x <= 10; x++) {
            Integer random_int = (int) (Math.random() * (100 - 55 + 1) + 55);
            arr2.add(random_int);
        }
        return arr2;
    }

    public ArrayList<Integer> randomSorted() {
        ArrayList<Integer> arr2 = new ArrayList<Integer>();
        for (int x = 1; x <= 10; x++) {
            Integer random_int = (int) (Math.random() * (100 - 55 + 1) + 55);
            arr2.add(random_int);
        }
        Collections.sort(arr2);
        int min = arr2.get(0);
        int max = arr2.get(9);
        System.out.println("Min: " + min + ". Max: " + max);
        return arr2;
    }

    public void random5() {
        byte[] array = new byte[5];
        new Random().nextBytes(array);
        String generatedString = new String(array, Charset.forName("UTF-8"));

        System.out.println(generatedString);
    }

    public ArrayList<String> random5in10() {
        ArrayList<String> arr2 = new ArrayList<String>();

        for (int x = 1; x <= 10; x++) {
            byte[] array = new byte[5];
            new Random().nextBytes(array);
            String generatedString = new String(array, Charset.forName("UTF-8"));
            arr2.add(generatedString);

        }
        return arr2;
    }
}
