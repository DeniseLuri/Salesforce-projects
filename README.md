# Salesforce projects
Triggers e seus testes
Regras de validação e fórmulas abaixo:

AND (
    ISPICKVAL(  Account.Active__c  , "No")
     
    OR(
    ISPICKVAL( StageName , "Closed Won") ,
   
    ISPICKVAL( StageName , "Closed Lost") ,
 
        )

ou ISPICKVAL(Account.Active__c, "No")
 && 
ISPICKVAL(StageName, "Closed Won") 
 ||  
ISPICKVAL(StageName,  "Closed Lost")

1.
Que não deixa salvar a conta sem que seja informado
Se a conta está ativa ou não
 
ISPICKVAL( Active__c ,"")
 
NOT( ISPICKVAL( Active__c , "Yes") || ISPICKVAL( Active__c , "No"))
 
TEXT(Active__c) <> "Yes" && TEXT(Active__c) <> "No"
 
AND(
 
NOT(ISPICKVAL( Active__c, "No")),
NOT(ISPICKVAL( Active__c, "Yes"))
)
 
ISBLANK(TEXT( Active__c ))
só é possível utilizar aqui quando o tem a função texto
 
deixar o campo obrigatório no layout
 
2.
Dentro de Oportunidade criar um campo formula que pega o Email do Proprietário da Conta
 Account.Owner.Email 
limite de relações 

3. 
Criar um Campo chamado Documento dentro de Lead
com duas opções  - CPF e CNPJ e Outro

Quando a Pessoa selecionar CPF no campo documento
O Campo CPF deve ser Obrigatório
ISPICKVAL( Documento__c , CPF) &&   ISBLANK(CPF_c__c )


Quando a Pessoa selecionar CNPJ no campo documento
O Campo CNPJ deve ser Obrigatório
ISPICKVAL( Documento__c , "CNPJ")  &&   ISBLANK(CNPJ_c__c )


Quando a Pessoa selecionar Outro no campo documento
O Campo Outro Documento deve ser Obrigatório
ISPICKVAL( Documento__c, Outro) &&  ISBLANK( OutroDocumento__c  )


com ou, cria uma regra só

ISPICKVAL( Documento__c , CPF) &&   ISBLANK(CPF_c__c ) ||
ISPICKVAL( Documento__c , "CNPJ")  &&   ISBLANK(CNPJ_c__c ) ||
ISPICKVAL( Documento__c, Outro) &&  ISBLANK( OutroDocumento__c  )
OR(
ISPICKVAL( Documento__c , CPF) &&   ISBLANK(CPF_c__c ),
ISPICKVAL( Documento__c , "CNPJ")  &&   ISBLANK(CNPJ_c__c ),
ISPICKVAL( Documento__c, Outro) &&  ISBLANK( OutroDocumento__c  ),
ISPICKVAL( Documento__c, “”))

NOT
OR (
ISPICKVAL( Documento__c , "CPF" ),
ISPICKVAL( Documento__c , "CNPJ" ),
ISPICKVAL( Documento__c , "Outro" )
)

