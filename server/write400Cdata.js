async function write400Cdata(){
    console.log("Fn Starts")
    try{
      
      const resp1 =  await fetch("http://localhost:5000/crms400Cdata")
      const resp2 =  await fetch("http://localhost:5000/crmsconfigdata/1")
      const jsonresponse1 =  await resp1.json();
      const jsonresponse2 =  await resp2.json();
      console.log("Data", jsonresponse1)
      
      var crms400CWriteStream = fs.createWriteStream('CRMS400C.xml');
      crms400CWriteStream.write(`<?xml version="1.0" encoding="UTF-8"?>\r\n`);
      crms400CWriteStream.write(`<CALLREPORT xsi:noNamespaceSchemaLocation="CRMS_SCHEMA_400C_001.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\r\n`);            
      crms400CWriteStream.write(`    <HEADER>\r\n`);
      crms400CWriteStream.write(`         <CALLREPORT_ID>CRMS400C</CALLREPORT_ID>\r\n`);
      crms400CWriteStream.write(`         <CALLREPORT_DESC>Update of Outstanding Balance and Liquidation of Existing Facility</CALLREPORT_DESC>\r\n`);
      crms400CWriteStream.write(`         <INST_CODE>${jsonresponse2.bankcode}</INST_CODE>\r\n`);
      crms400CWriteStream.write(`         <INST_NAME>${jsonresponse2.bankname}</INST_NAME>\r\n`);
      crms400CWriteStream.write(`         <AS_AT>${jsonresponse2.reportdate.substring(8,10)+"-"+jsonresponse2.reportdate.substring(5,7)+"-"+jsonresponse2.reportdate.substring(0,4)}</AS_AT>\r\n`);
      crms400CWriteStream.write(`    </HEADER>\r\n`);
      crms400CWriteStream.write(`    <BODY>\r\n`);
    for(var i in jsonresponse1){
      crms400CWriteStream.write(`        <CALLREPORT_DATA>\r\n`);
      crms400CWriteStream.write(`               <SL_NO>${jsonresponse1[i].sno}</SL_NO>\r\n`);
      crms400CWriteStream.write(`               <UNIQUE_IDENTIFICATION_TYPE>${jsonresponse1[i].uniqidentify1}</UNIQUE_IDENTIFICATION_TYPE>\r\n`);
      crms400CWriteStream.write(`               <UNIQUE_IDENTIFICATION_NO>${jsonresponse1[i].uniidentifno}</UNIQUE_IDENTIFICATION_NO>\r\n`);
      crms400CWriteStream.write(`               <CRMS_REFERENCE_NUMBER>${jsonresponse1[i].crmsrefnumber}</CRMS_REFERENCE_NUMBER>\r\n`);
      crms400CWriteStream.write(`               <OUTSTANDING_AMOUNT>${((jsonresponse1[i].outstandingamount)).toFixed(2)}</OUTSTANDING_AMOUNT>\r\n`);
      crms400CWriteStream.write(`               <PERFORMANCE_REPAYMENT_STATUS>${jsonresponse1[i].repayagreemode}</PERFORMANCE_REPAYMENT_STATUS>\r\n`);
      crms400CWriteStream.write(`               <TOTAL_BANK_INDUCED_DEBIT_BANK_CHARGES>${((jsonresponse1[i].tbibankcharges)).toFixed(2)}</TOTAL_BANK_INDUCED_DEBIT_BANK_CHARGES>\r\n`);
      crms400CWriteStream.write(`               <TOTAL_BANK_INDUCED_CREDIT_WRITEOFF>${((jsonresponse1[i].tbicreditwriteoff)).toFixed(2)}</TOTAL_BANK_INDUCED_CREDIT_WRITEOFF>\r\n`);
      crms400CWriteStream.write(`               <TOTAL_BANK_INDUCED_CREDIT_DRAWDOWN>${((jsonresponse1[i].tbicreditdrawdown)).toFixed(2)}</TOTAL_BANK_INDUCED_CREDIT_DRAWDOWN>\r\n`);
      crms400CWriteStream.write(`               <TOTAL_CUSTOMER_INDUCED_CREDIT>${((jsonresponse1[i].tcicredit)).toFixed(2)}</TOTAL_CUSTOMER_INDUCED_CREDIT>\r\n`);
      crms400CWriteStream.write(`               <TOTAL_CUSTOMER_INDUCED_CREDIT_TRN_TYPE>${jsonresponse1[i].tcicredittrntype}</TOTAL_CUSTOMER_INDUCED_CREDIT_TRN_TYPE>\r\n`);
      crms400CWriteStream.write(`               <TOTAL_CUSTOMER_INDUCED_DEBIT>${((jsonresponse1[i].tcidebittrxn)).toFixed(2)}</TOTAL_CUSTOMER_INDUCED_DEBIT>\r\n`);
      crms400CWriteStream.write(`               <TOTAL_CUSTOMER_INDUCED_DEBIT_TRN_TYPE>${jsonresponse1[i].tcidebittrntype}</TOTAL_CUSTOMER_INDUCED_DEBIT_TRN_TYPE>\r\n`);
      crms400CWriteStream.write(`               <UNAMORTIZED_CREDIT_CHARGES>${((jsonresponse1[i].unamortisedcredchgs)).toFixed(2)}</UNAMORTIZED_CREDIT_CHARGES>\r\n`);
      crms400CWriteStream.write(`               <LIQUIDATION>${jsonresponse1[i].liquidation}</LIQUIDATION>\r\n`);
      crms400CWriteStream.write(`        </CALLREPORT_DATA>\r\n`);
    }
      crms400CWriteStream.write(`    </BODY>\r\n`);
      crms400CWriteStream.write(`    <FOOTER>\r\n`);      
      crms400CWriteStream.write(`         <AUTH_SIGNATORY>\r\n`);
      crms400CWriteStream.write(`               <NAME>${jsonresponse2.authsign1}</NAME>\r\n`);
      crms400CWriteStream.write(`               <DESIGNATION>${jsonresponse2.designation1}</DESIGNATION>\r\n`);
      crms400CWriteStream.write(`               <POSITION>${jsonresponse2.position}</POSITION>\r\n`);
      crms400CWriteStream.write(`               <DATE>${jsonresponse2.reportdate.substring(8,10)+"-"+jsonresponse2.reportdate.substring(5,7)+"-"+jsonresponse2.reportdate.substring(0,4)}</DATE>\r\n`);
      crms400CWriteStream.write(`               <TEL_NO>${jsonresponse2.telephonenumber1}</TEL_NO>\r\n`);
      crms400CWriteStream.write(`               <EXTN>${jsonresponse2.extention1}</EXTN>\r\n`);                                    
      crms400CWriteStream.write(`         </AUTH_SIGNATORY>\r\n`);
      crms400CWriteStream.write(`         <CONTACT_DETAILS>\r\n`);
      crms400CWriteStream.write(`               <NAME>${jsonresponse2.contactname}</NAME>\r\n`);
      crms400CWriteStream.write(`               <DESIGNATION>${jsonresponse2.designation2}</DESIGNATION>\r\n`);
      crms400CWriteStream.write(`               <DATE>${jsonresponse2.reportdate.substring(8,10)+"-"+jsonresponse2.reportdate.substring(5,7)+"-"+jsonresponse2.reportdate.substring(0,4)}</DATE>\r\n`);
      crms400CWriteStream.write(`               <TEL_NO>${jsonresponse2.telephonenumber2}</TEL_NO>\r\n`);
      crms400CWriteStream.write(`               <EXTN>${jsonresponse2.extention2}</EXTN>\r\n`);                                    
      crms400CWriteStream.write(`         </CONTACT_DETAILS>\r\n`);                  
      crms400CWriteStream.write(`         <DESC/>\r\n`);
      crms400CWriteStream.write(`         <PREPARED_BY>${jsonresponse2.preparedby}</PREPARED_BY>\r\n`);
      crms400CWriteStream.write(`         <AUTH_BY/>\r\n`);
      crms400CWriteStream.write(`         <MLR_OFFICER_CODE/>\r\n`);
      crms400CWriteStream.write(`         <HEAD_OFFICE_ADDRESS>${jsonresponse2.bankname}</HEAD_OFFICE_ADDRESS>\r\n`);
      crms400CWriteStream.write(`         <TEL_NO>${jsonresponse2.bankscontactphone}</TEL_NO>\r\n`);
      crms400CWriteStream.write(`         <DATE/>\r\n`);
      crms400CWriteStream.write(`         <BRANCH_MANAGER/>\r\n`);
      crms400CWriteStream.write(`         <PREPARED_DATE>${jsonresponse2.reportdate.substring(8,10)+"-"+jsonresponse2.reportdate.substring(5,7)+"-"+jsonresponse2.reportdate.substring(0,4)}</PREPARED_DATE>\r\n`);
      crms400CWriteStream.write(`         <CHECKED_BY>${jsonresponse2.authsign1}</CHECKED_BY>\r\n`);
      crms400CWriteStream.write(`         <CHECKED_DATE>${jsonresponse2.reportdate.substring(8,10)+"-"+jsonresponse2.reportdate.substring(5,7)+"-"+jsonresponse2.reportdate.substring(0,4)}</CHECKED_DATE>\r\n`);
      crms400CWriteStream.write(`    </FOOTER>\r\n`);            
      crms400CWriteStream.write(`</CALLREPORT>`);            
      //await fs.createWriteStream('CRMS300.xml');
      //await fs.writeFile('mynewfile3A.txt', jsonresponse, function (err) {
        //if (err) throw err;
        //console.log('Saved!');
      //});  
    }
    catch(err){
      console.log("Error", err)
    }
      
      console.log("Functions Ends")
  }
  export default write400Cdata