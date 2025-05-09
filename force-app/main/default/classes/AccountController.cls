public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getRecentAccounts(){
        // try {
                return [select id, name, type, isActive__c from Account order by createdDate desc limit 10];
        // } catch (Exception e) {
        //     System.debug('Error: ' + e.getMessage());
        //     throw new AuraHandledException(e.getMessage());
        // }
    }

    @AuraEnabled
    public static List<Account> getRecentAccounts1(){
        try {
                return [select id, name, type, isActive__c from Account order by createdDate desc limit 10];
        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }

        // if(true){
        //     return [select id, name, type, isActive__c from Account order by createdDate desc limit 10];
        // }else{
        //     System.debug('Error: ' + e.getMessage());
        // }
    }
}