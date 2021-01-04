import java.util.HashMap;
import java.util.Set;

public class MapoftheHashmatique {
    public static void main(String[] args) {
        HashMap<String, String> infoList = new HashMap<String, String>();

        infoList.put("Name", "Nouf");
        infoList.put("Age", "23");

        String name = infoList.get("Name");
        System.out.println(name);

        Set<String> keys = infoList.keySet();
        for (String key : keys) {
            System.out.println(key+": "+infoList.get(key));
        }
    }
}
