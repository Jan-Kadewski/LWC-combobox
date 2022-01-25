public with sharing class Users {
    
    @AuraEnabled(cacheable=true)
    public static List<User> getAllUsers(){
        return [Select Id,Name from User WITH SECURITY_ENFORCED];
   
   
   
   
   
    }
}
