import java.lang.Math;
public class Pythagorean {
    public double calculateHypotenuse(int legA, int legB) {
        double A = legA;
        double B = legB;
        double c = Math.pow(A,2) + Math.pow(B,2);
        c = Math.sqrt(c);
        return c;
    }
}

