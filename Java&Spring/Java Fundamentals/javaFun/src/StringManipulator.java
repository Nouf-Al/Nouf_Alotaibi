public class StringManipulator {
    public String trimAndConcat(String str1, String str2){
        return str1.trim().concat(str2.trim());
    }


    public Integer getIndexOrNull(String str, char charceter){
        int c = str.indexOf(charceter);
        if (c == -1){
            return null;
        }else{
            return c;
        }
    }

    public Integer getIndexOrNull(String str1, String str2){
        int c = str1.indexOf(str2);
        if (c == -1){
            return null;
        }else{
            return c;
        }
    }

    public String concatSubstring(String str1, int start, int end, String str2){
        // String[] c;
        // for (int i=0; i<end; i++) {
        //     if (i == start){
        //         c.push(str1[i]);
        //     }
        // }
        return str1.substring(start, end).concat(str2);
    }


}
