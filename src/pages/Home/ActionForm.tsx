import { yupResolver } from '@hookform/resolvers/yup'
import { ReactNode, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from 'theme/Buttons'
import NumberInputField from 'theme/InputField/NumberInputField'
import SliderInput from 'theme/SliderInput'
import { Box, Flex, Type } from 'theme/base'

import { BackTestFormValues, backTestFormSchema, fieldName } from './type'
import { useBalance, useInkathon } from '@scio-labs/use-inkathon'

export default function ActionForm({ isLong = true }: { isLong?: boolean }) {
  const { activeAccount } = useInkathon()
  const balanceData = useBalance(activeAccount?.address)
  const {
    control,
    watch,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<BackTestFormValues>({
    resolver: yupResolver(backTestFormSchema),
    defaultValues: {
      leverage: 2,
    },
  })

  const onSubmit: SubmitHandler<BackTestFormValues> = (data) => {
    console.log(data)
  }

  const amount = watch(fieldName.amount)
  const size = watch(fieldName.size)
  const leverage = watch(fieldName.leverage)

  useEffect(() => {
    setValue(fieldName.size, amount * getValues(fieldName.leverage))
  }, [amount, getValues, setValue])

  useEffect(() => {
    setValue(fieldName.amount, size / getValues(fieldName.leverage))
  }, [size, getValues, setValue])

  useEffect(() => {
    setValue(fieldName.size, leverage * getValues(fieldName.amount))
  }, [leverage, getValues, setValue])

  return (
    <Box mt={3}>
      <NumberInputField
        block
        name={fieldName.amount}
        control={control}
        label="Pay"
        annotation={`Balance: ${balanceData?.balanceFormatted ? balanceData.balanceFormatted : '--'}`}
        suffix={<InputSuffix>USD</InputSuffix>}
        error={errors.amount?.message}
        placeholder={'Enter amount'}
      />

      <NumberInputField
        block
        name={fieldName.size}
        control={control}
        label={isLong ? 'Long' : 'Short'}
        suffix={<InputSuffix>USD</InputSuffix>}
        error={errors.size?.message}
        sx={{ mt: 2 }}
        placeholder={'Enter position size'}
      />
      <Box mt={2} mb={4}>
        <Flex mb={2} alignItems="center" justifyContent="space-between">
          <Type.Caption>
            Leverage Slider:{' '}
            <Box as="span" color="primary1">
              x {leverage}
            </Box>
          </Type.Caption>
        </Flex>
        <SliderInput
          name={fieldName.leverage}
          control={control}
          error={errors.leverage?.message}
          minValue={2}
          maxValue={20}
          stepValue={1}
          marksStep={2}
          marksUnit={'x'}
        />
      </Box>

      <Box mt={3}>
        <ContenItem title={'Leverage'} value={`${leverage}x`} />
      </Box>

      <Button mt={4} block variant={'primary'} onClick={handleSubmit(onSubmit)}>
        {isLong ? 'Open Long Position' : 'Open Short Position'}
      </Button>
    </Box>
  )
}

function InputSuffix({ children }: { children: ReactNode }) {
  return <Type.Caption color="neutral2">{children}</Type.Caption>
}

function ContenItem({ title, value }: { title: string; value: string }) {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'}>
      <Type.Body color="neutral3">{title}</Type.Body>
      <Type.Body color="neutral1">{value}</Type.Body>
    </Flex>
  )
}
