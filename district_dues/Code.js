function doGet() {
    return HtmlService
        .createTemplateFromFile('Index')
        .evaluate();
  }
  
  function getTimestamp_ () {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
  
  var PAYMENT_SHEET_ID="1wK-t7CXMdUosDvygSbZGUIj5Rgmnn22cRzZZEzdkplQ"
  
  function AddFirstPayment(req) {
      var spreadsheet = SpreadsheetApp.openById(PAYMENT_SHEET_ID);
      var sheet = spreadsheet.getSheetByName("First Instalment")
  
      sheet.appendRow([
        getTimestamp_(),
        req.clubName,
        req.treasurerName,
        req.mRemittedLY,
        req.mResignedCY,
        req.mInductedCY,
        req.currentClubMembers,
        req.paymentMembers,
        req.paymentIIW,
        req.paymentAssociation,
        req.paymentTriennial,
        req.paymentSubtotal,
        req.paymentOutsideGST,
        req.paymentTotal,
        req.paymentDistrict,
        req.paymentDue,
        req.paymentAmount,
        req.paymentBankBranch,
        req.paymentDate,
        req.paymentReference,
      ])
  
      var data =        
      {
        status: "success",
        msg:"updated content",
        tasks:[],  
        row_id:1,      
      }; 
       
      return data;
  }
  