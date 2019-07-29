import Button, { META as ButtonMeta } from './button'
import Table, { META as TableMeta } from './table'
import Radio, { META as RadioMeta } from './radio'
export const GROUP = {
  BUTTON: { NAME: 'Button 按钮', META: ButtonMeta },
  TABLE: { NAME: 'Table 表格', META: TableMeta },
  RADIO: { NAME: 'Radio 单选框', META: RadioMeta }
}
export default {
  ...Button,
  ...Table,
  ...Radio
}
