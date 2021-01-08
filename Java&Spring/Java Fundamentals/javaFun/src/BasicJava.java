import java.util.ArrayList;

public class BasicJava {
    public void printTo255(){
        for(int i = 1; i<=255; i++){
            System.out.println(i);
        }
    }

    public void printOddTo255(){
        for(int i = 1; i<=255; i++){
            if(i % 2 == 1){
                System.out.println(i);
            }
        }
    }

    public void printSum(){
        int sum = 0;
        for(int i = 0; i<=255; i++){
            sum = sum + i;
            System.out.println("New Number: "+i+", Sum: "+sum);
        }
    }

    public void iteratingArray(){
        int[] arr = {1,2,3,4};
        for(int i = 0; i<arr.length; i++){
            System.out.println(arr[i]);
        }
    }

    public void max(){
        int[] arr = {-1,2,0,-4,9,3};
        int max=0;
        for(int i = 0; i<arr.length; i++){
            if(max<arr[i]){
                max = arr[i];
            }
        }
        System.out.println(max);
    }

    public void avg(){
        int[] arr = {2, 10, 3};
        int sum=0;
        for(int i = 0; i<arr.length; i++){
            sum = sum + arr[i];
        }
        int avg = sum / arr.length;
        System.out.println(avg);
    }

    public void arrayOdd(){
        ArrayList<Integer> arr = new ArrayList<Integer>();
        for(int i = 0; i<=255; i++){
            if(i % 2 == 1){
                arr.add(i);
            }
        }
        System.out.println(arr);
    }

    public int greaterThanY(int[] arr, int y){
        int count = 0;
        for(int i = 0; i<arr.length; i++){
            if(y<arr[i]){
                count= count + 1;
            }
        }
        return count;
    }

    public void square(int[] arr){
        for(int i = 0; i<arr.length; i++){
            arr[i] = arr[i] * arr[i];
            System.out.println(arr[i]);
        }
    }

    public void eliminateNegatives(int[] nums) {
		for(int i = 0; i < nums.length; i++) {
			if(nums[i] < 0)
				nums[i] = 0;
		}
    }
    
    public int[] shifting(int[] arr){
        for(int i=0;i<arr.length;i++){
            try{
                arr[i] = arr[i+1];
            }
            catch(ArrayIndexOutOfBoundsException e){
                arr[i] = 0;
            }
        }
        return arr;
    }
}
