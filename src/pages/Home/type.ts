import * as yup from 'yup'

export interface BackTestFormValues {
  amount: number
  size: number
  leverage: number
}

export const fieldName: { [key in keyof BackTestFormValues]: keyof BackTestFormValues } = {
  amount: 'amount',
  size: 'size',
  leverage: 'leverage',
}

export const backTestFormSchema = yup.object({
  leverage: yup.number().min(2).max(20).label('Leverage'),
  amount: yup.number().required().min(10).max(10000).label('Amount'),
  size: yup.number().required().min(20).max(100000).label('Size Volume'),
})
