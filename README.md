# Salesforce projects
 Códigos desenvolvidos para a plataforma de Salesforce
 //após ser chegar na fase de Fechada ganha ou fechada perdida
 //não pode alterar a fase
 
trigger Oportunidade on Opportunity (before update){
      if(Trigger.isBefore){
       if(Trigger.isupdate){
            for(Opportunity itemOppOld: Trigger.Old){
                        for(Opportunity itemNew: Trigger.New){
                       if (itemOppOld.StageName == 'Fechado/Ganho' || itemOppOld.StageName == 'Fechado/Perdido'){
                           itemNew.StageName.adderror ('Você não pode alterar essa fase');
                       }
                }               
            }
        }
      }

//Classe de teste

@istest
public class OppTeste {
    @isTest
    public static void cenario1 (){
        Opportunity NovoOpp = new Opportunity ();{
            NovoOpp.Name = 'TESTE';
            NovoOpp.StageName = 'Fechado/Ganho';
      		NovoOpp.CloseDate = Date.today();
                      
            INSERT NovoOpp;
     
            try{ 
            Opportunity NovoOpp1 = [SELECT Id FROM Opportunity WHERE StageName = 'Fechado/Ganho'];
            NovoOpp1.StageName = 'Nova Oportunidade';
                update NovoOpp1;}
            
            catch (DMLException e)
			{system.debug ('não pode alterar a fase');    
			system.debug ('Exceção'+e); }

// nesse caso também funciona a seguinte fórmula de validação
//OR(TEXT(PRIORVALUE(StageName)) = "Fechado/Ganho", TEXT(PRIORVALUE(StageName)) = "Fechado/Perdido")


