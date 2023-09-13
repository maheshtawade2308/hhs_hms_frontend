const API_BASE_URL = "http://localhost:8080/api";

export const APIS ={

    //Form save these api are from hhs_hms which is backend project 
    PROPERTIES:`${API_BASE_URL}/properties`,
    REGISTER:`${API_BASE_URL}/regstr`,
    COMPANYNAME:`${API_BASE_URL}/companyNames`,


     //Form save these api are from hhs which is backend project
     CLOUDUPLOAD:`${API_BASE_URL}/cloud-upload`,//multiple image are uploaded to the cloud not create in frontend


     CREATECOMPANY:`${API_BASE_URL}/create`,//Post-method for company 
     SAVECOMPANY:`${API_BASE_URL}/company`,//PutMapping
     ALLCOMPANYNAME:`${API_BASE_URL}/getall`,
     GETPROPBYCMPNYID:`${API_BASE_URL}/companiesById`,// Get company data by Id 
     PROPERTYPHOTOS:`${API_BASE_URL}/property-photo`,//upload properties photo with particular company

     //tenants
     CREATETENANT:`${API_BASE_URL}/tenants`,//Post-method
     GETALLTENANT:`${API_BASE_URL}/tenants`,// Get-method
     GETTENANTBYID:`${API_BASE_URL}/tenants`,// Get specific tenants by ID
     UPDATETENANTBYID:`${API_BASE_URL}/tenants`,// Update an existing tenants
     DELETETENANTBYID:`${API_BASE_URL}/tenants`,//Delete an tenants  by ID

     // inventory 
     CREATEINVENTORY: `${API_BASE_URL}/inventory`,//Post-method
     GETALLINVENTORY:`${API_BASE_URL}/inventory`,// Get-method
     GETINVENTORYITEMBYID:`${API_BASE_URL}/inventory`,// Get specific inventory item by ID
     UPDATEINVENTORYITEMBYID:`${API_BASE_URL}/inventory`,// Update an existing inventory item
     DELETEINVENTORYITEMBYID:`${API_BASE_URL}/inventory`,//Delete an inventory item by ID

      // daybook
     CREATEDAYBOOK:  `${API_BASE_URL}/daybook`,//Post-method
     GETALLDAYBOOK:`${API_BASE_URL}/daybook`,// Get-method
     GETDAYBOOKBYID:`${API_BASE_URL}/daybook`,// Get specific day book entry by ID
     UPDATEDAYBOOKBYID:`${API_BASE_URL}/daybook`,// Update an existing day book entry
     DELETEDAYBOOKBYID:`${API_BASE_URL}/daybook`,//Delete a day book entry by ID

     //payroll
     CREATEPAYROLL: `${API_BASE_URL}/payroll`,//Post-method
     GETALLPAYROLL:`${API_BASE_URL}/payroll`,// Get-method
     GETPAYROLLBYID:`${API_BASE_URL}/payroll`,// Get specific payroll entry by ID
     UPDATEPAYROLLBYID:`${API_BASE_URL}/payroll`,//Update an existing payroll entry
     DELETEPAYROLLBYID:`${API_BASE_URL}/payroll`,//Delete a payroll entry by ID


}