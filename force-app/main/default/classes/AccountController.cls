public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getRecentAccounts(){
        try {
                return [select id, name, type, isActive__c from Account order by createdDate desc limit 10];
        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }
    }
}