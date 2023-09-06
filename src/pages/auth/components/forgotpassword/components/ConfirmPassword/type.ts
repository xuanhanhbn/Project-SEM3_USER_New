export interface requestInput {
  newPassword: string;
  confirmNewPassword:string
}
export interface responseInput {
  status:number
}
export const renderInput = [
  {
    id:1,
    field:'newPassword',
    label:'New Password',
  },
  {
    id:2,
    field:'confirmNewPassword',
    label:'Confirm New Password',
  }
]