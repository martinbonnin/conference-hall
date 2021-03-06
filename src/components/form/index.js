import renderField from './renderField'

export const input = renderField('input')
export const select = renderField('select')
export const textarea = renderField('textarea')
export const address = renderField('address')
export const dayPicker = renderField('dayPicker')
export const dayRangePicker = renderField('dayRangePicker')
export const toggle = renderField('toggle')
export const markdownInput = renderField('markdown-input')

export { default as checkbox } from './renderCheckbox'
export { default as radio } from './renderRadio'
export { default as SubmitButton } from './submitButton'
export { default as RadioGroup } from './radioGroup'
export { default as itemsWithModal } from './itemsWithModal'
export { default as Label } from './label'
