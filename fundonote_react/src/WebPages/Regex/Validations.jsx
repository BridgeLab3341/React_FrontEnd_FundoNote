export const validFirstName =new RegExp('^[A-Z]{1,}[A-Za-z]{3,}$');
export const validLastName=new RegExp('^[A-Za-z]{1,}$');
export const validEmail=new RegExp('[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const validPassword=new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');
